<template>
  <div class="main text-start mt-5" @mouseenter="showButton = true" @mouseleave="showButton = false">
    <div class="card-content">
      <img style="max-width: 100%" :src="imgSrc" alt="">
      <h4>{{title}}</h4>
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column gap-1">
          <p class="label">Этаж</p>
          <p class="label">Дом</p>
          <p class="label">Подъезд</p>
          <p class="label">Комнат</p>
        </div>
        <div class="d-flex flex-column gap-1">
          <p class="value">{{floor}}</p>
          <p class="value">{{home}}</p>
          <p class="value">{{porch}}</p>
          <p class="value">{{rooms}}</p>
        </div>
      </div>
      <hr>
      <span class="cost">${{cost}}</span>
      <custom-button v-if="showButton" class="d-flex justify-content-center" text="Забронировать" />
    </div>
  </div>
</template>

<script>
import CustomButton from "../custom elements/customButton.vue";

export default {
  components: { CustomButton },
  props: {
    imgSrc: { type: String, default: "" },
    floor: { type: String, default: "" },
    home: { type: String, default: "" },
    title: { type: String, default: "" },
    porch: { type: String, default: "" },
    rooms: { type: String, default: "" },
    cost: { type: String, default: "" }
  },
  data() {
    return {
      showButton: false
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 345px;
  border: 1px solid #EAEAEA;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    z-index: 2;
  }
}

.card-content {
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 1em;
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 0;
}

.cost {
  font-size: 25px;
  font-weight: 500;
  color: #E1AF93;
}

.label, .value {
  color: #B3B3B3;
  margin: 0;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>