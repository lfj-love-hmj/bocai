<style lang="less" scoped>
@import "login";
@import "~@assets/styles/login/index.less";

  .regContainer{
    /deep/ .bg-login{
      padding: 10vh 0 0;
      margin-bottom: 40px;
    }
  }
  .successBox{
    background: none!important;
    width: 90%;
    overflow: initial;
    top: 50%;
    left: 50%;
    border-radius: 24px;
    transform: translate(-50%,-50%);
    .cross {
      width: 80px;
      position: absolute;
      bottom: -134px;
      left: 50%;
      margin-left: -40px;
    }
    /deep/ .aagames-form{
      background: #EDEFF6;
      height: 80px;
      margin-bottom: 20px;
      .input{
        height: 100%;
        margin-top: 0!important;
        span{
          color: #666!important;
          border-right: 0!important;
        }
      }

    }
    /deep/ .van-popup__close-icon{
      top: -70px!important;
      font-size: 24px!important;
      border: 2px solid #fff;
      border-radius: 50%;
      padding: 10px;
      color: #fff!important;
      right: 0;
    }

  }
  .drawer{
    h4{
      color: #666;
    }
    .aagames-form{
      background:rgba(237,239,246,1);
      .input{
        .areaNum{
          color: #333!important;
        }
        input{
          color: #333;
        }
      }

    }
    /deep/ .aagames-form .input input{color: #333;}
    .aagames-button-box{
      .aagames-button-default{
        color: @bg-gradient-color;
        border: 2px solid @bg-gradient-color;
      }
    }

  }

</style>
<template>
  <div class="container regContainer">
    <div class="main" id="register">
      <div class="register">
        <div class="login-top">
          <img :src="$imgs['login/logo']" alt="">
          <img :src="$imgs['login/logo_close']" alt="" @click="$router.push('/')">
        </div>
        <van-tabs @click="tabChange" line-width=".64rem" line-height=".08rem" :color="$colorjs.baseColor">
          <van-tab v-for="item in tab" :key="item" :title="item" class="tab-list"></van-tab>
        </van-tabs>
        <div class="line"></div>
        <div class="fill fill-register">
          <div class="aagames-form" v-if="active === 0">
            <p class="label">账号</p>
            <div class="input">
              <!-- <img class="img" :src="$imgs['otherIcon/user@2x']" alt /> -->
              <input type="text" v-model="openAccount.account" placeholder="请输入账户" />
            </div>
            <p class="label">密码</p>
            <div class="input">
              <!-- <img class="img" :src="$imgs['otherIcon/pass@2x']" alt /> -->
              <input type="password" v-model="openAccount.password" placeholder="请输入密码" />
            </div>
            <p class="label">确认密码</p>
            <div class="input">
              <!-- <img class="img" :src="$imgs['otherIcon/pass@2x']" alt /> -->
              <input type="password" v-model="openAccount.againPassword" placeholder="请确认密码" />
            </div>
          </div>
          <div class="onekey" v-if="active === 1">
            <Rocket />
            <p class="onekeyText">{{ copyright }}一键开户，极速体验！</p>
          </div>
          <template v-if="active === 2">
            <div class="aagames-form">
              <p class="register-info">手机</p>
              <div class="input">
                <!-- <img class="img phone" style="margin-right: 6px;" :src="$imgs['otherIcon/shouji@2x']" alt /> -->
                <phoneArea v-model="areaCode">
                  <i class="areaNum">
                    &nbsp;+{{ areaCode }}
                    <img class="xiala" :src="$imgs['otherIcon/xiala@2x']" alt />
                  </i>
                </phoneArea>
                <input type="text" v-model="mobile" placeholder="请输入手机号" />
              </div>
            </div>
            <p class="register-info">验证码</p>
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
                :style="{backgroundImage:$bImgs['otherIcon/checked']}"
              ></i>
              <i v-else class="checkOff"></i>
              <span>同意并接受</span>
            </span>
            <a @click="showProtocol">《{{$config[$projectname].secName}}游戏条款》</a>
          </div>
          <div class="aagames-button-box register-btn">
            <van-button :loading="loading" loading-text="注册中..." class="aagames-button register" type="button" @click="applySubmitForm">
              {{ active === 1 ?
              '立即注册' : '立即注册' }}
              <!-- 获取游戏账户 -->
            </van-button>
          </div>
          <div class="aagames-button-box">
            <!--<van-button class="aagames-button line" @click="go('/login')" type="button">已有账号 去登录</van-button>-->
          </div>
        </div>
        <div class="forget-pass register-pass">
          <router-link to="">已有账号？</router-link>
          <router-link to="/login">请登录</router-link>
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
      <!-- <div class="home-regist-btn" @click="go('/login')"><img :src="$imgs['login/bet_login_icon_login@2x']" alt=""><span>去登录</span></div> -->
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
        class="custom close-top"
        v-model="mobileShow"
        title="验证手机号"
        round
        close-icon-position="top-left"
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
                    <img class="xiala" :src="$imgs['otherIcon/xiala@2x']" alt />
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

    <!-- 注册成功 -->
    <van-popup
      class="custom successBox"
      v-model="successModel"
      round
      closeable
      :close-on-click-overlay="false"
      close-icon-position="top-right"
      @close="toIndex"
    >
      <div class="">
        <SuccessModel></SuccessModel>
      </div>
    </van-popup>

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
import Lheader from "../components/l-header";
import Gcode from "@/components/g-code";
import Rocket from "@/components/rocket";
import SuccessModel from './registerSuccess.vue'
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
    Rocket,
    SuccessModel
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
      content: "获取验证码",
      successModel:false,
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
    toIndex(){
      this.$router.push({path:'/'})
    },
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
            this.afterRegister(data, "mobile");
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
//          this.$router.push({
//            name: "registerSuccess"
//          });
          this.successModel = true;
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
          this.$toast.fail("请输入a开头的6-12位英文、数字");
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

