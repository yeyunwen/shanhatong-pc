<template>
  <div class="login-layouts">
    <div class="logo">
      <a href="/">山哈通</a>
    </div>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
<style lang="scss" scoped>
@use "~/assets/styles/mixins.scss" as *;

.login-layouts {
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  background-image: url("/assets/images/login-bg.png");
  background-size: 100% 100%;
  overflow: hidden;
  .logo {
    @include useShtFont;
    position: absolute;
    top: 62px;
    left: 108px;
    font-size: 50px;
    font-weight: 400;
    color: #fff;
  }
  main {
    margin-top: 120px;
    margin-right: 160px;
  }
}
</style>
