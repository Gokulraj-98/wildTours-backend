const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).send('Access denied');
    }
    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        res.status(401).send('Invalid token');
    }
};
