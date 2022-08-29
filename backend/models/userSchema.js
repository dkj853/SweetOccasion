const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let LoginSchema = new Schema({
    username: {
        type: String,
       },
       firstname: {
        type: String,
       },
       lastname: {
        type: String,
       },
       email: {
        type: String,
       },
    password: {
        type: String,
     },
    comments: [{
        comments: [String],
        date: Date()
       
    }]
  })     
let LoginModel = mongoose.model("login", LoginSchema)
module.exports = LoginModel