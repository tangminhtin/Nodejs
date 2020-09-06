// import mongodb
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// store access to the database
let _db;

// connect mongodb
const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://tangminhtin:6Pb8I4g24ZChkFk0@cluster0.ze1a2.mongodb.net/shop?retryWrites=true&w=majority')
        .then((client) => {
            console.log('Connected!');
            // store access to the database
            _db = client.db();
            callback(client);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
}

// get access database
const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
