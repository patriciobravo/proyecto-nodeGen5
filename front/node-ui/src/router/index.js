import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue';
import Productos from '../views/Productos.vue';
import TipoProductos from '../views/TipoProductos.vue'
import Dashboard from '../views/Dashboard.vue'
import Usuarios from '../views/Usuarios.vue'
import Compras from '../views/Compras.vue'
import Ventas from '../views/Ventas.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/tipoProductos',
    name: 'TipoProductos',
    component: TipoProductos
  },

  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/compras',
    name: 'Compras',
    component: Compras
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: Ventas
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const rutaProtec = to.matched.some(item => item.meta.rutaProtegida);

    if(rutaProtec && store.state.token === null){
        // ruta protegida es true
        // token es nulo true, por ende redirigimos al inicio
        next('/')
    }else{
        // En caso contrario sigue...
        next()
    }

})

export default router
