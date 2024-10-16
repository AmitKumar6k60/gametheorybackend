const Centre = require('../models/Centre');

// Get all centres
exports.getCentres = async (req, res) => {
    try {
        const centres = await Centre.findAll();
        res.json(centres);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching centres' });
    }
};

// Get a specific centre by ID
exports.getCentreById = async (req, res) => {
    try {
        const centre = await Centre.findByPk(req.params.centreId);
        if (centre) {
            res.json(centre);
        } else {
            res.status(404).json({ error: 'Centre not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching centre' });
    }
};

// Create a new centre
exports.createCentre = async (req, res) => {
    const { name, location } = req.body;
    try {
        const newCentre = await Centre.create({ name, location });
        res.status(201).json(newCentre);
    } catch (error) {
        res.status(500).json({ error: 'Error creating centre' });
    }
};

// Delete a centre
exports.deleteCentre = async (req, res) => {
    try {
        const centreId = req.params.centreId;
        const centre = await Centre.findByPk(centreId);

        if (!centre) {
            return res.status(404).json({ error: 'Centre not found' });
        }

        await centre.destroy();
        res.json({ message: 'Centre deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting centre' });
    }
};
