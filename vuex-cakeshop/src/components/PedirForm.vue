<template>
    <div class="form-box">
            <h2>¡Pida Ya!</h2>
            <form action="" id="order-form" method="post">
                <div class="form-input">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" placeholder="nombre">
                </div>
                
                <div class="form-input">
                    <label for="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" maxlength="10" placeholder="telefono">
                </div>

                <div class="form-input">
                    <label for="correo">Correo Electrónico:</label>
                    <input type="email" id="correo" placeholder="correo">
                </div>

                <div class="form-input">
                    <label for="descripcion">Descripción del pastel:</label>
                    <textarea name="descripcion" id="descripcion" cols="30" rows="10"  placeholder="Escribe descripcion general del pastel"></textarea>
                </div>

                <div class="form-input">
                    <label for="select-sabores">Selecciona Sabores para el pastel</label>
                    <select name="select-sabores" id="select-sabores" multiple>
                        <option value="Chocolate" label="Chocolate"></option>
                        <option value="Vainilla" label="Vainilla"></option>
                    </select>
                </div>

                <div class="form-input">
                    <label for="select-adornos">Selecciona adornos para el pastel</label>
                    <select name="select-adornos" id="select-adornos" multiple>
                        <option value="Hershys" label="Hershys"></option>
                        <option value="Coco" label="Coco"></option>
                        <option value="Chispas" label="Chispas"></option>
                    </select>
                </div>
                
                <input type="button" id="submit" class="submit-button" name="submit" value="¡Mandar Pedido!" onclick="alert('Pedido Mandado!');">
            </form>
        </div>
</template>

<script>
export default {
  name: 'PedirForm',
  props: {
  }
}
</script>