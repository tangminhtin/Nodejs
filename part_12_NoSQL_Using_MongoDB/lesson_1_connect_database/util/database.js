// import mongodb
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// connect mongodb
const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://tangminhtin:6Pb8I4g24ZChkFk0@cluster0.ze1a2.mongodb.net/<dbname>?retryWrites=true&w=majority')
        .then((client) => {
            console.log('Connected!');
            callback(client);
        })
        .catch(err => console.log(err));
}

module.exports = mongoConnect;
