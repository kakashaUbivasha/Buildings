<template>
  <div class="custom-input text-start" :class="{ 'is-focused': isFocused, 'is-error': isError && showErrors }">
    <label :for="id" class="custom-input__label">{{ label }}</label>
    <input
        :id="id"
        type="text"
        :value="modelValue"
        @input="updateValue"
        @focus="isFocused = true"
        @blur="handleBlur"
        class="custom-input__field"
        :placeholder="placeholder"
    >
    <span v-if="isError && showErrors" class="custom-input__error">{{ errorMessage }}</span>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: true
    },
    isError: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    },
    showErrors: { // Добавляем новый пропс
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'blur'],
  setup(props, { emit }) {
    const isFocused = ref(false);

    const updateValue = (event) => {
      const value = event.target.value;
      // Разрешаем только цифры и точку для десятичных чисел
      if (/^[0-9]*\.?[0-9]*$/.test(value) || value === '') {
        emit('update:modelValue', value);
      }
    };

    const handleBlur = (event) => {
      isFocused.value = false;
      emit('blur', event);
    };

    return {
      isFocused,
      updateValue,
      handleBlur
    };
  }
});
</script>

<style scoped>
.custom-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.custom-input__label {
  margin-bottom: 8px;
  font-weight: 400;
  color: #858585;
  transition: color 0.3s ease;
}

.custom-input__field {
  padding: 0.5rem;
  width: 350px;
  height: 50px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.custom-input__field:focus {
  outline: none;
  border-color: #E1AF93;
  box-shadow: 0 2px rgba(0, 0, 0, 0.05);
}

.custom-input.is-focused .custom-input__label {
  color: #E1AF93;
}

.custom-input.is-error .custom-input__label,
.custom-input.is-error .custom-input__error {
  color: #FF4F4F;
}

.custom-input.is-error .custom-input__field {
  border-color: #FF4F4F;
}

.custom-input__error {
  margin-top: 0.25rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 20.23px;
}
</style>
