<template>
 
            <div class="row home">
              <div class="col-lg col-md-6 col-sm-6 mb-4" style="display: none;">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Usuarios</span>
                        <h6 class="stats-small__value count my-3 " id="totalUser">0</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--increase verUser">Ir a Usuarios </span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-1"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-6 col-sm-6 mb-4" style="display: none;">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Clientes</span>
                        <h6 class="stats-small__value count my-3" id="totalClientes">0</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--increase">Ir a Clientes</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-2"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4" style="display: none;">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Productos</span>
                        <h6 class="stats-small__value count my-3" id="totalProductos">0</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--increase">Ir a Productos</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-3"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4" v-if="this.perfil=== 'Admin'">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <!-- <span class="stats-small__label text-uppercase">Vendedores</span> -->
                        <h6 class="stats-small__value count my-3" id="totalVendedores">{{this.itemProductos.length}}</h6>
                      </div>
                      <div class="stats-small__data">
                        <!-- <span class="stats-small__percentage stats-small__percentage--increase VerVendedores " to="/">Ir a Vendedores</span> -->
                                <router-link to="/productos">Ir a Productos</router-link> 

                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-4"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-12 mb-4" v-if="this.perfil=== 'Admin'">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <!-- <span class="stats-small__label text-uppercase">Proveedores</span> -->
                        <h6 class="stats-small__value count my-3" id="totalProveedores">{{this.itemTipoProductos.length}}</h6>
                      </div>
                      <div class="stats-small__data">
                        <router-link to="/tipoProductos">Ir a Tipo Productos </router-link>   
                                            
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-5"></canvas>
                  </div>
                </div>
              </div>
            <!--</div>
             <div class="row home">-->
              <div class="col-lg col-md-6 col-sm-6 mb-4" v-if="this.perfil=== 'Admin'">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <!-- <span class="stats-small__label text-uppercase">Compras</span> -->
                        <h6 class="stats-small__value count my-3 " >{{this.itemUsuarios.length}}</h6>
                      </div>
                      <div class="stats-small__data">
                        <router-link to="/usuarios">Ir a Usuarios </router-link>   
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-1"></canvas>
                  </div>
                </div>
              </div>
           
              <div class="col-lg col-md-4 col-sm-6 mb-4" v-if="this.perfil=== 'Admin'">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase"></span>
                        <h6 class="stats-small__value count my-3 " >{{this.itemCompras.length}}</h6>
                      </div>
                      <div class="stats-small__data">
                        <router-link to="/ventas">Ir a Ventas </router-link>   
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-3"></canvas>
                  </div>
                </div>
              </div>
           

              <div v-if="this.perfil=== 'Cliente'">
               
                <Tienda v-if="tienda"/>
                <!-- END SECTION STORE -->

                <!-- START SECTION SHOPPING CART -->
                <Carrito v-if="!tienda"/>               
                <!-- END SECTION SHOPPING CART -->
              </div>
            </div>
</template>

<script>

import Tienda from '../components/Tienda'
import Carrito from '../components/Carrito.vue'
import { mapActions, mapState } from 'vuex'
export default {
   components: {
    Tienda,
    Carrito
  },

    methods:{
    
      ...mapActions(["ListProductos", "ListTipoProductos", "ListUsuarios", "ListCompras"]),

      obtenerUsuarios(){

        if(this.perfil === 'Admin')
          {
          
            this.ListUsuarios(this.token)
           
          }
      
      }
    },

    mounted(){
      this.ListProductos();
      this.ListTipoProductos();
      this.obtenerUsuarios();
       this.ListCompras();
       

      
    },
   
    computed: {
    ...mapState(["itemProductos", "itemTipoProductos", "perfil", "token", "itemUsuarios","tienda", "itemCompras"]),
    
  },

   
}
</script>

<style>

</style>