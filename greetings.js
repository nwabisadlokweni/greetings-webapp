module.exports = function greetFactory(pool) {
    //let namesList = {}
    async function setTheName(nameList) {
        // if (namesList[name] === undefined) {
        //     namesList[name] = 0;
        // }
        //await namesList.query('insert')
        //sql
        var check = await pool.query('select name from greeting where name = $1', [nameList]);
        // console.log(check);
        return check;

        //  namesList[name]++
    }

    function getTheName() {
        var list = pool.query('select * from greeting');
        return list;
    }

    async function insert(names) {
        var inserting = await pool.query('insert into greeting (name, counter) values ($1, $2)', [names, 1])
        // console.log(names)
        return inserting;
    }

    // function countForOne(forOne) {  //count for one person
    //     return pool.query('insert into greeting (names, counter) values ($1, $2)', [{ username }, 1])[forOne];
    // }

    function errorMessage(languageClicked, theNames) {
        var message = '';
        if (theNames === '') {
            message = "Please enter your name";
        }
        else if (!languageClicked) {
            message = "choose your home language";
        }
        return message;
    }

    async function theLanguage(languageClicked, theNames) {

        var myNames = await setTheName(theNames);
        if (myNames.rowCount > 0) {
            await update(theNames);
        } else {
            await insert(theNames);
        }

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

    async function update(updated) {
        var updating = await pool.query('update greeting set counter=counter+1 where name=$1', [updated]);
        //console.log(updated)
        return updating;
    }

    async function counter() {
        var counting = await pool.query('select * from greeting');
        return counting.rowCount;
    }

    async function reset() {
        var del = await pool.query('delete from greeting');
        return del;
    }

    return {
        setTheName,
        getTheName,
        theLanguage,
        counter,
        errorMessage,
        // countForOne,
        insert,
        update,
        //  dataNames
        reset
    }
}