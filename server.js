const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

// 1. logger logs to the console the following information about each request: request method, request url, and a timestamp. This middleware runs on every request made to the API
const logger = (req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL:${req.originalURL}, Timestamp: ${Date.now()}`)
};

module.exports = server;
