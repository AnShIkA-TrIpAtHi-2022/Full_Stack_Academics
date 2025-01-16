const showAll= (req,res)=>{
    res.send('All user');
}
const create = (req,res)=>{
    res.send('All user');
}
const update = (req,res)=>{
    res.send(req.params.id);
}
const delte = (req,res)=>{
    res.send(req.params.id);
}
module.exports = {showAll, create, update, delte}