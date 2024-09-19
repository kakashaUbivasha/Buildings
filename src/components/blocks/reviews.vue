<template>
  <div>
    <h3 class="block-title-h3">Отзывы покупателей</h3>
    <swiper-for-rewies v-if="isNeed" :slides="comments">
      <template v-slot:default="{ slide }">
        <review
            :title="slide.title"
            :text="slide.text"
            :date="slide.data"
            :is-comment="true"
        />
      </template>
    </swiper-for-rewies>
    <div v-else class="grid3 gap-3">
      <div v-for="comment in comments">
        <review
            :title="comment.title"
            :text="comment.text"
            :date="comment.date"
            :is-comment="true"
        />
      </div>
    </div>

  </div>
</template>

<script>
import SwiperForRewies from "../custom elements/swiperForRewies.vue";
import Review from "./review.vue";
import CustomButton from "../custom elements/customButton.vue";
import ModalWindow from "./modalWindow.vue";

export default {
  components: {ModalWindow, CustomButton, Review, SwiperForRewies},
  props:{
    isNeed:{
      type: Boolean,
      default: false
    },
    comments:{
      type: Array,
      default: ()=>[]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>