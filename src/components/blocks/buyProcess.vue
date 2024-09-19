<template>
  <div class="text-block">
    <h3 class="block-title-h3 mb-70">{{blockTitle}}</h3>
    <div class="progress-container">
      <div class="progressive">
        <div v-for="item in arr" class="step d-flex flex-column mb-4">
        <span class="circle">{{item.id}}</span>
        <div class="text-start grid-custom">
          <h4 class="title mb-2">{{item.title}}</h4>
          <p style="color: #858585">{{item.text}}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    arr:{
      type: Array,
      default: () => []
    },
    blockTitle: ''
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 500;
  font-size: 28px;
}

.circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 102px;
  height: 102px;
  border-radius: 50%;
  background-color: #E1AF93;
  color: white;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 35px;
  position: relative;
  z-index: 2;
}

.progress-container {
  position: relative;
  padding-top: 20px; /* Добавляем отступ сверху для линии */
}

.progress-line {
  position: absolute;
  top: 10px; /* Позиционируем линию */
  left: 0;
  right: 0;
  height: 1px;
  background-color: #E1AF93;
  z-index: 1;
}

.progressive {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 72px;
  position: relative;
  margin-top: 45px;
}

.step {
  position: relative;
  flex: 1;
  padding-bottom: 90px;
}
.step::before {
  content: '';
  position: absolute;
  top: -65px; /* Позиционируем маленький круг над большим */
  left: 17%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background-color: #E1AF93;
  border-radius: 50%;
  z-index: 2;
}
.step::after{
  content: '';
  position: absolute;
  top: -55px;
  left: 0;
  right: 0;
  height: 1px;
  width: 20vw;
  background-color: #E1AF93;
  z-index: 1;
}
.grid-custom {
  display: grid;
  grid-template-rows: repeat(2, auto);
}
.mb-03{
  margin-bottom: 1.45em;
}
.mb-70{
  margin-bottom: 70px;
}
</style>