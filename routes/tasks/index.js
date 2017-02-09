var router = require('express').Router();  
var low = require('lowdb');
const fileAsync = require('lowdb/lib/file-async');

const db = low('./conf/config.json', {
  storage: fileAsync
});

router.get('/', (req, res) => {
    let tasks = db.get('tasks').value();
    res.json(tasks);
});  

router.post('/', (req, res) => {
  let tasks = db.get('tasks');   
  let rez = tasks.find(req.body).value();              
  if(rez === undefined) {
   tasks.push({name :"TestTask"}).value();
   res.sendStatus(200);
  }
  else res.sendStatus(409);
});

router.delete('/', (req, res) => {
  let tasks = db.get('tasks');                
  let rez = tasks.remove(req.body).value();
  console.log(rez);
  if (rez.length>0) {
    res.sendStatus(200);
   } else res.sendStatus(404);
});

module.exports = router; 