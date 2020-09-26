const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Codes = require('../models/Codes');

const connection = new Sequelize(dbConfig);

Codes.init(connection);

module.exports = connection;