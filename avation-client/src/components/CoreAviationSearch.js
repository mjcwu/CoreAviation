import React, { Component } from "react";
import GoogleApiWrapper from "./GoogleMap/GoogleApiWrapper"
import { Aviation } from "../request";
import AviationInput from "./AviationInput";
import { isNullOrUndefined } from "util";

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
      aircraftReg: null
    };
    this.userInput = this.userInput.bind(this);
  }

  userInput(props){
    
    if(props.flightNum){
      Aviation.flightNumSearch(props.flightNum).then(flightInfo => {
        this.setState({
          longitude: flightInfo[0].geography.longitude,
          latitude: flightInfo[0].geography.latitude,
          direction: flightInfo[0].geography.direction,
          departure: flightInfo[0].departure.iataCode,
          arrival: flightInfo[0].arrival.iataCode,
          aircraftype: flightInfo[0].aircraft.iataCode,
          airline: flightInfo[0].airline.icaoCode,
          flight: flightInfo[0].flight.iataNumber,
          speed: flightInfo[0].speed.horizontal
        })
      });
    } else {
      Aviation.aircraftRegSearch(props.aircraftReg).then(flightInfo => {
        console.log(flightInfo[0].geography.longitude)
        this.setState({
          longitude: flightInfo[0].geography.longitude,
          latitude: flightInfo[0].geography.latitude,
          direction: flightInfo[0].geography.direction,
          departure: flightInfo[0].departure.iataCode,
          arrival: flightInfo[0].arrival.iataCode,
          aircraftype: flightInfo[0].aircraft.iataCode,
          airline: flightInfo[0].airline.icaoCode,
          flight: flightInfo[0].flight.iataNumber,
          speed: flightInfo[0].speed.horizontal
        })
      });
    }
  }

  render(){
    return(
    <main>
      <div className="CoreAviationSearch">
        
        <div className="search-div-1">
          <div className="AviationInput">
            <AviationInput onSubmit={this.userInput}/>
          </div>
        </div>
        <div className="search-main">
          <div className="GoogleMapWrapper">
            <GoogleApiWrapper 
            flightInfo={this.state}
            />
          </div>   
        </div>
        
      </div>
    </main>
    );
  }
}


export default CoreAviationSearch;