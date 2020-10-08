const assert = require('assert');
let greetFactory = require("../greetings");

describe("Greetings exercise", function () {
    it("should be able to set names", function () {
        let greetings = greetFactory();
        //var theMessage = greetings.theLanguage('English', 'Nwabisa')
        greetings.setTheName("Nwabisa");
        greetings.setTheName("Sino");
        greetings.setTheName("Mvelo");
        greetings.setTheName("Yanela");
        greetings.setTheName("Unalo");

        assert.equal(5,greetings.getTheName());

    })

    it("should be able to greet a person in English", function () {
        let greetings = greetFactory();
        var theMessage = greetings.theLanguage('English', 'Nwabisa')
    
        assert.equal(theMessage, "Greetings, Nwabisa");
    })

    it("should be able to greet a person in IsiXHosa", function () {
        let greetings = greetFactory();
        var theMessage = greetings.theLanguage('IsiXhosa', 'Nwabisa')
    
        assert.equal(theMessage, "Molo, Nwabisa");
    })

    it("should be able to greet a person in IsiZulu", function () {
        let greetings = greetFactory();
        var theMessage = greetings.theLanguage('IsiZulu', 'Nwabisa')
    
        assert.equal(theMessage, "Sawubona, Nwabisa");
    })

    it("should be able to greet a person in Venda", function () {
        let greetings = greetFactory();
        var theMessage = greetings.theLanguage('Venda', 'Nwabisa')
    
        assert.equal(theMessage, "Ndaa, Nwabisa");
    })

    it("should count how many names have been entered", function () {
        let greetings = greetFactory();

        greetings.setTheName("Andre");
        greetings.setTheName("Nwabisa");
        greetings.setTheName("Vhudi");
        greetings.setTheName("Bongani");
        greetings.setTheName("Unalo");
        greetings.setTheName("Mvelo");


        assert.equal(6, greetings.counter()); 
    })
});
