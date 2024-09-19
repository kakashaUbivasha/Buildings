<template>
  <div class="position-relative">
    <div class="position-relative">
      <div class=" position-relative" id="#">
        <img class="w-100 image-container" src="/public/title_image.jfif"  alt="">
      </div>
      <div class="z-1 position-absolute position fs-4 p-3">
        <h4 class="title-text text-white text-start mb-3">
          Найдите идеальное место для жизни
        </h4>
        <h4 class="pointer text-white text-start mb-5 ">Откройте двери в новое будущее с нами</h4>
        <custom-button
        :text="'Подробнее'"
        />
      </div>
      <div class="position-absolute text-white arrows">
        <span class="arrow-left pointer"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6 1.5L1.59998 10L10.6 18.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
        <span class="arrow-right pointer"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L9.75 10L1 18.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
      </div>
    </div>
    <div class="position-absolute back-blue-block"></div>
    <div class="main-wrapper mx-auto">
      <div class="text-block d-flex flex-column gap-50">
        <div class="d-flex justify-content-between">
          <div class="text-start">
            <h4 class="block-title">О компании</h4>
            <h2 class="block-title" style="color: #E1AF93">RMC DE LUXE</h2>
          </div>
          <div style="width: 710px;">
            <div class="options-container">
              <p
                  v-for="(option, index) in options"
                  :key="index"
                  :class="['option-button', { 'selected': selectedIndex === index }]"
                  @click="selectOption(index)"
              >
                {{ option.label }}
              </p>
            </div>
            <div class="content-container">
              <div v-if="selectedIndex=== 0" class="text-start">
                <p>Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности</p>
                <p>Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков</p>
              </div>
              <div v-if="selectedIndex=== 1" class="text-start">
                <p>Другой текст</p>
              </div>
              <div v-if="selectedIndex=== 2" class="text-start">
                <p>Другой текст2</p>
              </div>
            </div>
          </div>

        </div>
        <div class="position-relative">
          <div class="position-absolute text-white arrows2">
        <span class="arrow-left pointer"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6 1.5L1.59998 10L10.6 18.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
            <span class="arrow-right pointer"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L9.75 10L1 18.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
          </div>
          <img src="/tower0.jpg" alt="">
        </div>
      </div>
      <div class="position-relative">
        <div class="text-block d-flex gap-block">
          <div class="text-start lolo">
            <h2 class="block-title">
              Инвестиции в
            </h2>
            <h2 class="mb-50 block-title">
              недвижимость в Дубае
            </h2>
            <p class="pb-20">
              Недвижимость в Дубае предоставляет отличные возможности для получения стабильного дохода и увеличения капитала
            </p>
            <p class="pb-20">
              Полный цикл инвестиций: От анализа рынка и подбора объектов до управления инвестициями и их реализации.
            </p>
            <p class="pb-20">
              Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая высокое качество обслуживания и надежность.
            </p>
            <p class="pb-40">
              Наши услуги включают управление вашей инвестиционной недвижимостью, обеспечивая её сохранность и стабильный доход. Мы берем на себя все аспекты управления, включая подбор и проверку арендаторов, техническое обслуживание, финансовую отчетность и юридическую поддержку.
            </p>
            <router-link to="/investing-in-dubai">
              <custom-button
                  :text="'Подробнее'"
              />
            </router-link>
          </div>
          <div class="position-relative img-tower-block">
            <img class="tower-img1" src="/tower1.jpg" alt="">
            <img class="position-absolute tower-img2" src="/tower2.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="text-block text-start">
        <h3 class="block-title-h3" style="width: 820px">Что входит в услугу управления недвижимостью</h3>
        <div class="table-container">
          <table class="custom-table">
            <tbody>
            <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
              <td v-for="(cell, cellIndex) in row" :key="cellIndex" :class="{ 'has-marker': cell }">
                {{ cell }}
                <span v-if="cell" class="custom-marker">
              <img src="/Checkmark.svg" alt="Маркер" />
            </span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <ul class="d-grid">
        </ul>
      </div>
      <div class="text-block text-start">
        <h4 class="block-title-h3">Почему выбирают нас</h4>
        <div class="grid-block">
          <div class="p-30 text-start border-card d-flex flex-column justify-content-center align-items-center">
          <h5 class="pb-20">Опыт и профессионализм</h5>
            <p>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
          </div>
          <img src="/Image.jpg" alt="" class="border-card">
          <div class="p-30 text-start border-card d-flex flex-column justify-content-center align-items-center">
            <h5 class="pb-20">Прозрачность и доверие</h5>
            <p>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
          </div>
          <img src="/Image%20(1).jpg" alt="" class="border-card">
          <div class="p-30 text-start border-card d-flex flex-column justify-content-center align-items-center">
            <h5 class="pb-20">Высокий уровень обслуживания</h5>
            <p>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
          </div>
          <img src="/Image%20(2).jpg" alt="" class="border-card">
          <div class="p-30 text-start border-card d-flex flex-column justify-content-center align-items-center">
            <h5 class="pb-20">Индивидуальный подход</h5>
            <p>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
          </div>
          <img src="/Image%20(3).jpg" alt="" class="border-card">
          <div class="p-30 text-start border-card d-flex flex-column justify-content-center align-items-center">
            <h5 class="pb-20">Комплексное обслуживание</h5>
            <p>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
          </div>
        </div>
      </div>
      <div class="text-block">
          <h3 class="block-title-h3 text-start">Новостройки</h3>
          <swiper-cards
              :slides="image_for_slider"
              class="mb-60"/>
        <div class="d-flex justify-content-center">
          <router-link to="/buildings">
            <custom-button
                :text="'Смотреть всё'"
            />
          </router-link>
        </div>
      </div>
      <ipoteka/>
      <question-form/>
      <blog/>
    </div>
  </div>
