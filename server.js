//-------- Dependencies ---------//
const express = require("express");
const fs = require("fs");
const path = require("path");

//--------- Sets up Express App ---------//
const app = express();
const PORT = process.env.PORT || 3001;


app.get('/api/db', (req, res) => {
    res.send('database');
  });

//--------- Parse data ----------//
app.use(express.json());

//--------- Sets up App Listener ---------//
app.listen(3001, () => {
  console.log(`API server is now on Port 3001`);  
});