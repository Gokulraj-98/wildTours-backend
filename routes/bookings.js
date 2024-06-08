const express = require('express');
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

const router = express.Router();

router.post("/charge-bill", auth, async (req, res) => {
    const booking = new Booking(req.body);
    await booking.save();
    res.send("Bill saved successfully")
    res.status(201).send(booking);
});

router.get("/get-bill", async (req, res) => {
    try {
        const bills = await Booking.find()
        res.send(bills)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;
