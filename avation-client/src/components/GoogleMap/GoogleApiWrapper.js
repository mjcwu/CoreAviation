import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import API_Key from '../api_key'
import AircraftIcon from './boeing-747-icon-256.png';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '75%',
      height: '75%'
    }
    const google = window.google
    return (
      <div style={style}>
        <Map google={this.props.google}
          style={style}
          className={'map'}
          zoom={11}
          initialCenter={{
            lat: 49.1967,
            lng: -123.1815
          }}
          >
          <Marker
            name={'Your position'}
            position={{lat: 49.1967, lng: -123.1815}}
            icon={{ 
              url: AircraftIcon, // url
              scaledSize: new google.maps.Size(22, 22), // scaled size
              anchor: new google.maps.Point(10, 10) // anchor
             }} />
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
  // apiKey: API_Key.googleMapAPI
})(MapContainer)