const express = require('express');
const userRoute = require('./routes/userRoutes.js');
const methodOverride = require('method-override');
const path = require('path');
const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')
app.set('views', './views');

app.use('/', userRoute)

app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})