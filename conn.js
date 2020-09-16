var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "rfid",
  password: "rfid123",
  database: "rfid"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
