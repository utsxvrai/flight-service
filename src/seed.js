const { sequelize } = require('./models');
const seedDatabase = require('./seeders/sample-data');

const setupDatabase = async () => {
  try {
    // Connect to MySQL directly and create database
    console.log('Setting up database...');
    
    // Sync the database (create tables)
    console.log('Syncing database...');
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await sequelize.sync({ force: true }); // This will drop all tables and recreate them
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    console.log('Database synced successfully');

    // Seed the database with sample data
    console.log('Seeding database with sample data...');
    await seedDatabase();
    console.log('Database seeded successfully');

    console.log('Database setup complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
};

setupDatabase(); 