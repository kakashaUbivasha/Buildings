<template>
  <div style="row-gap: 2em" class="d-flex flex-column bg-white position-absolute top-120 p-3">
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
    <div style="row-gap: 1em" class="grid3">
      <div class="text-start ms-3">
        <label for="select1">
          Тип недвижимости
        </label>
        <select-for-services :options="['Домовладения', 'Офисная', 'Складская', 'Гостиничная']" v-model="selectedOption1"/>
      </div>
      <div class="text-start ms-3">
        <label for="inp1">
          Площадь, м²
        </label>
        <div class="d-flex">
          <input class="" style="border-right: none" id="inp1" placeholder="От" type="text">
          <input class="" placeholder="До" type="text">
        </div>

      </div>
      <div class="text-start ms-3">
        <label for="btn">
          Комнатность
        </label>
        <div id="btn" class="w-50">
          <div class="d-flex">
            <button
                @click="setTrueAtIndex(0)"
                :class="isActives[0] ? 'is-active' : 'is-unactive'"
            >Студия</button>
            <button
                @click="setTrueAtIndex(1)"
                :class="isActives[1] ? 'is-active' : 'is-unactive'"
            >1</button>
            <button
                @click="setTrueAtIndex(2)"
                :class="isActives[2] ? 'is-active' : 'is-unactive'"
            >2</button>
            <button
                @click="setTrueAtIndex(3)"
                :class="isActives[3] ? 'is-active' : 'is-unactive'"
            >3</button>
            <button
                @click="setTrueAtIndex(4)"
                :class="isActives[4] ? 'is-active' : 'is-unactive'"
            >4+</button>
          </div>
        </div>
      </div>
      <div class="text-start ms-3">
        <div class="text-start">
          <label for="inp2">
            Площадь, м²
          </label>
          <div class="d-flex">
            <input style="border-right: none" id="inp2" placeholder="От" type="text">
            <input placeholder="До" type="text">
          </div>

        </div>
      </div>
        <div class="text-start ms-3">
          <label for="select2">
            Продавец
          </label>
          <select-for-services :options="['Ipoteka', 'JurneroStroy', 'Mellstroy', 'UzStroy']" v-model="selectedOption2"/>
        </div>
        <div class="text-start ms-3">
          <label for="inp3">
            Адрес
          </label>
          <input id="inp3" class="bigInp" type="text">
      </div>
    </div>
    <custom-button
        class="d-flex justify-content-end me-3"
    :text="text"
    />
  </div>
</template>

<script>
import CustomButton from "../../custom elements/customButton.vue";
import selectForServices from "./selectForServices.vue";
export default {
  components: {CustomButton,selectForServices},
  data(){
    return{
      isActives: [false, false, false,false,false],
      selectedOption1: null,
      selectedOption2: null,
      selectedIndex: 0,
      options: [
        {
          label: 'Квартиры',
          content: 'Текст для первой опции'
        },
        {
          label: 'Новостройки',
          content: 'Текст для второй опции'
        },
        {
          label: 'Дома и участки',
          content: 'Текст для второй опции'
        },
        {
          label: 'Коммерческая',
          content: 'Текст для третьей опции'
        }
      ],
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
    },
    setTrueAtIndex(index) {
      this.isActives = this.isActives.map((_, i) => i === index)
    }
  },
  props:{
    text:{
      type: String,
      default: 'Отправить заявку'
    }
  }
}
</script>

<style lang="scss" scoped>
.options-container {
  display: flex;
  justify-content: start;
  margin-bottom: 20px;
  gap: 120px;
  border-bottom: 1px solid #EAEAEA;
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
label{
  font-size: 16px;
  text-align: start;
  margin-bottom: 0.5em;
}
.is-active {
  height: 50px;
  min-width: 50px;
  background: #E1AF93;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 15px;
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
  height: 50px;
  border: 1px solid #EAEAEA;
  color: #333333;
  background: transparent;
  font-size: 15px;
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
.top-120{
  top: 120%;
}
input{
  border: 1px solid #B3B3B3;
  width: 46%;
  height: 50px;
  padding: 12px 16px 12px 16px;
}
select{
  width: 438px;
  padding: 12px 16px 12px 16px;
  border: 1px solid #B3B3B3;
}
.bigInp{
  width: 92%;
}
.dr{
  width: 438px;
  padding: 12px 16px 12px 16px;
  border: 1px solid #B3B3B3;
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
.dropdown-menu{
  width: 400px;
}
</style>