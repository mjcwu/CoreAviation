const express = require("express");
const router = express.Router();
const knex = require("../db/client");
const fetch = require('node-fetch');

router.get("/", (req, res) => {
  
  knex("aircraft")
    .insert({
      data: JSON.stringify(12321)
    })
    .then(post => {
      res.render('welcome');
    });
});

module.exports = router;