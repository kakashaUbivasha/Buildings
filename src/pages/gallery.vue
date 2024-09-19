<template>
  <div class="text-block mb-250">
  <div class="main-wrapper">
    <h3 class="block-title-h3">Фотогалерея и видеотуры</h3>
    <div class="d-flex gap-3 mb-5 ms-2">
      <button
          @click="setTrueAtIndex(0, null)"
          :class="isActives[0] ? 'is-active' : 'is-unactive'"
      >Все</button>
      <button
          @click="setTrueAtIndex(1, 'photo')"
          :class="isActives[1] ? 'is-active' : 'is-unactive'"
      >Фотографии</button>
      <button
          @click="setTrueAtIndex(2, 'video')"
          :class="isActives[2] ? 'is-active' : 'is-unactive'"
      >Видеотуры</button>
    </div>
    <div class="grid3">
      <div v-for="image in filterImage">
        <img class="mw" :src="image.imgSrc" alt="">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActives: [true, false, false],
      images: [
        {imgSrc: '/photo1.png', category: 'photo'},
        {imgSrc: '/photo2.png', category: 'photo'},
        {imgSrc: '/photo3.jpg', category: 'video'},
        {imgSrc: '/photo4.png', category: 'photo'},
        {imgSrc: '/photo5.jpg', category: 'video'},
        {imgSrc: '/photo6.jpg', category: 'photo'},
        {imgSrc: '/photo7.jpg', category: 'video'},
        {imgSrc: '/photo8.jpg', category: 'photo'},
        {imgSrc: '/photo9.jpg', category: 'photo'},
      ],
      selectedDistrict: null
    }
  },
  computed: {
    filterImage() {
      if (!this.selectedDistrict) return this.images
      return this.images.filter(img => img.category === this.selectedDistrict)
    }
  },
  methods: {
    setTrueAtIndex(index, name) {
      this.isActives = this.isActives.map((_, i) => i === index)
      this.selectedDistrict = name
    }
  }
}
</script>

<style lang="scss" scoped>

.mw {
  max-width: 467px;
  min-height: 320px;
}

.is-active {
  width: 223px;
  height: 49px;
  padding: 16px 12px;
  background: #E1AF93;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
}

.is-active:hover {
  background: #EAC7B4;
}

.is-active:active {
  background: #B48C76;
}

.is-unactive {
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

.is-unactive:hover {
  background: #E1AF93;
  border-color: #E1AF93;
}

.is-unactive:active {
  background: #B48C76;
  border-color: #B48C76;
}
</style>