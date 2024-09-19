<template>
  <div class="main-wrapper mt-5">
  <div class="">
    <h3 class="block-title-h3">Популярные статьи</h3>
    <div>
      <blog-pages-item
          :images="images"
      />
    </div>
  </div>
    <div class="text-block">
      <h3 class="block-title-h3">Статьи</h3>
      <div class="d-flex justify-content-between ">
        <div class="d-flex gap-3 mb-5 ms-2">
          <button
              @click="setTrueAtIndex(0)"
              :class="isActives[0] ? 'is-active' : 'is-unactive'"
          >Все</button>
          <button
              @click="setTrueAtIndex(1)"
              :class="isActives[1] ? 'is-active' : 'is-unactive'"
          >О недвижимости</button>
          <button
              @click="setTrueAtIndex(2)"
              :class="isActives[2] ? 'is-active' : 'is-unactive'"
          >Инвесторам</button>
          <button
              @click="setTrueAtIndex(3)"
              :class="isActives[3] ? 'is-active' : 'is-unactive'"
          >Покупка недвижимости</button>
          <button
              @click="setTrueAtIndex(4)"
              :class="isActives[4] ? 'is-active' : 'is-unactive'"
          >Обзоры районов</button>
        </div>
          <div class="dropdown">
            <p class="toggle d-flex align-items-center gap-1 no-select mt-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" >
              Сортировать <span class="material-symbols-outlined">
swap_vert
</span>
            </p>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">По дате: сначала новые</a></li>
              <li><a class="dropdown-item" href="#">По дате: сначала старые</a></li>
              <li><a class="dropdown-item" href="#">По популярности</a></li>
            </ul>
        </div>
      </div>
      <photo-for-blog :photos="photos"/>
    </div>
    <paginate-block
    :comments="photos"
    />
  </div>
</template>

<script>
import BlogPagesItem from "../components/blocks/blogPagesItem.vue";
import PhotoForBlog from "../components/blocks/photoForBlog.vue";
import PaginateBlock from "../components/blocks/paginateBlock.vue";

export default {
  components: {PaginateBlock, PhotoForBlog, BlogPagesItem},
  data(){
    return{
      isActives: [true, false, false,false,false],
      images:[
        {imageSrc: '/page-blog1.png', title: 'Современные жилые комплексы предлагают расширенные удобства для жителей', view: '235', date: '01.08.2024'},
        {imageSrc: '/page-blog2.png', title: 'Рынок новостроек демонстрирует стабильный рост', view: '899', date: '31.07.2024'},
        {imageSrc: '/page-blog3.png', title: 'Цены на квартиры в новостройках продолжают расти', view: '500', date: '30.07.2024'}
      ],
      photos:[{url: '/photo-for-blog1.jfif', id: 1, title: 'photo', date: '31.07.2024',text:'Тенденции и прогнозы рынка недвижимости на 2024 год',views: '888'},
        {url: '/photo-for-blog2.jfif', id: 2, title: 'photo', date: '31.07.2024',text:'Лучшие районы для инвестиций в недвижимость',views: '888'},
        {url: '/photo-for-blog3.jfif', id: 3, title: 'photo', date: '31.07.2024',text:'Топ-10 новых жилых комплексов',views: '888'},
        {url: '/photo-for-blog4.jfif', id: 4, title: 'photo', date: '31.07.2024',text:'Элитные апартаменты становятся всё более популярными',views: '888'},
        {url: '/photo-for-blog5.jfif', id: 5, title: 'photo', date: '31.07.2024',text:'Тренды в дизайне интерьера новостроек на 2024 год',views: '888'},
        {url: '/photo-for-blog6.jfif', id: 6, title: 'photo', date: '31.07.2024',text:'Новые жилые комплексы: какие районы лидируют по застройке',views: '888'},
        {url: '/photo-for-blog7.jfif', id: 7, title: 'photo', date: '31.07.2024',text:'Инвестиции в новостройки: как выбрать прибыльный проект',views: '888'},
        {url: '/photo-for-blog8.jfif', id: 8, title: 'photo', date: '31.07.2024',text:'Как выбрать застройщика: советы экспертов',views: '888'},
        {url: '/photo-for-blog9.jfif', id: 9, title: 'photo', date: '31.07.2024',text:'Преимущества покупки жилья на этапе строительства',views: '888'},
        {url: '/photo-for-blog10.jfif', id: 10, title: 'photo', date: '31.07.2024',text:'Современные технологии в строительстве: что ожидать от новостроек',views: '888'},
      ]
    }
  },
  methods:{
    setTrueAtIndex(index) {
      this.isActives = this.isActives.map((_, i) => i === index)
    }
  }
}
</script>

<style lang="scss" scoped>
.is-active {
  width: 213px;
  height: 49px;
  padding: 16px 12px;
  background: #E1AF93;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 500;
  line-height: 24.57px;
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
.toggle::after {
  content: ""; /* Unicode для иконки стрелочки вниз FontAwesome */
  font-weight: 900; /* Убедитесь, что иконка отображается корректно */
  font-size: 1.2em;
  margin-left: 10px;
}
.toggle{
  background: none;
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
</style>