<template>
  <div class="login_view">
    <div class="login_view_header">
      <img
        src="@/assets/images/m_logo.png"
        class="login_view_header_logo"
      />
    </div>
    <div class="login_view_container">
      <div class="login_view_container_form">
        <h3 class="login_view_container_form_title">欢迎使用颐信巧思</h3>
        <div class="login_view_container_form_control">
          <a-input
            v-model:value="login.userName"
            type="text"
            placeholder="请输入账号"
            class="login_view_container_form_control_value"
          />
        </div>
        <div class="login_view_container_form_control">
          <a-input
            v-model:value="login.passWord"
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
        <div class="login_view_container_form_action">
          <a-button @click="loginSubmit" type="primary" class="login_view_container_form_submit">登录</a-button>
          <p class="login_view_container_form_cancel">取消</p>
        </div>
      </div>
    </div>
    <!-- <div class="login_view_footer">
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
    </div> -->
  </div>
</template>
<script setup>
import { message } from 'ant-design-vue';
import { reactive } from 'vue';
import '@/utils/rem';
import {
  getLogin
} from '@/api/user';
const login = reactive({
  userName: '',
  passWord: '',
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
      console.log('res', res);
    })
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
