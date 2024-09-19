<template>
  <div>
    <div class="position-relative">
      <div class=" position-relative" id="#">
        <img class="w-100 image-container" src="/Infinity.png"  alt="">
      </div>
      <div class="z-1 position-absolute position fs-4 container1 p-3">
        <h4 class="title-text text-white text-start mb-3">
          Infinity
        </h4>
        <p class="text-white text-start mb-5">от $500 000</p>
        <div class="d-flex gap-4">
          <custom-button
              :text="'Подробнее'"
          />
          <ligth-custom-button
          >
            <span style="color: white; font-size: 17px; font-weight: 500;">Позвонить</span>
          </ligth-custom-button>
        </div>

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
    <div class="main-wrapper">
      <div class="options-container navigation">
        <a
            v-for="(option, index) in options"
            :key="index"
            :class="['option-button', { 'selected': selectedIndex === index }]"
            @click="selectOption(index)"
            :href="`#${selectedIndex}`"
        >
          {{ option.label }}
        </a>
      </div>
      <div id="0" class="text-block d-flex flex-column gap-5">
        <div style="gap: 14em" class="grid2">
        <div class="d-flex flex-column">
        <h2 class="block-title-h2">
          Infinity Клубный дом
        </h2>
          <custom-button
          :text="'Позвонить'"
          />
        </div>
          <div class="text-start">
            <p style="padding-bottom: 46px">
              Дом имеет свой приватный, закрытый двор, с несколькими зонами отдыха для взрослых и детей. Отдельно предусмотрено помещение для консьержа и охраны. Из окон квартир открывается вид на эксклюзивный ландшафтный двор-парк общей площадью более 1 Га, с прогулочными аллеями, водными объектами и летним кинотеатром.
            </p>
              <div class="text-black">
        <span class="arrow-left_black pointer"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.6 1.5L1.59998 10L10.6 18.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </span>
                <span class="arrow-right_black pointer"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L9.75 10L1 18.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </span>
            </div>
          </div>
        </div>
        <img src="/Infinity2.png" alt="">
      </div>
      <div id="1" class="text-block">
        <h3 class="block-title-h3">Фотогалерея и видеотуры</h3>
        <width-swiper :images="image_for_slider"
        />
        <div class="mt-5 d-flex justify-content-center">
          <router-link to="/gallery">
            <custom-button
                :text="'Посмотреть всё'"
            />
          </router-link>

        </div>
      </div>
      <div id="2" class="text-block">
        <h3 class="block-title-h3">Планировки и доступные квартиры</h3>
        <div class="d-flex gap-3">
          <custom-select
              title="Этаж"
              :is-range="true"
              :range-min="0"
              :range-max="100"
              @range-changed="handleRangeChange"
          />
          <custom-select
              title="Цена"
              :is-range="true"
              :range-min="0"
              :range-max="100"
              @range-changed="handleRangeChange"
          />
          <custom-select
              title="Количество комнат"
              :options="districtOptions"
              @option-selected="filterByDistrict"
              ref="districtSelect"
          />
          <span v-if="selectedDistrict" @click="resetAllSelects" class="delete">Сбросить всё</span>
        </div>
        <div class="grid4">
          <flat-card
          v-for="(card,index) in cards"
          :key="index"
          :cost="card.cost"
          :title="card.title"
          :floor="card.floor"
          :home="card.house"
          :img-src="card.imgSrc"
          :porch="card.porch"
          :rooms="card.rooms"
          />
        </div>
        <div class="d-flex justify-content-center mt-5">
          <custom-button
              :text="'Загрузить всё'"
          />
        </div>

      </div>
      <div id="3" class="text-block">
        <div class="text-start mb-6" style="max-width: 710px">
          <h3 class="block-title-h3" style="margin-bottom: 15px;">Условия покупки</h3>
          <p style="color: #858585">Процесс покупки недвижимости в нашем агентстве разработан таким образом, чтобы обеспечить максимальное удобство и прозрачность для наших клиентов</p>
        </div>
        <conditions-buy
            v-for="condition in conditions"
            :title="condition.title"
            :text1="condition.text1"
            :text2="condition.text2"
        />
      </div>
      <div id="4" class="text-block d-flex gap-5">
        <img src="/infrastructure.png" style="max-width: 50%" alt="">
        <div class="d-flex flex-column">
        <h3 class="block-title-h3">Инфраструктура района</h3>
        <infrastructure/>
        </div>
      </div>
      <div id="5" class="text-block">
        <reviews
        :is-need="true"
        :comments="comments"
        />
        <router-link to="/all-rewies">
          <custom-button
              class="d-flex justify-content-center mt-5"
              :text="'Все отзывы'"
          />
        </router-link>

      </div>
      <ipoteka
      />
      <buy-process/>
      <question-form/>
      <div style="margin-bottom: 250px" class="text-block">
        <h3 class="block-title-h3">Другие ЖК</h3>
        <swiper-cards
            :slides="image_for_slider1"
            class="mb-60"/>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/custom elements/customButton.vue";
