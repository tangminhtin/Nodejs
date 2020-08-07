// import global module in nodejs
const http = require('http'); 

// create server
const server = http.createServer((req, res) => {
    // console.log(req);
    // process.exit(); // shut down server
    console.log('-> Request URL: ' + req.url);
    console.log('-> Request Method: ' + req.method);
    console.log('-> Request Headers: ');
    console.log(req.headers);
});

// listener request
server.listen(3000);
