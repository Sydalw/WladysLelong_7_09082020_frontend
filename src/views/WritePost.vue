<template>
    <div>
        <layout>
            <template v-slot:viewContainer>
                <form action="">
                    <champForm :largeur="infosChampsPost[0].largeur" :for_id="infosChampsPost[0].for_id" :nom="infosChampsPost[0].nom">
                        <template v-slot:input>
                            <input v-model="$store.state.champsPost.title" :type="infosChampsPost[0].type" :id="infosChampsPost[0].for_id" class="w-full -ml-10 pl-2 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-900" :placeholder="infosChampsPost[0].placeholder">
                        </template>
                    </champForm>
                    <champForm :largeur="infosChampsPost[1].largeur" :for_id="infosChampsPost[1].for_id" :nom="infosChampsPost[1].nom">
                        <template v-slot:input>
                            <textarea v-model="$store.state.champsPost.content" :type="infosChampsPost[1].type" :id="infosChampsPost[1].for_id" class="h-60 w-full -ml-10 pl-2 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-900" rows="3" :placeholder="infosChampsPost[1].placeholder" spellcheck="false" style="position: relative;"></textarea>
                        </template>
                    </champForm>
                    <label class="block">
                        <span class="text-xs font-semibold px-1">Image</span>
                        <input type="file" class="text-xs font-semibold mt-1 block w-full">
                    </label>
                </form>
                <div>
                    <div class="flex -mx-3 mt-7">
                        <div class="w-full px-3 mb-5">
                            <button v-on:click="confirmPost()" class="block w-full max-w-xs mx-auto bg-blue-900 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">POSTER</button>
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
                largeur: "w-full"
            },
            {
                nom: "Contenu",
                for_id: "contenu",
                type: "textarea",
                placeholder: "Le contenu de mon post...",
                largeur: "w-full"
            }
            ]
        }
    },
    methods: { 
        confirmPost: function() {
            const token = localStorage.getItem('token');
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/post',
                data: {
                    id: localStorage.getItem('id'), 
                    title: store.state.champsPost.title, 
                    content: store.state.champsPost.content
                },
                headers: {
                    'Authorization': `Basic ${token}` 
                }
            })
            .then(reponse => {
                console.log(reponse);
                this.$router.push('Profile');       
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    beforeCreation() {
        store.state.champsPost.title="";
        store.state.champsPost.content=""
    }
}
</script>