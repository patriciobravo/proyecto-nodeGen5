const router = require('express').Router();

const {  
    getIdTipoProducto,
    regTipoProducto, 
    getTipoProducto, 
    deleteTipoProducto,
    updateTipoProducto  } = require('../controllers/tipo_producto_controller');

//Rutas
router.get('/tipo_producto/:id', getIdTipoProducto);
router.post('/tipo_producto', regTipoProducto);
router.get('/tipo_producto', getTipoProducto);
router.delete('/tipo_producto/:id', deleteTipoProducto);
router.put('/tipo_producto/:id', updateTipoProducto);


module.exports = router;