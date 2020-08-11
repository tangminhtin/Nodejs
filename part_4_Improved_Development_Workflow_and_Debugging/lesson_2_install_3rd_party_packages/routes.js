// import file system
const fs = require('fs');

const requestHandler = (req, res) => {
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
        // store all data of submit form
        const body = [];

        // listen data event
        req.on('data', (chunk) => {    // listen for receives chunk of data
            console.log(chunk);

            // add data to array
            body.push(chunk);
        });

        // listen end event
        req.on('end', () => {
            // rely on all the chunks being read and stored in the body
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);

            // take message from body
            const message = parsedBody.split('=')[1];

            // write message to file
            fs.writeFile('part_3_Basics/lesson_8_using_modules_system/message.txt', message, err => {
                // send status
                res.statusCode = 302;
                return res.end();
            });
        });
    }

    // send response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My website from nodejs</title></head>');
    res.write('<body><h1>Hello, My name is Minh Tin. I was study Nodejs</h1></body>');
    res.write('</html>');
    res.end();
};


// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
