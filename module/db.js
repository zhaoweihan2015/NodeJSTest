let mysql = require('mysql');
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'blog'
});

let md5 = require('md5');

db.md5 = md5;
module.exports = db;