<template>
  <div class="text-block d-flex justify-content-between mb-40" style="background: #EDF3F5">
    <div class="m-60">
      <div class="">
        <h3 class="block-title-h3 text-start" style="width: 588px">Остались вопросы? Свяжитесь с нами</h3>
      </div>
      <select-for-question
          v-for="(item, index) in form_input"
          :key="index"
          :label="item.label"
          :id="item.id"
          :type="item.typeInput"
          :is-required="item.isRequired"
          v-model="item.value"
          :is-error="showErrors && isFieldInvalid(item)"
          :error-message="item.errorMessage"
          @blur="validateInput(index)"
      />
      <custom-button @click="handleSubmit" :text="'Отправить'" />
    </div>
    <img src="/form-img.jfif" alt="">
  </div>
</template>

<script>
import SelectForQuestion from "../custom elements/selectForQuestion.vue";
import CustomInput from "../custom elements/CustomInput.vue";
import CustomButton from "../custom elements/customButton.vue";

export default {
  components: { CustomButton, CustomInput, SelectForQuestion },
  data() {
    return {
      form_input: [
        {id: '1', label: 'ФИО', typeInput: "text", value: '', errorMessage: '', isRequired: true},
        {id: '2', label: 'Номер телефона', typeInput: "phone", value: '', errorMessage: '', isRequired: true},
        {id: '3', label: 'E-mail', typeInput: "email", value: '', errorMessage: ''},
        {id: '4', label: 'Ваш вопрос', typeInput: "text", value: '', errorMessage: ''}
      ],
      showErrors: false
    }
  },
  methods: {
    isFieldInvalid(field) {
      return field.isRequired && field.value.trim() === '';
    },
    validateInput(index) {
      const input = this.form_input[index];
      if (this.isFieldInvalid(input)) {
        input.errorMessage = 'Это поле обязательно для заполнения';
      } else {
        input.errorMessage = '';
      }
    },
    validateAllInputs() {
      return this.form_input.every(input => !this.isFieldInvalid(input));
    },
    clearForm() {
      this.form_input.forEach(input => {
        input.value = '';
        input.errorMessage = '';
      });
      this.showErrors = false;
    },
    handleSubmit() {
      if (this.validateAllInputs()) {
        // Здесь можно добавить логику отправки формы
        alert('Форма отправлена');
        this.clearForm();
      } else {
        this.showErrors = true;
        this.form_input.forEach((input, index) => {
          this.validateInput(index);
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 100%;
  width: 40%;
}
.m-60 {
  margin-left: 60px;
  margin-top: 60px;
  padding-bottom: 60px;
}
</style>