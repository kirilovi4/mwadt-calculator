<template>
  <div class="calculator">
    <Screen :content="screenData" />
    <div class="calculator-body">
      <Button
        v-for="(button, i) in buttons"
        :key="i"
        :data="button"
        @buttonClicked="buttonClicked"
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
      screenData: '0',
      screenDataNeedOverwrite: false,
      currentAction: null,
      previousValue: null,
      buttons: [
        { actionType: 'clear', symbol: 'C' },
        { actionType: 'signСhange', symbol: '+/-' },
        { actionType: 'percent', symbol: '%' },
        { actionType: 'divide', symbol: '÷' },
        { actionType: 'number', symbol: '7' },
        { actionType: 'number', symbol: '8' },
        { actionType: 'number', symbol: '9' },
        { actionType: 'multiply', symbol: 'x' },
        { actionType: 'number', symbol: '4' },
        { actionType: 'number', symbol: '5' },
        { actionType: 'number', symbol: '6' },
        { actionType: 'subtract', symbol: '-' },
        { actionType: 'number', symbol: '1' },
        { actionType: 'number', symbol: '2' },
        { actionType: 'number', symbol: '3' },
        { actionType: 'add', symbol: '+' },
        { actionType: 'number', symbol: '0' },
        { actionType: 'number', symbol: '.' },
        { actionType: 'result', symbol: '=' }
      ]
    }
  },
  methods: {
    clearAction() {
      this.screenData = '0';
      this.screenDataNeedOverwrite = false;
      this.currentAction = null;
    },
    signСhangeAction() {
      this.screenData = (Number(this.screenData) * -1).toString();
    },
    percentAction() {
      this.screenData = (Number(this.screenData) / 100).toString();
    },
    divideAction() {
      const result = (this.previousValue / Number(this.screenData)).toString();
      fetch(`/result?value1=${this.previousValue}&value2=${this.screenData}&operator=÷&result=${result}`);
      this.screenData = result;
    },
    multiplyAction() {
      const result = (this.previousValue * Number(this.screenData)).toString();
      fetch(`/result?value1=${this.previousValue}&value2=${this.screenData}&operator=x&result=${result}`);
      this.screenData = result;
    },
    subtractAction() {
      const result = (this.previousValue - Number(this.screenData)).toString();
      fetch(`/result?value1=${this.previousValue}&value2=${this.screenData}&operator=-&result=${result}`);
      this.screenData = result;
    },
    addAction() {
      const result = (this.previousValue + Number(this.screenData)).toString();
      fetch(`/result?value1=${this.previousValue}&value2=${this.screenData}&operator=+&result=${result}`);
      this.screenData = result;
    },
    resultAction() {
      if (!this.currentAction || this.screenDataNeedOverwrite) {
        return;
      }
      this[`${this.currentAction}Action`]();
      this.currentAction = null;
    },
    numberAction(number) {
      const adaptedNumber = number === '.' ? '0.' : number;
      if (this.screenData === '0' || this.screenDataNeedOverwrite) {
        this.screenData = adaptedNumber;
        this.screenDataNeedOverwrite = false;
        return;
      }
      this.screenData += adaptedNumber;
    },
    buttonClicked(data) {
      if (data.actionType === 'number') {
        this[`${data.actionType}Action`](data.symbol);
        return;
      }
      if (['clear', 'signСhange', 'percent', 'result'].includes(data.actionType)) {
        this[`${data.actionType}Action`]();
        return;
      }
      if (!this.screenDataNeedOverwrite && this.currentAction) {
        this[`${this.currentAction}Action`]();
      }
      this.currentAction = data.actionType;
      this.screenDataNeedOverwrite = true;
      this.previousValue = Number(this.screenData);
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