import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champsConnexion: {
      email: '',
      password:''
    },
    infosConnectedProfile: {
      prenom: "",
      nom: "",
      username: "",
      email: "",
      bio: "",
      pictureURL: "",
      createdAt: ""
    },
    champsInscription: {
      prenom: '',
      nom: '',
      pseudo: '',
      email: '',
      pwd1:'',
      pwd2:''
    },
    champsPost: {
      title: '',
      content:''
    }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
  }
})
