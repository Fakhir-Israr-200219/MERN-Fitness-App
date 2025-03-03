const Exercise = require("../models/ExerciseModel");

// Create a new exercise entry
exports.createExercise = async (req, res) => {
  try {
    const { userId, exercise, reps, sets, weight } = req.body;
    const newExercise = new Exercise({ userId, exercise, reps, sets, weight });
    await newExercise.save();
    res.status(201).json({ success: true, data: newExercise });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all exercises for a user
exports.getExercisesByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const exercises = await Exercise.find({ userId });
    res.status(200).json({ success: true, data: exercises });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single exercise by ID
exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) return res.status(404).json({ success: false, message: "Exercise not found" });

    res.status(200).json({ success: true, data: exercise });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update an exercise by ID
exports.updateExercise = async (req, res) => {
  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedExercise) return res.status(404).json({ success: false, message: "Exercise not found" });

    res.status(200).json({ success: true, data: updatedExercise });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete an exercise by ID
exports.deleteExercise = async (req, res) => {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!deletedExercise) return res.status(404).json({ success: false, message: "Exercise not found" });

    res.status(200).json({ success: true, message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
