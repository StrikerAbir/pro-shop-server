const express = require('express');
const app = express();
const port = process.env.PORT || 1000;
require('dotenv').config()
const mongoose = require('mongoose');

const userApi=require('./routes/userApi')

app.use(express.json())

// mongodb connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('db connecte');
    })
    .catch(err => console.log(err))

    // routes
    app.use('/user',userApi)

app.listen(port, () => console.log("listening on port ", port));