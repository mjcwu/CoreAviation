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

const API_KEY = require('../private/api_key');
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
  let flightDataObtained = await fetch (`${API_KEY.aviationEdgeAPI}${flightIATA}ac34`).then(res => res.json())
  
  if(flightDataObtained){
    console.log("---- Data Received ----");
    return flightDataObtained[0]
  }
}