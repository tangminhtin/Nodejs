// import express, router
const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

router.get('/login', authController.getLogin);


// export router
module.exports = router;
