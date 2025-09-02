const express = require('express');
const app = express();
//const router = express.Router();

const PORT = 3777

app.get('/',
           (req,res) => {
             console.log("WE HAVE ACHIEVED VICTORY!");
             res.send("HELLO CSE341");
           }
          )

app.listen(PORT, () => {console.log(`Running on port ${PORT}`)});
