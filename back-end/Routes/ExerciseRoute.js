const express = require("express");
const router = express.Router();
const exerciseController = require("../Controller/ExerciseController");
const validateToken = require("../middleware/validateTokenHandler"); // Import JWT middleware

// Apply validateToken middleware to all routes
router.post("/", validateToken, exerciseController.createExercise);
router.get("/user/:userId", validateToken, exerciseController.getExercisesByUser);
router.get("/:id", validateToken, exerciseController.getExerciseById);
router.put("/:id", validateToken, exerciseController.updateExercise);
router.delete("/:id", validateToken, exerciseController.deleteExercise);

module.exports = router;
