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


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running ð¤ on http://localhost:${PORT}`);
});
