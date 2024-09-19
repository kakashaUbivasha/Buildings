<template>
    <div class=" position-relative" id="#">
      <img style="filter: brightness(70%)" class="w-100" src="/services.jfif"  alt="">
    </div>
  <div class="main-wrapper position-absolute top-25 start-20 text-white">
    <h3 class="block-title-h3 text-center mb-0">Жилые решения для вашего будущего</h3>
    <p  class="text-white">Найди свой идеальный дом с нами</p>
    <div class="d-flex justify-content-between gap-0 mt-5 main position-relative">
      <router-link to="/buying">
        <button
            :class="(this.$route.path==='/buying') ? 'is-active' : 'is-unactive'"
        >
          Купить</button>
      </router-link>

      <form-for-services v-if="this.$route.path==='/buying'" :text="'Показать'"/>
      <router-link to="/rent-an">
        <button
            :class="(this.$route.path==='/rent-an') ? 'is-active' : 'is-unactive'"
        >
          Снять</button>
      </router-link>
      <form-for-services v-if="this.$route.path==='/rent-an'" :text="'Показать'"/>
      <router-link to="/sell">
        <button
            :class="(this.$route.path==='/sell') ? 'is-active' : 'is-unactive'">
          Продать</button>
      </router-link>
      <form-for-services v-if="this.$route.path==='/sell'"/>
      <router-link to="/rent-out">
        <button
          :class="(this.$route.path==='/rent-out') ? 'is-active' : 'is-unactive'"
      >
        Сдать</button>
      </router-link>

      <form-for-services v-if="this.$route.path==='/rent-out'"/>
      <router-link to="/evaluate">
        <button
            :class="(this.$route.path==='/evaluate') ? 'is-active' : 'is-unactive'"
        >
          Оценить</button>
      </router-link>
      <form-for-services v-if="this.$route.path==='/evaluate'"/>
    </div>
  </div>
</template>

<script>
import CustomButton from "../../custom elements/customButton.vue";
import FormForServices from "./formForServices.vue";

export default {
  components: {FormForServices, CustomButton},
}
</script>

<style lang="scss" scoped>
.is-active {
  height: 49px;
  padding: 16px 100px;
  background: white;
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 500;
  line-height: 24.57px;
}


.is-unactive {
  width: 223px;
  height: 49px;
  padding: 16px 12px;
  color: white;
  background: transparent;
  font-size: 17px;
  font-weight: 500;
  line-height: 24.57px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main{
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 4px 4px;
  max-width: 85%;
  margin-left: 5%;
}
.start-20{
  left: 13%;
}
img{
  height: 100vh;
}
@media (max-width: 1700px) {
  .start-20{
    left: 8%;
  }
  .main{
    max-width: 80%;
  }
}
</style>