const mongoose = require("mongoose");
const { DEV_DB_URL, NODE_ENV, PROD_DB_URL } = require("./serverConfig");

async function connectDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(DEV_DB_URL);
    } else if (NODE_ENV === "production") {
      await mongoose.connect(PROD_DB_URL);
    }

    console.log(`Connected to MongoDB Database from ${NODE_ENV} environment`);
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
}


module.exports = connectDB;
