const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new error("Please provide all fields")
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400)
        throw new Error("User email already exists")
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
        username,
        email,
        password: hashedPassword
    })
    res.status(200).json(createdUser)
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new error("Please provide email and password")
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = await jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15m" }
        )
        res.status(200).json(accessToken)
    }
    else {
        res.status(404);
        throw new error("Please provide valid email address and password")
    }
});

const currentUser = (req, res) => {
    res.status(200).json(req.user)
}

module.exports = { register, login, currentUser }