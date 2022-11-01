//import statements
//server that serves the APIs that the front end makes calls to and is running using Node
const express = require('express');
//use express (web framework)to make REST api 
const cors = require("cors");
//cors determines where request are allowed to be sent to and fro
const bodyParser = require("body-parser");
//Body parser = library that helps parse the incoming data of a request 
const basicAuth = require('express-basic-auth')
const wolfram = require('./wolfram');
const botlibre = require('./maylin');
const speech = require('./speech');

//Creates instance of express 
const app = express()
//defining the port that it will run on
const port = 80

// Middleware
app.use(cors()) 
//converts incoming requests bodies to javascript strings
app.use(bodyParser.text())
app.use(express.static("../Client"))

app.use(basicAuth({
    users: { 'admin': 'ohmydarlingclementine300' }
}))

//EXPERIMENTAL
// Routes
app.get('/helloworld', (req, res) => {
  // res.send(`Hello World! :) ${port}`) 
  const test = { hello: "world", name: "David" }
  res.send(test)
});

app.get('/helloworld2/:name', (req, res) => {
  // res.send(`Hello World! :) ${port}`) 
  const test = { hello: "world", name: req.params.name }
  res.send(test);
});

//registers post search route
app.post('/search', async (req, res) => {
  const data = await wolfram.wolframApiRequest(req.body);
  console.log("AI ROUTE CALLED WITH: ", req.body, "response data: ", data);
  res.send(data);
});

app.post('/chat', async (req, res) => {
  const data = await botlibre.botlibreApiRequest(req.body);
  console.log("CHAT ROUTE CALLED WITH", req.body, "response data:", data)
  res.send(data);
  });

app.post('/speech', async (req, res) => {
  const data = await speech.speech(req.body);
  console.log("SPEECH ROUTE CALLED WITH", req.body, "response data:", data)
  res.end(Buffer.from(data));
});

// Start the app on defined port
//starts express server
app.listen(port, () => {
  console.log(`Example app listening on port ${port} -> http://localhost:${port}`)
});

// created by David Oleksy 6/15/2022