var express = require('express');  
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    res.json({success: true , msg: 'Successful get client'})
});

router.get("/helloworld", (req, res) => {
  res.send("Hello World");
});
module.exports = router;  