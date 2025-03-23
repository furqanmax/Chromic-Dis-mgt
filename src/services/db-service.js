const mongoose = require('mongoose');

const mongodb = (url) => {
	return mongoose.connect(url);
};

module.exports = {
	mongodb,
};