const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes')

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/u1', userRoutes);

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});