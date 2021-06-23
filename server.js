'use strict';
const express       = require('express');
const path          = require('path')
const routes        = require('./controller/routes');
const app           = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static('./public'))

routes(app)


app.listen(3000, () => {
    console.log('port 3000 open');
})
