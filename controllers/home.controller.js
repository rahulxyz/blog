const assert = require('assert');
const getDb = require("../db_connection").getDb;
const path = require('path');

exports.home = function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
};