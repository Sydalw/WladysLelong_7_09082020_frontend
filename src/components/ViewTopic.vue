<template>
    <div :key="componentKey" class="min-w-screen flex flex-col items-center justify-center px-5 py-5">
        <topic v-on:emitResetTopic="resetTopic($event)" v-if="topicType === 'post'"
            :id="infosTopic[0].userId" 
            :username="infosTopic[0].username" 
            :title="infosTopic[0].title" 
            :content="infosTopic[0].content" 
            :createdAt="infosTopic[0].createdAt" 
            :likes="Number(infosTopic[0].Likes)" 
            :dislikes="Number(infosTopic[0].Dislikes)" 
            :comments="infosTopic[0].CommentsNb" 
            :profilePictureURL="infosTopic[0].profilePictureURL"
            :myLike="infosTopic[0].myLike"
            :myDislike="infosTopic[0].myDislike" 
            :topicId="infosTopic[0].id">
        </topic>
        <div v-if="allZeroComments" class="min-w-full flex flex-col items-center justify-center pl-5">
            <comment v-on:emitDisplayRelatedComments="displayRelatedComments($event, infoComment)" class="" v-for="(infoComment, index) in infosComment" 
                :key="index"
                title="" 
                :id="infoComment.id"
                :postId="infoComment.postId" 
                :username="infoComment.username" 
                :profilePictureURL="infoComment.profilePictureURL" 
                :content="infoComment.content"
                :commentId="infoComment.commentId" 
                :createdAt="infoComment.createdAt" 
                :likes="Number(infoComment.Likes)" 
                :dislikes="Number(infoComment.Dislikes)"
                :myLike="infoComment.myLike"
                :myDislike="infoComment.myDislike" 
                :comments="infoComment.CommentsNb"
                :relatedComment="infoComment.relatedComment"
                :deletionFlag="infoComment.deletionFlag"
                :updatedAt="infoComment.updatedAt">
            </comment>
        </div>
        <div :key="componentKey" v-if="!allZeroComments" class="min-w-full flex flex-col items-center justify-center pl-5">
            <comment v-on:emitDisplayRelatedComments="displayRelatedComments($event, commentThread)" class="" v-for="commentThread in commentsThread" 
                :key="commentThread.commentId"
                title="" 
                :id="commentThread.id"
                :postId="commentThread.postId" 
                :username="commentThread.username" 
                :profilePictureURL="commentThread.profilePictureURL" 
                :content="commentThread.content"
                :commentId="commentThread.commentId" 
                :createdAt="commentThread.createdAt" 
                :likes="Number(commentThread.Likes)" 
                :dislikes="Number(commentThread.Dislikes)"
                :myLike="commentThread.myLike"
                :myDislike="commentThread.myDislike" 
                :comments="commentThread.CommentsNb"
                :relatedComment="commentThread.relatedComment"
                :deletionFlag="commentThread.deletionFlag"
                :updatedAt="commentThread.updatedAt"
                :displayBorder="true">
            </comment>
        </div>
        <div :key="componentKey" v-if="toggleDisplayRelatedComments" class="min-w-full flex flex-col items-center justify-center py-5 pl-10">
            <comment v-on:emitDisplayRelatedComments="displayRelatedComments($event, infoRelatedComment)" class="" v-for="infoRelatedComment in infosRelatedComment" 
                :key="infoRelatedComment.commentId"
                :id="infoRelatedComment.id"
                :postId="infoRelatedComment.postId" 
                :username="infoRelatedComment.username" 
                :profilePictureURL="infoRelatedComment.profilePictureURL" 
                :content="infoRelatedComment.content"
                :commentId="infoRelatedComment.commentId" 
                :createdAt="infoRelatedComment.createdAt" 
                :likes="Number(infoRelatedComment.Likes)" 
                :dislikes="Number(infoRelatedComment.Dislikes)"
                :myLike="infoRelatedComment.myLike"
                :myDislike="infoRelatedComment.myDislike" 
                :comments="infoRelatedComment.CommentsNb"
                :relatedComment="infoRelatedComment.relatedComment"
                :deletionFlag="infoRelatedComment.deletionFlag"
                :updatedAt="infoRelatedComment.updatedAt">
            </comment>
        </div>
    </div>
