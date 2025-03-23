const successRes = (data) => {

	return {
		status: 'success',
		data: data,
		errors: []
	};
};

const failedRes = (errors) => {

	return {
		status: 'failed',
		data: [],
		errors: errors
	};
};

module.exports = {
	successRes,
	failedRes
};