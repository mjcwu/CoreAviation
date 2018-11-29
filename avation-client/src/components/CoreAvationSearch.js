import React, { Component } from "react";
import { Link } from "react-router-dom";
import API_Keys from "./api_key";
import {GoogleMap} from "./GoogleMap/GoogleMap"

class CoreAvationSearch extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <main>
      <h1>🛫 Flight Search! 🛬</h1>
      <GoogleMap />
    </main>
    );
  }
}


export default CoreAvationSearch;