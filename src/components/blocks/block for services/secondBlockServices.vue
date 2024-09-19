<template>
  <div class="main-wrapper">
    <div class="w-75">
      <h3 class="block-title-h3 mb-2">{{title}}</h3>
      <p class="pb-50" style="color: #858585; text-align: start">{{text}}</p>
    </div>

    <div class="grid3 gap-1">
      <img :src="img1" alt="">
      <div class="d-flex flex-column gap-1">
        <img style="width: 467px; height: 260px; margin-bottom: 1em;" :src="img2" alt="">
        <img style="width: 467px; height: 260px;" :src="img4" alt="">
      </div>
      <img :src="img3" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      required: true
    },
    text:{
      type: String,
      required: true
    },
    img1:{
      type: String,
      required: true
    },
    img2:{
      type: String,
      required: true
    },
    img3:{
      type: String,
      required: true
    },
    img4 :{
      type: String,
      required: false
    },

  }
}
</script>

<style lang="scss" scoped>
.pb-50{
  padding-bottom: 3em;
}
</style>