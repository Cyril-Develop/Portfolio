const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors');

app.use(cors());

const emailRoutes = require('./routes/email');

app.use(express.json());
app.use('/', emailRoutes);

module.exports = app;