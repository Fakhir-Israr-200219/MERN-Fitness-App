const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.Model");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const WorkoutLog = require("../models/workoutLogs");
const Cardio = require("../models/CardioModel");
const Exercise = require("../models/ExerciseModel");
// Ensure uploads folder exists
// const uploadDir = path.join(__dirname, "../uploads");
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Multer storage config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage }).single("profile_image");

const registerUser = asyncHandler(async (req, res) => {
  console.log("✅ Hit the URL"); // Debugging

  const { userName, email, password } = req.body;
  console.log("Received Data:", req.body);
  console.log("Received File:", req.file);

  if (!userName || !email || !password) {
    return res.status(400).json({ message: "All fields are mandatory" });
  }

  const userExists = await userModel.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const profileImage = req.file ? `/uploads/${req.file.filename}` : null;

  const user = await userModel.create({
    userName,
    email,
    password: hashPassword,
    profile_image: profileImage,
  });

  if (user) {
    return res.status(201).json({
      _id: user.id,
      email: user.email,
      profile_image: user.profile_image,
    });
  } else {
    return res.status(400).json({ message: "User data is not valid" });
  }
});

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
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          userName: user.userName,
          email: user.email,
          id: user.id,
          profile_image: user.profile_image,
        },
      },
      process.env.ACCESS_TOKEN_SECRIT,
      { expiresIn: "24h" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

//@dec login a user
//@route get /user/current
//@access public
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const currentUserLogs = asyncHandler(async (req, res) => {
  try {
    const logs = await WorkoutLog.find();
    const exerciseLogs = await Exercise.find();
    const cardioLogs = await Cardio.find();

    let totalWorkoutSets = logs.reduce((acc, log) => acc + log.sets, 0);
    let totalExerciseSets = exerciseLogs.reduce((acc, log) => acc + log.sets, 0);
    let totalCardioSets = cardioLogs.reduce((acc, log) => acc + log.sets, 0);

    res.json({
        totalWorkoutSets,
        totalExerciseSets,
        totalCardioSets,
        logs,
        exerciseLogs,
        cardioLogs
    });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
}
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
  currentUserLogs,
};
