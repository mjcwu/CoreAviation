import API_KEY from './components/api_key'

const flightIATA = `flightIata=`;
const regNum='regNum='
const flightTrackerURL = `http://aviation-edge.com/v2/public/flights?key=${API_KEY.aviationEdgeAPI3}&`;

export const Aviation = {
  flightNumSearch(flightNum) {
    return fetch (`${flightTrackerURL}${flightIATA}${flightNum}`).then(res => res.json()).catch(error=>console.log(error))
  },
  aircraftRegSearch(aircraftReg) {
    return fetch (`${flightTrackerURL}${regNum}${aircraftReg}`).then(res => res.json()).catch(error=>console.log(error))
  },
};
