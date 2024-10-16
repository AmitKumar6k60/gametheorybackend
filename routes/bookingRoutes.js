const express = require('express');
const {
    getBookings,
    createBooking,
    getAllBookings,
    deleteBooking // Import your delete function here
} = require('../controllers/bookingController');

const router = express.Router();

// Route to get all bookings
router.get('/bookings', getAllBookings);

// Route to get bookings through ids
router.get('/:centreId/:sportId/bookings', getBookings);

// Create new bookings
router.post('/bookings', createBooking);

// Delete a booking by ID
router.delete('/bookings/:id', deleteBooking); // New delete route

module.exports = router;
