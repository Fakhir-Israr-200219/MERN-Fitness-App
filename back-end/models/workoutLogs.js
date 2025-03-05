const mongoose = require("mongoose");

const workoutLogs = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  workoutId: { type: mongoose.Schema.Types.ObjectId, required: true },
  workoutType: { type: String, required: true, enum: ["Cardio", "Exercise"] }, // Determines reference model
  sets: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Add refPath to dynamically reference Cardio or Exercise model
workoutLogs.path("workoutId").options.refPath = "workoutType";

module.exports = mongoose.model("WorkoutLog", workoutLogs);
