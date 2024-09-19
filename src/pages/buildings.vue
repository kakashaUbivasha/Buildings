<template>
  <div>
    <div class="d-flex gap-142">
      <div class="d-flex flex-column text-start" style="margin-left: 240px; margin-top: 70px;">
        <div style="margin-bottom: 70px; max-width: 486px" class="">
          <h1 class="top-title">
            Новостройки <span style="color: #E1AF93">в Ташкенте</span>
          </h1>
          <p style="color: #858585">
            Найдите свою идеальную квартиру в новых жилых комплексах Ташкента
          </p>
        </div>
        <div style="gap: 20px" class="grid2">
        <review
            v-for="card in cards"
            :title="card.title"
            :text="card.text"
        />
        </div>
      </div>
      <img src="/building-main.jpg" alt="">
    </div>
<div class="main-wrapper">
  <div class="text-block d-flex flex-column gap-5">
    <div class="d-flex gap-100 text-start">
      <h3 class="block-title-h3">
        Рынок новостроек в Ташкенте
      </h3>
      <p>Рынок новостроек в Ташкенте активно развивается и привлекает как местных, так и иностранных инвесторов. В Ташкенте строятся новые жилые комплексы, предлагающие разнообразные варианты, от небольших квартир до элитных апартаментов. Эти проекты часто включают современные удобства, такие как фитнес-центры, детские площадки</p>
      <p>Цены на новостройки варьируются в зависимости от района и класса жилья, что делает рынок привлекательным для инвестиций. Новые жилые комплексы часто включают развитую инфраструктуру, включая торговые центры, школы и медицинские учреждения, что делает жизнь в таких комплексах более удобной</p>
    </div>
    <img src="/building-towe1.jpg" alt="">
  </div>
  <div class="text-block">
    <h3 class="block-title-h3">Каталог новостроек</h3>
    <div style="margin-bottom: 60px;" class="">
      <new-buildings/>
    </div>
    <div class="d-flex justify-content-center">
      <router-link to="/buildings-page">
        <custom-button
            :text="'Перейти в каталог'"
        />
      </router-link>

    </div>

  </div>
  <ipoteka/>
  <buy-process/>
  <offen-question/>
  <question-form/>
  <blog/>
</div>
  </div>
</template>

<script>
import Review from "../components/blocks/review.vue";
import NewBuildings from "../components/blocks/newBuildings.vue";
import CustomButton from "../components/custom elements/customButton.vue";
import Ipoteka from "../components/blocks/Ipoteka.vue";
import BuyProcess from "../components/blocks/buyProcess.vue";
import OffenQuestion from "../components/blocks/offenQuestion.vue";
import QuestionForm from "../components/blocks/questionForm.vue";
import Blog from "../components/blocks/Blog.vue";

export default {
  components: {Blog, QuestionForm, OffenQuestion, BuyProcess, Ipoteka, CustomButton, NewBuildings, Review},
  data(){
    return{
      cards:[
        {title: 'Современная архитектура', text: 'Современное жилье с актуальным дизайном и архитектурой'},
        {title: 'Технологии и материалы', text: 'Современное жилье с актуальным дизайном и архитектурой'},
        {title: 'Выбор планировки', text: 'Возможность выбрать планировку и отделку на ранних этапах'},
        {title: 'Гарантия качества', text: 'Возможность выбрать планировку и отделку на ранних этапах'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.gap-142{
  gap: 142px;
}
.top-title{
  font-size: 80px;
  line-height: 80px;
  font-weight: 500;
}
</style>