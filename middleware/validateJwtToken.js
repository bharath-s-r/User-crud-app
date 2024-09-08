const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        if (!token) {
            res.status(401)
            throw new Error("User not authorized. Token is missing")
        }
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(401)
                throw new Error("User not authorized")
            }
            req.user = decoded.user;
            next();
        })
    }
    else {
        res.status(401)
        throw new Error("User not authorized. Token is missing")
    }
});

module.exports = { validateToken };