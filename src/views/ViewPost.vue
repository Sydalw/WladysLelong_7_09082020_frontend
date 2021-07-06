<template>
<div>
    <layout>
        <template v-slot:viewContainer>
            <div>
                <ViewTopic topicType="post" :topicId="Number(postId)"></ViewTopic>
            </div>
        </template>
    </layout>
</div>
</template>

<script>
import ViewTopic from '@/components/ViewTopic.vue'
import layout from '@/components/layout/layout.vue'

 export default {
     name: 'ViewPost',
     components: {
        layout,
        ViewTopic
     },
     data() {
         return {
             postId: this.$route.params.id,
             commentRelatedId: 0,
             commentsThread: [],
             componentKey: 0
        }
    },
     methods: { 
        
     },
     mounted() {
         console.log(this.$route.params.id);
     }
 }
</script>