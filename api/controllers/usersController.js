const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

/*------------------------------------------------------------------*/
exports.user_signup = (req, res, next) => {
  User.find({
      email: req.body.email
    }).exec()
    .then(user1 => {
      if (user1.length >= 1) {
        return res.status(409).json({
          message: 'email exist'
        });
      } else {
        User.find({
            username: req.body.username
          }).exec()
          .then((user2) => {
            if (user2.length >= 1) {
              return res.status(409).json({
                message: 'username exist'
              });
            } else {
              bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                  return res.status(500).json({
                    error: err
                  });
                } else {
                  const user = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash
                  });

                  user.save()
                    .then(result => {
                      res.status(201).json({
                        message: 'user created'
                      });
                    })
                    .catch(err => {
                      console.log(err);
                      res.status(500).json({
                        // error:err
                        message: 'Problems with saving, please check your form and try again'
                      });
                    });
                }
              })
            }
          })


      }
    })
}

/*------------------------------------------------------------------*/
exports.user_login = (req, res, next) => {
  User.find({
      email: req.body.email
    }).exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth failed'
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed'
          });
        }
        if (result) {
          const token = jwt.sign({
              email: user[0].email,
              userId: user[0]._id
            },
            process.env.secret, {
              expiresIn: "1h"
            });
          return res.status(200).json({
            message: 'Auth successful',
            user: {
              username: user[0].username,
              email: user[0].email
            },
            token: token
          });
        }
        res.status(401).json({
          message: 'Auth failed'
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

/*------------------------------------------------------------------*/
exports.user_delete = (req, res, next) => {
  User.remove({
      _id: req.params.userId
    }).exec()
    .then(result => {
      res.status(200).json({
        message: 'user deleted'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}