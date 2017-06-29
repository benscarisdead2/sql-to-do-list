const express = require('express');
const router = express.Router();
const models = require('../models');

router.get("/", function(req, res) {
    res.render('../views/todo')
});

router.post('/', function(req, res) {
    
    var todo = models.tasks.build({
  task: req.body.taskName, 
  complete: false
});
todo.save().then(function(){
    res.redirect("/");
})
})


module.exports = router;

