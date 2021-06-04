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
              <span><h5><strong>Imagen</strong></h5></span>
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

             <div class="col-lg-2 mt-2">
              <span><h5><strong>Estado</strong></h5></span>
            </div>
            
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

            <!-- <div class="col-lg-2 mt-2">
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
            </div> -->
          </div>

          <!-- <div class="row mb-2">
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

        
          </div> -->

                <!-- <div id="previewImg"></div> -->

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
        <h4 class="titleDocument">Detalle Usuarios <b> {{this.usuarioNom}}</b></h4>
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
                v-model="usuarioNom"
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
                placeholder="Ingrese Nombre "               
                v-model="usuarioEmail"
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
              <b-form-input
                size="sm"
                class="form-control"
                placeholder="Ingrese Nombre "               
                v-model="usuarioPerfil"
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
      //modalDetalleImagenes: false,
     // modalDetalleSolicitud: false,
      //modalVerificacion: false,
      //modalvalidacionExito: false,
      modalDetailProducts: false,
      modalAddUsuarios: false,
      //modalImagenes: false,

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
      usuarioNom:'',
      usuarioEmail:'',
      usuarioPerfil:''
    };
  },

  methods: {

     ...mapActions(["ListTipoProductos", "ListProductos"]),
     
    /* Desde el componente padre */

    detalleSolicitud(estado) {
      this.estadoSolicitud = estado;
      this.modalDetalleSolicitud = true;
    },

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
      // this.createdAtProducto = data.createdAt;
      // this.precio = data.precio;
      // this.producto_tipo = data.producto_tipo;
      // this.stock = data.stock,
      // this.vendidos = data.vendidos;
      // this.estado_producto = data.estado;
      this.dataId = data._id;
      // setTimeout(() => {
      //   let preview = document.getElementById("previewImg"),
      //       image = document.createElement("img");
      //     image.classList.add("imgUpload");
      //     image.style.width = "100px;";
      //     image.src = data.imagen;
      //     preview.innerHTML = "";
      //        setTimeout(() => {
      //       image.style.width = "97%";
      //       image.style.height = "100%";
      //       preview.append(image);
      //     }, 500);
      // }, 1000);
     // this.ListTipoProductos();
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
      //this.producto_tipo= null;

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
    estado: this.estado_producto
  }
console.log(this.fileImage)
      try {
     
       axios({
        method: "POST",
        headers: {
          "Content-type": "application/json"
          // 'auth-token': this.token
        },
        url: "http://localhost:3001/api/producto",
        data: data
      }).then((response) => {
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
  //   precio : this.precio,
  //   stock : this.stock,
  //  // vendidos : req.body.vendidos,
  //   producto_tipo : this.producto_tipo,
  //   estado: this.estado_producto
  }

      try {
     
       axios({
        method: "POST",
        headers: {
          "Content-type": "application/json"
          // 'auth-token': this.token
        },
        url: "http://localhost:3001/api/tipo_producto",
        data: data
      }).then((response) => {
         this.ListTipoProductos();
         this.modalDetailTipoProducts = false;  
         this.tipo_ProductosNom ="";  

      });
      } catch (error) {
        console.log('error: ', error)
      }

    },

    UpProduct(){

      console.log( this.dataId)

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
          "Content-type": "application/json"
          // 'auth-token': this.token
        },
        url: `http://localhost:3001/api/producto/${this.dataId}`,
        data: data
      }).then((response) => {
         this.ListProductos();
         this.modalDetailProducts = false;    

      });
      } catch (error) {
        console.log('error: ', error)
      }

    },

    UpTipoProduct(){

      console.log( this.dataId)

        const data = {
     tipo_ProductosNom : this.tipo_ProductosNom,
  //   precio : this.precio,
  //   stock : this.stock,
  //  // vendidos : req.body.vendidos,
  //   producto_tipo : this.producto_tipo,
  //   estado: this.estado_producto
  }

      try {
     
       axios({
        method: "PUT",
        headers: {
          "Content-type": "application/json"
          // 'auth-token': this.token
        },
        url: `http://localhost:3001/api/tipo_producto/${this.dataId}`,
        data: data
      }).then((response) => {
         this.ListTipoProductos();
         this.modalDetailTipoProducts = false; 
           this.$swal.fire('Tipo de producto actualizado', '', 'success')   

      });
      } catch (error) {
        console.log('error: ', error)
      }

    },

    onPickFile() {
     
        this.$refs.fileInput.click();
     
    },

    readFile: function (e) {

        this.fileImage = e.target.files[0];
        this.typeImg = this.fileImage.type;
        this.previewImage = URL.createObjectURL(this.fileImage);

console.log( this.fileImage)
console.log( this.typeImg)
console.log( this.previewImage)

    },

   
 


    deleteRequest() {
      this.modalvalidacionExito = true;
      setTimeout(() => {
        document.getElementById("textmodalvalidacionExito").innerHTML =
          "Esta seguro de eliminar esta solicitud?";
      }, 10);
    },

    // checkDelete(option) {
    //   console.log(option);
    //   if (option === "No") {
    //     setTimeout(() => {
    //       document.getElementById("textmodalVerificacion").innerHTML =
    //         "Esta solicitud no se puede eliminar";
    //     }, 100);
    //   } else {
    //     setTimeout(() => {
    //       document.getElementById("textmodalVerificacion").innerHTML =
    //         "Esta seguro de eliminar esta solicitud?";
    //     }, 100);
    //   }
    //   this.modalVerificacion = true;
    // },

    detalleDocumento() {
      this.modalDetalleDocumento = true;
    },

    verImg() {
      this.modalImagenes = true;

      // if(this.typeImg === 'application/pdf')
      //     {
      //         this.modalImagenes = true;
      //         this.imgPreUrl=img;
      //         setTimeout(() => {
      //             document.getElementById("textDoc").innerHTML = tDoc;

      //             let preview = document.getElementById('previewImg'),
      //             image = document.createElement('pdf');
      //             image.classList.add('imgUpload');
      //             image.style.width = '100px;'
      //             image.src =  img;
      //             preview.innerHTML = '';

      //             setTimeout(() => {
      //                 image.style.width="97%";
      //                 image.style.height = "100%";
      //                 preview.append(image);
      //             }, 500);
      //         }, 10);

      //     }
      // else {

      //     this.modalImagenes = true;
      //     setTimeout(() => {
      //         document.getElementById("textDoc").innerHTML = tDoc;

      //         let preview = document.getElementById('previewImg'),
      //         image = document.createElement('img');
      //         image.classList.add('imgUpload');
      //         image.style.width = '100px;'
      //         image.src =  img;
      //         preview.innerHTML = '';

      //         setTimeout(() => {

      //             image.style.width="97%";
      //             image.style.height = "100%";
      //             preview.append(image);
      //         }, 500);
      //     }, 10);
      // }
    },

    // deleteRequest() {
    //   this.cargando = true;
    //   console.log(this.cargando);
    //   this.modalvalidacionExito = false;
    //   // this.bntRequest = false;
    //   setTimeout(() => {
    //     this.cargando = false;
    //     this.modalvalidacionExito = true;
    //     setTimeout(() => {
    //       document.getElementById("textmodalvalidacionExito").innerHTML =
    //         "Solicitud eliminada!";
    //     }, 10);
    //   }, 300);
    // },
  },

   computed: {
    ...mapState(["itemTipoProductos"]),
   }
};
</script>

<style>
</style>