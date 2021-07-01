<template>
    <div>
        <!-- <div :key="componentKey"></div> -->
        <layout>
            <template v-slot:viewContainer>
                <div class="flex flex-col">
                    <h1 class="dark:text-white my-10 text-xl">Tableau des utilisateurs</h1>
                    <div class="">
                        <div class="my-2 flex sm:flex-row flex-col">
                            <div class="flex flex-row mb-1 sm:mb-0">
                                <div class="relative">
                                    <select
                                        class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option>Afficher tout</option>
                                        <option>5</option>
                                        <option>10</option>
                                        <option>20</option>
                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="relative">
                                    <select
                                        class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                        <option>Afficher tout</option>
                                        <option>user</option>
                                        <option>moderator</option>
                                        <option>admin</option>
                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="block relative">
                                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                        <path
                                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                        </path>
                                    </svg>
                                </span>
                                <input placeholder="Chercher Pseudo"
                                    class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                            </div>
                        </div>
                        <div class="min-w-screen flex items-center justify-center font-sans overflow-hidden">
                            <div class="w-full">
                                <div class="bg-white shadow-md rounded my-6">
                                    <table class="w-full table-auto">
                                        <thead class="">
                                            <tr class="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-600 uppercase text-xs leading-normal py-1">
                                                <th class="py-3 px-6 text-left">Pseudo</th>
                                                <th class="py-3 px-6 text-left">Role</th>
                                                <div class="hidden xl:flex justify-between">
                                                    <th class="py-3 px-6 text-left flex-1">Modif.<br />Post</th>
                                                    <th class="py-3 px-6 text-left flex-1">Suppr.<br />Post</th>
                                                    <th class="py-3 px-6 text-left flex-1">Modif.<br />Comm.</th>
                                                    <th class="py-3 px-6 text-left flex-1">Suppr.<br />Comm.</th>
                                                    <th class="py-3 px-6 text-left flex-1">Modif.<br />Profil</th>
                                                    <th class="py-3 px-6 text-left flex-1">Suppr.<br />Profil</th>
                                                </div>
                                                <th class="py-3 px-6 text-left">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-gray-600 text-xs font-light py-1">
                                            <tr v-for="(user, index) in users" :key="index" class="border-b border-gray-200 dark:text-gray-200 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500">
                                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="mr-2">
                                                            <img class="w-6 h-6 rounded-full" :src="getImgUrl(user.pictureURL)"/>
                                                        </div>
                                                        <span>{{user.username}}</span>
                                                    </div>
                                                </td>
                                                <td :key="componentKey" class="py-3 px-6 text-left whitespace-nowrap">
                                                    <span v-if="!toggleEdit[index].toggle" :id="user.id">{{toggleEdit[index].displayedRoleName}}</span>
                                                    <div v-if="toggleEdit[index].toggle" class="flex">
                                                        <select :id="user.username" v-on:change="selectRole(index, selectedRole)" v-model="selectedRole" name="roles" class="text-black">
                                                            <option v-for="(role, index2) in roles" :key="index2">{{role.roleName}}</option>
                                                        </select>
                                                        <svg v-on:click="validateRole(index, user.id, selectedRole)" class="w-4 fill-current text-gray-200 ml-2 hover:text-green-500 hover:scale-110 transform cursor-pointer" viewBox="0 0 30.262 30.262" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 30.262 30.262"><path d="m15.131.002c-8.358 0-15.131 6.775-15.131 15.128 0 8.358 6.773 15.13 15.131 15.13s15.131-6.771 15.131-15.13c0-8.353-6.774-15.128-15.131-15.128zm-2.272 24.146c-.34.336-.887.336-1.223 0l-.271-.271-.295-.293-1.266-1.266-.02-.029-5.807-5.851c-.338-.336-.338-.887 0-1.22l1.83-1.83c.34-.339.883-.339 1.221 0l5.225 5.262 10.98-10.982c.336-.337.883-.337 1.219 0l1.83 1.832c.338.336.338.885 0 1.221z" fill="currentColor"/></svg>
                                                    </div>
                                                </td>
                                                <div class="hidden xl:flex justify-between">
                                                    <td class="py-3 px-6 text-left whitespace-nowrap flex-1">
                                                        <input disabled v-model="toggleEdit[index].displayedUpdatePost" type="checkbox" name="displayUpdateP" id="displayUpdateP" class=""/>
                                                    </td>
                                                    <td class="py-3 px-6 text-left whitespace-nowrap flex-1">
                                                        <input  disabled v-model="toggleEdit[index].displayedDeletePost" type="checkbox" name="displayDeleteP" id="displayDeleteP" class=""/>
                                                    </td>
                                                    <td class="py-3 px-6 text-left whitespace-nowrap flex-1">
                                                        <input  disabled v-model="toggleEdit[index].displayedUpdateComment" type="checkbox" name="displayUpdateC" id="displayUpdateC" class=""/>
                                                    </td>
                                                    <td class="py-3 px-6 text-left whitespace-nowrap flex-1">
                                                        <input  disabled v-model="toggleEdit[index].displayedDeleteComment" type="checkbox" name="displayDeleteC" id="displayDeleteC" class=""/>
                                                    </td>
                                                    <td class="py-3 px-6 text-left whitespace-nowrap flex-1">
                                                        <input disabled v-model="toggleEdit[index].displayedUpdateUser" type="checkbox" name="displayUpdateU" id="displayUpdateU" class=""/>
                                                    </td>
                                                    <td class="py-3 px-6 text-left whitespace-nowrap flex-1">
                                                        <input  disabled v-model="toggleEdit[index].displayedDeleteUser" type="checkbox" name="displayDeleteU" id="displayDeleteU" class=""/>
                                                    </td>
                                                </div>
                                                <td class="py-3 px-6 text-left">
                                                    <div class="flex">
                                                        <router-link :to="{ name: 'Profile', params: {id: user.id}}" class="w-4 mr-2 transform hover:text-green-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </router-link>
                                                        <div v-on:click="setToggleEdit(index, temoinValidation)" class="w-4 mr-2 transform hover:text-yellow-500 hover:scale-110 cursor-pointer">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </div>
                                                        <div v-on:click="deleteProfile()" class="w-4 mr-2 transform hover:text-red-500 hover:scale-110 cursor-pointer">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </layout>
    </div>
