const express = require('express');
const routes = require('./route/restrudantRoutes');
const connectDB = require('./db');

const app = express();
connectDB();

const PORT = 3000;

app.use('/restaurants',routes)

app.listen(PORT, console.log(`server running on  ${PORT}`));