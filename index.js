const express = require('express');
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
    port: 3306,
    password: "Password123#@!"
});

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    return console.log("Подключение к серверу MySQL успешно установлено");
});

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});

app.get('/data', (req, res) => {
    res.send({ message: 'this page has data' });
});

app.listen(8090, () => {
    console.log('Приложение запущено!');
});
