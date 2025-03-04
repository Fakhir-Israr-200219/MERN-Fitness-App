const express = require("express");
const mongoose = require("mongoose");
const Exercise = require("../models/ExerciseModel");
const Cardio = require("../models/CardioModel");
const authenticateUser = require("../middleware/validateTokenHandler"); // Import middleware

const router = express.Router();

// Get all Exercise and Cardio data for logged-in user
// router.get("/combined", authenticateUser, async (req, res) => {
router.get("/combined", authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from JWT

    // Fetch exercises and cardio activities for the given user
    const [exercises, cardios] = await Promise.all([
      Exercise.find({ userId }), // Ensure field name matches schema
      Cardio.find({ userId }), // Ensure field name matches schema
    ]);

    res.json({ exercises, cardios });
  } catch (error) {
    console.error("Error fetching combined data:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


router.get("/updateLog", authenticateUser, async (req, res) => {
    try {
      const { workout } = req.params; // "exercise" or "cardio"
      const Model = workout === "exercise" ? Exercise : workout === "cardio" ? Cardio : null;
  
      if (!Model) {
        return res.status(400).json({ success: false, message: "Invalid workout type" });
      }
  
      const item = await Model.findById(req.params.id);
  
      if (!item || item.userId.toString() !== req.user.id) {
        return res.status(404).json({ success: false, message: `${workout} not found` });
      }
  
      const updatedItem = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
  
      res.status(200).json({ success: true, data: updatedItem });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
})
  

module.exports = router;
