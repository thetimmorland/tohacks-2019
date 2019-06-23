const dotenv = require('dotenv')
const mysql = require('mysql')

if (!process.env.DB_USER || !process.env.DB_PASS) {
    dotenv.config()
}

const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

function testUsers() {
    connection.connect()

    connection.query('SELECT * FROM USERS', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });

    connection.end()
}