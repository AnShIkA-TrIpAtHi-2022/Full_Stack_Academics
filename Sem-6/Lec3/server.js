const express = require('express')
const app = express();

app.get('/product/:id/:price',(req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    console.log(req.params.price);
    res.send('hello');
})

app.get('/product/:id', (req, res) => {
    console.log(req.query);
    console.log(req.params);
    res.send('hiiiii');
})

app.listen(2000, ()=>{
    console.log('server is running on port 2000');
})