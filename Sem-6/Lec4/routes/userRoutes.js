const express = require('express');
const router = express.Router();

//useruct api - endpoint
//Read operation - get method
router.get('/user/showAll',(req,res)=>{
    res.send('All user');
})

//Create operation - post method
router.post('/user/create',(req,res)=>{
    res.send('user Created');
})

//Update operation - put/fetch method
router.put('/user/:id',(req,res)=>{
    res.send(req.params.id);
})

router.patch('/user/:id',(req,res)=>{
    res.send(req.params.id);
})

//delete operation - delete method
router.delete('/user/delete/:id',(req,res)=>{
    res.send(req.params.id);
})
module.exports = router;