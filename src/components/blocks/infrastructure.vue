<template>
  <div>
    <div class="d-flex flex-column">
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
      <div v-for="(option, index) in options" class="content-container">
        <div v-if="selectedIndex=== index" class="text-start">
          <p style="padding-bottom: 3em;">{{option.linkBlock}}</p>
          <div class="grid3">
            <div v-for="titleMag in option.titleMag">
              <h4>{{titleMag.title}}</h4>
              <p style="color: #858585">{{titleMag.time}}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return{
      selectedIndex: 0,
      options: [
        {
          label: 'Магазин',
          linkBlock: 'Наш район предлагает широкий выбор магазинов, чтобы удовлетворить любые потребности. В пешей доступности расположены крупные супермаркеты и продуктовые магазины, где вы всегда найдете свежие продукты и товары повседневного спроса',
          titleMag:[
            {title: 'Korzinka', time: '5 минут'},
            {title: 'Havas', time: '10 минут'},
            {title: 'FixPrice', time: 'рядом'},
            {title: 'REDTAG', time: '25 минут'},
          ]
        },
        {
          label: 'Транспорт',
          linkBlock: 'Наш1 район предлагает широкий выбор магазинов, чтобы удовлетворить любые потребности. В пешей доступности расположены крупные супермаркеты и продуктовые магазины, где вы всегда найдете свежие продукты и товары повседневного спроса',
          titleMag:[
            {title: 'Автобус', time: '5 минут'},
            {title: 'Метро', time: '10 минут'},
            {title: 'Такси', time: 'рядом'},
          ]
        },
        {
          label: 'Школы',
          linkBlock: 'Наш2 район предлагает широкий выбор магазинов, чтобы удовлетворить любые потребности. В пешей доступности расположены крупные супермаркеты и продуктовые магазины, где вы всегда найдете свежие продукты и товары повседневного спроса',
          titleMag:[
            {title: 'Школа 31', time: '5 минут'},
            {title: 'Школа 66', time: '10 минут'},
            {title: 'Улица', time: 'рядом'},
            {title: 'Школа 111', time: '25 минут'},
          ]
        }
      ],
    }
  },
  methods:{
    selectOption(index) {
      this.selectedIndex = index;
    },
  }
}
</script>

<style lang="scss" scoped>
.grid3{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2.5em;
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
</style>