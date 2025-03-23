const express = require('express');
const {login, register, getPatentList} = require('../controllers/user-controller');
const {body} = require('express-validator');

const router = express.Router();

router.post('/', [body('email').notEmpty().isEmail(), body('password').notEmpty().isString()], register);
router.post('/', [body('email').notEmpty().isEmail(), body('password').notEmpty().isString()], login);
router.get('/', getPatentList);

module.exports = router;