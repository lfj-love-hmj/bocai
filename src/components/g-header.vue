<template>
  <div :class="['aagames-header']" :style="{zIndex:zIndex}">
    <div class="tool-bar" v-if="$projectname=='wanqu'||$projectname=='chashao'"></div>
    <div class="address_net" v-else>
      <!-- tyc.com
      <van-icon name="close"></van-icon> -->
    </div>
    <div class="aagames-nav-bar">
      <div class="nav-left">
        <!-- 首页logo -->
        <!-- <div class="new_logo_wrap" v-if="$projectname === 'takchun'" @click="$router.push('/')">
          <img src="@assets/img3_0/common/logo.png" alt="" class="new_logo">
        </div> -->
        <div class="aagames-logo" @click="$router.push('/')">
          <img class="logo" v-if="h5LogoSrc" :src="h5LogoSrc" alt />
        </div>
      </div>
      <div class="nav-center">
        <div class="no-token" v-if="!token">
          <div class="aagames-button-box">
            <button
              class="aagames-button line"
              type="button"
              @click="$router.push({path: '/login'})"
            >登录</button>
          </div>
          <div class="aagames-button-box">
            <button
              class="aagames-button sign-in"
              type="button"
              @click="$router.push({path: '/register'})"
            >注册</button>
          </div>
        </div>
        <div class="member-info" v-else @click="onMoneyShow">
          <!-- <div
            class="person-info background-image"
            v-show="$projectname !== 'chobet'"
            @click="$router.push({path: '/memberCenter'})"
            :style="{backgroundImage:`url(${require('@assets/img3_0/memberCenter/login-out.png')})`}"
            v-if="$projectname=='wanqu'||$projectname=='chashao'||$projectname=='10015'"
          ></div> -->
          <div class="money">
            {{ (wallet && wallet.money || 0) | currency('') }}
            <van-icon class="xiala" v-if="moneyShow" name="arrow-up" />
            <van-icon class="xiala" v-if="!moneyShow"name="arrow-down" />
          </div>
          <div class="deposit" @click="$router.push({path: '/deposit'})">存款</div>
        </div>
      </div>

      <div class="nav-right" align="right">
        <div class="service" @click="callShow = true"></div>
      </div>
    </div>

    <!-- 客服 -->
    <van-popup
      closeable
      class="callBack custom"
      position="bottom"
      v-model="show"
      get-container="#app"
    >
      <div class="pop-head">
        <h2>请求回电</h2>
        <van-icon name="arrow-left" @click="fanhui" />
      </div>
      <p class="title">申请回拨我们将有专人5分钟内给您致电处理问题</p>
      <div class="aagames-form">
        <div class="input">
          <phoneArea v-model="areaCode">
            <i class="areaNum">
              &nbsp;+{{ areaCode }}
              <img class="xiala" :src="require('@assets/img3_0/otherIcon/xiala@2x.png')" alt />
            </i>
          </phoneArea>
          <input v-model="phone" type="text" placeholder="请输入手机号" />
        </div>
        <div class="input t-input">
          <textarea v-model="remark" placeholder="您可以描述您的疑问，可以更快的帮助您处理" />
        </div>
        <div class="feedbackImg clearfix">
          <!-- 是否预览 -->
          <!-- @click="onPreview(index)" -->
          <div class="feedbackList">
            <!-- <img :src="item" /> -->
            <div
              class="imgBack"
              v-for="(item,index) in uploadImg"
              :key="index"
            >
              <p>附件:{{item}}</p>
              <van-icon size="16px" name="cross" @click.stop="onCross(index)" />
            </div>
          </div>
        </div>
      </div>
      <div class="aagames-button-box">
        <van-uploader :after-read="onRead">
          <van-button class="aagames-button line" type="primary">上传附件</van-button>
        </van-uploader>

        <button class="aagames-button" type="button" @click="callbackSubmit">申请回拨</button>
      </div>
    </van-popup>
    <van-popup class="callBack" v-model="successInfo" get-container="#app">
      <div class="title">温馨提示</div>
      <div class="website">请求回电成功</div>
    </van-popup>

    <van-popup
      closeable
      close-icon-position="top-left"
      class="callshow custom"
      position="bottom"
      v-model="callShow"
      get-container="#app"
    >
      <div class="pop-head">
        <h2>选择联系方式</h2>
      </div>
      <p class="title">我们为您提供两种服务方式</p>
      <div class="aagames-button-box">
        <button class="aagames-button" type="button" @click="callService">联系客服</button>
        <button class="aagames-button" type="button" @click="callbackCk">电话回访</button>
      </div>
    </van-popup>

    <!-- q区码 -->
    <van-popup get-container="body" v-model="areaCodeShow" position="bottom">
      <van-picker
        show-toolbar
        @confirm="onConfirm"
        value-key="text"
        @cancel="onCancel"
        :columns="columns"
      />
    </van-popup>

    <van-popup
      @closed="closedMoneyShow"
      v-model="moneyShow"
      class="moneyShow"
      position="top"
      get-container="#app"
    >
      <div class="account">
        账户：{{username}}
        <img
          v-clipboard:copy="username"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          :src="require('@assets/img3_0/otherIcon/copy_icon@2x.png')"
          alt
        />
      </div>
      <div class="refresh" @click="refresh">
        点击刷新额度
        <img :class="{ active: balanceLoading }" :src="require('@assets/img3_0/otherIcon/shuaxin_2@2x.png')" alt />
      </div>
      <div class="amount">
        <div class="item">
          <div class="top">
            主钱包
            <van-icon name="question-o" @click="help(1)" size="30" />
          </div>
          <div class="bottom">{{ (wallet && wallet.money || 0) | currency('') }}</div>
        </div>
        <div class="px2"></div>
        <div class="item">
          <div class="top">
            游戏额度
            <van-icon name="question-o" @click="help(2)" size="30" />
          </div>
          <div class="bottom">{{ (wallet && wallet.all_platform_money || 0) | currency('') }}</div>
        </div>
        <div class="px2"></div>
        <div class="item">
          <div class="top">
            理财小金库
            <van-icon name="question-o" @click="help(3)" size="30" />
          </div>
          <div class="bottom">{{ (wallet && wallet.financing_money || 0) | currency('') }}</div>
        </div>
      </div>
      <div class="fanla" @click="moneyShow=false">
        <img :src="require('@assets/img3_0/otherIcon/fanla@2x.png')" alt />
        额度详情展开，点击收起
      </div>
    </van-popup>
  </div>
