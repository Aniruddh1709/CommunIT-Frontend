import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { Link } from "react-router-dom"

function History() {
  const random=[{"Date_Time":"27:27:27","Phone_Number":"9999","Flat_No":"999","Order":"milk,milk","Comment":"Comment"},{"Date_Time":"27:27:27","Phone_Number":"9999","Flat_No":"999","Order":"milk,milk","Comment":"Comment"},{"Date_Time":"27:27:27","Phone_Number":"9999","Flat_No":"999","Order":"milk,milk","Comment":"Comment"}]
  const [data,setData]=React.useState(random);
  React.useEffect(()=>{
 
    
axios.get(`http://127.0.0.1:5000/history`, {params:{user:sessionStorage.getItem("user"),password:sessionStorage.getItem("password")}})
.then(res => {
  console.log(res);
  console.log(res.data);
  setData(res.data)
})
  })
    return (
        <div  style={{paddingBottom:"30px"}}>
        <div>
          <Container className="navBar">
            <Row className="pt-5">
            <Col lg={6} sm={12} className="butcol pt-1"><Link style={{textDecoration:"None"}} to="/orders"><div  className="customButton pt-2 pb-2 px-2 ">Orders</div></Link></Col>
              <Col lg={6} sm={12} className="butcol pt-1"><Link style={{textDecoration:"None"}} to="/history"><div className="customButton pt-2 pb-2 px-2">History</div></Link></Col>
            </Row>
          </Container>
        </div>
      <div className="hrTag">
        <hr className="fade-2"/>
      </div>
      <Container>
      <Table responsive>
  <thead>
    <tr>
      <th>Serial No.</th>
     
        <th >Mobile Number</th>
        <th >Room Number</th>
        <th>Order Message</th>
        <th>Comments</th>
        <th>Date and Time</th>
        
     
    </tr>
  </thead>
  <tbody>
  
      {data && data.reverse().map((data,key)=>(
                <>            
                    <tr>
                        <td>{key+1}</td>
                        <td> {data.Phone_Number}</td>
                        <td> {data.House_Number}</td>
                        <td> {data.List_Of_Items}</td>
                        <td> {data.Status}</td>
                        <td> {data.Date_Time}</td>
                        </tr>
                </>
      ))}
    
     
    
  </tbody>
</Table>
      </Container>
      
      </div>
    )
}

export default History
