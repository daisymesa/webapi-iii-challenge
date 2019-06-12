const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

// 1. logger logs to the console the following information about each request: request method, request url, and a timestamp. This middleware runs on every request made to the API
function logger(req, res, next) {
  console.log(`Request Method: ${req.method}, Request URL:${req.originalURL}, Timestamp: ${Date.now()}`)
};

// 2. validates the user id on every request that expects a user id parameter
function validateUserId(req, res, next) {
  if(req.params.id) {
    next();
  } else {
    res.status(400).json({ message: 'Invalid User ID'})
  }
};

// 3. validates the body on a request to create a new user
function validateUser(req, res, next) {

};

// 4. validates the body on a request to create a new post
function validatePost(req, res, next) {

};

module.exports = server;
