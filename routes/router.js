const express = require('express');
const router = express.Router();
const models = require('../models');

router.get("/", function (req, res) {
    models.tasks.findAll().then(function (todo) {
        res.render('../views/index', { myTasks: todo });
    })
});

router.post('/', function (req, res) {
    var todo = models.tasks.build({
        task: req.body.taskName,
        complete: false
    });
    todo.save().then(function (todo) {
        res.redirect("/");
    })
})

router.get('/delete/:id', function (req, res) {
    models.tasks.findById(req.params.id).then(function (task) {
        task.destroy().then(function () {
            res.redirect('/');
        });
    });
})

module.exports = router;

