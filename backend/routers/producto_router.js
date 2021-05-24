const router = require('express').Router();

const {  
    productoId,
    regProducto,   
    getProducto,
    getIdProducto,
    deleteProducto,
    updateProducto  } = require('../controllers/producto_controller');

    //Middleware  - Router
router.param('productoId', productoId);

//Rutas
router.post('/producto', regProducto);
router.get('/producto', getProducto);
router.get('/producto/:productoId', getIdProducto);
router.delete('/producto/:productoId', deleteProducto);
router.put('/producto/:id', updateProducto);


module.exports = router;