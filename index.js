const express = require('express');
const app = express();
const port = process.env.PORT || 1000;
require('dotenv').config()
const mongoose = require('mongoose')

app.use(express.json())

45;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL)
    .then(() => {
    app.listen(port, () => console.log("listening on port ", port));
    })
    .catch(err => console.log(err))

app.get('/', (req,res) => {
    res.send('pro builder running')
})

