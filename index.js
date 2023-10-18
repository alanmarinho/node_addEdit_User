const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const userRouter = require('./routes/userRouter');
const conn = require('./db/conn');
const usermodel = require('./model/user');
const path = require('path');

app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(
    express.urlencoded({
        extended: true
    }))
app.use(express.json());

app.use('/', userRouter);

app.use(function (req, res) {
    res.status(404).render('404');
})

conn
    .sync()
    .then(() => {
        app.listen(port)
        console.log(`Project started in: http://localhost:${port}`);
    })
    .catch((err) => {
        console.log(err);
    })