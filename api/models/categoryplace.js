const mongoose = require('mongoose');

const categoryplaceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Categoryplace', categoryplaceSchema);