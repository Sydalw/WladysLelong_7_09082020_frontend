<template>
    <article v-if="toggleDelete" class="w-full max-w-4xl border border-gray-200 rounded-xl pl-3 pt-2 mt-5 bg-white dark:bg-gray-700 dark:hover:border-gray-400 hover:border-gray-300" :id="topicId">
        <topicHeader :userId="userId" :topicId="topicId" :username="username" :profilePictureURL="profilePictureURL" :createdAt="createdAt" :updatedAt="updatedAt" :roleName="roleName"></topicHeader>
        <div v-on:click="displayTopic()" class="cursor-pointer">
            <div class="pl-5 flex flex-col">
                <h2 v-if="!toggleEdit" class="sm:text-lg text-sm sm:font-medium mb-1 text-justify dark:text-gray-300">{{localTitle}}</h2>
                <input v-if="toggleEdit" v-model="localTitle" type="text" class="border rounded text-justify mr-3">
            </div>
            <div class="pl-5 flex flex-col">
                <p v-if="!toggleEdit" class="text-xs font-light mb-5 text-justify pr-3 dark:text-gray-300">{{localContent | breakLine}}</p>
                <textarea v-if="toggleEdit" v-model="localContent" type="textarea" class="border rounded font-light text-xs text-justify mr-3"></textarea>
            </div>
        </div>
        <topicFooter v-on:validateEdit="validateEditTopic()" v-on:emitToggleEdit="setToggleEdit($event)" v-on:emitToggleNewComment="changeToggleNewComment($event)" v-on:emitToggleDelete="setToggleDelete($event)" :userId="userId" :topicId="topicId" :likes="likes" :dislikes="dislikes" :comments="comments" :myLike="myLike" :myDislike="myDislike" :footerToggleEdit="false" topicType="post"></topicFooter>
        <commentoverlay v-on:emitCloseOverlay="closeOverlay($event)" :reveleOverlay="toggleNewComment" :postId="topicId" :topicId="topicId" topicType="post"/>
    </article>
</template>

<script>
import topicFooter from './topicsComponents/topicFooter.vue';
import topicHeader from './topicsComponents/topicHeader.vue';
import commentoverlay from '@/components/topics/commentOverlay.vue'
import axios from 'axios'

    export default {
        name: 'topic',
        data() {
            return {
                toggleEdit: false,
                toggleNewComment: false,
                localContent: this.content,
                localTitle: this.title,
                toggleDelete: true
            }
        },
        components: {
            topicHeader,
            topicFooter,
            commentoverlay
        },
        filters: {
            breakLine: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.replace('\n', '</br>')
            }
        },
        // computed: {
        //     breakLine() {
        //         return this.$options.filters.splitRows(this.localContent)
        //     }
        // },
        props: {
            userId: Number,
            username: String,
            topicId: Number,
            title: String,
            content: String,
            profilePictureURL: String,
            likes: Number,
            dislikes: Number,
            myLike: Number,
            myDislike: Number,
            comments: Number,
            createdAt: String,
            updatedAt: String,
            roleName: String
        },
        methods: {

            /**
             * Récupère l'ordre du footer pour passer en mode édition de post ou sortir du mode
             *
             * @param   {[Boolean]}  payload  [payload description]
             *
             * @return  {[Boolean]}           [return description]
             */
            setToggleEdit: function(payload) {
               this.toggleEdit = payload;
               console.log(this.toggleEdit);
            },

            /**
             * Récupère l'ordre du footer pour afficher la modale pour un nouveau commentaire
             *
             * @param   {[Boolean]}  toggleDisplay  [toggleDisplay description]
             *
             * @return  {[type]}                 [return description]
             */
            changeToggleNewComment: function(toggleDisplay) {
                console.log(toggleDisplay);
                this.toggleNewComment=toggleDisplay;
            },

            /**
             * permet de fermer l'overlay en cliquant sur la croix de sortie
             *
             * @param   {[Boolean]}  toggleHide  [toggleHide description]
             *
             * @return  {[type]}              [return description]
             */
            closeOverlay: function(toggleHide) {
                this.toggleNewComment = toggleHide;
            },

            /**
             * Permet de confirmer l'édition d'un commentaire en envoyer une requete put au backend
             *
             * @return  {[type]}  [return description]
             */
            validateEditTopic: function() {
                const token = localStorage.getItem('token');
                const id = localStorage.getItem('id');
                const idTokenKeyValue = id+":"+token;

                this.$validator.validateAll().then(result => {
                    if (result) {
                        axios({
                            method: 'put',
                            url: 'http://localhost:3000/api/post/'+this.topicId,
                            data: {
                                id: id, 
                                title: this.localTitle, 
                                content: this.localContent
                            },
                            headers: {
                                'Authorization': `Basic ${idTokenKeyValue}` 
                            }
                        })
                        .then(reponse => {
                            this.toggleEdit = false;
                            console.log(this.toggleEdit);
                            console.log(reponse);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                    } else {
                        alert("Les données n'ont pas été envoyées, vérifiez vos saisies.");
                    }
                })
            },

            /**
             * récupère l'ordre du footer 
             *
             * @param   {[Boolean]}  payload  [payload description]
             *
             * @return  {[Boolean]}           [return description]
             */
            setToggleDelete: function(payload) {
                console.log("td "+ payload);
                this.toggleDelete = payload;
            },

            /**
             * Permet d'afficher la vue ViewPost qui affiche un Post et ses commentaires si on n'est pas sur cette vue, sinon revient l'affichage du post et de ses commentaires directs
             *
             * @return  {[type]}  [return description]
             */
            displayTopic: function() {
                if(this.$route.name !== "ViewPost"){
                    this.$router.push({ name: 'ViewPost', params: {id: this.topicId}});
                } else {
                    this.$emit('emitResetTopic', false);
                }
            }
        },
        mounted() {
            console.log(this.topicId);
        }
    }
</script>