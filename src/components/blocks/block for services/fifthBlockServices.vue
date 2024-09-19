<template>
  <div class="text-block">
    <h3 class="block-title-h3">Каталог объектов</h3>
    <div style="margin-bottom: 60px;" class="">
      <object-catalog/>
    </div>
    <div class="d-flex justify-content-center">
      <router-link to="/buildings-page">
        <custom-button
            :text="'Перейти в каталог'"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import customButton from "../../custom elements/customButton.vue";
import ObjectCatalog from "./objectCatalog.vue";

export default {
  components: {ObjectCatalog, customButton}

}
</script>

<style lang="scss" scoped>

</style>