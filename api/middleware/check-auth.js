const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]; // token from header
        const decode = jwt.verify(token, process.env.JWT_KEY); // => req.body.token
        req.userData = decode;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Auth failed!"
        });
    }
    
}