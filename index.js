const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

//Middlewares
app.use(cors());
app.use(express.json());
dotenv.config({path : './configuration/config.env'});
require('./configuration/configDb');

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`SERVER LISTENING ON PORT: ${PORT} `));