<template>
  <div>
  <div v-if="isActive" class="">
    <custom-button
    :text="text"
    />
  </div>
    <div v-else class="">
      <ligth-custom-button>
        <p>{{text}}</p>
      </ligth-custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "./customButton.vue";
import LigthCustomButton from "./ligthCustomButton.vue";

export default {
  components: {LigthCustomButton, CustomButton},
  props:{
    isActive:{
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>