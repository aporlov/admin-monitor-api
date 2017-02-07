var express = require('express');
var app     = express();
//routes section
var indexR = require('./routes');
var dpR = require('./routes/dp');
var tasksR = require('./routes/tasks');
//routes section
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',indexR);
app.use('/dp', dpR);
app.use('/tasks',tasksR);
app.listen(3000, function(){
  console.log('listen on port 3000');
});