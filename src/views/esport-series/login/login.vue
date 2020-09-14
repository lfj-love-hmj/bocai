<style lang="less" scoped>
@import "login";
@import '~@assets/styles/login/index.less';
</style>
<template>
  <div class="container login">

    <div class="main" id="home">
      <div class="home">
        <div class="login-top">
          <img :src="$imgs['login/logo']" alt="">
          <img :src="$imgs['login/logo_close']" alt="" @click="$router.push('/')">
        </div>
        <van-tabs @click="tabChange" line-width=".64rem" line-height=".08rem" :color="$colorjs.baseColor">
          <van-tab v-for="item in tab" :key="item" :title="item" class="tab-list"></van-tab>
        </van-tabs>
        <div class="line"></div>
        <div class="fill">
          <!-- 账号密码登录入口 -->
          <div v-show="active === 0">
            <div class="aagames-form">
              <div class="input">
                <!-- <img class="img" :src="$imgs['otherIcon/user@2x']" alt /> -->
                <input type="text" v-model="account.username" placeholder="请输入账号" />
              </div>
            </div>
            <div class="aagames-form">
              <div class="input">
                <!-- <img class="img" :src="$imgs['otherIcon/pass@2x']" alt /> -->
                <input type="password" v-model="account.password" placeholder="请输入密码" />
              </div>
            </div>
          </div>
          <!-- 手机登录入口 -->
          <div v-show="active === 1">
            <div class="aagames-form">
              <div class="input">
                <!-- <img class="img phone" :src="$imgs['otherIcon/shouji@2x']" alt /> -->
                <phoneArea v-model="areaCode">
                  <i class="areaNum">
                    &nbsp;+{{ areaCode }}
                    <img class="xiala" :src="$imgs['otherIcon/xiala@2x']" alt />
                  </i>
                </phoneArea>

                <input type="text" v-model="phoneSign.phone" placeholder="请输入手机号" />
              </div>
            </div>
            <gcode
              :account="phoneSign.phone"
              :withLabel="false"
              :withIcon="false"
              :areaCode="areaCode"
              @getCode="getCodeC"
              @myCode="myCodeC"
            ></gcode>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="function">
          <div class="aagames-button-box funDiv">
            <div class="left rem-pass" @click="togglePass">
              <van-icon name="circle" v-if="passCheck" />
              <img class="xiala" v-if="!passCheck && $projectname == '10050'" :src="$imgs['login/icon1@2x']" alt />
              <van-icon v-if="!passCheck && $projectname != '10050'" name="checked" />
              <span>记住密码</span>
            </div>
            <!--<div class="right" @click="$router.push('forgetPassword')">忘记密码</div>-->
            <!-- <div class="right" @click="go('/forgetPassword')">忘记密码</div> -->
          </div>
          <div class="aagames-button-box">
            <van-button :loading="loading" loading-text="登录中..." class="aagames-button sign-in" @click="signIn" type="button">登录</van-button>
          </div>
          <div class="aagames-button-box">
            <!--<van-button class="aagames-button line" @click="quick" type="button">无账号 去注册</van-button>-->
          </div>
        </div>
        <div class="forget-pass">
          <router-link to="/forgetPassword">忘记密码？</router-link>
          <router-link to="/register">立即注册</router-link>
        </div>
        <div class="customer">
          <div class="wait" @click="go('/')">
            <img :src="$imgs['otherIcon/zaigg@2x']" alt />
            再逛逛吧
          </div>
          <div class="cut-up"></div>
          <div class="kefu" @click="$openKefu">
            <img :src="$imgs['otherIcon/kefu@2x']" alt />
            专属客服
          </div>
        </div>
      </div>
      <!-- <div class="home-regist-btn" @click="quick"><img :src="$imgs['login/login_icon_toux@2x']" alt=""><span>注册新用户</span></div> -->
    <!--<van-popup v-model="show" position="bottom">-->
      <!--<van-picker-->
        <!--show-toolbar-->
        <!--@confirm="onConfirm"-->
        <!--value-key="text"-->
        <!--@cancel="onCancel"-->
        <!--:columns="columns"-->
      <!--/>-->
    <!--</van-popup>-->
    </div>

    <van-popup get-container="#app" v-model="ForgetPasswordShow">
      <ForgetPassword v-model="ForgetPasswordShow"></ForgetPassword>
    </van-popup>
  </div>
</template>

