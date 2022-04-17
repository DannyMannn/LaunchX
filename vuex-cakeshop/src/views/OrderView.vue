<template>
  <div class="home">
      <NewCakeForm @cake-submitted="addCake"></NewCakeForm>
  </div>
</template>

<script>
// @ is an alias to /src
import NewCakeForm from '@/components/NewCakeForm.vue'

export default {
  name: 'OrderView',
  components: {
    NewCakeForm,
  },
  methods: {
    addCake(){
      this.$store.dispatch("addCake", cake);
      console.log("!yes")
    }
  }
}
</script>
