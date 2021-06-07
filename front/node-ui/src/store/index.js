import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    perfil: '',
    user: null,
    users:null,
    showHome: '',
    itemSolicitudes: [],
    itemProductos: [],
    itemTipoProductos: [],
    itemUsuarios:[],
    itemCarrito:[],
    env_loaded: 0,
    tienda: true
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },

    setUser(state, payload) {
      state.user = payload
    },

    setUsers(state, payload) {
      state.users = payload
    },
    setPerfil(state, payload) {
      state.perfil = payload
      console.log(state.perfil)
    },

    setProductos(state, payload) {
      state.itemProductos = payload
    },

    setTipoProductos(state, payload) {
      state.itemTipoProductos = payload
    },

    setEnv_loaded(state, payload) {
      state.env_loaded = payload;
    },

    setUsuarios(state, payload) {
      state.itemUsuarios = payload;
      //console.log(state.itemUsuarios)
    },

    setCarrito(state, payload){

      state.itemCarrito = payload;
      //console.log(state.itemCarrito);
    },
    setTienda(state, payload) {
      state.tienda = payload
    }

  },
  actions: {
    
    async login({ commit }, usuario) {
      try {
     
       await axios({
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        url: "http://localhost:3001/api/login",
        data: usuario
       }).then((response) => {
        const resDB = response.data.data.token
        commit('setToken', resDB),
          commit('setPerfil', response.data.data.perfil),
          
          commit('setUser', response.data.data.name),
          commit('setUsers', response.data.data.payload)
         localStorage.setItem('token', resDB)
         localStorage.setItem('perfil', response.data.data.perfil)
         localStorage.setItem('user', response.data.data.name)
         localStorage.setItem('idUser', response.data.data.payload.usuarioId)
      

      });
      } catch (error) {
        console.log('error: ', error)
      }
    },

    obtenerToken({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
        commit('setPerfil', localStorage.getItem('perfil'))
      }
      else {
        commit('setToken', null)
      }
    },
    cerrarSesion({ commit }) {
      localStorage.removeItem('token')
      commit('setToken', null)
    },

    ListProductos({ commit}) {
      try {
     
        axios.get("http://localhost:3001/api/producto").then((response) => {
        const resProd =  response.data.items;
        commit('setProductos', resProd)   
        return resProd

      });
      } catch (error) {
        console.log('error: ', error)
      }
    },

    ListTipoProductos({ commit}) {
      try {
     
      axios.get("http://localhost:3001/api/tipo_producto").then((response) => {
        const resTipoProd = response.data.items;
        commit('setTipoProductos', resTipoProd)

      });
      } catch (error) {
        console.log('error: ', error)
      }
    },

    async ListUsuarios({ commit }, token) {
      
      try {
       await axios({
          method: "GET",
          headers: {
            "Content-type": "application/json",
            'auth-token': token
          },
          url: "http://localhost:3001/api/usuarios",
        
        }).then((response) => {
          const resUsuarios = response.data.items;
          commit('setUsuarios', resUsuarios)
  
        })
      } catch (error) {
        
      }
    
    
    },

    ListCarrito ( {commit },idUsuario){

      try {
     
         axios.get(`http://localhost:3001/api/carro/${idUsuario}`).then((response) => {
           const resCarrito = response.data.items;
           
          
       commit('setCarrito', resCarrito)   
        //return resProd

      });
      } catch (error) {
        console.log('error: ', error)
      }


    }




   
  },
  modules: {
  }
})
