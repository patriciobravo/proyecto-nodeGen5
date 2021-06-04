import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    perfil: '',
    user: null,
    showHome: '',
    itemSolicitudes: [],
    itemProductos: [],
    itemTipoProductos: [],
    itemUsuarios:[],
    env_loaded: 0,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },

    setUser(state, payload) {
      state.user = payload
    },
    setPerfil(state, payload) {
      state.perfil = payload
    },

    setProductos(state, payload) {
      state.itemProductos = payload
    },

    setTipoProductos(state, payload) {
      state.itemTipoProductos = payload
    },

    env_loaded(state, payload) {
      state.env_loaded = payload;
    },

    setUsuarios(state, payload) {
      state.itemUsuarios = payload;
      console.log(state.itemUsuarios)
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
        commit('setToken', resDB)
        commit('setPerfil', response.data.data.perfil)
        commit('setUser', response.data.data.name)
        localStorage.setItem('token', resDB)
      

      });
      } catch (error) {
        console.log('error: ', error)
      }
    },

    obtenerToken({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
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


   
  },
  modules: {
  }
})
