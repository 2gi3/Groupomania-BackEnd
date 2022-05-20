const Sequelize = require("sequelize");
require("dotenv").config({path: __dirname + '/.env'});
module.exports = new Sequelize(process.env.DB,process.env.ROOT,process.env.PWD,{host:"localhost", dialect:"mysql"});