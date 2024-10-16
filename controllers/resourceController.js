// controllers/resourceController.js

const Resource = require('../models/Resource'); // Import the Resource model

// Get all resources
const getResources = async (req, res) => {
  try {
    const resources = await Resource.findAll();
    res.status(200).json(resources);
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get resource by ID
const getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findByPk(req.params.resourceId);
    if (resource) {
      res.status(200).json(resource);
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    console.error('Error fetching resource:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Add a new resource
const addResource = async (req, res) => {
  try {
    const { name, type, centreId, sportId } = req.body; // Extract centerId and sportId from the request body
    const newResource = await Resource.create({ name, type, sportId, centreId }); // Include centerId and sportId in the resource creation
    res.status(201).json(newResource);
  } catch (error) {
    console.error('Error adding resource:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Delete a resource by ID
const deleteResource = async (req, res) => {
  try {
    const result = await Resource.destroy({
      where: { id: req.params.resourceId },
    });
    if (result) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    console.error('Error deleting resource:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller method to get resources by centreId and sportId
const getResourceByCentreIdAndSportId = async (req, res) => {
  const { centreId, sportId } = req.params; // Extract the centreId and sportId

  if (!centreId || !sportId) {
    return res.status(400).json({ message: 'Invalid or missing centreId or sportId' });
  }

  try {
    // Query resources based on centreId and sportId using findAll
    const resources = await Resource.findAll({
      where: {
        centreId: centreId,
        sportId: sportId,
      },
    });

    // Handle no results found
    if (!resources || resources.length === 0) {
      return res.status(404).json({ message: 'No resources found' });
    }

    // Return the resources
    res.status(200).json(resources);
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ error: 'Server error !!!' });
  }
};

module.exports = {
  getResources,
  getResourceById,
  getResourceByCentreIdAndSportId,
  addResource,
  deleteResource,
};
