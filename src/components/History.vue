<template>
  <div class="calculator-history">
    <p class="calculator-history__item" v-for="item in historyData" :key="item._id">
      {{ item.value1 }} {{ item.operator }} {{ item.value2 }} = {{ item.result }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      historyData: []
    }
  },
  created() {
    this.fetchHistoryData();
    this.$parent.$on('historyRequest', this.fetchHistoryData);
  },
  methods: {
    fetchHistoryData() {
      fetch('/stats')
        .then(res => res.json())
        .then(data => (this.historyData = data));
    }
  }
}
</script>

<style lang="scss">
.calculator-history {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 58px;
  transition: transform .4s ease-out;
  background: $blue-gradient;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &.hidden {
    transform: translateY(-100%);
  }
  &__item {
    font-size: 36px;
    line-height: 160%;
    color: rgba(255, 255, 255, .75);
    & + & {
      border-top: 2px solid rgba(255, 255, 255, .1);
    }
  }
}
</style>