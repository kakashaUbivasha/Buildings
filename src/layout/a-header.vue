<template>
  <div class="no-select d-flex justify-content-between w-100 py-240 head align-items-center">
      <router-link to="/">
        <div class="d-flex gap-1 position-relative pointer">
        <img src="/public/main_page_logo.svg" alt="">
        <div class="d-flex flex-column text-start justify-content-center align-items-center" >
          <h1 class="logo-text">RMC DE LUXE</h1>
          <p class="under-label-text">real estate</p>
        </div>
        </div>
      </router-link>
    <div class="mt-2 d-flex gap-5 align-items-center justify-content-center">
      <div class="dropdown  mb-1">
        <p class="d-flex align-items-center justify-content-center gap-1 no-select" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" >
          Услуги<span class="material-symbols-outlined mt-1">
keyboard_arrow_down
</span>
        </p>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><router-link to="buying" class="dropdown-item">Купить</router-link></li>
          <li><router-link to="rent-an" class="dropdown-item">Арендовать</router-link></li>
          <li><router-link to="sell" class="dropdown-item">Продать</router-link></li>
          <li><router-link to="evaluate" class="dropdown-item">Оценить</router-link></li>
        </ul>
      </div>
      <p class="pointer">
        О нас
      </p>
      <p class="pointer"><router-link to="/blog">Блог</router-link></p>
      <p class="pointer">Контакты</p>
    </div>
    <div class="">
    <ul class="d-flex gap-3 mt-4">
        <li @click="isVisible=!isVisible" class="icon-1">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6541 16.5951L20.5836 19.5231C20.7202 19.6646 20.7958 19.854 20.7941 20.0507C20.7924 20.2473 20.7135 20.4354 20.5745 20.5745C20.4354 20.7135 20.2473 20.7924 20.0507 20.7941C19.854 20.7958 19.6646 20.7202 19.5231 20.5836L16.5936 17.6541C14.6793 19.2943 12.204 20.1292 9.68734 19.9838C7.17065 19.8383 4.80812 18.7237 3.0955 16.8739C1.38287 15.024 0.453292 12.5828 0.501808 10.0624C0.550324 7.54193 1.57317 5.13825 3.35571 3.35571C5.13825 1.57317 7.54193 0.550324 10.0624 0.501808C12.5828 0.453292 15.024 1.38287 16.8739 3.0955C18.7237 4.80812 19.8383 7.17065 19.9838 9.68734C20.1292 12.204 19.2943 14.6793 17.6541 16.5936V16.5951ZM10.2501 18.5001C12.4382 18.5001 14.5366 17.6309 16.0838 16.0838C17.6309 14.5366 18.5001 12.4382 18.5001 10.2501C18.5001 8.06209 17.6309 5.96367 16.0838 4.41649C14.5366 2.86932 12.4382 2.00012 10.2501 2.00012C8.06209 2.00012 5.96367 2.86932 4.41649 4.41649C2.86932 5.96367 2.00012 8.06209 2.00012 10.2501C2.00012 12.4382 2.86932 14.5366 4.41649 16.0838C5.96367 17.6309 8.06209 18.5001 10.2501 18.5001Z" fill="#333333"/>
          </svg>
        </li>
      <li class="icon-1">
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.05489 16.4754L9.05381 16.4744C6.46406 14.126 4.37492 12.2274 2.92445 10.4529C1.48222 8.68839 0.75 7.13843 0.75 5.5C0.75 2.82511 2.83332 0.75 5.5 0.75C7.01327 0.75 8.4781 1.45834 9.43088 2.56846L10 3.23157L10.5691 2.56846C11.5219 1.45834 12.9867 0.75 14.5 0.75C17.1667 0.75 19.25 2.82511 19.25 5.5C19.25 7.13843 18.5178 8.68839 17.0756 10.4529C15.6251 12.2274 13.5359 14.126 10.9462 16.4744L10.9451 16.4754L10 17.3358L9.05489 16.4754Z" stroke="#333333" stroke-width="1.5"/>
      </svg>
      </li>
      <li class="icon-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6673 11.3711L12.0451 9.99278C12.2307 9.80944 12.4654 9.68394 12.7209 9.63151C12.9764 9.57908 13.2416 9.60198 13.4844 9.69743L15.1635 10.3681C15.4088 10.4677 15.6191 10.6377 15.768 10.8567C15.9169 11.0758 15.9976 11.3339 16 11.5988V14.6753C15.9986 14.8555 15.9607 15.0335 15.8887 15.1986C15.8167 15.3638 15.712 15.5126 15.581 15.6362C15.45 15.7598 15.2953 15.8556 15.1263 15.9178C14.9573 15.9801 14.7775 16.0074 14.5976 15.9983C2.83136 15.2661 0.457192 5.29791 0.00819117 1.48294C-0.0126518 1.2956 0.00639187 1.10596 0.0640691 0.926515C0.121746 0.747064 0.21675 0.581865 0.34283 0.441784C0.468911 0.301703 0.62321 0.189915 0.795577 0.113775C0.967944 0.0376351 1.15447 -0.00113167 1.34289 2.51474e-05H4.31368C4.57878 0.000810161 4.83758 0.0809193 5.0568 0.230049C5.27602 0.379178 5.44563 0.590508 5.54382 0.836857L6.21424 2.51667C6.31281 2.75854 6.33796 3.02409 6.28654 3.28017C6.23513 3.53624 6.10944 3.77149 5.92516 3.95652L4.5474 5.33483C4.5474 5.33483 5.34084 10.7065 10.6673 11.3711Z" fill="white"/>
      </svg>
      </li>
      <li><div class="dropdown1  mb-1">
        <p class="d-flex align-items-center justify-content-center gap-1 no-select" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" >
          Ru<span class="material-symbols-outlined mt-1">
