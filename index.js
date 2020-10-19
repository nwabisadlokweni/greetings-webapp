const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const greetFactory = require('./greetings');
const routeFactory = require('./routes');
const flash = require('express-flash');
const session = require('express-session');


const pg = require("pg");
const Pool = pg.Pool;

const app = express();

// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/greeting';

const pool = new Pool({
    connectionString
});

const greetings = greetFactory(pool);
const routesInstance = routeFactory(greetings)

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

app.get('/', routesInstance.index)

app.post('/', routesInstance.greet)

app.get('/greeted', routesInstance.getNames)

app.get('/counter/:username', routesInstance.getCounter)

app.get('/reset', routesInstance.resetDb)

const PORT = process.env.PORT || 3007;

app.listen(PORT, function () {
    console.log("App started at port", PORT)
});
