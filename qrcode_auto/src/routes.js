const express = require('express');
const CodeController = require('./controllers/CodeController');

const routes = express.Router();

routes.get('/',function(req,res){
    res.sendfile(__dirname + "/public/index.html");
})


routes.get('/codes',CodeController.index);
routes.post('/codes/store',CodeController.storeCode);

module.exports = routes;