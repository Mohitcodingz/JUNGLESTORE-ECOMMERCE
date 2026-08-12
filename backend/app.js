const express = require('express');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const app = express();
app.use(express.json());
app.use(cors());
app.use(profileRoutes);
app.use(userRoutes);

module.exports = app;
// The work of the app.js is acquairing the express, cors and exporting in app as an object so we can require or import in other js files.