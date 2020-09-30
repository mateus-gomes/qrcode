const express = require('express');
const routes = require('./routes');

require('./database/index.js');

const app = express();

app.use(express.static('public/img'));
app.use(express.static('public/css'));
app.use(express.static('public/html'));
app.use(express.static('public/js'));
app.use(express.json());
app.use(routes);

app.listen(3000);