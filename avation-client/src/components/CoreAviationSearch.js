import React, { Component } from "react";
import GoogleApiWrapper from "./GoogleMap/GoogleApiWrapper"
import { Aviation } from "../request";

class CoreAviationSearch extends Component {
  constructor(props){
    super(props);

    
  }

  componentDidMount() {
    // const id = this.props.match.params.id;
    // Aviation.flightSearch().then(flightInfo => {
    //   console.log(flightInfo)
    // });
  }

  render(){
    return(
    <main className="CoreAviationSearch">
      <h1>🛫 Flight Search! 🛬</h1>

      <GoogleApiWrapper />
    </main>
    );
  }
}


export default CoreAviationSearch;