const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRIT, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: "User is not authorized" });
            } else {
                console.log(decoded);
                req.user = decoded.user; // Optionally set the decoded user info in req.user
                next(); // Pass control to the next middleware or route handler
            }
        });
    } else {
        res.status(401).json({ message: "Token is not provided" });
    }
});

module.exports = validateToken;