</template>

<script>
import { isnum } from "@/utils/index";
import { recall, siteinfo } from "@/api/home";
import { phonearea } from "@/api/login";
import { feedback, upload } from "@/api/personalData";
import { mapState } from "vuex";
// import { ImagePreview } from 'vant';
// import Vue from 'vue';
// Vue.use(ImagePreview);

export default {
  name: "GlobalHeader",
  data() {
    return {
      balanceLoading: false,
      zIndex: "",
      moneyShow: false,
      isLogin: true,
      callShow: false,
      show: false,
      // realName: window.localStorage.username || '',
      areaCode: "86",
      successInfo: false,
      areaCodeShow: false,
      phone: "",
      remark: "",
      columns: [],
      data: {
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        access_token: window.localStorage.token
      },
      // getInfo: {},
      h5LogoSrc: "",
      imgArr:[],
      uploadImg:[]
    };
  },
  created() {
    // if (window.localStorage.token) {
    //   member(this.data).then(res=> {
    //     if (res.data.code === 0) {
    //       this.getInfo = res.data.data;
    //       console.log(this.getInfo)
    //     }
    //   })
    // }
    if(this.token) {
      this.refresh()
    }
    phonearea().then(res => {
      if (res.data.code === 0) {
        this.columns = res.data.data;
      }
    });
    siteinfo(process.env.VUE_APP_MERCHANT_NO).then(res => {
      if (res.data.code === 0) {
        this.h5LogoSrc = res.data.data.h5_logo;
      }
    });
  },
  props: ["title", "type"],
  computed: {
    ...mapState("users", ["token", "wallet", "userInfo", "username"])
  },
  methods: {
    help(t) {
      let type = {
        1: {
          name: "主钱包",
          descc:
            `${this.$config[this.$projectname].project}平台余额，可以取款和转入游戏厅，也可转入理财小金库进行收益！`
        },
        2: {
          name: "游戏额度",
          descc: "汇总所有游戏厅余额，详细游戏额度可以在额度转账页面查看！"
        },
        3: {
          name: "理财小金库",
          descc: "您理财小金库的本金+利息，可以随意使用哦！！"
        }
      };
      this.$dialog
        .alert({
          title: type[t].name,
          message: type[t].descc,
          confirmButtonText: "我知道了"
        })
        .then(() => {
          // on close
        });
    },
    refresh() {
      this.balanceLoading = true;
      this.$store
        .dispatch("users/getWallet")
        .then(res => {
          this.balanceLoading = false;
        })
        .catch(() => {
          this.balanceLoading = false;
        });
    },
    onCopy: function(e) {
      this.$toast("复制成功");
    },
    onError: function(e) {
      this.$toast("复制失败");
    },
    closedMoneyShow() {
      this.zIndex = "";
    },
    onMoneyShow() {
      if (this.moneyShow) {
        this.moneyShow = false;
      } else {
        this.moneyShow = true;
        this.zIndex = 10000;
      }
    },
    callService() {
      this.$openKefu();
    },
    fanhui() {
      this.show = false;
      this.callShow = true;
    },
    callbackCk() {
      this.callShow = false;
      if (this.token) {
        this.show = true;
      } else {
        this.$router.push("/login");
      }
    },
    callbackSubmit() {
      console.log(this.uploadImg,this.imgArr)
      if (!isnum(this.phone)) {
        this.$toast.fail("手机格式有误");
        return false;
      }
      if (!this.remark) {
        this.$toast.fail('多少写点什么吧~：）')
        return false
      }
      this.$loading();
      recall({
        tel: this.phone,
        remark: this.remark,
        pic:JSON.stringify(this.imgArr),
        access_token: this.token
      }).then(res => {
        this.$toast.clear();
        this.show = false;
        if (res.data.code === 0) {
          this.$toast("请求回电成功！");
          this.successInfo = false;
          this.phone = ''
          this.remark = ''
          this.uploadImg = []
          this.imgArr = []
        } else {
          this.$toast.fail("请求回电失败请重试！");
        }
      });
    },
    onCancel(val) {
      this.areaCodeShow = false;
    },

    onConfirm(val) {
      this.areaCodeShow = false;
      this.areaCode = val;
    },
    goCenter() {
      this.$router.push({ name: "memberCenter" });
    },
    onRead(file) {
      var windowURL = window.URL || window.webkitURL;
      let param = new FormData();
      param.append("file", file.file);
      upload(param)
        .then(res => {
          if (res.data.code === 0) {
            this.uploadImg.push(res.data.data.path);
            this.imgArr.push(res.data.data.saveName);
            console.log(this.uploadImg,this.imgArr)
          } else {
            this.$toast.fail(res.data.msg);
          }
        })
    },
    onPreview(idx) {
      // ImagePreview({
      //   images: this.imgArr,
      //   startPosition: idx
      // });
    },
    onCross(idx) {
      this.imgArr.splice(idx, 1);
      this.uploadImg.splice(idx, 1);
    }
  }
};
</script>

