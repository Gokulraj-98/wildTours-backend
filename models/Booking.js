const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
        customerName: { type: String, required: true },
        customerPhoneNumber: { type: Number, required: true },
        totalAmount: { type: Number, required: true },
        //calculate tax => 2 % => ((2 *totalAmount)/100)
        tax: { type: Number, required: true },
        subTotal: { type: Number, required: true },
        paymentMode: { type: String, required: true },
        cartItems: { type: Array, required: true }

    },
    { timestamps: true }

);

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
