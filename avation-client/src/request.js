import API_KEY from './components/api_key'

const flightIATA = `flightIata=`;
const regNum='regNum='

export const Aviation = {
  flightNumSearch(flightNum) {
    return fetch (`${API_KEY.aviationEdgeAPI}${flightIATA}${flightNum}`).then(res => res.json()).catch(error=>console.log(error))
  },
  aircraftRegSearch(aircraftReg) {
    return fetch (`${API_KEY.aviationEdgeAPI}${regNum}${aircraftReg}`).then(res => res.json()).catch(error=>console.log(error))
  },
};
