const express = require('express');
const app = express();
const { db } = express('./db/db');


app.get('/api/db', (req, res) => {
    res.send('Hello!');
  });

app.listen(3001, () => {
  console.log(`API server is now on Port 3001`);  
});