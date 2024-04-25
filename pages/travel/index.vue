<script lang="ts" setup>
import { getTravelListApi } from "@/interface/travel";

useSeoMeta({
  title: "山哈通 - 旅游推荐",
});

const { data } = await getTravelListApi();
const travelList = data.list;

onMounted(() => {
  const listContainer = document.getElementById("travel-list") as HTMLElement;
  const listItemsWidth = 300; // 先写死，后面可以根据媒体查询/vw 动态设置
  const travels = document.querySelectorAll(".travel-item");
  document.querySelectorAll(".travel-item img").forEach((e) => {
    (e as HTMLImageElement).addEventListener("load", () => {
      setPosition();
      console.log("load");
    });
  });

  console.log(travels);

  const cal = (): {
    width: number;
    containerLeft: number;
    containerTop: number;
    columns: number;
    gapH: number;
    gapV: number;
  } => {
    const containerWidth = listContainer.clientWidth;
    const containerLeft = listContainer.offsetLeft;
    const containerTop = listContainer.offsetTop;
    const width = document.querySelector(".travel-item")?.clientWidth || 0;
    // const width = 200;
    const columns = Math.floor(containerWidth / width);
    const gapH = (containerWidth - width * columns) / (columns - 1);
    const gapV = 24;

    return {
      width,
      containerLeft,
      containerTop,
      columns,
      gapH,
      gapV,
    };
  };

  const setPosition = () => {
    const layoutInfo = cal();
    const nextTops = new Array(layoutInfo.columns).fill(
      layoutInfo.containerTop
    );

    for (let i = 0; i < travels.length; i++) {
      const travel = travels[i] as HTMLElement;
      const minTop = Math.min(...nextTops);
      const minIndex = nextTops.indexOf(minTop);

      const top = minTop + "px";
      const left =
        layoutInfo.containerLeft +
        minIndex * layoutInfo.width +
        minIndex * layoutInfo.gapH +
        "px";
      nextTops[minIndex] += travel.offsetHeight + layoutInfo.gapV;

      travel.style.transform = `translate(${left}, ${top})`;
      const maxTop = Math.max(...nextTops);
      listContainer.style.height = maxTop + "px";
    }
  };

  setPosition();
  let timer: NodeJS.Timeout | null = null;

  window.addEventListener("resize", () => {
    if (timer) return;
    timer = setTimeout(() => {
      setPosition();
      timer = null;
    }, 300);
  });
});
</script>

<template>
  <div class="travel-container">
    <div id="travel-list">
      <section
        v-for="item in travelList"
        :key="item.tourismId"
        class="travel-item"
      >
        <a :href="`/travel/${item.tourismId}`" class="travel-item-cover">
          <img :src="item.cover" />
        </a>
        <div class="travel-item-info">
          <a :href="`/travel/${item.tourismId}`" class="travel-item-title">
            {{ item.title }}
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.travel-container {
  --column-width: calc(25vw - 30px);
  --travel-border-radius: 16px;
  max-width: 1680px;
  margin: 0 auto;
  #travel-list {
    width: 100%;

    .travel-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      transition: 0.3s;
      .travel-item-cover {
        display: flex;
        border-radius: var(--travel-border-radius);
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .travel-item-info {
        padding: 12px;
        user-select: auto;
        word-break: break-all;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
