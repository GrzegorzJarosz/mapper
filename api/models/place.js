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
    type:String,
    required :true
  },
  user:{
    type:String,
    required :true
  },
  date:{
    type:Date
  }
});

module.exports = mongoose.model('Place',placeSchema);