</template>

<script>
import InfoBlock from "../components/InfoBlock.vue";
import swiperCards from "../components/custom elements/swiperCards.vue";
import ListItemHome from "../components/listItemHome.vue";
import CustomButton from "../components/custom elements/customButton.vue";
import Ipoteka from "../components/blocks/Ipoteka.vue";
import QuestionForm from "../components/blocks/questionForm.vue";
import Blog from "../components/blocks/Blog.vue";
export default {
  components:{Blog, QuestionForm, Ipoteka, CustomButton, ListItemHome, InfoBlock, swiperCards},
  data(){
    return{
      selectedIndex: 0,
      options: [
        {
          label: 'Аренда',
          content: 'Текст для первой опции'
        },
        {
          label: 'Купля - продажа',
          content: 'Текст для второй опции'
        },
        {
          label: 'Управление',
          content: 'Текст для третьей опции'
        }
      ],
      tableData: [
        ['Проверка арендаторов (кредитная история, рекомендации)', 'Регулярное техническое обслуживание'],
        ['Подготовка и подписание договоров аренды',"Организация и проведение ремонтных работ"],
        ['Сбор арендной платы', 'Контроль за состоянием недвижимости'],
        ['Обработка запросов и жалоб арендаторов', 'Подбор надежных арендаторов'],
        ['Контроль соблюдения условий аренды', ''],
      ],
      image_for_slider:[
        {
          name: 'Safa One',
          cost: '1900000',
          image_url: '/slider-image1.jpg'
        },
        {
          name: 'Safa Two',
          cost: '399000',
          image_url: '/slider-image2.jpg'
        },
        {
          name: 'Peninsula Two',
          cost: '245000',
          image_url: '/slider-image3.jpg'
        },
        {
          name: 'Marina Vista',
          cost: '612000',
          image_url: '/slider-image4.jpg'
        }
      ]
    }
  },
  computed: {
    selectedOption() {
      return this.options[this.selectedIndex];
    }
  },
  methods: {
    selectOption(index) {
      this.selectedIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
.circle{
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}
.position{
  top: 382px;
  left: 240px;
  right: 964px;
}
.title-text{
  font-size: 80px;
  line-height: 70px;
  font-weight: 500;
}
.lolo{
  margin-top: 40px;
  margin-bottom: 99.5px;
  width: 710px;
  height: 629px;
}
.p-auto{
  display: flex;
  align-items: center; justify-content: center;
}
.img-tower-block{
   position: relative;
 }
.tower-img1{
position: absolute;
  top:0
}
.tower-img2{
  position: absolute;
  left: -100px;
  bottom: 105px;
}
.custom-list{
  font-size: 24px;
  line-height: 34.68px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
}
.border-card{
  border: 1px solid #EAEAEA;
}
.custom-table td {
  padding-left: 50px;
  padding-top: 41px;
  padding-bottom: 39px;
  border-top: 1px solid #EAEAEA;
  position: relative;
}

.custom-table tr td:first-child {
  border-right: 1px solid #EAEAEA;
}
.image-container{
  filter: brightness(60%);
  height: 100vh;
}
.custom-table td.has-marker {
  padding-right: 30px;
}

.custom-marker {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.custom-marker img {
  width: 30px;
  height: 30px;
}
.back-blue-block{
  width: 100%;
  height: 828px;
  background: #EDF3F5;
  position: absolute;
  top: 2278px;
}
.options-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 120px;
  border-bottom: 1px solid #EAEAEA;
}
.p-30{
  padding-left: 30px;
  padding-right: 30px;
}
.option-button {
  padding: 10px 20px;
  color: #858585;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.option-button.selected {
  color: #E1AF93;
  border-bottom: 2px solid #E1AF93;
  font-weight: 600;
}

.content-container {
  text-align: center;
  font-size: 18px;
}
.grid-block{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.arrow-left{
  padding-right: 31px;
  padding-left: 30.25px;
  padding-top: 26.5px;
  padding-bottom: 26.5px;
  border: 1px solid white;
  border-radius: 100%;
  margin-left: 8px;
}
.arrow-right{
  padding-right: 31px;
  padding-left: 30.25px;
  padding-top: 26.5px;
  padding-bottom: 26.5px;
  border: 1px solid white;
  border-radius: 100%;
  margin-left: 8px;
}
.arrows{
  bottom: 70px;
  right: 240px;
}
.arrows2{
  top: 61.58px;
  left: 30px;
}
</style>