// import path
const path = require('path');

// return the directory name of the path
// this gives us the path to the file that is responsible for the fact that our application is running
module.exports = path.dirname(process.mainModule.filename);
