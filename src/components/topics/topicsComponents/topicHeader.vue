<template>
    <div class="flex items-center text-xs mb-2" :id="id">
        <a href="#" class="font-semibold text-black flex items-center">
            <img class="rounded-full border h-5 w-5" :src="getImgUrl(profilePictureURL)" :alt="username">
        </a>
        <span class="hidden sm:block text-gray-500 ml-2">Posté par</span>
        <router-link :to="{ name: 'Profile', params: {id: id}}" class="text-gray-500 mx-1">{{username}}</router-link>
        <span class="text-gray-500">{{transformDate()}}</span>
    </div>
</template>

<script>
    export default {
        name: 'topicHeader',
        props: {
            id: Number,
            username: String,
            profilePictureURL: String,
            topicId: Number,
            createdAt: String,
            updatedAt: String
        },
        methods: {
            getImgUrl(pic) {
                if (pic === null) {
                    pic = "icon.png";
                    return require('../../../assets/'+pic);
                } else {    
                return require('../../../assets/'+pic);
                }
            },
            transformDate: function() {
                var datePost = new Date(this.createdAt);
                var dateRef = Date.now();
                var tpsEcoule = dateRef - datePost;
                var tpsEcouleH = tpsEcoule/1000/60/60;
                if (tpsEcouleH > 168) {
                    datePost = "le " + datePost.toLocaleDateString("fr-FR", {year: "numeric", month: "2-digit", day: "2-digit"});
                    return datePost;
                } else if (tpsEcouleH > 24) {
                    tpsEcouleH /= 24;
                    const tpsEcouleString = "il y a " + Math.round(tpsEcouleH) + " jours"
                    return tpsEcouleString;
                } else {
                    const tpsEcouleString = "il y a " + Math.round(tpsEcouleH) + " heures"
                    return tpsEcouleString;
                }
            }
        }
    }
</script>