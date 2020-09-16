var mysql = require('mysql');

var con = mysql.createConnection({
  host: "tos.kirei.co.id/admindb",
  user: "rfid123",
  password: "tos123",
  database: "rfid"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
