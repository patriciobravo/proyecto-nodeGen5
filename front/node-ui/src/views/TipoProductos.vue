<template>
  <div class="container-fluid">
      <div class="main-content-container container-fluid px-4">
          <!-- Page Header -->
          <div class="page-header row no-gutters py-4 mb-3 border-bottom">
              <div class="col-12">
                  <span class="text-uppercase page-subtitle">Dashboard</span>
                  <h3 class="page-title">Proyecto & Node Js</h3>
              </div>
          </div>

          <div class="col-12">
              <h3 class="page-title">Tipo de Productos</h3>
              <div class="form-group">
                  <div class="d-flex flex-row-reverse">
                      <div class="p-2">
                          <button class="btn btn-sm btn-orange" id="buttonCsv" @click="OpenAddTipoProducts">
                              + Nuevo Tipo Producto
                          </button>
                      </div>
                  </div>
                  <div class="float-right bResultados">
                      <label>
                          Buscar en resultados:
                          <input class="ml-2" type="text" placeholder="" v-model="searchProductos" />
                      </label>
                  </div>

                  <div>
                      <label class="mr-1">
                          Mostrar
                          <select name="tablaComprobante_length" aria-controls="tablaComprobante" v-model="itemsPorPagina">
                              <option value="5">5</option>
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                          </select>
                          registros
                      </label>
                  </div>
              </div>

              <b-row style="overflow-x: auto;">
                  <b-col>
                      <b-table striped hover :per-page="itemsPorPagina" :items="itemTipoProductos" :current-page="currentPage" :filter="searchProductos" @filtered="onFiltered" :items2="paginador(itemTipoProductos)" :fields="fields">
                          <template v-slot:cell(ACCIONES)="data">
                              <div class="row btnSolicitud">
                                  <a @click="DetailTipoProducts(data.item)">
                                      <i class="far fa-list-alt fa-2x cblue" title="Detalle Producto"></i>
                                  </a>
                                  <a @click="detalleSolicitud(data.item.estado)">
                                      <i class="far fa-file-alt fa-2x cblue mb-2 ml-2" title="Detalle Liquidacion"></i>
                                  </a>
                                  <a  @click="DeleteTipoProduct(data.item._id)">
                                      <i class="fa fa-trash-alt fa-2x text-danger ml-2" title="Eliminar Tipo de producto"></i>
                                  </a>
                                
                              </div>
                          </template>
                      </b-table>
                      <div class="text-center" id="text"></div>
                  </b-col>
              </b-row>

              <div v-if="itemTipoProductos.length > 0">
                  <div class="tables_info" id="tablaComprobante_info" role="status" aria-live="polite">
                      Registros del {{ this.registroInicial }} al {{ parseInt(this.registroFinal, 10) }} de un total de {{ this.totalRows }} registros
                      <span v-if="itemTipoProductos.length > this.totalRows">
                          (filtrado de un total de {{ itemTipoProductos.length }} registros)
                      </span>
                  </div>
                  <div class="tables_paginate paging_full_numbers" id="tablaComprobante_paginate">
                      <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="itemsPorPagina" aria-controls="my-table" size="md" align="right"></b-pagination>
                  </div>
              </div>
          </div>
      </div>
      <ModalComponent ref="componente" />
  </div>
</template>

<script>
import Vue from 'vue';
import ModalComponent from "../components/ModalComponent";
import VueSweetalert2 from 'vue-sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

