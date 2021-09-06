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
    const data=[];
    const [OrderData,setOrderData]=React.useState(Sample);
    React.useEffect(()=>{
        (async function() {
            try {
              const response = await axios.get(`http://127.0.0.1:5000/orders`,{user:sessionStorage.getItem("user"),password:sessionStorage.getItem("password")});
              setOrderData(OrderData=>([...response.data]))
              console.log(OrderData) 
            } catch (e) {
              console.error(e);
            }
          })();
              console.log(sessionStorage.getItem("user"))
              console.log(sessionStorage.getItem("password"))
               },[])
    console.log(OrderData) 
    const setOrders = (r) => {
        var ord = OrderData.filter(s=> s.flat!==r)
        console.log(ord);
        setOrderData(ord)
    }
    
    return(
        
     <Container >
         <Row >
             {
             OrderData.map((d,key)=>(
                
                 <>
                 <IndividualOrders setOrders={setOrders}flat={d.Flat_No} Orders={d && d.List_Of_Items} />
                 </>
             ))}

         </Row>
     </Container>
    )
}

const dummyData={flat:"Room",

                food:["Idli","dosa","Tea Powder","Sugar","Idli","dosa","Tea Powder","Sugar","Idli","dosa","Tea Powder","Sugar"]
}

const IndividualOrders = ({flat,Orders,setOrders,Phone_Number}) =>{
    // console.log(Orders.List_Of_Items)
    const [state, setState] = React.useState(new Array(Orders && Orders.split(",")).fill(false));
    const [comment, setComment] = React.useState("");

    const handleToggle = (e) =>{
            let lol=state;
            lol[e.target.name]=e.target.checked;
            setState(lol);
            // console.log(state);
}
const handleComment =(e)=>{
    setComment(e.target.value);
   
}
const handleOnSubmit = (e) =>{
    console.log(flat)
    e.preventDefault();
    let Data=state.map((s,key)=>{
        if(s){
            return Orders.split(",")[key]
          
        }
    })
    var data ={
        flat:flat,
        items:Data,
        comment:comment,
        Phone_Number:Phone_Number
    }
    setOrders(flat);
    axios.post(`http://127.0.0.1:5000/orders`,{data:data})
    console.log(data);
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
                {Orders && Orders.split(",").map((data,key)=>(
                    
                        <Row style={{width:"100%",paddingTop:"5px"}}>
                        <Col lg={8}  sm={8} xs={8}>
                        
                            <label for="name">{data}</label>
                        </Col>
                        <Col lg={2} sm={2} xs={2}>
                            <input type="checkbox" id="name" onChange={handleToggle} value={state[key]} class="regular-checkbox" name={key} />
                        </Col>
                   </Row>))
                    
                }

           
               {/* {Orders} */}
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