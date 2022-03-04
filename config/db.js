const mongoose = require('mongoose');

module.exports = async () => {
  await mongoose.connect(DB_URL);
  console.log('Database is connected');
};
