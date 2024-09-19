<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <span style="color: #B3B3B3; font-size: 18px">{{date}}</span>
      <h4 class="block-title-h5 mb-3">{{title}}</h4>
      <p class="mb-3">{{text}}</p>
      <button style="background: none" class="position-absolute top-1 end-0" @click="closeModal"><span style="color: #B3B3B3" class="material-symbols-outlined">
close
</span></button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    text:{
      type: String,
      default: ''
    },
    title:{
      type: String,
      default: ''
    },
    date:{
      type: String,
      default: ''
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal(){
      this.$emit('closeModal')
    }
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Затемнение фона */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  width: 600px;
  height: 400px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
}


.block-title-h5{
  font-size: 25px;
  font-weight: 500;
}
.top-1{
  top: 2%;
}
</style>