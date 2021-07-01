<template>
    <div>
        <layout>
            <template v-slot:viewContainer>
                <div class="relative">
                    <div class="flex flex-col">
                        <div class="min-w-screen flex items-center justify-center px-5 pb-5">
                            <div class="w-full max-w-4xl mx-auto bg-white dark:bg-gray-700 border border-gray-200 rounded-xl overflow-hidden text-gray-800">
                                <div class="w-full h-36 md:h-48 bg-gray-100 bg-random"></div>
                                <div class="rounded-full w-44 h-44 mx-auto md:mx-7 border-4 bg-white -mt-28 md:-mt-32 z-10 relative overflow-hidden" :class="getBorderColor()">
                                    <img :src="getImgUrl(infosProfile.pictureURL)" :alt="infosProfile.username" class="w-full h-full">
                                </div>
                                <div class="w-full px-8 pt-3 pb-8">
                                    <div class="-mx-3 md:flex">
                                        <div class="px-3 w-full md:w-2/3 text-center md:text-left mb-5">
                                            <div class="inline-flex">
                                                <h1 class="font-semibold dark:text-white text-2xl">{{infosProfile.username}}</h1>
                                                <input v-model="$store.state.champsInscription.pseudo" type="text" class="hidden w-full -ml-10 pl-10 pr-3 py-2 rounded-lg outline-none focus:border-blue-900" :placeholder="infosProfile.username">
                                                <router-link to="/EditProfile" v-if="infosProfile.id === $store.state.infosConnectedProfile.id" class="pt-2">
                                                    <svg class="w-4 fill-current text-gray-500 ml-3 hover:text-blue-500" viewBox="-6 0 396 396" xmlns="http://www.w3.org/2000/svg"><path d="m223.238281 314.78125-82.890625 21.992188c-3.441406.914062-7.109375-.074219-9.628906-2.589844s-3.511719-6.179688-2.605469-9.625l21.988281-83.457032c.453126-1.71875 1.351563-3.28125 2.609376-4.535156l154.347656-153.902344v-52.664062c-.019532-16.5625-13.441406-29.9804688-30-30h-247.058594c-16.5625.0195312-29.9804688 13.4375-30 30v336c.0195312 16.5625 13.4375 29.980469 30 30h247.054688c16.5625-.019531 29.984374-13.4375 30-30v-133.125l-79.316407 79.3125c-1.246093 1.246094-2.796875 2.140625-4.5 2.59375zm0 0"/><path d="m371.128906 89.324219c-11.710937-11.675781-30.65625-11.695313-42.386718-.039063l-5.574219 5.558594 46.816406 46.816406 5.527344-5.527344c11.695312-11.722656 11.695312-30.703124 0-42.425781zm0 0"/><path d="m173.890625 243.695312 46.8125 47.246094 135.140625-135.140625-46.835938-46.835937zm0 0"/><path d="m201.40625 299.882812-36.425781-36.761718-13.152344 49.914062zm0 0"/></svg>
                                                </router-link>
                                            </div>
                                            <h3 class="text-xl dark:text-gray-300">{{infosProfile.name}} {{infosProfile.surname}}</h3>
                                            <h4 class="text-md text-gray-500">Membre depuis le {{transformDate()}}</h4>
                                            <h4 class="text-md text-gray-500">Role : {{infosProfile.role}}</h4>
                                        </div>
                                        <div class="px-3 w-full md:w-1/3 mb-5">
                                            <div class="text-center md:text-left">
                                                <div class="inline-block md:block mb-2 mx-3">
                                                    <a href="#" class="font-semibold text-blue-500 hover:text-blue-600 group">
                                                        <span class="inline-flex items-center justify-center w-8 h-8 text-lg rounded-full bg-blue-500 group-hover:bg-blue-600 text-white mr-2"><i class="mdi mdi-email-outline text-md"></i></span> <span class="text-sm group-hover:underline">{{infosProfile.email}}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full dark:text-gray-300 text-center md:text-justify">
                                        <p class="text-sm leading-tight">{{infosProfile.bio}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="min-w-screen flex flex-col items-center justify-center px-5 py-5">
                            <topic v-for="infoTopic in infosTopic" 
                                :key="infoTopic.postId" 
                                :id="infoTopic.id" 
                                :username="infoTopic.username" 
                                :title="infoTopic.title" 
                                :content="infoTopic.content" 
                                :createdAt="infoTopic.createdAt" 
                                :likes="Number(infoTopic.Likes)" 
                                :dislikes="Number(infoTopic.Dislikes)"
                                :myLike="infoTopic.myLike"
                                :myDislike="infoTopic.myDislike" 
                                :comments="infoTopic.CommentsNb" 
                                :profilePictureURL="infoTopic.profilePictureURL" 
                                :topicId="infoTopic.postId">
                            </topic>
                        </div>
                    </div>

                </div>
            </template>
        </layout>
    </div>
</template>

<script>
    import axios from 'axios'
    import topic from '@/components/topics/topic.vue'
    import layout from '@/components/layout/layout.vue'


    export default {
        name: 'Profile',
        components: {
            topic,
            layout
        },
        data() {
            return {
                infosProfile: {
                    id: "",
                    name: "",
                    surname: "",
                    username: "",
                    email: "",
                    bio: "",
                    role: "",
                    roleId: "",
                    pictureURL: "",
                    createdAt: ""
                },
                infosTopic: [],
                requestedId: this.$route.params.id
            }
        },
        methods: {
            getImgUrl(pic) {
                if (pic === null) {
                    pic = "icon.png";
                    return require('/public/images/'+pic);
                } else {    
                return require('/public/images/'+pic);
                }
            },
            transformDate: function() {
                var datePost = new Date(this.infosProfile.createdAt);
                datePost = datePost.toLocaleDateString("fr-FR", {year: "numeric", month: "2-digit", day: "2-digit"});
                return datePost;
            },
            getBorderColor: function() {
                if(this.infosProfile.role === "admin"){
                    return "border-red-500";
                } else if (this.infosProfile.role === "moderator"){
                    return "border-blue-500";
                }
            }
        },
        created() {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('id');
            const idTokenKeyValue = userId+":"+token;
            axios({
                method: 'get',
                url: 'http://localhost:3000/api/user/'+ this.requestedId,
                // data: {
                //     id: userId
                // },
                headers: {
                    'Authorization': `Basic ${idTokenKeyValue}` 
                }
            })
            .then(reponse => {
                this.infosProfile.id=reponse.data.id;
                this.infosProfile.surname=reponse.data.surname;
                this.infosProfile.name=reponse.data.name;
                this.infosProfile.username=reponse.data.username;
                this.infosProfile.email=reponse.data.email;
                this.infosProfile.bio=reponse.data.bio;
                this.infosProfile.role=reponse.data.Role.roleName;
                this.infosProfile.roleId=reponse.data.roleId;
                this.infosProfile.pictureURL=reponse.data.pictureURL;
                this.infosProfile.createdAt=reponse.data.createdAt;
            })
            .catch(error => {
                console.log(error);
            });

            axios({
                method: 'get',
                url: 'http://localhost:3000/api/user/'+ this.requestedId +'/posts',
                // data: {
                //     id: userId
                // },
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
            })
        }
    }

</script>

<style scoped>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
    .bg-random {
        /* @apply bg-cover bg-center */
        background-image: url(https://source.unsplash.com/900x300/?code,gradient,dark);
        background-size: cover;
        background-position: center;
    }
</style>