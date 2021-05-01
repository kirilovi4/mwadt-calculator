<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'
export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Actor', sans-serif;
  min-height: 100vh;
  display: flex;
}
</style>
