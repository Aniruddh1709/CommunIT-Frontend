import React from "react"
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Orders = ()=>{
            
    const Sample=[{flat:"123",

      food:["Idli","dosa","Tea Powder","Sugar","Idli"]
},{flat:"234",

food:["Idli","dosa","Tea Powder"]
},{flat:"456",

food:["Idli","dosa","Tea Powder","Sugar","Idli","dosa","Tea Powder"]
},{flat:"789",

food:["Idli","dosa"]
}

      ]
   
    const [OrderData,setOrderData]=React.useState(Sample);
    React.useEffect(()=>{
       
        (async function() {
            try {
              axios.get(`http://communitenv-env.eba-zwydzqva.ap-south-1.elasticbeanstalk.com/orders`, 
              {params:{user:sessionStorage.getItem("user"),password:sessionStorage.getItem("password")}}).then(response=>  setOrderData(OrderData=>([...response.data])))
               .catch((err) => {
                  alert(err);
               });
            
            } catch (e) {
              console.error(e);
            }
          })();
          
               },[])
   
    const setOrders = (r,f) => {
        console.log(f.Check_List)
        var ord = f.filter(s=> s.House_Number!==r)
        setOrderData(ord)
            }
    
    return(
        
     <Container >
         <Row >
             {
             OrderData.map((d,key)=>(
                
                 <>
                 <IndividualOrders key={key} OrderData={OrderData} setOrders={setOrders}flat={d.House_Number} Orders={d && d.List_Of_Items} state={d.Check_List} Phone_Number={d.Phone_Number}/>
                 </>
             ))}

         </Row>
     </Container>
    )
}



const IndividualOrders = ({key,flat,Orders,setOrders,Phone_Number,OrderData,state}) =>{
   
    const [comment, setComment] = React.useState("");
    console.log(Phone_Number)
    const handleToggle = (e) =>{
   
            let lol=state;
      
            lol[e.target.name]=e.target.checked;
       
            OrderData.map((p,key)=>{
                if(p.House_Number===flat){
                    p.Check_List[key]=lol[key];
                }
            })
            console.log(OrderData);
}

const handleComment =(e)=>{
    setComment(e.target.value);
   
}
const handleOnSubmit = (e) =>{
    console.log(flat)
 
    let Data;
    for(let i=0;i<OrderData.length;i++){
        if(OrderData[i].House_Number===flat){
            Data=OrderData[i].Check_List
            break;
           
         }
    }
    
    var data ={
        flat:flat,
        List_Of_Items:Data,
        Comment:comment,
        Phone_Number:Phone_Number
    }
    const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }
    const getParams = (obj) => {
        const params = new URLSearchParams();
        const keys = Object.keys(obj);
        for(let k of keys){
            params.append(k, obj[k]);
        }
        return params;
    }
    console.log(Data.length)
   
    console.log(data);
 
    axios.post(`http://communitenv-env.eba-zwydzqva.ap-south-1.elasticbeanstalk.com/orders`, 
    getParams(data), config)
     .catch((err) => {
        alert(err);
     });
    
    
    
}
    return (
        
        <Col lg={3} md={6} sm={12} className="pt-3" style={{justifyContent:"center"}}>
            <div style={{border:"2px solid #736699",borderRadius:"5px"}}>
            <Row style={{margin:"auto"}}>
              <Col className="pt-1" lg={12} sm={12} style={{fontSize:"1.25rem",height:"35px" ,background:"#2ed1d0" ,maxWidth:"100%",borderRadius:"5px",textAlign:"center"}}>Flat No: {flat}</Col>
            </Row>
            <Row style={{margin:"auto"}}>
            <Col lg={12} sm={12} style={{height:"300px" ,background:"#f8f8ff" ,maxWidth:"100%",borderRadius:"5px"}}>
           <form onSubmit={handleOnSubmit}>
          
            <div style={{overflowY:"auto", height:"250px"}}>
                {Orders && Orders.map((data,key1)=>(
                    
                        <Row style={{width:"100%",paddingTop:"5px"}}>
                        <Col lg={8}  sm={8} xs={8}>
                        
                            <label for="name">{data}</label>
                        </Col>
                        <Col lg={2} sm={2} xs={2}>
                            <input type="checkbox" id="name" onChange={handleToggle} value={state[key1]} class="regular-checkbox" name={key1} />
                        </Col>
                   </Row>))
                    
                }

           
               </div>
               <div style={{ height:"50px",paddingTop:"10px" }}>
               <Row style={{}}>
                    <Col lg={9} sm={9} xs={9} >
                    
                    <input type="text" onChange={handleComment}  value={comment} style={{maxWidth:"100%"}}/>
                    </Col>
                    <Col lg={3} sm={3} xs={3}>
                    <input type="Submit" value="&#128077;" style={{maxWidth:"100%"}}/>
                    </Col>
               </Row>
               
               </div>
               </form>
            </Col>
           </Row>
           </div>
        </Col>
    )
}

export default Orders;