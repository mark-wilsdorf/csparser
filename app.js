const sql = require("mssql");
const utils = require("./utils");
const config = require("config-yml");

const pool = new sql.ConnectionPool(config.connectionConfig);
pool.connect().then(pool => {
    return pool.query(utils.query);
}).then(result => {
    result.recordset.forEach(record => {
        console.log(record)
    });
}).catch(err => {
    console.log("Error occurred ", err);
});

