const express = require('express');
const mongodb = require('./db/db');


const app = express();
const PORT = 3777

const getContacts = async (req, res) => {
  const results = await mongodb.getDatabase().db().collection('contacts').find();
  console.log(`Results retrieved: ${results}`)
  results.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(`Contacts are ${contacts}`);
    res.status(200).json(contacts);
  });
}

app.get('/',
           (req,res) => {
             console.log("Retrieving records from database")
             getContacts(req, res);
           });

mongodb.initDb((err) => {
  if(err) {
    console.log(`Following error encountered during database init ${err}`)
  } else {
    app.listen(PORT, () => {console.log(`Running on port ${PORT}`)});
  }
})
