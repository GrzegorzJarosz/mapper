const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/user");

/*------------------------------------------------------------------*/
exports.user_signup = (req, res, next) =>{
  User.find({ email: req.body.email }).exec()
    .then(user => {
      if(user.length >= 1){
        return res.status(409).json({
          message: 'email exist'
        });
      } else {

        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if(err){
            return res.status(500).json({error:err});
          }else{
            const user = new User({
              username: req.body.username,
              email: req.body.email,
              password: hash
            });

            user.save()
              .then(result => {
                console.log(result);
                res.status(201).json({ message: 'user created' });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error:err
                });
              });
          }
        })
      }
    })
}

/*------------------------------------------------------------------*/
exports.user_login = (req, res, next) => {
  res.status(200).send('login working');
}

/*------------------------------------------------------------------*/
exports.user_delete = (req, res, next) => {
  User.remove({_id: req.params.userId}).exec()
  .then(result =>{
    res.status(200).json({
      message:'user deleted'
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error:err
    });
  });
}
