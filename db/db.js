const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
  if(database) {
    console.log("DB alread initialized");
    callback(database);
  }
  console.log("Connecting to database");
  MongoClient.connect('mongodb+srv://hpoe:<db_password>@cse341-demo.208kmf7.mongodb.net/').then((client) => {
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
