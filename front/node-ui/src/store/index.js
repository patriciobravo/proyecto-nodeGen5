import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    perfil: '',
    showHome:''
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },

    setPerfil(state, payload) {
      state.perfil = payload
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

   
  },
  modules: {
  }
})
