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

            <div
          id="previewImg"
         
         
        ></div>
          </div>

        </div>

      
      </div>
      <div slot="modal-footer">
         <button
          id="btnClass"
          class="btn btn-primary btn-sm"
          @click="AddProduct"
        >
          Agregar
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

   
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from 'vuex';
// If you don't need the styles, do not connect
export default {
  data() {
    return {
      modalDetalleDocumento: false,
      modalDetalleImagenes: false,
      modalDetalleSolicitud: false,
      modalVerificacion: false,
      modalvalidacionExito: false,
      modalDetailProducts: false,
      modalImagenes: false,
      bntRequest: true,
      estadoSolicitud: "",
      textoDetail:"",
      ProductoNom: "",
      createdAtProducto: "",
      precio: "",
      producto_tipo: "",
      stock: "",
      vendidos: ""
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

      this.modalDetailProducts = true;         
      this.ProductoNom = data.ProductoNom;
      this.createdAtProducto = data.createdAt;
      this.precio = data.precio;
      this.producto_tipo = data.producto_tipo;
      this.stock = data.stock,
      this.vendidos = data.vendidos;
      setTimeout(() => {
        let preview = document.getElementById("previewImg"),
            image = document.createElement("img");
          image.classList.add("imgUpload");
          image.style.width = "100px;";
          image.src = data.imagen;
          preview.innerHTML = "";
             setTimeout(() => {
            image.style.width = "97%";
            image.style.height = "100%";
            preview.append(image);
          }, 500);
      }, 1000);
      this.ListTipoProductos();
    },

    OpenAddProducts(){

       this.modalDetailProducts = true;    
      this.ListTipoProductos();
      this.producto_tipo= null;

    },

    AddProduct(){

      const data = {
     ProductoNom : this.ProductoNom,
    precio : this.precio,
    stock : this.stock,
   // vendidos : req.body.vendidos,
    producto_tipo : this.producto_tipo
  }

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

      });
      } catch (error) {
        console.log('error: ', error)
      }

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