<template>
  <div class="d-flex align-items-center gap-50">
    <div class="position-absolute top-5 end-2 border-coffee border-2 rounded-5 p-2">
      <router-link class="text-black d-flex" to="/">
        <span class="material-symbols-outlined">arrow_back</span>
        <p>На главную</p>
      </router-link>
    </div>
    <img class="h-full w-50" src="" alt="">
    <form @submit.prevent="signup">
      <div class="p-5 border-coffee">
        <h2 class="mb-4 text-italic">Quick job</h2>
        <CustomInput
            placeholder="Введите почту"
            :is-email="true"
            v-model="user.username"
        />
        <CustomInput
            placeholder="Введите пароль"
            type="password"
            v-model="user.password"
            :is-password="true"
        />
        <CustomInput
            placeholder="Подтвердите пароль"
            type="password"
            :is-password="true"
            v-model="user.confirm_password"
            :error="error"
        />
        <button type="submit" class="btn btn-primary mt-4 p-2 w-btn">Зарегистрироваться</button>
      </div>
      <div class="p-4 border-coffee mt-4">
        <p>У вас уже есть аккаунт? <router-link class="text-primary" to="/authorization">Войти</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
import CustomInput from "../../components/custom elements/CustomInput.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: { CustomInput },
  data() {
    return {
      error: '',
      user: {
        username: '',
        password: '',
        confirm_password: ''
      }
    };
  },
  computed:{
    ...mapGetters(['getAuthError'])
  },
  methods: {
    ...mapActions(['register']),
    signup() {
      if(this.user.username === '' ||this.user.password === '' || this.user.confirm_password === ''){
        this.error = 'Заполните пустые поля'
      }
      if(this.user.password!==this.user.confirm_password){
        this.error = 'Пароли не совпадают'
      }
      this.register(this.user)
    }
  }
};
</script>

<style lang="scss" scoped>
.gap-50 {
  gap: 300px;
}
.h-full {
  height: 100vh;
}
.text-italic {
  font-family: Forte;
}
</style>
