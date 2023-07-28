<template>
  <div class="base-input__label">
    <div class="base-input__content">
      <input v-model="value" class="base-input__input" :placeholder="placeholder" />
    </div>
    <div class="base-input__list">
      <div class="base-input__list-item" v-for="people of foundPeoples" :key="people.created">
        <div>{{ people.name }}</div>
        <div>{{ people.height }}</div>
        <div>{{ people.mass }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    modelValue: {
      type: String,
      required: false,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    foundPeoples() {
      return this.$store.state.foundPeoples;
    },
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.base-input {
  &__input {
    flex-grow: 1;

    &::placeholder {
      color: gray;
      opacity: 1; /* Firefox */
    }
  }

  &__content {
    border-radius: 8px;
    background: #ded5d5;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    padding: 12px;
    box-sizing: border-box;

    &:focus-within {
      background: white;
      border: 1px solid blue;
    }
  }

  &__list {
    background: gray;
    position: absolute;
    top: 50px;
    border: 1px solid gray;
  }

  &__list-item {
    padding: 5px 10px;
    display: flex;
    gap: 6px;
    border: 1px solid black;
  }

  &__label {
    position: relative;
    width: 400px;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