<style scoped lang="less">
@import '~@assets/styles/gheader/index.less';
// .aagames-header {
//   display: contents;
// }
.aagames-header {
  background-size:100%;
  background-position:0 0;
  background-repeat: no-repeat;
  // background: linear-gradient(
  //   to bottom,
  //   @bg-color,
  //   @bg-color 120px,
  //   #1e1e1e 120px,
  //   #1e1e1e
  // );
  .address_net{
    position:relative;
    // margin:0.25rem;
    height:0.1rem;
    border-radius:15px;
    // background:#000;
    color:#fff;
    text-align:center;
    line-height:0.1rem;
    font-size:0.5rem;
    /deep/ .van-icon{
      position: absolute;
      top:50%;
      right:20px;
      transform:translateY(-50%);
      color:#fff;
      font-size:0.6rem;
    }
  }
}
.new_logo{
  height:@line-height-nav-bar;
}
.new-header{
  background:rgba(0,0,0,.0);
}

.aagames-nav-bar {
  display: flex;
}

.moneyShow {
  height: 518px;
  top: 0;
  border-radius: 0;
  overflow: hidden;
  .c {
    font-size: 28px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-left: 20px;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }
  .account {
    .c;
    height: 60px;
    margin-top: 128px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .refresh {
    .c;
    height: 90px;
    font-size: 26px;
    font-weight: 500;
    color: rgba(82, 81, 82, 1);
    img {
      &.active {
        animation: refresh 1s linear infinite;
      }
    }
  }
  .amount {
    // width: 692px;
    height: 138px;
    border-radius: 4px;
    border: 2px solid @border-color;
    margin: 0 auto;
    display: flex;
    .px2 {
      width: 2px;
      background-color: @border-color;
    }
    .item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .top {
      .c;
      height: 50px;
      font-size: 24px;
      font-weight: 400;
      position: relative;
      img {
        right: -60px;
        top: 50%;
        margin-top: -25px;
        position: absolute;
      }
      .van-icon{
        color: @primary-color;
        margin-left: 10px;
      }
    }
    .bottom {
      height: 38px;
      font-size: 32px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 38px;
    }
  }
  .fanla {
    position: relative;
    margin-top: 44px;
    height: 60px;
    font-size: 24px;
    font-weight: 400;
    color: rgba(82, 81, 82, 1);
    line-height: 60px;
    text-align: center;
    img {
      position: absolute;
      top: -10px;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 12px;
    }
  }
}

.nav-left {
  /*flex:auto !important;*/
  display: flex;

  .aagames-logo {
    .logo {
      width: 226px;
      height: 60px;
      object-fit: scale-down;
    }
  }
}

.nav-center {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
  .no-token {
    flex: 1;
    padding-left: 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .aagames-button-box {
      width: auto;
      margin: -10px;
      button {
        width: 140px;
        height: 66px;
        line-height: 64px;
        &:first-child{
          border:2px solid @primary-color;
        }
      }
    }
  }

  .member-info {
    display: flex;
    width: 240px;
    height: 56px;
    background: @bg-color-2;
    border-radius: 27px;
    position: relative;
    .person-info {
      position: relative;
      left: 0;
      top: -5px;
      width: 67px;
      height: 67px;
      border-radius: 50%;
    }
    .money {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      .xiala {
        width: 30px;
        height: 20px;
        margin: 0 10px;
      }
    }
    .deposit {
      width: 112px;
      height: 56px;
      background: @bg-gradient-color;
      border-radius: 28px;
      font-size: 28px;
      font-weight: 600;
      // color: rgba(35, 35, 33, 1);
      color: @header-deposit-color;
      line-height: 56px;
      text-align: center;
      position: relative;
      right: -2px;
    }
  }
}

.nav-right {
  /*flex:1 !important;*/
}

.service {
  width: 0.58666rem;
  height: 0.61333rem;
  background-image: url(~@assets/img3_0/otherIcon/service.png);
  background-size: 100% 100%;
  // transform: rotateY(180deg);
}

.callshow {
  .title {
    margin: 62px auto 40px;
    text-align: center;
    height: 40px;
    font-size: 28px;
    font-weight: 400;
    color: @primary-text-color;
    line-height: 40px;
  }
  .aagames-button:last-child {
    margin-top: @margin-15;
  }
  .aagames-button-box {
    margin-bottom: 60px;
  }
}

.callBack {
  /*padding: 40px;*/
  /*width: 640px;*/
  .title {
    color: #090705;
    font-size: 36px;
    font-weight: 700;
    .right {
      float: right;
      color: #e5e5e5;
      font-size: 36px;
    }
  }
  .fanhui {
    position: absolute;
    height: 40px;
    top: @space-gap;
    left: @space-gap;
  }
  .aagames-button-box {
    display: flex;
    justify-content: space-between;
    /deep/.van-uploader {
      // flex: 1;
      width:318px;
      .van-uploader__input-wrapper {
        width: 100%;
      }
    }
    .aagames-button {
      // flex: 1;
      width:318px;
      &.line{
        background: @bg-card-color;
        margin-top: 0;
      }
    }
  }
  .title {
    text-align: center;
    height: 40px;
    font-size: 28px;
    font-weight: 400;
    color: @primary-text-color;
    line-height: 40px;
    margin: 50px auto 40px;
  }

  .input {
    margin-bottom: 30px;
    // min-height: 200px;
    &.t-input {
      min-height: 200px;
    }
    textarea {
      min-height: 200px;
    }
  }
  .feedbackList{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .imgBack{
      background:#191919;
      border-radius: 8px;
      position: relative;
      margin-bottom: @space-gap;
      p{
        width:318px;
        line-height: 66px;
        color:@primary-text-color;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        padding:0 30px;
        box-sizing: border-box;
      }
      .van-icon-cross{
        position: absolute;
        color:#ccc;
        top:50%;
        right:10px;
        margin-top: -16px;
      }
    }
  }
}
</style>
