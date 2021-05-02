<template>
  <div class="calculator">
    <Screen :content="screenData" />
    <div class="calculator-body">
      <Button
        v-for="(button, i) in buttonsData"
        :key="i"
        :data="button"
        @buttonClicked="buttonClicked"
      />
    </div>
  </div>
</template>

<script>
import buttonsData from '@/data/buttonsData.json'
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
      buttonsData
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
      this.screenData = result;
    },
    multiplyAction() {
      const result = (this.previousValue * Number(this.screenData)).toString();
      this.screenData = result;
    },
    subtractAction() {
      const result = (this.previousValue - Number(this.screenData)).toString();
      this.screenData = result;
    },
    addAction() {
      const result = (this.previousValue + Number(this.screenData)).toString();
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
  position: relative;
  max-width: 414px;
  width: 100%;
  margin: auto;
  background: $red-gradient;
  overflow: hidden;
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