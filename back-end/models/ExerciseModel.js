const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exercise: { type: String, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true },
  weight: { type: Number, required: true },
}, { timestamps: true });

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
