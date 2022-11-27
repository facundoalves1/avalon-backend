const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
dotenv.config({path : './configuration/config.env'});
require('./configuration/configDb');
require('./configuration/cloudinaryConfig');

//ROUTES
app.use('/api/',require('./routes/items'));

app.get('/api/home',(req,res)=>{

    res.status(200).json({ status: "Working" });

});

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`SERVER LISTENING ON PORT: ${PORT} `));