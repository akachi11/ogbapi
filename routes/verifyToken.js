// const jwt = require("jsonwebtoken")

// const verifyToken = (req, res, next) => {
//     const authHeader = req.headers.token
//     if (authHeader) {
//         const token = authHeader.split(" ")[1];
//         jwt.verify(token, process.env.JWT_SEC, (err, user) => {
//             if (err) res.status(403).json("Token is invalid");
//             req.user = user;
//             next()
//         })
//     } else {
//         return res.status(401).json("You are not authenticated")
//     }
// };

// const verifyAndAuthToken = (req, res, next) => {
//     verifyToken(req, res, () => {
//         if (req.user.id === req.params.id || req.user.isAdmin) {
//             next();
//         } else {
//             res.status(403).json("You can't do that")
//         }
//     })
// }

// const verifyAdminAuthToken = (req, res, next) => {
//     verifyToken(req, res, () => {
//         if (req.user.isAdmin) {
//             next();
//         } else {
//             res.status(403).json("You can't do that")
//         }
//     })
// }

// module.exports = { 
//     verifyToken, 
//     verifyAndAuthToken, 
//     verifyAdminAuthToken 
// }