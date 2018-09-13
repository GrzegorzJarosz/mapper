const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
  lat:{
    type:String,
    required :true
  },
  lng:{
    type:String,
    required :true
  },
  description:{
    type:String
  },
  user:{
    type:String,
    required :true
  }
});

module.exports = mongoose.model('Place',placeSchema);
