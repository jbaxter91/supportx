import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import React, {useContext} from 'react';
import {AuthContext} from './Context/AuthContext';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import OpenAPI from './components/OpenAPI';

function App() {
  const {agent, setAgent, isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  //console.log(agent);
  //console.log(isAuthenticated);
  return (
    <div>
      <UnPrivateRoute path="/" exact component={Home} />
      <UnPrivateRoute path="/signup" exact component={Signup} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <Route path="/test/:companyID" exact component={OpenAPI} />
    </div>
  );
}

export default App;
