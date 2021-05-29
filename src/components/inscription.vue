<template>
    <form>
        <div class="flex justify-between">
            <champForm :largeur="infosChamps[0].largeur" :for_id="infosChamps[0].for_id" :nom="infosChamps[0].nom" :type="infosChamps[0].type" :placeholder="infosChamps[0].placeholder">
                <template v-slot:input>
                    <input v-model="$store.state.champsInscription.name" v-validate="'required|alpha'" :class="{'input': true, 'border-red-500': errors.has(infosChamps[0].nom) }" :name="infosChamps[0].nom" :type="infosChamps[0].type" :id="infosChamps[0].for_id" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-900" :placeholder="infosChamps[0].placeholder">
                    <div>
                        <span class="text-red-500" v-if="errors.has(infosChamps[0].nom)">{{ errors.first(infosChamps[0].nom) }}</span>
                    </div>
                </template>
            </champForm>
            <champForm :largeur="infosChamps[1].largeur" :for_id="infosChamps[1].for_id" :nom="infosChamps[1].nom" :type="infosChamps[1].type" :placeholder="infosChamps[1].placeholder">
                <template v-slot:input>
                    <input v-model="$store.state.champsInscription.surname" v-validate="'required|alpha'" :class="{'input': true, 'border-red-500': errors.has(infosChamps[1].nom) }" :name="infosChamps[1].nom" :type="infosChamps[1].type" :id="infosChamps[1].for_id" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-900" :placeholder="infosChamps[1].placeholder">
                    <div>
                        <span class="text-red-500" v-if="errors.has(infosChamps[1].nom)">{{ errors.first(infosChamps[1].nom) }}</span>
                    </div>
                </template>
            </champForm>
        </div>
        <champForm :largeur="infosChamps[2].largeur" :for_id="infosChamps[2].for_id" :nom="infosChamps[2].nom" :type="infosChamps[2].type" :placeholder="infosChamps[2].placeholder">
            <template v-slot:input>
                <input v-model="$store.state.champsInscription.pseudo" v-validate="'required|alpha'" :class="{'input': true, 'border-red-500': errors.has(infosChamps[2].nom) }" :name="infosChamps[2].nom" :type="infosChamps[2].type" :id="infosChamps[2].for_id" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-900" :placeholder="infosChamps[2].placeholder">
                <div>
                    <span class="text-red-500" v-if="errors.has(infosChamps[2].nom)">{{ errors.first(infosChamps[2].nom) }}</span>
                </div>
          </template>
        </champForm>
        <champForm :largeur="infosChamps[3].largeur" :for_id="infosChamps[3].for_id" :nom="infosChamps[3].nom" :type="infosChamps[3].type" :placeholder="infosChamps[3].placeholder">
            <template v-slot:input>
                <input v-model="$store.state.champsInscription.email" v-validate="'required|email'" :class="{'input': true, 'border-red-500': errors.has(infosChamps[3].nom) }" :name="infosChamps[3].nom" :type="infosChamps[3].type" :id="infosChamps[3].for_id" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-900" :placeholder="infosChamps[3].placeholder">
                <div>
                    <span class="text-red-500" v-if="errors.has(infosChamps[3].nom)">{{ errors.first(infosChamps[3].nom) }}</span>
                </div>
            </template>
        </champForm>
        <champForm :largeur="infosChamps[4].largeur" :for_id="infosChamps[4].for_id" :nom="infosChamps[4].nom" :type="infosChamps[4].type" :placeholder="infosChamps[4].placeholder">
            <template v-slot:input>
                <input v-model="$store.state.champsInscription.pwd1" v-validate="'required|password'" :class="{'input': true, 'border-red-500': errors.has(infosChamps[4].nom) }" :name="infosChamps[4].nom" :type="infosChamps[4].type" :id="infosChamps[4].for_id" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-900" :placeholder="infosChamps[4].placeholder">
                <div>
                    <span class="text-red-500" v-if="errors.has(infosChamps[4].nom)">{{ errors.first(infosChamps[4].nom) }}</span>
                </div>
            </template>
        </champForm>
        <champForm :largeur="infosChamps[5].largeur" :for_id="infosChamps[5].for_id" :nom="infosChamps[5].nom" :type="infosChamps[5].type" :placeholder="infosChamps[5].placeholder"> 
            <template v-slot:input>
                <input v-model="$store.state.champsInscription.pwd2" v-validate="'required|password'" :class="{'input': true, 'border-red-500': errors.has(infosChamps[5].nom) }" :name="infosChamps[5].nom" :type="infosChamps[5].type" :id="infosChamps[5].for_id" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-900" :placeholder="infosChamps[5].placeholder">
                <div>
                    <span class="text-red-500" v-if="errors.has(infosChamps[5].nom)">{{ errors.first(infosChamps[5].nom) }}</span>
                </div>
            </template>
        </champForm>
    </form>
</template>

<script>

    import champForm from './champ-form.vue'

    export default {
    name: 'signupForm',
    components: {
        champForm
    },
    data() {
        return {
            infosChamps: [
            {
                nom: "Prénom",
                for_id: "prenom",
                type: "text",
                placeholder: "Jean",
                largeur: "w-full"
            },
            {
                nom: "Nom",
                for_id: "nom",
                type: "text",
                placeholder: "Dupont",
                largeur: "w-full"
            },
            {
                nom: "Pseudo",
                for_id: "pseudo",
                type: "text",
                placeholder: "jeandupontdu76",
                largeur: "w-full"
            },
            {
                nom: "Email",
                for_id: "email",
                type: "email",
                placeholder: "jean.dupont@mail.com",
                largeur: "w-full"
            },
            {
                nom: "Mot de passe",
                for_id: "mdp1",
                type: "password",
                placeholder: "••••••••••••",
                largeur: "w-full"
            },
            {
                nom: "Confirmez le mot de passe",
                for_id: "mdp2",
                type: "password",
                placeholder: "••••••••••••",
                largeur: "w-full"
            }
            ]
        }
    },
    }
</script>