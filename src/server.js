/* Loads the modules*/
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
/* Super Important
fs is the built in Node.js file system module
which is used to update the Json file when a vote is submitted
or when a button is pressed
*/
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(5000, () => console.log("Server Running... Good Job"));
//http forbidden 403