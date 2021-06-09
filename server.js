'use strict';
const express       = require('express');
const path          = require('path')
const routes        = require('./controller/routes');
const app           = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static('./public'))

routes(app)

app.listen(80, () => {
    console.log('site ouvert');
})
