const mongoose = require("mongoose");
const User = require("../models/user");

/*------------------------------------------------------------------*/
exports.user_signup = (req, res, next) =>{
  res.status(200).send('signup working');
}

/*------------------------------------------------------------------*/
exports.user_login = (req, res, next) => {
  res.status(200).send('login working');
}

/*------------------------------------------------------------------*/
 exports.user_delete = (req, res, next) => {
   res.status(200).send('delete working');
 }
