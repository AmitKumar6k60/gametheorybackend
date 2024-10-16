const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Sport = require('./Sport');
const Centre = require('./Centre');

const Resource = sequelize.define('Resource', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false, // No validation on types
    },
}, {
    timestamps: false, // Optional, since resources might not need createdAt/updatedAt fields
});

// Relationships
Resource.belongsTo(Sport, { foreignKey: 'sportId', onDelete: 'CASCADE' });
Resource.belongsTo(Centre, { foreignKey: 'centreId', onDelete: 'CASCADE' });

module.exports = Resource;
