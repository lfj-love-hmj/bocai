<style scoped lang="less">
@import '~@assets/styles/downApp/index.less';
.container {
  background-color: #191919;
  height: 100%;
  background-size: cover;
  background-position: center -100px;
  background-image: url('~@assets/img3_0/appdown/bg@3x.png');
  background-repeat: no-repeat;
  /deep/ .van-overlay {
    top: 1.173333rem;
    background-color: rgba(0, 0, 0, 0.8);
  }
  /deep/ .van-popup {
    background-color: transparent;
  }
  .aagames-nav-bar {
    height: 88px;
  }
  .guid {
    width: 100%;
    height: 100%;
    > img {
      width: 308px;
      position: absolute;
      right: 0.8rem;
    }
    div {
      margin-top: 402px;
      text-align: center;
      p {
        margin-top: @margin-30;
        height: 44px;
        font-size: 32px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(237, 237, 237, 1);
        line-height: 44px;
      }
    }
  }

  .nav-bar {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    height: 88px;
    display: flex;
    align-content: center;
    .left {
      flex: 1;
      font-size: 32px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 88px;
    }
    .right {
      margin-top: 16px;
      display: flex;
      // height: .8rem;
      > div {
        text-align: center;
        width: 140px;
        height: 56px;
        line-height: 56px;
        background: rgba(53, 52, 53, 1);
        border-radius: 8px;
        &:first-child {
          color: #ffffff;
        }
        &:last-child {
          margin-left: 20px;
          color: #232321;
          background: linear-gradient(
            90deg,
            @primary-color 0%,
            rgba(171, 138, 97, 1) 99%
          );
        }
      }
    }
  }
  .main {
    font-family: PingFangSC-Semibold, PingFang SC;
    // height:100%;
    padding: 0;
    // flex: 1;
    margin-top: @main-top;
    ._img {
      margin: 0 auto;
      display: block;
    }
    .down_logo {
      ._img;
      margin-top: 64px;
      width: 296px;
    }
    .downhz {
      ._img;
      margin-top: 40px;
      width: 428px;
    }
    .app {
      margin-top: 30px;
      text-align: center;
      height: 76px;
      font-size: 64px;
      font-family: FZCSJW--GB1-0, FZCSJW--GB1;
      font-weight: normal;
      color: @primary-color;
      line-height: 76px;
    }
    .experience {
      margin-top: 22px;
      text-align: center;
      height: 40px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: @primary-text-color;
      line-height: 40px;
    }
    .dy {
      ._img;
      margin-top: 44px;
      width: 652px;
    }

    .downAppBtn {
      width: 550px;
      margin: 0 auto;
      position: relative;
      border-radius: 50px;
      overflow:hidden;
      button {
        width: 100%;
        height: 100px;
        background: @primary-color;
        border-radius: 50px;
        border: none;
        font-size: 32px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: @text-color-default;
        line-height: 48px;
        a {
          color: #fff;
          height: 100%;
          width: 100%;
          display: block;
          line-height: 88px;
        }
      }
      .shadow {
        transition: all 1s;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 1px;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
      }
    }
    .tutorial {
      text-align: center;
      height: 44px;
      font-size: 32px;
      font-weight: 500;
      color: rgba(82, 81, 82, 1);
      line-height: 44px;
      margin-top: 60px;
    }
    .xiala {
      ._img;
      width: 36px;
      margin-top: 18px;
    }
    .downIos {
      ._img;
      margin-top: 128px;
      width: 606px;
    }
    /deep/ .my-bullet {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-left: 10px;
      border-radius: @border-radius-5px;
      background: #fff;
      opacity: .2;
    }
    /deep/ .swiper-pagination-bullet-active {
      opacity: 1;
    }
    /deep/ .swiper-pagination{
      bottom:-20px;
      width:100%;
      height:20px;
    }
    .lunbo {
      height:0;
      width:100%;
      background-color:@bg-color;
      position: absolute;
      bottom:0;
      transition: all 2s;
      overflow: hidden;
      .swiper-container{
        text-align: center;
        overflow: unset;
        &:nth-child(7) {
          width:517px;
        }
        img{
          width:605px;
        }
        .top-title{
          margin-bottom: 44px;
          .p1{
            font-size: 32px;
            color:#f5f5f5;
            margin-top: 60px;
          }
          .p2{
            font-size: 24px;
            color:#e8e8e8;
            margin-top: 24px;
          }
          .p3{
            font-size: 28px;
            color:@primary-color;
            margin-top: 24px;
          }
        }
      }
    }
    /deep/ .swiper-button-prev {
    }
    /deep/ .swiper-button-next {
    }

    .tech {
      background: linear-gradient(
        270deg,
        rgba(22, 19, 13, 1),
        rgba(44, 40, 28, 1)
      );
      // height: calc(100vh - 6rem - 1.17333rem);
      // height: 0;
      transition: all 2s;
      overflow: hidden;
      position: relative;
      .tips {
        text-align: center;
        > p:first-child {
          display: inline-block;
          margin-top: @margin-15;
          font-size: @margin-15;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          opacity: 0.2;
        }
        > p:last-child {
          margin-top: @margin-10;
          font-size: @font-size-13;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(199, 138, 0, 1);
        }
      }
    }
    .site-logo {
      transition: all 2;
      display: flex;
      justify-content: center;
      margin: 0.5rem auto 0;
      .logo {
        width: 1.5rem;
        height: 1.5rem;
        > img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
      .site-name {
        > div:first-child {
          font-size: 1.1rem;
          > span:first-child {
            background: linear-gradient(
              270deg,
              rgba(254, 220, 147, 1) 0%,
              rgba(254, 200, 84, 1) 100%
            );
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          > span:last-child {
            color: #ffffff;
          }
        }
        > div:last-child {
          height: 0.72rem;
          font-size: 0.35rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          opacity: 0.7;
          margin-top: 0.08rem;
        }
      }
    }
    .site-logo1 {
      transition: all 2;
      display: flex;
      justify-content: center;
      margin: 1.5rem auto 0;
      flex-direction: column;
      align-items: center;
      .logo {
        width: 2.5rem;
        height: 2.5rem;
        > img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
      .site-name {
        > div:first-child {
          font-size: 1.1rem;
          margin-top: 0.3rem;
          > span:first-child {
            background: linear-gradient(
              270deg,
              rgba(254, 220, 147, 1) 0%,
              rgba(254, 200, 84, 1) 100%
            );
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          > span:last-child {
            color: #ffffff;
          }
        }
        > div:last-child {
          height: 0.72rem;
          font-size: 0.35rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          opacity: 0.7;
          margin-top: 0.38rem;
        }
      }
    }
    .left-poup {
      position: absolute;
      left: 0;
      top: 1.2rem;
      background: linear-gradient(
        270deg,
        rgba(254, 225, 163, 1) 0%,
        rgba(254, 199, 82, 1) 100%
      );
      border-radius: 0rem 1rem 1rem 0rem;
      text-align: center;
      width: 2rem;
      height: 0.7rem;
      line-height: 0.7rem;
      color: rgba(32, 28, 23, 1);
    }
    .nav-bar {
      width: 100%;
      height: 1.173333rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 @margin-10;
      // background-color: rgba(0,0,0,0.4);
      .left {
        > img {
          width: 0.8rem;
        }
      }
      .right {
        display: flex;
        // height: .8rem;
        > div {
          width: 1.373333rem;
          height: 0.7rem;
          line-height: 0.7rem;
          text-align: center;
          font-size: @font-size-14;
          &:first-child {
            background: rgba(199, 138, 0, 0);
            border: 0.026666rem solid @primary-color;
            border-radius: 0.053333rem;
            color: @primary-color;
          }
          &:last-child {
            background: @primary-color;
            border-radius: 0.053333rem;
            color: #ffffff;
            margin-left: @margin-5;
          }
        }
      }
    }
    /*  .logo {
                img {
                  width: 138px;
                  height: 150px;
                  margin-top: 171px;
                }
              } */
    .explain {
      margin-top: 50px;
      color: #ffffff;
      font-size: 40px;
      .title1 {
        margin-top: 30px;
        font-size: 28px;
        color: #c5cfd6;
      }
    }
    .appImg {
      margin-top: 89px;
      .explainImg {
        width: 230px;
        height: 230px;
        background-size: 100% 100%;
      }
      .android {
        background-image: initial !important;
      }
      .appExplain {
        margin-top: 40px;
        color: #c5cfd6;
        font-size: 28px;
      }
      .step {
        margin-top: 20px;
        color: #ffcf6e;
        font-size: 24px;
      }
    }

    .downAppBtn1 {
      margin-top: 500px;
    }
    .trustBtn {
      margin: 0 40px;
      margin-top: 30px;
      position: relative;
      button {
        width: 100%;
        border: none;
        border-radius: @border-radius-5px;
        background: linear-gradient(
          270deg,
          rgba(63, 57, 46, 1),
          rgba(84, 80, 67, 1)
        );
        font-size: 32px;
        font-weight: 700;
        height: 88px;
        a {
          color: #fff;
        }
      }
    }
  }
  .wecharDown {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: #ffcf6e;
    font-size: 28px;
    .right {
      margin-right: 53px;
      margin-top: 30px;
      img {
        width: 302px;
        height: 162px;
      }
    }
    .introduce {
      li {
        margin: 20px;
        margin-top: 40px;
        .step {
          width: 100px;
          display: inline-block;
        }
        .introduceText {
          width: 300px;
          display: inline-block;
          text-align: left;
          white-space: nowrap;
        }
      }
    }
  }
  .wrap-app{
    text-align: center;
    img{
      display: block;
      margin: 0 auto;
    }
    p{
      color: #fff;
      font-size: 30px;
      line-height: 40px;
      margin-top: 20px;
      margin-bottom: 30px;
    }
    .title{
      width: 176px;
      height: 52px;
      margin-top: 37px;
      margin-bottom: 60px;
    }
    .icon{
      width: 64px;
      height: 67px;
    }
    .step{
      width: 650px;
      margin-bottom: 30px;
    }
  }
}
</style>
<template>
  <div class="container downApp">
    <div class="nav-bar">
      <div class="left" @click="$router.push('/')">返回首页</div>
      <div class="right" v-if="!isLogin">
        <div @click="$router.push('register')">注册</div>
        <div @click="$router.push('login')">登录</div>
      </div>
    </div>
    <div class="main">
      <!-- <img class="down_logo" id="down_logo" :src="require('@assets/img3_0/login/logo@2x.png')" alt /> -->
      <img class="down_logo" id="down_logo" :src="h5LogoSrc" alt />
      <img class="downhz" v-if="$projectname !== 'chobet'&&!(aoMenUi.includes($projectname)) && $projectname !== '10046'" :src="require('@assets/img3_0/login/cooperation@2x.png')" alt />
      <div class="app">全新APP上线</div>
      <p class="experience">信誉就是最好的用户体验</p>

      <img v-if="type !=='ios' && ['chobet','wanqu','10015','10019','10021', '10046','10057'].indexOf($projectname) == -1" class="dy" :src="require('@assets/img3_0/appdown/dy@2x.png')" alt />
      <div class="downAppBtn" :style="{'margin-top':type == 'ios'?'20px':'-20px'}">
        <van-button type="info" :loading="loading" loading-text="加载中..." @click="downApp">
          <span v-show="percent == 100">免费下载APP</span>
          <span v-show="percent<100 && percent>0">下载{{(100-percent).toFixed(2)}}%</span>
          <span v-show="percent<0">下载完成</span>
        </van-button>
        <div v-show="percent<100" class="shadow" :style="{width:`${percent}%`}"></div>
      </div>
      <template v-if="type === 'ios' && ['wanqu'].indexOf($projectname) !== -1">
        <div class="wrap-app">
          <img class="title" src="@/assets/common/img/downApp/title@2x.png" alt="">
          <img class="icon" src="@/assets/common/img/downApp/icon-ios@2x.png" alt="">
          <p>点击「免费下载」,安装「Malaysia History」<br/>每次打开直接进入万趣娱乐</p>
          <img class="step" src="@/assets/common/img/downApp/install-ios-1@2x.png" alt="">
          <img class="step" src="@/assets/common/img/downApp/install-ios-2@2x.png" alt="">
        </div>
      </template>
      <template v-if="type === 'android' && ['wanqu'].indexOf($projectname) !== -1">
        <div class="wrap-app">
          <img class="title" src="@/assets/common/img/downApp/title@2x.png" alt="">
          <img class="icon" src="@/assets/common/img/downApp/icon-android@2x.png" alt="">
          <p>点击下载安装安卓软件<br/>每次打开直接进入万趣娱乐</p>
          <img class="step" src="@/assets/common/img/downApp/install-android@2x.png" alt="">
        </div>
      </template>
      <!-- <div class="downAppBtn" style="margin-top: 10px" v-if="percent < 100 && type==='ios'">
        <button type="button">
          <span v-if="percent <=100 && percent>0">一键信任</span>
          <a
            v-else-if="percent < 0"
            href="https://static.gugejiejing.com/embedded.mobileprovision"
          >一键信任</a>
        </button>
      </div> -->
      <!-- 没有马甲包时使用 -->
      <!-- <div class="lunbo" :style="{'height':type==='ios' && percent<100 ? '9.66667rem':'0'}">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(user,id) in banners" :key="id" >
              <div class="top-title">
                <p class="p1">{{titleArr[id].main}}</p>
                <p class="p2">{{titleArr[id].sub}}</p>
                <p class="p3">{{titleArr[id].text}}</p>
              </div>

              <img :src="banners[id]" :alt="id">

            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="downAppBtn" style="margin-top:20px;">
          <button type="button" @click="downApp">
            <span v-show="percent == 100">免费下载APP</span>
            <span v-show="percent<100 && percent>0">下载{{(100-percent).toFixed(2)}}%</span>
            <span v-show="percent<0">下载完成</span>
          </button>
          <div v-show="percent<100" class="shadow" :style="{width:`${percent}%`}"></div>
        </div>
        <div class="downAppBtn" style="margin-top: 10px" v-if="percent < 0">
          <button type="button">
            <span v-if="percent <=100 && percent>0">一键信任</span>
            <a
              v-else-if="percent < 0"
              href="https://static.youtiao.live/embedded.mobileprovision"
            >一键信任</a>
          </button>
        </div>
      </div> -->
    </div>
    <van-popup class="guid" v-model="isShow" @click="isShow=false">
      <img :src="require('@assets/img3_0/appdown/point@2x.png')" alt />
      <div>
        <p>第一步：点击右上角功能按钮</p>
        <p>步骤二：选择“在浏览器中打开”</p>
        <p>步骤三：在浏览器打开的网页下载APP</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { member } from "@/api/memberCenter";
import { siteinfo } from "@/api/home";
import "swiper/dist/css/swiper.css";
import { Swiper } from "vue-awesome-swiper";
import { mapState } from "vuex";

export default {
  name: "index",
  data() {
    return {
      title: `${this.$config[this.$projectname].secName}APP下载`,
      isShow: false,
      isIos: "", //下载地址
      type: "ios", //手机种类
      banners: [
        require('@assets/img3_0/appdown/pic_b@2x.png'),
        require('@assets/img3_0/appdown/pic_c@2x.png'),
        require('@assets/img3_0/appdown/pic_d@2x.png'),
        require('@assets/img3_0/appdown/pic_e@2x.png'),
        require('@assets/img3_0/appdown/pic_f@2x.png'),
        require('@assets/img3_0/appdown/pic_g@2x.png'),
        require('@assets/img3_0/appdown/pic_h@2x.png')
      ], //引导图片
      weixin: false,
      percent: 100,
      titleArr: [
        {main: 'iOS安装教程', sub: '请依照下图教程完成安装'},
        {main: '第一步：打开【设置】', sub: ''},
        {main: '第二步：进入【通用】', sub: ''},
        {main: '第三步：进入【设备管理】', sub: ''},
        {main: '第四步：找到对应的选项', text:'【China Telecom ******** *******… 】'},
        {main: '第五步：点击【信任】选项', text: '【 信任 China Telecom ******** ******* *… 】'},
        {main: '第六步：点击【信任】', sub: '回到桌面 即可正常进入'}
      ],
      isLogin: false,
      loading:false,
      // aoMenUi:['takchun','Gdh','Js3','Mgm8','Wns1','Cod8','Xpj28','Yh8','Yl0','ybh']
      aoMenUi:['takchun', '10012', '10013','10014','10020', 'mgm8', '10006', '10011', '10007', '10009', '10010', '10008', '10015', '10019', '10021','10034','10057'],
      h5LogoSrc: ''
    };
  },
  computed: {
    ...mapState("users", ["token"])
  },
  created() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      this.type = "ios";
    } else if (/(Android)/i.test(navigator.userAgent)) {
      this.type = "android";
    }
    this.isWeiXin();
    if(this.token) {
      this.isLogin = true;
      member({
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        access_token: window.localStorage.token
      }).then(res => {
        if (res.data.code === 0) {
          if (res.data.data.wechat) {

          }
        }
      });
    }

    this.$nextTick(() => {
      new Swiper('.swiper-container',{
        pagination: {
          el: '.swiper-pagination',
          bulletClass : 'my-bullet',//需设置.my-bullet样式
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      })
    })
    siteinfo({
      merchant_no: process.env.VUE_APP_MERCHANT_NO,
      access_token: window.localStorage.token || ""
    }).then(res => {
      if (res.data.code === 0) {
        console.log(res.data.data)
        this.h5LogoSrc = res.data.data.h5_logo
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          this.isIos = res.data.data.ios_down_url;
        } else if (/(Android)/i.test(navigator.userAgent)) {
          this.isIos = res.data.data.android_down_url;
        }
      }
    });
    this.$nextTick(()=>{
      if(this.$projectname=='10010'){
        let ele = document.getElementById('down_logo').src=require('../../assets/10010/img3_0/appdown/logo.png');
      }
      if(this.$projectname=='10011'){
        let ele = document.getElementById('down_logo').src=require('../../assets/10011/img3_0/appdown/logo.png');
      }
      if(this.$projectname=='10034'){
        let ele = document.getElementById('down_logo').src=require('../../assets/10034/img3_0/appdown/logo.png');
      }
    })
  },
  methods: {
    downApp() {
      this.loading = true
      // console.log(this.isIos)
      // request({
      //   url:this.isIos
      // },{
      //   onDownloadProgress (progress) {
      //       console.log(Math.round(progress.loaded / progress.total * 100) + '%');
      //   }
      // })
      // window.location.href = this.isIos;
      window.location.href = this.isIos
      let timer = null;
      setTimeout(() => {
        this.loading = false
        timer = setInterval(() => {
          if (this.percent < 0) {
            clearInterval(timer);
          }
          this.percent = this.percent - 100 / 12;
        }, 1000);
      }, 10000);
    },
    isWeiXin() {
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        this.weixin = true;
        this.isShow = true;
      } else {
        this.weixin = false;
      }
    }
  }
};
</script>

