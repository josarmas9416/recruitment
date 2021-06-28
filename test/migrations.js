var mysql = require('mysql');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
  connectionLimit : 15,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test1'
});

migration.init(connection, __dirname + '/migrations');