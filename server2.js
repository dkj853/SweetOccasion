const express = require("express");
const session = require("express-session");
const passport = require("passport");
require('dotenv').config();
const bodyParser = require('body-parser')
const mongo = require('mongodb').MongoClient;
// const helmet = require('helmet');
const mongoose = require('mongoose');
const helmet = require('helmet');
// const mongoose = require('mongoose');
// const LoginModel = require('./backend/models/userSchema');
const app = express();

const routes = require('./routes.js');
const auth = require('./auth.js');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))



// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html")
// })

app.use(express.static(__dirname + "/public"))



mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (err) {
      console.log('Database error: ' + err);
    } else {
      routes(app, db)
      // auth(app, db)
      console.log("database connector")

      console.log('routes', routes)

      const listener = app.listen(process.env.PORT || 5000, () => {
        console.log('Your app is listening on port ' + listener.address().port)
      })



    }
  }
);


