<template>
  <div>
  <p class="text1">{{text1}}</p>
    <p class="text2">{{text2}}</p>
  </div>
</template>

<script>
export default {
  props:{
    text1:{
      type: String,
      default: ''
    },
    text2:{
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.text1{
  font-size: 24px;
  line-height: 34.68px;
  border-top: 1px solid #EAEAEA;
  border-right: 1px solid #EAEAEA;
  border-bottom: 1px solid #EAEAEA;
}
.text2{
  font-size: 24px;
  line-height: 34.68px;
  border-top: 1px solid #EAEAEA;
  border-left: 1px solid #EAEAEA;
  border-bottom: 1px solid #EAEAEA;
}
.text1::before, .text2::before{
  content: url("/Checkmark.svg");
}
</style>