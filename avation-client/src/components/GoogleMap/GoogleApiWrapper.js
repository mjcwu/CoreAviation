import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import API_Key from '../api_key'
import B747Icon from './B747Icon'


export class MapContainer extends Component {
  constructor(props){
    super(props);
    
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

  render() {
    const google = window.google
    const rotate = 100;
    const style = {
      width: '80%',
      height: '700px',
    }
    
    const icon = {
      path: B747Icon.path,
      // url: B747png,
      fillColor: '#808000',
      fillOpacity: 1,
      scale: 0.003,
      rotation: this.props.flightInfo.direction+180,
      anchor: new google.maps.Point(4666.66, 4666.66),
      strokeWeight: 0.5,
    }

    return (
      <div>
        <Map google={this.props.google}
          onClick={this.onMapClicked}
          style={style}
          className={'map'}
          zoom={13}
          initialCenter={{
            lat: 49.1967,
            lng: -123.1815
          }}
          >
          <Marker
            google = {this.props.google}
            onClick = {this.onMarkerClick}
            name={'Your position'}
            position={{lat: this.props.flightInfo.latitude, lng:this.props.flightInfo.longitude}}
            icon={ icon } 
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