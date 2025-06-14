const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_DB_URL = process.env.DEV_DB_URL;
const PROD_DB_URL = process.env.PROD_DB_URL;

module.exports = {
  PORT,
  NODE_ENV,
  DEV_DB_URL,
  PROD_DB_URL
};
