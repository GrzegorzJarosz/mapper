const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Place = require('../models/place');
const PlacesController = require('../controllers/placesController');


/*------------------------------------------------------------------*/
//add place
router.post('/:user', PlacesController.add_place);

/*------------------------------------------------------------------*/
//delete place
router.delete('/:user/:id', PlacesController.delete_place);

/*------------------------------------------------------------------*/
//get all places by user
router.get('/:user', PlacesController.getall_places);


module.exports = router;
