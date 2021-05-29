<template>
 <div class="login-form">
     <div class="login-panel bg-white text-left">
      <div class="alert alert-primary" role="alert" :style="{opacity: isAlertShow ? 1 : 0}">
                        Login successfully. <small>waiting for redirect.</small>
                        <loader-component width="30"></loader-component>
                    </div>
    <form @submit.prevent="login(usuario)">
        <h3 class="text-center">Inicio de Sesión</h3>   
        <div class="form-group">
          <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input 
                  type="email" 
                  class="form-control"
                  required="required"
                  placeholder="Ingresa tu Email"
                  v-model="usuario.email">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input 
                  type="password" 
                  class="form-control" 
                  required="required"
                  placeholder="Ingresa tu Contraseña"
                  v-model="usuario.password">
            </div>
        </div>        
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block loginLocales">Ingresar</button>
                                      <button class="btn btn-primary w-25" id="login" @click.prevent="login" v-if="!isLoggingIn">Login</button>
                            <button class="btn btn-primary w-25" disabled @click.prevent="login" v-if="isLoggingIn"><loader-component width="30"></loader-component></button>
        </div>
        <div class="clearfix">
            <!--<label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>-->
              <p class="text-center"><a href="#" class="text-center">Olvidaste tu contraseña?</a></p>
        </div>
        <div class="or-seperator"><i>o</i></div>
        <p class="text-center">Deseas <a href="#" class="regisWinplace">Registrarte</a> </p>        
    </form>

     </div>

</div>
</template>

<script>
import LoaderComponent from '../components/LoadingComponent'

import { mapActions } from 'vuex';


export default {
  name: 'Home',
  components: {
    LoaderComponent
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
