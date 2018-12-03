import API_KEY from './components/api_key'

const flightIATA = `flightIata=`;
const flightTrackerURL = `http://aviation-edge.com/v2/public/flights?key=${API_KEY.aviationEdgeAPI2}&`;

export const Aviation = {
  flightSearch(flightNum) {
    return fetch (`${flightTrackerURL}${flightIATA}${flightNum}`).then(res => res.json()).catch(error=>console.log(error))
  },
};
