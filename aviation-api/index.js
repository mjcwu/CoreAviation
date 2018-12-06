const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const path = require("path");
const http = require('http');
// const cookieParser = require("cookie-parser");
// const methodOverride = require("method-override");
const app = express();
const fetch = require('node-fetch');

app.set("view engine", "ejs");
app.use(morgan('dev'));
// app.use(cookieParser())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---- routes ----
const coreAviation = require("./routes/coreAviation");
app.use("/", coreAviation);

// ---- connect to react ----
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });
// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

// // ------ flight data ------
// const api_key = require('../private/api_key');
// const API_KEY = api_key.aviationEdgeAPI;
// const flightTrackerURL = `http://aviation-edge.com/v2/public/flights?key=${API_KEY}&`;

// const flightNum = `flightNum=`;
// const flightIATA = `flightIata=`;

// function fetchMachine()
// {
//   fetchingData();
//   setTimeout(fetchMachine, 60000);
// }

// async function fetchingData() {
//   console.log(`fetching AC007`);
//   let flightDataObtained = await fetch (`${flightTrackerURL}${flightIATA}ac7`).then(res => res.json()).catch(error=>console.log(error));
//   console.log(JSON.stringify(flightDataObtained[0]));

//   if(flightDataObtained){
//     console.log("---- Data Received ----");
//   }
// }

// fetchMachine();
// // ------ flight data ------


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running ð¤ on http://localhost:${PORT}`);
});
