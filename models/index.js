// models/index.js
const Centre = require('./Centre');
const Sport = require('./Sport');
const Resource = require('./Resource');
const Booking = require('./Booking');

Centre.hasMany(Sport, { foreignKey: 'centreId' });
Sport.belongsTo(Centre, { foreignKey: 'centreId' });

Sport.hasMany(Resource, { foreignKey: 'sportId' });
Resource.belongsTo(Sport, { foreignKey: 'sportId' });

Centre.hasMany(Resource, { foreignKey: 'centreId' });
Resource.belongsTo(Centre, { foreignKey: 'centreId' });

Resource.hasMany(Booking, { foreignKey: 'resourceId' });
Booking.belongsTo(Resource, { foreignKey: 'resourceId' });
