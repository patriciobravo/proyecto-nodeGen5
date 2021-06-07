//const express = require('express');
//const { isAuth } = require('../../middleware/auth');

const router = require('express').Router();
const { 
    generarCompra,
    listarCompras
} = require('../controllers/compra_controller');

//Rutas
router.get('/compra/:id', generarCompra);
router.get('/compras/listar/:idUsuario', listarCompras);



module.exports = router;