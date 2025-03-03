const Cardio = require('../models/CardioModel');

// Add a new cardio exercise
exports.addCardio = async (req, res) => {
  try {
    const { userId, exercise, duration, distance } = req.body;

    if (!userId || !exercise || !duration || !distance) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newCardio = new Cardio({ userId, exercise, duration, distance });
    await newCardio.save();

    res.status(201).json({ message: 'Cardio exercise added successfully', data: newCardio });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all cardio exercises for a user
exports.getCardios = async (req, res) => {
  try {
    const { userId } = req.params;
    const exercises = await Cardio.find({ userId });

    res.status(200).json({ message: 'Cardio exercises fetched', data: exercises });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a cardio exercise
exports.deleteCardio = async (req, res) => {
  try {
    const { id } = req.params;
    await Cardio.findByIdAndDelete(id);

    res.status(200).json({ message: 'Cardio exercise deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
