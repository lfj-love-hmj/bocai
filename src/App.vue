<template>
  <div id="app">
    <router-view />
    <!-- 底部弹窗 -->  <!-- :class="['custom',{'topPass':passInput},{'yabomiddle':yaboBoxMiddle}]" -->
    <template v-if="yaboBoxMiddle || esportBoxMiddle">

        <van-popup
            close-on-popstate
            @closed="popupClosed"
            :class="['custom',{'topPass':passInput},'close-top']"
            v-model="isPopupShow"
            :closeable="!popupShow.idDisplay"
            :position="popupShow.passDisplay?'bottom':'center'"
            round
            get-container="#app"
        >
          <i class="fanhui"></i>
          <Tips
              v-if="popupShow.tipsDisplay.show"
              :userInfo.sync="userInfo"
              :tipsDisplay="popupShow.tipsDisplay"
          ></Tips>
          <Tel v-if="popupShow.telDisplay" :userInfo.sync="userInfo" />
          <Email v-if="popupShow.emailDisplay" :userInfo.sync="userInfo" />
          <SetCapitalPass
              v-if="popupShow.passDisplay"
              :userInfo.sync="userInfo"
              @changPass="changPass"
          />
          <SetLoginPass v-if="popupShow.loginDisplay" :userInfo.sync="userInfo" />
          <SetPassProblem v-if="popupShow.proDisplay" />
          <VerifyIdentity
              v-if="popupShow.idDisplay"
              ref="verifyIdentity"
              :userInfo.sync="userInfo"
              :routeType.sync="routeName"
              @changPass="changPass"
          />
          <div v-if="!popupShow.hideFooter&&isPopupShow" class="footer-tips">
            <p>
              遇到问题，联系
              <span @click="goKefu">专属客服</span>
            </p>
          </div>
          <div v-if="popupShow.tipsDisplay.type === 2" class="footer-tips">
            <p>
              <span @click="$router.push({ path: '/help/tutorial' });popupClosed()">查看新手教程</span>
            </p>
          </div>
        </van-popup>


    </template>
    <template v-else>
      <van-popup
        close-on-popstate
        @closed="popupClosed"
        :class="['custom',{'topPass':passInput}]"
        v-model="isPopupShow"
        :closeable="!popupShow.idDisplay"
        round
        close-icon-position="top-left"
        position="bottom"
        get-container="#app"
      >
        <i class="fanhui"></i>
        <Tips
          v-if="popupShow.tipsDisplay.show"
          :userInfo.sync="userInfo"
          :tipsDisplay="popupShow.tipsDisplay"
        ></Tips>
        <Tel v-if="popupShow.telDisplay" :userInfo.sync="userInfo" />
        <Email v-if="popupShow.emailDisplay" :userInfo.sync="userInfo" />
        <SetCapitalPass
          v-if="popupShow.passDisplay"
          :userInfo.sync="userInfo"
          @changPass="changPass"
        />
        <SetLoginPass v-if="popupShow.loginDisplay" :userInfo.sync="userInfo" />
        <SetPassProblem v-if="popupShow.proDisplay" />
        <VerifyIdentity
          v-if="popupShow.idDisplay"
          ref="verifyIdentity"
          :userInfo.sync="userInfo"
          :routeType.sync="routeName"
          @changPass="changPass"
        />
        <div v-if="!popupShow.hideFooter" class="footer-tips">
          <p>
            遇到问题，联系
            <span @click="goKefu">专属客服</span>
          </p>
        </div>
        <div v-if="popupShow.tipsDisplay.type === 2" class="footer-tips">
          <p>
            <span @click="$router.push({ path: '/help/tutorial' });popupClosed()">查看新手教程</span>
          </p>
        </div>
      </van-popup>
    </template>
    <!-- 流水弹窗 -->
    <van-popup
      close-on-popstate
      class="custom"
      @closed="flowClosed"
      v-model="isShowFlow"
      closeable
      round
      close-icon-position="top-left"
      position="bottom"
      get-container="#app"
    >
      <div class="pop-head">
        <h2>流水稽核</h2>
      </div>
      <div class="pop-body list-cells">
        <div>
          <van-list
            :finished="finished"
            finished-text="没有更多了"
            :immediate-check="false">
            <template v-if="rechargeData.length>0">
              <table v-for="(item,i) in rechargeData" :key="i">
                <thead>
                  <tr>
                    <th>存款金额</th>
                    <th>红利金额</th>
                    <th>已达到流水</th>
                    <th>需完成流水</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{item.money}}</td>
                    <td>{{item.activity_record_money}}</td>
                    <td>{{item.finish_flow_require}}</td>
                    <td>{{item.unfinish_flow_require}}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="4">存款时间 {{item.created_at}}</td>
                  </tr>
                </tfoot>
              </table>
            </template>
            <template v-else>
              <van-loading size="24px">加载中...</van-loading>
            </template>
          </van-list>
        </div>
      </div>
      <div class="recharge-bottom">
        <div class="btn-group">
          <van-button type="primary" @click="()=>{$router.push({path:'/withdraw'});isShowFlow = false;}">继续取款</van-button>
          <van-button @click="isShowFlow = false">暂不取款</van-button>
        </div>
        <p class="tips">未达到流水强制提款将扣除一定行政费用！</p>
      </div>
    </van-popup>
    <!-- 登录注册 -->
    <van-dialog
      get-container="#app"
      close-on-popstate
      confirmButtonText="登录/注册"
      cancelButtonText="查看新手教程"
      v-model="noLogin"
      show-cancel-button
      :message="`为了您更好的体验${$config[$projectname].project}游戏，建议您登录后进行游戏`"
      @confirm="goLogin"
      @cancel="goTutorial"
    >
      <p slot="title" style="position: relative">
        未登录提醒
        <van-icon style="position: absolute;right: 0" name="cross" @click.stop="crossNologin" />
      </p>
    </van-dialog>
    <!-- 每日任务 -->
    <DaliyDuty :isend="isend && userInfo" />
    <!-- 下载入口 -->
    <AppInstall v-if="siteInfo && $route.name === 'Home' && isLogin" :data="siteInfo" />
    <!-- 新手指引 -->
    <Guide />
    <!-- 每日任务领取红包弹窗 -->
    <RewardPop v-if="showRedBag" />
    <!-- 鼠年活动首页弹窗 -->
    <!-- <MousePop /> -->
    <!--全局通知-->
    <van-overlay :show="GlobalMessage.show" class="overlay">
      <div class="global-message" @click.stop>
        <div class="block" :class="{failure:GlobalMessage.failure}">
          <div class="title">{{GlobalMessage.title}}</div>
          <div class="content">{{GlobalMessage.content}}</div>
          <van-icon name="cross" class="cross" @click.native="readmessage(GlobalMessage.id,GlobalMessage.type)" />
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import * as types from "./store/types";
import { mapActions, mapState } from "vuex";
import Email from "@/components/personalData/email";
import Tips from "@/components/personalData/Tips";
import Tel from "@/components/personalData/idTest";
import SetCapitalPass from "@/components/personalData/setCapitalPass";
import SetLoginPass from "@/components/personalData/setLoginPass";
import SetPassProblem from "@/components/personalData/setPassProblem";
import VerifyIdentity from "@/components/personalData/verifyIdentity";
import AppInstall from "@/components/app-install";
import DaliyDuty from "@/components/daliy-duty";
// import Guide from "@/components/guide";
import RewardPop from "@/components/rewardPop"
import MousePop from "@/components/mousePop"

