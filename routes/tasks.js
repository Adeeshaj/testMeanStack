var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://adeeshaj:1234@ds147079.mlab.com:47079/mytasklist_test',['tasks']);

//get all tasks
router.get('/tasks',function (req, res , next) {

    res.render('index.html');

    db.tasks.find(function (err, tasks) {
       if(err){
           res.send(err);
       }
       res.json(tasks);
    })

});

//get signle task
router.get('/task/:id',function (req, res , next) {
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function (err, task) {
       if(err){
           res.send(err);
       }
       res.json(task);
    })
});

module.exports = router;