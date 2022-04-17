<template>
  <div class="card">
    <h1>Adorno: {{ adorno }}</h1>
    <h1>Price: {{ price }}</h1>
    <h1>Inventory {{ inventory  }}</h1>
    <img :src="image" alt="adorno" height="100">
  </div>
</template>

<script>
export default {
  name: 'AdornoDisplay',
  props: {
    adorno: String,
    price: String,
    inventory: String,
    image: String
  }
}
</script>