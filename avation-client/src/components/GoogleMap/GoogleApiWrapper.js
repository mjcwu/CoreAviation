import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import React, {Component} from 'react';
import API_Key from '../api_key';
import B747Icon from './B747Icon';
import B747Pic from '../images/B747.JPG';
import { Aviation } from "../../request";

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      combineCoord: []
    }

    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
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
  });
  
  
  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  };
  
  render() {
    const google = window.google
    const icon = {
      path: B747Icon.path,
      fillColor: this.state.showingInfoWindow? '#B22222':"#FF00FF",
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
          style = {{height: '70%', width: '100%'}}
          zoom={9}
          initialCenter={{
            lat: 49.1967,
            lng: -123.1815
          }}
          center={{
            lat: this.props.flightInfo.latitude, 
            lng: this.props.flightInfo.longitude,
          }}
          >
          
          { this.props.flightInfo.latitude? 
          <Marker
            google = {this.props.google}
            onClick = {this.onMarkerClick}
            name={'Current location'}
            position={{
              lat: this.props.flightInfo.latitude, 
              lng: this.props.flightInfo.longitude}} 
            icon={ icon }
          />: ''}
          
          <InfoWindow 
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div className="flightInfo">
              <div>
                <div className="flightInfoPic">
                  <img src={B747Pic} alt="B747Pic" style = {{
                    width: '250px',
                    height: 'auto'
                  }}/> 
                </div>
                <div className="flightInfoHeader">
                  <div className="flightInfoHeaderFlight">
                    {this.props.flightInfo.flight} <br/>
                  </div>
                  <div className="flightInfoHeaderAirline">
                    {this.props.flightInfo.airline} <br/>
                  </div>
                </div>
                <div className="flightInfoDestination">
                  <div className="flightInfoDep">
                    {this.props.flightInfo.departure} 
                  </div>
                  <div className="flightInfoArrow">
                    ➡
                  </div>
                  <div className="flightInfoArr">
                    {this.props.flightInfo.arrival} <br/>
                  </div>
                </div>
                <div className="flightInfoDestinationTitle">
                  <div className="flightInfoDepTitle">
                    Departure
                  </div>
                  <div className="flightInfoArrTitle">
                    Arrival <br/>
                  </div>
                </div>
                <div className="flightInfoDetail">
                  <div className="flightInfoModel">
                    <div className="flightInfoModelTitle">
                      Type: <br/>
                    </div>
                    <div className="flightInfoModelType">
                      {this.props.flightInfo.aircraftype} <br/>
                    </div>
                  </div>
                  <div className="flightInfoSpeed">
                    <div className="flightInfoSpeedTitle">
                      Speed: <br/>
                    </div>
                    <div className="flightInfoSpeedNum">
                      {this.props.flightInfo.speed} km/hr <br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: API_Key.googleMapAPI2
})(MapContainer)