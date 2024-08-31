const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json({limit: '1mb'})); // for parsing application/json

// Host static files
//const port = process.env.PORT;
const port = 3000;
app.listen(port, () => console.log("starting server at " + port))
app.use(express.static('public'));