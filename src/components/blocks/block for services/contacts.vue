<template>
  <div class="text-block">
  <h3 class="block-title-h3">Контакты</h3>
  <div class="contacts">
    <div class="ccard">
    <div class="">
      <p style="color: #B3B3B3;">Телефон</p>
      <span class="text">
        +998 (90) 123 45 67
      </span>
    </div>
      <hr class="">
      <div class="">
        <p style="color: #B3B3B3;">E-mail</p>
        <span class="text">
        name@domain.uz
        </span>
      </div>
    </div>
    <div class="ccard">
      <p style="color: #B3B3B3;">Адрес</p>
      <span class="text">
        Узбекистан, г.Ташкент, ул.Такая-то, дом такой-то, Ориентир такой-то
      </span>
    </div>
    <div class="ccard">
      <p style="color: #B3B3B3;">График работы</p>
      <span class="text">
      09:00 - 18:00
      </span>
      <span class="text">пн-пт</span>
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.text{
  font-size: 30px;
  line-height: 36px;
  font-weight: 400;
}
.contacts{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.ccard{
  border: 1px solid #EAEAEA;
  display: flex;
  flex-direction: column;
  padding: 40px;
  text-align: start;
}

</style>