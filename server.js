const express = require('express');
const mongodb = require('./db/db');
const bodyParser = require('body-parser');
const contacts = require('./controllers/contacts')

const app = express();
const PORT = 3777

app.use(bodyParser.json());
app.use('/', require('./routes/contacts'));

mongodb.initDb((err) => {
  if(err) {
    console.log(`Following error encountered during database init ${err}`)
  } else {
    app.listen(PORT, () => {console.log(`Running on port ${PORT}`)});
  }
})
