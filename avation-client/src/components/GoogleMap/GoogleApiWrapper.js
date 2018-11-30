import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import API_Key from '../api_key';

export class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>Map will go here</div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: API_Key.googleMapAPI
})(Container)