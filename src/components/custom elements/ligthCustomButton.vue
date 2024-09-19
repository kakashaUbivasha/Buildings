<template>
  <div>
    <button class="btn-custom"  @click="handleClick"><slot></slot></button>
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
  border: 1px solid #EAEAEA;
  color: #333333;
  background: transparent;
  font-size: 17px;
  font-weight: 500;
  line-height: 24.57px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-custom:hover{
  background: #E1AF93;
  border-color: #E1AF93;
}
.btn-custom:active{
  background: #B48C76;
  border-color: #B48C76;
}
.text{
  font-size: 17px;
  font-weight: 600;
  line-height: 24.57px;
}
</style>