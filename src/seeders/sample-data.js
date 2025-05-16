const { City, Airport, Airplane, Flight, sequelize } = require('../models');

const seedDatabase = async () => {
  try {
    // Disable foreign key checks
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

    // Create Cities
    const cities = await City.bulkCreate([
      { name: 'Mumbai', state: 'Maharashtra', country: 'India' },
      { name: 'Delhi', state: 'Delhi', country: 'India' },
      { name: 'Varanasi', state: 'Uttar Pradesh', country: 'India' },
      { name: 'Bangalore', state: 'Karnataka', country: 'India' }
    ]);

    console.log('Cities created successfully');

    // Create Airports
    const airports = await Airport.bulkCreate([
      { name: 'Chhatrapati Shivaji International Airport', code: 'MUM', address: 'Mumbai International Airport, Andheri East, Mumbai', cityId: 1 },
      { name: 'Indira Gandhi International Airport', code: 'DEL', address: 'New Delhi, Delhi', cityId: 2 },
      { name: 'Lal Bahadur Shastri International Airport', code: 'VNS', address: 'Varanasi, Uttar Pradesh', cityId: 3 },
      { name: 'Kempegowda International Airport', code: 'BLR', address: 'Devanahalli, Bangalore', cityId: 4 }
    ]);

    console.log('Airports created successfully');

    // Create Airplanes
    const airplanes = await Airplane.bulkCreate([
      { modelNumber: 'Boeing 737', capacity: 180 },
      { modelNumber: 'Airbus A320', capacity: 150 },
      { modelNumber: 'Embraer E195', capacity: 120 }
    ]);

    console.log('Airplanes created successfully');

    // Create Flights
    const flights = await Flight.bulkCreate([
      { flightNumber: 'AI101', airplaneId: 2, departureAirportId: 'MUM', arrivalAirportId: 'DEL', arrivalTime: '2025-03-18 12:30:00', departureTime: '2025-03-18 10:30:00', price: 5000, boardingGate: 'G1', totalSeats: 120 },
      { flightNumber: 'AI102', airplaneId: 1, departureAirportId: 'DEL', arrivalAirportId: 'MUM', arrivalTime: '2025-03-18 18:30:00', departureTime: '2025-03-18 16:30:00', price: 4500, boardingGate: 'G2', totalSeats: 150 },
      { flightNumber: 'AI103', airplaneId: 3, departureAirportId: 'MUM', arrivalAirportId: 'VNS', arrivalTime: '2025-03-19 09:30:00', departureTime: '2025-03-19 07:30:00', price: 3500, boardingGate: 'G3', totalSeats: 100 },
      { flightNumber: 'AI104', airplaneId: 2, departureAirportId: 'VNS', arrivalAirportId: 'DEL', arrivalTime: '2025-03-19 15:30:00', departureTime: '2025-03-19 14:00:00', price: 3000, boardingGate: 'G4', totalSeats: 130 },
      { flightNumber: 'AI105', airplaneId: 1, departureAirportId: 'DEL', arrivalAirportId: 'BLR', arrivalTime: '2025-03-20 11:30:00', departureTime: '2025-03-20 09:30:00', price: 6000, boardingGate: 'G5', totalSeats: 160 },
      { flightNumber: 'AI106', airplaneId: 3, departureAirportId: 'BLR', arrivalAirportId: 'MUM', arrivalTime: '2025-03-20 18:00:00', departureTime: '2025-03-20 16:30:00', price: 4200, boardingGate: 'G6', totalSeats: 110 }
    ]);

    // Enable foreign key checks
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

    console.log('Flights created successfully');
    console.log('Sample data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
    throw error;
  }
};

module.exports = seedDatabase; 