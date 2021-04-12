var sql = require('mssql');
const poolConnection = require('../connectionSQL/poolConnection');

exports.exampleFunct = async (req) => {
    try {
        const pool = await poolConnection.getPoolConnection();
        let result = await pool.request()
            .execute('example');
        return result;
    } catch (err) {
        throw err;
    }
}

sql.on('error', err => {
    console.log(err);
})

/*
 let result2 = await pool.request()
     .input('input_parameter', sql.Type, value)
     .output('output_parameter', sql.Type, 0)
     .execute('procedure_name') // Stored procedure
     .query('select * from TABLE'); // Query execute
 */
