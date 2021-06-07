<template>
  <div>  
    <b-modal

      v-model="modalDetailCarrito"
      size="xs"
      no-close-on-esc
      no-close-on-backdrop    
      no-fade
    >
      <div slot="modal-header">
        <h4 class="titleDocument"><i class="fa fa-check-circle text-success" aria-hidden="true"></i> Producto(s) agregado(s) al carrito de compras</h4>
      </div>

       <div slot="default" >    
        <div>
          <div class="card-body">
            <h6 class="card-title">Producto  {{nomProducto}}</h6>
            <h6 class="card-title mb-2 text-muted">Cantidad  {{cantProducto}}</h6>
            <h6 class="card-title">Precio {{ currencyFormat(precio)}}</h6>
          </div>
        </div>    
      

         
      
      </div>
      <div slot="modal-footer">
        <button
          id="btnClass"
          class="btn btn-info btn-sm"
          @click="modalDetailCarrito= false"        
        >
           Seguir comprando
        </button>
         <button
          id="btnClass"
          class="btn btn-primary btn-sm"
          @click="irAlcarrito"         
        >
          Ir al Carrito ({{producto.length}})
        </button>
       
      </div>
    </b-modal>

    <b-modal     
      v-model="modalDetailProducts"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop    
      no-fade
    >
      <div slot="modal-header">
        <h4 class="titleDocument">Detalle de compra <b> </b></h4>
      </div>

       <div slot="default" >        

       <div class="container">
      <div class="container p-3" v-if="this.productos.length > 0">             
              <div id="carrito" aria-labelledby="navbarCollapse">
                 <div class="d-block text-center" style="overflow-x: auto">
                <table class="table b-table table-hover border">
                  <thead>
                    <tr>
                      <th class="col-sm-3" style="text-align: left">Producto</th>
                      <th class="col-sm-3" style="text-align: left">Cantidad</th>
                      <th class="col-sm-3" style="text-align: left; width: 1%">Tipo de Producto</th>
                      <th class="col-sm-3" style="text-align: left; width: 1%">Precio Un.</th>
                      <th class="col-sm-3" style="text-align: left; width: 1%">Total.</th>
                     
                    </tr>
                  </thead>
                  <tbody v-for="(item, index) in this.productos" :key="index">
                <tr >
                  <td class="col-sm-3"  v-text="item.producto.ProductoNom" ></td>      
                   <td class="col-sm-3"  v-text="item.cantidad" ></td>   
                   <td class="col-sm-3"  v-text="item.producto.producto_tipo" ></td>             
                  <td class="col-sm-3 "  v-text="currencyFormat(item.producto.precio)"  style="text-align: right" ></td>
                  <td class="col-sm-3 "  v-text="currencyFormat(item.producto.precio * item.cantidad)"  style="text-align: right" ></td>
                 
                </tr>
                  </tbody>
                </table>
              </div> 
              </div>          
            </div>
          

  </div>

      
      </div>
      <div slot="modal-footer">
      
        <button
          id="btnClass"
          class="btn btn-red btn-sm"
          @click="modalDetailProducts = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      modalDetailCarrito: false,
      modalDetailProducts: false,
      nomProducto:'',
      cantProducto:0,
      precio:0,
      producto:'',
      productos:[],
      ProductoNom:"",
    };
  },

  methods: {

     ...mapActions(["ListTipoProductos", "ListProductos", "ListUsuarios", "ListCarrito"]),
     ...mapMutations(["setTienda"]),
     
     currencyFormat(value) {
      return "$ " + this.numberWithCommas(value.toFixed(0));
    },

    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    /* Desde el componente padre */

    DetailCarro(items){

      this.producto= items;

      this.modalDetailCarrito= true;
      items.forEach(item => {
          console.log(item._id)
          console.log(this.itemCarrito)
          setTimeout(() => {
             this.itemCarrito.forEach(element => {

            if(element._id === item._id)
                {
                  this.cantProducto = element.cantidad;
                  this.nomProducto = element.productId.ProductoNom;
                  this.precio = element.productId.precio
                }
            
          });
          }, 30);
      });

  
    },

    irAlcarrito(){

      this.setTienda(false)
    },

    verProductos(productos){
      this.modalDetailProducts= true;
      this.productos = productos;
    },
  },

   computed: {
    ...mapState(["itemTipoProductos","token", "itemCarrito"]),
   }
};
</script>

<style>


</style>