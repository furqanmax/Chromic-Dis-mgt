const User = require('../models/user');
const {successRes, failedRes} = require('../services/response-format-service');
const {validationResult} = require('express-validator');

const login = async (req, res) => {

	try {
		const results = validationResult(req);
		if (!results.isEmpty()) {
			res.status(406).json(failedRes(results));
		}

		const user = User.userCheck(req.body);

		res.status(200).json(successRes([{msg: "user logined successfully!"}]));
	} catch(e) {
		res.status(500).json(failedRes([e.message]));
	}
};

const register = async (req, res) => {

	try {

		const results = validationResult(req);
		if (!results.isEmpty()) {
			res.status(406).json(failedRes(results));
		}

		const patients = await User.create({email: req.body.email, password: req.body.password});

		res.status(201).json(successRes(patients));
	} catch(e) {
		res.status(500).json(failedRes([e.message]));
	}
};

const getPatentList = async (req, res) => {

	try {
		const patients = await User.find({role: 'PATIENT'});

		res.status(200).json(successRes(patients));
	} catch(e) {
		res.status(500).json(failedRes([e.message]));
	}
};

const getUserById = async (req, res) => {

	try {

		const results = validationResult(req);
		if (!results.isEmpty()) {
			res.status(406).json(failedRes(results));
		}

		const user = await User.findById(req.params.uid);

		res.status(200).json(successRes(user));
	} catch(e) {
		res.status(500).json(failedRes([e.message]));
	}
};

module.exports = {
	login,
	register,
	getPatentList,
	getUserById
};