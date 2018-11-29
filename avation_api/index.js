const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require("path");
const cookieParser = require("cookie-parser");
// const methodOverride = require("method-override");
const fetch = require('node-fetch');
const app = express();

app.set("view engine", "ejs");
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser())



// app.get("/hello_world", (request, response) => {
//   response.send("<h1>Hello World!</h1>");
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running ð¤ on http://localhost:${PORT}`);
// });




// -------------------------- flight data ---------------------------------------
const API_KEY = "f1295b-936bd5"
//---- flight tracker ----
const flightTrackerURL = `http://aviation-edge.com/v2/public/flights?key=${API_KEY}&`;

const flightNum = `flightNum=`;
const flightStatus = `status=`;
const flightIATA = `flightIata=`;
const currentFlightPathPoint = {};

(async() => {
  console.log(`${flightTrackerURL}${flightIATA}BR10`)
  const searchFlight = await fetch (`${flightTrackerURL}${flightIATA}BR10`).then(res => res.json()).catch(error=>console.log(error));
  console.log("longitude: ", searchFlight[0].geography.longitude)
  console.log("latitude: ", searchFlight[0].geography.latitude)
  console.log("altitude: ", searchFlight[0].geography.altitude)
  console.log("direction: ", searchFlight[0].geography.direction)
  console.log("speed: ", searchFlight[0].speed.horizontal)
  console.log("departure: ", searchFlight[0].departure.iataCode)
  console.log("arrival: ", searchFlight[0].arrival.iataCode)
  console.log("aircraft type: ", searchFlight[0].aircraft.iataCode)
  console.log("airline: ", searchFlight[0].airline.icaoCode)
  console.log("flight#: ", searchFlight[0].flight.iataNumber)

})();
// -------------------- avation edge api return format ------------------
// { geography:
//   { latitude: 48.1153,
//     longitude: 174.465,
//     altitude: 10668,
//     direction: 64 },
//  speed: { horizontal: 1011.19, isGround: 1, vertical: 0 },
//  departure: { iataCode: 'TPE', icaoCode: 'RCTP' },
//  arrival: { iataCode: 'YVR', icaoCode: 'CYVR' },
//  aircraft:
//   { regNumber: 'B16705',
//     icaoCode: 'B77W',
//     icao24: '8990D4',
//     iataCode: 'B77W' },
//  airline: { iataCode: 'BR', icaoCode: 'EVA' },
//  flight: { iataNumber: 'BR10', icaoNumber: 'EVA10', number: '10' },
//  system: { updated: '1543438918', squawk: '0' },
//  status: 'en-route' }