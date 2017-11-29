const express = require('express');
const router = express.Router();
const User = require('./models');


router.get('/', function(req, res, next) {
  res.json({users: [{comment: 'LIST OF USERS'}]});
});

router.post('/signup', function(req, res, next) {
    const newUser = new User({
       name: req.body.name,
       password: req.body.password
    });

    newUser.save(function(err, user) {
        if (err) {
            console.log('SAVE USER ERROR !', err.message);
        }
        console.log('USER SAVED SUCCESSFUL !', user);
    });

    res.status(200).send('New user ' + newUser.name + ' created successfully');
});
//'New user ${
module.exports = router;
