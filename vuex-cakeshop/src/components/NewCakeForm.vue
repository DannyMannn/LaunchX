<template>
  <div>
      <h1>Agregar nuevo tipo de pastel</h1>
      <form action="" id="new-cake-form" method="post" @submit.prevent="onSubmit">
                <div class="form-input">
                    <label for="sabor">Sabor:</label>
                    <input type="text" id="sabor" v-model="flavor" name="sabor" placeholder="sabor">
                </div>

                <div class="form-input">
                    <label for="inventario">Inventario:</label>
                    <input type="text" id="inventario" name="inventario" v-model="inventory" placeholder="inventario">
                </div>

                <div class="form-input">
                    <label for="precio">Precio:</label>
                    <input type="text" id="precio" name="precio" v-model="price" placeholder="precio">
                </div>

                <div class="form-input">
                    <label for="imagen">URL de imagen:</label>
                    <input type="text" id="imagen" name="imagen" v-model="image" placeholder="imagen">
                </div>

                <input type="button" id="submit" class="submit-button" name="submit" value="¡Agregar Pastel!" @submit.prevent="onSubmit">
            </form>
  </div>
</template>

<script>
export default {
  name: 'NewCakeView',
  props: {
  },
  data(){
    return {
      flavor:'',
      inventory: '',
      price:'',
      image:''
    }
  },
  methods:{
    onSubmit(){
      let cake = {
        flavor: this.flavor,
        inventory: this.inventory,
        price: this.price,
        image: this.image
      }
      this.$emit('cake-submitted', cake);
      flavor='';
      inventory= '';
      price='';
      image='';
    }
  }
}
</script>