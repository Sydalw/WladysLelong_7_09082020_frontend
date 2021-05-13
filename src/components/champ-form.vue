<template>
    <div class="flex -mx-3">
        <div :class="largeur" class="px-3 mb-5">
            <label :for="for_id" class="text-xs font-semibold px-1">{{nom}}</label>
            <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                <slot name="input"></slot>
                <!--<input :type="type" v-model="resultatSaisi" :id="for_id" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-900" :placeholder="placeholder">-->
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'champForm',
  data() {
    return {
      resultatSaisi: ''
    }
  },
  props: {
    nom: String,
    for_id: String,
    type: String,
    placeholder: String,
    largeur: String
  },
  methods: {
    
  }
}
</script>