module.exports = function routes(greetings) {
    const _ = require("lodash");

    async function index(req, res) {
        res.render('index', { count: await greetings.counter() });
    }

    async function greet(req, res) {
        const name = _.capitalize(req.body.nameEntered)
        const lang = req.body.language

        if (!name) {
            req.flash('error', "Please enter your name");
        }
        else if (!lang) {
            req.flash('error', " Please choose your home language");
        } 
        else if (isNaN(name) ===false){
            req.flash('error', name + " is not a name");
        }

        else {
            var nameGreeted = await greetings.theLanguage(lang, name);
        }
        res.render('index', {
            count: await greetings.counter(),
            message: nameGreeted
        })
    }

    async function getNames(req, res) {
        const theNames = await greetings.getTheNames();
        res.render('greeted', { greeted: theNames });
    };

    async function getCounter(req, res) {
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
    };

    async function resetDb(req, res) {
        await greetings.reset()
        res.redirect('/');
    };


    return {
        index,
        greet,
        getNames,
        getCounter,
        resetDb
    }
}