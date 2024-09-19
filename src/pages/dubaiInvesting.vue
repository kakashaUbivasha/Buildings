<template>
  <div>
    <div class="position-relative mb-250">
      <div class=" position-relative" id="#">
        <img class="w-100 image-container" src="/dubai-main-img.jfif"  alt="">
      </div>
      <div class="z-1 position-absolute position fs-4 container1 p-3">
        <h4 class="title-text text-white text-start mb-3">
          Инвестиции в недвижимость в Дубае
        </h4>
        <p class="pointer text-white text-start mb-5 ">Узнайте о возможностях и преимуществах инвестиций в Дубае</p>
      </div>
    </div>
    <div class="main-wrapper mx-auto">
      <div class="grid2 gap-80">
        <img class="img-tower" src="/dubai-tower.jfif" alt="">
        <div class="text-start">
          <h3 class="block-title-h3">
            Вложите в будущее: Недвижимость в Дубае
          </h3>
          <p style="color: #858585">
            Дубай, один из самых быстроразвивающихся городов мира, предлагает огромные возможности для инвестиций в недвижимость. Благоприятный инвестиционный климат, устойчивый рост экономики и высокий уровень жизни делают этот город привлекательным для инвесторов со всего мира
          </p>
          <div class="grid-custom py-139">
            <p class="border-right">Отсутствие налогов на доходы от недвижимости</p>
            <p class="border-right">Стабильная экономика и растущий рынок</p>
            <p class="border-right">Рост и возможности для получения высокого дохода</p>
            <p class="border-right">Стратегическое расположение и инфраструктура</p>
          </div>
        </div>
      </div>
      <div class="text-block">
        <h3 class="block-title-h3">Основные районы для инвестиций</h3>
        <div class="bg-img-map position-relative mb-50">
          <div class="position-absolute top-2 start-2">
            <cards-map :title="'Downtown Dubai'" :text="'Downtown Dubai — это современный и оживленный район, расположенный в центре Дубая, Объединённые Арабские Эмираты. Здесь находятся знаменитые фонтаны Dubai Fountain, которые устраивают захватывающие водные шоу'" :image-src="'/cards1.png'"/>
          </div>
          <span class="position-absolute top-50">
            <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 23.8711 0.576173 26.6076 1.6192 29.1003C5.94533 40.912 21.1104 49 21.1104 49C21.1104 49 39.7389 39.0648 41.5928 25.1361C41.8599 23.7989 42 22.4158 42 21Z" fill="#F3DFD4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6509 24.7849L38.6318 24.8814L38.619 24.9789C37.8426 30.8763 33.4427 36.2795 28.6948 40.4277C26.3812 42.4489 24.1126 44.0616 22.42 45.1691C21.9283 45.4908 21.4872 45.7686 21.1104 46C20.8599 45.8462 20.5811 45.672 20.2779 45.4779C18.8615 44.5714 16.9286 43.2433 14.8719 41.5641C10.6804 38.142 6.31788 33.5375 4.4362 28.3436L4.41287 28.2792L4.38668 28.2159C3.4944 26.0601 3 23.691 3 21.1975C3 11.1473 11.0589 3 21 3C30.9411 3 39 11.1473 39 21.1975C39 22.4283 38.8796 23.6276 38.6509 24.7849Z" fill="#E1AF93"/>
            <path d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29C25.4183 29 29 25.4183 29 21Z" fill="white"/>
            </svg>
          </span>
          <span class="position-absolute top-50 end-25">
            <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 23.8711 0.576173 26.6076 1.6192 29.1003C5.94533 40.912 21.1104 49 21.1104 49C21.1104 49 39.7389 39.0648 41.5928 25.1361C41.8599 23.7989 42 22.4158 42 21Z" fill="#F3DFD4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6509 24.7849L38.6318 24.8814L38.619 24.9789C37.8426 30.8763 33.4427 36.2795 28.6948 40.4277C26.3812 42.4489 24.1126 44.0616 22.42 45.1691C21.9283 45.4908 21.4872 45.7686 21.1104 46C20.8599 45.8462 20.5811 45.672 20.2779 45.4779C18.8615 44.5714 16.9286 43.2433 14.8719 41.5641C10.6804 38.142 6.31788 33.5375 4.4362 28.3436L4.41287 28.2792L4.38668 28.2159C3.4944 26.0601 3 23.691 3 21.1975C3 11.1473 11.0589 3 21 3C30.9411 3 39 11.1473 39 21.1975C39 22.4283 38.8796 23.6276 38.6509 24.7849Z" fill="#E1AF93"/>
            <path d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29C25.4183 29 29 25.4183 29 21Z" fill="white"/>
            </svg>
          </span>
          <span class="position-absolute top-75 end-50">
            <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 23.8711 0.576173 26.6076 1.6192 29.1003C5.94533 40.912 21.1104 49 21.1104 49C21.1104 49 39.7389 39.0648 41.5928 25.1361C41.8599 23.7989 42 22.4158 42 21Z" fill="#F3DFD4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6509 24.7849L38.6318 24.8814L38.619 24.9789C37.8426 30.8763 33.4427 36.2795 28.6948 40.4277C26.3812 42.4489 24.1126 44.0616 22.42 45.1691C21.9283 45.4908 21.4872 45.7686 21.1104 46C20.8599 45.8462 20.5811 45.672 20.2779 45.4779C18.8615 44.5714 16.9286 43.2433 14.8719 41.5641C10.6804 38.142 6.31788 33.5375 4.4362 28.3436L4.41287 28.2792L4.38668 28.2159C3.4944 26.0601 3 23.691 3 21.1975C3 11.1473 11.0589 3 21 3C30.9411 3 39 11.1473 39 21.1975C39 22.4283 38.8796 23.6276 38.6509 24.7849Z" fill="#E1AF93"/>
            <path d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29C25.4183 29 29 25.4183 29 21Z" fill="white"/>
            </svg>
          </span>
          <span class="position-absolute bottom-5 start-50">
            <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 23.8711 0.576173 26.6076 1.6192 29.1003C5.94533 40.912 21.1104 49 21.1104 49C21.1104 49 39.7389 39.0648 41.5928 25.1361C41.8599 23.7989 42 22.4158 42 21Z" fill="#F3DFD4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6509 24.7849L38.6318 24.8814L38.619 24.9789C37.8426 30.8763 33.4427 36.2795 28.6948 40.4277C26.3812 42.4489 24.1126 44.0616 22.42 45.1691C21.9283 45.4908 21.4872 45.7686 21.1104 46C20.8599 45.8462 20.5811 45.672 20.2779 45.4779C18.8615 44.5714 16.9286 43.2433 14.8719 41.5641C10.6804 38.142 6.31788 33.5375 4.4362 28.3436L4.41287 28.2792L4.38668 28.2159C3.4944 26.0601 3 23.691 3 21.1975C3 11.1473 11.0589 3 21 3C30.9411 3 39 11.1473 39 21.1975C39 22.4283 38.8796 23.6276 38.6509 24.7849Z" fill="#E1AF93"/>
            <path d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29C25.4183 29 29 25.4183 29 21Z" fill="white"/>
            </svg>
          </span>
          <span class="position-absolute bottom-10 end-23">
            <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 23.8711 0.576173 26.6076 1.6192 29.1003C5.94533 40.912 21.1104 49 21.1104 49C21.1104 49 39.7389 39.0648 41.5928 25.1361C41.8599 23.7989 42 22.4158 42 21Z" fill="#F3DFD4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6509 24.7849L38.6318 24.8814L38.619 24.9789C37.8426 30.8763 33.4427 36.2795 28.6948 40.4277C26.3812 42.4489 24.1126 44.0616 22.42 45.1691C21.9283 45.4908 21.4872 45.7686 21.1104 46C20.8599 45.8462 20.5811 45.672 20.2779 45.4779C18.8615 44.5714 16.9286 43.2433 14.8719 41.5641C10.6804 38.142 6.31788 33.5375 4.4362 28.3436L4.41287 28.2792L4.38668 28.2159C3.4944 26.0601 3 23.691 3 21.1975C3 11.1473 11.0589 3 21 3C30.9411 3 39 11.1473 39 21.1975C39 22.4283 38.8796 23.6276 38.6509 24.7849Z" fill="#E1AF93"/>
            <path d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29C25.4183 29 29 25.4183 29 21Z" fill="white"/>
            </svg>
          </span>
          <span class="position-absolute top-15 end-15">
            <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 23.8711 0.576173 26.6076 1.6192 29.1003C5.94533 40.912 21.1104 49 21.1104 49C21.1104 49 39.7389 39.0648 41.5928 25.1361C41.8599 23.7989 42 22.4158 42 21Z" fill="#F3DFD4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6509 24.7849L38.6318 24.8814L38.619 24.9789C37.8426 30.8763 33.4427 36.2795 28.6948 40.4277C26.3812 42.4489 24.1126 44.0616 22.42 45.1691C21.9283 45.4908 21.4872 45.7686 21.1104 46C20.8599 45.8462 20.5811 45.672 20.2779 45.4779C18.8615 44.5714 16.9286 43.2433 14.8719 41.5641C10.6804 38.142 6.31788 33.5375 4.4362 28.3436L4.41287 28.2792L4.38668 28.2159C3.4944 26.0601 3 23.691 3 21.1975C3 11.1473 11.0589 3 21 3C30.9411 3 39 11.1473 39 21.1975C39 22.4283 38.8796 23.6276 38.6509 24.7849Z" fill="#E1AF93"/>
            <path d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29C25.4183 29 29 25.4183 29 21Z" fill="white"/>
            </svg>
          </span>
          <span class="position-absolute top-35 end-40">
            <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 23.8711 0.576173 26.6076 1.6192 29.1003C5.94533 40.912 21.1104 49 21.1104 49C21.1104 49 39.7389 39.0648 41.5928 25.1361C41.8599 23.7989 42 22.4158 42 21Z" fill="#F3DFD4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6509 24.7849L38.6318 24.8814L38.619 24.9789C37.8426 30.8763 33.4427 36.2795 28.6948 40.4277C26.3812 42.4489 24.1126 44.0616 22.42 45.1691C21.9283 45.4908 21.4872 45.7686 21.1104 46C20.8599 45.8462 20.5811 45.672 20.2779 45.4779C18.8615 44.5714 16.9286 43.2433 14.8719 41.5641C10.6804 38.142 6.31788 33.5375 4.4362 28.3436L4.41287 28.2792L4.38668 28.2159C3.4944 26.0601 3 23.691 3 21.1975C3 11.1473 11.0589 3 21 3C30.9411 3 39 11.1473 39 21.1975C39 22.4283 38.8796 23.6276 38.6509 24.7849Z" fill="#E1AF93"/>
            <path d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29C25.4183 29 29 25.4183 29 21Z" fill="white"/>
            </svg>
          </span>
          <span class="position-absolute top-15">
            <svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 23.8711 0.576173 26.6076 1.6192 29.1003C5.94533 40.912 21.1104 49 21.1104 49C21.1104 49 39.7389 39.0648 41.5928 25.1361C41.8599 23.7989 42 22.4158 42 21Z" fill="#F3DFD4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6509 24.7849L38.6318 24.8814L38.619 24.9789C37.8426 30.8763 33.4427 36.2795 28.6948 40.4277C26.3812 42.4489 24.1126 44.0616 22.42 45.1691C21.9283 45.4908 21.4872 45.7686 21.1104 46C20.8599 45.8462 20.5811 45.672 20.2779 45.4779C18.8615 44.5714 16.9286 43.2433 14.8719 41.5641C10.6804 38.142 6.31788 33.5375 4.4362 28.3436L4.41287 28.2792L4.38668 28.2159C3.4944 26.0601 3 23.691 3 21.1975C3 11.1473 11.0589 3 21 3C30.9411 3 39 11.1473 39 21.1975C39 22.4283 38.8796 23.6276 38.6509 24.7849Z" fill="#E1AF93"/>
            <path d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29C25.4183 29 29 25.4183 29 21Z" fill="white"/>
            </svg>
          </span>
        </div>
        <div class="d-flex justify-content-center">
          <ligth-custom-button
          >Посмотреть все районы</ligth-custom-button>
        </div>
      </div>
      <div class="text-block">
        <h3 class="block-title-h3">Типы недвижимости</h3>
        <div class="image-grid">
          <span class="position-relative wide" >
            <img style="" src="/colom1.jpg" alt="Широкое изображение">
            <h5 class="img-text">Жилые комплексы</h5>
          </span>
          <span class="position-relative">
           <img src="/colom2.jpg" alt="Обычное изображение">
            <h5 class="img-text">Коммерческая недвижимость</h5>
          </span>
          <span class="row-2 position-relative">
            <img src="/colom3.jpg" alt="Изображение 1">
            <h5 class="img-text">Офисы и коворкинги</h5>
          </span>
          <span class="row-2 position-relative">
            <img src="/colom4.jpg" alt="Изображение 1">
            <h5 class="img-text">Отели и гостиничные апартаменты</h5>
          </span>
          <span class="row-2 position-relative">
            <img src="/colom5.jpg" alt="Изображение 1">
            <h5 class="img-text">Виллы и таунхаусы</h5>
          </span>>
        </div>
      </div>
      <ipoteka/>
      <buy-process
      :arr="arrForProcess"
      block-title="Процесс покупки недвижимости"
      />
      <offen-question/>
      <question-form/>
      <blog/>
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/custom elements/customButton.vue";
import CardsMap from "../components/CardsMap.vue";
import LigthCustomButton from "../components/custom elements/ligthCustomButton.vue";
import Ipoteka from "../components/blocks/Ipoteka.vue";
import BuyProcess from "../components/blocks/buyProcess.vue";
import OffenQuestion from "../components/blocks/offenQuestion.vue";
import QuestionForm from "../components/blocks/questionForm.vue";
import Blog from "../components/blocks/Blog.vue";

