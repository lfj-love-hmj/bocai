<style scoped lang="less">
  .container {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    height: 100%;

    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100%;

    /deep/.aagames-nav-bar{
      background:transparent;
    }
    .main {
      display: table;
      table-layout: fixed;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      width: calc(100% - 80px);
      margin: 0 auto;
      left: 40px;
      top:552px;
      flex: 1;
      padding: 0;
      background-color:transparent!important;
      .home{
        border-radius: 20px 0 0 20px;
        overflow: hidden;
        display: table-cell;
        background: rgba(255,255,255,.35);
      }
      /deep/.aagames-form{
        #g-code .input input{
          padding-left: 0;
        }
        .right-button{
          right:0 !important;
          background: none!important;
          color: #fff!important;
          height: 40px!important;
          line-height: 40px!important;
          top:25px !important;
          margin-top: 0!important;
        }
      }
    }
  }


  /deep/ .van-tabs {

    .van-tabs__nav {
      background: none;
      background-color: transparent;
    }
    .van-ellipsis {
      font-weight: 700;
      font-size: 30px;
      color: #888888;
    }
    .van-tab{
      font-size: 28px;
    }
    .van-tab--active {
      font-size: 36px;
      .van-ellipsis {
        color: #FFFFFF;
      }
    }
    .van-tabs__wrap{
      border-bottom: 0!important;
    }

  }

  .fill {
    padding:0 30px;
    margin-top: 100px;
    /*background-color: #ffffff;*/
  }
  .aagames-form {
    position: relative;
    padding:0;
    margin-top: 20px;

    /deep/ .input {
      height: 90px;
      color: #999999;
      background: rgba(255,255,255,.2)!important;
      border-radius: 90px;
      .img {
        width: 40px;
        margin-left: 26px;
      }
      .phone{
        position: relative;
      }
      > input {
        background: none!important;
        padding: 0 26px;
        color: #fff;
        &::placeholder{
          color: #bbb;
        }
      }
      .areaNum {
        font-size: 24px!important;
        font-weight: 500;
        color: #fff!important;
        padding: 0;
        width: 170px;
        text-align: center;
        border-color: #bbb;
      }
      .xiala {
        // width: 30px;
        // height: 20px;
        // margin: 0 10px;
      }
      &:after {
        background-color: #FFFFFF;
        opacity: 0.06;
      }
    }
  }
  .function {
    .aagames-button-box {
      margin-bottom: 0;
      .register{
        margin-top: 42px;
      }
      .sign-in {
        margin-top: 42px;
        border-radius: 90px;
        height: 90px;
        background: @bg-gradient-color;
      }
      .line{
        margin-top: 40px;
      }
      .dark {
        margin-top: 40px;
        background: #353435;
        color:#fff;
        border:0;
      }
    }
    .funDiv {
      margin-top: 30px;
      color: #fff;
      font-size: 20px;
      .left {
        float: left;
      }
      .right {
        float: right;
        color: #fff;
      }
      .rem-pass{
        display: flex;
        align-items: center;
        .van-icon{
          font-size: 28px;
          margin-right: 10px;
        }
      }
    }
  }
  .customer {
    padding: 42px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .cut-up {
      width: 2px;
      height: 40px;
      background: rgba(245, 245, 245, 1);
      border-radius: 5px;
      margin: 0 20px;
    }

    .wait, .kefu {
      height: 42px;
      font-size: 28px;
      font-weight: 400;
      color: @text-color-light;
      line-height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 42px;
        height: 42px;
        margin-right: 20px;
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
  .home-regist-btn{
    width: 100px;
    background: rgba(0,0,0,.5);
    text-align: center;
    border-radius: 0 20px 20px 0;
    vertical-align: middle;
    display: table-cell;
    img{
      width: 52px;
    }
    span{
      font-size: 28px;
      color: #fff;
      display: block;
      padding: 0 30px;
      line-height: 50px;
    }
  }


.container.forgerPassword {
  position: relative;
  display: flex;
  // min-height: 100vh;
  flex-direction: column;
  /deep/.aagames-nav-bar{
    background: @bg-card-color;
  }
  .main {
    width: 100%;
    flex: 1;
    padding: @main-top 0 96px;
    .steps {
      box-sizing: border-box;
    }
    .no-binding {
      .msg {
        margin: 60px auto;
        text-align: center;
        width: 670px;
        height: 80px;
        font-size: 28px;
        font-weight: 400;
        color: @primary-text-color;
        line-height: 40px;
      }
      .aagames-button-box {
        display: flex;
      }
    }
    // background-color: #090705;
    .aagames-form {
      position: relative;
      border:0;
      padding:0 30px;
      background-color: #fff;
      margin-top:40px ;
      button{
        border-radius: 90px;
        height: 90px;
      }
      .username {
        padding-left: 36px;
        span{
          font-weight: bold;
        }
      }
      .input {
        padding: 0;
        height: 100px;
        border-radius: 8px;
        background-color: @bg-color-input;
        span{
          border-right: 0;
          color: #333;
        }
        &:after {
          display: none;
        }
        input{
          text-align: right;
          color: #333;
          height: 100%;
          padding: 0;
        }

      }
      .xiala {
        // top: 40px;
        position: absolute;
        right: 30px;
        font-size: 30px;
        color: @bg-gradient-color;
      }
    }

    .step-one {
      margin-top: 0.85333rem;
    }
    .steps1 .input input::placeholder{
      color: #999;
    }
    .retrievePassword {
      // padding-bottom: 88px;

      .mode {
        p {
          color: #333;
          font-size: 26px;
          margin-top: 60px;
          margin-bottom: 20px;
          margin-left: 20px;
        }
        .jiantou {
          position: relative;
          // display: flex;
          label {
            position: absolute;
            top: 50%;
            left: 15px;
            transform: translateY(-50%);
          }
          input {
            width: 100%;
            padding: 0.2rem;
            padding-right: 1rem;
            border: none;
            // background-color: #090705;
            color: #8e9ab5;
            font-size: 26px;
            // border-bottom: 1px solid #8E9AB5;
            text-align: right;
          }
          .icon {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }
        }
      }
      .van-cell {
        padding: 20px 40px;
        font-size: 28px;
        line-height: 45px;
        > * {
          align-self: center;
        }
      }
      .verification {
        margin-top: 30px;
        padding: 0;
        p {
          color: #999;
          font-size: 28px;
          font-weight: 600;
          background: #F5F6FA;
          padding: 0 30px;
          margin-top: -20px;
        }
        .code {
          position: relative;
          display: flex;
          align-items: center;
          .img {
            margin-left: 20px;
          }
          .send {
            width: 220px;
            height: 88px;
            line-height: 88px;
            text-align: center;
            color: @bg-gradient-color;
            font-size: 28px;
            border-left: 2px solid #EDEFF6;
          }
          .input input{
            text-align: right;
            padding-right: 30px;
            padding-left: 0;
          }
          .input span{
            font-weight: bold;
            margin-left: 30px;
          }
        }
        input {
          height: 100%;
          line-height: 88px;
          flex: 1;
          border: none;
          color: #333;
          font-size: 28px;
          margin: 0;
          text-align: left;
          font-weight: bold;
          padding-left: 30px;
        }
      }
      button {
        margin: 50px auto 0;
      }
    }
    .reset {
      p {
        color: #c5cfd6;
        font-size: 26px;
        // margin-top: 40px;
        margin-bottom: 10px;
        // margin-left: 40px;
      }
      .input span{
        font-weight: bold;
      }
      input {
        width: 100%;
        /*padding: 20px 40px;*/
        border: none;
        // background-color: #090705;
        color: #fff;
        font-size: 32px;
        // border-bottom: 1px solid #8E9AB5;
      }
      .aagames-button{
        margin-top: 40px;
        height: 90px;
      }
      .dark {
        // margin: 40px auto 0;
        background: #353435;
        color:#fff;
        border:0;
      }
      .newPass{
        border-bottom: 2px solid #EDEFF6;
      }
    }
  }

  .pop {
    width: 80%;
    padding: 40px;
    .title {
      color: #222222;
      font-size: 36px;
    }
    span {
      display: block;
      color: #222222;
      font-size: 32px;
      margin: 20px;
      line-height: 64px;
    }
  }
}
.aagames-button-box .aagames-button{
  border-radius: 90px;
  height: 90px;
  line-height: 90px;
}
  .bot-kefu{
    position: fixed;
    width: 100%;
    text-align: center;
    left: 0;
    font-size: 28px;
    color: #525152;
    bottom: 80px;
    span{
      color: @bg-gradient-color;
      text-decoration: underline;
    }
  }
</style>
<template>
  <div class="container forgerPassword">
    <lheader :title="title" :isPopup="true" :kefu="false" :isLogin="login" @goback="close"></lheader>
    <div class="main">
      <SecurityStep :step="step" :type="1" v-if="step < 10" />

      <!-- 验证身份第一步，输入账号名称 -->
      <div v-if="step === 1">
        <div class="aagames-form steps1">
          <div class="input username">
            <!--<img class="img" v-if="aoMenUi.includes($projectname)" style="margin-right: 6px;" :src="require('../../../assets/loginIcon/user@2x.png')" alt/>-->
            <!--<img class="img" v-else style="margin-right: 6px;" :src="$imgs['otherIcon/user@2x.png')" alt />-->
            <span>用户名</span>
            <input type="text" v-model="username" :placeholder="`请输入您的${$config[$projectname].project}账号`" />
          </div>
        </div>
        <div class="aagames-button-box step-one">
          <button :class="['aagames-button',{'dark':!username}]" type="button" @click="checkUserInfo">下一步</button>
        </div>
      </div>
      <!-- 没有绑定手机邮箱 -->
      <div v-if="step === 10" class="no-binding">
        <div class="msg">由于您未绑定手机号、邮箱、未设置密保问题，无法验证修改密码!</div>
        <div class="aagames-button-box">
          <button class="aagames-button dark" type="button" @click="step = 1">绑定资料</button>
          <div class="px30"></div>
          <button
            class="aagames-button dark"
            type="button"
            @click="$openKefu"
          >在线客服解决</button>
        </div>
      </div>
      <div class="retrievePassword" v-else-if="step === 2">
        <template v-if="selectWay">
          <!-- <div class="mode">
                      <div class="jiantou">
                        <label>请选择验证方式</label>
                        <input readonly type="text" @click="show = true" v-model="selectWay.text">
                        <van-icon class="icon" name="arrow" color="@primary-text-color" size="23px" />
                      </div>
          </div>-->
          <div class="aagames-form verification">
            <!--<p>-->
              <!--&lt;!&ndash;<span>选验证方式</span>&ndash;&gt;-->
            <!--</p>-->
            <div class="input" @click="show = true">
              <!--<img class="xiala" style="margin-right: 6px;" :src="$imgs['otherIcon/xiala@2x']" alt />-->
              <van-icon class="xiala" name="arrow-down" />
              <input type="text" disabled v-model="selectWay.text" placeholder="选择验证方式" />
            </div>
          </div>
          <!--<van-cell title="请选择验证方式" @click="show = true" is-link v-model="selectWay.text" />-->
          <div class="aagames-form verification" v-show="selectWay.type === 'mobile'">
            <p>
              <span>已绑定手机</span>
              {{ userSafeinfo.mobile }}
            </p>
            <div class="code">
              <div class="input">
                <span>验证码</span>
                <input type="text" v-model="code" placeholder="请输入验证码" />
              </div>

              <div
                class="send"
                :style="{width:content.length > 5?'5rem':''}"
                @click="countDown"
              >{{ content }}</div>
            </div>
          </div>
          <div class="aagames-form verification" v-show="selectWay.type === 'email'">
            <p>
              <span>已绑定邮箱</span>
              {{ userSafeinfo.email }}
            </p>
            <div class="code">
              <div class="input">
                <span>验证码</span>
                <input type="text" v-model="code" placeholder="请输入验证码" />
              </div>
              <div class="send" @click="countDown">{{ content }}</div>
            </div>
          </div>
          <div class="aagames-form verification" v-show="selectWay.type === 'question'">
            <p>
              <span>密保问题</span>
              {{ question.name }}
            </p>
            <div class="code">
              <div class="input">
                <span>答案</span>
                <input v-model="answer" type="text" placeholder="请输入答案" />
              </div>
            </div>
          </div>
          <div class="aagames-button-box">
            <button :class="['aagames-button',{'dark':!code && !answer }]" type="button" @click="forgetFn">下一步</button>
          </div>
        </template>
      </div>

      <div class="reset" v-else-if="step === 3">
        <div class="newPass aagames-form">
          <!--<p>请输入新登录密码</p>-->
          <div class="input">
            <span>新密码</span>
            <input type="password" v-model="password" placeholder="6-20位字符，由数字、字母、符号组成" />
          </div>
        </div>
        <div class="confirmPass aagames-form" style="margin-top: 0">
          <!--<p>确认新密码</p>-->
          <div class="input">
            <span>确认新密码</span>
            <input type="password" v-model="repassword" placeholder="请再次输入密码" />
          </div>
        </div>
        <div class="aagames-button-box">
          <button type="button"  :class="['aagames-button',{'dark':!password || !repassword}]" @click="submit">完成</button>
        </div>
        <p class="bot-kefu">遇到问题，联系<span @click="$openKefu">专属客服</span></p>
      </div>
      <!-- 校验下拉 -->
      <van-popup
        get-container="#app"
        v-model="show" position="bottom">
        <van-picker show-toolbar @confirm="onConfirm" @cancel="onCancel" :columns="vertifyWays" />
      </van-popup>
    </div>
    <!--<van-popup v-model="errorShow" class="pop">-->
    <!--<p class="title">验证提示</p>-->
    <!--<span>由于您未绑定手机号、邮箱，未设置密保问题，请尝试联系客服找回密码。</span>-->
    <!--<div class="aagames-button-box">-->
    <!--<button class="aagames-button" type="button"-->
    <!--@click="$openKefu">联系客服-->
    <!--</button>-->
    <!--</div>-->
    <!--</van-popup>-->
  </div>
</template>

<script>
import Lheader from "../components/l-header";
import SecurityStep from "../components/security-step";
import {
  forgetpass,
  forgetpasscode,
  forgetpassemailcode,
  forgetpassemailcodecheck,
  forgetpassreset,
  forgetpasssmscode,
  forgetsafequestion,
  passquestion
} from "@/api/personalData";
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);

export default {
  name: "ForgetPassword",
  data() {
    return {
      login: "",
      title: "找回密码",
      active: 0,
      isAgree: true,
      show: false,
      retrieve: true,
      step: 1,
      username: "",
      userSafeinfo: {},
      vertifyWays: [],
      selectWay: {},
      questionList: null,
      question: "",
      answer: "",
      forgetpassList: {},
      errorShow: false,
      code: "",
      getCode: "",
      password: "",
      repassword: "",
      canClick: true,
      totalTime: 60,
      clock: "",
      content: "获取验证码",
      aoMenUi:['10009','10010','10011','10012','10015','10021','10034']
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Lheader,
    SecurityStep
  },
  created() {
    passquestion().then(res => {
      if (res.data.code === 0) {
        this.questionList = res.data.data;
      }
    });
  },
  watch: {
    step(step) {
      const maps = ["找回密码", "验证身份", "找回密码",'找回密码','找回密码','找回密码','找回密码','找回密码','找回密码','忘记密码'];
      this.title = maps[step - 1];
    }
  },
  methods: {
    close() {
      this.$router.go(-1)
      if (this.step === 10) {
        this.step = 1;
      }else if (this.step > 1) {
        this.step = this.step - 1;
      } else {
        this.$emit("input", false);
      }
    },
    checkUserInfo() {
      if (!this.username) {
        this.$toast.fail("请输入账户名或手机号");
        return false;
      }
      forgetpass({
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        username: this.username
      }).then(res => {
        if (res.data.code === 0) {
          this.userSafeinfo = res.data.data;
          const { mobile, email, pass_question_id } = this.userSafeinfo;
          if (!mobile && !email && !pass_question_id) {
            this.errorShow = true;
            this.step = 10;

            return false;
          }
          let num = 0;
          // 判断是否有下拉校验
          this.vertifyWays = []
          if (mobile) {
            this.vertifyWays.push({
              text: "手机号验证",
              type: "mobile"
            });
          }
          if (email) {
            this.vertifyWays.push({
              text: "邮箱验证",
              type: "email"
            });
          }
          if (pass_question_id) {
            this.vertifyWays.push({
              text: "密保验证",
              type: "question"
            });

            for (let i = 0; i < this.questionList.length; i++) {
              if (this.questionList[i].id === pass_question_id) {
                this.question = this.questionList[i];
                break;
              }
            }
          }

          if (this.vertifyWays.length) {
            this.selectWay = this.vertifyWays[0];
            this.step = 2;
          }
        }
      });
    },
    forgetFn() {
      const data = {
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        uid: this.userSafeinfo.id
      };
      const { answer, code, question } = this;
      const type = this.selectWay.type;
      let request;
      if (type === "question") {
        if (!answer) {
          this.$toast.fail("请输入密保问题答案");
        }
        Object.assign(data, {
          pass_question_id: question.id,
          pass_answer: answer
        });
        request = forgetsafequestion(data);
      } else {
        if (!code) {
          this.$toast.fail("请输入验证码");
          return false;
        }
        // if (code !== this.getCode) {
        //   Toast('验证码输入有误')
        //   return false;
        // }
        Object.assign(data, {
          code,
          phone_area_code: this.userSafeinfo.phone_area_code
        });
        if (type === "mobile") {
          request = forgetpasscode(data);
        } else if (type === "email") {
          request = forgetpassemailcodecheck(data);
        }
      }
      if (request) {
        request.then(res => {
          if (res.data.code === 0) {
            this.step = 3;
          } else {
            this.$toast.fail(res.data.msg);
          }
        });
      }
    },
    onConfirm(val) {
      console.log(val);
      this.selectWay = val;
      this.content = "获取验证码";
      this.canClick = true;
      window.clearInterval(this.clock);
      this.totalTime = 60;
      this.show = false;
    },
    onCancel(val) {
      this.show = false;
    },
    phoneCode() {
      forgetpasssmscode({
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        uid: this.userSafeinfo.id,
        phone_area_code: this.userSafeinfo.phone_area_code
      }).then(res => {
        if (res.data.code == 0) {
          this.getCode = res.data.data.code;
        } else {
          this.$toast.fail(res.data.msg);
          window.clearInterval(this.clock);
          this.content = "重新发送验证码";
          this.totalTime = 60;
          this.canClick = true; //这里重新开启
        }
      });
    },
    emailCode() {
      forgetpassemailcode({
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        uid: this.userSafeinfo.id
      }).then(res => {
        if (res.data.code == 0) {
          this.getCode = res.data.data.code;
        } else {
          this.$toast.fail(res.data.msg);
          window.clearInterval(this.clock);
          this.content = "重新发送验证码";
          this.totalTime = 60;
          this.canClick = true; //这里重新开启
        }
      });
    },
    countDown() {
      if (!this.canClick) return; //改动的是这两行代码
      this.canClick = false;
      if (this.selectWay.type === "mobile") {
        this.phoneCode();
      } else {
        this.emailCode();
      }
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
    },
    submit() {
      const { password, repassword, answer, code, question } = this;
      const data = {
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        uid: this.userSafeinfo.id,
        phone_area_code: this.userSafeinfo.phone_area_code,
        type: 1,
        password,
        repassword,
        code
      };
      const type = this.selectWay.type;

      if (question) {
        Object.assign(data, {
          pass_question_id: question.id,
          pass_answer: answer
        });
      }

      if (!password) {
        this.$toast.fail("请输入密码");
        return false;
      }
      if (!repassword) {
        this.$toast.fail("请再次输入密码");
        return false;
      }
      // if (!checkPassword(password)) {
      //   Toast('密码格式有误');
      //   return false;
      // }
      if (password !== repassword) {
        this.$toast.fail("两次输入的密码不一致");
        return false;
      }
      if (type === "mobile") {
        data.type = 1;
      } else if (type === "email") {
        data.type = 2;
      } else {
        data.type = 3;
      }
      forgetpassreset(data).then(res => {
        if (res.data.code === 0) {
          const This = this;
          Toast({
            message: "登录密码修改成功",
            onClose() {
              This.step = 1;

              // This.$router.push('memberCenter')
              This.close();
            }
          });
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    }
  }
};
</script>

