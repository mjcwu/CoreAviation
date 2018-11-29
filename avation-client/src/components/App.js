import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/coreavation/search" exact component={CoreAvationSearch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;