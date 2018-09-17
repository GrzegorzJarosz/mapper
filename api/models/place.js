const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
  lat:{
    type:Number,
    required :true
  },
  lng:{
    type:Number,
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
