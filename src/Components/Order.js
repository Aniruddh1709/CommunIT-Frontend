import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Orders from "./Orders"
import { Link } from "react-router-dom"
import "./Order.css"



function Order() {
  
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
          <Orders />  
        </div>
    )
}





export default Order
