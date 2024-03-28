<script lang="ts" setup>
import { getTravelDetailApi } from "@/interface/travel";

const route = useRoute();
const { data } = await getTravelDetailApi(Number(route.params.id));
</script>

<template>
  <div class="travel-detail">
    <h1 class="title">{{ data.title }}</h1>
    <img :src="data.cover" alt="" />
    <div class="content" v-html="data.content"></div>
  </div>
</template>

<style lang="scss" scoped>
.travel-detail {
  width: 1024px;
  margin: 0 auto;
  .title {
    margin: 20px 0;
  }
  .content {
    margin: 10px 0 100px;
  }
}
</style>
