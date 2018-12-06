const express = require("express");
const router = express.Router();
const knex = require("../db/client");
const fetch = require('node-fetch');

// router.get("/", (req, res) => {
//   function fetchMachine(){
//     knex("aircraft")
//     .insert({
//       data: JSON.stringify(12321)
//     })
//   }
// });

const api_key = require('../private/api_key');
const API_KEY = api_key.aviationEdgeAPI;
const flightTrackerURL = `http://aviation-edge.com/v2/public/flights?key=${API_KEY}&`;
const flightIATA = `flightIata=`;

router.get("/", (req, res) => {
  function fetchMachine(){
    knex("aircraft")
    .then(() => {

      const path = Array.from({ length: 10 }).map(() => {
        return {
          data: JSON.stringify(fetchMachine())
        };
      });
      // Even inside of a then-callback, always return the query.
      return knex("aircraft").insert(path);
    });
  }
});

module.exports = router;


async function fetchMachine(){      
  let dataObtained = await fetchingData();
  return dataObtained;
}

async function fetchingData() {
  console.log(`fetching ac34`);
  let flightDataObtained = await fetch (`${flightTrackerURL}${flightIATA}ac34`).then(res => res.json())
  
  if(flightDataObtained){
    console.log("---- Data Received ----");
    return flightDataObtained[0]
  }
}