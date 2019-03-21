const assert = require("assert");
const client = require("mongodb").MongoClient;
const config = require("./config");

let _db;
function initDb(callback) {
    if (_db) {
        console.warn("Trying to init DB again!");
        return callback(null, _db);
    }

    client.connect(config.db.connectionString, config.db.connectionOptions, connected);

    function connected(err, client) {
        if (err) {
            return callback(err);
        }
        console.log("DB initialized - connected to: " + config.db.connectionString.split("@")[1]);
        _db = client.db(config.db.database_name);
        return callback(null, _db);
    }
}

function getDb() {
    console.log('get');
    console.log(config.db.connectionString + ' ' + config.db.connectionOptions);
    assert.ok(_db, "Db has not been initialized. Please called init first.");
    return _db;
}

module.exports = {
    getDb,
    initDb
};