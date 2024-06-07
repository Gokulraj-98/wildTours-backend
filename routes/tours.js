const express = require('express');
const Tour = require('../models/Tour');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
    const tours = await Tour.find();
    res.send(tours);
});

router.get('/:id', async (req, res) => {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
        return res.status(404).send('Tour not found');
    }
    res.send(tour);
});

router.post('/', auth, async (req, res) => {
    const tour = new Tour(req.body);
    await tour.save();
    res.status(201).send(tour);
});

router.delete('/:id', auth, async (req, res) => {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
        return res.status(404).send('Tour not found');
    }
    res.send('Tour deleted');
});

module.exports = router;
