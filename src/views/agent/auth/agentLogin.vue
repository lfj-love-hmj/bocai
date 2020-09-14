<style scoped lang="less">
    @import "../index";
</style>
<template>

    <div class="register submit-form">
        <div class="reset">
            <img class="img" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/user@2x.png')" alt/>
            <input type="text" placeholder="代理账户" v-model="list.username">
        </div>
        <div class="reset">
            <img class="img" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/pass@2x.png')" alt/>
            <input type="password" placeholder="登录密码" v-model="list.password">
        </div>
        <div class="error">

        </div>
        <div class="aagames-button-box">
            <button class="aagames-button sign-in" @click="loginBtn" type="button">登录</button>
        </div>
        <loading :isShow="isLoading" title="登录中..."></loading>

    </div>


</template>

<script>
  import Lheader from '@/components/l-header'

  import Loading from '@/components/loading'
  import agentRegister from './agentRegister'
  import { getcaptcha, login } from '@/api/agent/index'

  export default {
    name: 'login',
    components: {
      Loading,
      Lheader,
      agentRegister
    },
    data () {
      return {
        isLoading: false,
        login: '注册',
        title: '代理登录',
        active: 0,
        list: {},
        isImg: true,
        captchaImg: ''
      }
    },
    methods: {
      capt () {
        getcaptcha().then(res => {
          this.isImg = false
          this.captchaImg = res.data.data.captcha_url
        })
      },
      loginBtn () {
        if (!this.list.username) {
          this.$toast.fail('请输入账号')
          return false
        }
        if (!this.list.password) {
          this.$toast.fail('请输入密码')
          return false
        }
        // if (!this.list.captcha) {
        //   this.$toast('请输入验证码');
        //   return false;
        // }
        // if (!checkUser(this.list.username)) {
        //   this.$toast('账号由6-12位英文字母或数字组成');
        //   return false;
        // }
        // if (!checkPassword(this.list.password)) {
        //   this.$toast('密码由6-12位英文字母或数字组成');
        //   return false;
        // }
        this.list.merchant_no = process.env.VUE_APP_MERCHANT_NO
        this.isLoading = true
        login(this.list).then(res => {
          if (res.data.code === 0) {
            window.localStorage.agToken = res.data.data.access_token
            window.localStorage.agId = res.data.data.id
            this.$router.push({path: '/agent'})
          } else {
            this.$toast(res.data.msg)
          }
        }).finally(() => {
          this.isLoading = false
        })
      }
    },
    created () {
      try {
        let scrollY = document.getElementsByClassName('container')[0].offsetTop
        window.scrollTo(0, scrollY)
      } catch (error) {

      }
    }
  }
</script>

