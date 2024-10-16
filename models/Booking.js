const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Centre = require('./Centre');
const Sport = require('./Sport');
const Resource = require('./Resource');

// Define the Booking model
const Booking = sequelize.define('Booking', {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true,
        },
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
});

// Define relationships (associations)
Booking.belongsTo(Centre, { foreignKey: 'centreId', onDelete: 'CASCADE' });
Booking.belongsTo(Sport, { foreignKey: 'sportId', onDelete: 'CASCADE' });
Booking.belongsTo(Resource, { foreignKey: 'resourceId', onDelete: 'CASCADE' });

module.exports = Booking;
