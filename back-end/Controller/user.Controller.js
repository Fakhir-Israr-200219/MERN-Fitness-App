const asyncHandler = require("express-async-handler");
const bsrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.Model");
//@dec regiser a user 
//@route get /user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {

    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        res.status(400)
        throw new Error("All feaild are mandatory")
    }

    const userAvaliable = await userModel.findOne({ email });
    if (userAvaliable) {
        res.status(400)
        throw new Error("user allready exist")
    }

    //Hash Passsword
    const hashPassword = await bsrypt.hash(password, 10);
    const user = await userModel.create({
        userName,
        email,
        password: hashPassword,
    })

    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400)
        throw new Error("user data is not valid")
    }
    
})

//@dec login a user 
//@route get /user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("all feilds are mandatory");
    }

    const user = await userModel.findOne({ email });

    //compare Password with hash password
    if (user && (await bsrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                userName: user.userName,
                email: user.email,
                id: user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECRIT,
        {expiresIn:"5m"}
    )
        res.status(200).json({ accessToken });
    }else{
        res.status(401);
        throw new Error("Email or password is not valid")
    }
})

//@dec login a user 
//@route get /user/current
//@access public
const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}