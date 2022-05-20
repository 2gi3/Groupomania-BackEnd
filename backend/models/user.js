// const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

// const userSchema = mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// userSchema.plugin(uniqueValidator);

// module.exports = mongoose.model('User', userSchema);
const db = require("../config/db.config");
const {Sequelize, DataTypes} = require("sequelize");

  const User = db.define("user", {

UserName: {
  type: DataTypes.STRING
},
UserEmail: {
  type: DataTypes.STRING
},
password: {
  type: DataTypes.STRING
}
});

module.exports = User;