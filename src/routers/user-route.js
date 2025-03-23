const express = require('express');
const {login, register, getPatentList, getUserById} = require('../controllers/user-controller');
const {authenticateUser, authorizationUser} = require('../middlewares/auth-middleware');
const {body, param} = require('express-validator');

const router = express.Router();

router.post('/', [body('email').notEmpty().isEmail(), body('password').notEmpty().isString()], register);
router.post('/', [body('email').notEmpty().isEmail(), body('password').notEmpty().isString()], login);
router.get('/list', [authenticateUser, authorizationUser], getPatentList);
router.get('/uid', [param(uid).notEmpty().isString(), authenticateUser, authorizationUser], getUserById);

module.exports = router;