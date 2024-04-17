const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

const DB_URL = 'mongodb+srv://warna:warna123@mernapp.35fdaoe.mongodb.net/';

mongoose.connect(DB_URL, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB Connected Successfully...');
})
.catch((err) => console.log('DB Connection Error', err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});