const path = require('path');
exports.contact = function (req, res) {
    res.sendFile(path.join(__dirname, "../views/html/contact.html"));
};