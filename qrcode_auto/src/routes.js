const express = require('express');
const CodeController = require('./controllers/CodeController');

const routes = express.Router();

routes.get('/',function(req,res){
    res.sendfile(__dirname + "/public/html/index.html");
})


routes.get('/codes/return',CodeController.returnCode);
routes.post('/codes/store',CodeController.storeCode);

module.exports = routes;