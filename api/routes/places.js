const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Place = require('../models/place');
const PlacesController = require('../controllers/placesController');


/*------------------------------------------------------------------*/

// router.post();
//
// /*------------------------------------------------------------------*/
//
// router.post();
//
// /*------------------------------------------------------------------*/
//
// router.delete();

/*------------------------------------------------------------------*/

router.get('/', (req,res) => {
  res.send({place: 'testplace'})
});


module.exports = router;