</template>

<script>
//&& this.commentsThread.length !== selectedComment.indentationLevel
import axios from 'axios'
import topic from '@/components/topics/topic.vue'
import comment from '@/components/topics/comment.vue'

export default {
    name: 'ViewPost',
    components: {
        topic,
        comment
    },
    props: {
        topicType: String,
        topicId: Number
    },
    data() {
        return {
            infosTopic: [],
            postId: this.$route.params.id,
            infosComment: [],
            myLikes: {
                like:"",
                dislike:""
            },
            toggleDisplayRelatedComments: false,
            infosRelatedComment: [],
            commentsThread: [],
            componentKey: 0,
            allZeroComments: true
        }
        },
    methods: { 
        displayRelatedComments: function(payload, selectedComment) {

            console.log(selectedComment.indentationLevel);
            console.log(this.commentsThread.length);
            console.log(selectedComment.indentationLevel+1 +" "+ this.commentsThread.length);
            console.log(selectedComment);
            
                if(this.commentsThread.length ===0 && selectedComment.CommentsNb >0){
                    let newThreadComment = selectedComment;
                    this.commentsThread.push(newThreadComment);
                    console.log("Fil de commentaires initial : ");
                    console.log(this.commentsThread);
                    this.allZeroComments=false;
                } else if(this.commentsThread[this.commentsThread.length-1].commentId !== selectedComment.commentId){
                    if(this.commentsThread.length !==0) {
                        let newThreadComment = selectedComment;
                        if(this.commentsThread.length>selectedComment.indentationLevel+1){
                            let nbValuesToDelete = this.commentsThread.length-(selectedComment.indentationLevel);
                            console.log("nb to delete "+nbValuesToDelete);
                            console.log(this.commentsThread);

                            this.commentsThread.splice(this.commentsThread.length-nbValuesToDelete, nbValuesToDelete);
                            console.log("length "+this.commentsThread.length);
                            console.log(this.commentsThread);
                        }
                            this.commentsThread.push(newThreadComment);
                            console.log("Fil de commentaires : ");
                            console.log(this.commentsThread);
                            this.allZeroComments=false;
                    }
                }
                console.log(this.commentsThread[this.commentsThread.length-1].commentId);
                this.getRelatedComments(selectedComment.commentId);
                this.toggleDisplayRelatedComments=true;
                this.forceRerender();
        },
        forceRerender() {
            this.componentKey += 1;
        },
        getRelatedComments : function(relatedCommentId) {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('id');
            const idTokenKeyValue = userId+":"+token;
            
            axios({
                method: 'get',
                url: 'http://localhost:3000/api/comment/' + relatedCommentId + '/comments',
                headers: {
                    'Authorization': `Basic ${idTokenKeyValue}` 
                }
            })
            .then(reponse => {
                this.infosRelatedComment = reponse.data;
                console.log("Commentaires enfants : ");
                console.log(this.infosRelatedComment);
                console.log("---");
            })
            .catch(error => {
                console.log(error);
            })
        },
        resetTopic: function(payload) {
            this.toggleDisplayRelatedComments=payload;
            this.allZeroComments=!payload;
            this.commentsThread=[];
        }
    },
    mounted() {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('id');
        const idTokenKeyValue = userId+":"+token;

        if(this.topicType === "post") {
            axios({
                method: 'get',
                url: 'http://localhost:3000/api/post/' + this.postId,
                headers: {
                    'Authorization': `Basic ${idTokenKeyValue}` 
                }
            })
            .then(reponse => {
                this.infosTopic = reponse.data;
                console.log(this.infosTopic);
            })
            .catch(error => {
                console.log(error);
            });

            axios({
                method: 'get',
                url: 'http://localhost:3000/api/post/' + this.postId + '/comments',
                headers: {
                    'Authorization': `Basic ${idTokenKeyValue}` 
                }
            })
            .then(reponse => {
                this.infosComment = reponse.data;
                console.log(this.infosComment);
            })
            .catch(error => {
                console.log(error);
            })
        } 
    }
}

</script>