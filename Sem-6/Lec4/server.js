const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

//middleware have next function called in them
function cb1(req, res, next){
    console.log("first callback");
    next();
}

app.use('/cb', cb1);

//application level middlewares
// app.use(productRoutes);
// app.use(userRoutes);

//route level middlewares
app.use('/p1',productRoutes);
app.use('/u1',userRoutes);

function isLoggedIn(req, res, next){
    next();
}

function isMatched(req, res, next){
    //Logic here

    next();//at the end
}

app.get('/profile', cb1, isLoggedIn, isMatched, (req, res)=>{
    res.send('profile.html');
})

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})