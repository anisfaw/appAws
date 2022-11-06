var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
mongoose.connect('mongodb+srv://angulardyma:123123123@cluster0.wq1uxma.mongodb.net/?retryWrites=true&w=majority', {}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connection db done !')
    }
})
//
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.use(express.static("public"));

app.get("/*", function (req, res) {
    res.sendFile("index.html", { root: "public" });
});


module.exports = app;
