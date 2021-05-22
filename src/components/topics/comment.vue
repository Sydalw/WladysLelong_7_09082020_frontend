<template>
    <article class="w-full max-w-4xl border border-gray-200 rounded-xl pl-3 pt-2 mt-5 bg-white" :id="commentId">
        <topicHeader :id="id" :topicId="commentId" :username="username" :profilePictureURL="profilePictureURL" :createdAt="createdAt" :updatedAt="updatedAt"></topicHeader>
        <div class="">
            <div class="pl-5">
                <p class="text-xs font-light mb-5 text-justify pr-3">{{content}}</p>
            </div>
        </div>
        <topicFooter :id="postId" :likes="likes" :dislikes="dislikes" :comments="comments"></topicFooter>
    </article>
</template>

<script>
import topicFooter from './topicsComponents/topicFooter.vue';
import topicHeader from './topicsComponents/topicHeader.vue';

    export default {
        name: 'comment',
        components: {
            topicHeader,
            topicFooter
        },
        props: {
            id: Number,
            username: String,
            profilePictureURL : String,
            content: String,
            commentId: Number,
            likes: String,
            dislikes: String,
            comments: Number,
            relatedComment: Number,
            createdAt: String,
            updatedAt: String
        },
        methods: {
           
        }
    }
</script>