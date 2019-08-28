const sql = require("mssql");
const utils = require("./utils");

const pool = new sql.ConnectionPool(utils.config);

pool.connect().then(pool => {
    return pool.query(utils.query);
}).then(result => {
    result.recordset.forEach(record => {
        console.log(record)
    });
}).catch(err => {
    console.log("Error occurred ", err);
});

