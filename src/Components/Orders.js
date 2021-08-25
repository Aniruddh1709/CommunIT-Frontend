import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Orders = ()=>{
    return(
     <Container >
         <Row >
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
           <IndividualOrders/>
        

         </Row>
     </Container>
    )
}

const dummyData={flat:"Room",

                food:["Idli","dosa","Tea Powder","Sugar","Idli","dosa","Tea Powder","Sugar","Idli","dosa","Tea Powder","Sugar"]
}

const IndividualOrders = ({flat,Orders}) =>{
    return (
        <Col lg={3} sm={3} className="pt-3" style={{justifyContent:"center"}}>
            <div style={{border:"2px solid #736699",borderRadius:"5px"}}>
            <Row style={{margin:"auto"}}>
              <Col className="pt-1" lg={12} sm={12} style={{fontSize:"1.25rem",height:"35px" ,background:"#2ed1d0" ,maxWidth:"100%",borderRadius:"5px",textAlign:"center"}}>Flat No: {dummyData.flat}</Col>
            </Row>
            <Row style={{margin:"auto"}}>
            <Col lg={12} sm={12} style={{height:"300px" ,background:"#f8f8ff" ,maxWidth:"100%",borderRadius:"5px"}}>
           
          
            <div style={{overflowY:"auto", height:"250px"}}>
                {dummyData.food.map((data,key)=>(
                    
                        <Row style={{width:"100%",paddingTop:"5px"}}>
                        <Col lg={8} sm={8} xs={8}>
                        
                            <label for="name">{data}</label>
                        </Col>
                        <Col lg={2} sm={2} xs={2}>
                            <input type="checkbox" class="regular-checkbox" name="name" />
                        </Col>
                   </Row>))
                    
                }

           

               </div>
               <div style={{ height:"50px",paddingTop:"10px" }}>
               <Row style={{}}>
                    <Col lg={9} sm={9} xs={9} >
                    
                    <input type="text" value="comments" style={{maxWidth:"100%"}}/>
                    </Col>
                    <Col lg={3} sm={3} xs={3}>
                    <input type="Submit" value="&#128077;" style={{maxWidth:"100%"}}/>
                    </Col>
               </Row>
               
               </div>
             
            </Col>
           </Row>
           </div>
        </Col>
    )
}

export default Orders;