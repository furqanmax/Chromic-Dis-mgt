const {verifyToken} = require('../services/auth-service');
const {failedRes} = require('../services/response-format-service');
const User = require('../models/user');

const authenticateUser = async (req, res, next) => {

	try {
		let token = req.headers?.token;
		if (!token) {
			res.status(401).json(failedRes([{error: "empty token provided"}]));
		}

		token = token.replace('Bearer ', '');

		const user = await verifyToken(token);

		req.user = user;

		next();

	} catch(e) {

		res.status(401).json(failedRes([e.message]));
	}
}

const authorizationUser = async (req, res, next) {

	try {

		const email = req.user?.email;
		const resourceKey = req.headers?.resourceKey;

		if (!email || !resourceKey) {
			res.status(403).json(failedRes({error: "not authorized to access resource"}));
		}

		const role = await User.find({email: email});
		const access = await PermissionMetrices.find({role: role, resourceKey});

		if (!access) {
			res.status(403).json(failedRes({error: "not authorized to access resource"}));
		} else {
			next();
		}
		
	} catch(e) {

		res.status(403).json(failedRes({error: "Error in authorization"}));
	}
}