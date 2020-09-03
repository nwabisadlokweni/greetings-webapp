const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const greetFactory = require('./greetings');

const app = express();
const greetings = greetFactory();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', function (req, res) {
    res.render('index', {

    });
});

app.post('/greetings', function (req, res) {
//button
greetFactory.setTheName({
    theName: req.body.theName
});
console.log(greetings.getTheName());
res.redirect('/');
});

app.get('/greeted', function (req, res) {

});

app.get('/counter/user_name', function (req, res) {

});

const PORT = process.env.PORT || 3007;

app.listen(PORT, function () {
    console.log("App started at port", PORT)
});
