//Define User model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const UserSchema = new Schema({
	name: String
});
//Create Model
const User = mongoose.model('user', UserSchema);
//Export Model
module.exports = User;