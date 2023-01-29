<template>
  <div class="pc-login_view">
    <div class="pc-login_view_header">
      <img
        src="@/assets/images/logo.png"
        class="pc-login_view_header_logo"
      />
      颐信巧思
    </div>
    <div class="pc-login_view_container">
      <div class="pc-login_view_container_form">
        <h3 class="pc-login_view_container_form_title">欢迎使用颐信巧思</h3>
        <div class="pc-login_view_container_form_control">
          <a-input
            v-model:value="login.userName"
            type="text"
            placeholder="请输入账号"
            class="pc-login_view_container_form_control_value"
          />
        </div>
        <div class="pc-login_view_container_form_control">
          <a-input
            v-model:value="login.passWord"
            :type="state.type"
            placeholder="请输入密码"
            class="pc-login_view_container_form_control_value"
          />
          <img
            :src="state.show ? eyeOn : eyeOff"
            class="pc-login_view_container_form_control_icon"
            @click="onShowPwd()"
          />
        </div>
        <div class="pc-login_view_container_form_agree">
          <a-checkbox v-model:checked="login.remember">
            我已阅读并同意颐信巧思 <a @click="showDetail($event)">《用户协议》</a> 和 <a @click="showDetail($event)">《隐私政策》</a>
          </a-checkbox>
        </div>
        <a-button @click="loginSubmit" type="primary" class="pc-login_view_container_form_submit">登录</a-button>
      </div>
    </div>
    <div class="pc-login_view_footer">
      <span class="pc-login_view_footer_powered">Powered by</span>
      <span class="pc-login_view_footer_name">颐信巧思</span>
      <img
        src="@/assets/images/icon1.png"
        class="pc-login_view_footer_icon"
      />
      <img
        src="@/assets/images/icon2.png"
        class="pc-login_view_footer_icon"
      />
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { message } from 'ant-design-vue';
import {
  getLogin
} from '@/api/user';
import eyeOn from '@/assets/images/eye-on.png';
import eyeOff from '@/assets/images/eye-off.png';
const login = reactive({
  userName: '',
  passWord: '',
  remember: true,
});
const state = reactive({
  show: false,
  type: 'password',
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
const loginSubmit = () => {
  let {
    userName,
    passWord
  } = login;
  if (!userName) {
    message.error('请输入用户名');
    return;
  }
  if (!passWord) {
    message.error('请输入密码');
    return;
  }
  let params = {
    userName,
    passWord
  }
  getLogin(params)
    .then(res=>{
      let {
        message
      } = res;
      window.location.href = message;
    })
}
const onShowPwd = () => {
  state.show = !state.show;
  state.show ? state.type = 'text' : state.type = 'password';
  console.log(state.show)
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
