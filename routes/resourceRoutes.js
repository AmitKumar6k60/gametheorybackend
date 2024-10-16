// routes/resourceRoutes.js

const express = require('express');
const {
  getResources,
  getResourceById,
  addResource,
  deleteResource,
  getResourceByCentreIdAndSportId
} = require('../controllers/resourceController');

const router = express.Router();

// Route to get all resources
router.get('/resources', getResources);

// Route to get a specific resource by ID
router.get('/resources/:resourceId', getResourceById);

// Route to add a new resource
router.post('/resources', addResource);

// Route to delete a resource by ID
router.delete('/resources/:resourceId', deleteResource);

router.get('/resources/:centreId/:sportId', getResourceByCentreIdAndSportId);

module.exports = router;
