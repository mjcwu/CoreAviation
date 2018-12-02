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




