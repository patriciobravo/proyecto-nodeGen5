<template>
  <div class="container">
      <div class="container p-3" v-if="this.comprasDetail.length > 0">             
              <div id="carrito" aria-labelledby="navbarCollapse">
                 <div class="d-block text-center" style="overflow-x: auto">
                <table class="table b-table table-hover border">
                  <thead>
                    <tr>
                      <th class="col-sm-3" style="text-align: left">Fecha de Compras</th>
                      <th class="col-sm-3" style="text-align: left">Productos</th>
                      <th class="col-sm-3" style="text-align: left; width: 1%">Total</th>
                    
                      <th class="col-sm-3">Accion</th>
                    </tr>
                  </thead>
                  <tbody v-for="(item, index) in this.comprasDetail" :key="index">
                <tr >
                  <td class="col-sm-3"  v-text="new Date(item.fecha_compra).toISOString().replace(/T/, ' ').replace(/\..+/, '')" ></td>      
                   <td class="col-sm-3"  v-text="item.productos.length" ></td>                
                  <td class="col-sm-3 "  v-text="currencyFormat(item.total)"  style="text-align: right" ></td>
                 
                  <td>                
                   
                    <a @click="verProductos(item.productos)">
                      <i
                        class="far fa-file-alt fa-2x text-primary mb-2 ml-2"
                        title="Eliminar Solicitud"
                      ></i>
                    </a>
                  </td>
                </tr>
                  </tbody>
                </table>
              </div> 
              </div>          
            </div>
            <div class="text-center" v-if="this.comprasDetail.length === 0">
              Carro vacio
            </div>
                                <ModalCompras ref="componente" />

  </div>
</template>

<script>

import ModalCompras from '../components/ModalCompras.vue'


import axios from 'axios';
import { mapActions, mapMutations, mapState } from 'vuex'

import { format } from 'fecha';

//type format = (date: Date, format?: string, i18n?: I18nSettings) => str;

export default ({
  components: {
        ModalCompras
    },
   data(){
        return {
            comprasDetail:[]
        }
    },
   methods: {
     //...mapActions(['cerrarSesion', 'ListCarrito', 'obtenerToken']),
     //...mapMutations(['setTienda']),  
    currencyFormat(value) {
      return "$ " + this.numberWithCommas(value.toFixed(0));
    },

    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  
      
     misCompras(){
        
           
          const usuarioId = localStorage.getItem('idUser');
       
        try {
          axios({
              method: "GET",
              headers: {
              "Content-type": "application/json"
              //'auth-token': this.token
              },
              url: `http://localhost:3001/api/compras/listar/${usuarioId}`,
           
          }).then((response) => {
              console.log(response.data)
           this.comprasDetail = response.data
           console.log(this.comprasDetail)
          });
        } catch (error) {
          console.log(error)
        }
      }, 
    
    verProductos(productos){

           this.$refs.componente.verProductos(productos);

    }

     
   },

   mounted(){
   // this.setTienda(true);
  
  },
  created(){
          this.misCompras();

  },

   computed: {
    ...mapState(["user", "itemCarrito", "users", 'token',]),
     loaded() {
      return this.$store.state.env_loaded;
    },
   }

})
</script>

<style>

</style>