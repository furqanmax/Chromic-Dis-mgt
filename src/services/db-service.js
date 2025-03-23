const mongoose = require('mongoose');

const mongodb = (url) => {
	mongoose.connect(url);
};

module.exports = {
	mongodb,
};