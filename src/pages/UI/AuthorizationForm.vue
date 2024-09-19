<template>
  <div class="d-flex align-items-center gap-50">
    <div class="position-absolute top-5 end-2 border-coffee border-2 rounded-5 p-2">
      <router-link class="text-black d-flex" to="/">
        <span class="material-symbols-outlined">arrow_back</span>
        <p>На главную</p>
      </router-link>
    </div>
    <img class="h-full w-50" src="" alt="">
    <form @submit.prevent="loginSite">
      <div class="p-5 border-coffee">
        <h2 class="mb-4 text-italic">Quick job</h2>
        <CustomInput
            placeholder="Введите почту"
            :is-email="true"
            v-model="user.username"
        />
        <CustomInput
            placeholder="Введите пароль"
            :is-password="true"
            v-model="user.password"
            :error="error"
        />
        <button type="submit" class="btn w-btn btn-primary mt-4 p-2">Войти</button>
      </div>
      <div class="p-4 border-coffee mt-4">
        <p>У вас ещё нет аккаунта? <router-link class="text-primary" to="/registration">Зарегистрироваться</router-link></p>
      </div>
    </form>

  </div>
</template>

<script>
import CustomInput from "../../components/custom elements/CustomInput.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {CustomInput},
  data() {
    return {
      user:{
        username: '',
        password: ''
      },
      error: ''
    };
  },
  computed:{
    ...mapGetters(['getAuthError'])
  },
  methods:{
    ...mapActions(['login']),
    loginSite(){
      this.login(this.user)
          .then(res=>{
            setTimeout(()=>{this.error = this.getAuthError.error}, 1000)
          })
    }
  }
}
</script>

<style lang="scss" scoped>
.gap-50{
  gap: 300px;
}
.text-italic{
  font-family: Forte;
}
</style>