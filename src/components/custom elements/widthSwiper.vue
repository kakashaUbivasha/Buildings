<template>
  <div class="swiper-container position-relative">
    <swiper
        :slides-per-view="1.2"
        :space-between="30"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide class="position-relative" v-for="(image, index) in images" :key="index">
        <img :class="{'img-bb':image.text}" :src="image.image" :alt="`Slide ${index + 1}`" />
        <div v-if="image.text" class="position-absolute bottom-5 start-5 d-flex flex-column gap-2">
          <div class="d-flex gap-1">
            <span class="bubble">
            {{image.bubble1}}
            </span>
            <span class="bubble">
            {{image.bubble2}}
            </span>
          </div>
          <span class="text">{{image.text}}</span>
        </div>
      </swiper-slide>
    </swiper>
    <div class="text-black arrows2 position-absolute">
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
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: Array,
      required: false,
    }
  },
  setup() {
    const swiperInstance = ref(null);

    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };

    const onSlideChange = () => {
      console.log('slide changed');
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
      onSwiper,
      onSlideChange,
      slideNext,
      slidePrev,
    };
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  padding: 20px 0;
}

.swiper-slide img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.swiper-buttons {
  display: flex;
  justify-content: center;
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
  right: 0;
  top: -90px;
}
.bubble{
  padding: 8px 20px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 100px;
  font-size: 18px;
  font-weight: 500;
  color: white;
}
.text{
  color: white;
  font-size: 35px;
  text-align: start;
}
.img-bb{
  filter: brightness(70%);
}
</style>