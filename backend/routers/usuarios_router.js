const router = require('express').Router();
const { AuthToken, Admin} = require('../middleware/checkAuth');

const {  usuarioId, getUsuarios, getIdUsuario, deleteUsuario } = require('../controllers/usuarios_controller');

    //Middleware  - Router
router.param('usuarioId', usuarioId);

//Rutas
router.get('/usuarios', AuthToken, Admin,getUsuarios);
router.get('/usuarios/:usuarioId',  getIdUsuario);
router.delete('/usuario/:id',  deleteUsuario);


module.exports = router;