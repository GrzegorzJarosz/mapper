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

//////////////////////////////
/////place categories/////////
//////////////////////////////

//add categoryplace
router.post('/add_category/:user', PlacesController.add_catplace);

/*------------------------------------------------------------------*/
//get all categoryplace by user
router.get('/get_categories/:user', PlacesController.getall_catplaces);

//delete categoryplace
router.delete('/removecatplace/:user/:id', PlacesController.delete_catplace);


module.exports = router;