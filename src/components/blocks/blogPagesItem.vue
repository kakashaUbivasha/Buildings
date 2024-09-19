<template>
  <div class="grid-container">
    <div v-for="(image,index) in images" :class="`grid-item-${index}`">
      <div class="text-white text-start position-relative" :key="index">
        <img :class="`item-${index}`" :src="image.imageSrc" alt="">
        <p class="position-absolute top-1 start-1 text-white">{{image.date}}</p>
        <p class="d-flex align-items-center position-absolute top-1 end-1 text-white"><span class="material-symbols-outlined text-white">visibility</span>{{image.view}}</p>
        <h4 class="position-absolute bottom-1 start-1 title" :class="`item-${index}`">{{image.title}}</h4>
        <span class="d-flex justify-content-center align-items-center fs-5 position-absolute bottom-5 start-1 text-white">Подробнее <span class="material-symbols-outlined text-white">
arrow_forward
</span></span>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  props:{
    images: {
      type: Array,
      default: ()=> []
    }
  }
}
</script>

<style lang="scss" scoped>
.top-1{
  top: 5%;
}
.start-1{
  left: 5%;
}
.end-1{
  right: 10%;
}
.bottom-1{
  bottom: 18%;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1em;
}
.grid-item-0 {
  grid-row: span 2;
  grid-column: span 2;
}
.title{
  font-size: 35px;
  line-height: 50px;
}
.item-1, .item-2{
  width: 467px;
  height: 290px;
  font-size: 25px !important;
  top: 50%;
}
img{
  filter: brightness(70%);
}
</style>