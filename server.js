const express = require('express');
const bodyParser = require('body-parser');
const count = require('./api/count');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/count', count);
app.listen(3000, () => console.log("Servidor corriendo en localhost 3000"));