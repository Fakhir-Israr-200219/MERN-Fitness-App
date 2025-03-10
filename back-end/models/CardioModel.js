const mongoose = require("mongoose");

const CardioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exercise: { type: String, required: true },
  duration: { type: Number, required: true }, // in km or miles
  sets: { type: Number, required: true }, // Number of sets/repetitions
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cardio", CardioSchema);
