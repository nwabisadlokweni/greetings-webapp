module.exports = function greetFactory() {

    // var objectKeys = Object.keys(people);
    // var objectEntries = Object.entries(people);
    let namesList = {
        //    // const namesList = {
        //         unalo: 3,
        //         nwabisa: 2,
        //         sino: 1,
        //      // }
    }
    function setTheName(name) {
        if (namesList[name] === undefined) {
            namesList[name] = 0;
        }
        namesList[name]++
    }

    function getTheName() {
        return namesList;
    }

    function countForOne(forOne) {  //count for one person
        return namesList[forOne];
        //         for (count in people){
        // console.log(`key = ${count} vaue = ${people[count]}`)
        //         }
        //     //       const keys = Object.keys(namesList)
        //     //     for (const [namesList, count] of entries) {
        //     //         console.log(`you have greeted ${namesList} ${count} times`)
        //     //       }

        //     //       // Result
        //     //     // you have greeted unalo 3 times
        //     //     // you have greeted nwabisa 2 times
        //     //     // you have greeted sino 1 times
        //     //    // return username;
    }

    function errorMessage(languageClicked, theNames) {
        var message = '';
        if (theNames === '') {
            message = "please enter your name";
        }
        else if (!languageClicked) {
            message = "choose your home language";
        }
        return message;
    }

    function theLanguage(languageClicked, theNames) {
        // if (languageClicked === '') {
        //     return "choose your home language";
        // }

        // if (theNames === '') {

        if (languageClicked === 'English') {
            return "Greetings, " + theNames;
        }

        // if (languageClicked === 'Afrikaans') {
        //     return "Hallo, " + theNames;
        // }

        if (languageClicked === 'IsiXhosa') {
            return "Molo, " + theNames;
        }

        if (languageClicked === 'IsiZulu') {
            return "Sawubona, " + theNames;
        }

        if (languageClicked === 'Venda') {
            return "Ndaa, " + theNames;
        }
    }
    //}

    function counter() {
        return Object.keys(namesList).length;
    }

    // function reset() {
    //     delete from counter();
    //     return "";
    // }

    return {
        setTheName,
        getTheName,
        theLanguage,
        counter,
        errorMessage,
        countForOne
        //reset
    }
}