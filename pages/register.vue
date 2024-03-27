<script lang="ts" setup>
import { VBtn, VForm, VTextField } from "vuetify/components";

definePageMeta({
  layout: "account",
});

useSeoMeta({
  title: "山哈通-注册",
});

const showPassword = ref(false);
const pwdInputType = computed(() => (showPassword.value ? "text" : "password"));
const pwdIconType = computed(() =>
  showPassword.value ? "mdi-eye" : "mdi-eye-off"
);
</script>

<template>
  <div class="register-container">
    <div class="header">
      <h2 class="title">欢迎注册</h2>
      <div class="info">
        <span>已有账号？</span>
        <a href="/login">登录</a>
      </div>
    </div>
    <div class="body">
      <VForm>
        <VTextField label="用户名" clearable style="width: 420px"></VTextField>
        <VTextField
          label="邮箱或手机号"
          clearable
          style="width: 420px"
        ></VTextField>
        <VTextField
          label="密码"
          clearable
          :append-inner-icon="pwdIconType"
          :type="pwdInputType"
          style="width: 420px"
          @click:append-inner="() => (showPassword = !showPassword)"
        ></VTextField>
        <VTextField
          label="确认密码"
          clearable
          :append-inner-icon="pwdIconType"
          :type="pwdInputType"
          style="width: 420px"
          @click:append-inner="() => (showPassword = !showPassword)"
        ></VTextField>
      </VForm>

      <v-btn size="x-large" width="420px" color="#ff7135">注册</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register-container {
  padding: 60px 48px 53px;
  border-radius: 21px;
  background: rgba(255, 255, 255, 0.88);
  .header {
    .title {
      font-size: 50px;
      font-weight: 700;
    }
    .info {
      font-size: 15px;
      a {
        color: #ff7135;
      }
    }
  }
  .body {
    margin-top: 64px;
  }
}
</style>
