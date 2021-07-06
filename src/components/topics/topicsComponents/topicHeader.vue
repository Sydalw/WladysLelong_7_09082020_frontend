<template>
    <div class="flex items-center text-xs mb-2">
        <a href="#" class="font-semibold text-black flex items-center">
            <img class="rounded-full border-2 h-5 w-5" :class="getBorderColor()" :src="getImgUrl(profilePictureURL)" :alt="username">
        </a>
        <span class="hidden sm:block text-gray-500 ml-2">Posté par</span>
        <router-link :to="{ name: 'Profile', params: {id: userId}}" class="text-gray-500 mx-1 hover:text-gray-900 dark:hover:text-white">{{username}}</router-link>
        <span class="text-gray-500">{{transformDate()}}</span>
    </div>
</template>

<script>
    export default {
        name: 'topicHeader',
        props: {
            userId: Number,
            username: String,
            profilePictureURL: String,
            topicId: Number,
            createdAt: String,
            updatedAt: String,
            roleName: String
        },
        methods: {
            /**
             * Ajoute le chemin du reprtoire aux noms des photos de profil
             *
             * @param   {[String]}  pic  Nom de photo de profil
             *
             * @return  {[String]}       Chemin complet
             */
            getImgUrl(pic) {
                if (pic === null) {
                    pic = "icon.png";
                    return require('/public/images/'+pic);
                } else {    
                return require('/public/images/'+pic);
                }
            },
            getBorderColor: function() {
            if(this.roleName === "admin"){
                return "border-red-500";
            } else if (this.roleName === "moderator"){
                return "border-blue-500";
            }
            },

            /**
             * Permet de changer le format de la date vers le format "publié il y a x heures/jours"
             *
             * @return  {[Date]}  Date du post/comment
             */
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