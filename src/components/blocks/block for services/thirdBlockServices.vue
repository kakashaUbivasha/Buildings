<template>
  <div class="d-flex gap-10 main-wrapper">
    <h3 class="block-title-h3 mw687">
      {{title}}
    </h3>
    <div class="d-flex flex-column w-50">
      <enable-section v-for="block in blocks" :title="block.title">
        <p class="text-start wp">{{block.text}}</p>
      </enable-section>
    </div>
  </div>
</template>

<script>
import EnableSection from "../enableSection.vue";

export default {
  components: {EnableSection},
props:{
  title:{
    type: String,
    required: true
  },
  blocks:{
    type: Array,
    required: true
  }
}
}
</script>

<style lang="scss" scoped>
.gap-10{
  gap: 10%;
}
.wp{
  width: 577px;
}
.mw687{
  max-width: 687px;
}
</style>