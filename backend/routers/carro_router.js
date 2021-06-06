const router = require('express').Router();

const { addCarro, listarCarro } = require('../controllers/carro_controller');



//Rutas
router.post('/addCarro', addCarro);
router.get('/carro/:id', listarCarro);

module.exports = router;