<style scoped lang="less">
/*@import "login";*/
/*@import '~@assets/styles/login/index.less';*/

.container {
  border-radius: 24px;
  overflow: hidden;
  padding-bottom: 0;
  .main {
    #register{
      background: @bg-color-white!important;
      padding: 0 62px 60px;
      border-radius: 24px;
    }
    .new-activity {
      color: #f74349;
      font-size: @font-size-14;
      margin-bottom: @margin-10;
      /*font-weight: 600;*/
      width: 100%;
      img {
        width: 100%;
        height: 124px;
      }
      /*i {*/
      /*color: #F74349;*/
      /*font-weight: 600;*/
      /*}*/
    }
    .quick-select {
      padding: 0 30px;
      .label {
        color: #333333;
        font-size: @font-size-14;
        margin: 0 @margin-10;
      }
      .list {
        // padding: 0 @margin-10;
        .amount-select {
          background-color: #be8d24 !important;
          color: #ffffff !important;
          border-radius: @border-radius-5px;
        }
        .van-col--offset-1 {
          margin-left: 5.466666%;
        }
        .item {
          // display: inline-block;
          // width: 2.13333rem;
          height: 1.12rem;
          line-height: 1.12rem;
          text-align: center;
          font-size: @font-size-14;
          color: #333333;
          font-weight: 600;
          background: rgba(255, 255, 255, 1);
          border-radius: @border-radius-5px;
          border: 0.022222rem solid rgba(224, 224, 224, 1);
          margin-top: @margin-10;
          &:first-child,
          &:nth-child(4n) {
            margin-left: 0;
          }
        }
      }
    }
    .register {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 60px;
      padding-bottom: 30px;
      flex-direction: column;
      img {
        display: block;
        width: 110px;
      }
      p {
        color: #333333;
        height: 48px;
        font-size: 32px;
        font-weight: 600;
        line-height: 48px;
      }
      div {
        height: 40px;
        font-size: 28px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 40px;
      }
    }
    .aagames-button-box {
      margin-top: @margin-10;
      /deep/ .line{
        color:#fff;
        height: 80px;
        line-height: 80px;
        font-size: 28px;
      }
    }
    .accountInfo {
      .login-info {
        text-align: center;
        font-size: @font-size-14;
        color: #cccccc;

        .aagames-form {
          display: flex;
          padding: 0;
          .input {
            background: #EDEFF6;
            margin-top: 10px;
            border-radius: 8px;
            input {

            }
          }
          label {
            width: 2rem;
            text-align: left;
            padding-left: 20px;
            color: #333;
          }
          > div {
            flex: 1;
            text-align: left;
            display: flex;
          }
          a {
            margin-left: 20px;
            padding-right: 20px;
            color: @bg-gradient-color;
          }
          span {
            color: #cccccc;

            flex: 1;
          }
          input {
            flex: 1;
            width: 240px;
            outline: none;
            padding: 0 0.13333rem;
            height: 68px;
            border-radius: 4px;
          }
        }
      }
      .remark {
        font-size: @font-size-12;
        color: #999999;
        text-align: center;
      }
      p {
        height: 64px;
        line-height: 64px;
        // background-color: #181C24;
        text-align: center;
        font-size: 22px;
        color: #333333;
      }
    }
    .explain {
      margin-top: 40px;
      text-align: center;
      color: #ffcf6e;
      font-size: 22px;
    }
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    .aagames-button {
      flex: 1;
      border: 2px solid @bg-gradient-color;
      color: @bg-gradient-color;
      background: none;
    }
  }
}
</style>
<template>
  <div class="container registerSuccess">
    <div class="main">
      <div id="register">
        <div class="register" align="center">
          <img :src="$imgs['otherIcon/chenggong@2x']" alt style="margin-bottom:30px;"/>
          <p>恭喜您已成为{{$config[$projectname].project}}尊贵会员</p>
          <!--<div>您的账号密码</div>-->
        </div>
        <div class="accountInfo" id="capture">
          <div class="login-info">
            <div class="aagames-form">
              <div class="input">
                <label>账号：</label>
                <input
                  v-if="accountOnEditingU"
                  placeholder="请输入a开头的6-12位英文字母和数字"
                  type="text"
                  v-model="username"
                />
                <span v-else>{{ username }}</span>
                <template v-if="registerType === 'quick' && usernameCanEdit">
                  <a v-if="!accountOnEditingU" @click="accountOnEditingU = true">修改</a>
                </template>
              </div>
            </div>
            <div class="aagames-form">
              <div class="input">
                <label>密码：</label>
                <input
                  v-if="accountOnEditingP"
                  placeholder="密码6-20位数字及字母组成"
                  type="text"
                  v-model="password"
                />
                <span v-else>{{ password }}</span>
                <template v-if="passwordCanEdit">
                  <a v-if="!accountOnEditingP" @click="accountOnEditingP = true">修改</a>
                </template>
              </div>
            </div>
          </div>
          <template v-if="accountOnEditingP || accountOnEditingU">
            <div class="aagames-button-box buttons">
              <van-button class="aagames-button line" type="default" @click="hanlerCancel">取消修改</van-button>
              <div class="px30"></div>
              <van-button class="aagames-button line" type="primary" @click="updateAccount">提交保存</van-button>
            </div>
          </template>
          <template v-else>
            <div class="aagames-button-box buttons">
              <van-button
                class="aagames-button line"
                style="font-weight:600;"
                type="primary"
                v-clipboard:copy="`账户名: ${username}\n密码: ${password}`"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >复制账号密码</van-button>
              <div class="px30"></div>

              <!--<button class="aagames-button line" type="button" @click="onScreenshot">完善个人资料</button>-->
              <button class="aagames-button line" type="button" @click="toPerson">完善个人资料</button>
            </div>
          </template>
          <!-- <div>
                  <span>您的账户密码</span>
                  <ul>
                    <li>· 后备域名: https://{{ backDomain }}</li>
                    <li>· 账户名: {{ username }}</li>
                    <li>· 密码: {{ password }}</li>
                  </ul>
                </div>
          <p>请截图保存账户密码</p>-->
        </div>
        <!-- 新人活动 -->
        <div class="new-activity" @click="$router.push({path: '/activity/sixGift?id=61'})">
          <img :src="$imgs['login/zc@2x']" alt="新人礼物" />
          <!--新人福利优惠 限时抢￥8888元礼包大奖-->
          <!--<i class="el-icon-arrow-right"></i>-->
        </div>
        <div class="aagames-button-box" style="padding: 0">
          <button
            class="aagames-button sign-in"
            style="border-radius: 90px"
            type="button"
            @click="$router.push({path:'/deposit', query: {money: money}})"
          >立即存款</button>
        </div>
        <!--<div class="aagames-button-box">-->
        <!--<button class="aagames-button" type="button" @click="$router.push({path:'/personalData'})">完善个人资料</button>-->
        <!--</div>-->
        <!-- <router-link to="/deposit"><button @click="test">立即存款</button></router-link> -->
        <!-- <router-link to="/personalData"><p class="explain">完善个人资料</p></router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
