<template>
    <div>
        <layout>
            <template v-slot:viewContainer>
                <div class="flex flex-col">
                    <h1 class="dark:text-white my-10">Tableau des utilisateurs</h1>
                    <table class="table-auto text-xs dark:text-gray-100 w-full">
                        <thead class="">
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal py-1">
                                <th class="py-3 px-6 text-left">Pseudo</th>
                                <th class="py-3 px-6 text-left">Role</th>
                                <th class="py-3 px-6 text-left">Modifier Post</th>
                                <th class="py-3 px-6 text-left">Supprimer Post</th>
                                <th class="py-3 px-6 text-left">Modifier Commentaire</th>
                                <th class="py-3 px-6 text-left">Supprimer Commentaire</th>
                                <th class="py-3 px-6 text-left">Modifier Utilisateur</th>
                                <th class="py-3 px-6 text-left">Supprimer Utilisateur</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light py-1">
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <!-- <td class="border dark:border-white">{{user.username}}</td> -->
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                        </div>
                                        <select v-on:change="changeSelection()" name="users" id="user-select" class="text-black my-3">
                                            <option v-for="user in users" :key="user.id">{{user.username}}</option>
                                        </select>
                                    </div>
                                </td>
                                <td  class="py-3 px-6 text-left whitespace-nowrap">
                                    <select v-on:change="changeSelection()" name="roles" id="role-select" class="text-black my-3">
                                        <option>{{users[selectedUser].Role.roleName}}</option>
                                    </select>
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <input disabled v-model="users[selectedUser].Role.updatePost" type="checkbox" name="displayUpdateP" id="displayUpdateP" class=""/>
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <input  disabled v-model="users[selectedUser].Role.deletePost" type="checkbox" name="displayDeleteP" id="displayDeleteP" class=""/>
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <input  disabled v-model="users[selectedUser].Role.updateComment" type="checkbox" name="displayUpdateC" id="displayUpdateC" class=""/>
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <input  disabled v-model="users[selectedUser].Role.deleteComment" type="checkbox" name="displayDeleteC" id="displayDeleteC" class=""/>
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <input disabled v-model="users[selectedUser].Role.updateUser" type="checkbox" name="displayUpdateU" id="displayUpdateU" class=""/>
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <input  disabled v-model="users[selectedUser].Role.deleteUser" type="checkbox" name="displayDeleteU" id="displayDeleteU" class=""/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <div class="flex -mx-3 mt-10">
                            <div class="w-full px-3 mb-5">
                                <button v-on:click="updateUserRole()" class="block w-full max-w-xs mx-auto bg-blue-900 hover:bg-indigo-700 focus:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">VALIDER</button>
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
            selectedUser: ""
        }
    },
    computed: {

    },
    methods: { 
        changeSelection: function() {
            this.selectedUser=document.getElementById("user-select").selectedIndex;
            console.log(this.selectedUser);
        },
        updateUserRole: function() {

        }
    },
    beforeCreate() {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('id');
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/users',
            data: {
                id: userId
            },
            headers: {
                'Authorization': `Basic ${token}` 
            }
        })
        .then(reponse => {
            this.users = reponse.data;
            console.log(this.users);
        })
        .catch(error => {
            console.log(error);
        })
    },
    created() {
        this.selectedUser = 0;
    },
    watch: {

    }
}
</script>