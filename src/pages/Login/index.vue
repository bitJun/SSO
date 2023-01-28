<template>
  <div class="login_view">
    <div class="login_view_header">
      <img
        src="@/assets/images/logo.png"
        class="login_view_header_logo"
      />
      颐信巧思
    </div>
    <div class="login_view_container">
      <div class="login_view_container_form">
        <h3 class="login_view_container_form_title">欢迎使用颐信巧思</h3>
        <div class="login_view_container_form_control">
          <a-input
            v-model:value="login.username"
            type="text"
            placeholder="请输入账号"
            class="login_view_container_form_control_value"
          />
        </div>
        <div class="login_view_container_form_control">
          <a-input
            v-model:value="login.password"
            type="password"
            placeholder="请输入密码"
            class="login_view_container_form_control_value"
          />
        </div>
        <div class="login_view_container_form_agree">
          <a-checkbox v-model:checked="login.remember">
            我已阅读并同意颐信巧思 <a @click="showDetail($event)">《用户协议》</a> 和 <a @click="showDetail($event)">《隐私政策》</a>
          </a-checkbox>
        </div>
        <a-button type="primary" class="login_view_container_form_submit">登录</a-button>
      </div>
    </div>
    <div class="login_view_footer">
      <span class="login_view_footer_powered">Powered by</span>
      <span class="login_view_footer_name">颐信巧思</span>
      <img
        src="@/assets/images/icon1.png"
        class="login_view_footer_icon"
      />
      <img
        src="@/assets/images/icon2.png"
        class="login_view_footer_icon"
      />
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
const login = reactive({
  username: '',
  password: '',
  remember: true,
});
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const showDetail = (e) => {
  e.stopPropagation(); 
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
