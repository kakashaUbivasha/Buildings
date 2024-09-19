<template>
  <div class="swiper-container">
    <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :modules="modules"
        @swiper="onSwiper"
        class="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="position-relative">
          <img :class="classImg" :src="slide.image_url" alt="" style="filter: brightness(80%);">
          <div v-if="slide.name" class="position-absolute top-5 end-5 pointer">
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6924 21.4829L11.6913 21.4819C8.45781 18.5498 5.8343 16.1662 4.01039 13.9347C2.19472 11.7134 1.25 9.73468 1.25 7.625C1.25 4.17761 3.93832 1.5 7.375 1.5C9.32327 1.5 11.2056 2.41084 12.4309 3.83846L13 4.50157L13.5691 3.83846C14.7944 2.41084 16.6767 1.5 18.625 1.5C22.0617 1.5 24.75 4.17761 24.75 7.625C24.75 9.73468 23.8053 11.7134 21.9896 13.9347C20.1657 16.1662 17.5422 18.5498 14.3087 21.4819L14.3076 21.4829L13 22.6733L11.6924 21.4829Z" stroke="white" stroke-width="1.5"/>
            </svg>
          </div>
          <div class="position-absolute bottom-24 start-24 text-start text-white">
            <h3 v-if="slide.name" class="title">{{ slide.name }}</h3>
            <p v-if="slide.cost" style="color: white; font-weight: 500">от ${{ slide.cost }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div v-if="slides.length > 3" class="text-black arrows2 position-absolute">
        <span @click="slidePrev" class="arrow-left_black pointer"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.6 1.5L1.59998 10L10.6 18.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </span>
      <span @click="slideNext" class="arrow-right_black pointer"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L9.75 10L1 18.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    classImg: {
      type: String,
      required: false
    }
  },
  setup() {
    const swiperInstance = ref(null);

    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };

    const slideNext = () => {
      if (swiperInstance.value) {
        swiperInstance.value.slideNext();
      }
    };

    const slidePrev = () => {
      if (swiperInstance.value) {
        swiperInstance.value.slidePrev();
      }
    };

    return {
      modules: [Navigation],
      onSwiper,
      slideNext,
      slidePrev,
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.bottom-24 {
  bottom: 24px;
}

.start-24 {
  left: 24px;
}

.title {
  font-size: 35px;
  font-weight: 600;
  line-height: 50.58px;
}

.swiper-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.arrow-left_black{
  padding-right: 31px;
  padding-left: 30.25px;
  padding-top: 26.5px;
  padding-bottom: 26.5px;
  border: 1px solid #333333;
  border-radius: 100%;
  margin-left: 8px;
}
.arrow-right_black{
  padding-right: 31px;
  padding-left: 30.25px;
  padding-top: 26.5px;
  padding-bottom: 26.5px;
  border: 1px solid #333333;
  border-radius: 100%;
  margin-left: 8px;
}
.arrows2{
  top: -95px;
  right: 0;
}
</style>