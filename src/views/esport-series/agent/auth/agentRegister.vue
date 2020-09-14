<template>
  <div class="register">
      <div class="submit-form">
        <div class="title">成为代理</div>
        <div class="item">
          <div class="reset">
            <span><img class="img" :src="$imgs['agent/agent_icon1']" alt/></span>
            <input type="text" autocomplete="off" v-model="agent.username" placeholder="请输入代理账户">
          </div>
          <div class="reset">
            <span><img class="img" :src="$imgs['agent/agent_icon2']" alt/></span>
            <input ref="psw" type="password" autocomplete="off" v-model="agent.password" placeholder="请输入登录密码">
            <img class="password-view" v-if="showPsw" @click="showWord"
                 :src="$imgs['agent/agent_icon3']" alt="">
            <img class="password-view" v-else @click="hideWord" :src="$imgs['agent/agent_icon4']"
                 alt="">
          </div>
          <div class="reset">
            <span><img class="img" :src="$imgs['agent/agent_icon5']" alt/></span>
            <input type="text" autocomplete="off" v-model="agent.wechat" placeholder="请输入微信号">
          </div>
          <div class="reset" v-show="false">
            <span><img class="img" :src="$imgs['agent/Skype@2x']" alt/></span>
            <input type="text" autocomplete="off" v-model="agent.skype" placeholder="请输入Skype账号">
          </div>
          <div class="reset">
            <span><img class="img" :src="$imgs['agent/agent_icon6']" alt /></span>

            <input type="text" autocomplete="off" v-model="agent.mobile" placeholder="请输入手机号码">
          </div>
        </div>
        <div class="ar-check">
          <p @click="toggleCheck">

            <i :class="arChecked?'on':''" v-if="$projectname != '10050'"></i>


            <i v-if="!arChecked && $projectname == '10050'"></i>
            <img class="xiala" v-if="arChecked && $projectname == '10050'" :src="$imgs['login/icon1@2x']" alt />
            <span>注册并接受《狂竞技游戏条款》</span></p>
        </div>
        <div class="function">
          <div class="aagames-button-box">
            <button type="button" class="aagames-button" @click="register">确定</button>
          </div>
        </div>
        <p class="to-login"><span>已有账号？请</span><router-link to="/agentAuth/login"> 登录</router-link></p>
      </div>
      <van-popup v-model="isShowAreaCode" position="bottom">
        <van-picker show-toolbar @confirm="onConfirmAreaCode" value-key="text" @cancel="onCancelAreaCode" :columns="arrAreaCode" />
      </van-popup>
    <loading :isShow="isLoading" :title="loadingText"></loading>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import Loading from '@/components/loading';

import { getcaptcha, register, login } from "@/api/agent/index";
import { phonearea } from '@/api/login/index';
import { ismail, isnum, checkPassword, checkUser, qqAcount } from "@/utils/index";

