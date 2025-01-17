const express = require('express');
const router = express.Router();
const users = require('../Database/data.js')

//read
router.get('/user/all', (req,res)=>{
    res.send('All Users');
})

//
router.get('/user/new', (req,res)=>{
    res.render('new_user');
})

router.post('/userdata',(req,res)=>{
    const {name, email, password, contact} = req.body;
    const user = {
        name: name,
        email: email,
        password: password,
        contact: contact,
    };
    users.push(user);
    res.render('showUsers', {users:users});
})

module.exports = router;