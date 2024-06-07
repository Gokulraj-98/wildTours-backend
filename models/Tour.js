const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    location: String,
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
