const express = require("express");
const asyncHandler = require("../middleware/errorHandler");
const multer = require("multer");
const { registerUser, loginUser, currentUser } = require("../Controller/user.Controller");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

// 🛠 Configure Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({ storage: storage });

// ✅ Use Multer Middleware Directly in Route
router.post("/register", upload.single("profile_image"), registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

module.exports = router;