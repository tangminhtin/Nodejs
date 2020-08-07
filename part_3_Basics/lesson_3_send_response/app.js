// import global module
const http = require('http');

// create server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    // send response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My website from nodejs</title></head>');
    res.write('<body><h1>Hello, My name is Minh Tin. I was study Nodejs</h1></body>');
    res.write('</html>');
    res.end();
})

// listener request
server.listen(3000);
