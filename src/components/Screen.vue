<template>
  <div class="calculator-screen">
    <slot />
  </div>
</template>

<style lang="scss">
.calculator-screen {
  background: $blue-gradient;
  padding: 110px 58px 22px;
  font-size: 72px;
  line-height: 87px;
  color: white;
  text-align: end;
}
</style>