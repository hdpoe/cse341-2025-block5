const mongodb = require('../db/db');

const getContacts = async (req, res) => {
  const results = await mongodb.getDatabase().db().collection('contacts').find();
  console.log(`Results retrieved: ${results}`)
  results.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(`Contacts are ${contacts}`);
    res.status(200).json(contacts);
  });
}

const createContact = async (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDatabase().db().collection('contacts').insertOne(user);
  if(response.acknowledged) {
    res.status(204).send();
    // TODO: Create getContact method
    // let contact = getContact(response.insertId)
    // res.status(200).json(contact)
  } else {
    res.status(500).json(response.error || 'Error occurred during contact creation');
  }
}

module.exports = {
  createContact,
  getContacts
}
