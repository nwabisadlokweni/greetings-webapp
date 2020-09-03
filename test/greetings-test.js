const assert = require('assert');
let greetFactory = require("../greetings");

describe("Greetings exercise", function () {
    it("should be able to set names", function () {
        let greetings = greetFactory();

        greetings.setTheName("Nwabisa");

        assert.equal("Nwabisa", greetings.getTheName());

    })

    it("should be able to get names", function () {
        let greetings = greetFactory();

        greetings.getTheName();

        assert.equal(name, greetings.getTheName());

    })

    it("should be able to greet a person in English", function () {
        let greetings = greetFactory();

        greetings.theLanguage();

        assert.equal("Greetings, Nwabisa", greetings.theLanguage("English", "Nwabisa"));

    })


    // it("should be able to greet a person in Afrikaans", function () {
    //     let greetings = greetFactory();

    //     greetings.theLanguage();

    //     assert.equal("Hallo, Nwabisa", greetings.theLanguage("Afrikaans", "Nwabisa"));

    // })

    it("should be able to greet a person in IsiXHosa", function () {
        let greetings = greetFactory();

        greetings.theLanguage();

        assert.equal("Molo, Nwabisa", greetings.theLanguage("IsiXhosa", "Nwabisa"));

    })

    it("should be able to greet a person in IsiZulu", function () {
        let greetings = greetFactory();

        greetings.theLanguage();

        assert.equal("Sawubona, Nwabisa", greetings.theLanguage("IsiZulu", "Nwabisa"));

    })

    it("should be able to greet a person in Venda", function () {
        let greetings = greetFactory();

        greetings.theLanguage();

        assert.equal("Ndaa, Nwabisa", greetings.theLanguage("Venda", "Nwabisa"));

    })

    // it("should count how many names have been entered", function (){
    //     let greetings = greetFactory();

    //     greetings.counter();
    //    // greetings.counter();

    //     assert.equal("Nwabisa", greetings.counter());
    // })
});
