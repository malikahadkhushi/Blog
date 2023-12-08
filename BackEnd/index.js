const express = require("express");
const userAuthRoutes = require("./Routes/userAuthRoutes");
require('dotenv').config();
require('./dbConnection/index');
const app = express();

app.use(express.json());

app.use('/',userAuthRoutes);

const port = process.env.port;
app.listen(port , ()=>{
    console.log(`Server is Running on ${port}`);
})