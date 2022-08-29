
const passport = require('passport');
const bcrypt = require('bcryptjs');// 04/22

// create a new user
module.exports = (app, db) => {

  app.post("/api/comments/newcomments", (req, res) => {
    console.log(req.body)
    res.send(req.body)
    // let comments = new LoginModel({
    //   name: req.body.username
    // })
    // person.save((err, data) => {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(data)
    //     res.json(data)
    //   }
    // })
  })

  // app.post("/api/exercise/new-user", (req, res) => {
  //     let person = new PersonModel({
  //       name: req.body.username
  //     })
  //     person.save((err, data) => {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         console.log(data)
  //         res.json(data)
  //       }
  //     })
  //   })
  //   // add user exercises
  //   app.post("/api/exercise/add", (req, res) => {
  //     let exercise = new ExerciseModel({
  //       userId: req.body.userId,
  //       description: req.body.description,
  //       duration: req.body.duration,
  //       date: Date()
  //     })
  //     exercise.save((err, data) => {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         console.log(data)
  //         res.json(data)
  //       }
  //     })
  //   })

  // // Find All Users
  // app.get('/api/exercise/users', (req, res) => {
  //   PersonModel.find((err, data) => {
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       res.json(data)
  //     }
  //   })
  // })

  // //  Full Exercise Log
  // app.get('/api/exercise/log', (req, res) => {
  //   console.log(req.query.userId)
  //   ExerciseModel.find({ userId: req.query.userId }, (err, data) => {
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       // console.log(data)
  //       res.json(data)
  //     }
  //   })
  // })





}






