-- Create City data
INSERT INTO `city` (`id`, `name`, `state`, `country`, `createdAt`, `updatedAt`) VALUES 
(1, 'Mumbai', 'Maharashtra', 'India', NOW(), NOW()),
(2, 'Delhi', 'Delhi', 'India', NOW(), NOW()),
(3, 'Varanasi', 'Uttar Pradesh', 'India', NOW(), NOW()),
(4, 'Bangalore', 'Karnataka', 'India', NOW(), NOW());

-- Create Airport data
INSERT INTO `Airports` (`id`, `name`, `code`, `address`, `cityId`, `createdAt`, `updatedAt`) VALUES 
(1, 'Chhatrapati Shivaji International Airport', 'MUM', 'Mumbai International Airport, Andheri East, Mumbai', 1, NOW(), NOW()),
(2, 'Indira Gandhi International Airport', 'DEL', 'New Delhi, Delhi', 2, NOW(), NOW()),
(3, 'Lal Bahadur Shastri International Airport', 'VNS', 'Varanasi, Uttar Pradesh', 3, NOW(), NOW()),
(4, 'Kempegowda International Airport', 'BLR', 'Devanahalli, Bangalore', 4, NOW(), NOW());

-- Create Airplane data
INSERT INTO `Airplanes` (`id`, `modelNumber`, `capacity`, `createdAt`, `updatedAt`) VALUES 
(1, 'Boeing 737', 180, NOW(), NOW()),
(2, 'Airbus A320', 150, NOW(), NOW()),
(3, 'Embraer E195', 120, NOW(), NOW());

-- Create Flight data
INSERT INTO `Flights` (`id`, `flightNumber`, `airplaneId`, `departureAirportId`, `arrivalAirportId`, `arrivalTime`, `departureTime`, `price`, `boardingGate`, `totalSeats`, `createdAt`, `updatedAt`) VALUES 
(1, 'AI101', 2, 'MUM', 'DEL', '2025-03-18 12:30:00', '2025-03-18 10:30:00', 5000, 'G1', 120, NOW(), NOW()),
(2, 'AI102', 1, 'DEL', 'MUM', '2025-03-18 18:30:00', '2025-03-18 16:30:00', 4500, 'G2', 150, NOW(), NOW()),
(3, 'AI103', 3, 'MUM', 'VNS', '2025-03-19 09:30:00', '2025-03-19 07:30:00', 3500, 'G3', 100, NOW(), NOW()),
(4, 'AI104', 2, 'VNS', 'DEL', '2025-03-19 15:30:00', '2025-03-19 14:00:00', 3000, 'G4', 130, NOW(), NOW()),
(5, 'AI105', 1, 'DEL', 'BLR', '2025-03-20 11:30:00', '2025-03-20 09:30:00', 6000, 'G5', 160, NOW(), NOW()),
(6, 'AI106', 3, 'BLR', 'MUM', '2025-03-20 18:00:00', '2025-03-20 16:30:00', 4200, 'G6', 110, NOW(), NOW()); 