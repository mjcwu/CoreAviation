import React, { Component } from "react";
import GoogleApiWrapper from "./GoogleMap/GoogleApiWrapper"
import { Aviation } from "../request";
import AviationInput from "./AviationInput";

class CoreAviationSearch extends Component {
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
      aircraftRegi: null
    };
    this.userInput = this.userInput.bind(this);
  }

  userInput(props){
    Aviation.flightSearch(props.flightNum).then(flightInfo => {
      console.log(flightInfo[0].geography.longitude)
      this.setState({
        longitude: flightInfo[0].geography.longitude,
        latitude: flightInfo[0].geography.latitude,
        direction: flightInfo[0].geography.direction,
        departure: flightInfo[0].departure.iataCode,
        arrival: flightInfo[0].arrival.iataCode,
        aircraftype: flightInfo[0].aircraft.iataCode,
        airline: flightInfo[0].airline.iataCode,
        flight: flightInfo[0].flight.iataNumber
      })
    });
  }

  render(){
    return(
    <main>
      <div className="CoreAviationSearch">
        <div className="search-header">
          <h1>🛫 Flight Search! 🛬</h1>
        </div>
        <div className="search-main">
          <div className="GoogleMapWrapper">
            <GoogleApiWrapper 
            flightInfo={this.state}
            />
          </div>   
        </div>
        <div className="search-div-1">
          <div className="AviationInput">
            <AviationInput onSubmit={this.userInput}/>
          </div>
        </div>
        
      </div>
    </main>
    );
  }
}


export default CoreAviationSearch;