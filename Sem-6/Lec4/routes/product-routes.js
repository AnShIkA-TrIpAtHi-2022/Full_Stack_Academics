const express = require('express');
const router = express.Router();

//productuct api - endpoint
//Read operation - get method
router.get('/product/showAll',(req,res)=>{
    res.send('All product');
})

//Create operation - post method
router.post('/product/create',(req,res)=>{
    res.send('product Created');
})

//Update operation - put/fetch method
router.put('/product/:id',(req,res)=>{
    res.send(req.params.id);
})

router.patch('/product/:id',(req,res)=>{
    res.send(req.params.id);
})

//delete operation - delete method
router.delete('/product/delete/:id',(req,res)=>{
    res.send(req.params.id);
})

modules.export = router;