export default {
  components: {Blog, QuestionForm, OffenQuestion, BuyProcess, Ipoteka, LigthCustomButton, CardsMap, CustomButton},
  data(){
    return{
      arrForProcess:[
        {id: 1, title: 'Консультация и подбор объекта', text: 'Организуем просмотры объектов и помогаем вам оценить их преимущества и недостатки'},
        {id: 2, title: 'Консультация и подбор объекта', text: 'Организуем просмотры объектов и помогаем вам оценить их преимущества и недостатки'},
        {id: 3, title: 'Консультация и подбор объекта', text: 'Организуем просмотры объектов и помогаем вам оценить их преимущества и недостатки'},
        {id: 4, title: 'Консультация и подбор объекта', text: 'Организуем просмотры объектов и помогаем вам оценить их преимущества и недостатки'},

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.arrows {
  display: flex;
  align-items: center;
}

.arrow-left1, .arrow-right {
  display: flex;
  align-items: center;
  /* Добавьте свойство margin-right к стрелке слева или margin-left к стрелке справа */
}

.arrow-left1 {
  margin-right: 32px; /* Отступ между стрелками */
}
.image-container {
  filter: brightness(60%);
  height: 100vh;
}
.position{
  top: 382px;
  left: 240px;
  right: 964px;
}
.title-text{
  font-size: 80px;
  line-height: 80px;
  font-weight: 500;
}
.border-right{
  border-left: 3px solid #E1AF93;
  padding-left: 16px;
}
.gap-80{
  gap: 80px;
}
.grid-custom{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 58px;
}
.img-tower{
  max-height: 680px;
  width: 588px;
}
.py-139{
  padding-top: 139px;
  padding-bottom: 139px;
}
.bg-img-map{
  background: url("/map.jpg");
  background-size: cover;
  background-position: left;
  height: 650px;
  width: 1440px;
}
.start-2{
  left: 0.8em;
}
.top-2{
  top: 0.8em;
}
.end-23{
  right: 43%;
}
.end-15{
  right: 15%;
}
.top-35{
  top: 35%;
}
.end-40{
  right: 40%;
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.image-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
}
.wide {
  grid-column: span 2;

}
.row-2 {
  grid-row: 2;
}
.img-text{
  position: absolute;
  bottom: 24px;
  left: 24px;
  font-size: 35px;
  font-weight: 600;
  line-height: 50px;
  text-align: left;
  color: white;
}
</style>