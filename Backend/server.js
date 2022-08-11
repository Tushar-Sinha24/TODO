const express = require('express');
const connectDB=require('./config/db');
const dotenv= require('dotenv');
const cors = require('cors');


dotenv.config({path:'./config/config.env'})
connectDB();

// Route files
const todo=require('./routes/todo');

const app=express();

//body parser
app.use(express.json());

//Enable CORS
app.use(cors());

// Mount Router
app.use('/api/v1/todo',todo);


const PORT=process.env.PORT ||5000;

app.listen(
    PORT,
    console.log(`Server Runing in mode on port ${PORT}`)
    );