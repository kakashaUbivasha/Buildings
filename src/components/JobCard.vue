<template>
  <div class="card position-relative w-800 p-10">
    <div class="card-body">
      <div class="position-absolute top-0 start-0 ms-3 text-start">
        <h2 class="card-title">{{jobs.title}}</h2>
        <p class="card-text">Зарплата: {{jobs.salary}}</p>
        <p class="card-text">Опыт работы: {{jobs.experience}}</p>
        <p class="card-text">{{jobs.company}}</p>
      </div>
      <div class="position-absolute bottom-0 start-50 translate-middle-x w-100 p-3">
        <a class="btn btn-primary w-90" href="#">Подробнее</a>
      </div>
      <span class="material-symbols-outlined position-absolute end-5 top-15 pointer">
      favorite
    </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    jobs:{
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.p-10{
  padding: 5%;
}
.w-90{
  width: 95%;
}
</style>