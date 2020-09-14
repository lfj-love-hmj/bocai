<style lang="less" scoped>
@import "login";
@import "~@assets/styles/login/index.less";

.container.regContainer {
  /*.register .van-ellipsis {*/
  /*font-weight: 700;*/
  /*font-size: 30px;*/
  /*color: #888888;*/
  /*}*/
  height:100%;
  // background-image: url('~@assets/img3_0/login/login-bg@2x.png');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100%;
  .aagames-nav-bar{
    background:transparent;
  }
  .register {
    .aagames-form {
      position: relative;
      background: @bg-card-color;
      margin-top: 10px;
      // margin: 0 30px;
      // padding:0;
      .right-button{
        // right:30px;
      }
      .input {
        height: 96px;
        color: #999999;
        background: @bg-card-color;
        border-bottom: 2px solid #323232;
        border-radius: 0;
        padding: 2px;
        .img {
          width: 50px;
        }
        .phone{
          width: 36px;
          position: relative;
          margin-left: 10px;
        }
        > input {
          background: none;
        }
        .areaNum {
          font-size: 28px;
          font-weight: 500;
          color: #cccccc;
        }
        .xiala {
          width: 30px;
          height: 20px;
          margin: 0 10px;
        }
        &:after {
          background-color: #ffffff;
          opacity: 0.06;
        }
      }
    }
  }
  .bg-login {
    // height: 50%;
    padding-top: 180px;
    .logo{
      width: 300px;
      display: block;
      margin: 0 auto;
      // position: absolute;
      // top: 75px;
    }
    .cooperation{
      width: 418px;
      display: block;
      margin: 0 auto;
    }
  }
  .main#register {
    width: 100%;
    padding: 0;
    // background-color: @bg-card-color;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position:absolute;
    bottom:0;
    // padding-bottom: 20px;
    // position:absolute;
    // bottom:0;
    height: calc(100vh - 600px);
    .van-tabs{
      border-top-left-radius: 20px !important;
      border-top-right-radius: 20px !important;
      overflow: hidden;
      .van-tabs__wrap{
        // border-bottom: 2px solid rgba(255,255,255,0.06);;
      }
      .van-tabs__nav{
        background-color: @bg-card-color;
        border-top-left-radius: 20px !important;
        border-top-right-radius: 20px !important;
      }
    }
    .register{
      // height:100%;
      // border-top-left-radius: 20px;
      // border-top-right-radius: 20px;
      // background-color: @bg-color;
      // overflow: hidden;

    }
    .fill {
      // border-top: 1px solid #323232;
      background-color: @bg-card-color;
      padding-top: 10px;
      .aagames-form{
        padding:0;
        .right-button{
          right:0;
          // top:10px;
        }
      }
      .input{
        background:@bg-card-color;
        // margin-top: 10px;
        border-bottom: 2px solid rgba(255,255,255,0.06);
        border-radius: 0;
        input{
          background:@bg-card-color;
        }
      }
      .onekey {
        margin-top: 30px;
        text-align: center;
        .onekeyImg {
          img {
            width: 176px;
            height: 176px;
          }
        }
        .onekeyText {
          color: #666;
          font-size: 0.37333rem;
          margin-top: 0.34666rem;
        }
        p {
          margin-top: 20px;
          color: #8e9ab5;
        }
      }

      .phone {
        position: relative;
        display: flex;
        align-items: center;
        input {
          height: 80px;
          margin-left: -5px;
          flex: 1;
          padding: 20px;
          border: none;
          background-color: #090705;
          color: #8e9ab5;
          font-size: 32px;
          border-bottom: 1px solid #8e9ab5;
        }
        .areaNum {
          height: 80px;
          padding: 23px;
          display: inline-block;
          width: 150px;
          font-size: 32px;
          color: #8e9ab5;
          border-bottom: 1px solid #8e9ab5;
          .van-icon {
            margin-left: 10px;
          }
        }
      }
    }
    .function {
      padding-top: 30px;
      .aagames-button-box {
        .register {
          margin-top: 40px;
        }
        .sign-in {
          margin-top: 68px;
        }
        .dark {
          margin-top: 40px;
          background: #353435;
          color:#fff;
          border:0;
        }
      }
      .funDiv {
        margin-top: 20px;
        color: #666666;
        font-size: 30px;
        margin-bottom: 20px;
        span {
          display: inline-block;
          height: 100%;
        }
        i {
          width: 44px;
          height: 44px;
          margin-right: 14px;
          display: inline-block;
          transform: translateY(20%);
          &.checkOff{
            border: 2px solid @primary-color;
            border-radius: 50%;
          }
        }
        a {
          color: @primary-color;
          text-decoration: underline;
        }
      }
    }
    .van-dialog {
      // position: relative;
    }
    .verification {
      padding: 56px 0 0 0;
      position: relative;
      .close-icon {
        position: absolute;
        top: -80px;
        right: -20px;
      }
      .areaNum {
        font-size: 30px;
      }
      .footer {
        display: flex;
        .cancel {
          height: 87px;
          border-radius: 6px;
          border: 2px solid rgba(240, 240, 240, 1);
          background: #fff;
          color: #d2d2d2;
        }

        .confirm {
          height: 87px;
          background: linear-gradient(
            90deg,
            rgba(45, 41, 30, 1) 0%,
            rgba(20, 18, 13, 1) 100%
          );
          border-radius: 6px;
        }
      }

      p {
        color: #333;
        font-size: 28px;
        font-weight: 600;
        margin-left: 40px;
      }
      .code {
        position: relative;
        margin-bottom: 40px;
        border: 2px solid #ccc;
        border-radius: 5px;
        &:last-child {
          margin-bottom: 0;
        }
        &.text {
          border: none;
          font-size: 24px;
          font-weight: 400;
          color: rgba(180, 180, 180, 1);
          line-height: 34px;
          margin-bottom: 34px;
        }
        .send {
          position: absolute;
          height: 60px;
          line-height: 60px;
          top: 15px;
          right: 40px;
          text-align: right;
          color: #be8d24;
          font-size: 28px;
          // border-left: 1px solid #8E9AB5;
          width: 230px;
          display: inline-block;
        }
      }
      input {
        width: 64%;
        padding: 20px;
        padding-left: 40px;
        border: none;
        background-color: transparent;
        color: #fff;
        font-size: 32px;
        // border-bottom: 1px solid #8E9AB5;
      }
    }
  }
}