export default {
  name: "register",
  components: {
    Lheader,
    Loading,
  },
  data() {
    return {
      isLoading: false,
      loadingText: "注册中...",
      login: "登录",
      title: "代理注册",
      active: 0,
      isAgree: false,
      isImg: true,
      isShowAreaCode: false, // 是否显示国际区号上拉框
      // captcha: "",
      captchaImg: "",
      arrAreaCode: [],
      agent: {
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        mobile: "",
        phone_area_code: 86,
        username: "",
        password: "",
        repassword: "",
        email: "",
        qq: "",
        skype: "123",
        realname: ""
      },
      showPsw:true,
      arChecked:true
    };
  },
  methods: {
    toggleCheck(){
      this.arChecked = !this.arChecked;
    },
    showWord() {
      this.showPsw = false
      this.$refs.psw.setAttribute('type', 'text')
    },
    hideWord() {
      this.showPsw = false
      this.$refs.psw.setAttribute('type', 'password')
    },
    // 验证码
    capt() {
      getcaptcha().then(res => {
        this.isImg = false;
        this.captchaImg = res.data.data.captcha_url;
      });
    },
    // 链接
    linkTo(path) {
      this.$router.push({
        path: path
      })
    },
    // 获取手机国际区号
    async getPhoneAreaCode() {
      phonearea().then(res=> {
        if (res.data.code === 0) {
          this.arrAreaCode = res.data.data.map(item => {
            item = '+' + item;
            return item;
          });
        }
      })
    },
    // 关闭弹框
    onCancelAreaCode(val) {
      this.isShowAreaCode = false;
    },
    // 确认弹框
    onConfirmAreaCode(val) {
      this.isShowAreaCode = false;
      this.agent.phone_area_code = Number(val);
    },
    // 确认注册
    register() {
      // if (!this.isAgree) {
      //   this.$toast("请同意并接受《合作代理条款》");
      //   return false;
      // }
      if (!this.agent.username) {
        this.$toast.fail("请输入账号");
        return false;
      }
      if (!this.agent.password) {
        this.$toast.fail("请输入密码");
        return false;
      }
      // if (!this.agent.repassword) {
      //   this.$toast("请再次输入密码");
      //   return false;
      // }
      if (!this.agent.mobile) {
        this.$toast.fail("请输入手机号码");
        return false;
      }
      if (!this.agent.skype) {
        this.$toast.fail("请输入skype账号");
        return false;
      }
      // if (!this.agent.email) {
      //   this.$toast("请输入邮箱");
      //   return false;
      // }
      // if (!this.agent.qq) {
      //   this.$toast("请输入QQ号");
      //   return false;
      // }
      // if (!this.agent.realname) {
      //   this.$toast("请输入真实姓名");
      //   return false;
      // }
      /* if (!this.agent.captcha) {
        Toast("请输入验证码");
        return false;
      } */
      if (!checkUser(this.agent.username)) {
        this.$toast.fail("账号由6-12位英文字母或数字组成");
        return false;
      }
      if (!checkPassword(this.agent.password)) {
        this.$toast.fail("密码由6-12位英文字母或数字组成");
        return false;
      }
      // if (this.agent.password !== this.agent.repassword) {
      //   this.$toast("两次密码不一致");
      //   return false;
      // }
      if (!isnum(this.agent.mobile)) {
        this.$toast.fail("无效的手机号码");
        return false;
      }
      // if (!ismail(this.agent.email)) {
      //   this.$toast("无效的邮箱地址");
      //   return false;
      // }
      // if (!qqAcount(this.agent.qq)) {
      //   this.$toast("请输入5-12位数字");
      //   return false;
      // }
      this.isLoading = true;
      this.loadingText = "注册中...";
      this.agent.repassword = this.agent.password
      register(this.agent).then(res => {
        if (res.data.code === 0) {
          // this.loadingText = "注册成功，登录中...";
          this.$toast('注册成功，登录中...');
          this.isLoading = true;
          login(this.agent).then(res => {
            if (res.data.code === 0) {
              window.localStorage.agToken = res.data.data.access_token;
              window.localStorage.agId = res.data.data.id;
              this.$router.push("/agent");
            } else {
              this.$toast.fail(res.data.msg);
            }
          }).finally(()=>{
            this.isLoading = false;
          });
        } else {
          this.$toast.fail(res.data.msg);
        }
      }).finally(()=>{
        this.isLoading = false;
      })
    }
  },
  created() {
    try {
      let scrollY = document.getElementsByClassName('container')[0].offsetTop;
      window.scrollTo(0, scrollY);
    } catch (error) {

    }
    this.getPhoneAreaCode();
  }
};
</script>

<style scoped lang="less">
  @import "../index";
  .submit-form{
    padding: 0 60px;
    .title {
      font-size: 34px;
      color: #fff;
      text-align: center;
      font-weight: bold;
      margin: 80px 0;
    }
  }
  .function {
    margin-top: 60px;
    .aagames-button-box {
      margin-top: 60px;
      padding: 0 !important;
      box-sizing: border-box;
      text-align: center;
      .aagames-button {
        width: 360px;
        background:rgba(236,236,236,1);
        border-radius:6px;
        color: #333333;
        font-size: 32px;
      }
    }
    .funDiv {
      margin-top: .533333rem;
      color: #8e9ab5;
      font-size: 25px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 34px;
      i {
        width: 26px;
        height: 26px;
        margin-right: 5px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: inline-block;
        transform: translateY(20%);
      }
      a{
        text-decoration: underline;
        color: #666666;
      }
      .agree {

      }
      .disAgree {

      }
    }
  }
  .jiantou {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;

    input {
      width: 350px;
      padding: 20px;
      padding-left: 0;
      border: none;
      color: #333;
      font-size: 28px;
      line-height:normal;
    }
    input::placeholder {
      color: #b8b8b8;
      font-size: 28px;
    }
    button {
      color: #090705;
      font-size: 32px;
      border: none;
      font-weight: 700;
      background-color: #8b97b1;
    }
    .icon {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 62px;
    }
    .getImg {
      width: 192px;
      height: 62px;
    }
    span {
      color: #ffcf6e;
      font-size: 22px;
      margin-top: 30px;
      display: inline-block;
    }
  }
  .btn {
    margin-top: 65px;
    width: 100%;
    padding: 28px;
    background-color: #ffcf6e;
    border: none;
    color: #67382f;
    font-size: 32px;
    border-radius: 2px;
    font-weight: 700;
  }
  .logintip {
    text-align: center;
    font-size: .4rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: .56rem;
    margin: 1.066667rem auto 0 auto;
    span {
      color: rgba(51, 51, 51, 1);
      text-decoration: underline;
    }
  }
  .ar-check{
    text-align: left;
    p{
      display: flex;
      // align-items: center;
      // justify-content: center;
      font-size: 28px;
      color: #fff;
      text-align: left;
      i{
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 2px solid #ccc;
        margin-right: 20px;
        position: relative;
        &.on:after{
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: #fff;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
      span {
        margin-top: 10px;
      }
      img {
        width: 44px;
        height: 44px;
        margin-right: 20px;
      }
    }
  }
</style>
