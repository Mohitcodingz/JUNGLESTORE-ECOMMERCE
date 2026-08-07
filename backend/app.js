const express = require('express');
const app =  express();
const cors =  require('cors')
app.use(express.json());
app.use(cors());
module.exports = app;
// The work of the app.js is acquairing the express, cors and exporting in app as an object so we can require or import in other js files.