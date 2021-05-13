<template>
    <form>
        <champForm :largeur="infosChamps[0].largeur" :for_id="infosChamps[0].for_id" :nom="infosChamps[0].nom" :type="infosChamps[0].type" :placeholder="infosChamps[0].placeholder">
          <template v-slot:input>
            <input v-model="$store.state.champsConnexion.email" :type="infosChamps[0].type" :id="infosChamps[0].for_id" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-900" :placeholder="infosChamps[0].placeholder">
          </template>
        </champForm>
        <champForm :largeur="infosChamps[1].largeur" :for_id="infosChamps[1].for_id" :nom="infosChamps[1].nom" :type="infosChamps[1].type" :placeholder="infosChamps[1].placeholder">
          <template v-slot:input>
            <input v-model="$store.state.champsConnexion.password" :type="infosChamps[1].type" :id="infosChamps[1].for_id" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-900" :placeholder="infosChamps[1].placeholder">
          </template>
        </champForm>
    </form>
</template>

<script>

import champForm from './champ-form.vue'

export default {
  name: 'loginForm',
  components: {
    champForm
  },
  data() {
    return {
        infosChamps: [
        {
            nom: "Email",
            for_id: "email",
            type: "email",
            placeholder: "jean.dupont@mail.com",
            largeur: "w-full"
        },
        {
            nom: "Mot de passe",
            for_id: "password",
            type: "password",
            placeholder: "••••••••••••",
            largeur: "w-full"
        }
        ]
    }
  },
  methods: {
    
  }
}
</script>