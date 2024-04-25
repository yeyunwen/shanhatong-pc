<script lang="ts" setup>
const route = useRoute();

const indexStyle = computed(() => {
  return {
    index: route.name === "index",
  };
});

const { user, isLogin, logout } = useUserInfo();

const logoutHandler = () => {
  logout();
};

const mallUrl = ref("http://localhost:3301");
const { auth } = useAuth();

const goToMall = () => {
  if (auth.value.token) {
    mallUrl.value = `${mallUrl.value}?token=${auth.value.token}`;
  }
  window.open(mallUrl.value, "_blank");
};
</script>

<template>
  <div class="default-layout" :class="indexStyle">
    <slot name="header">
      <header class="header">
        <nav>
          <div class="left">
            <a class="left-item logo" href="/">山哈通</a>
          </div>
          <div class="right">
            <a class="right-item" href="/culture">文化科普</a>
            <a class="right-item" href="/travel">旅游推荐</a>
            <a class="right-item mall" cursor-pointer @click="goToMall">
              畲族商城
            </a>
            <div v-if="isLogin" class="right-item">
              <a cursor-pointer>{{ user.username }}</a>
              <span style="margin: 0 8px">|</span>
              <span class="right-item" cursor-pointer @click="logoutHandler"
                >退出</span
              >
            </div>
            <a v-else class="right-item" href="/login">登录/注册</a>
          </div>
        </nav>
      </header>
    </slot>
    <main class="main">
      <slot name="default"></slot>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/mixins.scss" as *;
@use "~/assets/styles/var.scss" as *;

.default-layout {
  header {
    @include useShtFont;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    background-color: #fff;
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1080px;
      height: 64px;
      margin: 0 auto;
      font-size: 32px;
      color: #333;
      .logo {
        color: $sht-color-primary;
      }
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

    &.index {
      background-color: transparent;
    }
  }

  main {
    margin-top: 64px;
  }

  &.index {
    header {
      background-color: transparent;
      nav {
        color: #fff;
      }
    }
    main {
      margin-top: 0;
    }
  }
}
</style>
