<script lang="ts" setup>
useSeoMeta({
  title: "山哈通 - 首页",
});
</script>

<template>
  <div class="index-container">
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
@use "~/assets/styles/mixins.scss" as *;

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

<style lang="scss">
.index-container {
  header {
    background: transparent !important;
  }
}
</style>
