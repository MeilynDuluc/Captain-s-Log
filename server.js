require('dotenv').config()
// Require modules
const fs = require('fs') 
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Log = require('./models/logs.js')
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'));

app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})


//Index /logs
app.get('/logs', (req, res) => {
  console.log('index / logs')
  Log.find({}, (err, foundLogs) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.render('logs/Index', {
        logs: foundLogs
      })
    }
  })
})



//New Route to create new log
app.get('/logs/New', (req, res) => {
  console.log('New Route to create new log')
  console.log('get-new')
  res.render('logs/New');
})

// DELETE
app.delete('/logs/:id', (req, res) => {
  console.log('t delete')
  Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect('/logs')
    }
    console.log('b delete')
  })
})

// UPDATE
app.put('/logs/:id', (req, res) => {
  console.log('update')
  Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/logs/${updatedLog._id}`);
    }
  })
})


//Create Route - shows new log
app.post('/logs', (req, res) => {
  console.log(req.body)
  req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
  Log.create(req.body, (err, createdLog) => {
    if(err){
      // console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/logs/${createdLog._id}`)
      // res.send(createdLog)
    }
    console.log('hi')
  })
})



// EDIT (not applicable in an api)
app.get('/logs/:id/Edit', (req, res) => {
  console.log('get-edit')
  Log.findById(req.params.id, (err, foundLog) => {
    if(err){
     console.error(err)
     res.status(400).send(err)
    } else {
     res.render('logs/Edit', {
       log: foundLog
     })
    }
  })
 })

//Show
app.get('/logs/:id', (req, res) => {
  console.log('get-show')
  Log.findById(req.params.id, (err, foundLog) => {
    if(err){
     console.error(err)
     res.status(400).send(err)
    } else {
     res.render('logs/Show', {
       log: foundLog
     })
     console.log('show-bottom')
    }
  })
 })


app.listen(3000, function () {
  console.log('Listening on port 3000');
});