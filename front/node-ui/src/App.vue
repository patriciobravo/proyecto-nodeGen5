<template>
    <div id="app">   
        <b-navbar toggleable="lg" type="dark" variant="info" v-if="loaded == 1">
            <b-navbar-brand to="/Dashboard"  v-if="this.perfil=== 'Admin'">
              <strong>Node Js Gen 5</strong>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav v-if="this.perfil=== 'Admin'">
                    <b-nav-item to="/Dashboard">Home</b-nav-item>     
                </b-navbar-nav>
                 <b-navbar-nav v-if="this.perfil != 'Admin'">
                    <b-nav-item to="/Dashboard" @click="irTienda">Tienda</b-nav-item>     
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form v-if="this.perfil != 'Admin'">
                        <b-nav-item to="/Compras">Mis Compras</b-nav-item>
                    </b-nav-form>
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <em>
                                <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>
                                <a class="icon-shopping-cart lblCartCount"> <label class="badge badge-warning" />{{itemCarrito.length}}</a>
                            </em>
                        </template>

                        <div class="container p-3" v-if="itemCarrito.length > 0">
                            <div id="carrito" aria-labelledby="navbarCollapse">
                                <div class="d-block text-center" style="overflow-x: auto;">
                                    <table class="table b-table table-hover border">
                                        <thead>
                                            <tr>
                                                <th style="text-align: left;">Producto</th>
                                                <th style="text-align: left;">Cantidad</th>
                                                <th style="text-align: left;">Total</th>

                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="(item, index) in itemCarrito" :key="index">
                                            <tr>
                                                <td class="col-sm-3" v-text="item.productId.ProductoNom"></td>
                                                <td class="col-sm-3" v-text="item.cantidad"></td>
                                                <td class="col-sm-3" v-text="item.total"></td>

                                                <td>
                                                    <a @click="quitarProducto(item.productId._id)">
                                                        <i class="fa fa-trash-alt fa-2x text-danger ml-2" title="Eliminar Solicitud"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <b-button class="btn btn-danger btn-block btn-sm" @click="vaciarCarro">
                                    Vaciar Carro
                                </b-button>
                                <b-button class="btn btn-success btn-block btn-sm" size="sm" @click="irAlcarrito">
                                    Comprar
                                </b-button>
                            </div>
                        </div>
                        <div class="text-center" v-if="itemCarrito.length === 0">
                            Carro vacio
                        </div>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right class="mt-2">
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>Usuario {{nomUser }}</em>
                        </template>
                        <b-dropdown-item href="#">Perfil</b-dropdown-item>
                        <b-dropdown-item href="#">Cerrar Sesión</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view />
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapMutations, mapState } from 'vuex'

export default ({

  data() {
    return{
      nomUser:'',
    }
  }
  ,
   methods: {
     ...mapActions(['cerrarSesion', 'ListCarrito', 'obtenerToken']),
     ...mapMutations(['setTienda', 'setEnv_loaded']),  

      quitarProducto(idProd){
        const data = {
            productId : idProd,
            usuarioId : localStorage.getItem('idUser'),
        }
        try {
          axios({
              method: "PUT",
              headers: {
              "Content-type": "application/json"
              //'auth-token': this.token
              },
              url: `http://localhost:3001/api/carro`,
              data: data
          }).then((response) => {
            this.itemCarrito
            this.ListCarrito(localStorage.getItem('idUser'));
          });
        } catch (error) {
          console.log(error)
        }
      }, 
      
      vaciarCarro(){
           
          const usuarioId = localStorage.getItem('idUser');
       
        try {
          axios({
              method: "DELETE",
              headers: {
              "Content-type": "application/json"
              //'auth-token': this.token
              },
              url: `http://localhost:3001/api/carro/${usuarioId}`,
           
          }).then((response) => {
            this.itemCarrito
            this.ListCarrito(usuarioId);
          });
        } catch (error) {
          console.log(error)
        }
      }, 
      irAlcarrito(){
        
      this.setTienda(false)
      },

      irTienda(){
        this.setTienda(true)
      }
    
   },

   mounted(){
    this.obtenerToken();
    this.setTienda(true);
  
  },
     

  created(){
     this.ListCarrito(localStorage.getItem('idUser'));
   setTimeout(() => {
     this.nomUser = localStorage.getItem('user')
     console.log('aqui')
    if(this.perfil != '')
      {
          this.setEnv_loaded(1)
      }
   }, 1000);
  },

   computed: {
    ...mapState(["user", "itemCarrito", "users", 'token', 'perfil','env_loaded']),
     loaded() {
      return this.$store.state.env_loaded;
    },
   }

})
</script>

<style lang="scss">
// Las personalizaciones de SII
@import "@/styles/custom.scss";

// css de bootstrap y de vue bootstrap, siempre se deben incluir
 @import "~bootstrap/scss/bootstrap.scss";
 @import "~bootstrap-vue/src/index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar-dark .navbar-nav .nav-link {
    background-color: #00b8d8 !important;
    color: white  !important
}

.lblCartCount {
    font-size: 14px;
    background: #00b8d8;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
    border-radius: 16px;
    border: solid 2px;
    margin-left: -17%;
}
</style>
