<script lang="ts" setup>
import { getCultureListApi } from "@/interface/culture";
import { CultureCategoryEnum } from "@/interface/culture/type";

const {
  data: { list: cultureList },
} = await getCultureListApi();
</script>

<template>
  <div mx-auto my-0 w-1080px>
    <section>
      <div text-20px mt-15px>特色节日</div>
      <div
        v-for="item in cultureList.filter(
          (item) => item.category === CultureCategoryEnum.节日
        )"
        :key="item.id"
        mt-15px
      >
        <CultureItme v-bind="item" />
      </div>
    </section>
    <section>
      <div text-20px mt-15px>特色风俗</div>
      <div
        v-for="item in cultureList.filter(
          (item) => item.category === CultureCategoryEnum.风俗
        )"
        :key="item.id"
        mt-15px
        cursor-pointer
      >
        <CultureItme v-bind="item" />
      </div>
    </section>
  </div>
</template>
