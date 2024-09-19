<template>
  <div>
    <services-header/>
    <div class="main-wrapper">
      <div class="text-block">
        <second-block-services
            :title="second_block.title"
            :img4="second_block.img3"
            :img3="second_block.img4"
            :img2="second_block.img2"
            :img1="second_block.img1"
            :text="second_block.text"/>
      </div>
      <div class="text-block">
        <third-block-services :title="title1" :blocks="blocks"/>
      </div>
      <fourth-block-services
          bubble2="2 месяца на покупку"
          bubble1="30% экономия времени"
          text="Покупка квартиры для молодой семьи"
          :image_for_slider="image_for_slider"
      />
      <bid-form
      title="Сдайте свою недвижимость в аренду быстро и выгодно!"
      text="Ищете надежного арендатора для вашего объекта? Наша команда профессионалов поможет вам найти идеального арендатора и максимально упростить процесс аренды"
      />
      <buy-process
          :arr="arrForProcess"
          block-title="Процесс работы"
      />
      <needs-documents/>
      <offen-question/>
      <question-form/>
      <div class="mb-250">
        <contacts/>
      </div>
    </div>
  </div>
</template>

<script>
import servicesHeader from "../../components/blocks/block for services/servicesHeader.vue";
import SecondBlockServices from "../../components/blocks/block for services/secondBlockServices.vue";
import ThirdBlockServices from "../../components/blocks/block for services/thirdBlockServices.vue";
import CustomButton from "../../components/custom elements/customButton.vue";
import WidthSwiper from "../../components/custom elements/widthSwiper.vue";
import FourthBlockServices from "../../components/blocks/block for services/fourthBlockServices.vue";
import FifthBlockServices from "../../components/blocks/block for services/fifthBlockServices.vue";
import BuyProcess from "../../components/blocks/buyProcess.vue";
import NeedsDocuments from "../../components/blocks/block for services/needsDocuments.vue";
import OffenQuestion from "../../components/blocks/offenQuestion.vue";
import QuestionForm from "../../components/blocks/questionForm.vue";
import Contacts from "../../components/blocks/block for services/contacts.vue";
import BidForm from "../../components/blocks/block for services/bidForm.vue";
export default {
  components:{
    BidForm,
    Contacts,
    QuestionForm,
    OffenQuestion,
    NeedsDocuments,
    BuyProcess,
    FifthBlockServices,
    FourthBlockServices, WidthSwiper, CustomButton, ThirdBlockServices, SecondBlockServices, servicesHeader},
  data(){
    return{
      second_block:
          {
            title: 'Сдача недвижимости в аренду',
            text: 'Полный спектр услуг по сдаче недвижимости в аренду, включая подготовку объекта, маркетинг, поиск арендаторов, заключение договоров и управление арендными отношениями',
            img1: '/services6.png',
            img2: '/services2.jpg',
            img3: '/services3.png',
            img4: '/services7.png',
          },
      image_for_slider:[
        {text: 'Сдача нового помещения в аренду', bubble1:'Договор на 3 года', bubble2:'+20% к доходу владельца', image:'/buying-swipe1.jfif'},
        {text: 'Сдача в аренду торгового помещения в торговом центре ', bubble1:'Договор на 5 лет', bubble2:'+20% к доходу владельца', image:'/buying-swipe2.png'},
      ],
      title1:'Как мы сдаём в аренду',
      blocks:[
        {title: 'Подготовка к продаже', text:'Определение целей покупки (например, жилье для проживания, инвестиции, коммерческое использование'},
        {title: 'Маркетинг и реклама', text:'Поиск целей покупки (например, жилье для проживания, инвестиции, коммерческое использование'},
        {title: 'Организация показов', text:'Осмотр целей покупки (например, жилье для проживания, инвестиции, коммерческое использование'},
        {title: 'Заключение договора', text:'Заключение договора целей покупки (например, жилье для проживания, инвестиции, коммерческое использование'},
        {title: 'Заключительный этап', text:'Заключительный этап целей покупки (например, жилье для проживания, инвестиции, коммерческое использование'},
      ],
      arrForProcess:
          [
            {id: 1, title: 'Определение целей и бюджета', text: 'Оценка финансовых возможностей. Установление целей покупки'},
            {id: 2, title: 'Поиск и отбор объектов', text: 'Просмотр объявлений и отбор объектов, соответствующих требованиям-'},
            {id: 3, title: 'Осмотр объектов', text: 'Тщательный осмотр и оценка состояния объектов'},
            {id: 4, title: 'Оценка и анализ', text: 'Юридическая проверка правового статуса и наличия обременений'},
            {id: 7, title: 'Заключительный этап', text: 'Получение ключей и завершение сделки'},
            {id: 6, title: 'Подписание основного договора', text: 'Нотариальное удостоверение договора купли-продажи'},
            {id: 5, title: 'Заключение договора', text: 'Подготовка, подписание и проверка необходимых документов'},
          ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>