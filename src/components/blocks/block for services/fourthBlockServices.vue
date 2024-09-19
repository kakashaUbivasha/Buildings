<template>
  <div id="1" class="text-block">
    <h3 class="block-title-h3">Успешные кейсы</h3>
    <width-swiper
        :images="image_for_slider"
        :text="text"
        :bubble1="bubble1"
        :bubble2="bubble2"
    />
  </div>
</template>

<script>
import WidthSwiper from "../../custom elements/widthSwiper.vue";

export default {
  components: {WidthSwiper},
  props:{
    image_for_slider:{
      type: Array,
      required: true
    },
    text:{
      type: String,
      required: true
    },
    bubble1:{
      type: String,
      required: true
    },
    bubble2:{
      type: String,
      required: true
    },
  }

}
</script>

<style lang="scss" scoped>

</style>