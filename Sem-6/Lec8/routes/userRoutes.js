const express = require('express');
const Users = require('../database/data.js')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res)=>{
    res.render('showUsers', {Users})
})

router.get('/new', (req, res)=>{
        res.render('new_user');
})

router.post('/user', (req, res)=>{
    const {email, password, contact} = req.body

    const newUser = {
        id:uuidv4(),
        email:email,
        password:password,
        contact:contact
    }

    Users.push(newUser);
    console.log(Users)
    res.redirect('/')
})

router.delete('/delete/:id',(req, res)=>{
        const {id} = req.params;

        const user = Users.find((u) => u.id == id);

        const idx = Users.indexOf(user);

        Users.splice(idx, 1);

        res.redirect('/');
})


router.get('/update/:id', (req, res)=>{
    const {id} = req.params;

    const user = Users.find((u)=>u.id == id);
    
    console.log(user);


    res.render('updateForm.ejs', {user});
})

router.put('/update/:id',(req, res)=>{
    const {id} = req.params;
    const {email, password, contact} = req.body;

    const oldUser = Users.find((u)=>u.id == id);

    oldUser.email = email;
    oldUser.password = password;
    oldUser.contact = contact;

    res.redirect('/')
})


module.exports = router;