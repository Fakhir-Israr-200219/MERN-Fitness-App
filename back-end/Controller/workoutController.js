const Workout = require("../models/workOutModel");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save images in an "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});
const upload = multer({ storage });

// Create a new workout (with optional image upload)
exports.addWorkout = async (req, res) => {
  try {
    const { title, category } = req.body;
    const userId = req.user.id;
    const img = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !category) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newWorkout = new Workout({ userId, title, category, img });
    await newWorkout.save();

    res.status(201).json({ success: true, data: newWorkout });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all workouts for a specific user
exports.getCardiosByUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const { category } = req.query;

    // Ensure userId is an ObjectId
    const filter = { userId: new mongoose.Types.ObjectId(userId) };

    if (category) {
      filter.category = category;
    }

    const exercises = await Workout.find(filter);

    res.status(200).json({ success: true, data: exercises });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single workout by ID
exports.getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout || workout.userId.toString() !== req.user.id) {
      return res
        .status(404)
        .json({ success: false, message: "Workout not found" });
    }

    res.status(200).json({ success: true, data: workout });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a workout by ID
exports.updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout || workout.userId.toString() !== req.user.id) {
      return res
        .status(404)
        .json({ success: false, message: "Workout not found" });
    }

    const img = req.file ? `/uploads/${req.file.filename}` : workout.img; // Keep existing image if not updated
    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      { ...req.body, img },
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, data: updatedWorkout });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a workout by ID
exports.deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout || workout.userId.toString() !== req.user.id) {
      return res
        .status(404)
        .json({ success: false, message: "Workout not found" });
    }

    await workout.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "Workout deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Multer middleware for handling image uploads
exports.uploadMiddleware = upload.single("img");
