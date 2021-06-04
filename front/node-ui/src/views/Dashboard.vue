<template>
  
  <div>
    <!-- <top-component ></top-component> -->

    <div class="row">
            <side-component></side-component>
        <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-1 offset-md-1" >

          <div class="main-content-container container-fluid px-4">
            <div class="page-header row no-gutters py-4 mb-3 border-bottom" v-if="this.perfil=== 'Admin'">
              <div class="col-12  ">
                <span class="text-uppercase page-subtitle">Dashboard</span>
                <h3 class="page-title">Proyecto & Node Js</h3>
              </div>
            </div>    
            <home-component width="30"></home-component>
          </div>
        </main>
      </div>
    </div>

</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import HomeComponent from '../components/Home'
import SideComponent from '../components/Sides.vue'
import TopComponent from '../components/Tops.vue'
import { mapState } from 'vuex'

export default {
    
    components: { HomeComponent, 
    SideComponent, 
    TopComponent 
    },


    computed:{
      ...mapState(["perfil"])
    }


}
</script>

<style>

</style>