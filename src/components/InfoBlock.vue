<template>
  <div>
    <div class="container mt-5 fs-5">
      <div class="row" :class="{ 'flex-row-reverse': imageRight }">
        <div class="col-lg container2"
             :data-aos="imageRight ? 'fade-left' : 'fade-right'"
             data-aos-duration="1000"
        >
          <div v-html="textBlock"></div>
        </div>
        <div class="col-sm"
             :data-aos="imageRight ? 'fade-right' : 'fade-left'"
             data-aos-duration="1000"
             data-aos-delay="500">
          <img class="w-75" :src="imgSrc" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textBlock: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    imageRight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>