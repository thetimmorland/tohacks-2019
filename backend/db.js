const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER + '@' + process.env.DB_NAME,
    password : process.env.DB_PASS,
});

function runQuery(query, callback) {
    connection.connect()
    console.log(connection)
    connection.query(q, function (error, results, fields) {
        if (error) throw error;
        callback(results, fields)
    })
    connection.end()
}

module.exports = runQuery
