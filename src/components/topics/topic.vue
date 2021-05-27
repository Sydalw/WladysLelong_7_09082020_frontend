<template>
    <article class="w-full max-w-4xl border border-gray-200 rounded-xl pl-3 pt-2 mt-5 bg-white dark:bg-gray-700" :id="id">
        <topicHeader :id="id" :topicId="topicId" :username="username" :profilePictureURL="profilePictureURL" :createdAt="createdAt" :updatedAt="updatedAt"></topicHeader>
        <div class="">
            <div class="pl-5 flex flex-col">
                <h2 class="sm:text-lg text-sm sm:font-medium mb-1 text-justify dark:text-gray-300">{{title}}</h2>
                <input v-model="title" type="text" class="hidden border text-justify">
            </div>
            <div class="pl-5 flex flex-col">
                <p class="text-xs font-light mb-5 text-justify pr-3 dark:text-gray-300">{{content}}</p>
                <textarea v-if="toggleEdit === 1" v-model="content" type="textarea" class="border font-light text-xs text-justify"></textarea>
            </div>
        </div>
        <topicFooter :id="id" :topicId="topicId" :likes="likes" :dislikes="dislikes" :comments="comments" :myLike="myLike" :myDislike="myDislike" topicType="post"></topicFooter>
    </article>
</template>

<script>
import topicFooter from './topicsComponents/topicFooter.vue';
import topicHeader from './topicsComponents/topicHeader.vue';

    export default {
        name: 'topic',
        data() {
            return {
                toggleEdit: 0,
                toggleNewComment: 0
            }
        },
        components: {
            topicHeader,
            topicFooter
        },
        props: {
            id: Number,
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
            updatedAt: String
        },
        methods: {
            setToggleEdit: function(payload) {
               this.toggleEdit = payload;
               console.log(this.toggleEdit);
           }
        }
    }
</script>