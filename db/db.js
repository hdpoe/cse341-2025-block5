const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

let database;

const initDb = (callback) => {
  if(database) {
    console.log("DB alread initialized");
    callback(database);
  }
  console.log("Connecting to database");
  MongoClient.connect(process.env.MONGODB_URL).then((client) => {
    console.log("Connected to the database");
    database = client;
    callback(null, database);
  }).catch((err) => {
    console.log("Error connecting to database");
    callback(err);
  });
}

const getDatabase = () => {
  if(!database) {
    throw Error('DB not initialized');
  }
  return database;
}

module.exports = {
  initDb,
  getDatabase
};
