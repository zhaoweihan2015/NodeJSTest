let db = require('./db');

module.exports.insert = (data, cb) => {
    data.pass = db.md5(data.pass);
    let query = 'INSERT INTO users SET ?';
    db.query(query, data, (err) => {
        if (err) {
            return cb(err);
        }
        cb(null);
    });
}

module.exports.login = (data, cb) => {
    data.pass = db.md5(data.pass);
    let query = 'SELECT * FROM users WHERE email = ?';
}