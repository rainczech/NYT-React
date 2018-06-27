import React, { Component } from 'react';
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/saved" component={Saved}/>
      </Switch>
    </div>
  </Router>
)


export default App;
