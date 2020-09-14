<style scoped lang="less">
  @import "../index";
  .submit-form {
    padding: 0 60px;
    .title {
      font-size: 34px;
      color: #fff;
      text-align: center;
      font-weight: bold;
      margin: 80px 0;
    }
  }
</style>
<template>

  <div class="register submit-form">
    <div class="title">代理登录</div>
    <div class="reset">
      <span><img class="img" :src="$imgs['agent/agent_icon1']" alt/></span>
      <input type="text" placeholder="请输入代理账号" v-model="list.username">
    </div>
    <div class="reset">
      <span><img class="img" :src="$imgs['agent/agent_icon2']" alt/></span>
      <input type="password" placeholder="请输入密码" v-model="list.password" ref="psw">
      <img class="password-view" v-if="showPsw" @click="showWord"
           :src="$imgs['agent/agent_icon3']" alt="">
      <img class="password-view" v-else @click="hideWord" :src="$imgs['agent/agent_icon4']"
           alt="">
    </div>
    <div class="error">

    </div>
    <div class="aagames-button-box">
      <button class="aagames-button sign-in" @click="loginBtn" type="button">登录</button>
    </div>
    <div class="register-fr">
      <span><router-link to="/agRevisePassword">忘记密码？</router-link></span>
      <span><router-link to="/agentAuth/register">立即注册</router-link></span>
    </div>
    <div class="customer">
      <div class="wait" @click="$router.push('/')">
        <img :src="$imgs['otherIcon/zaigg@2x']" alt />
        再逛逛吧
      </div>
      <div class="cut-up"></div>
      <div class="kefu" @click="$openKefu">
        <img :src="$imgs['otherIcon/kefu@2x']" alt />
        专属客服
      </div>
    </div>
    <loading :isShow="isLoading" title="登录中..."></loading>

  </div>


</template>

<script>
  import Lheader from '@/components/l-header'

  import Loading from '@/components/loading'
  import agentRegister from './agentRegister'
  import {getcaptcha, login} from '@/api/agent/index'

  export default {
    name: 'login',
    components: {
      Loading,
      Lheader,
      agentRegister
    },
    data() {
      return {
        isLoading: false,
        login: '注册',
        title: '代理登录',
        active: 0,
        list: {},
        isImg: true,
        captchaImg: '',
        showPsw: true
      }
    },
    methods: {
      showWord() {
        this.showPsw = false
        this.$refs.psw.setAttribute('type', 'text')
      },
      hideWord() {
        this.showPsw = false
        this.$refs.psw.setAttribute('type', 'password')
      },
      capt() {
        getcaptcha().then(res => {
          this.isImg = false
          this.captchaImg = res.data.data.captcha_url
        })
      },
      loginBtn() {
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
            this.$toast.fail(res.data.msg)
          }
        }).finally(() => {
          this.isLoading = false
        })
      }
    },
    created() {
      try {
        let scrollY = document.getElementsByClassName('container')[0].offsetTop
        window.scrollTo(0, scrollY)
      } catch (error) {

      }
    }
  }
</script>