.phoneInput{
  .input-cells{
    padding:0 20px !important;
  }
  .aagames-button-box{
    padding: 0 !important;
    button{
      width: 340px;
    }
  }
}

.clearfix:after {
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  /* 触发 hasLayout */
  zoom: 1;
}
</style>
<template>
  <div class="container regContainer">
    <lheader :title="title" :isloginReg="1" :isLogin="login" :isBanner="true"></lheader>
    <div class="main" id="register">
      <div class="register">

        <van-tabs @click="tabChange" line-width=".64rem" line-height=".08rem" :color="$colorjs.baseColor">
          <van-tab v-for="item in tab" :key="item" :title="item" class="tab-list"></van-tab>
        </van-tabs>
        <div class="fill">
          <div class="aagames-form" v-if="active === 0">
            <div class="input">
              <img class="img" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/user@2x.png')" alt />
              <input type="text" v-model="openAccount.account" placeholder="请输入账户" />
            </div>
            <div class="input">
              <img class="img" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/pass@2x.png')" alt />
              <input type="password" v-model="openAccount.password" placeholder="请输入密码" />
            </div>
            <div class="input">
              <img class="img" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/pass@2x.png')" alt />
              <input type="password" v-model="openAccount.againPassword" placeholder="请确认密码" />
            </div>
          </div>
          <div class="onekey" v-if="active === 1">
            <Rocket />
            <p class="onekeyText">{{ copyright }}一键开户，极速体验！</p>
          </div>
          <template v-if="active === 2">
            <div class="aagames-form">
              <div class="input">
                <img class="img phone" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/shouji@2x.png')" alt />
                <phoneArea v-model="areaCode">
                  <i class="areaNum">
                    &nbsp;+{{ areaCode }}
                    <img class="xiala" :src="require('@assets/img3_0/otherIcon/xiala@2x.png')" alt />
                  </i>
                </phoneArea>
                <input type="text" v-model="mobile" placeholder="请输入手机号" />
              </div>
            </div>
            <gcode
              :account="mobile"
              :withLabel="false"
              :withIcon="true"
              :areaCode="areaCode"
              @getCode="getCodeC"
              @myCode="myCodeC"
            ></gcode>
          </template>
        </div>
        <div class="function">
          <div class="funDiv" align="center">
            <span @click="isAgree = !isAgree">
              <i
                v-if="isAgree"
                class="background-image"
                :style="{backgroundImage:`url(${require('@assets/img3_0/otherIcon/chenggong@2x.png')})`}"
              ></i>
              <i v-else class="checkOff"></i>
              <span>同意并接受</span>
            </span>
            <a @click="showProtocol">《{{$config[$projectname].secName}}游戏条款》</a>
          </div>
          <div class="aagames-button-box">
            <van-button :loading="loading" loading-text="注册中..." class="aagames-button register" type="button" @click="applySubmitForm">
              {{ active === 1 ?
              '获取游戏账户' : '注册' }}
            </van-button>
          </div>
          <div class="aagames-button-box">
            <van-button class="aagames-button line" @click="go('/login')" type="button">已有账号 去登录</van-button>
          </div>
        </div>
        <div class="customer">
          <div class="wait" @click="go('/')">
            <img :src="require('@assets/img3_0/otherIcon/zaigg@2x.png')" alt />
            再逛逛吧
          </div>
          <div class="cut-up"></div>
          <div class="kefu" @click="$openKefu">
            <img :src="require('@assets/img3_0/otherIcon/kefu@2x.png')" alt />
            专属客服
          </div>
        </div>
      </div>
      <van-popup v-model="show" position="bottom">
        <van-picker
          show-toolbar
          @confirm="onConfirm"
          value-key="text"
          title="选择号码地区"
          @cancel="onCancel"
          :columns="columns"
        />
      </van-popup>

      <van-popup
        class="custom phoneInput"
        v-model="mobileShow"
        title="验证手机号"
        round
        close-icon-position="top-left"
        position="bottom"
        get-container="#app"
      >
        <div class="drawer">
          <div class="pop-head">
            <h2>绑定手机号</h2>
          </div>
          <h4>为了保障您的账号安全，请输入正确手机号</h4>
          <div class="input-cells">
            <div class="aagames-form">
              <div class="input">
                <phoneArea v-model="areaCode">
                  <i class="areaNum">
                    &nbsp;+{{ areaCode }}
                    <img class="xiala" :src="require('@assets/img3_0/otherIcon/xiala@2x.png')" alt />
                  </i>
                </phoneArea>
                <input type="text" v-model="mobile" placeholder="请填写您的手机号码">
              </div>
            </div>
          </div>
          <div class="input-cells" v-if="registerSettingType === 4">
            <gcode
              :bind="true"
              :areaCode="areaCode"
              :account="mobile"
              @getCode="getCodeC"
              @myCode="myCodeC"
            ></gcode>
          </div>
          <div class="input-cells">
            <div class="aagames-button-box">
              <button
                class="aagames-button aagames-button-default"
                type="button"
                @click="mobileShow=false"
              >残忍拒绝</button>
              <button class="aagames-button" type="button" @click="confirmReg">确定</button>
            </div>
          </div>
          <div class="footer-tips">
            <p>
              遇到问题，联系
              <span>专属客服</span>
            </p>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import {
  login,
  mobileregister,
  phonearea,
  quickregister,
  register,
  smscode
} from "@/api/login";
import { siteinfo } from "@/api/home";
import Lheader from "@/components/l-header";
import Gcode from "@/components/g-code";
import Rocket from "@/components/rocket";
import { checkPassword, checkUser } from "@/utils/index";
import Vue from "vue";
// import { Toast } from "vant";
import mixins from "@/mixins/index";

