/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const routes = require('./routes/routes');

app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
