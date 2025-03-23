const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {type: String, require: true},
	email: {type: String, require: true, unique: true},
	password: {type: String, require: true},
	role: {type: String, enum: ['HC_ADV', 'PATIENT']}
}, {timestams: true});

const User = mongoose.model('users', userSchema);

module.exports = User;