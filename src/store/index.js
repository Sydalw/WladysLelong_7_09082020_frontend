import Vue from 'vue'
import Vuex from 'vuex'
//import theme from './modules/theme'

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
    },
    theme: {}
    },
    mutations: {
      SET_THEME(state, theme) {
        state.theme = theme;
        localStorage.theme = theme;
      }
    },
    actions: {
      initTheme({commit}) {
        const cachedTheme = localStorage.theme ? localStorage.theme : false;
            //  `true` if the user has set theme to `dark` on browser/OS
            const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (cachedTheme)
                commit('SET_THEME', cachedTheme)
            else if (userPrefersDark)
                commit('SET_THEME', 'dark')
            else
                commit('SET_THEME', 'light')
      },
      toggleTheme({ commit }) {

        switch (localStorage.theme) {
          case 'light':
              commit('SET_THEME', 'dark')
              break;

          default:
              commit('SET_THEME', 'light')
              break;
        }
      }
    },
    getters: {
      getTheme: (state) => {
          return state.theme;
      }
    },
    modules: {
  }
})
