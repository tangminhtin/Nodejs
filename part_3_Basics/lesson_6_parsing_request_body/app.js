// import global module
const http = require('http');
// import file system module
const fs = require('fs');

// create server
const server = http.createServer((req, res) => {
    // store request url
    const url = req.url;
    // store method of request
    const method = req.method;

    // check if url is the root then show input form
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My website from nodejs</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    // check url is message and method is POST
    if (url === '/message' && method === 'POST') {
        // store all data
        const body = [];

        // listen to certain events (data event)
        req.on('data', (chunk) => { // the listener receives a chunk of data
            console.log('-> Chunk: ');
            console.log(chunk);
            // add data
            body.push(chunk);
        });

        // listen to end event
        req.on('end', () => {   // rely on all the chunks being read and stored in the body
            // add all the chunks from inside body to it
            const parsedBody = Buffer.concat(body).toString();
            console.log('-> Parsed Body: ');
            console.log(parsedBody);

            // get message from parsedBody (name=tin -> take tin)
            const message = parsedBody.split('=')[1];
            // write the new file with message
            fs.writeFileSync('part_3_Basics/lesson_6_parsing_request_body/message.txt', message);
        });

        // write some meta information, 302 stand for redirection
        res.statusCode = 302;
        // Location is default header accepted by the browser
        res.setHeader('Location', '/');
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
