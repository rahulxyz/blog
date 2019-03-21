const express = require('express');
const bodyParser = require('body-parser');
const initDb = require("./db_connection").initDb;
const assert = require('assert');
const getDb = require("./db_connection").getDb;
const appRoutes = require('./routes/routes'); // Imports routes for the products

// initialize our express app
const app = express();
const port = process.env.PORT || 5000;
app.use('/', appRoutes);

initDb(function (err) {
    app.listen(port, function (err) {
        if (err) {
            throw err;
        }
    });
});
