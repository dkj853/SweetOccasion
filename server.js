// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const routes = require('./routes')
// Sets up the Express App
// =============================================================
const app = express();
const cors = require('cors')


// Requiring our models for syncing
routes(app)

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));






const PORT = process.env.PORT || 8800;
//this configuration is required for heroku
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});