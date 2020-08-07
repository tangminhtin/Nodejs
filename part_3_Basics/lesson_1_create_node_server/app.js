// import global module in nodejs
const http = require('http');

// create server
const server = http.createServer((req, res) => {
    console.log(req);
});

// listener request
server.listen(3000);
