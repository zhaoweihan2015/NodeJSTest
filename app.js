let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000);

app.use('/public', express.static('./public'));
app.set('view engine', 'xtpl');
app.set('views', './views');

let home = require('./controller/home');
let admin = require('./controller/admin');

app.use('/', home);
app.use('/admin', admin);