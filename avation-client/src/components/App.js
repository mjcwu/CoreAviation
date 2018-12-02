import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import CoreAviationSearch from "./CoreAviationSearch";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/" exact component={WelcomePage}/>
            <Route path="/coreaviation/search" exact component={CoreAviationSearch}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;