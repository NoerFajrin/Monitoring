'use strict';

var response = require('./res');
var connection = require('./conn');

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};
exports.createdata = function(req, res) {

    var hum = req.body.hum;
    var temp = req.body.temp;
    var timestamp = req.body.timestamp;
    console.log(hum,temp)

    connection.query('INSERT INTO data_sensor (hum, temp, timestamp) values (?,?,?)',
    [ hum, temp, timestamp ],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan data", res)
        }
    });
};
exports.data = function(req, res) {
    connection.query('SELECT * FROM data_sensor', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};
exports.finddata = function(req, res) {

    var data_sensor_id = req.params.data_sensor_id;

    connection.query('SELECT * FROM data_sensor where id = ?', //harus sama database
    [ data_sensor_id ],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
}; //tes
