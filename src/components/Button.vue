<template>
  <button class="calculator-button">
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
}
</style>