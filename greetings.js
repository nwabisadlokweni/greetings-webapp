// function greetFactory(names) {

//     var theNames = names || [];

//     function setTheName(name) {
//         if (name){
//         if (theNames.includes(name)) {
//             return "This name already exist";
//         }
//         else {
//             theNames.push(name);
//         }
//     }
//     }
//     function getTheName() {
//         return theNames;
//     }


//     function theLanguage(languageClicked, theNames) {
//         if (languageClicked === 'English') {
//             return "Greetings, " + theNames;
//         }

//         if (languageClicked === 'Afrikaans') {
//             return "Hallo, " + theNames;
//         }

//         if (languageClicked === 'IsiXhosa') {
//             return "Molo, " + theNames;
//         }

//         if (languageClicked === 'IsiZulu') {
//             return "Sawubona, " + theNames;
//         }
//     }

//     function counter() {
//         return theNames.length;
//     }

//     return {
//         theNames,
//         setTheName,
//         getTheName,
//         theLanguage,
//         counter
//     }
// }









module.exports = function greetFactory() {

    var theNames = [];

    function setTheName(name) {
        if (theNames.includes(name)) {
            return "This name already exist";
        }
        else {
            theNames.push(name);
        }
    }

    function getTheName() {
        return theNames;
    }


    function theLanguage(languageClicked, theNames) {
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

    function counter() {
        return theNames.length;
    }

    return {
        theNames,
        setTheName,
        getTheName,
        theLanguage,
        counter
    }
}