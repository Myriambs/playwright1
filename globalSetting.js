const dotenv = require('dotenv');

function loadGlobalSettings() {
  // Load environment variables from the .env file
  dotenv.config();

  console.log('Global settings loaded:');
  console.log(`BASE_URL: ${process.env.BASE_URL}`);
  console.log(`API_KEY: ${process.env.API_KEY}`);

  // Perform any other global setup logic if necessary
}

module.exports = { loadGlobalSettings };