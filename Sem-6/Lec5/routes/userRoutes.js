const express = require('express');
const { showAll, create, update, delte } = require('../controllers/userController');
const router = express.Router();

router.get('/user/showAll', showAll)

router.post('/user/create', create)

router.put('/user/:id', update)

router.delete('/user/delete/:id', delte)

module.exports = router;