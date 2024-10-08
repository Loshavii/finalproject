// const jwt = require('jsonwebtoken');
// const User = require('../models/user');

// const authenticate = async (req, res, next) => {
//     const token = req.header('Authorization').replace('Bearer ', '');

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await User.findById(decoded.id);

//         if (!user) {
//             return res.status(401).json({ error: 'Authentication failed.' });
//         }

//         req.user = user; // Attach user to request
//         next();
//     } catch (err) {
//         res.status(401).json({ error: 'Invalid token.' });
//     }
// };

// module.exports = authenticate;

const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import User model

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id });

        if (!user) {
            throw new Error();
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Please authenticate.' });
    }
};

module.exports = authenticate;

