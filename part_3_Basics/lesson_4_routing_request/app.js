// import global module
const http = require('http');

// create server
const server = http.createServer((req, res) => {
    // store request url
    const url = req.url;

    // check if url is the root then show input form
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My website from nodejs</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

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