import { mapActions, mapState } from 'vuex';
import axios from 'axios';
export default {
     components: {
    ModalComponent,
  },

     data() {
    return {
      totalRows: "",
      itemsPorPagina: 10,
      currentPage: 1,
      registroFinal: "",
      registroInicial: "",
      searchProductos: "",
      fields: [
        {
          key: "tipo_ProductosNom",
          label: "Tipo de Producto",
          sortable: true,
          tdClass: "numSolicitud",
          thStyle: {
            background: "#0061a0",

            color: "#fff",
            size: "11px",
            width: "17%",            
            padding: "0 0 0 5%"

          },
        },
        // {
        //   key: "producto_tipo",          
        //   label: "Tipo de Producto ",
        //   sortable: true,
        //   tdClass: "fechSolicitud",
        //   thStyle: {
        //     background: "#0061a0",
        //     color: "#fff",
        //     size: "11px",
        //      width: "17%",
        //       padding: "0 0 0 4%"
        //   },
        // },
        // {
        //   key: "stock",
        //   label: "Cantidad",
        //   sortable: true,
        //   align: "center",
        //   tdClass: "tabalign",
        //   thStyle: {
        //     background: "#0061a0",
        //     color: "#fff",
        //     size: "11px",
        //     width: "7%",
        //      padding: "0 3% 0 4%"

        //   },
        // },
        // {
        //   key: "precio",
        //   formatter: "currencyFormat",
        //   label: "Precio",
        //   sortable: true,
        //   align: "center",
        //   tdClass: "montoR",
        //   thStyle: {
        //     background: "#0061a0",
        //     color: "#fff",
        //     size: "11px",
        //     width: "11%",
        //      padding: "0 0 0 8%"
        //   },
        // },
        // {
        //   key: "estado",
        //   label: "ESTADO",
        //   sortable: true,
        //    tdClass: "estado",
        //   thStyle: {
        //     background: "#0061a0",
        //     color: "#fff",
        //     size: "11px",
        //      width: "15%",
        //      padding: "0 0 0 5%"
        //   },
        // },
        {
          key: "ACCIONES",
           tdClass: "acciones",
          thStyle: {
            background: "#0061a0",
            color: "#fff",
            size: "11px",
             padding: "0 0 0 5%"
          },
        },
      ],
    };
  },

  methods:{
    

    ...mapActions(["ListTipoProductos"]),

    //SERVICIOS


    currencyFormat(value) {
        return "$ " + this.numberWithCommas(value.toFixed(0));
    },

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
      
    paginador: function (items) {
      var indiceInicio = (this.currentPage - 1) * this.itemsPorPagina;
      var indiceFinal =
        indiceInicio + this.itemsPorPagina > items.length
          ? items.length
          : indiceInicio + this.itemsPorPagina;
      if (this.totalRows === 0) {
        this.registroInicial = 0;
      } else if (
        this.itemTipoProductos.length > this.totalRows &&
        this.totalRows === 0
      ) {
        this.registroInicial = 0;
      } else {
        this.registroInicial = indiceInicio + 1;
      }
      this.registroFinal = indiceFinal;

      return items.slice(indiceInicio, indiceFinal);
    },
    
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;

      if (this.itemsPorPagina < this.totalRows) {
        this.itemsPorPagina = 10;
      } else {
        this.itemsPorPagina = this.totalRows;
      }

      this.currentPage = 1;

      if (this.totalRows === 0) {
        document.getElementById("text").innerHTML =
          "No se encontraron resultados";
        this.registroInicial = 0;
      } else {
        document.getElementById("text").innerHTML = "";
        this.itemsPorPagina = 10;
      }
    },

    DetailTipoProducts(data) {
              this.$refs.componente.DetailTipoProducts(data);
             
              console.log(data)
    },

    OpenAddTipoProducts(){
       this.$refs.componente.OpenAddTipoProducts();
    },

     DeleteTipoProduct(id){
       console.log(id)

    this.$swal.fire({
  title: 'Estas seguro de Eliminar este tipo de producto?',
  showDenyButton: true,
  //showCancelButton: true,
  confirmButtonText: `Eliminar`,
  denyButtonText: `No Eliminar`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    //this.$swal.fire('Saved!', '', 'success')

     const data = {
     ProductoNom : this.ProductoNom,
    precio : this.precio,
    stock : this.stock,
   // vendidos : req.body.vendidos,
    producto_tipo : this.producto_tipo
  }
         console.log(this.token) 

      try {
     
       axios({
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
           'auth-token': this.token
        },
        url: `http://localhost:3001/api/tipo_producto/${id}`,
       // data: id
      }).then((response) => {
         this.ListTipoProductos();
        // this.modalDetailProducts = false;   
         console.log(this.token) 

      });
      } catch (error) {
        console.log('error: ', error)
      }
  } else if (result.isDenied) {
    this.$swal.fire('Tipo de Producto no eliminado', '', 'info')

  }
})

    },




  },
  
    mounted(){
        this.ListTipoProductos();
    },
    computed: {
    ...mapState(["itemTipoProductos","token"]),
    
  },

}
</script>

<style>

input-group-addon, .input-group-btn {
    width: 16% !important;
  
}

.numSolicitud{
      padding-left: 5% !important;
}
.fechSolicitud{
   padding-left: 5% !important;
}
.tabalign {
  text-align: right;
  padding-right: 0% !important;
}

.montoR {
  text-align: right;
  padding-right: 0% !important;
}

.antiguedad {
  text-align: right;
  padding-right: 56px !important;
  font-weight: bold !important;
  font-weight: 900;
}

.antiguedad-yellow {
  color: #d4d422;
  text-align: right;
  padding-right: 56px !important;
  font-weight: bold !important;
  font-weight: 900;
}

.estado{
   padding-left: 5% !important;
}
.acciones{
   padding-left: 5% !important;
}

.btnSolicitud {
  margin-left: -5px !important;
}
.fechSolicitud {
 /*padding-left: 31px !important;*/
   padding-left: 6% !important;
}

@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
    max-width: 900px !important;
  }
}

</style>