require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');
const centreRoutes = require('./routes/centreRoutes'); 
const resourceRoutes = require('./routes/resourceRoutes');
const sportRoutes = require('./routes/sportRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Sync DB
sequelize.sync().then(() => {
    console.log("Database connected");
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

// API routes
app.use('/api', bookingRoutes);  // Routes for booking
app.use('/api', centreRoutes);    // Ensure the centre routes are correctly included
app.use('/api', resourceRoutes);
app.use('/api', sportRoutes);



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
