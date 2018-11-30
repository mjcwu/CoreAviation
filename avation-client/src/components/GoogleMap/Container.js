import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import API_Key from '../api_key'
 
export class MapContainer extends Component {
  render() {
    const style = {
      width: '75%',
      height: '75%'
    }
    
    return (
      <div style={style}>
        <Map google={this.props.google}
          style={style}
          initialCenter={{
            lat: 49.1967,
            lng: -123.1815
          }}
          center={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={12}
          onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
  
          {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)