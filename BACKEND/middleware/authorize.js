// const jwt = require('jsonwebtoken');
// const User = require('../models/user');



// const authorize = (roles) => {
//     return (req, res, next) => {
//         const userRole = req.user.role;

//         if (!roles.includes(userRole)) {
//             return res.status(403).json({ error: 'Access denied. You do not have the necessary permissions.' });
//         }

//         next();
//     };
// };

// module.exports = authorize;
