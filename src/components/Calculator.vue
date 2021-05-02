<template>
  <div class="calculator">
    <History :class="{'hidden': !historyVisible}" />
    <button
      class="calculator-history-toggle"
      @click="historyVisible=!historyVisible"
    >
      <span v-if="historyVisible">Hide history</span>
      <span v-else>Show history</span>
    </button>
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
import History from './History.vue'
import Screen from './Screen.vue'
import Button from './Button.vue'

export default {
  components: {
    History,
    Screen,
    Button
  },
  data() {
    return {
      screenData: '0',
      screenDataNeedOverwrite: false,
      currentAction: null,
      previousValue: null,
      buttonsData,
      historyVisible: false
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
      this.recordOperation(this.previousValue, this.screenData, '÷', result);
      this.screenData = result;
    },
    multiplyAction() {
      const result = (this.previousValue * Number(this.screenData)).toString();
      this.recordOperation(this.previousValue, this.screenData, 'x', result);
      this.screenData = result;
    },
    subtractAction() {
      const result = (this.previousValue - Number(this.screenData)).toString();
      this.recordOperation(this.previousValue, this.screenData, '-', result);
      this.screenData = result;
    },
    addAction() {
      const result = (this.previousValue + Number(this.screenData)).toString();
      this.recordOperation(this.previousValue, this.screenData, '+', result);
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
    },
    recordOperation(value1, value2, operator, result) {
      const fetchUrl = `/result?value1=${value1}&value2=${value2}&operator=${encodeURIComponent(operator)}&result=${result}`;
      fetch(fetchUrl);
    }
  },
  watch: {
    historyVisible(newValue) {
      if (!newValue) {
        return;
      }
      this.$emit('historyRequest');
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
  &-history-toggle {
    max-width: 140px;
    width: 100%;
    position: absolute;
    padding: 8px;
    background-color: transparent;
    color: white;
    font-family: inherit;
    font-size: 16px;
    border: none;
    background-color: $color-red;
    box-shadow: rgba(0, 0, 0, .15) 1.95px 1.95px 2.6px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    outline: none;
    transition: box-shadow .2s ease;
    &:active {
      box-shadow: none;
    }
  }
}
</style>