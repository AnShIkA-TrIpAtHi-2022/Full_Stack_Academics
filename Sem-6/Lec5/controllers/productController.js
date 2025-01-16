const showAllProducts = (req,res)=>{
    res.send('All product');
}

const createProduct = (req,res)=>{
    res.send('product Created');
}

const updateProduct = (req,res)=>{
    res.send(req.params.id);
}

const deleteProduct = (req,res)=>{
    res.send(req.params.id);
}

module.exports = {showAllProducts,createProduct,updateProduct,deleteProduct};