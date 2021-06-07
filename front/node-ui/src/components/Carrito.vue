<template>
   <div class="col-auto p-5 text-center">
         <header>
                    <div class="container ml-5">
                        <h1 class="text-center">CARRITO</h1>
                        <hr />
                    </div>
                </header>
        <div class="container">
           <section class="shopping-cart" >
                <div class="container">
                    
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
                    <!-- SHOPPING CART ITEMS -->
                    <div class="container p-3" v-if="itemCarrito.length > 0">             
                        <div id="carrito" aria-labelledby="navbarCollapse">
                            <div class="d-block text-center" style="overflow-x: auto">
                            <table class="table b-table table-hover border">
                            <thead>
                                <tr>
                                <th style="text-align: left">Producto</th>
                                <th style="text-align: left">Cantidad</th>
                                <th style="text-align: left">Total</th>
                                
                                <th></th>
                                </tr>
                            </thead>
                            <tbody v-for="(item, index) in itemCarrito" :key="index">
                            <tr >
                            <td class="col-sm-3"  v-text="item.productId.ProductoNom" ></td>      
                            <td class="col-sm-3"  v-text="item.cantidad" ></td>                
                            <td class="col-sm-3"  v-text="item.total" ></td>
                            
                            <td>                
                            
                                <a @click="quitarProducto(item.productId._id)">
                                <i
                                    class="fa fa-trash-alt fa-2x text-danger ml-2"
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

                    <!-- START TOTAL -->
                    <div class="row">
                        <div class="col-12">
                            <div class="shopping-cart-total d-flex align-items-center">
                                <p class="mb-0">Total</p>
                                <p class="ml-4 mb-0 shoppingCartTotal">{{totalCompra}}</p>
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
                                <button class="btn btn-danger" type="button" data-toggle="modal" data-target="#comprarModal">Cancelar Comrpra</button>
                                                            <button class="btn btn-success ml-2" type="button" @click="addCompra">Comprar</button>

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
        </div>
               

    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapState } from 'vuex';
export default {

    components: {
        
    },

    data(){
        return {

            cantidadProd:0,
            totalCompra:0,
        
        }
    },

    methods:{

        ...mapActions(["ListCarrito"]),

        totalCarrito(){
            this.itemCarrito.forEach(item => {
                this.totalCompra += item.total
            });
        },

        addCompra(){
           
            const usuarioId = localStorage.getItem('idUser');
         
            try {
                axios({
                    method: "GET",
                    headers: {
                    "Content-type": "application/json"
                    //'auth-token': this.token
                    },
                    url: `http://localhost:3001/api/compra/${usuarioId}`,                   
                }).then((response) => {

                    console.log(response.data.items)
                      this.ListCarrito(usuarioId);
                        this.$swal.fire('Compra realizada con exito', '', 'success')   
                        setTimeout(() => {
                               this.$router.push("Compras").catch(()=>{ })
                        }, 1000);
                     // this.$refs.componente.DetailCarro(response.data.items);
                    // response.data.items.forEach(item => {
                       // this.resCarrito = response.data.items;
                        //console.log(this.resCarrito)
                    //  commit('setCarrito', resCarrito) 
                    //this.ListCarrito(this.users.usuarioId);
                        
                    // });
                });
            } catch (error) {
                console.log(error)
            }
        },    
       
         
    },
       mounted(){
           this.totalCarrito()
        this.ListCarrito(localStorage.getItem('idUser'));
        setTimeout(() => {
            console.log(this.itemProductos)
        }, 10000);
    },
    computed: {
    ...mapState(["itemProductos","token", "users", "itemCarrito"]),
    
  },

  }

</script>

<style>

</style>