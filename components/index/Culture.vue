<script lang="ts" setup>
import { getCultureListApi } from "@/interface/culture";

const {
  data: { list: cultureList },
} = await getCultureListApi();

const data = cultureList.slice(0, 4);
</script>

<template>
  <section class="recommend">
    <div class="head">
      <img src="~assets/images/vector.png" alt="" />
      <h1 class="title">文化科普</h1>
      <img src="~assets/images/vector.png" style="transform: rotateY(180deg)" />
    </div>
    <div class="content">
      <div class="list">
        <div v-for="item in data" :key="item.id" class="list-item">
          <img :src="item.cover" />
          <div class="list-item-content">
            <div class="list-item-title">{{ item.title }}</div>
            <div class="list-item-desc">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "~/assets/styles/mixins.scss" as *;
.recommend {
  margin-top: 30px;
  margin-bottom: 50px;
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    .title {
      @include useShtFont;
      font-size: 70px;
    }
  }
  .content {
    margin-top: 20px;

    .list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      margin: 0 auto;
      .list-item {
        box-sizing: border-box;
        display: flex;
        width: 513px;
        height: 198px;
        padding: 38px 33px;
        border: 1px solid rgb(255, 201, 194);
        border-radius: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        img {
          width: 122px;
          height: 122px;
          border-radius: 50%;
          margin-right: 40px;
        }
        .list-item-title {
          margin-bottom: 14px;
          font-size: 20px;
        }
        .list-item-desc {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: 0.2em;
        }
      }
    }
  }
}
</style>
