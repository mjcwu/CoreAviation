import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;