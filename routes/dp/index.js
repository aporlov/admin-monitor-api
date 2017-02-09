var router = require('express').Router();  
var low = require('lowdb');
const fileAsync = require('lowdb/lib/file-async');

const db = low('./conf/config.json', {
  storage: fileAsync
})


router.get('/', (req, res) => {
    const dp = db.get('dp').value();
    res.json(dp);
});  

router.post('/', (req, res) => {
  const post = db.set('dp',req.body)
    .value();
  res.sendStatus(200);
})
module.exports = router; 