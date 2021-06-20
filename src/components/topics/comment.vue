<template>
    <article class="w-full max-w-4xl border border-gray-200 rounded-xl pl-3 pt-2 mt-5 bg-white dark:bg-gray-700" :id="id">
        <topicHeader :id="id" :topicId="commentId" :username="username" :profilePictureURL="profilePictureURL" :createdAt="createdAt" :updatedAt="updatedAt"></topicHeader>
        <div class="">
            <div class="pl-5 pl-5 flex flex-col">
                <p v-if="!toggleEdit" class="text-xs font-light mb-5 text-justify pr-3 dark:text-gray-300">{{localContent}}</p>
                <textarea v-if="toggleEdit" v-model="localContent" type="textarea" class="border rounded font-light text-xs text-justify mr-3"></textarea>
            </div>
        </div>
        <topicFooter v-if="deletionFlag === 0" v-on:validateEdit="validateEditTopic()" v-on:emitToggleEdit="setToggleEdit($event)" v-on:emitToggleNewComment="changeToggleNewComment($event)" :id="id" :topicId="commentId" :likes="likes" :dislikes="dislikes" :comments="comments" :myLike="myLike" :myDislike="myDislike" :footerToggleEdit="false" topicType="comment"></topicFooter>
        <commentoverlay v-on:emitCloseOverlay="closeOverlay($event)" :reveleOverlay="toggleNewComment" :topicId="commentId" topicType="post"/>
    </article>
</template>

<script>
import topicFooter from './topicsComponents/topicFooter.vue';
import topicHeader from './topicsComponents/topicHeader.vue';
import commentoverlay from '@/components/topics/commentOverlay.vue'
import axios from 'axios'

    export default {
        name: 'comment',
        components: {
            topicHeader,
            topicFooter,
            commentoverlay
        },
        props: {
            id: Number,
            postId: Number,
            username: String,
            profilePictureURL : String,
            content: String,
            commentId: Number,
            likes: Number,
            dislikes: Number,
            myLike: Number,
            myDislike: Number,
            comments: Number,
            relatedComment: Number,
            deletionFlag: Number,
            createdAt: String,
            updatedAt: String
        },
        data() {
            return {
                toggleEdit: false,
                toggleNewComment: false,
                localContent: this.content,
                localTitle: this.title,
                toggleDelete: true
            }
        },
        methods: {
            setToggleEdit: function(payload) {
               this.toggleEdit = payload;
               console.log(this.toggleEdit);
            },
            changeToggleNewComment: function(toggleDisplay) {
                console.log(toggleDisplay);
                this.toggleNewComment=toggleDisplay;
            },
            closeOverlay: function(toggleHide) {
                this.toggleNewComment = toggleHide;
            },
            validateEditTopic: function() {
                const token = localStorage.getItem('token');
                this.$validator.validateAll().then(result => {
                    if (result) {
                        axios({
                            method: 'put',
                            url: 'http://localhost:3000/api/comment/'+this.commentId,
                            data: {
                                id: localStorage.getItem('id'), 
                                content: this.localContent
                            },
                            headers: {
                                'Authorization': `Basic ${token}` 
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
            setToggleDelete: function(payload) {
                console.log("td "+ payload);
                this.toggleDelete = payload;
            }
        }
    }
</script>