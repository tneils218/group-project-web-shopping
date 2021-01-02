import React, { useState, useEffect } from "react";
import Login from './components/Login';
import Hero from './components/Hero';
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return ( 
  <div className ="App"> 
  
      <BrowserRouter>
        <Switch>
          <Route exact path="/logout" component={Hero}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
   
     
  </div>
  );
};

export default App;

