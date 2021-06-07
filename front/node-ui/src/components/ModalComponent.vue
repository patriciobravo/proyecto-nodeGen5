<template>
  <div>
  
    <!-- Modal Seguimiento Solicitud-->
    <b-modal
      id="modalDetailProducts"
      v-model="modalDetailProducts"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop    
      no-fade
    >
      <div slot="modal-header">
        <h4 class="titleDocument">Detalle Producto <b> {{this.ProductoNom}}</b></h4>
      </div>

       <div slot="default" >        

        <div class="col-lg-12 mt-1">
          <div class="row mb-2">
            <div class="col-lg-2 mt-2">
              <span
                ><h5><strong>Producto</strong></h5></span
              >
            </div>
            <div class="col-lg-4">
              <b-form-input
                size="sm"
                class="form-control"
                placeholder="Ingrese Nombre Producto"               
                v-model="ProductoNom"
              >
              </b-form-input>
             
            </div>

            <div class="col-lg-2 mt-2">
              <span><h5><strong>Tipo Producto</strong></h5></span>
            </div>
            <div class="col-lg-4">
      
              <b-form-select
                size="sm"
                v-model="producto_tipo"
                class="form-control"
              >
                <b-form-select-option value="null">
                  Seleccione tipo de producto
                </b-form-select-option>
                <b-form-select-option
                  v-for="(elemento, index) in itemTipoProductos"
                  v-bind:value="elemento.tipo_ProductosNom"
                  :key="index"
                  >{{ elemento.tipo_ProductosNom }}
                </b-form-select-option>
              </b-form-select>
            </div>
          </div>

          <div class="row mb-2">
            <div class="col-lg-2 mt-2">
              <span><h5><strong>Stock</strong></h5></span>
            </div>
            <div class="col-lg-4">
                 <b-form-input
                size="sm"
                class="form-control"
                placeholder="Ingrese Stock"              
                v-model="stock"
              >
              </b-form-input>
            </div>

            <div class="col-lg-2 mt-2">
              <span><h5><strong>Precio</strong></h5></span>
            </div>
            <div class="col-lg-4">
              <b-form-input
                size="sm"
                class="form-control"
                placeholder="Ingrese Precio"
                v-model="precio"
              >
              </b-form-input>
            </div>      
          </div>

          <div class="row mb-2">
            <div class="col-lg-2 mt-2">
              <span><h5><strong>Estado</strong></h5></span>
            </div>
            <div class="col-lg-4">
               <b-form-select
                size="sm"
                v-model="estado_producto"
                class="form-control"
              >      
                <b-form-select-option value="null">
                  Seleccione estado
                </b-form-select-option>
                <b-form-select-option value="ACTIVO">
                  ACTIVO
                </b-form-select-option>
                <b-form-select-option value="INACTIVO">
                  INACTIVO
                </b-form-select-option>
       
              </b-form-select>
            </div>

             <!-- <div class="col-lg-2 mt-2">
              <span><h5><strong>Estado</strong></h5></span>
            </div> -->
            
            <!-- <div class="col-lg-4">
               <button class="btn btn-primary btn-sm" @click="onPickFile">
                    <i class="fa fa-paperclip" aria-hidden="true"></i> Adjuntar
                  </button>

                  <input
                    type="file"
                    ref="fileInput"
                    accept="image/*"
                   name="imagen"
                   
                    @change="readFile"
                    
                  />
            </div> -->

            
        
          </div>

                <div
          id="previewImg"
         
         
        ></div>

        </div>

      
      </div>
      <div slot="modal-footer">
         <button
          id="btnClass"
          class="btn btn-primary btn-sm"
          @click="AddProduct"
          v-if="isButton"

        >
           + Agregar
        </button>
         <button
          id="btnClass"
          class="btn btn-primary btn-sm"
          @click="UpProduct"
          v-if="!isButton"
        >
          Actualizar
        </button>
        <button
          id="btnClass"
          class="btn btn-red btn-sm"
          @click="modalDetailProducts = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>

    <b-modal
     
      v-model="modalDetailTipoProducts"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop    
      no-fade
    >
      <div slot="modal-header">
        <h4 class="titleDocument">Detalle Tipo Producto <b> {{this.tipo_ProductosNom}}</b></h4>
      </div>

       <div slot="default" >        

        <div class="col-lg-12 mt-1">
          <div class="row mb-2">
            <div class="col-lg-2 mt-2">
              <span
                ><h5><strong>Tipo Producto</strong></h5></span
              >
            </div>
            <div class="col-lg-4">
              <b-form-input
                size="sm"
                class="form-control"
                placeholder="Ingrese Nombre Producto"               
                v-model="tipo_ProductosNom"
              >
              </b-form-input>
             
            </div>   
          </div>
        </div>      
      </div>
      <div slot="modal-footer">
         <button
          id="btnClass"
          class="btn btn-primary btn-sm"
          @click="AddTipoProduct"
          v-if="isButton"

        >
           + Agregar
        </button>
         <button
          id="btnClass"
          class="btn btn-primary btn-sm"
          @click="UpTipoProduct"
          v-if="!isButton"
        >
          Actualizar
        </button>
        <button
          id="btnClass"
          class="btn btn-red btn-sm"
          @click="modalDetailTipoProducts = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>

     <b-modal
     
      v-model="modalAddUsuarios"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop    
      no-fade
    >
      <div slot="modal-header">
        <h4 class="titleDocument">Detalle Usuarios <b> {{UsuarioNom}}</b></h4>
      </div>

       <div slot="default" >        

        <div class="col-lg-12 mt-1">
          <div class="row mb-2">
            <div class="col-lg-2 mt-2">
              <span
                ><h5><strong>Nombre</strong></h5></span
              >
            </div>
            <div class="col-lg-4">
              <b-form-input
                size="sm"
                class="form-control"
                placeholder="Ingrese Nombre "               
                v-model="UsuarioNom"
              >
              </b-form-input>             
            </div>

            <div class="col-lg-2 mt-2">
              <span><h5><strong>Email</strong></h5></span>
            </div>
            <div class="col-lg-4">

               <b-form-input
                size="sm"
                class="form-control"
                placeholder="Ingrese Email "               
                v-model="UsuarioEmail"
              >
              </b-form-input>                 
            </div>

          </div>
           <div class="row mb-2">
            <div class="col-lg-2 mt-2">
              <span
                ><h5><strong>Perfil</strong></h5></span
              >
            </div>
            <div class="col-lg-4">             
               <b-form-select
                size="sm"
                v-model="UsuarioPerfil"
                class="form-control"
              >      
                <b-form-select-option value="null">
                  Seleccione Perfil
                </b-form-select-option>
                <b-form-select-option value="Admin">
                  Administrador
                </b-form-select-option>
                <b-form-select-option value="Cliente">
                  Cliente
                </b-form-select-option>
       
              </b-form-select>          
            </div>
            <div class="col-lg-2 mt-2">
              <span
                ><h5><strong>Contraseña</strong></h5></span
              >
            </div>
            <div class="col-lg-4">             
              <b-form-input
              type="password"
                size="sm"
                class="form-control"
                placeholder="Ingrese Contraseña "               
                v-model="UsuarioPassword"
              >
              </b-form-input> 
              <span variant="primary"><h5>Debe tener numeros,caracteres minusculas y mayusculas y caracteres @$.!%*#?& </h5></span>            
            </div>
          </div>
        

       
        </div>
      </div>
      <div slot="modal-footer">
         <button
          id="btnClass"
          class="btn btn-primary btn-sm"
          @click="AddUsuario"
          v-if="isButton"

        >
           + Agregar
        </button>
         <button
          id="btnClass"
          class="btn btn-primary btn-sm"
          @click="UpUsuario"
          v-if="!isButton"
        >
          Actualizar
        </button>
        <button
          id="btnClass"
          class="btn btn-red btn-sm"
          @click="modalAddUsuarios = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>


   
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from 'vuex';
// If you don't need the styles, do not connect
export default {
  data() {
    return {
      modalDetailTipoProducts: false,
      modalDetailProducts: false,
      modalAddUsuarios: false,
      bntRequest: true,
      isButton: true,
      estadoSolicitud: "",
      textoDetail:"",
      ProductoNom:"",
      tipo_ProductosNom: "",
      createdAtProducto: "",
      fileImage:"",
      precio: "",
      producto_tipo: "",
      estado_producto: null,
      stock: "",
      vendidos: "",
      imagen:'',
      UsuarioNom:'',
      UsuarioEmail:'',
      UsuarioPerfil:null,
      UsuarioPassword:'',
      resCarrito:[]
    };
  },

  methods: {

     ...mapActions(["ListTipoProductos", "ListProductos", "ListUsuarios", "ListCarrito"]),
     
    /* Desde el componente padre */

  
    DetailProducts(data) {
      
        try {
     
      axios.get(`http://localhost:3001/api/producto/imagen/${data._id}`).then((response) => {
       this.imagenData = response.data;
        console.log(response.data)
        //commit('setTipoProductos', resTipoProd)

      });
      } catch (error) {
        console.log('error: ', error)
      }
      this.isButton = false;
      this.modalDetailProducts = true;         
      this.ProductoNom = data.ProductoNom;
      this.createdAtProducto = data.createdAt;
      this.precio = data.precio;
      this.producto_tipo = data.producto_tipo;
      this.stock = data.stock,
      this.vendidos = data.vendidos;
      this.estado_producto = data.estado;
      this.dataId = data._id;
      setTimeout(() => {
        let preview = document.getElementById("previewImg"),
            image = document.createElement("img");
          image.classList.add("imgUpload");
          image.style.width = "100px;";
          image.src = `http://localhost:3001/api/producto/imagen/${data._id}`;
          preview.innerHTML = "";
             setTimeout(() => {
            image.style.width = "97%";
            image.style.height = "100%";
            preview.append(image);
          }, 500);
      }, 5);
      this.ListTipoProductos();
    },

    DetailTipoProducts(data) {
      this.isButton = false;
      this.modalDetailTipoProducts = true;         
      this.tipo_ProductosNom = data.tipo_ProductosNom;     
      this.dataId = data._id;
     
    },

    DetailUsuario(data) {
      this.ListCarrito();
           try {
     
       axios({
        method: "GET",
        headers: {
          "Content-type": "application/json",
           'auth-token': this.token
        },
        url: `http://localhost:3001/api/usuarios/${data}`,
        data: data
      }).then((response) => {
          const respUsuario =response.data.data
          this.isButton = false;
          this.modalAddUsuarios = true;         
          this.UsuarioNom = respUsuario.name;   
          this.UsuarioEmail = respUsuario.email;
          this.UsuarioPerfil = respUsuario.perfil;
          this.dataId = data;
      });

       axios({
        method: "GET",
        headers: {
          "Content-type": "application/json",
           'auth-token': this.token
        },
        url: `http://localhost:3001/api/carro/${data}`,
        data: data
      }).then((response) => {
             this.resCarrito = response.data.items;
        
      });
      } catch (error) {
        console.log('error: ', error)
      }
      
    },


    OpenAddProducts(){
      this.isButton = true;
      this.modalDetailProducts = true;    
      this.ListTipoProductos();
      this.producto_tipo= null;

    },
    
    OpenAddTipoProducts(){
      this.isButton = true;
      this.modalDetailTipoProducts = true;    
      this.ListTipoProductos();
    },

    OpenAddUsuario(){
      this.isButton = true;
      this.modalAddUsuarios = true;    
      //this.ListTipoProductos();
      //this.producto_tipo= null;

    },    

    AddProduct(){

      const data = {
     ProductoNom : this.ProductoNom,
    precio : this.precio,
    stock : this.stock,
   // vendidos : req.body.vendidos,
    producto_tipo : this.producto_tipo,
    imagen: this.fileImage,
    estado: this.estado_producto,
  }
      try {
     
       axios({
        method: "POST",
        headers: {
          "Content-type": "application/json",
           'auth-token': this.token
        },
        url: "http://localhost:3001/api/producto",
        data: data
      }).then((response) => {
        this.$swal.fire('Producto Creado', '', 'success')
        this.ListProductos();
        this.modalDetailProducts = false;
        this.ProductoNom ="",
        this.precio ="",
        this.stock ="",
        // vendidos : req.body.vendidos,
        this.producto_tipo = null,
        this.estado_producto = null

      });
      } catch (error) {
        console.log('error: ', error)
      }

    },

    AddTipoProduct(){

      const data = {
     tipo_ProductosNom : this.tipo_ProductosNom,
     }

      try {
     
       axios({
        method: "POST",
        headers: {
          "Content-type": "application/json",
          'auth-token': this.token
        },
        url: "http://localhost:3001/api/tipo_producto",
        data: data
      }).then((response) => {
         this.ListTipoProductos();
         this.modalDetailTipoProducts = false;  
         this.tipo_ProductosNom ="";  
                 this.$swal.fire('Tipo Producto Creado', '', 'success')


      });
      } catch (error) {
        console.log('error: ', error)
      }
    },

    UpProduct(){

        const data = {
     ProductoNom : this.ProductoNom,
    precio : this.precio,
    stock : this.stock,
   // vendidos : req.body.vendidos,
    producto_tipo : this.producto_tipo,
    estado: this.estado_producto
  }

      try {
     
       axios({
        method: "PUT",
        headers: {
          "Content-type": "application/json",
           'auth-token': this.token
        },
        url: `http://localhost:3001/api/producto/${this.dataId}`,
        data: data
      }).then((response) => {
         this.ListProductos();
         this.modalDetailProducts = false;    
         this.$swal.fire('Producto actualizado', '', 'success')   
         this.ProductoNom ='',
         this.precio ='',
         this.stock ='',
         this.producto_tipo ='',
         this.estado_producto = null


      });
      } catch (error) {
        console.log('error: ', error)
      }

    },

    UpTipoProduct(){

      console.log( this.dataId)

      const data = {
          tipo_ProductosNom: this.tipo_ProductosNom
          
      }

      try {
     
       axios({
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          'auth-token': this.token
        },
        url: `http://localhost:3001/api/tipo_producto/${this.dataId}`,
        data: data
      }).then((response) => {
         this.ListTipoProductos();
         this.modalDetailTipoProducts = false; 
           this.$swal.fire('Tipo de producto actualizado', '', 'success')   
           this.tipo_ProductosNom='';

      });
      } catch (error) {
        console.log('error: ', error)
      }

    },

    AddUsuario(){

      const data = {
        name : this.UsuarioNom,
        email : this.UsuarioEmail,
        password : this.UsuarioPassword,
        perfil : this.UsuarioPerfil,
      }
      try {
     
       axios({
        method: "POST",
        headers: {
          "Content-type": "application/json",
           'auth-token': this.token
        },
        url: "http://localhost:3001/api/register",
        data: data
      }).then((response) => {
        this.ListUsuarios(this.token);
        this.modalAddUsuarios = false;
        this.UsuarioNom= "";
        this.UsuarioEmail ="";
        this.UsuarioPerfil =null;
                this.UsuarioPassword=''  
   
                   this.$swal.fire('Usuario Creado', '', 'success')   
 

      });
      } catch (error) {
        console.log('error: ', error)
      }

    },

    UpUsuario(){

      console.log( this.dataId)

        const data = {
          name : this.UsuarioNom,
          email : this.UsuarioEmail,
          password : this.UsuarioPassword,
          perfil : this.UsuarioPerfil,
  }

      try {
     
       axios({
        method: "PUT",
        headers: {
          "Content-type": "application/json",
           'auth-token': this.token
        },
        url: `http://localhost:3001/api/usuarios/${this.dataId}`,
        data: data
      }).then((response) => {
         this.ListUsuarios(this.token);
         this.modalAddUsuarios = false; 
           this.$swal.fire('Usuario Actualizado', '', 'success') 
           this.UsuarioNom= "";
        this.UsuarioEmail ="";
        this.UsuarioPerfil =null; 
        this.UsuarioPassword=''  

      });
      } catch (error) {
        console.log('error: ', error)
      }

    },
      
  },

   computed: {
    ...mapState(["itemTipoProductos","token", "itemCarrito"]),
   }
};
</script>

<style>
</style>