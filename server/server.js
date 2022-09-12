const express = require('express')
const path = require('path')
require("dotenv").config()
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())
// const app = express()

//endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
});

app.get('/virus', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/virus.html"))
});

app.get('/titlecss', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/titles.css"))
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/styles.css"))
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/client.js"))
});



//callbacks to database

const {
    createVictim,
} = require('./controller')

app.post('/api/people', createVictim)

const {
    getImages
} = require('./controller2')

app.get('./api/images', getImages)

const port = process.env.PORT || 4005;


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
rollbar.log("Port opening");
});

//rollbar to see info/errors

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken:'d48bdbba131c4f528bf41aa6dcb65c29',
  captureUncaught: true,
  captureUnhandledRejections: true
});
rollbar.log("Hello world!");