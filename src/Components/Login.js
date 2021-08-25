import React from "react"

import "./Login.css";


function Login() {
    return (
       
            <div id="loginform">
               <FormHeader title="CommunIT" /> 
              <FormHeader2 title="Login" />
              <Form />
         
            </div>
     
    )
}

const FormHeader = props => (
    <h1 id="headerTitle">{props.title}</h1>
);

const FormHeader2 = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
    <div>
      <FormInput description="Username" placeholder="Enter your username" type="text" />
      <FormInput description="Password" placeholder="Enter your password" type="password"/>
      <FormButton title="Log in"/>
    </div>
 );
 
 const FormButton = props => (
   <div id="button" class="row1">
     <button>{props.title}</button>
   </div>
 );
 
 const FormInput = props => (
   <div class="row1">
     <label>{props.description}</label>
     <input type={props.type} placeholder={props.placeholder}/>
   </div>  
 );
 

export default Login
