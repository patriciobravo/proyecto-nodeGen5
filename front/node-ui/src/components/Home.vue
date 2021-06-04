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
                        <h6 class="stats-small__value count my-3 " id="totalCompras">{{this.itemUsuarios.length}}</h6>
                      </div>
                      <div class="stats-small__data">
                        <router-link to="/usuarios">Ir a Usuarios </router-link>   
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-1"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-6 col-sm-6 mb-4" v-if="this.perfil=== 'Admin'">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Ventas</span>
                        <h6 class="stats-small__value count my-3" id="totalVentas">0</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--increase verVentas">Ir a Ventas</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-2"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4" v-if="this.perfil=== 'Admin'">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Pedidos</span>
                        <h6 class="stats-small__value count my-3" id="totalPedidos">0</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--increase verPedidos">Ir a Pedidos</span>
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
                        <span class="stats-small__label text-uppercase">Fiados</span>
                        <h6 class="stats-small__value count my-3" id="totalFiados">0</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--increase irFiados">Ir a Fiados</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-4"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-12 mb-4" v-if="this.perfil=== 'Admin'">
                <div class="stats-small stats-small--1 card card-small iraDeudores">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Deudores</span>
                        <h6 class="stats-small__value count my-3" id="totalDeudores">0</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--increase ">Ir a Deudores</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-5"></canvas>
                  </div>
                </div>
              </div>

              <div v-if="this.perfil=== 'Cliente'">
                <header>
                    <div class="container">
                        <h1 class="text-center">TIENDA</h1>
                        <hr />
                    </div>
                </header>

                <Tienda/>
                <!-- END SECTION STORE -->
                <!-- START SECTION SHOPPING CART -->
                <section class="shopping-cart">
                    <div class="container">
                        <h1 class="text-center">CARRITO</h1>
                        <hr />
                        <div class="row">
                            <div class="col-6">
                                <div class="shopping-cart-header">
                                    <h6>Producto</h6>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="shopping-cart-header">
                                    <h6 class="text-truncate">Precio</h6>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="shopping-cart-header">
                                    <h6>Cantidad</h6>
                                </div>
                            </div>
                        </div>
                        <!-- ? START SHOPPING CART ITEMS -->
                        <div class="shopping-cart-items shoppingCartItemsContainer"></div>
                        <!-- ? END SHOPPING CART ITEMS -->

                        <!-- START TOTAL -->
                        <div class="row">
                            <div class="col-12">
                                <div class="shopping-cart-total d-flex align-items-center">
                                    <p class="mb-0">Total</p>
                                    <p class="ml-4 mb-0 shoppingCartTotal">0€</p>
                                    <div class="toast ml-auto bg-info" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
                                        <div class="toast-header">
                                            <span>✅</span>
                                            <strong class="mr-auto ml-1 text-secondary">Elemento en el carrito</strong>
                                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="toast-body text-white">
                                            Se aumentó correctamente la cantidad
                                        </div>
                                    </div>
                                    <button class="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal" data-target="#comprarModal">Comprar</button>
                                </div>
                            </div>
                        </div>

                        <!-- END TOTAL -->

                        <!-- START MODAL COMPRA -->
                        <div class="modal fade" id="comprarModal" tabindex="-1" aria-labelledby="comprarModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="comprarModalLabel">Datos para el envío</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <!-- ? STRIPE START -->
                                        <form id="payment-form">
                                            <div class="form-group">
                                                <label for="email-element">Email</label>
                                                <input type="email" class="form-control" id="email-element" aria-describedby="emailHelp" placeholder="E-mail" />
                                            </div>
                                            <div class="form-group">
                                                <div id="card-element" class="form-control" style="height: 2.4em; padding-top: 0.7em;">
                                                    <!--Stripe.js injects the Card Element-->
                                                </div>
                                            </div>
                                            <button id="submit" class="btn btn-primary w-100">
                                                <div class="spinner-border text-light hidden" id="spinner" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                                <span id="button-text">Pagar</span>
                                            </button>
                                            <p id="card-error" role="alert"></p>
                                            <p class="result-message hidden">
                                                Pago satisfactorio ✅ En breve recibirá su pedido
                                            </p>
                                        </form>
                                        <!-- ? STRIPE END -->
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END MODAL COMPRA -->
                    </div>
                </section>
                <!-- END SECTION SHOPPING CART -->
              </div>


            </div>

            

</template>

<script>

import Tienda from '../components/Tienda'
import { mapActions, mapState } from 'vuex'
export default {
   components: {
    Tienda
  },

    methods:{
    
      ...mapActions(["ListProductos", "ListTipoProductos", "ListUsuarios"])
    },

    mounted(){
      this.ListProductos()
      this.ListTipoProductos()
      this.ListUsuarios(this.token)
    },

    computed: {
    ...mapState(["itemProductos", "itemTipoProductos", "perfil", "token", "itemUsuarios"]),
    
  },

   
}
</script>

<style>

</style>