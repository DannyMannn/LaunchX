<template>
  <div class="card">
    <h1>Cake Flavor: {{ cake.flavor }}</h1>
    <h1>Price: {{ cake.price }}</h1>
    <h1>Inventory {{ cake.inventory  }}</h1>
    <img :src="cake.image" alt="cake" height="100">
  </div>
</template>

<script>
export default {
  name: 'CakeDisplay',
  props: {
    cake: Object
  }
}
</script>