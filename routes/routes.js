const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const home_controller = require('../controllers/home.controller');
const posts_controller = require('../controllers/posts.controller');
const about_controller = require('../controllers/about.controller');
const contact_controller = require('../controllers/contact.controller');
const product_controller = require('../controllers/product.controller');
const articles_controller = require('../controllers/articles.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', home_controller.home);
router.get('/posts', posts_controller.posts);
router.get('/about', about_controller.about);
router.get('/contact', contact_controller.contact);
router.get('/test', product_controller.test);
router.get('/articles', articles_controller.articles);

module.exports = router;