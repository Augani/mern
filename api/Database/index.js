let mongoose = require("mongoose");
require("dotenv").config();
const server =
  process.env.NODE_ENV === "production"
    ? `${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-hvwmu.azure.mongodb.net`
    :"localhost:27017"; // REPLACE WITH YOUR DB SERVER
const database = "db"; // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(
        `mongodb${
          process.env.NODE_ENV === "production" ? "+srv" : ""
        }://${server}/${database}`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error" + err);
      });
  }
}

module.exports = new Database();
