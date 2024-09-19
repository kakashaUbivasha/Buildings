<template>
  <div id="">
    <a-header/>
  </div>
  <router-view>
  </router-view>
  <div class="w-100">
    <a-footer/>
  </div>

</template>

<script>
import aHeader from './layout/a-header.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AFooter from "./layout/a-footer.vue";
export default {
  components: {AFooter, aHeader},
  computed: {
  },
  mounted() {
    AOS.init();
  }
}

</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Обеспечивает, что высота приложения покрывает всю высоту окна */
}

router-view {
  flex: 1; /* Контент занимает оставшееся пространство */
}

.footer {
  background-color: #f8f9fa; /* Цвет фона футера */
  padding: 1rem 0; /* Вертикальные отступы */
  text-align: center; /* Выравнивание текста по центру */
  border-top: 1px solid #dee2e6; /* Линия сверху (по желанию) */
}
</style>
