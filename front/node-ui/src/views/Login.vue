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
            <!-- <button type="submit" class="btn btn-primary btn-block ">Ingresar</button> -->
            <button class="btn btn-primary btn-block" id="login" @click.prevent="AuthLogin" v-if="!isLoggingIn">Ingresar</button>
            <button class="btn btn-primary btn-block" disabled @click.prevent="AuthLogin" v-if="isLoggingIn"><loader-component width="30"></loader-component></button>
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

import { mapActions, mapState } from 'vuex';


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

    AuthLogin() {
            this.isLoggingIn = true
            this.login(this.usuario)
           

            setTimeout(() => {
                this.isLoggingIn = false
                this.isAlertShow = true                
                this.perfil === 'Admin' ? setTimeout(() => this.redirect('home1'), 1000) : setTimeout(() => this.redirect('about'), 1000) 
                //setTimeout(() => this.redirect(), 1000)
            }, 1000)
        },
        redirect(modulo) {
            this.$router.push({name: modulo})
        }
  },

  computed:{
    ...mapState(["perfil"])
  }

}
</script>

<style lang="scss">

.login-form {
    width: 340px;
    margin-left: 38%;
    //margin-top:10%
  }
    .login-form form {        
      margin-bottom: 15px;
    background: #f5f5f5;
    box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.3);
    padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
  .input-group-addon .fa {
        font-size: 18px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
      .or-seperator {
        margin-top: 20px;
        text-align: center;
        border-top: 1px solid #ccc;
    }
    .or-seperator i {
        padding: 0 10px;
        background: #f7f7f7;
        position: relative;
        top: -11px;
        z-index: 1;
    }
    .signup-form {
    width: 340px;
    margin: 0 auto;
    padding: 30px 0;
  }
    .signup-form form {
    /*color: #999;*/
    border-radius: 3px;
      margin-bottom: 15px;
        background: #f5f5f5;
        box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
  .signup-form h2 {
    color: #333;
    font-weight: bold;
        margin-top: 0;
    }
    .signup-form hr {
        margin: 0 -30px 20px;
    }
  .signup-form .form-group {
    margin-bottom: 20px;
  }
  .signup-form label {
    font-weight: normal;
    font-size: 19px;
  }
  .signup-form .form-control {
    min-height: 38px;
    box-shadow: none !important;
  } 
  .signup-form .input-group-addon {
    max-width: 42px;
    text-align: center;
  }
  .signup-form input[type="checkbox"] {
    margin-top: 2px;
  }   

  .signup-form .btn:hover, .signup-form .btn:focus {
    background: #179b81;
        outline: none;
  }
  .signup-form a {
    color: #337ab7;  
    text-decoration: underline;
  }
  .signup-form a:hover {
    text-decoration: none;
  }
  .signup-form form a {
    color: #337ab7;
    text-decoration: none;
  } 
  .signup-form form a:hover {
    text-decoration: underline;
  }
  .signup-form .fa {
    font-size: 21px;
  }
  .signup-form .fa-paper-plane {
    font-size: 18px;
  }
  .signup-form .fa-check {
    color: #fff;
    left: 17px;
    top: 18px;
    font-size: 7px;
    position: absolute;
  }


  .widget {
    margin: 0;
    height: unset;
}
.login-panel {
    position: relative;
   // padding: 52px 0;
    .alert {
        opacity: 0;
        position: absolute;
        width: 100%;
        top: 100px;
        transition: all .5s;
        &.alert-primary {
            background-color: #007BFF;
            color: #fff;
            font-size: 18px;
            border: none;
        }
        .widget {
            position: absolute;
            right: 5px;
            top: 0;
            margin: 10px;
        }
    }
}

input-group-addon, .input-group-btn {
    width: 16% !important;
  
}

</style>
