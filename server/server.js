require('dotenv').config(); // used to read .env file

const express = require('express');
const router = require('./routes.js');
const morgan = require('morgan'); // middleware to track traffic in development
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

app.listen(process.env.PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}`);
});
