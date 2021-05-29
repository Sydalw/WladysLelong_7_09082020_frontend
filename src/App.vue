<template>
       <main class="text-center hover:cursor-pointer justify-center bg-gray-100 dark:bg-gray-800" id="app">
        <!--<div class="text-center" id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/">Connexion</router-link> |
          <router-link to="/Sign_in">Inscription</router-link> |
          <router-link to="/about">A propos</router-link>
        </div>-->
        <router-view/>
      </main>

</template>

<style src="./assets/tailwind.css">
</style>

<script>



export default {
  methods: {
      displayForm: function() {
        var $this = this;
        var $validator = this.$validator;
        var data = {};
        this.questions.forEach(function(question) {
          if (question.validate !== undefined) {
            $validator.attach(question.label, question.validate);
            data[question.label] = question.answer;
          }
        });
        var $questions = this.questions;
        $validator.validateAll(data).then(function() {
          var form = [];
          $questions.forEach(function(question) {
            form.push({
              id: question.id,
              label: question.label,
              answer: question.answer
            });
          });
          alert("Valid form: "+JSON.stringify(form));
        }).catch(function() {
            $this.$children.forEach(function(child) {
            child.$children.forEach(function(child) {
              child.$validator.validateAll();
            });
          });
          alert("Invalid form. Error count:  " + $validator.getErrors().count());
        })
      }
    }
}
</script>