var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://adeeshaj:1234@ds147079.mlab.com:47079/mytasklist_test',['tasks']);

router.get('/tasks',function (req, res , next) {
    db.tasks.find(function (err, tasks) {
       if(err){
           res.send(err);
       }
       res.json(tasks);
    })
});

module.exports = router;