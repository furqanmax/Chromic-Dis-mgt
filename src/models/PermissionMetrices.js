const mongoose = require('mongoose'); 

const permissionSchema = new mongoose.Schema({
	resouceKey: {type: String, require: true},
	role: {type: String, require: true}
}, {timestams: true});

const PermissionMetrices = mongoose.model('permissions', permissionSchema);

module.exports = PermissionMetrices;