keyboard_arrow_down
</span>
        </p>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">Ru</a></li>
          <li><a class="dropdown-item" href="#">En</a></li>
        </ul>
      </div></li>
    </ul>
    </div>
    <div v-if="isVisible" class="search-overlay"></div>
    <div v-if="isVisible" class="position-absolute top-20 start-40 d-flex justify-content-center align-items-center gap-3" style="z-index: 1000">
      <input class="input" v-model="search" type="text" @keyup.enter="performSearch" placeholder="Введите поисковый запрос...">
      <div class="position-absolute end-10 pointer" @click="performSearch">
        <svg width="21" height="21" viewBox="0 0 21 21" stroke="#E1AF93" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.6541 16.5951L20.5836 19.5231C20.7202 19.6646 20.7958 19.854 20.7941 20.0507C20.7924 20.2473 20.7135 20.4354 20.5745 20.5745C20.4354 20.7135 20.2473 20.7924 20.0507 20.7941C19.854 20.7958 19.6646 20.7202 19.5231 20.5836L16.5936 17.6541C14.6793 19.2943 12.204 20.1292 9.68734 19.9838C7.17065 19.8383 4.80812 18.7237 3.0955 16.8739C1.38287 15.024 0.453292 12.5828 0.501808 10.0624C0.550324 7.54193 1.57317 5.13825 3.35571 3.35571C5.13825 1.57317 7.54193 0.550324 10.0624 0.501808C12.5828 0.453292 15.024 1.38287 16.8739 3.0955C18.7237 4.80812 19.8383 7.17065 19.9838 9.68734C20.1292 12.204 19.2943 14.6793 17.6541 16.5936V16.5951ZM10.2501 18.5001C12.4382 18.5001 14.5366 17.6309 16.0838 16.0838C17.6309 14.5366 18.5001 12.4382 18.5001 10.2501C18.5001 8.06209 17.6309 5.96367 16.0838 4.41649C14.5366 2.86932 12.4382 2.00012 10.2501 2.00012C8.06209 2.00012 5.96367 2.86932 4.41649 4.41649C2.86932 5.96367 2.00012 8.06209 2.00012 10.2501C2.00012 12.4382 2.86932 14.5366 4.41649 16.0838C5.96367 17.6309 8.06209 18.5001 10.2501 18.5001Z" fill="#E1AF93"/>
        </svg>
      </div>

      <span @click="isVisible=false" class="material-symbols-outlined pointer text-white">
        close
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      search: '',
      isVisible: false,
    }
  },
  methods: {
    ...mapActions(['setSearchResults']),
    performSearch() {
      if (this.search) {
        this.isVisible = false
        const results = this.$fuse.search(this.search)
        this.setSearchResults(results)
        this.$router.push({ name: 'search-results', query: { q: this.search } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 991.98px) {
  .navbar-collapse {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    background-color: #f8f9fa;
    padding: 1rem;
    z-index: 1000;
  }

  .dropdown-menu {
    position: static !important;
    width: 100%;
    margin-left: -0.5rem !important;
    padding: 0;
  }
}
.logo-text{
  font-weight: 400;
  font-size: 21.97px !important;
}
.under-label-text{
  font-size: 15.38px;
  color: #A6A6A6;
}
.py-240{
  padding-left: 240px;
  padding-right: 240px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.head{
  height: 100px;
}
.dropdown-item{
  padding: 1em;
  font-size: 18px;
  font-weight: 500;
}
.dropdown-item:hover{
  background: #FCF7F4;
  color: #E1AF93 !important;
}
.dropdown-item:active{
  background: #B48C76;
  color: #fff !important;
}
.icon-1{
  width: 50px;
  height: 50px;
  border: 1px solid #EAEAEA;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-2{
  width: 50px;
  height: 50px;
  border: 1px solid #333333;
  background: #333333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dropdown1{
  width: 79px;
  height: 50px;
  border: 1px solid #EAEAEA;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
li{
  cursor: pointer;
}
.input{
  width: 25em;
  padding: 0.8em 2em;
  border-radius: 100px;
  border: none;
}
.input:focus{
  border: none;
  outline: 1px solid;
}

.input::placeholder{
  font-size: 20px;
  font-weight: 400;
  color: #B3B3B3;
}
.end-10{
  right: 13%;
  top: 22%;
}
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20vh;
  z-index: 100;
}
</style>