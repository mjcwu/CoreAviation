import API_KEY from './components/api_key'

const flightIATA = `flightIata=`;
const flightTrackerURL = `http://aviation-edge.com/v2/public/flights?key=${API_KEY.aviationEdgeAPI}&`;

export const Aviation = {
  flightSearch() {
    return fetch (`${flightTrackerURL}${flightIATA}BR10`).then(res => res.json()).catch(error=>console.log(error))
  },
};
