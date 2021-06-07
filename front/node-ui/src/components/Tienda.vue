<template>
    <div class="box">
         <header>
                    <div class="container">
                        <h1 class="text-center">TIENDA</h1>
                        <hr />
                    </div>
                </header>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12" v-for="(item, index) in itemProductos" :key="index">
                    <b-card  img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                        <b-card-title> {{item.ProductoNom}}</b-card-title>
                        <b-card-text>
                           {{ item.producto_tipo}}
                        </b-card-text>
                        <b-card-text>
                          Precio {{ currencyFormat(item.precio)}}
                        </b-card-text>                        

                        <b-button href="#" variant="primary" @click="addCompra(item._id)">AGREGAR AL CARRITO</b-button>
                    </b-card>
                </div>
            </div>
        </div>
                    <ModalCompras ref="componente" />

    </div>
</template>


<script>
import axios from 'axios';
import { mapActions, mapMutations, mapState } from 'vuex';

import ModalCompras from './ModalCompras.vue'
export default {

    components: {
        ModalCompras
    },

    data(){
        return {

            cantidadProd:0,
        
        }
    },

    methods:{

        ...mapActions(["ListProductos", "ListCarrito"]),
        ...mapMutations(["setTienda"]),

        currencyFormat(value) {
            return "$ " + this.numberWithCommas(value.toFixed(0));
        },

        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },

        addCompra(idProd){

             const usuarioId = localStorage.getItem('idUser');
            const data = {
                productId : idProd,
                usuarioId : usuarioId,
                cantProducto : 1,
           
            }
                        try {
                axios({
                    method: "POST",
                    headers: {
                    "Content-type": "application/json"
                    //'auth-token': this.token
                    },
                    url: `http://localhost:3001/api/addCarro`,
                    data: data
                }).then((response) => {

                    console.log(response.data.items)

                      this.$refs.componente.DetailCarro(response.data.items);
                    // response.data.items.forEach(item => {
                       // this.resCarrito = response.data.items;
                        //console.log(this.resCarrito)
                    //  commit('setCarrito', resCarrito) 
                    this.ListCarrito(usuarioId);
                        
                    // });
                });
            } catch (error) {
                console.log(error)
            }
        },    
    },
       mounted(){
        this.ListProductos();
      
    },
    computed: {
    ...mapState(["itemProductos","token", "users", "itemCarrito"]),
    
  },

  }
</script>

<style>

</style>