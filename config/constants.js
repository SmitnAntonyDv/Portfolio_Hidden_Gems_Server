require('dotenv').config();

module.exports = {
  SALT_ROUNDS: 10,
  PORT: process.env.PORT || 4000,
  AUTH_USER: process.env.AUTH_USER,
  AUTH_PASS: process.env.AUTH_PASS,
};
