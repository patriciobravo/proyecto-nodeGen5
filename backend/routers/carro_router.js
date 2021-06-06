const router = require('express').Router();

const { addCarro } = require('../controllers/carro_controller');



//Rutas
router.post('/addCarro', addCarro);


module.exports = router;