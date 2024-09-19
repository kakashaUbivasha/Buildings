<template>
  <div class="text-block-container">
    <div class="background-block"></div>
    <div class="text-block text-start">
      <div class="d-flex flex-column">
        <h3 class="block-title-h3">
          {{title}}
        </h3>
        <p style="color: #858585">
          {{text}}
        </p>
      </div>
      <div class="form-container">
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
        <custom-button @click="handleSubmit" :text="'Отправить заявку'" />
      </div>
    </div>
  </div>
</template>

<script>
import SelectForQuestion from "../../custom elements/selectForQuestion.vue";
import CustomInput from "../../custom elements/CustomInput.vue";
import CustomButton from "../../custom elements/customButton.vue";

export default {
  components: { CustomButton, CustomInput, SelectForQuestion },
  data() {
    return {
      form_input: [
        {id: '1', label: 'ФИО', typeInput: "text", value: '', errorMessage: '', isRequired: true},
        {id: '2', label: 'Номер телефона', typeInput: "phone", value: '', errorMessage: '', isRequired: true},
        {id: '3', label: 'E-mail', typeInput: "email", value: '', errorMessage: ''},
        {id: '4', label: 'Комментарий', typeInput: "text", value: '', errorMessage: ''}
      ],
      showErrors: false
    }
  },
  props:{
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
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
.text-block-container {
}

.background-block {
  position: absolute;
  top: 430%;
  right: 0;
  width: 100vw;
  height: 600px;
  background: #EDF3F5;
  z-index: 1;
}

.text-block {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  padding-top: 100px;
  padding-bottom: 40px;

  z-index: 1;
}

.form-container {
  margin-left: 60px;
}

.block-title-h3 {
  margin-bottom: 20px;
}
</style>
