const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const UserController = require('../controllers/usersController');


/*------------------------------------------------------------------*/

router.post('/signup', UserController.user_signup);

/*------------------------------------------------------------------*/

router.post('/login', UserController.user_login);

/*------------------------------------------------------------------*/

router.delete('/:userId', UserController.user_delete);

/*------------------------------------------------------------------*/

router.get('/profile', (req, res) => {
  res.status(200).send('profile working');
});


module.exports = router;
