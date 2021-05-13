<template>
    <div class="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5">
    <div class="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden text-gray-800">
        <div class="w-full h-36 md:h-48 bg-gray-100 bg-random"></div>
        <div class="rounded-full w-44 h-44 mx-auto md:mx-7 border-4 border-white bg-white -mt-28 md:-mt-32 z-10 relative overflow-hidden">
            <img src='../assets/IMG_1185_mini.jpg' alt="profile_picture" class="w-full h-full">
        </div>
        <div class="w-full px-8 pt-3 pb-8">
            <div class="-mx-3 md:flex">
                <div class="px-3 w-full md:w-2/3 text-center md:text-left mb-5">
                    <h1 class="font-semibold text-2xl">Sydalw</h1>
                    <h3 class="text-xl">Wladys LELONG</h3>
                    <h4 class="text-lg text-gray-500">Membre depuis le 15/04/2021</h4>
                </div>
                <div class="px-3 w-full md:w-1/3 mb-5">
                    <div class="text-center md:text-left">
                        <div class="inline-block md:block mb-2 mx-3">
                            <a href="#" class="font-semibold text-blue-500 hover:text-blue-600 group">
                                <span class="inline-flex items-center justify-center w-8 h-8 text-lg rounded-full bg-blue-500 group-hover:bg-blue-600 text-white mr-2"><i class="mdi mdi-email-outline"></i></span> <span class="group-hover:underline">sydalw@mail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full text-center md:text-justify">
                <p class="text-sm leading-tight">Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Assumenda nihil cumque mollitia hic est cum corrupti ex necessitatibus debitis modi aliquid doloribus impedit totam alias illo dolorum voluptatum veritatis, quis. Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Perspiciatis esse, nihil voluptas? Accusantium, explicabo molestiae repudiandae ipsa temporibus perspiciatis architecto expedita nulla quidem corrupti, similique nam rerum, qui, sit consequatur.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Profile',
  components: {

  },
  created: { 
    profile: function() {
      axios
      .get('http://localhost:3000/api/user/2', {id:2})
      .then(reponse => {
        console.log(reponse.data.token);
        localStorage.setItem('token', reponse.data.token);
      })
      .catch(error => {
        console.log(error);
      })
    }
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