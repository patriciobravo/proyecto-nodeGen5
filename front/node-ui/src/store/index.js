import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    perfil: '',
    showHome: '',
    itemSolicitudes: [],
    itemProductos: []
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },

    setPerfil(state, payload) {
      state.perfil = payload
    },

    setProductos(state, payload) {
      state.itemProductos = payload
      console.log(state.itemProductos)
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
        localStorage.setItem('token', resDB)
        //console.log(resDB)
        //console.log(response.data.data.perfil)
        //this.$router.push({name:'about'})

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
        const resProd = response.data.items;
       // commit('setToken', resDB)
        commit('setProductos', resProd)
        //localStorage.setItem('token', resDB)
        console.log(resProd)
        //console.log(resDB)
        //console.log(response.data.data.perfil)
        //this.$router.push({name:'about'})
        return resProd

      });
      } catch (error) {
        console.log('error: ', error)
      }
    },


   
  },
  modules: {
  }
})
