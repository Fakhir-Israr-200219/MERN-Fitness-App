const Exercise = require("../models/ExerciseModel");
const workoutLogs = require("../models/workoutLogs");

// Create a new exercise entry (Uses Auth Middleware)
exports.createExercise = async (req, res) => {
  try {
    const { exercise, reps, sets, weight } = req.body;
    const userId = req.user.id; // Extract user ID from token middleware

    if (!exercise || !reps || !sets || !weight) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newExercise = new Exercise({ userId, exercise, reps, sets, weight });
    await newExercise.save();

    const log = new workoutLogs({
      userId,
      workoutId: newExercise._id,
      workoutType: "Exercise",
      sets: newExercise.sets
    });
    await log.save();

    res.status(201).json({ success: true, data: newExercise });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all exercises for the logged-in user
exports.getExercisesByUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const exercises = await Exercise.find({ userId });

    res.status(200).json({ success: true, data: exercises });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single exercise by ID (User can only access their own)
exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise || exercise.userId.toString() !== req.user.id) {
      return res.status(404).json({ success: false, message: "Exercise not found" });
    }

    res.status(200).json({ success: true, data: exercise });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update an exercise by ID
exports.updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);

    if (!exercise || exercise.userId.toString() !== req.user.id) {
      return res.status(404).json({ success: false, message: "Exercise not found" });
    }

    const updatedExercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, data: updatedExercise });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete an exercise by ID
exports.deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);

    if (!exercise || exercise.userId.toString() !== req.user.id) {
      return res.status(404).json({ success: false, message: "Exercise not found" });
    }

    await exercise.deleteOne();
    await workoutLogs.findOneAndDelete({ workoutId });
    res.status(200).json({ success: true, message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
