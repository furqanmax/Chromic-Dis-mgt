const User = require('./models/user');

const getPatentList = async (req, res) => {

	try {
		const patients = await User.find({role: 'PATIENT'});

		res.status(200).json({data: patients});
	} catch(e) {
		res.status(500).json({});
	}
};

module.exports = {
	getPatentList,
};