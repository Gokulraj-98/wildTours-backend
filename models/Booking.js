const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tour: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
    date: Date,
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
