const ModelProducto = require('../models/producto_models');
const ModelUsuarios = require('../models/usuario_model');
const ModelCarro = require('../models/carro_model');


const addCarro = async (req, res, next) => {

    let productId = req.body.productId;
    let usuarioId = req.body.usuarioId;
  
    try {
      DocProducto = await ModelProducto.findById(productId).exec()
      
      if(!DocProducto){
        err =  new Error('No Existe Producto')
        err.statusCode = 404;
        throw(err);
      }
      
        DocUsuario = await ModelUsuarios.findById(usuarioId).exec();
      /// DocCarro = await ModelCarro.findOne(addCarro);
       ///console.log(DocCarro)
      
        
  // let index = this.cart.items.findIndex( item => {
  //   return item.productId.toString() == DocProducto._id.toString()
  // });

  // console.log('index:',index);

  let _cantidad = 1;
  let newCartItems = [];
  
 /* if(index >= 0){
    _cantidad = this.cart.items[index].cantidad +1;
    newCartItems[index].cantidad = _cantidad;
    newCartItems[index].total = _cantidad * DocProducto.precio;
  }else{*/
     newCartItems.push({
      productId : DocProducto._id,
      cantidad: _cantidad,
      total: DocProducto.precio
    })
 // }
 const modelCarro = new ModelCarro(newCartItems);
  
      //  this.cart.items = newCartItems;
        
      modelCarro.save( (err, newCartItems) => {

            if( err || !newCartItems  ) return errorHandler(newCartItems, next, err)
        
           
        
            return res.json({
              data: newCartItems
            })
          })
      
      
   
  
  
    } catch (error) {
      next(error);
    }
  
    
    //DocUsuario = await ModelUsuarios.find
  
    
  
  }
  

module.exports = {
      addCarro
  }