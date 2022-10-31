const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'src')));
app.use(express.urlencoded({extended: false}))
app.listen(3001, () => console.log('Escuchando desde http://localhost:3001'));
