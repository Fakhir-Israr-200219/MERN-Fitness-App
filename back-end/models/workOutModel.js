const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    category: { type: String, required: true }, // e.g., "cardio", "strength", "flexibility"
    img: { type: String }, // Store image URL or base64
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
