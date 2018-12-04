const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require("path");
// const cookieParser = require("cookie-parser");
// const methodOverride = require("method-override");
const app = express();

app.set("view engine", "ejs");
app.use(morgan('dev'));
// app.use(cookieParser())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running ð¤ on http://localhost:${PORT}`);
});




// -------------------------- flight data ---------------------------------------
// const API_KEY = "f1295b-936bd5"
// //---- flight tracker ----
// const flightTrackerURL = `http://aviation-edge.com/v2/public/flights?key=${API_KEY}&`;

// const flightNum = `flightNum=`;
// const flightStatus = `status=`;
// const flightIATA = `flightIata=`;

// (async() => {
//   console.log(`${flightTrackerURL}${flightIATA}AC007`)
//   const searchFlight = await fetch (`${flightTrackerURL}${flightIATA}aa1415`).then(res => res.json()).catch(error=>console.log(error));
//   console.log(searchFlight)
// })();
