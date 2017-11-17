let express = require('express');

let home = express.Router();

let user = require('../module/user');

home.get('/', (req, res) => {
    res.render('home/index', {});
});

home.get('/login', (req, res) => {
    res.render('home/login', {});
})

home.post('/login', (req, res) => {

});

home.get('/register', (req, res) => {
    res.render('home/register', {});
})

home.post('/register', (req, res) => {
    user.insert(req.body, (err) => {
        if (!err) {
            res.json({
                code: 10000,
                msg: '添加成功'
            });
        }
    })
})

home.get('/article', (req, res) => {
    res.render('home/article', {})
});


module.exports = home;