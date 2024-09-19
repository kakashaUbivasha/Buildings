<template>
  <div class="text-block">
    <h3 class="block-title-h3 mb-40 text-start">Рассчитайте ипотеку</h3>
    <div class="d-flex justify-content-between">
      <form @submit.prevent="validateAllInputs">
        <div class="grid-input">
          <custom-input
              v-for="(input, index) in form_input"
              :key="index"
              :id="input.id"
              :label="input.label"
              v-model="input.value"
              :is-error="input.isError"
              :error-message="input.errorMessage"
              :show-errors="showErrors"
              :placeholder="input.placeholder"
              @blur="validateInput(index)"
          />
        </div>

        <custom-button
            @click="validateAllInputs"
            :text="'Рассчитать'"
        />
      </form>
      <span class="divider"></span>
      <div class="grid-input">
        <div class="">
          <span class="custom-input__label">Ежемесячный платеж</span>
          <h6>{{form_output.monthPay}} y.e.</h6>
        </div>
        <div class="">
          <span class="custom-input__label">Сумма кредита</span>
          <h6>{{form_output.credits}} y.e.</h6>
        </div>
        <div class="">
          <span class="custom-input__label">Процентная ставка</span>
          <h6>{{form_output.tax}} %</h6>
        </div>
        <div class="">
          <span class="custom-input__label">Дата последнего платежа</span>
          <h6 v-if="form_output.last_date.length">{{form_output.last_date[2]}} {{monthName[+form_output.last_date[1]]}} {{form_output.last_date[0]}}г</h6>
          <h6 v-else>0</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from "../custom elements/CustomInput.vue";
import CustomButton from "../custom elements/customButton.vue";

export default {
  components: { CustomButton, CustomInput },
  data() {
    return {
      monthName:[
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
      ],
      form_input: [
        { id: '1', label: 'Стоимость недвижимости (у.е.)', placeholder: "Введите стоимость", value: '', isError: false, errorMessage: '' },
        { id: '2', label: 'Первоначальный взнос (у.е.)', placeholder: "Введите размер взноса", value: '', isError: false, errorMessage: '' },
        { id: '3', label: 'Срок в годах', placeholder: "Введите срок", value: '', isError: false, errorMessage: '' },
        { id: '4', label: 'Ставка (%)', placeholder: "Введите размер ставки", value: '', isError: false, errorMessage: '' }
      ],
      form_output: {
        monthPay: '0',
        credits: '0',
        last_date: [],
        tax: '0',
      },
      showErrors: false // Флаг для управления отображением ошибок
    };
  },
  methods: {
    validateInput(index) {
      const input = this.form_input[index];
      if (input.value.trim() === '') {
        input.isError = true;
        input.errorMessage = 'Это поле обязательно для заполнения';
      } else {
        input.isError = false;
        input.errorMessage = '';
      }
    },
    validateAllInputs() {
      this.showErrors = true;
      let isValid = true;
      this.form_input.forEach((input, index) => {
        this.validateInput(index);
        if (input.isError) {
          isValid = false;
        }
      });

      if (isValid) {
        // Преобразуем значения из form_input в числа
        const propertyValue = parseFloat(this.form_input[0].value);
        const downPayment = parseFloat(this.form_input[1].value);
        const loanTermYears = parseInt(this.form_input[2].value);
        const annualRate = parseFloat(this.form_input[3].value);

        // Вызываем функцию расчета
        const result = this.calculateLoanDetails(propertyValue, downPayment, loanTermYears, annualRate);

        // Обновляем form_output
        this.form_output.monthPay = result.monthlyPayment;
        this.form_output.credits = result.loanAmount;
        this.form_output.tax = result.annualRate;
        this.form_output.last_date = result.lastPaymentDate;
      }
    },
    calculateLoanDetails(propertyValue, downPayment, loanTermYears, annualRate) {
      // Сумма кредита
      const loanAmount = propertyValue - downPayment;

      // Месячная процентная ставка
      const monthlyRate = annualRate / 100 / 12;

      // Общее количество платежей
      const totalPayments = loanTermYears * 12;

      // Ежемесячный платеж (формула аннуитетного платежа)
      const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);

      // Дата последнего платежа
      const startDate = new Date();
      const lastPaymentDate = new Date(startDate.setMonth(startDate.getMonth() + totalPayments));

      // Форматируем дату в массив [год, месяц, день]
      const year = lastPaymentDate.getFullYear();
      const month = String(lastPaymentDate.getMonth() + 1).padStart(2, '0'); // Добавляем 1 и дополняем нулями
      const day = String(lastPaymentDate.getDate()).padStart(2, '0'); // Дополняем нулями

      return {
        monthlyPayment: monthlyPayment.toFixed(2),
        loanAmount: loanAmount.toFixed(2),
        annualRate: annualRate.toFixed(2),
        lastPaymentDate: [year.toString(), month, day] // Массив [год, месяц, день]
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-input{
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 40px;
}
.delta{
  width: 1px;

}
.custom-input__label {
  margin-bottom: 8px;
  font-weight: 400;
  color: #858585;
  transition: color 0.3s ease;
}
h6{
  font-size: 25px;
  font-weight: 500;
}
.divider {
  display: block;
  width: 1px; /* Ширина полоски */
  height: 192px; /* Высота полоски, измените по необходимости */
  background-color: #ccc; /* Цвет полоски */
  margin: 1rem auto; /* Отступы сверху и снизу для отделения от других элементов и выравнивание по центру */
}

</style>