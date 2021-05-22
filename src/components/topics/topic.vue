<template>
    <article class="w-full max-w-4xl border border-gray-200 rounded-xl pl-3 pt-2 mt-5 bg-white" :id="postId">
        <topicHeader :id="id" :topicId="postId" :username="username" :profilePictureURL="profilePictureURL" :createdAt="createdAt" :updatedAt="updatedAt"></topicHeader>
        <div class="">
            <div class="pl-5">
                <h2 class="sm:text-lg text-sm sm:font-medium mb-1 text-justify">{{title}}</h2>
            </div>
            <div class="pl-5">
                <p class="text-xs font-light mb-5 text-justify pr-3">{{content}}</p>
            </div>
        </div>
        <topicFooter :id="id" :topicId="postId" :likes="likes" :dislikes="dislikes" :comments="comments"></topicFooter>
    </article>
</template>

<script>
import topicFooter from './topicsComponents/topicFooter.vue';
import topicHeader from './topicsComponents/topicHeader.vue';

    export default {
        name: 'topic',
        components: {
            topicHeader,
            topicFooter
        },
        props: {
            id: Number,
            username: String,
            title: String,
            content: String,
            profilePictureURL: String,
            postId: Number,
            likes: String,
            dislikes: String,
            comments: Number,
            createdAt: String,
            updatedAt: String
        },
        methods: {
            
        }
    }
</script>