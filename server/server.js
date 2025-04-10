const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

/*setting up config file with enviroment variables
  DB_URL - THE LINK OF DATABASE, IT IS NEEDED FOR CONNECTION TO DB */
dotenv.config({path: './main.env'});


const PORT = 8000;
app.listen(PORT, 'localhost', async (err) => {
    if(err) throw err;
    console.log('server is started');
});

/* connection to db by mongoose returns promise:
    serverSelectionTimeoutMS - times out for connection*/ 
const serverSelectionTimeoutMS = 5000;
mongoose.connect(process.env.DB_URL, {
    serverSelectionTimeoutMS
}).then((value) => console.log('db is connected'))
  .catch((reason) => console.log(reason))


