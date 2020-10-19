const assert = require('assert');
const greetFactory = require("../greetings");

const pg = require("pg");
const Pool = pg.Pool;

// we are using a special test database for the tests
const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/greeting_test';

const pool = new Pool({
    connectionString
});

describe('The basic database web app', function () {

    beforeEach(async function () {
        // clean the tables before each test run
        await pool.query("delete from greeting;");
    });

    it('should insert names in the db test', async function () {
        // the Factory Function is called greetFactory
        let greetings = greetFactory(pool);

        await greetings.insert("Nwabisa");
        await greetings.insert("Zola");
        await greetings.insert("Unalo");
        await greetings.insert("Sino");
        await greetings.insert("Makho");
        await greetings.insert("Andre");

        var name = await greetings.counter();

        assert.equal(6, name);
    });

    it('should be able to insert names and get user counter', async function () {
        // the Factory Function is called greetFactory
        let greetings = greetFactory(pool);

        await greetings.insert("Zola");
        await greetings.insert("Zola");
        await greetings.insert("nwabisa");
        await greetings.insert("Zola");

        var name = await greetings.update("Zola");

        assert.equal(3, name);
    });

    it('should be able to greet in IsiXhosa', async function () {
        // the Factory Function is called greetFactory
        let greetings = greetFactory(pool);

        assert.equal('Molo, Namhla', await greetings.theLanguage("IsiXhosa", "Namhla"));
    });

    it('should be able to greet in IsiZulu', async function () {
        // the Factory Function is called greetFactory
        let greetings = greetFactory(pool);

        assert.equal('Sawubona, Zola', await greetings.theLanguage("IsiZulu", "Zola"));
    });

    it('should be able to greet in Venda', async function () {
        // the Factory Function is called greetFactory
        let greetings = greetFactory(pool);

        assert.equal('Ndaa, Sinovuyo', await greetings.theLanguage("Venda", "Sinovuyo"));
    });

    it('should be able to reset names on the database', async function () {
        // the Factory Function is called greetFactory
        let greetings = greetFactory(pool);

        await greetings.reset("Zola");
        await greetings.reset("Zola");
        await greetings.reset("nwabisa");
        await greetings.reset("Zola");

        var name = await greetings.counter();

        assert.equal(0, name);
    });

    after(function () {
        pool.end();
    })
});