import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import API_Key from '../api_key'
import B747Icon from './B747Icon'


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    const google = window.google
    this.state={
      path: B747Icon.path,
      fillColor: '#808000',
      fillOpacity: 1,
      scale: 0.004,
      rotation: this.props.flightInfo.direction-180,
      anchor: new google.maps.Point(4666.66, 4666.66),
      strokeWeight: 0.5,
    }

    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.onMouseover = this.onMouseover.bind(this);
    // this.onMouseout = this.onMouseout.bind(this);
}

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true,
    fillColor: "#B22222"
  });
  
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        fillColor: '#808000',
      })
    }
  };


  // onMouseover(props, marker, e) {
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true,
  //     fillColor: "#B22222"
  // });
  // }

  // onMouseout(props, marker, e) {
  //   if (this.state.showingInfoWindow) {
    //   this.setState({
    //     showingInfoWindow: false,
    //     activeMarker: null,
    //     fillColor: '#808000',
    //   })
    // }
  // }
      
  render() {
    const google = window.google
    
    const icon = {
      path: B747Icon.path,
      fillColor: this.state.showingInfoWindow? '#B22222':"#808000",
      fillOpacity: 1,
      scale: 0.004,
      rotation: this.props.flightInfo.direction-180,
      anchor: new google.maps.Point(4666.66, 4666.66),
      strokeWeight: 0.5,
    }
    
    
    return (
      <div className="googleContent">
        
        <Map google={this.props.google}
          onClick={this.onMapClicked}
          className={'map'}
          zoom={10}
          initialCenter={{
            lat: 49.1967,
            lng: -123.1815
          }}
          center={{
            lat: this.props.flightInfo.latitude, 
            lng: this.props.flightInfo.longitude,
          }}
          >
          <Marker
            google = {this.props.google}
            onClick = {this.onMarkerClick}
            name={'Current location'}
            position={{
              lat: this.props.flightInfo.latitude, 
              lng: this.props.flightInfo.longitude}}

            // ================
            // position={{
            //   lat: 49.1967,
            //   lng: -123.1815}}
            // ====================
            icon={ icon }
            // onMouseover={this.onMouseover}
            />
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div className="flightInfo">
              <p>
                  Flight: {this.props.flightInfo.flight} <br/>
                <small>
                  Type: {this.props.flightInfo.aircraftype} <br/>
                  Airline: {this.props.flightInfo.airline} <br/>
                  Departure: {this.props.flightInfo.departure} <br/>
                  Arrival: {this.props.flightInfo.arrival} <br/>
                </small>
              </p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
  // apiKey: API_Key.googleMapAPI
})(MapContainer)