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
        //  await pool.query("delete from categories;");
    });

    it('should insert names in the db test', async function () {

        // the Factory Function is called greetFactory
        let greetings = greetFactory(pool);
        await greetings.insert("Nwabisa");
        await greetings.insert("Zola");
        var name = await greetings.counter();

        //let greet = await greetFactory.all();
        assert.equal(2, name);

    });
    after(function () {
        pool.end();
    })

    // it('should pass the db test', async function(){

    //     // the Factory Function is called greetFactory
    //     let greetings = greetFactory(pool);
    //     await greetings.insert("Nwabisa");
    //     var name = await greetings.counter();

    //     //let greet = await greetFactory.all();
    //     assert.equal(1, name);

    // });
    // after(function(){
    //     pool.end();
    // })

});

describe("Greetings exercise", function () {
    it("should be able to set names", function () {
        let greetings = greetFactory();
        //var theMessage = greetings.theLanguage('English', 'Nwabisa')
        greetings.setTheName("Nwabisa");
        greetings.setTheName("Sino");
        greetings.setTheName("Mvelo");
        greetings.setTheName("Yanela");
        greetings.setTheName("Unalo");

        assert.equal(5, greetings.getTheName());

    })

    //     it("should be able to greet a person in English", function () {
    //         let greetings = greetFactory();
    //         var theMessage = greetings.theLanguage('English', 'Nwabisa')

    //         assert.equal(theMessage, "Greetings, Nwabisa");
    //     })

    //     it("should be able to greet a person in IsiXHosa", function () {
    //         let greetings = greetFactory();
    //         var theMessage = greetings.theLanguage('IsiXhosa', 'Nwabisa')

    //         assert.equal(theMessage, "Molo, Nwabisa");
    //     })

    //     it("should be able to greet a person in IsiZulu", function () {
    //         let greetings = greetFactory();
    //         var theMessage = greetings.theLanguage('IsiZulu', 'Nwabisa')

    //         assert.equal(theMessage, "Sawubona, Nwabisa");
    //     })

    //     it("should be able to greet a person in Venda", function () {
    //         let greetings = greetFactory();
    //         var theMessage = greetings.theLanguage('Venda', 'Nwabisa')

    //         assert.equal(theMessage, "Ndaa, Nwabisa");
    //     })

    //     it("should count how many names have been entered", function () {
    //         let greetings = greetFactory();

    //         greetings.setTheName("Andre");
    //         greetings.setTheName("Nwabisa");
    //         greetings.setTheName("Vhudi");
    //         greetings.setTheName("Bongani");
    //         greetings.setTheName("Unalo");
    //         greetings.setTheName("Mvelo");


    //         assert.equal(6, greetings.counter()); 
    //     })
});
