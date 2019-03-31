const path = require('path');
exports.posts = function (req, res) {
    res.sendFile(path.join(__dirname, "../views/html/posts.html"));
};