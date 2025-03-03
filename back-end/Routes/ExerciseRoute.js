const express = require("express");
const router = express.Router();
const exerciseController = require("../Controller/ExerciseController");

router.post("/", exerciseController.createExercise);
router.get("/user/:userId", exerciseController.getExercisesByUser);
router.get("/:id", exerciseController.getExerciseById);
router.put("/:id", exerciseController.updateExercise);
router.delete("/:id", exerciseController.deleteExercise);

module.exports = router;
