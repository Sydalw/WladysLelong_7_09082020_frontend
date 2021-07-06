<template>
    <div v-if="reveleOverlay" v-on:keyup.enter="confirmComment()" class="fixed flex justify-center items-center w-100 h-100 z-20 top-0 left-0 right-0 bottom-0">
        <div class="fixed sm:ml-22 md:ml-64 top-0 left-0 right-0 bottom-0 w-100 h-100 opacity-90 bg-gray-800"></div>
        <div class="w-full relative sm:ml-24 md:ml-64 bg-gray-800 opacity-100 max-w-4xl">
            <button v-on:click="closeOverlay()" class="absolute border dark:border-gray-800 border-white bg-red-700 hover:bg-red-500 px-1 rounded top-2 right-5 text-white">X</button>
            <div class="border px-5 border-gray-200 rounded-xl bg-white dark:bg-gray-700">
                <div class="pt-5">
                    <champForm :largeur="largeur" :for_id="for_id" :nom="nom"/>
                    <textarea v-model="value" v-validate="'required'" :class="{'input': true, 'border-red-500': errors.has(for_id) }" :name="for_id" :type="type" :id="for_id" class="w-full pl-2 pr-2 py-2 rounded-lg border-2 border-gray-200 outline-none dark:bg-gray-200 dark:focus:bg-gray-100 focus:border-blue-900" spellcheck="false" rows="3" :placeholder="placeholder"></textarea>
                    <div>
                        <span class="text-red-500" v-if="errors.has(for_id)">{{ errors.first(for_id) }}</span>
                    </div>
                    <div class="flex -mx-3 mt-5">
                        <div class="w-full px-3 my-5">
                            <button v-on:click="confirmComment()" class="block w-full max-w-xs mx-auto bg-blue-900 hover:bg-indigo-700 focus:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">POSTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import champForm from '../champ-form.vue';
import axios from 'axios'

export default {
    components: {
        champForm
    },
    props: {
        topicId: Number,
        postId: Number,
        topicType: String,
        reveleOverlay: Boolean
    },
    data() {
        return {
            nom: "Contenu du commentaire :",
            for_id: "content",
            type: "text",
            largeur: "w-full",
            placeholder: "votre commentaire ici",
            value: ""
        }
    },
    methods: {
        
        /**
         * Envoi au composant parent l'ordre de fermer l'overlay 
         *
         * @return  {[Boolean]}  [return description]
         */
        closeOverlay: function() {
            this.$emit('emitCloseOverlay', false);
        },

        /**
         * Permet d'identifier à quoi est relié le commentaire sélectionné
         *
         * @return  {[Number]}  renvoi null si le commentaire est relié à un post, sinon le topicId du commentaire auquel il est relié
         */
        topicTypeIdentifier: function() {
            if(this.topicType === "post"){
                return null;
            } else {
                return this.topicId;
            }
        },

        /**
         * envoi une requete post vers le backend pour créer un commentaire
         *
         * @return  {[type]}  [return description]
         */
        confirmComment: function() {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('id');
            const idTokenKeyValue = userId+":"+token;
            console.log(this.topicId);
            this.$validator.validateAll().then(result => {
                if (result) {
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/api/post/'+this.postId+'/comment',
                        data: {
                            id: localStorage.getItem('id'), 
                            content: this.value,
                            relatedComment: this.topicTypeIdentifier()
                        },
                        headers: {
                            'Authorization': `Basic ${idTokenKeyValue}` 
                        }
                    })
                    .then(reponse => {
                        console.log(reponse);
                        this.closeOverlay();
                        window.location.reload();
                        //this.$router.push('Profile/'+localStorage.getitem('id'));       
                    })
                    .catch(error => {
                        console.log(error);
                    })
                } else {
                    alert("Les données n'ont pas été envoyées, vérifiez vos saisies.");
                }
            })
        },
    }
}

</script>