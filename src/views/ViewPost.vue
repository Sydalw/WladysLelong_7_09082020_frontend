<template>
    <div>
        <layout>
            <template v-slot:viewContainer>
                <div class="min-w-screen flex flex-col items-center justify-center px-5 py-5">
                    <topic 
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
                    <div class="min-w-full flex flex-col items-center justify-center pl-5">
                        <comment class="" v-for="infoComment in infosComment" 
                            :key="infoComment.commentId"
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
                </div>
            </template>
        </layout>
    </div>
</template>

<script>
import layout from '@/components/layout/layout.vue'
import axios from 'axios'
import topic from '@/components/topics/topic.vue'
import comment from '@/components/topics/comment.vue'

export default {
    name: 'ViewPost',
    components: {
        layout,
        topic,
        comment
    },
    data() {
        return {
            infosTopic: [],
            postId: this.$route.params.id,
            infosComment: [],
            myLikes: {
                like:"",
                dislike:""
            }
        }
        },
    methods: { 
        
    },
    mounted() {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('id');
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/post/' + this.postId,
            data: {
                id: userId
            },
            headers: {
                'Authorization': `Basic ${token}` 
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
            method: 'post',
            url: 'http://localhost:3000/api/post/' + this.postId + '/comments',
            data: {
                id: userId
            },
            headers: {
                'Authorization': `Basic ${token}` 
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
</script>