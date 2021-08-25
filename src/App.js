import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Order from './Components/Order';
import History from "./Components/History";
import { Switch, Route } from "react-router-dom"
import './App.css';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/orders" component={Order} />
        <Route path="/history" component={History}/>
       
        </Switch>
    
   
    </div>
  );
}

export default App;
