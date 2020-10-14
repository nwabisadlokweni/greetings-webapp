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

    it('should count how many names have been entered on the db test', async function () {
        // the Factory Function is called greetFactory
        let greetings = greetFactory(pool);

        await greetings.insert("Zola");
        await greetings.insert("Zola");
        await greetings.insert("nwabisa");
        await greetings.insert("Zola");

        var name = await greetings.counter();

        assert.equal(4, name);
    });

    it('should return an error message on the db test', async function () {
        // the Factory Function is called greetFactory
        let greetings = greetFactory(pool);
        var error = await greetings.errorMessage();

        await greetings.errorMessage();

        assert.equal("choose your home language", error);

    });

    after(function () {
        pool.end();
    })
});