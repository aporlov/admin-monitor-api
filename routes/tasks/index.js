var router = require('express').Router();  
var low = require('lowdb');
const fileAsync = require('lowdb/lib/file-async');

const db = low('./conf/config.json', {
  storage: fileAsync
})

router.get('/', (req, res) => {
    const tasks = db.get('tasks').value();
    res.json(tasks);
});  

router.post('/', (req, res) => {
  console.log(req.body);
  const post = db.set('dp',req.body)
    .value();
  res.send(post);
})

module.exports = router; 