import LigthCustomButton from "../components/custom elements/ligthCustomButton.vue";
import swiperCards from "../components/custom elements/swiperCards.vue";
import WidthSwiper from "../components/custom elements/widthSwiper.vue";
import CustomSelect from "../components/custom elements/customSelect.vue";
import FlatCard from "../components/blocks/flatCard.vue";
import ConditionsBuy from "../components/blocks/conditionsBuy.vue";
import Infrastructure from "../components/blocks/infrastructure.vue";
import Reviews from "../components/blocks/reviews.vue";
import Ipoteka from "../components/blocks/Ipoteka.vue";
import BuyProcess from "../components/blocks/buyProcess.vue";
import QuestionForm from "../components/blocks/questionForm.vue";

export default {
  components: {
    QuestionForm,
    BuyProcess,
    Ipoteka,
    Reviews,
    ConditionsBuy,Infrastructure, FlatCard, CustomSelect, WidthSwiper, swiperCards, LigthCustomButton, CustomButton},
  data(){
    return{
      selectedDistrict: '',
      comments:[
        {title: 'Иванов Иван Иванович', data: '01.08.2024', text: 'Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!'},
        {title: 'Петров Петр Петрович', data: '01.08.2024', text: 'Купил квартиру в ЖК Infinitu и остался очень доволен. Инфраструктура на высшем уровне – рядом находятся все основные удобства: торговые центры, школы и медицинские учреждения. Также приятно удивило качество строительства и отделки – все сделано на совесть. Большое спасибо за внимательное отношение и профессионализм сотрудников. Теперь у нас есть уютное и современное жилье, в котором мы чувствуем себя как дома. Приятно также удивило наличие зелёных зон'},
        {title: 'Алексеев Алексей Алексеевич', data: '01.08.2024', text: 'Очень рад, что выбрал ЖК Infinitu. Комплекс расположен в удобном месте с хорошей транспортной доступностью. Внутреннее оформление и планировка квартир продуманы до мелочей, что делает жизнь здесь комфортной. Мне особенно нравится, что у нас есть доступ к различным удобствам прямо на территории комплекса – спортзал, бассейн, зоны для отдыха. Отличное место для жизни и отдыха! Квартира просторная, с современным ремонтом, а территория комплексов'},
        {title: 'Максимов Максим Максимович', data: '01.08.2024', text: 'Жилой комплекс Infinitu – это отличный выбор для тех, кто ценит комфорт и современность. Мне особенно нравится, что комплекс оборудован современными системами безопасности, а также имеется подземный паркинг, что очень удобно. Приятно также удивило наличие зелёных зон и уютных мест для отдыха на территории. Проживание здесь действительно приятно и комфортно'},
      ],
      conditions:[
        {title: 'Требуемые документы', text1: 'Физ.лицам: паспорт, ИНН', text2: 'Юр.лицам: учредительные документы, доверенность'},
        {title: 'Финансовые условия', text1: 'Способы оплаты: наличные, банковский перевод, ипотека', text2: 'Доп.расходы: налоги, комиссия агентства, нотариальные услуги'},
        {title: 'Ипотека и кредитование', text1: 'Варианты ипотеки', text2: 'Сотрудничающие банки'},
        {title: 'Гарантии и обязательства', text1: 'Обязательства агентства: проверка документов, сопровождение сделки', text2: 'Гарантии покупателю: юридическая чистота сделки, сопровождение до регистрации собственности'},
        {title: 'Условия возврата и расторжения', text1: 'Порядок расторжения договора', text2: 'Условия возврата средств (если применимо)'},
      ],
      selectedIndex: 0,
      cards:[
        {imgSrc: '/plan1.jpg', title: '3-я квартира в ЖК Infinity', floor: '4', house: '8', porch: '8', rooms: '3', cost: '600 000'},
        {imgSrc: '/plan2.jpg', title: '3-я квартира в ЖК Infinity', floor: '4', house: '8', porch: '8', rooms: '3', cost: '800 000'},
        {imgSrc: '/plan3.jpg', title: '3-я квартира в ЖК Infinity', floor: '4', house: '8', porch: '8', rooms: '3', cost: '500 000'},
        {imgSrc: '/plan4.jpg', title: '3-я квартира в ЖК Infinity', floor: '4', house: '8', porch: '8', rooms: '2', cost: '250 000'},
        {imgSrc: '/plan5.jpg', title: '3-я квартира в ЖК Infinity', floor: '4', house: '8', porch: '8', rooms: '3', cost: '600 000'},
        {imgSrc: '/plan6.jpg', title: '3-я квартира в ЖК Infinity', floor: '4', house: '8', porch: '8', rooms: '3', cost: '800 000'},
        {imgSrc: '/plan7.jpg', title: '3-я квартира в ЖК Infinity', floor: '4', house: '8', porch: '8', rooms: '3', cost: '500 000'},
        {imgSrc: '/plan8.jpg', title: '3-я квартира в ЖК Infinity', floor: '4', house: '8', porch: '8', rooms: '2', cost: '250 000'},
      ],
      districtOptions: [
        { value: 'A', label: 'Студия' },
        { value: 'B', label: '1' },
        { value: 'C', label: '2' },
        { value: 'D', label: '3' },
        { value: 'E', label: '4+' }
      ],
      options: [
        {
          label: 'О комплексе',
          linkBlock: ''
        },
        {
          label: 'Галерея',
          linkBlock: ''
        },
        {
          label: 'Планировки',
          linkBlock: ''
        },
        {
          label: 'Условия покупки',
          linkBlock: ''
        },
        {
          label: 'Инфраструктура',
          linkBlock: ''
        },
        {
          label: 'Отзывы',
          linkBlock: ''
        }
      ],
      image_for_slider:[
        {image:'/swipBuild1.png'},
        {image:'/swipBuild2.png'}
      ],
      image_for_slider1:[
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
        }
      ],
    }
  },
  computed: {
    selectedOption() {
      return this.options[this.selectedIndex];
    },
  },
  methods: {
    selectOption(index) {
      this.selectedIndex = index;
    },
    handleRangeChange(value) {
      this.selectedDistrict = 'a'
      console.log('Range value changed:', value);
    },
    filterByDistrict(){
      this.selectedDistrict = 'a'
    },
    resetAllSelects() {
      this.selectedDistrict = null;

      // Reset all custom selects
      this.$refs.districtSelect.resetSelect();
    }
  }

}
</script>

<style lang="scss" scoped>
.image-container {
  filter: brightness(60%);
  height: 100vh;
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
.position{
  bottom: 2em;
  left: 6em;
}
.title-text{
  font-size: 80px;
  font-weight: 500;
}
.options-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 120px;
  border-bottom: 1px solid #EAEAEA;
}
.option-button {
  color: #858585;
  padding: 2em 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.option-button.selected {
  color: #E1AF93;
  border-bottom: 2px solid #E1AF93;
  font-weight: 600;
}
.arrow-left_black{
  padding-right: 31px;
  padding-left: 30.25px;
  padding-top: 26.5px;
  padding-bottom: 26.5px;
  border: 1px solid #333333;
  border-radius: 100%;
  margin-left: 8px;
}
.arrow-right_black{
  padding-right: 31px;
  padding-left: 30.25px;
  padding-top: 26.5px;
  padding-bottom: 26.5px;
  border: 1px solid #333333;
  border-radius: 100%;
  margin-left: 8px;
}
.grid4{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
}
.delete{
  color: #E1AF93;
  font-size: 18px;
  font-weight: 500;
  text-decoration: underline #E1AF93;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.navigation{
  position: sticky;
  top: 0;
  background: white;
   z-index: 2000;
}
</style>