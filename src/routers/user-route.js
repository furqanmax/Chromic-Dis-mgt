const express = require('express');
const {login, register, getPatentList, getUserById} = require('../controllers/user-controller');
const {authenticateUser, authorizationUser} = require('../middlewares/auth-middleware');
const {body, param} = require('express-validator');

const router = express.Router();

router.post('/register', [
	body('email').notEmpty().isEmail(), 
	body('password').notEmpty().isString(), 
	body('confirm_password').equals(req.body.password),
 	body('type').notEmpty().in(['patient','doctor'])], register);
router.post('/login', [body('email').notEmpty().isEmail(), body('password').notEmpty().isString()], login);
router.get('/list', [authenticateUser, authorizationUser], getPatentList);
router.get('/:uid', [param('uid').notEmpty().isString(), authenticateUser, authorizationUser], getUserById);

module.exports = router;