import { memberupdatetips, readmessage } from "@/api/memberCenter";
const globalAlertMaps = {
  1: "修改登录密码成功",
  2: "修改资金密码成功",
  3: "余额充值到账成功",
  4: "充值审核被拒",
  5: "提现出款操作成功",
  6: "提现审核被拒",
  7: "红利发放成功",
  8: "人工推送站内信",
  9: "会员升级通知",
  10: "线下充值申请",
  11: "充值失败",
  12: "提款申请",
  13: "注册礼金发放",
  14: "修改资料成功",
  15: "账户登录通知",
  16: "充值红包发放",
  17: "系统余额扣减",
  18: "会员降级",
  20: "游戏平台"
};

let Guide = {}
// let aoMenUi = ['takchun', 'Gdh', 'Js3', 'mgm8', 'Wns1', 'Cod8', 'Xpj28', 'Yh8', 'Yl0', 'ybh']
let aoMenUi = ['takchun', '10012', '10013', 'mgm8', '10006', '10011', '10007', '10009', '10010', '10008', '10021','10034']
if (aoMenUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
  Guide = require(`@/components/guide/indexAoMen`).default
}else{
  Guide = require(`@/components/guide/index`).default
}

export default {
  name: "App",
  data() {
    return {
      password: "",
      isFirstSetPassword: "",
      passInput: false,
      isPopupShow: false,
      routeName: "",
      GlobalMessage: {
        show: false,
        content: "",
        title: "",
        type: ''
      },
      timer:null,
      oldScrollTop: 0,
      scrollTop: 0,
      isend: true,
      finished: false,
      isShowFlow:false,
      yaboBoxMiddle:['10024','10022','10023','10025','10026','10027','10028','10029','10033'].includes(process.env.VUE_APP_PROJECT_NAME),
      //电竞系列
      esportBoxMiddle:['10050'].includes(process.env.VUE_APP_PROJECT_NAME)
    };
  },
  components: {
    Email,
    Tips,
    Tel,
    SetCapitalPass,
    SetLoginPass,
    SetPassProblem,
    VerifyIdentity,
    AppInstall,
    DaliyDuty,
    Guide,
    RewardPop,
    MousePop
  },
  created() {
    if (this.siteInfo) {
      this.favicon(this.siteInfo);
    } else {
      this.getSiteInfo().then(data => {
        this.favicon(data);
      });
    }
    // 加快二级页面的渲染
    if (this.allPlatforms) {
      this.getAllPlatforms();
    }
    if (this.allCates) {
      this.getAllCates();
    }
    if (!this.gameCatesPlatforms.length) {
      this.getAllGameCatesPlatforms();
    }
    // 获取默认游戏id
    if (!this.platformGameIds.length) {
      this.getPlatformGameIds()
    }
    if (!this.memberLevel.length) {
      this.getMemberLevel()
    }
    if(this.timer) {
      clearInterval(this.timer)
    }
    this.timer = setInterval(this.memberupdatetipsApi, 10000);
  },
  computed: {
    ...mapState("games", ["gameCatesPlatforms", "allPlatforms","allCates","platformGameIds"]),
    ...mapState("global", ["popupShow", "siteInfo", "noLogin","showFlow","rechargeData","memberLevel","showRedBag"]),
    ...mapState("users", ["userInfo", "isLogin"])
  },
  watch: {
    popupShow: {
      handler(val) {
        if (val.idDisplay) {
          this.$nextTick(() => {
            this.$refs.verifyIdentity.checkUserInfo();
          });
        }
        this.isPopupShow = val.status;
      },
      deep: true
    },
    showFlow(val) {
      this.isShowFlow = val
    },
    userInfo: {
      handler(val) {
        if (val) {
          this.password = val.is_pay_password;
          this.isFirstSetPassword = val.is_first_set_pass === 1;
        }
      },
      deep: true
    },
    $route(to, from) {
      this.routeName = to.name;
    },
    GlobalMessage:{
      handler(val) {
        if(val.show) {
          setTimeout(()=> {
            this.GlobalMessage.show = false
            this.readmessage(val.id, val.type)
            window.sessionStorage.setItem('wanquGameAlert', val.type)
          },5000)
        }
      },
      deep:true
    },
    scrollTop(newValue, oldValue) {
      setTimeout(() => {
        if(newValue == window.scrollY) {
          this.oldScrollTop = newValue
          this.isend = true
        }
      }, 100)
      if(this.oldScrollTop == oldValue) {
        this.isend = false
      }
    }
  },
  mounted() {
    this.handleScroll()
  },
  beforeDestroy() {
    // window.removeEventListener('scroll')
    clearInterval(this.timer)
  },
  methods: {
    ...mapActions("games", ["getAllGameCatesPlatforms", "getAllPlatforms","getAllCates","getPlatformGameIds"]),
    ...mapActions("global", ["getSiteInfo","getMemberLevel"]),
    popupClosed() {
      this.$store.dispatch("global/setPopShow", {
        status: false
      });
    },
    flowClosed() {
      this.$store.dispatch("global/setFlow",false);
    },
    goLogin() {
      this.$router.push({ name: "login" });
      this.$store.commit("global/" + types.SET_NO_LOGIN, false);
    },
    crossNologin() {
      this.$store.commit("global/" + types.SET_NO_LOGIN, false);
    },
    goTutorial() {
      if(['10024' || '10050'].includes(process.env.VUE_APP_PROJECT_NAME)) {
        this.$router.push({ name: "main" });
      }else{
        this.$router.push({ name: "tutorial" });
      }

      this.$store.commit("global/" + types.SET_NO_LOGIN, false);
    },
    changPass(val) {
      this.passInput = val;
    },
    goKefu() {
      this.$openKefu();
      this.$store.dispatch("global/setPopShow", { status: false });
    },
    favicon(data) {
      const { title, description, h5_logo, icon } = data;
      if(description) {
        window.document.title = `${title}-${description}`;
      } else {
        window.document.title = `${title}`;
      }
      window.localStorage.setItem("h5-logo", h5_logo);
    },
    memberupdatetipsApi() {
      if (this.isLogin) {
        const isGameAlert = window.sessionStorage.getItem('wanquGameAlert')
        memberupdatetips(this.data).then(res => {
          if (res.data.code === 0) {
            if (
              res.data.data &&
              res.data.data.type != 16 &&
              res.data.data.type != 9 &&
              !res.data.data['switch']
            ) {
              if ((res.data.data.type === 20 && !isGameAlert) || res.data.data.type !== 20) {
                if(res.data.data.content.indexOf('红包雨') == -1) {
                  this.GlobalMessage = {
                    show: true,
                    content: res.data.data.content,
                    title: `${globalAlertMaps[res.data.data.type]}提示`,
                    failure: [4, 6, 11, 18].indexOf(res.data.data.type) > -1,
                    id: res.data.data.id,
                    type: res.data.data.type
                  };
                }
              }

              setTimeout(()=>{
                if(this.GlobalMessage.show === true){
                  this.readmessage(res.data.data.id, res.data.data.type)
                  if([3,4,5,6,7,11,13,16].indexOf(res.data.data.type) != -1) {
                    this.$store.dispatch("users/getWallet")
                  }
                }
              },5000)
            }
          } else {
            this.$toast(res.data.msg);
          }
        });
      }
    },
    readmessage(id,type) {
      this.GlobalMessage.show = false;
      readmessage({
        id
      }).then(res => {
        if (res.data.code === 0) {
          this.$store.dispatch("users/getUserInfo");
          window.sessionStorage.setItem('wanquGameAlert', type)
        } else {
          this.$toast(res.data.msg);
        }
      });
    },
    handleScroll() {
      window.addEventListener('scroll', () => {
        this.scrollTop = window.scrollY;
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@assets/styles/App/index.less';
#app {
  height: 100%;
  // overflow: auto;
  // -webkit-overflow-scrolling: touch;
  font-size: 24px;
}

.topPass {
  transition: all 1s;
  height: 70%;
}

.pop-body {
  flex: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  table {
    border-radius: 4px;
    border: 2px solid rgba(53, 52, 53, 1);
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
    thead {
      tr {
        th {
          width: 25%;
          line-height: 96px;
        }
      }
    }
    tbody {
      tr {
        td {
          text-align: center;
          line-height: 100px;
          border-top: 2px solid rgba(53, 52, 53, 1);
          border-right: 2px solid rgba(53, 52, 53, 1);
          border-bottom: 2px solid rgba(53, 52, 53, 1);
          &:nth-child(4) {
            border-right: 0;
          }
        }
      }
    }
    tfoot {
      tr {
        td {
          text-align: center;
          font-size: 28px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 80px;
        }
      }
    }
  }
}

.recharge-bottom{
  padding:0 @space-gap;
  .tips {
    font-size: 32px;
    color: #999;
    text-align: center;
    line-height: 44px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .btn-group {
    .van-button {
      margin-top: 40px;
    }
    .van-button--default{
      background: @bg-card-color;
      border: 2px solid @border-color-base;
    }
  }
}

// .custom{
//   transition:all 1s;
// }
/deep/.van-tabs {
  .van-tabs__nav {
    background-color: transparent;
    // background: @bg-color;
    .van-tab {
      color: #ccc;
    }
    .van-tab--active {
      color: #fff;
    }
  }
}

/deep/ .m-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // .van-icon-arrow-left{
  //   font-size: 24px;
  // }
  &.van-nav-bar {
    background: @bg-color;
    // height: @height-nav-bar;
    .van-nav-bar__left {
      .van-icon-arrow-left {
        font-size: 32px;
      }
    }
    .van-nav-bar__right {
      .van-nav-bar__text {
        margin-right: 0;
      }
    }
  }
  &.transparent {
    background: transparent;
  }
  ~ .m-body {
    top: @height-nav-bar;
  }
}

/deep/ .m-body {
  // position: fixed;
  // left: 0;
  // right: 0;
  // top: 0;
  // bottom: 0;
  // overflow: auto;
  color: #fff;
  padding-top: @height-nav-bar;
  padding-bottom: @height-nav-bar;
  -webkit-overflow-scrolling: touch;
  // z-index: 2;
  &.gap {
    padding: @space-gap;
  }
}


/deep/ .m-footer {
  ~ .m-body {
    bottom: @height-nav-bar;
  }
}

/deep/ .custom {
  display: flex;
  flex-direction: column;
  .pop-body {
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
}
.overlay{
  z-index: 999 !important;
}
.global-message {
  display: flex;
  align-items: flex-start;
  padding-top: 50px;
  box-sizing: border-box;
  justify-content: center;
  height: 100%;
  .block {
    position: relative;
    padding: 16px 20px;
    box-sizing: border-box;
    width: 690px;
    height: 100px;
    background: @primary-color;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    .title {
      height: 34px;
      font-size: 24px;
      font-weight: 600;
      color: #191919;
      line-height: 34px;
    }
    .content {
      margin-top: 6px;
      height: 28px;
      font-size: 20px;
      font-weight: 400;
      color: #191919;
      line-height: 28px;
    }
    .cross {
      font-size: 30px;
      color: #191919;
      top: 35px;
      position: absolute;
      right: 24px;
    }
  }
  .failure {
    background-color: #c55055;
    .title {
      color: #ffffff;
    }
    .content {
      color: #ffffff;
    }
    .cross {
      color: #ffffff;
    }
  }
}
</style>
