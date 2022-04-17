<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CakeDisplay
     v-bind:cake="{
      flavor: 'Chocolate',
      price: '100',
      inventory:'100',
      image:'https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg'
    }"
      ></CakeDisplay>

    <AdornoDisplay 
      adorno="Doble Chocolate"
      price="100" 
      inventory="100"
      image="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"
    ></AdornoDisplay>
    

    <PedirForm></PedirForm>
    <ShopDetails></ShopDetails> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CakeDisplay from '@/components/CakeDisplay.vue'
import ShopDetails from '@/components/ShopDetails.vue'
import AdornoDisplay from '@/components/AdornoDisplay.vue'
import PedirForm from '@/components/PedirForm.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CakeDisplay,
    ShopDetails,
    AdornoDisplay,
    PedirForm
  }
}
</script>
