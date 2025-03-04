const express = require("express");
const router = express.Router();
const workoutController = require("../Controller/workoutController");
const validateToken = require("../middleware/validateTokenHandler");

router.post("/add", validateToken, workoutController.uploadMiddleware, workoutController.addWorkout);
router.get("/user", validateToken, workoutController.getCardiosByUser);
router.get("/:id", validateToken, workoutController.getWorkoutById);
router.put("/:id", validateToken, workoutController.uploadMiddleware, workoutController.updateWorkout);
router.delete("/:id", validateToken, workoutController.deleteWorkout);

module.exports = router;
