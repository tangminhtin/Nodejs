// import file system and path
const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    // save object file
    save() {
        // name and location of file
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
        );

        // read data from json file
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if(!err) {
                // convert json to js
                products = JSON.parse(fileContent);
            }

            // put data into array
            products.push(this);

            // converts js to json and write to file
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    // get all data
    static fetchAll(cb) {
        // name and location of file
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
        );

        // read data from json file
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                cb([]);
            }

            // convert json to js
            cb(JSON.parse(fileContent));
        });
    }
}
