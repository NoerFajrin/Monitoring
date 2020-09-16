var mysql = require('mysql');

var con = mysql.createConnection({
  host: "tos.kirei.co.id/admindb",
  user: "rfid",
  password: "rfid123",
  database: "rfid"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
