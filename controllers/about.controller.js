const path = require('path');
exports.about = function (req, res) {
    res.sendFile(path.join(__dirname, "../views/html/about.html"));
};