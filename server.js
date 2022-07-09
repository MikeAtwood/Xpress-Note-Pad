//-------- Dependencies ---------//
const express = require("express");
const fs = require("fs");
const path = require("path");

//--------- Sets up Express App ---------//
const app = express();
const PORT = process.env.PORT || 3001;

//--------- Parse data ----------//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

//--------- Sets up App Listener ---------//
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});  