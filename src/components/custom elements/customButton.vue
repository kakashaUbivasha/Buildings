<template>
  <div>
    <button class="btn-custom"  @click="handleClick"><span class="text">{{text}}</span></button>
  </div>
</template>

<script>
export default {
props:{
  text:{
    type: String,
    default: ''
  },
  typeBtn:{
    type: String
  }
},
  methods:{
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-custom{
  width: 223px;
  height: 49px;
  padding: 16px 12px;
  background: #E1AF93;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-custom:hover{
  background: #EAC7B4;
}
.btn-custom:active{
  background: #B48C76;
}
.text{
  color: white;
  font-size: 17px;
  font-weight: 600;
  line-height: 24.57px;
}
</style>