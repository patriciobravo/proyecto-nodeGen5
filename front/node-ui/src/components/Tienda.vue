<template>
    <div class="box">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" v-for="(item, index) in itemProductos" :key="index">
                    <b-card  img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                        <b-card-title> {{item.ProductoNom}}</b-card-title>
                        <b-card-text>
                           {{ item.producto_tipo}}
                        </b-card-text>
                         <b-card-text>
                          Precio {{ item.precio}}
                        </b-card-text>

                        <b-button href="#" variant="primary">Comprar</b-button>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapActions, mapState } from 'vuex'
export default {

    data(){
        return {
        
        }
    },

    methods:{
    

    ...mapActions(["ListProductos"]),
    },
       mounted(){
        this.ListProductos();
    },
    computed: {
    ...mapState(["itemProductos","token"]),
    
  },

  }
</script>

<style>

</style>