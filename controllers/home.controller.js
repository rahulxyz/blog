const assert = require('assert');
const getDb = require("../db_connection").getDb;




exports.home = function (req, res) {
    const db = getDb();
    db.collection('userDetails').find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        //console.log("Found the following records");
        res.send(docs);
    });
    //res.send({ 'msg': 'Welcome to HOME controller!' });
};