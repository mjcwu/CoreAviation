import React, { Component } from "react";
import { Aviation } from "../request";

class CoreAviationData extends Component {
  constructor(props){
    super(props);

    this.state = {
      longitude: null,
      latitude: null,
      direction: null,
      departure: null,
      arrival: null,
      aircraftype: null,
      airline: null,
      flight: null,
      flightNum: null,
      aircraftReg: null
    };
    this.userInput = this.userInput.bind(this);
  }
  render(){
    return(
      <main>
        
      </main>
    );
  }
}

export default CoreAviationData;
