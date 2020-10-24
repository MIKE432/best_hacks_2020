const
    sequelizeDb = require('../defaults/defaults').sequelizeDb,
    sequelizeConstructor = require('sequelize'),
    path = require('path'),
    paths = require('./config');


const sequelize = new sequelizeConstructor(sequelizeDb.databaseName, sequelizeDb.username, sequelizeDb.password, sequelizeDb.options)

const db = {};

paths.models.map(modelPath => {
    const model = sequelize.import(path.resolve(modelPath));
    db[model.name] = model;
})