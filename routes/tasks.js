var express = require('express');
var router = express.Router();

router.get('/tasks',function (req, res , next) {
<<<<<<< HEAD
    res.render('index.html');
=======
    db.tasks.find(function (err, tasks) {
       if(err){
           res.send(err);
       }
       res.json(tasks);
    })
>>>>>>> parent of 8561d44... single task display
});

module.exports = router;