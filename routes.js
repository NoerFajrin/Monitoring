'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);


    app.route('/data_sensor')
       .get(todoList.data);

    app.route('/data_sensor')
        .post(todoList.createdata);

    app.route('/data_sensor/:data_sensor_id')
        .get(todoList.finddata);

};
