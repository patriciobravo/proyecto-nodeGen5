const router = require('express').Router();
const { AuthToken, Admin} = require('../middleware/checkAuth');

const { getUsuarios, getIdUsuario } = require('../controllers/usuarios_controller');



//Rutas
router.get('/usuarios', AuthToken, Admin, getUsuarios);
router.get('/usuarios/:id', getIdUsuario);


module.exports = router;