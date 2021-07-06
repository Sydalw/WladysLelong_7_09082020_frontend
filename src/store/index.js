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
      createdAt: "",
      roleId: "",
      roleName: "",
      updatePost: "",
      deletePost: "",
      updateComment: "",
      deleteComment: "",
      updateProfile: "",
      deleteProfile: ""
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
    infosTopic: [],
    infosComment: [],
    displayValidate: false,
    theme: {}
    },
    mutations: {
      SET_THEME(state, theme) {
        state.theme = theme;
        localStorage.theme = theme;
      }
    },
    actions: {

      /**
       * Permet de récupérer la connexion le theme de préférence de l'utilisateur ou bien celui qu'il a paramétré à sa dernière visite
       *
       * @param   {[type]}  commit  [commit description]
       *
       * @return  {[type]}          [return description]
       */
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

      /**
       * Permet de switcher d'un theme à l'autre
       *
       * @param   {[type]}  commit  [commit description]
       *
       * @return  {[type]}          [return description]
       */
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
