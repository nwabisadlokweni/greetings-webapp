const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const greetFactory = require('./greetings');
const flash = require('express-flash');
const session = require('express-session');
const _ = require("lodash")

const pg = require("pg");
const Pool = pg.Pool;

const app = express();

// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/greeting';

const pool = new Pool({
    connectionString
});

const greetings = greetFactory(pool);

app.engine('handlebars', exphbs({ layoutsDir: './views/layouts' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
    secret: "fcsss",
    resave: false,
    saveUninitialized: true
}))
// initialise the flash middleware
app.use(flash());

app.get('/', async function (req, res) {
    res.render('index', { count: await greetings.counter() });
});

app.post('/', async function (req, res) {
    const name = _.capitalize(req.body.nameEntered)
    const lang = req.body.language

    if (!name) {
        req.flash('error', "Please enter your name");
    }
    else if (!lang) {
        req.flash('error', " Please choose your home language");
    } else {
        var nameGreeted = await greetings.theLanguage(lang, name);
    }
    res.render('index', {
        count: await greetings.counter(),
        message: nameGreeted
    })
});

app.get('/greeted', async function (req, res) {
    const theNames = await greetings.getTheNames();
    res.render('greeted', { greeted: theNames });
});

app.get('/counter/:username', async function (req, res) {
    const username = req.params.username;
    let namesList = {}
    var counting = await greetings.getTheNames();
    for (let i = 0; i < counting.length; i++) {
        if (namesList[counting[i].name] === undefined) {
            namesList[counting[i].name] = counting[i].counter
        }
    }
    res.render('message', {
        name: username,
        count: namesList[username]
    });
});

app.get('/reset', async function (req, res) {
    await greetings.reset()
    res.redirect('/');
});

const PORT = process.env.PORT || 3007;

app.listen(PORT, function () {
    console.log("App started at port", PORT)
});
