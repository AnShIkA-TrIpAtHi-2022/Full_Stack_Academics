const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

app.use(productRoutes);
app.use(userRoutes);

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})