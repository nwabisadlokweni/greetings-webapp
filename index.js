const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const greetFactory = require('./greetings');
//const flash = require('express-flash');
//const session = require('express-session');

const app = express();
const greetings = greetFactory();

app.engine('handlebars', exphbs({ layoutsDir: './views/layouts' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(session({
//     secret: "please enter your name",
//     resave: false,
//     saveUninitialized: true
// }));
// // initialise the flash middleware
// app.use(flash());

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/', function (req, res) {
    greetings.setTheName(req.body.nameEntered);
    greetings.theLanguage(req.body.language, req.body.nameEntered);
    var error = greetings.errorMessage(req.body.language, req.body.nameEntered)

    res.render('index', {
        message: (error === '') ? greetings.theLanguage(req.body.language, req.body.nameEntered) : error,
        count: greetings.counter(),
        // nameEntered: req.body.nameEntered,
        // greet: greetings.theLanguage(languageClicked, theNames)


        // reset: greetings.reset()
    })
});

// app.get('/', function (req, res) {
//     req.flash('info', 'Welcome');
//     res.render('index', {
//       title: 'Home'
//     })
//   });

//   app.get('/addFlash', function (req, res) {
//     req.flash('info', 'please enter your name');
//     res.redirect('/');
//   });

// app.get('/the-route', function (req, res) {
//     req.flash('info', 'Flash Message Added');
//     res.redirect('/');
// });

app.get('/greeted', function (req, res) {
    res.render('greeted', { greeted: greetings.getTheName() });
});

// app.get('/counter/user_name', function (req, res) {

// });

app.get('/greeted/:username', function (req, res) {
    const username = req.params.username;
    var counting = greetings.countForOne(forOne);

    res.render('greeted', { greetedName: `${username} has been greeted ${counting} times` });
    // res.render('message', {
    //     name: username
    // });
});

const PORT = process.env.PORT || 3007;

app.listen(PORT, function () {
    console.log("App started at port", PORT)
});
