<template>
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
          <div class="text-overlay position-absolute d-flex flex-column gap-1">
            <h4 class="img-title">{{object.name}}</h4>
            <p style="color: white">от ${{object.cost}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '../custom elements/customSelect.vue'

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
        { id: 1, name: 'Infinity', cost:'500000', imgSrc: '/newBuild1.jpg', district: 'A' },
        { id: 1, name: 'Harizma', cost:'700000', imgSrc: '/newBuild2.jpg', district: 'D' },
        { id: 1, name: 'Династия', cost:'120000', imgSrc: '/newBuild3.jpg', district: 'B' },
        { id: 1, name: 'Assalom Sohil', cost:'550000', imgSrc: '/newBuild4.jpg', district: 'B' },
        { id: 1, name: 'Assalom Havo', cost:'500000', imgSrc: '/newBuild5.jpg', district: 'C' },
        { id: 1, name: 'Assalom Jomiy', cost:'600000', imgSrc: '/newBuild6.jpg', district: 'E' }
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
.img-title{
  font-size: 35px;
  font-weight: 600;
  color: white;
}
.objects-list{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  row-gap: 1em;
}
.relative-container {
  position: relative;
  width: 467px;
  height: 600px;
}

.img-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(90%);
}

.text-overlay {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  padding: 10px;
  border-radius: 5px;
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
</style>