const mongoose = require("mongoose");
const Place = require("../models/place");
const Categoryplace = require('../models/categoryplace');

/*------------------------------------------------------------------*/
exports.add_place = (req, res) => {
  const place = new Place({
    lat: req.body.lat,
    lng: req.body.lng,
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    user: req.params.user,
    date: Date.now()
  });
  place.save()
    .then(result => {
      res.status(200).json({
        msg: 'new place created'
      })
    })
    .catch(err => {
      console.log('saving error' + err);
      res.status(500).json({
        error: 'some problems with saving'
      })
    });
}

/*------------------------------------------------------------------*/
exports.delete_place = (req, res) => {
  Place.remove({
      _id: req.params.id
    }).exec().then(
      (result) => {
        res.status(200).json({
          msg: 'place succesfully deleted'
        })
      })
    .catch(err => {
      console.log('deleting error');
      res.status(500).json({
        error: 'some problems with deleting'
      })
    });
}

/*------------------------------------------------------------------*/
exports.getall_places = (req, res) => {
  Place.find({
      user: req.params.user
    }).exec().then(places => res.status(200).send(places))
    .catch(err => {
      console.log('get error');
      res.status(500).json({
        error: err
      })
    });
}


//////////////////////////////
/////place categories/////////
//////////////////////////////

/*------------------------------------------------------------------*/
//create category
exports.add_catplace = (req, res) => {
  const catplace = new Categoryplace({
    username: req.params.user,
    name: req.body.name,
  });
  catplace.save()
    .then(result => {
      res.status(200).json({
        msg: 'new place category created'
      })
    })
    .catch(err => {
      console.log('saving error' + err);
      res.status(500).json({
        error: 'some problems with saving'
      })
    });
}

/*------------------------------------------------------------------*/
//get categories
exports.getall_catplaces = (req, res) => {
  Categoryplace.find({
      username: req.params.user
    }).exec().then(catplaces => {
      res.status(200).send(catplaces.map((cp) => {
        return {
          name: cp.name,
          _id: cp._id
        }
      }))
    })
    .catch(err => {
      console.log('get catplaces error');
      res.status(500).json({
        error: err
      })
    });
}

/*------------------------------------------------------------------*/
//delete category
exports.delete_catplace = (req, res) => {
  Categoryplace.remove({
      _id: req.params.id
    }).exec().then(
      (result) => {
        res.status(200).json({
          msg: 'catplace succesfully deleted'
        })
      })
    .catch(err => {
      console.log('deleting error');
      res.status(500).json({
        error: 'some problems with deleting'
      })
    });
}