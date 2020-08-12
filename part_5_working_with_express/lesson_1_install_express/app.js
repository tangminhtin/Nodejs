// import module
const http = require('http');

// import express
const express = require('express');

// create an application
const app = express();

// adding the first middleware
app.use((req, res, next) => {
    console.log('In the first middeware!');
    next(); // allows the request to continue to the next middleware in line
});

// adding the second middleware
app.use((req, res, next) => {
    console.log('In the second middleware!');
    // working with middleware
    res.send('<h1>The second middleware is working!</h1>');
});

// create server
const server = http.createServer(app);

// listener request
server.listen(3000);
