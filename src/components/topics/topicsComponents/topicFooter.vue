<template>
    <div class="flex justify-start items-center my-1 -ml-2" :id="topicId">
        <div class="flex">
            <div v-on:click="fctLike(1)" class="flex px-2 py-2 cursor-pointer hover:bg-green-100 rounded-sm">
                <svg v-if="myRendedLike !== 1" class="w-4 fill-current text-green-500" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 304c0-12.821-5.099-24.768-13.888-33.579 9.963-10.901 15.04-25.515 13.653-40.725-2.496-27.115-26.923-48.363-55.637-48.363h-131.776c6.528-19.819 16.981-56.149 16.981-85.333 0-46.272-39.317-85.333-64-85.333-22.144 0-37.995 12.48-38.656 12.992-2.539 2.027-4.011 5.099-4.011 8.341v72.341l-61.461 133.099-2.539 1.301v-4.075c0-5.888-4.779-10.667-10.667-10.667h-106.666c-29.418.001-53.333 23.916-53.333 53.334v170.667c0 29.419 23.915 53.333 53.333 53.333h64c23.061 0 42.773-14.72 50.197-35.264 17.75 9.131 41.643 13.931 56.47 13.931h195.819c23.232 0 43.563-15.659 48.341-37.248 2.453-11.136 1.024-22.336-3.84-32.064 15.744-7.915 26.347-24.192 26.347-42.688 0-7.552-1.728-14.784-4.992-21.312 15.744-7.936 26.325-24.192 26.325-42.688zm-44.992 26.325c-4.117.491-7.595 3.285-8.917 7.232-1.301 3.947-.213 8.277 2.816 11.136 5.419 5.099 8.427 11.968 8.427 19.307 0 13.461-10.176 24.768-23.637 26.325-4.117.491-7.595 3.285-8.917 7.232-1.301 3.947-.213 8.277 2.816 11.136 7.019 6.613 9.835 15.893 7.723 25.451-2.624 11.904-14.187 20.523-27.499 20.523h-195.82c-17.323 0-46.379-8.128-56.448-18.219-3.051-3.029-7.659-3.925-11.627-2.304-3.989 1.643-6.592 5.547-6.592 9.856 0 17.643-14.357 32-32 32h-64c-17.643 0-32-14.357-32-32v-170.667c0-17.643 14.357-32 32-32h96v10.667c0 3.691 1.92 7.125 5.077 9.088 3.115 1.877 7.04 2.069 10.368.448l21.333-10.667c2.155-1.067 3.883-2.859 4.907-5.056l64-138.667c.64-1.408.981-2.944.981-4.48v-68.885c4.438-2.453 12.14-5.781 21.334-5.781 11.691 0 42.667 29.056 42.667 64 0 37.547-20.437 91.669-20.629 92.203-1.237 3.264-.811 6.955 1.173 9.856 2.005 2.88 5.291 4.608 8.789 4.608h146.795c17.792 0 32.896 12.736 34.389 28.992 1.131 12.16-4.715 23.723-15.189 30.187-3.264 2.005-5.205 5.632-5.056 9.493s2.368 7.317 5.781 9.088c9.024 4.587 14.613 13.632 14.613 23.573.001 13.461-10.175 24.768-23.658 26.325z"/><path d="m160 245.333c-5.888 0-10.667 4.779-10.667 10.667v192c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 10.667-10.667v-192c0-5.888-4.779-10.667-10.667-10.667z"/></svg>
                <svg v-if="myRendedLike === 1" class="w-4 fill-current text-green-500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64
                        c12.011,0,23.061-4.053,32-10.795V224H53.333z"/>
                    <path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725
                        c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333
                        c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651
                        C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043
                        c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/>
                </svg>
                <span class="ml-2 text-xs font-semibold text-green-500">{{updatedLikes}}</span>
            </div>
            <div v-on:click="fctLike(-1)" class="flex px-2 py-2 cursor-pointer hover:bg-red-100 rounded-sm">
                <svg v-if="myRendedDislike !== 1" class="w-4 fill-current text-red-500" enable-background="new 0 0 512.012 512.012" viewBox="0 0 512.012 512.012" xmlns="http://www.w3.org/2000/svg"><path d="m498.133 241.585c8.768-8.811 13.867-20.757 13.867-33.579 0-18.496-10.581-34.752-26.325-42.688 3.264-6.528 4.992-13.76 4.992-21.312 0-18.496-10.603-34.773-26.347-42.688 4.864-9.728 6.293-20.928 3.84-32.043-4.779-21.611-25.109-37.269-48.341-37.269h-195.819c-14.827 0-38.72 4.8-56.469 13.931-7.424-20.544-27.136-35.264-50.197-35.264h-64c-29.419 0-53.334 23.914-53.334 53.333v170.667c0 29.419 23.915 53.333 53.333 53.333h106.667c5.888 0 10.667-4.779 10.667-10.667v-4.075l2.539 1.28 61.461 133.12v72.341c0 3.243 1.472 6.315 3.989 8.341.683.512 16.533 12.992 38.677 12.992 24.683 0 64-39.061 64-85.333 0-29.184-10.453-65.515-16.981-85.333h131.776c28.715 0 53.141-21.248 55.659-48.363 1.386-15.21-3.691-29.823-13.654-40.724zm-22.805 8.597c10.475 6.464 16.32 18.027 15.189 30.187-1.493 16.235-16.597 28.971-34.389 28.971h-146.795c-3.499 0-6.784 1.728-8.789 4.608-1.984 2.901-2.432 6.592-1.173 9.856.192.533 20.629 54.656 20.629 92.203 0 34.944-30.976 64-42.667 64-9.195 0-16.917-3.349-21.333-5.781v-68.885c0-1.536-.341-3.072-1.003-4.48l-64-138.667c-1.003-2.176-2.731-3.968-4.907-5.056l-21.333-10.667c-3.307-1.664-7.253-1.451-10.368.448-3.136 1.963-5.056 5.397-5.056 9.088v10.667h-96c-17.643 0-32-14.357-32-32v-170.668c0-17.643 14.357-32 32-32h64c17.643 0 32 14.357 32 32 0 4.309 2.603 8.213 6.592 9.856 3.968 1.621 8.555.725 11.627-2.304 10.069-10.091 39.125-18.219 56.448-18.219h195.819c13.312 0 24.875 8.619 27.499 20.565 2.112 9.536-.704 18.795-7.723 25.429-3.029 2.837-4.139 7.168-2.816 11.136 1.323 3.947 4.8 6.763 8.917 7.232 13.461 1.536 23.637 12.843 23.637 26.304 0 7.339-3.008 14.208-8.405 19.328-3.029 2.837-4.139 7.168-2.816 11.136 1.323 3.947 4.8 6.763 8.917 7.232 13.461 1.536 23.637 12.843 23.637 26.304 0 9.941-5.589 18.987-14.613 23.595-3.413 1.771-5.611 5.227-5.781 9.088-.149 3.841 1.792 7.467 5.056 9.494z"/><path d="m160 53.339c-5.888 0-10.667 4.779-10.667 10.667v192c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 10.667-10.667v-192c0-5.888-4.779-10.667-10.667-10.667z"/></svg>
                <svg v-if="myRendedDislike === 1" class="w-4 fill-current text-red-500" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M117.333,10.667h-64C23.936,10.667,0,34.603,0,64v170.667C0,264.064,23.936,288,53.333,288h96V21.461
                        C140.395,14.72,129.344,10.667,117.333,10.667z"/>
                    <path d="M512,208c0-18.496-10.581-34.731-26.347-42.667c3.285-6.549,5.013-13.803,5.013-21.333
                        c0-18.517-10.603-34.752-26.368-42.688c4.885-9.728,6.315-20.928,3.861-32.043C463.381,47.659,443.051,32,419.819,32H224
                        c-13.995,0-35.968,4.416-53.333,12.608v228.651l2.56,1.301l61.44,133.12V480c0,3.243,1.472,6.315,3.989,8.341
                        c0.683,0.512,16.512,12.992,38.677,12.992c24.683,0,64-39.061,64-85.333c0-29.184-10.453-65.515-16.981-85.333h131.776
                        c28.715,0,53.141-21.248,55.637-48.363c1.387-15.211-3.691-29.824-13.653-40.725C506.923,232.768,512,220.821,512,208z"/>
                </svg>
                <span class="ml-2 text-xs font-semibold text-red-500">{{updatedDislikes}}</span>
            </div>
        </div>
        <div class="flex" >
            <!-- <svg class="w-4 fill-current text-gray-500" viewBox="0 0 24 24" aria-hidden="true">
                <g>
                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
            </svg> -->
            <router-link :to="{ name: 'ViewPost', params: {id: topicId}}" class="flex cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-sm">
                <svg class="w-4 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z"/></svg>
                <span class="ml-2 text-xs font-semibold text-gray-500">{{comments}}</span>
            </router-link>
            <div v-on:click="toggleNewComment()" class="hidden cursor-pointer flex hover:bg-gray-200 px-2 ml-2 py-2 rounded-sm">
                <svg class="w-4 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z"/></svg>
                <span class="ml-2 text-xs font-semibold text-gray-500">Partager</span>
            </div>
            <div v-on:click="toggleEdit()" v-if="id === $store.state.infosConnectedProfile.id" class="cursor-pointer flex hover:bg-gray-200 px-2 ml-2 py-2 rounded-sm">
                <svg class="w-4 fill-current text-gray-500" viewBox="-6 0 396 396" xmlns="http://www.w3.org/2000/svg"><path d="m223.238281 314.78125-82.890625 21.992188c-3.441406.914062-7.109375-.074219-9.628906-2.589844s-3.511719-6.179688-2.605469-9.625l21.988281-83.457032c.453126-1.71875 1.351563-3.28125 2.609376-4.535156l154.347656-153.902344v-52.664062c-.019532-16.5625-13.441406-29.9804688-30-30h-247.058594c-16.5625.0195312-29.9804688 13.4375-30 30v336c.0195312 16.5625 13.4375 29.980469 30 30h247.054688c16.5625-.019531 29.984374-13.4375 30-30v-133.125l-79.316407 79.3125c-1.246093 1.246094-2.796875 2.140625-4.5 2.59375zm0 0"/><path d="m371.128906 89.324219c-11.710937-11.675781-30.65625-11.695313-42.386718-.039063l-5.574219 5.558594 46.816406 46.816406 5.527344-5.527344c11.695312-11.722656 11.695312-30.703124 0-42.425781zm0 0"/><path d="m173.890625 243.695312 46.8125 47.246094 135.140625-135.140625-46.835938-46.835937zm0 0"/><path d="m201.40625 299.882812-36.425781-36.761718-13.152344 49.914062zm0 0"/></svg>
                <span class="ml-2 sm:block hidden text-xs font-semibold text-gray-500">Éditer</span>
            </div>
            <div v-on:click="editTopic()" v-if="displayValidate" class="cursor-pointer flex hover:bg-gray-200 px-2 ml-2 py-2 rounded-sm">
                <svg class="w-4 fill-current text-gray-500" viewBox="0 0 30.262 30.262" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30.262 30.262"><path d="m15.131.002c-8.358 0-15.131 6.775-15.131 15.128 0 8.358 6.773 15.13 15.131 15.13s15.131-6.771 15.131-15.13c0-8.353-6.774-15.128-15.131-15.128zm-2.272 24.146c-.34.336-.887.336-1.223 0l-.271-.271-.295-.293-1.266-1.266-.02-.029-5.807-5.851c-.338-.336-.338-.887 0-1.22l1.83-1.83c.34-.339.883-.339 1.221 0l5.225 5.262 10.98-10.982c.336-.337.883-.337 1.219 0l1.83 1.832c.338.336.338.885 0 1.221z" fill="currentColor"/></svg>
                <span class="ml-2 sm:block hidden text-xs font-semibold text-gray-500">Valider</span>
            </div>
            <div v-on:click="deleteTopic()" v-if="id === $store.state.infosConnectedProfile.id" class="cursor-pointer flex hover:bg-gray-200 px-2 ml-2 py-2 rounded-sm">
                <svg class="w-4 fill-current text-gray-500" viewBox="-57 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m156.371094 30.90625h85.570312v14.398438h30.902344v-16.414063c.003906-15.929687-12.949219-28.890625-28.871094-28.890625h-89.632812c-15.921875 0-28.875 12.960938-28.875 28.890625v16.414063h30.90625zm0 0"/><path d="m344.210938 167.75h-290.109376c-7.949218 0-14.207031 6.78125-13.566406 14.707031l24.253906 299.90625c1.351563 16.742188 15.316407 29.636719 32.09375 29.636719h204.542969c16.777344 0 30.742188-12.894531 32.09375-29.640625l24.253907-299.902344c.644531-7.925781-5.613282-14.707031-13.5625-14.707031zm-219.863282 312.261719c-.324218.019531-.648437.03125-.96875.03125-8.101562 0-14.902344-6.308594-15.40625-14.503907l-15.199218-246.207031c-.523438-8.519531 5.957031-15.851562 14.472656-16.375 8.488281-.515625 15.851562 5.949219 16.375 14.472657l15.195312 246.207031c.527344 8.519531-5.953125 15.847656-14.46875 16.375zm90.433594-15.421875c0 8.53125-6.917969 15.449218-15.453125 15.449218s-15.453125-6.917968-15.453125-15.449218v-246.210938c0-8.535156 6.917969-15.453125 15.453125-15.453125 8.53125 0 15.453125 6.917969 15.453125 15.453125zm90.757812-245.300782-14.511718 246.207032c-.480469 8.210937-7.292969 14.542968-15.410156 14.542968-.304688 0-.613282-.007812-.921876-.023437-8.519531-.503906-15.019531-7.816406-14.515624-16.335937l14.507812-246.210938c.5-8.519531 7.789062-15.019531 16.332031-14.515625 8.519531.5 15.019531 7.816406 14.519531 16.335937zm0 0"/><path d="m397.648438 120.0625-10.148438-30.421875c-2.675781-8.019531-10.183594-13.429687-18.640625-13.429687h-339.410156c-8.453125 0-15.964844 5.410156-18.636719 13.429687l-10.148438 30.421875c-1.957031 5.867188.589844 11.851562 5.34375 14.835938 1.9375 1.214843 4.230469 1.945312 6.75 1.945312h372.796876c2.519531 0 4.816406-.730469 6.75-1.949219 4.753906-2.984375 7.300781-8.96875 5.34375-14.832031zm0 0"/></svg>
                <span class="ml-2 sm:block hidden text-xs font-semibold text-gray-500">Supprimer</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'topicFooter',
        props: {
            id: Number,
            topicId: Number,
            likes: Number,
            dislikes: Number,
            myLike: Number,
            myDislike: Number,
            comments: Number,
            topicType: String
        },
        data() {
            return {
                myRendedLike: this.myLike,
                myRendedDislike: this.myDislike,
                updatedLikes: this.likes,
                updatedDislikes: this.dislikes,
                displayValidate: false
            }
        },
        methods: {
            fctMyLikeUpdate: function(likeValue, myNewLike) {
                if(likeValue === 1){
                    if(myNewLike === 1) {
                        this.myRendedLike = 1;
                        this.updatedLikes = this.updatedLikes + 1;                    
                    } else {
                        if (this.myRendedLike !== 0){
                            this.myRendedLike = 0;
                            this.updatedLikes = this.updatedLikes - 1; 
                        } else 
                        {
                            this.myRendedDislike = 0;
                            this.updatedDislikes = this.updatedDislikes - 1; 
                        }
                    }
                } else {
                    if(myNewLike === -1) {
                        this.myRendedDislike = 1;
                        this.updatedDislikes = this.updatedDislikes + 1;                    
                    } else {
                        if (this.myRendedDislike !== 0){
                            this.myRendedDislike = 0;
                            this.updatedDislikes = this.updatedDislikes - 1; 
                        } else {
                            this.myRendedLike = 0;
                            this.updatedLikes = this.updatedLikes - 1; 
                        }
                    }
                }
            },
            fctLike: function(likeValue) {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('id');
                var myNewLike = 0;

                if(this.myRendedLike !== 1 && this.myRendedDislike !== 1){
                    console.log(this.myLike);
                    myNewLike=likeValue;
                }

                if(this.topicType === "post"){
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/api/post/'+ this.topicId +'/liking',
                        data: {
                            id: userId,
                            liking: myNewLike
                        },
                        headers: {
                            'Authorization': `Basic ${token}` 
                        }
                    })
                    .then(reponse => {
                        console.log(reponse);
                        this.fctMyLikeUpdate(likeValue, myNewLike);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                } else {
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/api/comment/'+ this.topicId +'/liking',
                        data: {
                            id: userId,
                            liking: myNewLike
                        },
                        headers: {
                            'Authorization': `Basic ${token}` 
                        }
                    })
                    .then(reponse => {
                        console.log(reponse);
                        this.fctMyLikeUpdate(likeValue, myNewLike);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
            },
            toggleEdit: function() {
                this.$emit('emitToggleEdit', !this.displayValidate);
                this.displayValidate=!this.displayValidate;
            },
            toggleNewComment: function() {
                this.$emit('emitToggleNewComment', true);
            },
            editTopic: function() {
                this.$emit('validateEdit', true);
            },
            deleteTopic: function() {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('id');

                if(this.topicType === "post") {
                    axios({
                        method: 'delete',
                        url: 'http://localhost:3000/api/post/'+ this.topicId,
                        data: {
                            id: userId
                        },
                        headers: {
                            'Authorization': `Basic ${token}` 
                        }
                    })
                    .then(reponse => {
                        console.log(reponse);
                        this.$emit('emitToggleDelete', true);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                } else if (this.topicType === "comment") {
                    axios({
                        method: 'delete',
                        url: 'http://localhost:3000/api/comment/'+ this.topicId,
                        data: {
                            id: userId
                        },
                        headers: {
                            'Authorization': `Basic ${token}` 
                        }
                    })
                    .then(reponse => {
                        console.log(reponse);
                        this.$emit('emitToggleDelete', false);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
            }
        }
    }
</script>


