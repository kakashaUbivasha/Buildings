<template>
  <div :class="{'h-515': isComment}" class="text-start card-custom position-relative">
    <div class="p-4 ">
      <span v-if="date" class="text">{{date}}</span>
      <h3 :class="{'title1': isComment}" class="title mb-3">{{title}}</h3>
      <div class="d-flex flex-column">
        <span class="text">{{lengthChecked}}</span>
        <span @click="isVisible=true" class="position-absolute bottom-1 d-flex justify-content-center align-items-center gap-1 pointer" style="color: #E1AF93" v-if="isLong">
          Читать полностью <span style="color: #E1AF93" class="material-symbols-outlined">
arrow_forward
</span></span>
      </div>
      <modal-window
          :text="text"
          :title="title"
          :date="date"
          :is-visible="isVisible"
          @closeModal="closeModal"
      />
    </div>
  </div>
</template>

<script>
import ModalWindow from "./modalWindow.vue";

export default {
  components: {ModalWindow},
  props:{
    title:{
      type: String,
      required: true
    },
    text:{
      type: String,
      required: true
    },
    date:{
      type: String,
      required: false
    },
    isComment:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      isLong: false,
      isVisible: false
    }
  },
  computed:{
    lengthChecked(){
      if(this.text.trim().length > 440){
        this.isLong = true
        return  this.text.slice(0,440) + '...'
      }
      return this.text
    }
  },
  methods:{
    closeModal(){
      this.isVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-size: 30px;
  line-height: 36px;
  font-weight: 400;
  max-width: 190px
}
.text{
  font-size: 17px;
  color: #858585;
}
.card-custom{
  border: 1px solid #EAEAEA;
}
.title1{
  font-size: 25px;
  font-weight: 500;
  max-width: 100%;
}
.bottom-1{
  bottom: 5%;
}
.h-515{
  height: 515px;
}
</style>