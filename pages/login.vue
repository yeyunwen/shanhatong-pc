<script lang="ts" setup>
import { VBtn, VForm, VTextField } from "vuetify/components";
import type { UserForm } from "@/interface/user/type";
import { loginApi } from "@/interface/user";
import { getUserInfoApi } from "@/interface/user";

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

const userForm = ref<UserForm>({
  contact: "",
  password: "",
});

const route = useRoute();
const router = useRouter();
const { setAuth } = useAuth();
const { setUserInfo } = useUserInfo();

const getRedirect = () => {
  return route.query.redirect ? String(route.query.redirect) : "/";
};

const getOrigin = () => {
  return route.query.origin ? String(route.query.origin) : undefined;
};

const origin = getOrigin();

const loginHandler = () => {
  loginApi(userForm.value)
    .then((res) => {
      const { data: auth, code, msg } = res;
      if (code !== 200) {
        ElMessage.error(msg);
      } else {
        setAuth({ token: `${auth.tokenType} ${auth.accessToken}` }).then(() => {
          getUserInfoApi().then((res) => {
            setUserInfo(res.data);
            if (origin) {
              const targetUrl =
                new URL(origin) +
                `?token=${`${auth.tokenType} ${auth.accessToken}`}`;
              window.open(targetUrl, "_self");
            } else {
              router.push(getRedirect());
            }
          });
        });
      }
    })
    .catch((err) => {
      ElMessage.error("用户名或密码错误");
    });
};

const contactRuls = [
  (value: string) => {
    if (value) return true;
    return "邮箱或手机号不能为空";
  },
];

const passwordRuls = [
  (value: string) => {
    if (value) return true;
    return "密码不能为空";
  },
];
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
      <VTextField
        v-model="userForm.contact"
        label="邮箱或手机号"
        clearable
        style="width: 420px"
        required
        :rules="contactRuls"
      ></VTextField>
      <VTextField
        v-model="userForm.password"
        label="密码"
        clearable
        :append-inner-icon="pwdIconType"
        :type="pwdInputType"
        style="width: 420px"
        :rules="passwordRuls"
        @click:append-inner="() => (showPassword = !showPassword)"
      ></VTextField>

      <v-btn size="x-large" width="420px" color="#ff7135" @click="loginHandler"
        >登录</v-btn
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/var.scss" as *;

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
        color: $sht-color-primary;
      }
    }
  }
  .body {
    margin-top: 64px;
  }
}
</style>
