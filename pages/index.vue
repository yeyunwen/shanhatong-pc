<script lang="ts" setup></script>

<template>
  <div class="container">
    <header>
      <nav>
        <div class="left">
          <div class="left-item">山哈通</div>
        </div>
        <div class="right">
          <div class="right-item">文化科普</div>
          <div class="right-item">旅游推荐</div>
          <div class="right-item mall">畲族商城</div>
          <div class="right-item">登录/注册</div>
        </div>
      </nav>
    </header>
    <section class="banner">
      <video autoplay loop muted class="banner-video">
        <source src="~/assets/videos/banner.mp4" type="video/mp4" />
      </video>
    </section>
    <IndexRecommend />
    <IndexCulture />
  </div>
</template>
<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1080px;
    height: 64px;
    margin: 0 auto;
    font-size: 32px;
    color: #fff;
    .left {
      display: flex;
    }
    .right {
      display: flex;
      align-items: center;
      .right-item:not(:last-child) {
        margin-right: 30px;
      }
      .mall {
        padding: 5px 20px;
        border: 2px solid rgb(255, 255, 255);
        border-radius: 4px;
      }
    }
  }
}

.banner {
  height: 100vh;
  width: 100%;
  .banner-video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>
