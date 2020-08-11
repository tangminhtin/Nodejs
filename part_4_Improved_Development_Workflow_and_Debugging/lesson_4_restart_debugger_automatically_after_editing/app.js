// import module
const http = require('http');

// import routes.js
const routes = require('./routes');
console.log(routes.someText);

// create server
const server = http.createServer(routes.handler);

// listener request
server.listen(3000);
