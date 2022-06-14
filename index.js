const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});

app.listen(8888, () => {
    console.log('Application listening!');
});