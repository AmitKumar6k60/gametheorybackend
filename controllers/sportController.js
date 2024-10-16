// controllers/sportController.js

const Sport = require('../models/Sport'); // Import the Sport model

// Get all sports
const getSports = async (req, res) => {
  try {
    const sports = await Sport.findAll();
    res.status(200).json(sports);
  } catch (error) {
    console.error('Error fetching sports:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get sport by ID
const getSportById = async (req, res) => {
  try {
    const sport = await Sport.findByPk(req.params.sportId);
    if (sport) {
      res.status(200).json(sport);
    } else {
      res.status(404).json({ message: 'Sport not found' });
    }
  } catch (error) {
    console.error('Error fetching sport:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// function to get sports by centreId
const getSportsByCentreId = async (req, res) => {
  try {
    const { centreId } = req.params; // Get centreId from route parameters
    const sports = await Sport.findAll({ where: { centreId } }); // Fetch sports related to the centreId

    if (sports.length > 0) {
      res.status(200).json(sports);
    } else {
      res.status(404).json({ message: 'No sports found for this centreId' });
    }
  } catch (error) {
    console.error('Error fetching sports by centreId:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Add a new sport
const addSport = async (req, res) => {
  try {
    const { name, centreId } = req.body; // Adjust fields based on your Sport model
    const newSport = await Sport.create({ name, centreId }); // Include centerId in the new Sport creation
    res.status(201).json(newSport);
  } catch (error) {
    console.error('Error adding sport:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Delete a sport by ID
const deleteSport = async (req, res) => {
  try {
    const result = await Sport.destroy({
      where: { id: req.params.sportId },
    });
    if (result) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ message: 'Sport not found' });
    }
  } catch (error) {
    console.error('Error deleting sport:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getSports,
  getSportById,
  getSportsByCentreId,
  addSport,
  deleteSport,
};
