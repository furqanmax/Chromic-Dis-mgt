require('dotenv').config();
const JWT = require('jsonwebtoken');
const secret_key = process.env.JWT_SECRET || 'testsecret';

const createToken = (user) => {

	try {
		const token = JWT.sign(user, secret_key);

		return token;

	} catch(e) {

		throw new Error('Failed to create token');
	}
};

const verifyToken = async (token) => {

	try {

		const user = await JWT.verify(token, secret_key);

		return user;

	} catch(e) {

		throw new Error('Invalid Auth Token');
	}
};

module.exports = {
	createToken,
	verifyToken
};