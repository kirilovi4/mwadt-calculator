<template>
  <div class="calculator">
    <Screen>
      2900.5
    </Screen>
    <div class="calculator-body">
      <Button
        v-for="(button, i) in buttons"
        :key="i"
        :data="button"
      />
    </div>
  </div>
</template>

<script>
import Screen from './Screen.vue'
import Button from './Button.vue'

export default {
  components: {
    Screen,
    Button
  },
  data() {
    return {
      buttons: [
        {
          type: 'number',
          symbol: 'C'
        },
        {
          type: 'number',
          symbol: '+/-'
        },
        {
          type: 'number',
          symbol: '%'
        },
        {
          type: 'number',
          symbol: '÷'
        },
        {
          type: 'number',
          symbol: '7'
        },
        {
          type: 'number',
          symbol: '8'
        },
        {
          type: 'number',
          symbol: '9'
        },
        {
          type: 'number',
          symbol: 'x'
        },
        {
          type: 'number',
          symbol: '4'
        },
        {
          type: 'number',
          symbol: '5'
        },
        {
          type: 'number',
          symbol: '6'
        },
        {
          type: 'number',
          symbol: '-'
        },
        {
          type: 'number',
          symbol: '1'
        },
        {
          type: 'number',
          symbol: '2'
        },
        {
          type: 'number',
          symbol: '3'
        },
        {
          type: 'number',
          symbol: '+'
        },
        {
          type: 'number',
          symbol: '0'
        },
        {
          type: 'number',
          symbol: '.'
        },
        {
          type: 'number',
          symbol: '='
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.calculator {
  max-width: 414px;
  width: 100%;
  margin: auto;
  background: $red-gradient;
  &-button {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      color: rgba(255, 255, 255, .5);
    }
    &:nth-last-child(3) {
      grid-column: 1/3;
    }
    &:nth-last-child(1) {
      background-color: $color-red;
    }
  }
  &-body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 100px;
  }
}
</style>