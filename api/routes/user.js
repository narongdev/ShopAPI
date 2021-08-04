const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

// Sign Up
router.post('/signup', UserController.user_signup);

// Log in
router.post('/login', UserController.user_login);

// Delete User
router.delete('/:userId', UserController.user_delete);

module.exports = router;