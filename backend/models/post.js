const db = require("../config/db.config");
const {Sequelize, DataTypes} = require("sequelize");

  const Post = db.define("post", {

UserName: {
  type: DataTypes.STRING
},
title: {
  type: DataTypes.STRING
},
imageUrl: {
    type: DataTypes.STRING
},
content: {
  type: DataTypes.STRING
}
});

module.exports = Post;