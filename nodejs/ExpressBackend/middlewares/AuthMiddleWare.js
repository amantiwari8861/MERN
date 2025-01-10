const base64=require("base-64");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Optional: for password hashing
const userModel = require("../entities/UserModel");

const SECRET_KEY = process.env.JWT_SECRET;
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Token is in "Bearer <token>" format

    if (!token) return res.status(401).json({ message: 'Access token required' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user; // Add decoded user data to request
        next();
    });
}
let authMiddleware = (req, res, next) => 
{
    authenticateToken(req,res,next);
    console.log(req.user);
    
    console.log("authenticated !");
};
exports.authMiddleware = authMiddleware;



// // 3. Protected Route
// app.get('/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'This is a protected route', user: req.user });
// });

//https://www.browserling.com/tools/bcrypt

/*
    console.log(req.ip);
    console.log(req.get('Content-Type'));
    console.log(req.headers);
    console.log(req.protocol);
    console.log(req.secure);
    console.log(req.hostname);
*/
//Application Level MiddleWare
// let authMiddleware = (req, res, next) => {
//     console.log("authenticating...");
//     console.log(req.headers);
//     const {authorization}=req.headers;
//     console.log(authorization);
//     const credentials=authorization.split(" ")[1];
//     const [username,password]=base64.decode(credentials).split(":");
//     console.log(username,password);
//     // if (req.hostname === "localhost" && req.secure === false && req.protocol === "http") {
//     if (!(username==="aman" && password==="1234")) {
//         res.status(403).send("get lost");
//     }
//     else {
//         next();
//     }
// };