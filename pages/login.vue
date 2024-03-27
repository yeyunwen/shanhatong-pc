<script lang="ts" setup>
import { VBtn, VForm, VTextField } from "vuetify/components";

definePageMeta({
  layout: "account",
});

useSeoMeta({
  title: "山哈通 - 登录",
});

const showPassword = ref(false);
const pwdInputType = computed(() => (showPassword.value ? "text" : "password"));
const pwdIconType = computed(() =>
  showPassword.value ? "mdi-eye" : "mdi-eye-off"
);
</script>

<template>
  <div class="login-container">
    <div class="header">
      <h2 class="title">欢迎登录</h2>
      <div class="info">
        <span>没有账号？</span>
        <a href="/register">注册</a>
      </div>
    </div>
    <div class="body">
      <VForm validate-on="submit">
        <VTextField
          label="邮箱或手机号"
          clearable
          style="width: 420px"
          :rules="[(v) => !!v || '不能为空']"
        ></VTextField>
        <VTextField
          label="密码"
          clearable
          :append-inner-icon="pwdIconType"
          :type="pwdInputType"
          style="width: 420px"
          :rules="[(v) => !!v || '不能为空']"
          @click:append-inner="() => (showPassword = !showPassword)"
        ></VTextField>
      </VForm>

      <v-btn size="x-large" width="420px" color="#ff7135">登录</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
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
