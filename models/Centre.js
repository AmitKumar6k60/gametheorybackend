const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Centre = sequelize.define('Centre', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false, // Automatically adds `createdAt` and `updatedAt` fields
});

module.exports = Centre;