// import Vue from "vue";
// import html2canvas from 'html2canvas'
import { backdomain, firstchange, login } from "@/api/login";
import { quickmoneylist } from "@/api/memberCenter";
import { checkPassword, checkUser } from "@/utils/index";
// import { ImagePreview, Toast } from "vant";

// Vue.use(Toast);
// Vue.use(html2canvas)
// Vue.use(ImagePreview);
export default {
  name: "registerSuccess",
  data() {
    return {
      login: "",
      title: "注册成功",
      quick_amount: [],
      amount_select: -1,
      money: "",
      username: "",
      password: "",
      usernameCached: "",
      passwordCached: "",
      registerType: "",
      usernameCanEdit: false,
      passwordCanEdit: false,
      accountOnEditingU: false,
      accountOnEditingP: false,
      backDomain: "",
      index_pic: ""
    };
  },
  components: {
    Lheader
  },
  watch: {
    accountOnEditingP(value) {
      if (!value) {
        // this.username = this.usernameCached
        this.password = this.passwordCached;
      }
    },
    accountOnEditingU(value) {
      if (!value) {
        this.username = this.usernameCached;
      }
    }
  },
  created() {
    this.$store.dispatch('global/setGuide',true)
    let registerUser = JSON.parse(
      window.localStorage.getItem("registerUser") || "{}"
    );
    const { username, password, type } = registerUser;
    if (!username) {
      return this.$router.push("/login");
    }
    this.username = username;
    this.password = password;
    this.registerType = type;

    this.usernameCached = this.username;
    this.passwordCached = this.password;

    this.checkUserInfo();
    this.usernameCanEdit = type === "quick";
    const data = {
      merchant_no: process.env.VUE_APP_MERCHANT_NO,
      access_token: window.localStorage.token
    };
    backdomain({ merchant_no: process.env.VUE_APP_MERCHANT_NO }).then(res => {
      this.backDomain = res.data.data[0].domain;
    });
  },
  destroyed() {
    window.localStorage.removeItem("registerUser");
    // this.setUserInfo();
  },
  methods: {
    toPerson(){
      this.$router.push({path:'/personalData'})
    },
    selectAmount(amount, index) {
      // console.log(',,,,,,,,,,,,,,', amount, index)
      this.money = amount;
      this.amount_select = index;
      // this.$router.push({path: '/deposit', query: {money: this.money}});
    },
    checkUserInfo() {
      // if (this.registerType === 'quick') {
      this.passwordCanEdit = true;
      // }
      // return accountsafe().then(res=> {
      //   if (res.data.code === 0) {
      //     // this.userSafeinfo = res.data.data
      //     this.passwordCanEdit = res.data.data.is_first_set_pass;
      //   }
      // })
    },
    setUserInfo() {
      // login({
      //   merchant_no: process.env.VUE_APP_MERCHANT_NO,
      //   username: this.username,
      //   password: this.password
      // }).then(res => {
      //   if (res.data.code === 0) {
      //     // window.localStorage.token = res.data.data.access_token
      //     // window.localStorage.id = res.data.data.id
      //     // this.$store.dispatch("users/updateToken", user.access_token);
      //     this.$store.dispatch("users/getUserInfo");
      //   }
      // });
      this.$store.dispatch("users/getUserInfo");
    },
    updateAccount(type) {
      const { username, password, usernameCanEdit, passwordCanEdit } = this;
      const data = {
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        access_token: window.localStorage.token
      };
      if (usernameCanEdit && !checkUser(username)) {
        return this.$toast.fail("请输入a开头的6-12位英文、数字");
      }
      if (passwordCanEdit && !checkPassword(password)) {
        return this.$toast.fail("密码格式有误");
      }
      Object.assign(data, {
        username,
        password
      });
      firstchange(data).then(res => {
        console.log(this.accountOnEditingP, this.accountOnEditingU);
        if (res.data.code === 0) {
          const account = {
            username,
            password
          };
          const registerUser = Object.assign({}, account, {
            type: this.registerType
          });
          window.localStorage.setItem(
            "registerUser",
            JSON.stringify(registerUser)
          );
          // this.accountOnEditingP = false
          // this.accountOnEditingU = false
          if (this.accountOnEditingP == true) {
            this.accountOnEditingP = false;
            this.passwordCanEdit = false;
          }
          if (this.accountOnEditingU == true) {
            this.accountOnEditingU = false;
            this.usernameCanEdit = false;
          }
          // this.setUserInfo();
          this.$toast("账号修改成功");
        } else {
          this.$toast.fail(res.data.msg);
        }
        // this.usernameCanEdit = false
        // this.passwordCanEdit = false
        this.usernameCached = username;
        this.passwordCached = password;
      });
    },
    onCopy: function(e) {
      this.$toast("复制成功");
    },
    onError: function(e) {
      this.$toast.fail("复制失败，请重试");
    },
    onScreenshot: function(e) {
      this.$toast.fail("请截图保存账户密码");
    },
    hanlerCancel() {
      this.accountOnEditingU = false;
      this.accountOnEditingP = false;
    }
  }
};
</script>

