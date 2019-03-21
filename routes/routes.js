const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const home_controller = require('../controllers/home.controller');
const product_controller = require('../controllers/product.controller');
const articles_controller = require('../controllers/articles.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', home_controller.home);
router.get('/test', product_controller.test);
router.get('/articles', articles_controller.articles);

module.exports = router;