const assert = require('assert');
let Greetings = require("../greetings");

describe("Greetings exercise", function () {
    it("should be able to set names", function () {
        let greeting = greetFactory();

        greeting.setTheName("Nwabisa");
        
        assert.equal("Nwabisa", greeting.getTheName());
    
    })

    it("should be able to get names", function () {
        let greeting = greetFactory();

        greeting.getTheName();
        
        assert.equal(name, greeting.getTheName());
    
    })

    it("should be able to greet a person in English", function () {
        let greeting = greetFactory();

        greeting.theLanguage();
        
        assert.equal("Greeting, Nwabisa", greeting.theLanguage("English", "Nwabisa"));
    
    })


    // it("should be able to greet a person in Afrikaans", function () {
    //     let greeting = greetFactory();

    //     greeting.theLanguage();
        
    //     assert.equal("Hallo, Nwabisa", greeting.theLanguage("Afrikaans", "Nwabisa"));
    
    // })

    it("should be able to greet a person in IsiXHosa", function () {
        let greeting = greetFactory();

        greeting.theLanguage();
        
        assert.equal("Molo, Nwabisa", greeting.theLanguage("IsiXhosa", "Nwabisa"));
    
    })
    
    it("should be able to greet a person in IsiZulu", function () {
        let greeting = greetFactory();

        greeting.theLanguage();
        
        assert.equal("Sawubona, Nwabisa", greeting.theLanguage("IsiZulu", "Nwabisa"));
    
    })

    it("should be able to greet a person in Venda", function () {
        let greeting = greetFactory();

        greeting.theLanguage();
        
        assert.equal("Ndaa, Nwabisa", greeting.theLanguage("Venda", "Nwabisa"));
    
    })

    // it("should count how many names have been entered", function (){
    //     let greeting = greetFactory();

    //     greeting.counter();
    //    // greeting.counter();

    //     assert.equal("Nwabisa", greeting.counter());
    // })
});
