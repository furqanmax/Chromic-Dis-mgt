const mongoose = require('mongoose');
const {createHmac} = require('crypto'); 

const userSchema = new mongoose.Schema({
	name: {type: String},
	email: {type: String, require: true, unique: true},
	password: {type: String, require: true},
	role: {type: String, enum: ['patient', 'doctor'], require: true}
}, {timestams: true});

userSchema.pre('save', (next) => {

	try {
		const user = this;

		const passwordHash = createHmac('sha256', 'anysecretkey').update(user.password).digest('hex');
		this.password = passwordHash;
		next();

	} catch(e) {
		throw e;
	}
});

userSchema.static('userCheck', (user) => {

	const userData = User.findOne({email: user.email});

	if (!userData) {
		throw new Error('Email not exist!');
	}
	const passwordHash = createHmac('sha256', 'anysecretkey').update(user.password).digest('hex');
	if (userData.password === passwordHash) {
		return userData;
	} else {
		throw new Error('Password not matched!');
	}
});

const User = mongoose.model('users', userSchema);

module.exports = User;