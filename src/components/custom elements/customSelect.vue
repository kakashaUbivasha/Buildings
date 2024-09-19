<template>
  <div class="custom-select" :class="{ 'is-open': isOpen }" ref="selectContainer">
    <div class="select-header" @click="toggleSelect">
      <p>{{ selectedOption ? selectedOption.label : title }}</p>
      <div class="arrow-placeholder"><span class="arrow-left" v-if="!isOpen">
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1L9 8.5L16.5 0.999999" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </span>
        <span class="arrow-left" v-else>
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 9L9 1.5L1.5 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </span></div>
    </div>
    <div v-if="isOpen" class="options-container">
      <template v-if="!isRange">
        <div
            v-for="option in options"
            :key="option.value"
            class="option"
            @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </template>
      <template v-else>
        <div class="range-container">
          <MultiRangeSlider
              :min="minPossibleValue"
              :max="maxPossibleValue"
              :step="1"
              :minValue="rangeMin"
              :maxValue="rangeMax"
              @input="updateRange"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import MultiRangeSlider from "multi-range-slider-vue";

export default {
  components: {
    MultiRangeSlider
  },
  props: {
    title: {
      type: String,
      default: 'Select an option'
    },
    options: {
      type: Array,
      default: () => []
    },
    isRange: {
      type: Boolean,
      default: false
    },
    minPossibleValue: {
      type: Number,
      default: 0
    },
    maxPossibleValue: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null,
      rangeMin: this.minPossibleValue,
      rangeMax: this.maxPossibleValue
    }
  },
  methods: {
    toggleSelect() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit('option-selected', option);
    },
    handleOutsideClick(event) {
      if (this.isOpen && !this.$refs.selectContainer.contains(event.target)) {
        this.isOpen = false;
      }
    },
    updateRange(range) {
      this.rangeMin = range.minValue;
      this.rangeMax = range.maxValue;
      this.$emit('range-changed', { min: this.rangeMin, max: this.rangeMax });
    },
    resetSelect() {
      this.selectedOption = null;
      this.rangeMin = this.minPossibleValue;
      this.rangeMax = this.maxPossibleValue;
      this.$emit('option-selected', null);
      this.$emit('range-changed', { min: this.rangeMin, max: this.rangeMax });
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
}
</script>

<style scoped>
.custom-select {
  position: relative;
}
.select-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #EDF3F5;
  cursor: pointer;
  user-select: none;
}
.is-open .select-header {
  background-color: #E1AF93;
}
.is-open p{
  color: white;
}
.arrow-placeholder {
  width: 20px;
  height: 20px;
}

.options-container {
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  max-height: 215px;
  width: 350px;
  overflow-y: auto;
  z-index: 1000;
}

/* Стили для полосы прокрутки */
.options-container::-webkit-scrollbar {
  width: 12px; /* Ширина полосы прокрутки */

}

.options-container::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Цвет фона полосы прокрутки */
  border-radius: 10px; /* Радиус скругления трека */
}

.options-container::-webkit-scrollbar-thumb {
  background-color: #E1AF93; /* Цвет ползунка полосы прокрутки */
  border-radius: 10px; /* Радиус скругления ползунка */
  border: 2px solid #f1f1f1; /* Цвет и ширина бордюра вокруг ползунка */
}

.options-container::-webkit-scrollbar-thumb:hover {
  background-color: #d1a074; /* Цвет ползунка при наведении */
}

.option {
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
}

.option:hover {
  background-color: #FCF7F4;
  color: #E1AF93;
}

.range-container {
  padding: 30px;
}

/* Стили для MultiRangeSlider */
:deep(.multi-range-slider) {
  border: none;
  box-shadow: none;
  padding: 10px 0;
}

:deep(.bar-left, .bar-right) {
  box-shadow: none;
  background-color: #E1AF93;
}

:deep(.bar-inner) {
  background-color: #E1AF93;
  border: none;
  box-shadow: none;
}

:deep(.thumb::before) {
  background-color: #E1AF93;
  border: none;
  box-shadow: none;
}

:deep(.thumb:hover::before) {
}

:deep(.caption) {
  display: none;
}

:deep(.ruler) {
  display: none;
}
</style>