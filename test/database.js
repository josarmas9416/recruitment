const mysql = require('mysql');

//connection parameters
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test1",
    port: 3306
});

//check the connection
db.connect(function (err) {
    if(err){
        console.Console(err)
        return;
    }else{
        console.log('Connected to database')
    }
});

module.exports = db;