module.exports = function greetFactory(pool) {

    async function setTheName(nameList) {
        var check = await pool.query('select name from greeting where name = $1', [nameList]);
        return check;
    }

    async function getTheNames() {
        var list = await pool.query('select * from greeting');
        return list.rows;
    }

    async function insert(names) {
        var inserting = await pool.query('insert into greeting (name, counter) values ($1, $2)', [names, 1])
        return inserting;
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
        return updating.rowCount;
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
        getTheNames,
        theLanguage,
        counter,
        insert,
        update,
        reset
    }
}