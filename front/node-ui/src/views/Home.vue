<template>
  <div id="app" >
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="cerrarSesion">cerra sesión</button>
    </div> -->
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/Home1"><strong>Node Js Gen 5</strong></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/Home1">Home</b-nav-item>
        <!-- <router-link to="/Home1">Home</router-link>  -->
         <!-- <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button> -->
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
<!-- 
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i></em>
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Cerrar Sesión</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right class="mt-2">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Usuario</em>
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Cerrar Sesión</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <router-view/>
  </div>
</template>

<script>

import { mapActions } from 'vuex';


export default {
  name: 'Home',
  components: {
  },

  data(){
    return {
      usuario: {
        email:'prueba1@gmail.com',
        password: 'Fbravo&27',
      },
       isAlertShow: false,
        isLoggingIn: false,
    }
  },

  methods: {
    ...mapActions(["login"]),

    login() {
            this.isLoggingIn = true
            setTimeout(() => {
                this.isLoggingIn = false
                this.isAlertShow = true
                setTimeout(() => this.redirect(), 1000)
            }, 1000)
        },
        redirect() {
            this.$router.push({name: 'home1'})
        }
  }

}
</script>

<style lang="scss">


</style>
