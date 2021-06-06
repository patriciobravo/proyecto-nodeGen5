var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new  Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    perfil: {
        type: String,
        default: 'Cliente',
      },
    date: {
        type: Date,
        default: Date.now
    },
    cart: {
        items: [{
          productId: {
            type: Schema.Types.ObjectId,
            ref: 'ModelProducto'
          },
          cantidad: {
            type: Number,
            required: true
          },
          total: {
            type: Number,
            required: true
          }
        }]
      }


});

userSchema.methods.addCarro = function(DocProducto,cantidadNueva){

    let index = this.cart.items.findIndex( item => {
      return item.productId.toString() == DocProducto._id.toString()
    });
  
    console.log('index:',index);
  
    let _cantidad = 1;
    let newCartItems = [...this.cart.items];
  
    //newCartItems[ 0, 1, 2]
    //delete newCartItems[1]
    //this.cart.items = newCartItems;
    //this.save();
  
  
  
    if(index >= 0){
      _cantidad = this.cart.items[index].cantidad + cantidadNueva;
      newCartItems[index].cantidad = _cantidad;
      newCartItems[index].total = _cantidad * DocProducto.precio;
    }else{
       newCartItems.push({
        productId : DocProducto._id,
        cantidad: _cantidad,
        total: DocProducto.precio
      })
    }
    
    this.cart.items = newCartItems;
    return this.save();
  
  }
  
  userSchema.set('toJSON', { virtuals: true });


module.exports = mongoose.model('ModelUsuario', userSchema);

