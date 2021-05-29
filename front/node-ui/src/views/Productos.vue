<template>
   <div class="container-fluid">
        <div class="main-content-container container-fluid px-4">
            <!-- Page Header -->
            <div class="page-header row no-gutters py-4 mb-3 border-bottom">
             <div class="col-12  ">
                <span class="text-uppercase page-subtitle">Dashboard</span>
                <h3 class="page-title">Proyecto & Node Js</h3>
              </div>
            </div>

            <div class="col-12">
    <div class="form-group">
      <div class="float-right bResultados">
        <label
          >Buscar en resultados:
          <input
            class="ml-2"
            type="text"
            placeholder=""
            v-model="searchProductos"
          />
        </label>
      </div>

      <div>
        <label class="mr-1"
          >Mostrar
          <select
            name="tablaComprobante_length"
            aria-controls="tablaComprobante"
            v-model="itemsPorPagina"
          >
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

    

    <b-row style="overflow-x: auto">
      <b-col>
        <b-table
          striped
          hover
          :per-page="itemsPorPagina"
          :items="itemProductos"
          :current-page="currentPage"
          :filter="searchProductos"
          @filtered="onFiltered"
          :items2="paginador(itemProductos)"
          :fields="fields"
        >
          <template v-slot:cell(ACCIONES)="data">
            <div class="row btnSolicitud">
              <a @click="DetailProducts(data.item)">
                <i class="far fa-list-alt fa-2x cblue" title="Seguimiento"></i>
              </a>
              <a @click="detalleSolicitud(data.item.estado)">
                <i
                  class="far fa-file-alt fa-2x cblue mb-2 ml-2"
                  title="Detalle Liquidacion"
                ></i>
              </a>
              <a v-if="data.item.estado === 'Recibida'" @click="deleteRequest">
                <i
                  class="fa fa-trash-alt fa-2x text-danger ml-2"
                  title="Eliminar Solicitud"
                ></i>
              </a>
              <a
                v-if="data.item.estado != 'Recibida'"
                @click="checkDelete((option = 'No'))"
              >
                <i
                  class="fa fa-trash-alt fa-2x text-secondary ml-2"
                  title="Eliminar Solicitud"
                ></i>
              </a>
            </div>
          </template>
        </b-table>
        <div class="text-center" id="text"></div>
      </b-col>
    </b-row>

    <div v-if="itemProductos.length > 0">
      <div
        class="tables_info"
        id="tablaComprobante_info"
        role="status"
        aria-live="polite"
      >
        Registros del {{ this.registroInicial }} al
        {{ parseInt(this.registroFinal, 10) }} de un total de
        {{ this.totalRows }} registros
        <span v-if="itemProductos.length > this.totalRows">
          (filtrado de un total de {{ itemProductos.length }} registros)
        </span>
      </div>
      <div
        class="tables_paginate paging_full_numbers"
        id="tablaComprobante_paginate"
      >
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="itemsPorPagina"
          aria-controls="my-table"
          size="md"
          align="right"
        ></b-pagination>
      </div>
    </div>

  </div>

            
        </div>
            <ModalComponent ref="componente" />

     
    </div>
</template>

<script>
import ModalComponent from "../components/ModalComponent";

import { mapActions, mapState } from 'vuex';
//import axios from 'axios';
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
          key: "ProductoNom",
          label: "Producto",
          sortable: true,
          tdClass: "numSolicitud",
          thStyle: {
            background: "#0061a0",

            color: "#fff",
            size: "11px",
            width: "15%",            
            padding: "0 0 0 4%"

          },
        },
        {
          key: "producto_tipo",          
          label: "Tipo de Producto ",
          sortable: true,
          tdClass: "fechSolicitud",
          thStyle: {
            background: "#0061a0",
            color: "#fff",
            size: "11px",
             width: "17%",
              padding: "0 0 0 4%"
          },
        },
        {
          key: "stock",
          label: "Stock",
          sortable: true,
          align: "center",
          tdClass: "tabalign",
          thStyle: {
            background: "#0061a0",
            color: "#fff",
            size: "11px",
            width: "16%",
             padding: "0 0 0 4%"

          },
        },
        {
          key: "precio",
          formatter: "currencyFormat",
          label: "Precio",
          sortable: true,
          align: "center",
          tdClass: "montoR",
          thStyle: {
            background: "#0061a0",
            color: "#fff",
            size: "11px",
            width: "17%",
             padding: "0 0 0 4%"
          },
        },
        {
          key: "estado",
          label: "ESTADO",
          sortable: true,
           tdClass: "estado",
          thStyle: {
            background: "#0061a0",
            color: "#fff",
            size: "11px",
             width: "15%",
             padding: "0 0 0 5%"
          },
        },
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

    ...mapActions(["ListProductos"]),

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
        this.itemProductos.length > this.totalRows &&
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

    DetailProducts(data) {
              this.$refs.componente.DetailProducts(data);

    },


  },
  
    mounted(){
        this.ListProductos();
    },
    computed: {
    ...mapState(["itemProductos"]),
    
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
  padding-right: 73px !important;
}

.montoR {
  text-align: right;
  padding-right: 56px !important;
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