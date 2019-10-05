const env = require('dotenv');
env.config();
const routes = require('./routes');
var express = require('express');
var app = express();

app.use(routes);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/Quests.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});