<template>
  <div class="grid-rows3 bg-white">
    <img style="width: 420px" :src="imageSrc" alt="">
    <div class="text-start px-3">
      <h4 class="title">{{title}}</h4>
      <span class="text">
        {{text}}
      </span>
    </div>
    <div class="d-flex justify-content-between pad">
      <custom-button
      :text="'Подробнее'"
      />
      <div class="arrows">
        <span class="arrow-left pointer"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6 1.5L1.59998 10L10.6 18.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
        <span class="arrow-right pointer"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L9.75 10L1 18.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
      </div>
    </div>

  </div>
</template>

<script>
import CustomButton from "./custom elements/customButton.vue";

export default {
  components: {CustomButton},
  props:{
    imageSrc:{
      type: String,
      required: true
    },
    title:{
      type: String,
      required: true
    },
    text:{
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-size: 30px;
  font-weight: 500;
  padding-bottom: 12px;
}
.text{
  font-size: 18px;
  color: #858585;
}
.grid-rows3{
  width: 420px;
  height: 609px;
  display: grid;
  grid-template-rows: repeat(3, 1fr) ;
  row-gap: 20px;
}
.arrows{
  padding-top: 0.5em;
}
.arrow-left{
  margin-right: 32px;
}
.pad{
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 1em;
}
</style>