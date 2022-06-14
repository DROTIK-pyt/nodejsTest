const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});

app.get('/data', (req, res) => {
    res.send({ message: 'this page has data' });
});

app.listen(8089, () => {
    console.log('Application listening!');
});