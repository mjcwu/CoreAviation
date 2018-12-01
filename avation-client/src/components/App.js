import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import CoreAvationSearch from "./CoreAvationSearch";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App" style={{ textDecoration: 'none' }}>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={WelcomePage} style={{ textDecoration: 'none' }}/>
            <Route path="/coreavation/search" exact component={CoreAvationSearch} style={{ textDecoration: 'none' }}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;