const ModelProducto = require('../models/producto_models');
const ModelUsuarios = require('../models/usuario_model');
//const ModelCarro = require('../models/carro_model');


const addCarro = async (req, res, next) => {

  let productId = req.body.productId;
  let usuarioId = req.body.usuarioId;
  console.log(productId)

  try {
    DocProducto = await ModelProducto.findById(productId).exec()
    
    if(!DocProducto){
      err =  new Error('No Existe')
      err.statusCode = 404;
      throw(err);
    }
    
    DocUsuario = await ModelUsuarios.findById(usuarioId).exec();
    
    const cantidadNueva = 2;
    //TODO borrar
    DocUsuario = await DocUsuario.addCarro(DocProducto,cantidadNueva);
   
    res.json(
      DocUsuario.cart
    )


  } catch (error) {
    next(error);
  }

  
  DocUsuario = await ModelUsuarios.find

  

}
const listarCarro = (req, res)=>{

  console.log('listarCarro');
  //TODO borrar
  ModelUsuarios.findById(req.params.id, 'cart').
    populate('cart.items.productId','-imagen').exec( (err, data) => {
    if(err){
      return res.json(err);
    }

    return res.json(
      data.cart
    )
  });

  //callbaks -> 

  //==========
  // callbaks
  // 1	ModelUsuario.findById(req.params.id , (err, data) => { data }
  // exec
  //  1 Promesa -  ModelUsuario.findById(req.params.id).exec()
  //            doc = await ModelUsuario.findById(req.params.id).exec()
  // exec
  // 2 Callback  - ModelUsuario.findById(req.params.id).exec( (err, data) => { data }
  //       
  //==========



}



module.exports = {
      addCarro,
      listarCarro
  }