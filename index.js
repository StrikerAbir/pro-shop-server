const express = require('express');
const app = express();
const port = process.env.PORT || 1000;
require('dotenv').config()
const mongoose = require('mongoose');
const cors = require("cors");

const userApi = require('./routes/userApi')
const sliderApi=require('./routes/sliderApi')

app.use(cors());
app.use(express.json())

// mongodb connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL,{dbName:"pro-shop"})
    .then(() => {
        console.log('db connected');
    })
    .catch(err => console.log(err))

    // routes
    app.use('/user',userApi)
app.use('/slider', sliderApi)
    
app.listen(port, () => console.log("listening on port ", port));