<script>
import Lheader from "../components/l-header";
// import PhoneArea from "@/components/phone-area";
import { login, mobilelogin, phonearea } from "@/api/login";
import Gcode from "@/components/g-code";
import ForgetPassword from "./forgetPassword";
import Vue from "vue";
import { isnum } from "@/utils/index";
import { Toast } from "vant";
import mixins from "@/mixins/index";

Vue.use(Toast);

export default {
  mixins: [mixins],
  name: "login",
  data() {
    return {
      login: "注册",
      title: "账号登录",
      tab: ["账号密码登录", " 手机快捷登录"],
      active: 0,
      account: {
        password: "",
        username: ""
      },
      phoneSign: {
        phone: "",
        code: ""
      },
      getCode: "",
      areaCode: 86,
      show: false,
      ForgetPasswordShow: false,
      columns: [],
      loading:false,
      passCheck:false
    };
  },
  components: {
    Lheader,
    Gcode,
    ForgetPassword
  },
  created() {
    // phonearea().then(res => {
    //   if (res.data.code === 0) {
    //     this.columns = res.data.data;
    //   }
    // });
  },
  methods: {
    togglePass(){
      this.passCheck = !this.passCheck
    },
    // 切换登录方式
    tabChange(index) {
      this.active = index;
    },
    signIn() {
      if (this.active === 0) {
        if (!this.account.username) {
          this.$toast.fail("请输入游戏账号");
          return false;
        }
        if (!this.account.password) {
          this.$toast.fail("请输入密码");
          return false;
        }
        this.loading = true
        login({
          merchant_no: process.env.VUE_APP_MERCHANT_NO,
          username: this.account.username,
          password: this.account.password,
          phone_area_code: "+" + this.areaCode
        }).then(res => {
          this.loading = false
          if (res.data.code === 0) {
            this.$store.dispatch(
              "users/updateToken",
              res.data.data.access_token
            );
            this.$store.dispatch("users/getUserInfo");
            // // window.localStorage.token = res.data.data.access_token
            // window.localStorage.id = res.data.data.id
            // window.localStorage.username = res.data.data.username
            const This = this;
            Toast({
              message: "登录成功！",
              onClose() {
                console.log(window.localStorage.getItem("isAuth"));
                if (window.localStorage.getItem("isAuth") == "true") {
                  This.$router.push("ytAuth");
                } else {
                  This.$router.push("/");
                }
              }
            });
          } else {
            this.$toast.fail(res.data.msg);
          }
        },err=> {
          this.loading = false
        });
      } else {
        // if (!this.getCode || (this.getCode != this.phoneSign.code)) {
        //   Toast('验证码输入有误');
        //   return false;
        // }
        if (!isnum(this.phoneSign.phone)) {
          this.$toast.fail("手机格式有误");
          return false;
        }
        if(!this.phoneSign.code) {
          this.$toast.fail("验证码输入有误");
          return false;
        }
        this.loading = true
        mobilelogin({
          merchant_no: process.env.VUE_APP_MERCHANT_NO,
          mobile: this.phoneSign.phone,
          code: this.phoneSign.code,
          phone_area_code: "+" + this.areaCode
        }).then(res => {
          this.loading = false
          if (res.data.code === 0) {
            console.log(res);
            this.$store.dispatch(
              "users/updateToken",
              res.data.data.access_token
            );
            this.$store.dispatch("users/getUserInfo");
            // // window.localStorage.token = res.data.data.access_token
            // window.localStorage.id = res.data.data.id
            // window.localStorage.username = res.data.data.username
            const This = this;
            Toast({
              message: "登录成功！",
              onClose() {
                console.log(window.localStorage.getItem("isAuth"));
                if (window.localStorage.getItem("isAuth") == "true") {
                  This.$router.push("/ytAuth");
                } else {
                  This.$router.push("/");
                }
              }
            });
          } else {
            this.$toast.fail(res.data.msg);
          }
        },err=> {
          this.loading = false
        })
      }
    },
    getCodeC(val) {
      this.getCode = val;
    },
    myCodeC(val) {
      this.phoneSign.code = val;
    },
    quick() {
      this.$router.push({ path: "/register" });
      // quickregister({
      //   merchant_no:process.env.VUE_APP_MERCHANT_NO,
      //   domain : window.location.host
      // }).then(res=>{
      //   if (res.data.msg === 'success') {
      //     this.$router.push({
      //       name:'registerSuccess',
      //       params:{
      //         account:res.data.data.username,
      //         pass: res.data.data.password
      //       }
      //     })
      //   }
      // })
    },
    // onConfirm(val) {
    //   this.show = false;
    //   this.areaCode = val;
    // },
    // onCancel(val) {
    //   this.show = false;
    // }
  }
};
</script>

