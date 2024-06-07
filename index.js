const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const tourRoutes = require('./routes/tours');
const dotenv = require('dotenv');
const bookingRoutes = require('./routes/bookings');
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());


const MONGO_URL = process.env.MONGO_URL

app.use('/auth', authRoutes);
app.use('/tours', tourRoutes);
app.use('/bookings', bookingRoutes);


mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Mongodb is Connected!");
        app.listen(5000, () => {
            console.log('Server is running on port 5000')
        })
    })
    .catch((error) => {
        console.log("Error", error)
    })

