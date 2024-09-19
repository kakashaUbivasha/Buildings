<template>
  <div class="custom-select no-select w-46" ref="select">
    <div class="select-trigger" @click="toggleDropdown" :class="{ 'open': isOpen }">
      <span :style="{ color: selected ? '#000000' : '#B3B3B3' }">
        {{ selected || 'Выбрать' }}
      </span>
      <span class="arrow" :class="{ 'open': isOpen }">&#9660;</span>
    </div>
    <ul class="options" v-if="isOpen">
      <li v-for="option in options" :key="option" @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      selected: null
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selected = option;
      this.isOpen = false;
      this.$emit('input', option);
    },
    handleOutsideClick(event) {
      if (this.$refs.select && !this.$refs.select.contains(event.target)) {
        this.isOpen = false;
      }
    }
  }
}
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 438px;
  font-family: Arial, sans-serif;
}

.select-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #ffffff;
  border: 1px solid #B3B3B3;
  cursor: pointer;
}

.arrow {
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

.options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #ccc;
  border-top: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
}

.options li {
  padding: 10px;
  cursor: pointer;
}

.options li:hover {
  background-color: #f1f1f1;
}
.w-46{
  width: 92%;
}
</style>