
const express = require('express');
const ctrl = require("../controllers/auth");

const rt = express.Router();

rt.post('/register', ctrl.register);
rt.post('/login', ctrl.login);

module.exports = rt;