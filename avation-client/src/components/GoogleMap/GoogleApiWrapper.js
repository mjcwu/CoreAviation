import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import API_Key from '../api_key'
import B747Icon from './B747.svg'

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
  
  render() {
    const google = window.google
    const rotate = 100;
    const style = {
      width: '75%',
      height: '75%'
    }

    // const icon = {
    //   path: "M1231 2531 c-49 -68 -81 -301 -81 -583 l0 -127 -107 -96 -108 -95 -5 32 c-5 32 -6 33 -55 33 l-50 0 -3 -63 c-2 -35 2 -69 7 -76 8 -9 -24 -42 -117 -124 l-127 -111 -5 32 c-5 31 -7 32 -59 35 l-53 3 3 -83 4 -84 -138 -123 -137 -123 1 -126 c2 -113 3 -122 12 -79 l10 47 296 168 c282 161 303 171 458 220 88 29 163 52 166 52 3 0 7 -159 10 -352 4 -253 9 -372 20 -421 l14 -68 -159 -150 -158 -151 0 -59 c0 -38 4 -59 12 -59 6 0 87 23 180 51 94 28 171 49 172 47 2 -2 9 -24 16 -50 9 -34 18 -48 30 -48 12 0 21 14 30 48 7 26 14 48 16 50 1 2 78 -19 172 -47 93 -28 174 -51 180 -51 8 0 12 21 12 59 l0 59 -158 150 -158 151 14 73 c10 51 16 179 19 421 3 191 7 347 10 347 3 0 78 -23 166 -52 155 -49 176 -59 458 -220 l296 -168 10 -47 c9 -43 10 -34 12 79 l1 126 -137 123 -138 123 4 84 3 83 -53 -3 c-52 -3 -54 -4 -59 -35 l-5 -32 -127 111 c-93 82 -125 115 -117 124 5 7 9 41 7 76 l-3 63 -50 0 c-49 0 -50 -1 -55 -33 l-5 -32 -106 94 -106 94 -6 218 c-8 254 -26 386 -65 464 -23 47 -31 55 -58 58 -26 3 -36 -3 -53 -27z",
    //   fillColor: '#FF0000',
    //   fillOpacity: 1,
    //   anchor: new google.maps.Point(22,22),
    //   strokeWeight: 0,
    //   scale: .015,
    //   rotation: rotate
    // }

    return (
      <div style={style}>
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
            position={{lat: 49.1967, lng: -123.1815}}
            icon={{
              url: B747Icon,
              scaledSize: new google.maps.Size(22, 22),
              anchor: new google.maps.Point(10, 10),
              rotation: rotate,
            }} 
          />
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <p>
                  Flight: AC033 <br/>
                <small>
                  Model: 777-200 <br/>
                  Airline: Air Canada <br/>
                  Departure: YVR <br/>
                  Arrival: SYD <br/>
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