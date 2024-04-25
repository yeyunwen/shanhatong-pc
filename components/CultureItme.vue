<script lang="ts" setup>
import type { Culture } from "@/interface/culture/type";

const props = defineProps<Culture>();

const router = useRouter();

const goToDetail = (id: number) => {
  router.push(`/culture/${id}`);
};
</script>

<template>
  <div mx-auto my-0 w-1080px>
    <div flex justify-between>
      <img :src="props.cover" alt="" w-374px h-250px border-rd-10px mr-40px />
      <div flex-1 flex flex-col>
        <div mb-30px>{{ props.title }}</div>
        <div>{{ props.description }}</div>
        <div grid-self-end mt-20px cursor-pointer @click="goToDetail(props.id)">
          查看详情
        </div>
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  align-self: start;
}
</style>
