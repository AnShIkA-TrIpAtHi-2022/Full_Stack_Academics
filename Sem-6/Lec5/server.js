const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

//specifying view engine
app.set('view engine', 'ejs');
app.set('views','./views');

let person = {
    name: 'ABCD',
    age: '25',
}

app.get('/home', (req,res)=>{
    res.render('home', {person:person});
})

app.use('/p1',productRoutes);
app.use('/u1',userRoutes);

app.listen(5000,()=>{
    console.log('Server is running at 5000');
})