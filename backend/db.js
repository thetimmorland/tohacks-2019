const Sequelize = require('sequelize');

// init new connection using DB environment variables
var getConnection = function() {
    return new Sequelize(process.env.DB_TABLE,
                         process.env.DB_USER,
                         process.env.DB_PASS,
                         {
                             host: process.env.DB_HOST,
                             dialect: 'mysql'
                         });
};

module.exports = {
    getConnection: getConnection
}
