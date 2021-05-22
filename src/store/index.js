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
      id: "",
      name: "",
      surname: "",
      username: "",
      email: "",
      bio: "",
      pictureURL: "",
      createdAt: ""
    },
    champsInscription: {
      name: '',
      surname: '',
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
