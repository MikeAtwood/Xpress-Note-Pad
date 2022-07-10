//-------- Dependencies ---------//
const fs = require("fs");
const path = require("path");
const express = require("express");

//--------- Sets up Express App ---------//
const app = express();
const PORT = process.env.PORT || 3001;

//--------- Parse data ----------//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

require('./routes/routes')(app);

//--------- Sets up App Listener ---------//
app.listen(PORT, function() {
  console.log(`API server now on port ${PORT}!`);
});  