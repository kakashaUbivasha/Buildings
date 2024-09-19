<template>
  <div class="grid-custom pb-5 border-bottom mb-5 text-start">
  <h5 class="title">{{title}}</h5>
    <div class=""></div>
    <div class="d-flex flex-column gap-1 text-start">
      <p>{{text1}}</p>
      <p>{{text2}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      required: true
    },
    text1: {
      type: String,
      required: true
    },
    text2: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.grid-custom{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.title{
  font-size: 25px;
  font-weight: 500;
}
</style>