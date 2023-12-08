const express = require('express');
const { login , registerUser} = require('../../Controllers/userAuth');
const {signUpValidationMiddleware , loginValidationMiddleware} = require("../../middlerwares/userAuth/index");

const route = express.Router();

route.post('/registerUser' ,signUpValidationMiddleware ,registerUser);
route.post('/login' , loginValidationMiddleware , login)

module.exports = route;