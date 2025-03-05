// const mongoose = require("mongoose");
// const moment = require("moment-timezone");

// const getLocalDate = () => {
//   return moment().tz("Asia/Karachi").format(); // Stores full ISO 8601 format
// };

// const workoutLogs = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   workoutId: { type: mongoose.Schema.Types.ObjectId, required: true },
//   workoutType: { type: String, required: true, enum: ["Cardio", "Exercise"] }, // Determines reference model
//   sets: { type: Number, required: true },
//   // createdAt: { type: Date, default: Date.now },
//    createdAt: getLocalDate(),
// },
// // { timestamps: true }
// );

// // Add refPath to dynamically reference Cardio or Exercise model
// workoutLogs.path("workoutId").options.refPath = "workoutType";

// module.exports = mongoose.model("WorkoutLog", workoutLogs);

const mongoose = require("mongoose");
const moment = require("moment-timezone");

const getLocalDate = () => {
  return moment().tz("Asia/Karachi").toDate(); // Returns a Date object
};

const workoutLogs = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  workoutId: { type: mongoose.Schema.Types.ObjectId, required: true },
  workoutType: { type: String, required: true, enum: ["Cardio", "Exercise"] }, // Determines reference model
  sets: { type: Number, required: true },
  createdAt: { type: Date, default: getLocalDate }, // Use Date type and default function
});

// Add refPath to dynamically reference Cardio or Exercise model
workoutLogs.path("workoutId").options.refPath = "workoutType";

module.exports = mongoose.model("WorkoutLog", workoutLogs);
