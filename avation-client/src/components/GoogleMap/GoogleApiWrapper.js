import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import API_Key from '../api_key'
import B747Icon from './B747Icon'


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
  
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  onMouseoverMarker(props, marker, e) {
    marker.setState.fillColor="#FF0000";
  }

  render() {
    const google = window.google
    
    const icon = {
      path: B747Icon.path,
      // url: B747png,
      fillColor: '#808000',
      fillOpacity: 1,
      scale: 0.005,
      rotation: this.props.flightInfo.direction-180,
      anchor: new google.maps.Point(4666.66, 4666.66),
      strokeWeight: 0.5,
    }

    return (
      <div className="googleContent">
        <Map google={this.props.google}
          onClick={this.onMapClicked}
          className={'map'}
          zoom={15}
          initialCenter={{
            lat: 49.1967,
            lng: -123.1815
          }}
          center={{
            lat: this.props.flightInfo.latitude, lng:this.props.flightInfo.longitude,
          }}
          >
          <Marker
            google = {this.props.google}
            onClick = {this.onMarkerClick}
            position={{lat: this.props.flightInfo.latitude, lng:this.props.flightInfo.longitude}}
            icon={ icon }
            // onMouseover={this.onMouseoverMarker}
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