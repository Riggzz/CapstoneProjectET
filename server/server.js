const express = require('express')
const path = require('path')
require("dotenv").config()
const cors = require("cors")

app.use(express.json())
app.use(cors())
// const app = express()

//endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/styles.css"))
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/client.js"))
});

const port = process.env.PORT || 4005;


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
rollbar.log("Port opening");
});


var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken:ROLLBARTOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});
rollbar.log("Hello world!");