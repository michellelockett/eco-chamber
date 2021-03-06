'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var db        = {};

const { db_name, db_user, db_password, db_host } = process.env;
const sequelize = new Sequelize(db_name, db_user, db_password, {
  dialect: 'mysql',
  host: db_host,
  logging: false,
  operatorsAliases: false,
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
    console.log('associated: ', modelName)
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
