<template>
    <div class="flex -mx-3">
        <div :class="largeur" class="px-3 mb-5">
            <label :for="for_id" class="text-xs dark:text-white font-semibold px-1">{{nom}}</label>
            <div class="flex">
                <div class="w-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <slot name="input"></slot>
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
    largeur: String
  },
  methods: {
    
  }
}
</script>