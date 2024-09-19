<!-- ExpandableSection.vue -->
<template>
  <div class="expandable-section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
      <button @click="toggleContent" class="toggle-btn">
        <span class="arrow-left" v-if="!isExpanded">
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1L9 8.5L16.5 0.999999" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </span>
        <span class="arrow-left" v-else>
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 9L9 1.5L1.5 9" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </span>
      </button>
    </div>
    <transition name="fade">
      <div v-if="isExpanded" class="content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleContent() {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<style scoped>
.expandable-section {
  border-bottom: 1px solid #ddd;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.toggle-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.content {
  padding: 1rem;
}
.title{
  font-size: 30px;
  font-weight: 500;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.arrow-left{
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 51px;
  width: 51px;
  border: 1px solid #333333;
  border-radius: 50%;
}
</style>