</template>

<script>
import layout from '@/components/layout/layout.vue'
import axios from 'axios'

export default {
    name: 'Administration',
    components: {
        layout
    },
    data() {
        return {
            users: [],
            roles: [],
            displayedRoles: [],
            toggleEdit: [],
            selectedRole: "",
            componentKey: 0,
            roleFilter: "",
            temoinValidation: false
        }
    },
    computed: {

    },
    methods: {
        setToggleEdit: function(index, validationProof) {
            if(this.toggleEdit[index].toggle === true && validationProof === false){
                this.toggleEdit[index].displayedUpdatePost=this.users[index].Role.updatePost;
                this.toggleEdit[index].displayedDeletePost=this.users[index].Role.deletePost;
                this.toggleEdit[index].displayedUpdateComment=this.users[index].Role.updateComment;
                this.toggleEdit[index].displayedDeleteComment=this.users[index].Role.deleteComment;
                this.toggleEdit[index].displayedUpdateUser=this.users[index].Role.updateUser;
                this.toggleEdit[index].displayedDeleteUser=this.users[index].Role.deleteUser;
                this.toggleEdit[index].displayedRoleName=this.users[index].Role.roleName;
            } else {
                this.toggleEdit[index].displayedRoleName=this.selectedRole;
                this.temoinValidation = false;
            }
            this.toggleEdit[index].toggle=!this.toggleEdit[index].toggle;
            this.forceRerender();
            //console.log(this.toggleEdit[index].toggle);
        },
        forceRerender() {
            this.componentKey += 1;
        }, 
        getImgUrl(pic) {
            if (pic === null) {
                pic = "icon.png";
                return require('/public/images/'+pic);
            } else {    
            return require('/public/images/'+pic);
            }
        },
        copyRolesInBuffer: function(){
            for(let i=0; i< this.users.length; i++){
                this.toggleEdit.push({toggle: false});
                this.toggleEdit[i].displayedRoleName=this.users[i].Role.roleName;
                this.toggleEdit[i].displayedUpdatePost=this.users[i].Role.updatePost;
                this.toggleEdit[i].displayedDeletePost=this.users[i].Role.deletePost;
                this.toggleEdit[i].displayedUpdateComment=this.users[i].Role.updateComment;
                this.toggleEdit[i].displayedDeleteComment=this.users[i].Role.deleteComment;
                this.toggleEdit[i].displayedUpdateUser=this.users[i].Role.updateUser;
                this.toggleEdit[i].displayedDeleteUser=this.users[i].Role.deleteUser;
            }
            //console.log(this.toggleEdit);
        },
        deleteProfile: function() {
            alert("Êtes-vous sûr de vouloir supprimer ce profil ?");
        },
        selectRole: function(index, userRole) {
            var filteredRoles = this.roles.filter(a => a.roleName == userRole);
            //console.log(filteredRoles);
            this.toggleEdit[index].displayedUpdatePost= filteredRoles[0].updatePost;
            this.toggleEdit[index].displayedDeletePost= filteredRoles[0].deletePost;
            this.toggleEdit[index].displayedUpdateComment= filteredRoles[0].updateComment;
            this.toggleEdit[index].displayedDeleteComment= filteredRoles[0].deleteComment;
            this.toggleEdit[index].displayedUpdateUser= filteredRoles[0].updateUser;
            this.toggleEdit[index].displayedDeleteUser= filteredRoles[0].deleteUser;
            //console.log(this.toggleEdit[index]);
            this.forceRerender();
        },
        validateRole: function(index, id, selectedRole) {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('id');
            const idTokenKeyValue = userId+":"+token;
            console.log(selectedRole);
            var filteredRoles = this.roles.filter(a => a.roleName == selectedRole);
            console.log(filteredRoles);
            axios({
                method: 'put',
                url: 'http://localhost:3000/api/user/'+id+'/role',
                data: {
                    id: userId,
                    roleId: filteredRoles[0].id
                },
                headers: {
                    'Authorization': `Basic ${idTokenKeyValue}` 
                }
            })
            .then(reponse => {
                console.log(reponse);
            })
            .catch(error => {
                console.log(error);
            });
            this.temoinValidation = true;
            this.setToggleEdit(index, this.temoinValidation);
        }
    },
    beforeCreate() {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('id');
        const idTokenKeyValue = userId+":"+token;
        axios({
            method: 'get',
            url: 'http://localhost:3000/api/users',
            // data: {
            //     id: userId
            // },
            headers: {
                'Authorization': `Basic ${idTokenKeyValue}` 
            }
        })
        .then(reponse => {
            this.users = reponse.data;
            this.copyRolesInBuffer();
            //console.log(this.users);
        })
        .catch(error => {
            console.log(error);
        });
        axios({
            method: 'get',
            url: 'http://localhost:3000/api/users/roles',
            // data: {
            //     id: userId
            // },
            headers: {
                'Authorization': `Basic ${idTokenKeyValue}` 
            }
        })
        .then(reponse => {
            this.roles = reponse.data;
            console.log(this.roles);
        })
        .catch(error => {
            console.log(error);
        })
    },
    updated() {
        console.log("updated");
    }
}
</script>