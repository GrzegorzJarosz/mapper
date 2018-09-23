const mongoose = require("mongoose");
const Place = require("../models/place");

/*------------------------------------------------------------------*/
exports.add_place = (req,res) => {
  const place = new Place({
    lat:req.body.lat,
    lng:req.body.lng,
    name:req.body.name,
    description:req.body.description,
    category:req.body.category,
    user:req.params.user,
    date: Date.now()
  });
  place.save()
  .then(result => {
    res.status(200).json({msg:'new place created'})
  })
  .catch(err => {
    console.log('saving error'+ err);
    res.status(500).json({error: 'some problems with saving'})}
  );
}

/*------------------------------------------------------------------*/
exports.delete_place = (req,res) => {
  Place.remove({_id: req.params.id}).exec().then(
    (result) => {
      res.status(200).json({msg:'place succesfully deleted'})
    })
    .catch(err => {
      console.log('deleting error');
      res.status(500).json({error: 'some problems with deleting'})}
    );
}

/*------------------------------------------------------------------*/
exports.getall_places = (req,res) => {
  Place.find({user:req.params.user}).exec().then( places => res.status(200).send(places))
  .catch(err => {
    console.log('get error');
    res.status(500).json({error: err})}
  );
}
