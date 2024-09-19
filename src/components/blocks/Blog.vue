<template>
  <div class="text-block" style="margin-bottom: 250px">
  <h3 class="block-title-h3 mb-30 text-start">Блог</h3>
    <div class="d-flex justify-content-between gap-20 mb-60">
      <blog-item
          v-for="(card, index) in cards"
          :key="index"
          :img-src="card.imageSrc"
          :text="card.text"
          :date="card.data"
          :views="card.views"
      />
    </div>
    <router-link class="d-flex justify-content-center" to="/blog">
      <custom-button
        :text="'Все статьи'"
      />
    </router-link>

  </div>
</template>

<script>
import BlogItem from "./blogItem.vue";
import CustomButton from "../custom elements/customButton.vue";

export default {
  components: {CustomButton, BlogItem},
data(){
  return{
    cards: [
      {id: 1, text: 'Тенденции и прогнозы рынка недвижимости на 2024 год', data: '31.07.2024', views: '899', imageSrc: '/blog1.jpg'},
      {id: 2, text: 'Лучшие районы для инвестиций в недвижимость', data: '31.07.2024', views: '899', imageSrc: '/blog2.jpg'},
      {id: 3, text: 'Топ-10 новых жилых комплексов', data: '31.07.2024', views: '899', imageSrc: '/blog3.jpg'},
    ]
  }
}
}
</script>

<style lang="scss" scoped>
.mb-30{
  margin-bottom: 30px;
}
.gap-20{
  gap: 20px;
}
</style>