// Vue.use(Toast);

export default {
  mixins: [mixins],
  name: "register",
  components: {
    Gcode,
    Lheader,
    Rocket
  },
  data() {
    return {
      login: "登录",
      title: "账号注册",
      tab: ["账号注册", "一键注册", "手机号注册"],
      active: 0,
      isAgree: true,
      mobile: "",
      code: "",
      getCode: "",
      openAccount: {
        account: "",
        password: "",
        againPassword: ""
      },
      loading: false,
      columns: [],
      show: false,
      mobileShow: false,
      areaCode: 86,
      registerSettingType: 1,
      register_setting: {
        username_register: 1,
        quick_register: 1
      },
      copyright: "AAGames",
      mobileReg: /^1[3456789]\d{9}$/,
      // 验证码相关
      canClick: true,
      totalTime: 60,
      clock: "",
      content: "获取验证码"
    };
  },
  watch: {
    active(val) {
      // 用户名注册
      if (val === 0) {
        this.registerSettingType = this.register_setting.username_register;
      } else if (val === 1) {
        this.registerSettingType = this.register_setting.quick_register;
      } else {
        this.registerSettingType = 1;
      }
    }
  },
  mounted() {


    siteinfo(process.env.VUE_APP_MERCHANT_NO).then(res => {
      if (res.data.code === 0) {
        const siteinfo = res.data.data;
        const setting = siteinfo.h5_register_setting;
        this.copyright = siteinfo.title;
        // this.siteinfo = siteinfo;
        // Object.assign(this.register_setting, setting);
        this.register_setting.username_register = Number(
          setting.username_register
        );
        this.register_setting.quick_register = Number(setting.quick_register);
        if (this.active === 0) {
          this.registerSettingType = Number(setting.username_register);
        } else if (this.active === 1) {
          this.registerSettingType = Number(setting.quick_register);
        } else {
          this.registerSettingType = 1;
        }
      }

    });
    phonearea().then(res => {
      if (res.data.code === 0) {
        this.columns = res.data.data;
      }
    });
  },
  methods: {
    // 切换登录方式
    tabChange(index, title) {
      this.active = index;
      this.title = title;
    },
    getCodeC(val) {
      this.getCode = val;
    },
    myCodeC(val) {
      this.code = val;
    },
    applySubmitForm() {
      const { active, registerSettingType } = this;
      if (this.validRegisterForm()) {
        if (active === 0) {
          if (registerSettingType < 2) {
            this.userRegister();
          } else {
            this.mobileShow = true;
          }
        } else if (active === 1) {
          if (registerSettingType < 2) {
            this.quickRegister();
          } else {
            this.mobileShow = true;
          }
        } else if (active === 2) {
          this.mobileRegister();
        }
      }
    },
    userRegister(params) {
      this.loading = true
      const { openAccount } = this;
      const data = Object.assign(
        {
          username: openAccount.account,
          password: openAccount.password,
          repassword: openAccount.againPassword,
          domain: window.location.host,
          id:window.sessionStorage.getItem('agentCode') || '',
          spread_code: window.sessionStorage.getItem('spread_code') || ''
        },
        params
      );
      register(data).then(
        res => {
          if (res.data.code === 0) {
            this.afterRegister(data, "username");
            window.sessionStorage.removeItem('agentCode')
            window.sessionStorage.removeItem('spread_code')
          } else {
            this.$toast.fail(res.data.msg);

          }
        },
        err => {
          this.loading = false
        }
      );
    },
    quickRegister(params) {
      this.loading = true
      const data = Object.assign(
        {
          domain: window.location.host,
          id:window.sessionStorage.getItem('agentCode') || '',
          spread_code: window.sessionStorage.getItem('spread_code') || ''
        },
        params
      );

      quickregister(data).then(
        res => {
          if (res.data.code === 0) {
            this.afterRegister(res.data.data, "quick");
            window.sessionStorage.removeItem('agentCode')
            window.sessionStorage.removeItem('spread_code')
          } else {
            this.$toast.fail(res.data.msg);

          }
        },
        err => {
          this.loading = false
        }
      );
    },
    mobileRegister(params) {
      this.loading = true
      const { mobile, code, areaCode } = this;

      const data = Object.assign(
        {
          domain: window.location.host,
          mobile: mobile,
          code: code,
          phone_area_code: "+" + areaCode,
          id:window.sessionStorage.getItem('agentCode') || '',
          spread_code: window.sessionStorage.getItem('spread_code') || ''
        },
        params
      );
      mobileregister(data).then(
        res => {
          if (res.data.code === 0) {
            this.afterRegister(res.data.data, "mobile");
            window.sessionStorage.removeItem('agentCode')
            window.sessionStorage.removeItem('spread_code')
          } else {
            this.$toast.fail(res.data.msg);

          }
        },
        err => {
          this.loading = false
        }
      );
    },
    afterRegister(data, type) {
      window.localStorage.setItem(
        "registerUser",
        JSON.stringify({
          username: data.username || this.openAccount.account,
          password: data.password || this.openAccount.password,
          type
        })
      );
      console.log(123123, data)
      login({
        username: data.username || this.openAccount.account,
        password: data.password || this.openAccount.password
      }).then(res => {
        this.loading = false
        if (res.data.code === 0) {
          const user = res.data.data;
          // window.localStorage.setItem('username', user.username)
          // window.localStorage.setItem('id', user.id)
          // window.localStorage.setItem('token', user.access_token)
          this.$store.dispatch("users/updateToken", user.access_token);
          this.$store.dispatch("users/getUserInfo");
          this.$router.push({
            name: "registerSuccess"
          });
        }
      });
    },
    validRegisterForm() {
      const { account, password, againPassword } = this.openAccount;
      const { isAgree, active, mobile, mobileReg, code } = this;
      if (!isAgree) {
        this.$toast.fail("请同意并接受《游戏条款》");
        return false;
      }
      if (active === 0) {
        if (!checkUser(account)) {
          this.$toast.fail("请输入6-12位英文、数字");
          return false;
        }
        if (!checkPassword(password)) {
          this.$toast.fail("密码格式有误");
          return false;
        }
        if (password !== againPassword) {
          this.$toast.fail("两次密码不一致");
          return false;
        }
      } else if (active === 2) {
        if (!mobileReg.test(mobile)) {
          this.$toast.fail("手机格式有误");
          return false;
        }
        if (!code) {
          this.$toast.fail("验证码输入有误");
          return false;
        }
      }
      return true;
    },
    validMobileVerifyForm() {
      const { mobile, code, active, registerSettingType, mobileReg } = this;
      // 必填时
      if (registerSettingType > 2 && !mobile) {
        this.$toast.fail("请输入手机号码");
        return false;
      }
      // 非必填，但用户输入了手机号、必填时
      // 需要验证手机号格式
      if ((registerSettingType === 2 && mobile) || registerSettingType > 2) {
        if (!mobileReg.test(mobile)) {
          this.$toast.fail("请输入正确的手机号码");
          return false;
        }
      }
      // 需要验证手机号
      if (registerSettingType === 4 && !code) {
        this.$toast.fail("请输入验证码");
        return false;
      }
      return true;
    },
    beforeMobileClose(action, done) {
      const { registerSettingType, active } = this;
      if (action === "cancel") {
        if (registerSettingType > 2) {
          this.$toast.fail("拒绝后将无法成功注册账号");
          done();
        } else if (registerSettingType == 2) {
          if (this.validMobileVerifyForm()) {
            const param = {};
            if (active === 0 || active === 1) {
              if (registerSettingType > 1) {
                param.mobile = this.mobile;
              }
              if (registerSettingType === 4) {
                param.code = this.code;
              }
            }
            if (active === 0) {
              this.userRegister(param);
            } else if (active === 1) {
              this.quickRegister(param);
            }
            if (active === 2) {
              this.mobileRegister();
            }
            done();
          } else {
            done(false);
          }
        }
      } else if (action === "confirm") {
        if (this.validMobileVerifyForm()) {
          const param = {};
          if (active === 0 || active === 1) {
            if (registerSettingType > 1) {
              param.mobile = this.mobile;
            }
            if (registerSettingType === 4) {
              param.code = this.code;
            }
          }
          if (active === 0) {
            this.userRegister(param);
          } else if (active === 1) {
            this.quickRegister(param);
          }
          if (active === 2) {
            this.mobileRegister();
          }
          done();
        } else {
          done(false);
        }
      }
    },
    cancelReg() {
      const { registerSettingType, active } = this;
      if (registerSettingType > 2) {
        this.$toast.fail("拒绝后将无法成功注册账号");
        this.mobileShow = false;
      } else if (registerSettingType == 2) {
        if (this.validMobileVerifyForm()) {
          const param = {};
          if (active === 0 || active === 1) {
            if (registerSettingType > 1) {
              param.mobile = this.mobile;
            }
            if (registerSettingType === 4) {
              param.code = this.code;
            }
          }
          if (active === 0) {
            this.userRegister(param);
          } else if (active === 1) {
            this.quickRegister(param);
          }
          if (active === 2) {
            this.mobileRegister();
          }
          this.mobileShow = false;
        } else {
          this.mobileShow = true;
        }
      }
    },
    confirmReg() {
      const { registerSettingType, active } = this;
      if (this.validMobileVerifyForm()) {
        const param = {};
        if (active === 0 || active === 1) {
          if (registerSettingType > 1) {
            param.mobile = this.mobile;
          }
          if (registerSettingType === 4) {
            param.code = this.code;
          }
        }
        if (active === 0) {
          this.userRegister(param);
        } else if (active === 1) {
          this.quickRegister(param);
        }
        if (active === 2) {
          this.mobileRegister();
        }
        this.mobileShow = false;
      } else {
        this.mobileShow = true;
      }
    },
    onConfirm(val) {
      this.show = false;
      this.areaCode = val;
    },
    onCancel(val) {
      this.show = false;
    },
    showProtocol() {
      const html =
        '<ol class="protocol">' +
        "<li>用户在进行游戏前应核实其所在地区进行线上游戏是否符合当地法律。</li>" +
        "<li>为避免任何争议，各用户在参与本网站所有游戏过程中，或在结束参与本网站所提供的游戏前，必须检查会员帐户内的资料是否正确。若发现有错误，请即时与所属的代理商联络。客户若不能提供充份的数据，其帐户内之一切数据或历史数据，以本公司资料库中的资料为准，用户不得异议。</li>" +
        "<li>本网站只向符合法定年龄的用户提供服务，用户须注意其居住地区的法律年龄限制，在不违反年龄限制之下才可使用本网站服务。</li>" +
        "<li>本公司将不承担任何用户因违反当地相关法律而引起之任何责任。</li>" +
        "<li>任何用户在参与本公司所有游戏而引起导致违反当地法律之任何责任，本公司概不负责。</li>" +
        "<li>用户有义务保障本身的用户名称和密码的隐私安全，并且不应允许任何第三方以任何形式，通过该用户名称和密码使用本网站之所有游戏，否则，一切责任需由该用户全部承担。</li>" +
        "<li>安装丶使用或参与本软件所有游戏之用户，均被视为符合该用户当地之法定年龄，以及该用户完全明白并且同意本协议之内容。</li>" +
        "<li>本网站有权拒绝或不接受任何用户以任何不正当方式登入或参与本网站所有游戏之权利。 各玩家请注意, 敬请各玩家以每局的真实影像的牌局结果作准, 路纸结果有时候会因为网路接收信号或各公司的数据库和伺服器维护而出现差异, 所以只供参考, 不能作准, 如有问题, 欢迎申请该局的重播。 以示公正。</li>" +
        "<li>因人为或系统发生不能预测因素所导致的失误，本公司管理层保留最终之决定权。</li>" +
        "<li>不论在任何情况下，本公司之决定权乃最终之决定权。</li>" +
        "<li>本公司不承担所有任何明确说明或者暗示的有关于该网站或者该网站上游戏的责任，所有一切都按照现在的规范提供。此外，本公司就任何有关质量，适用性，完整性或准确性的情况不向您提供任何担保或表达任何意见。本公司会尽最大能力去提供最好的服务，但是不保证游戏偶尔出现中断，发生不可预料的错误，失误及时被纠正或者系统不受病毒和蠕虫的侵袭。</li>" +
        "<li>无论任何情况下，本公司不赔偿任何由於使用该网站或者该网站上游戏所造成的损失。不管该损失是特殊原因做成的，直接的，间接的（包括但不仅限于，商业利润损失，意外中断损失，丢失商业信息，或者任何其他金钱上的损失），即使本公司事先知道可能会造成这些损失。</li>" +
        "</ol>";
      this.$dialog
        .alert({
          title: `${this.$config[this.$projectname].secName}游戏条款`,
          message: html
        })
        .then(() => {
          // on close
        });
    },
    phoneCode() {
      smscode({
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        mobile: this.mobile,
        phone_area_code: "+" + this.areaCode
      }).then(res => {
        if (res.data.code == 0) {
          this.getCode = res.data.data.code;
        } else {
          this.$toast(res.data.msg);
          window.clearInterval(this.clock);
          this.content = "重新发送验证码";
          this.totalTime = 60;
          this.canClick = true;
        }
      });
    },
    countDown() {
      const { mobileReg, mobile, canClick } = this;
      if (!canClick) return;
      if (!mobile) {
        this.$toast.fail("请输入手机号");
        return false;
      }
      if (!mobileReg.test(mobile)) {
        this.$toast.fail("手机格式有误");
        return false;
      }
      this.canClick = false;
      this.phoneCode();
      this.content = this.totalTime + "秒后重新发送";
      this.clock = window.setInterval(() => {
        this.totalTime--;
        this.content = this.totalTime + "秒后重新发送";
        if (this.totalTime < 0) {
          window.clearInterval(this.clock);
          this.content = "重新发送验证码";
          this.totalTime = 60;
          this.canClick = true; //这里重新开启
        }
      }, 1000);
    }
  }
};
</script>

