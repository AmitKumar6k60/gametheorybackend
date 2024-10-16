// routes/centreRoutes.js

const express = require('express');
const { getCentres, getCentreById, createCentre, deleteCentre } = require('../controllers/centreController'); 
const router = express.Router();

// Route to get all centres
router.get('/centres', getCentres);

// Route to get a specific centre by ID
router.get('/centres/:centreId', getCentreById);

// Route to create a new centre
router.post('/centres', createCentre);

// Route to delete a centre
router.delete('/centres/:centreId', deleteCentre);

module.exports = router;
