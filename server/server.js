const express = require('express');
const { application } = require('../config')

const app = express();

app.use(express.static('client/dist'));
app.use(express.json());

app.listen(application.port, () => {
  console.log('Client server listening on ' + application.port)
});