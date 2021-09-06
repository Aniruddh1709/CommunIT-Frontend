import React from "react"
import { Link } from "react-router-dom"
import "./Login.css";


function Login() {
  const [password,setPassword]=React.useState("")
  const [user,setUser]=React.useState("")
  const handleLogin =()=>{
   
    sessionStorage.setItem("user",user)
    sessionStorage.setItem("password",password)
   
  }
  const handleUser =(e)=>{
    // console.log(e.target.value)
    setUser(e.target.value)
   
}
const handlePassword =(e)=>{
  // console.log(e.target.value)
  setPassword(e.target.value)
 
}
    return (
       
            <div id="loginform">
              <FormHeader title="CommunIT" /> 
              <FormHeader2 title="Login" />
            <div>
          
                  <div class="row1">
                    <label>Username</label>
                  
                    <input type="text" onChange={handleUser} placeholder="Enter Username"  value={user} style={{maxWidth:"100%"}}/>
                  </div> 
                  <div class="row1">
                    <label>Password</label>
                    <input type="text" onChange={handlePassword} placeholder="Enter Password"  value={password} style={{maxWidth:"100%"}}/>
                  </div> 
                  <div id="button" class="row1">
               <button  style={{textDecoration:"None"}} onClick={handleLogin}><Link  style={{textDecoration:"None"}}  to="/orders">Login</Link></button>
                  </div>
                
            </div>
            
            </div>
            
     
    )
}

const FormHeader = props => (
    <h1 id="headerTitle">{props.title}</h1>
);

const FormHeader2 = props => (
    <h2 id="headerTitle">{props.title}</h2>
);



 

 

export default Login
