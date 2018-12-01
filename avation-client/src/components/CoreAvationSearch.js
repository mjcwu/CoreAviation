import React, { Component } from "react";
import { Link } from "react-router-dom";
import API_Keys from "./api_key";
import GoogleApiWrapper from "./GoogleMap/GoogleApiWrapper"

class CoreAvationSearch extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <main className="CoreAvationSearch">
      <h1>🛫 Flight Search! 🛬</h1>
      <GoogleApiWrapper />
    </main>
    );
  }
}


export default CoreAvationSearch;