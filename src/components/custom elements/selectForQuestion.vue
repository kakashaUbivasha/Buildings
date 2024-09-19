<template>
  <div class="custom-input text-start" :class="{ 'is-focused': isFocused, 'is-error': isError && showErrors }">
    <label :for="id" class="custom-input__label">
      {{ label }}
      <span v-if="isRequired" class="required-asterisk">*</span>
    </label>
    <input
        :id="id"
        :type="type"
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
    showErrors: {
      type: Boolean,
      default: false
    },
    isRequired: { // Новый пропс
      type: Boolean,
      default: false
    },
    type: { // Пропс для типа инпута
      type: String,
      default: 'text'
    },
    errorMessage:{
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'blur'],
  setup(props, { emit }) {
    const isFocused = ref(false);

    const updateValue = (event) => {
      emit('update:modelValue', event.target.value);
    };

    const handleBlur = () => {
      isFocused.value = false;
      emit('blur');
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
  margin-bottom: 4px;
  font-weight: 400;
  color: #858585;
  transition: all 0.3s ease;
  position: relative;
}

.custom-input__field {
  padding: 0.5rem;
  width: 350px;
  height: 50px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 1rem;
  background: transparent;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.custom-input__field:focus {
  outline: none;
  border-bottom: 1px solid #E1AF93;
  box-shadow: 0 2px rgba(0, 0, 0, 0.05);
}

.custom-input.is-focused .custom-input__label {
  font-size: 0.75rem;
  color: #E1AF93;
  transform: translateY(-0.8rem);
}

.custom-input.is-error .custom-input__label {
  color: #FF4F4F;
}

.custom-input.is-error .custom-input__field {
  border-bottom: 1px solid #FF4F4F;
}

.custom-input__error {
  margin-top: 0.25rem;
  font-weight: 400;
  font-size: 0.875rem;
  color: #FF4F4F;
}

.required-asterisk {
  color: #FF4F4F;
  margin-left: 0.25rem;
  font-size: 0.875rem;
}

</style>
