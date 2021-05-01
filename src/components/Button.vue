<template>
  <button class="calculator-button" @click="$emit('buttonClicked', data)">
    {{ data.symbol }}
  </button>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.calculator-button {
  font-size: 30px;
  line-height: 36px;
  color: white;
  background-color: transparent;
  border: none;
  font-family: inherit;
  border: {
    right: 1px solid rgba(251, 255, 255, .1);
    bottom: 1px solid rgba(251, 255, 255, .1);
  }
  cursor: pointer;
  outline: none;
  transition: .1s box-shadow ease;
  &:active {
    box-shadow: rgba(44, 48, 89, .25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
}
</style>