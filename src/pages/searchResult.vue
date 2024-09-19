<template>
  <div style="min-height: 100vh" class="main-wrapper mt-60">
    <h3 class="block-title-h3 mb-0">Результаты поиска</h3>
    <p style="color: #858585" class="text-start">Результаты по запросу <span style="color: #E1AF93">«{{ $route.query.q }}»</span></p>
    <ul class="mt-5" v-if="getCurrentUser.length">
      <li v-for="result in getCurrentUser" :key="result.item.id">
        <router-link :to="result.item.path">{{ result.item.title }}</router-link>
      </li>
    </ul>
    <p class="none-search" v-else>Результатов не найдено.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getCurrentUser'])
  }
}
</script>
<style lang="scss" scoped>
li{
  text-align: start;
  width: 100%;
  padding: 20px 0;
  font-size: 30px;
  line-height: 36px;
}
li:hover{
  background: #F7F7F7;
}
.mt-60{
  margin-top: 60px;
}
.none-search{
  padding-top: 10%;
  font-size: 40px;
  font-weight: 500;
}
</style>