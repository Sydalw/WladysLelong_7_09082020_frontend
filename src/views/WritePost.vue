<template>
    <div>
        <layout>
            <template v-slot:viewContainer>
                <div class="mx-auto py-10 h-screen w-screen md:w-4/5 sm:w-11/12 sm:px-4">
                    <form action="" class="flex flex-col">
                        <champForm :largeur="infosChampsPost[0].largeur" :for_id="infosChampsPost[0].for_id" :nom="infosChampsPost[0].nom">
                            <template v-slot:input>
                                <input v-model="$store.state.champsPost.title" v-validate="'required'" :class="{'input': true, 'border-red-500': errors.has(infosChampsPost[0].nom) }" :name="infosChampsPost[0].nom" :type="infosChampsPost[0].type" :id="infosChampsPost[0].for_id" class="w-full -ml-10 pl-2 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none dark:bg-gray-200 dark:focus:bg-gray-100 focus:border-blue-900" :placeholder="infosChampsPost[0].placeholder">
                                <div>
                                    <span class="text-red-500" v-if="errors.has(infosChampsPost[0].nom)">{{ errors.first(infosChampsPost[0].nom) }}</span>
                                </div>
                            </template>
                        </champForm>
                        <champForm :largeur="infosChampsPost[1].largeur" :for_id="infosChampsPost[1].for_id" :nom="infosChampsPost[1].nom">
                            <template v-slot:input>
                                <textarea v-model="$store.state.champsPost.content" v-validate="'required'" :class="{'input': true, 'border-red-500': errors.has(infosChampsPost[1].nom) }" :type="infosChampsPost[1].type" :id="infosChampsPost[1].for_id" :name="infosChampsPost[1].nom" class="h-60 w-full -ml-10 pl-2 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none dark:bg-gray-200 dark:focus:bg-gray-100 focus:border-blue-900" :placeholder="infosChampsPost[1].placeholder" spellcheck="false" style="position: relative;"> </textarea>
                                <div>
                                    <span class="text-red-500" v-if="errors.has(infosChampsPost[1].nom)">{{ errors.first(infosChampsPost[1].nom) }}</span>
                                </div>
                            </template>
                        </champForm>
                        <label class="flex flex-col">
                            <span class="text-xs font-semibold dark:text-white px-1">Image</span>
                            <input type="file" class="text-xs dark:text-white font-semibold mt-1">
                        </label>
                    </form>
                    <div>
                        <div class="flex -mx-3 mt-7">
                            <div class="w-full px-3 mb-5">
                                <button v-on:click="confirmPost()" class="block w-full max-w-xs mx-auto bg-blue-900 hover:bg-indigo-700 focus:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">POSTER</button>
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
import store from '../store/index'

export default {
    name: 'WritePost',
    components: {
        layout,
        champForm
    },
    data() {
        return {
            infosChampsPost: [
            {
                nom: "Titre",
                for_id: "titre",
                type: "text",
                placeholder: "Titre",
                validation: {required: true, text: true},
                largeur: "w-full"
            },
            {
                nom: "Contenu",
                for_id: "contenu",
                type: "text",
                placeholder: "Le contenu de mon post...",
                validation: {required: true, text: true},
                largeur: "w-full"
            }
            ]
        }
    },
    methods: { 
        confirmPost: function() {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('id');
            const idTokenKeyValue = userId+":"+token;

            this.$validator.validateAll().then(result => {
                if (result) {
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/api/post',
                        data: {
                            id: localStorage.getItem('id'), 
                            title: store.state.champsPost.title, 
                            content: store.state.champsPost.content
                        },
                        headers: {
                            'Authorization': `Basic ${idTokenKeyValue}` 
                        }
                    })
                    .then(reponse => {
                        console.log(reponse);
                        this.$router.push('Home');       
                    })
                    .catch(error => {
                        console.log(error);
                    })
                } else {
                    alert("Les données n'ont pas été envoyées, vérifiez vos saisies.");
                }
            })
        },
        // validateAll() {
        //     this.$validator.validateAll().then(result => {
        //         if (result) {
        //             alert("Form Submitted!");
        //         return;
        //         }
        //     })
        // }
    },
    beforeCreation() {
        store.state.champsPost.title="";
        store.state.champsPost.content=""
    }
}
</script>