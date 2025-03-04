const Cardio = require("../models/CardioModel");

// Create a new cardio exercise (Uses Auth Middleware)
exports.addCardio = async (req, res) => {
  try {
    const { exercise, duration, sets } = req.body;
    console.log(req.body)
    const userId = req.user.id; // Extract user ID from token middleware

    if (!exercise || !duration || !sets) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newCardio = new Cardio({ userId, exercise, duration, sets });
    await newCardio.save();

    res.status(201).json({ success: true, data: newCardio });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all cardio exercises for the logged-in user
exports.getCardiosByUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const exercises = await Cardio.find({ userId });

    res.status(200).json({ success: true, data: exercises });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single cardio exercise by ID (User can only access their own)
exports.getCardioById = async (req, res) => {
  try {
    const cardio = await Cardio.findById(req.params.id);
    if (!cardio || cardio.userId.toString() !== req.user.id) {
      return res.status(404).json({ success: false, message: "Cardio exercise not found" });
    }

    res.status(200).json({ success: true, data: cardio });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a cardio exercise by ID
exports.updateCardio = async (req, res) => {
  try {
    const cardio = await Cardio.findById(req.params.id);

    if (!cardio || cardio.userId.toString() !== req.user.id) {
      return res.status(404).json({ success: false, message: "Cardio exercise not found" });
    }

    const updatedCardio = await Cardio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, data: updatedCardio });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a cardio exercise by ID
exports.deleteCardio = async (req, res) => {
  try {
    const cardio = await Cardio.findById(req.params.id);

    if (!cardio || cardio.userId.toString() !== req.user.id) {
      return res.status(404).json({ success: false, message: "Cardio exercise not found" });
    }

    await cardio.deleteOne();
    res.status(200).json({ success: true, message: "Cardio exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
