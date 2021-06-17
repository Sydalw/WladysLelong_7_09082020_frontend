<template>
    <div>
        <layout>
            <template v-slot:viewContainer>
                <div class="mx-auto py-10 h-screen w-screen md:w-4/5 sm:w-11/12 sm:px-4">
                    <form action="">
                        <champForm :largeur="infosChampsProfile[0].largeur" :for_id="infosChampsProfile[0].for_id" :nom="infosChampsProfile[0].nom">
                            <template v-slot:input>
                                <input v-model="infosChampsProfile[0].value" :type="infosChampsProfile[0].type" :id="infosChampsProfile[0].for_id" class="w-full -ml-10 pl-2 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none dark:bg-gray-200 dark:focus:bg-gray-100 focus:border-blue-900" :placeholder="$store.state.infosConnectedProfile.username">
                            </template>
                        </champForm>
                        <champForm :largeur="infosChampsProfile[1].largeur" :for_id="infosChampsProfile[1].for_id" :nom="infosChampsProfile[1].nom">
                            <template v-slot:input>
                                <input v-model="infosChampsProfile[1].value" :type="infosChampsProfile[1].type" :id="infosChampsProfile[1].for_id" class="w-full -ml-10 pl-2 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none dark:bg-gray-200 dark:focus:bg-gray-100 focus:border-blue-900" :placeholder="$store.state.infosConnectedProfile.name">
                            </template>
                        </champForm>
                        <champForm :largeur="infosChampsProfile[2].largeur" :for_id="infosChampsProfile[2].for_id" :nom="infosChampsProfile[2].nom">
                            <template v-slot:input>
                                <input v-model="infosChampsProfile[2].value" :type="infosChampsProfile[2].type" :id="infosChampsProfile[2].for_id" class="w-full -ml-10 pl-2 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none dark:bg-gray-200 dark:focus:bg-gray-100 focus:border-blue-900" :placeholder="$store.state.infosConnectedProfile.surname">
                            </template>
                        </champForm>
                        <champForm :largeur="infosChampsProfile[3].largeur" :for_id="infosChampsProfile[3].for_id" :nom="infosChampsProfile[3].nom">
                            <template v-slot:input>
                                <input v-model="infosChampsProfile[3].value" :type="infosChampsProfile[3].type" :id="infosChampsProfile[3].for_id" class="w-full -ml-10 pl-2 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none dark:bg-gray-200 dark:focus:bg-gray-100 focus:border-blue-900" :placeholder="$store.state.infosConnectedProfile.email">
                            </template>
                        </champForm>
                        <champForm :largeur="infosChampsProfile[4].largeur" :for_id="infosChampsProfile[4].for_id" :nom="infosChampsProfile[4].nom">
                            <template v-slot:input>
                                <textarea v-model="infosChampsProfile[4].value" :type="infosChampsProfile[4].type" :id="infosChampsProfile[4].for_id" class="h-60 w-full -ml-10 pl-2 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none dark:bg-gray-200 dark:focus:bg-gray-100 focus:border-blue-900" rows="3" :placeholder="$store.state.infosConnectedProfile.bio" spellcheck="false" style="position: relative;"></textarea>
                            </template>
                        </champForm>
                        <label class="block my-4">
                            <span class="text-xs font-semibold dark:text-white px-1">Image</span>
                            <input type="file" class="text-xs dark:text-white font-semibold mt-1 block w-full">
                        </label>
                    </form>
                    <div>
                        <div class="flex -mx-3 mt-7">
                            <div class="w-full inline-flex px-3 mb-5">
                                <button v-on:click="confirmProfile()" class="block w-full max-w-xs mx-auto bg-blue-900 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Mettre à Jour</button>
                                <button v-on:click="deleteProfile()" class="block w-full max-w-xs mx-auto bg-red-900 hover:bg-red-700 focus:bg-red-700 text-white rounded-lg px-3 py-3 font-semibold">Supprimer profil</button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </layout>
    </div>
</template>

<script>
import layout from '@/components/layout/layout.vue'
import champForm from '@/components/champ-form.vue'
import axios from 'axios'
//import store from '../store/index'

export default {
    name: 'EditProfile',
    components: {
        layout,
        champForm
    },
    data() {
        return {
            infosChampsProfile: [
            {
                nom: "Pseudo",
                for_id: "username",
                type: "text",
                largeur: "w-full",
                value: ""
            },
            {
                nom: "Nom",
                for_id: "nom",
                type: "textarea",
                largeur: "w-full",
                value: ""
            },
            {
                nom: "Prénom",
                for_id: "prenom",
                type: "textarea",
                largeur: "w-full",
                value: ""
            },
            {
                nom: "Email",
                for_id: "email",
                type: "email",
                largeur: "w-full",
                value: ""
            },
            {
                nom: "Bio",
                for_id: "bio",
                type: "textarea",
                largeur: "w-full"
            },
            {
                nom: "Photo de Profil",
                for_id: "pictureURL",
                type: "textarea",
                largeur: "w-full",
                value: ""
            },
            ]
        }
    },
    methods: { 
        confirmProfile: function() {
            const token = localStorage.getItem('token');
            const id = localStorage.getItem('id');

            axios({
                method: 'put',
                url: 'http://localhost:3000/api/user/'+id,
                data: {
                    id: localStorage.getItem('id'), 
                    username: this.infosChampsProfile[0].value, 
                    name: this.infosChampsProfile[1].value,
                    surname: this.infosChampsProfile[2].value,  
                    email: this.infosChampsProfile[3].value,
                    bio: this.infosChampsProfile[4].value,
                    pictureURL: this.infosChampsProfile[5].value
                },
                headers: {
                    'Authorization': `Basic ${token}` 
                }
            })
            .then(reponse => {
                console.log(reponse);
                this.$router.push('Profile/'+id);     
            })
            .catch(error => {
                console.log(error);
            })
        },
        deleteProfile: function() {
            alert("Êtes-vous sûr de vouloir supprimer ce profil ?");
        }
    }
}
</script>