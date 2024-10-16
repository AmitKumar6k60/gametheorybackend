const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Centre = require('./Centre');

const Sport = sequelize.define('Sport', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false, // Optional, if sports don't require createdAt/updatedAt fields
});

// Relationships
Sport.belongsTo(Centre, { foreignKey: 'centreId', onDelete: 'CASCADE' });

module.exports = Sport;
