const Booking = require('../models/Booking');

// Fetch all bookings
exports.getAllBookings = async (req, res) => {
    try {
        // Fetch all bookings from the database
        const bookings = await Booking.findAll();

        // Return the bookings
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching all bookings', error });
    }
};

// Get booking using ids
exports.getBookings = async (req, res) => {
    const { centreId, sportId } = req.params;
    
    try {
        // Fetch bookings by centreId and sportId
        const bookings = await Booking.findAll({
            where: {
                centreId: centreId,
                sportId: sportId
            }
        });

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};

// Create new booking 
exports.createBooking = async (req, res) => {
    const { date, start_time, end_time, customer_name, centreId, sportId, resourceId } = req.body;
    
    try {
        // Check for existing bookings with the same time slot
        const existingBooking = await Booking.findOne({
            where: {
                resourceId: resourceId,
                date: date,
                start_time: start_time,
                end_time: end_time
            }
        });

        // If a booking exists, prevent double booking
        if (existingBooking) {
            return res.status(400).json({ message: 'Time slot already booked for this resource.' });
        }

        // Create new booking if no conflicts
        const newBooking = await Booking.create({
            date,
            start_time,
            end_time,
            customer_name,
            centreId,
            sportId,
            resourceId
        });

        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

// Delete a booking by ID
exports.deleteBooking = async (req, res) => {
    const bookingId = req.params.id; // Get the booking ID from the request parameters

    try {
        const booking = await Booking.findByPk(bookingId); // Find booking by primary key

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' }); // If no booking is found
        }

        await booking.destroy(); // Delete the booking
        res.status(200).json({ message: 'Booking deleted successfully' }); // Success response
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).json({ message: 'Failed to delete booking' }); // Error response
    }
};
