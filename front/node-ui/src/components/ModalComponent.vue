<template>
  <div>
    <b-modal
      id="modalHeader"
      no-close-on-esc
      no-close-on-backdrop
      entrance-transition="animated fadeIn"
      
    >
      <div slot="modal-header">
        <h5>
          <strong> Detalle de Solicitud</strong>
        </h5>
      </div>
      <div slot="default">
        <div class="col-lg-12 mt-3">
          <div class="row">
            <div class="col-lg-5 mt-1">
              <span>
                <h5><strong>Folio de Solicitud</strong></h5>
              </span>
            </div>
            <div class="col-lg-4">
              <label for="" class=""><h5>5645908</h5></label>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-5 mt-1">
              <span>
                <h5><strong>Tipo prestación</strong></h5>
              </span>
            </div>
            <div class="col-lg-3">
              <label for="" class=""><h5>Dental</h5></label>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-5 mt-1">
              <span>
                <h5><strong>Prestador</strong></h5>
              </span>
            </div>
            <div class="col-lg-6">
              <label for="" class=""><h5>Benjamin Rosales Rosales</h5></label>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-5 mt-1">
              <span>
                <h5><strong>Estado de reembolso</strong></h5>
              </span>
            </div>
            <div class="col-lg-3">
              <label for="" class=""><h5>pagado</h5></label>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-5 mt-1">
              <span>
                <h5><strong>Monto solicitado</strong></h5>
              </span>
            </div>
            <div class="col-lg-3">
              <label for="" class=""><h5>156900</h5></label>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-5 mt-1">
              <span>
                <h5><strong>Monto Bonificado</strong></h5>
              </span>
            </div>
            <div class="col-lg-3">
              <label for="" class=""><h5>20.000</h5></label>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-5 mt-1">
              <span>
                <h5><strong>Medio de pago</strong></h5>
              </span>
            </div>
            <div class="col-lg-6">
              <label for="" class=""><h5>Depósito en Cta. Cte.</h5></label>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-5 mt-1">
              <span>
                <h5><strong>Destinatario del pago</strong></h5>
              </span>
            </div>
            <div class="col-lg-6">
              <label for="" class=""><h5>Erwin Rosales Muñoz</h5></label>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-5 mt-1">
              <span>
                <h5><strong>Liquidación</strong></h5>
              </span>
            </div>
            <div class="col-lg-3">
              <label for="" class="">
                <h5>
                  <router-link to="/">Ver Liquidación</router-link>
                </h5>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div slot="modal-footer">
        <button
          class="btn btn-sm btn-primary"
          @click="modalDetalleSolicitud = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>

    <!-- Modal detalle Solicitud-->
    <b-modal
      v-model="modalDetalleSolicitud"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop
    >
      <div slot="modal-header">
        <h4 class="titleDocument">
          <b
            >LIQUIDACIÓN N°
            <em class="text-dark" v-if="this.estadoSolicitud === 'RECIBIDA'"
              >pendiente</em
            >
            <span v-if="this.estadoSolicitud != 'RECIBIDA'">5554949</span></b
          >
          <!--pendiente en negro y cursivo -->
        </h4>
      </div>
      <div slot="default">
        <div class="col-lg-12 mt-3">
          <div class="row mb-1">
            <!-- <div class="col-lg-3">
                <span><h5><strong>N° Liquidación</strong></h5></span >
            </div>
            <div class="col-lg-3">
                <label for="" class="" v-if="this.estadoSolicitud === 'Recibida'"><h5>pendiente</h5></label>
                  <label for="" class="" v-if="this.estadoSolicitud != 'Recibida'"><h5>5445789</h5></label>
            </div> -->

            <div class="col-lg-3">
              <span>
                <h5><strong>N° Solicitud</strong></h5>
              </span>
            </div>
            <div class="col-lg-2">
              <label for="" class="" v-if="this.estadoSolicitud === 'RECIBIDA'"
                ><h5>5645908</h5></label
              >
              <label for="" class="" v-if="this.estadoSolicitud != 'RECIBIDA'"
                ><h5>5645907</h5></label
              >
            </div>
          </div>
          <div class="row mb-1">
            <div class="col-lg-3 mt-1">
              <span>
                <h5><strong>Fecha Solicitud</strong></h5>
              </span>
            </div>
            <div class="col-lg-3">
              <label for="" class=""><h5>23-02-2021</h5></label>
            </div>

            <div class="col-lg-3 mt-1">
              <span>
                <h5><strong>Estado Solicitud</strong></h5>
              </span>
            </div>
            <div class="col-lg-3">
              <label for="" class=""
                ><h5>{{ this.estadoSolicitud }}</h5></label
              >
            </div>
          </div>
        </div>

        <div style="overflow-x: auto; height: 208px">
          <table class="table b-table table-hover border">
            <thead>
              <tr>
                <th style="text-align: left; width: 89px">RUT BENEFICIARIO</th>
                <!-- <th style="text-align:left">NOMBRE BENEFICIARIO</th> -->
                <th style="text-align: left; width: 89px">RUT PRESTADOR</th>
                <th style="text-align: left; width: 89px">TIPO DOCUMENTO</th>
                <th style="text-align: left; width: 89px">NÚMERO DOCUMENTO</th>
                <th style="width: 89px">FECHA DOCUMENTO</th>
                <th style="text-align: right; width: 89px">MONTO SOLICITADO</th>
                <th style="text-align: right; width: 89px">
                  MONTO A REEMBOLSAR
                </th>
                <th style="width: 15%; text-align: center">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10.897.955-0</td>
                <!-- <td>Ariel Cantu dedes</td> -->
                <td>96.938.840-5</td>
                <td>Factura</td>
                <td style="padding-left: 15px">500</td>
                <td style="padding-left: 2%">14-04-2021</td>
                <td style="text-align: right">156.900</td>
                <td style="text-align: right">94.140</td>
                <td>
                  <a v-if="this.estadoSolicitud != 'RECIBIDA'">
                    <i class="fa fa-exclamation text-danger" aria-hidden="true"></i>
                    <i
                      class="fa fa-check fa-2x text-success ml-2"
                      id="tooltip-button-interactive2"
                      @click="modalDetalleDocumento = true"
                    ></i>
                  </a>
                  <b-tooltip
                    target="tooltip-button-interactive2"
                    v-if="this.estadoSolicitud != 'RECIBIDA'"
                    >Aprobado!</b-tooltip
                  >
                  <a v-if="this.estadoSolicitud === 'RECIBIDA'">
                    <i class="ml-3"></i>
                  </a>
                  <a>
                    <i
                      class="far fa-list-alt fa-2x text-primary ml-2"
                      title="Detalle Documento"
                      @click="modalDetalleDocumento = true"
                    ></i>
                  </a>
                  <a>
                    <i
                      class="far fa-images fa-2x text-primary ml-2"
                      title="Ver Documento"
                      @click="modalDetalleImagenes = true"
                    ></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>21.386.525-0</td>
                <!-- <td>Martin Cantu Rivera</td> -->
                <td>96.938.840-5</td>
                <td>Factura</td>
                <td style="padding-left: 20px">25</td>
                <td style="padding-left: 2%">13-04-2021</td>
                <td style="text-align: right">25.000</td>
                <td style="text-align: right">15.000</td>
                <td>
                  <a v-if="this.estadoSolicitud != 'RECIBIDA'">
                    <i
                      class="fa fa-times fa-2x text-danger ml-3"
                      id="tooltip-button-interactive1"
                      title="Detalle Documento"
                    ></i>
                  </a>
                  <a v-if="this.estadoSolicitud === 'RECIBIDA'">
                    <i class="ml-3"></i>
                  </a>
                  <a>
                    <i
                      class="far fa-list-alt fa-2x text-primary ml-2"
                      title="Detalle Documento"
                      @click="detalleDocumento"
                    ></i>
                  </a>
                  <a>
                    <i
                      class="far fa-images fa-2x text-primary ml-2"
                      title="Ver Documento"
                      @click="modalDetalleImagenes = true"
                    ></i>
                  </a>
                  <b-tooltip
                    target="tooltip-button-interactive1"
                    v-if="this.estadoSolicitud != 'RECIBIDA'"
                    >Rechazado, Sin prespuesto!</b-tooltip
                  >
                </td>
              </tr>
              <tr>
                <td>21.014.163-4</td>
                <!-- <td>Manuel Cantu Rivera</td> -->
                <td>96.938.840-5</td>
                <td>Factura</td>
                <td style="padding-left: 15px">600</td>
                <td style="padding-left: 2%">10-04-2021</td>
                <td style="text-align: right">15.990</td>
                <td style="text-align: right">9.594</td>
                <td>
                  <a v-if="this.estadoSolicitud != 'RECIBIDA'">
                    <i
                      class="fa fa-times fa-2x text-danger ml-3"
                      id="tooltip-button-interactive"
                      title="Detalle Documento"
                    ></i>
                  </a>
                  <a v-if="this.estadoSolicitud === 'RECIBIDA'">
                    <i class="ml-3"></i>
                  </a>
                  <a>
                    <i
                      class="far fa-list-alt fa-2x text-primary ml-2"
                      title="Detalle Documento"
                      @click="detalleDocumento"
                    ></i>
                  </a>

                  <a>
                    <i
                      class="far fa-images fa-2x text-primary ml-2"
                      title="Ver Documento"
                      @click="modalDetalleImagenes = true"
                    ></i>
                  </a>
                  <b-tooltip
                    target="tooltip-button-interactive"
                    v-if="this.estadoSolicitud != 'RECIBIDA'"
                    >Rechazado, boleta no descriptiva!</b-tooltip
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <fieldset
          class="scheduler-border"
          v-if="this.estadoSolicitud != 'RECIBIDA'"
        >
          <legend class="scheduler-border">Totales</legend>

          <div class="form-group row ml-5">
            <div class="col-md-4">
              <label class=""><strong>Total Solicitado:</strong></label>
              <span class="ml-2">197.890</span>
            </div>
            <div class="col-md-4">
              <label class=""><strong>Total a Reembolsar:</strong></label>
              <span class="ml-2">94.140</span>
            </div>
            <div class="col-md-4">
              <label class=""><strong>Total Rechazado:</strong></label>
              <span class="ml-2">24.594</span>
            </div>
          </div>
        </fieldset>

        <fieldset
          class="scheduler-border"
          v-if="this.estadoSolicitud === 'RECIBIDA'"
        >
          <legend class="scheduler-border">Totales</legend>

          <div class="form-group row ml-5">
            <div class="col-md-7">
              <label class=""><strong>Total Solicitado:</strong></label>
              <span class="ml-2">197.890</span>
            </div>
            <!-- <div class="col-md-4">
            <label class=""><strong>Total a Reembolsar:</strong></label>
            <span class="ml-2">11.8734</span>
          </div> -->
            <div class="col-md-4">
              <label class=""><strong>Total a Reembolsar:</strong></label>
              <span class="ml-2">118.734</span>
            </div>
          </div>
        </fieldset>
      </div>
      <div slot="modal-footer">
        <button
          id="btnClass"
          class="btn btn-red btn-sm mt-2"
          @click="modalDetalleSolicitud = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>

    <!-- Modal detalle Documento-->
    <b-modal
      v-model="modalDetalleDocumento"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop
    >
      <div slot="modal-header">
        <h4 class="titleDocument">
          <b>DETALLE DEL DOCUMENTO N° 500</b>
        </h4>
      </div>
      <div slot="default">
        <div style="overflow-x: auto">
          <table class="table b-table table-hover border">
            <thead>
              <tr>
                <th style="text-align: left">PRESTACIÓN</th>
                <th style="text-align: right">MONTO</th>
                <th style="text-align: right">MONTO A REEMBOLSAR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8888005 PRESTACIONES ODONTOLÓGICAS</td>
                <td style="text-align: right">100.000</td>
                <td style="text-align: right">60.000</td>
              </tr>

              <tr>
                <td>8888005 PRESTACIONES ODONTOLÓGICAS</td>
                <td style="text-align: right">20.000</td>
                <td style="text-align: right">12.000</td>
              </tr>
              <tr>
                <td>8888005 PRESTACIONES ODONTOLÓGICAS</td>
                <td style="text-align: right">36.900</td>
                <td style="text-align: right">22.140</td>
              </tr>
            </tbody>
          </table>

          <b-form-textarea
      id="textarea"
      v-model="textoDetail"
      placeholder="Ingrese texto"
      rows="3"
      max-rows="6"
      disabled
    ></b-form-textarea>
        </div>
      </div>
      <div slot="modal-footer">
        <button
          id="btnClass"
          class="btn btn-red btn-sm mt-2"
          @click="modalDetalleDocumento = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>

    <!-- Modal detalle Imagenes/Pdf-->
    <b-modal
      v-model="modalDetalleImagenes"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop

    >
      <div slot="modal-header">
        <h4 class="titleDocument">
          <b>DOCUMENTO DIGITAL ASOCIADOS A N° 500</b>
        </h4>
      </div>
      <div slot="default">
        <div style="overflow-x: auto">
          <table class="table b-table table-hover border">
            <thead>
              <tr>
                <th>TIPO DE DOCUMENTO</th>
                <th>DOCUMENTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Documento de pago</td>
                <td>
                  <a>
                    <i
                      class="far fa-images fa-2x text-primary ml-2"
                      title="Ver Documento"
                      @click="verImg"
                    ></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Presupuesto</td>
                <td>
                  <a>
                    <i
                      class="far fa-images fa-2x text-primary ml-2"
                      title="Ver Documento"
                      @click="verImg"
                    ></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Detalle de prestación</td>
                <td>
                  <a>
                    <i
                      class="far fa-images fa-2x text-primary ml-2"
                      title="Ver Documento"
                      @click="verImg"
                    ></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div slot="modal-footer">
        <button
          id="btnClass"
          class="btn btn-red btn-sm mt-2"
          @click="modalDetalleImagenes = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>

    <!-- Modal Imagenes -->

    <b-modal
      id="modalComExito"
      v-model="modalImagenes"
      size="sm"
      no-close-on-esc
      no-close-on-backdrop
    >
      <div slot="modal-header">
        <h4>
          <div id="textDoc"></div>
          Documento de Pago
        </h4>
        <!-- <pdf id="pdf" :src="imgPreUrl" :page="1" v-if="typeImg === 'application/pdf'"></pdf> -->
      </div>
      <div slot="default">
        <!-- <div id="previewImg" v-for="(img, index) in imgDocumentos" :key="index">
            </div> -->
        <!-- <img src="../../assets/logo_intranet.png" alt="" /> -->
      </div>
      <div slot="modal-footer">
        <button
          class="btn btn-sm btn-light ml-2"
          @click="modalImagenes = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>

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
              <transition name="fade">
                <span v-if="show" id="btnClass" class="text-danger">
                  {{ rutValidate }}</span
                >
              </transition>
            </div>

            <div class="col-lg-2 mt-2">
              <span><h5><strong>Tipo Producto</strong></h5></span>
            </div>
            <div class="col-lg-4">
              <b-form-input
                size="sm"
                class="form-control"
                placeholder="Ingrese Nombre Prestador"              
                v-model="producto_tipo"
              >
              </b-form-input>
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

        </div>

      
      </div>
      <div slot="modal-footer">
        <button
          id="btnClass"
          class="btn btn-red btn-sm"
          @click="modalDetailProducts = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>

    <!-- Modal Verificacion -->
    <b-modal
      id="modalComExito"
      v-model="modalvalidacionExito"
      size="sm"
      no-close-on-esc
      no-close-on-backdrop
      fade
    >
      <div slot="modal-header">
        <h4>Atención</h4>
      </div>
      <div slot="default">
        <div>
          <form>
            <div class="d-block text-left" id="textmodalvalidacionExito"></div>
          </form>
        </div>
      </div>
      <div slot="modal-footer">
        <button
          v-if="bntRequest"
          class="btn btn-sm btn-blue"
          @click="deleteRequest"
        >
          Aceptar
        </button>
        <button
          class="btn btn-light btn-sm ml-2"
          @click="modalvalidacionExito = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>

    <!-- Modal No Actualizacion-->
    <b-modal
      id="modalAt"
      v-model="modalVerificacion"
      size="sm"
      no-close-on-esc
      no-close-on-backdrop
    >
      <div slot="modal-header">
        <h4>Atención</h4>
      </div>
      <div slot="default">
        <div>
          <form>
            <!-- <div class="d-block text-left">
              Esta seguro de eliminar esta solicitud?

            </div> -->
            <div class="d-block text-left" id="textmodalVerificacion"></div>
          </form>
        </div>
      </div>
      <div slot="modal-footer">
        <button
          id="btnClass"
          class="btn btn-red btn-sm ml-2"
          @click="modalVerificacion = false"
        >
          Cerrar
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
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
};
</script>

<style>
</style>