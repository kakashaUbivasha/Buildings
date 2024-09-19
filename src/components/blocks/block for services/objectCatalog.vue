<template>
  <div class="mb-80">
    <div class="d-flex" style="margin-bottom: 60px; gap: 1em">
      <custom-select
          title="Выберите район"
          :options="districtOptions"
          @option-selected="filterByDistrict"
          ref="districtSelect"
      />
      <custom-select
          title="Цена"
          :is-range="true"
          :range-min="0"
          :range-max="100"
          @range-changed="handleRangeChange"
          ref="rangeSelect"
      />
      <custom-select
          title="Тип жилья"
          :options="randomOptions"
          @option-selected="filterByDistrict1"
          ref="randomSelect"
      />
      <custom-select
          title="Количество комнат"
          :options="randomOptions"
          @option-selected="filterByDistrict1"
          ref="randomSelect"
      />
      <custom-select
          title="Срок сдачи"
          :options="randomOptions"
          @option-selected="filterByDistrict1"
          ref="randomSelect"
      />
      <span v-if="selectedDistrict" @click="deleteFilter" class="delete">Сбросить всё</span>
    </div>
    <div>
      <div class="objects-list">
        <div v-for="object in filteredObjects" :key="object.id">
          <div class="relative-container">
            <img class="img-background" :src="object.imgSrc" alt="">
            <div class=" d-flex flex-column gap-1">
              <p class="text-start">{{object.name}}</p>
              <span class="address">{{object.address}}</span>
              <span class="cost">от ${{object.cost}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '../../custom elements/customSelect.vue'

export default {
  components: {
    CustomSelect
  },
  data() {
    return {
      districtOptions: [
        { value: 'A', label: 'Алмазарский' },
        { value: 'B', label: 'Чиланзарский' },
        { value: 'C', label: 'Учтепинский' },
        { value: 'D', label: 'Юнусабадский' },
        { value: 'E', label: 'Яшнабадский' }
      ],
      randomOptions: [
        { value: 1, label: 'Опция 1' },
        { value: 2, label: 'Опция 2' },
        { value: 3, label: 'Опция 3' }
      ],
      objects: [
        { id: 1, name: 'Квартира в ЖК', address:'г.Ташкент, Алмазарский район, 15 квартал, 28 дом, 32 квартира', cost:'500000', imgSrc: '/catalog1.jfif', district: 'A' },
        { id: 2, name: 'Квартира, Ташкент', address:'г.Ташкент, Юнусабадский район, 15 квартал, 28 дом, 32 квартира', cost:'700000', imgSrc: '/catalog2.jfif', district: 'D' },
        { id: 3, name: 'Студия', cost:'120000', address:'г.Ташкент, Чиланзарский район, 15 квартал, 28 дом, 32 квартира', imgSrc: '/catalog3.jfif', district: 'B' },
        { id: 4, name: 'Квартира в ЖК', cost:'550000', address:'г.Ташкент, Чиланзарский район, 15 квартал, 28 дом, 32 квартира', imgSrc: '/catalog4.jfif', district: 'B' },
        { id: 5, name: 'Новая квартира', cost:'500000', address:'г.Ташкент, Учтепинский район, 15 квартал, 28 дом, 32 квартира', imgSrc: '/catalog5.jfif', district: 'C' },
        { id: 6, name: 'Новая квартира в ЖК', cost:'600000', address:'г.Ташкент, Яшнабадский район, 15 квартал, 28 дом, 32 квартира', imgSrc: '/catalog6.jfif', district: 'E' }
      ],
      selectedDistrict: null
    }
  },
  computed: {
    filteredObjects() {
      if (!this.selectedDistrict) return this.objects;
      return this.objects.filter(obj => obj.district === this.selectedDistrict);
    },
  },
  methods: {
    filterByDistrict(option) {
      this.selectedDistrict = option.value;
    },
    handleRangeChange(value) {
      console.log('Range value changed:', value);
    },
    deleteFilter() {
      this.resetAllSelects();
    },
    resetAllSelects() {
      this.selectedDistrict = null;
      this.selectedRandom = null;
      this.selectedRange = { min: 0, max: 100 };

      // Reset all custom selects
      this.$refs.districtSelect.resetSelect();
      this.$refs.randomSelect.resetSelect();
      this.$refs.rangeSelect.resetSelect();
    }
  }
}
</script>
<style scoped lang="scss">
.objects-list{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  row-gap: 10em;
}
.relative-container {
  width: 467px;
  height: 300px;
}

.img-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(90%);
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
.address{
  color: #B3B3B3;
  font-size: 18px;
  text-align: start;
}
.cost{
  color: #E1AF93;
  font-size: 24px;
  font-weight: 500;
  text-align: start;
}
.mb-80{
  margin-bottom: 180px;
}
</style>