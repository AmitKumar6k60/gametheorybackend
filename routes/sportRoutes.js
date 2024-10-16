const express = require('express');
const {
  getSports,
  getSportsByCentreId, // New function for fetching by centreId
  getSportById,
  addSport,
  deleteSport,
} = require('../controllers/sportController');

const router = express.Router();

// Route to get all sports
router.get('/sports', getSports);

// Route to get sports by centreId
router.get('/sports_with_centreId/:centreId', getSportsByCentreId); // New route for fetching by centreId

// Route to get a specific sport by ID
router.get('/sports/:sportId', getSportById);

// Route to add a new sport
router.post('/sports', addSport);

// Route to delete a sport by ID
router.delete('/sports/:sportId', deleteSport);

module.exports = router;
