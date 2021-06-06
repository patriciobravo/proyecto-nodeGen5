var mongoose = require('mongoose');


var Schema = mongoose.Schema;

const schemaCarro = mongoose.Schema({

    // idUsuario: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'ModelUsuario'
    // },
    cart: {
        items: [{
          productId: {
            type: Schema.Types.ObjectId,
            ref: 'modelProducto'
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




const model = mongoose.model('ModelCarro', schemaCarro);

module.exports = model;