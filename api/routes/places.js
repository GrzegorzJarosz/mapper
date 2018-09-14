const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Place = require('../models/place');
const PlacesController = require('../controllers/placesController');


/*------------------------------------------------------------------*/
//add place
router.post('/:user', (req,res)=>{
  const place = new Place({
    lat:req.body.lat,
    lng:req.body.lng,
    description:req.body.description,
    user:req.params.user,
    date: Date.now()
  });
  place.save()
  .then(result => {
    res.status(200).json({msg:'new place created'})
  })
  .catch(err => {
    console.log('saving error');
    res.status(500).json({error: 'some problems with saving'})}
  );
});


 /*------------------------------------------------------------------*/
//delete place
router.delete('/:user/:id',(req,res)=>{
  Place.remove({_id: req.params.id}).exec().then(
    (result)=>{
      res.status(200).json({msg:'place succesfully deleted'})
    })
    .catch(err => {
      console.log('deleting error');
      res.status(500).json({error: 'some problems with deleting'})}
    );
});

/*------------------------------------------------------------------*/
//get all places by user
router.get('/:user', (req,res) => {
  Place.find({user:req.params.user}).exec().then( places => res.send(places))
});


module.exports = router;
