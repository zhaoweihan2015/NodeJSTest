let express = require('express');

let admin = express.Router();

admin.get('/', (req, res) => {
    res.send('admin');
});

module.exports = admin;