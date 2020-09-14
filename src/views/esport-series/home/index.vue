<template>
  <div id="home">
    <vtabbar class="m-footer" id="footer-esport" :index="0"></vtabbar>
    <div :class="[{'bg-img':['Home'].indexOf($route.name) !== -1}]">
      <appInstall @handleChange="handleChange"></appInstall>
      <div class="logo">
        <img :src="$imgs['login/logo']" alt="">
        <img :src="$imgs['otherIcon/kefu@2x']" alt="" @click="$openKefu()">
      </div>
      <Banner pageName="featured"/>

      <div class="db-mid-style">
        <Notice v-if="$projectname !== '10015'"/>
        <div class="head-mid-box">
          <gheader class="m-header"></gheader>
        </div>
      </div>

      <tabStyleEsport :appInstallStatus="appInstallStatus"v-if="$projectname === '10050'"></tabStyleEsport>

      <esportFooter></esportFooter>



    </div>
    <!-- <SixGift v-if="sixGiftIsAvailable" /> -->
    <!-- <GameSearch v-if="gameSearch && gameSearch.visible" /> -->

    <van-popup v-model="leftNav" position="left" class="leftnav">
      <div class="leftnav-logo">
        <p><img :src="$imgs['home/logo_install']" alt=""><span>西宝娱乐</span></p>
      </div>
      <div class="leftnav-con">
        <h2>西宝娱乐</h2>
        <p class="leftnav-con-item" @click="linkTo('/news')"><img :src="$imgs['home/icon_sheet_1@2x']" alt=""><span>消息中心</span></p>
        <p class="leftnav-con-item"><img :src="$imgs['home/icon_sheet_4@2x']" alt=""><span>永久域名</span><i v-clipboard:copy="`https://${$config[$projectname].domain}`" v-clipboard:success="onCopy" v-clipboard:error="onError">{{$config[$projectname].domain}}</i></p>
        <p class="leftnav-con-item" @click="linkTo('/aboutWe')"><img :src="$imgs['home/icon_sheet_5@2x']" alt=""><span>关于我们</span></p>
      </div>
      <p class="leftnav-log" v-if="!access_token" @click="linkTo('/login')"><span>立即登录</span></p>
      <p class="leftnav-log" v-else  @click="signOut"><img :src="$imgs['home/icon_sheet_out@2x']" alt=""><span class="c-999">安全退出</span></p>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import "swiper/dist/css/swiper.css";
import Gheader from '../components/g-header'
import Vtabbar from '../components/v-tabbar'
import SixGift from '../../home/sixGift.vue'
import AppBanner from '../../home/components/app-banner'
import Banner from '../../home/components/banner'
import Notice from '../../home/components/notice'
import Featured from '../../home/featured'

import appInstall from '../components/app-install'
// import GameSearch from '@/components/search/search'
import { open } from '@/api/entertainment'
import { historylist, siteinfo } from '@/api/home'
import { member } from '@/api/memberCenter'
import "swiper/dist/css/swiper.css";
import { Swiper } from "vue-awesome-swiper";
import tabStyleEsport from './tabStyleEsport'
import esportFooter from './esportFooter'

export default {
  name: 'Index',
  components: {
    Gheader,
    Banner,
    Notice,
    AppBanner,
    Featured,
    // GameSearch,
    Vtabbar,
    appInstall,
    tabStyleEsport,
    esportFooter
  },
  data () {
    return {
      leftNav:false,
      sixGiftIsAvailable: true,
      access_token: window.localStorage.token,
      slotsType: '',
      actived:0,
      activedName:'sports',
      bannerPic:'',
      mySwiper1:null,
      appInstallStatus: true
    }
  },
  watch: {
    active (val) {
      if (val !== 2) {
        this.slotsType = ''
      }
    }
  },
  created () {

  },
  mounted () {

  },
  computed: {
    ...mapState('global', ['gameSearch'],"users", ["isLogin"])
  },
  methods: {
    openSidenav(){
      this.leftNav = true;
    },
    onCopy: function(e) {
      this.$toast("复制成功");
    },
    onError: function(e) {
      this.$toast.fail("复制失败，请重试");
    },
    linkTo(path) {
      console.log(path);
      if(this.access_token){
        this.$router.push({ path });
      }else{
        this.$router.push({path:'/login'});
      }

    },
    signOut() {
      this.$dialog
          .confirm({
            title:'温馨提示',
            message: "是否退出登录？"
          })
          .then(() => {
            // this.isLogin = false;
            this.$store.dispatch("users/logout").then(() => {});
            this.$router.push('/')
          })
          .catch(() => {
            // on cancel
          });
    },
    callService() {
      this.$openKefu();
    },
    slideCur(index){
      this.activeIdx = index;
      this.mySwiper1.slideTo(index, 300, false)
    },
    onClickRight() {
      if (window.localStorage.token) {
        this.$router.push({
          name: "news"
        });
      } else {
        this.$store.dispatch("global/setNoLogin",true)
      }
    },
    listPath(path) {
      if (path === "agentHomepage") {
        this.$router.push("agentHomepage");
      } else {
        this.isLogin
            ? this.$router.push({ name: path })
            : this.$store.dispatch("global/setNoLogin",true)
      }
    },
    handleChange(val) {
      console.log('===',val)
      this.appInstallStatus = val
    },
    handleWithdraw() {
      if(!this.isLogin) {
        this.$store.dispatch("global/setNoLogin",true)
        return
      }
      const { bankList, userInfo } = this;
      if (!bankList || !bankList.length) {
        const vm = this;
        this.$dialog
            .confirm({
              message: `您未绑定银行卡，我们无法为您打款到账户<br>遇到问题 <span style="color:${this.$colorjs.baseColor};">联系专属客服<span>`,
              title: "银行卡绑定提示",
              confirmButtonText: "立即绑定",
              cancelButtonText: "暂不绑定"
            })
            .then(() => {
              vm.$router.push({
                path: "/addBankCard",
                query: {
                  getPath: "memberCenter"
                }
              });
            })
            .catch(() => {
              vm.$router.push({
                path: "/memberCenter"
              });
            });
        return;
      } else if(!userInfo.mobile) {
        this.$store.dispatch('global/setPopShow',{ telDisplay: true, status: true });
      } else {
        this.$store.dispatch('global/setFlow',true)
      }
    },
    govip() {
      // window.open("https://m.aavipjlb.com", "aavip");
      this.$router.push('/vip')
    },
    openGame () {
      if (!window.localStorage.token) {
        this.$router.push({
          path: 'login'
        })
        return false
      }
      let routeUrl = this.$router.resolve({
        path: '/game',
        query: {
          at: window.localStorage.token,
          game_id: 16
        }
      })
      window.open(routeUrl.href, '_blank')
    },
    openGame (item) {
      if (window.localStorage.token) {
        let routeUrl = this.$router.resolve({
          path: '/game',
          query: {
            at: window.localStorage.token,
            game_id: item.default_game_id,
            platform_id: item.game_platform_id
          }
        })
        window.open(routeUrl.href, '_blank')
      } else {
        this.$router.push({path: '/login'})
      }
    },
    jump (path) {
      if (path === 'liuheColor') {
        this.$router.push({
          name: 'game',
          params: {
            id: 16
          }
        })
      } else {
        this.$router.push({path: path})
      }
    },
    onTabChange (index, title) {
      // console.log(this.$route)
      // console.log(index, title)
      // Object.assign(
      //   this.$route.query, {
      //     tab: index
      //   }
      // )
    },
    handleActive (val, active) {
      console.log('wowo', val)
      if (val) {
        this.active = 2
        this.slotsType = val
      } else {
        this.active = active
      }
    },
    changeSlotsType () {
      this.slotsType = ''
    },
    sideTab(item,index){
      this.actived = index;
      this.activedName = item.name;
      this.bannerPic = item.bannerPic;
    },
  }
}
</script>

<style scoped lang="less">
@import '~@assets/styles/home/index.less';

#home {
  background: #000000;
  padding-bottom: @height-tab-bar;
  
  .bg-img{
    transition: all 1s;
    &.translateScrollMin{
      transform: translate3d(0,0,0) !important;
    }
    &.translateScrollMax{
      transform: translate3d(0,-120px,0) !important;
    }
    .logo {
      height: 88px;
      color: #fff;
      text-align: center;
      position: relative;
      img {
        margin-top: 16px;
        &:first-child{
          width: 242px;
          height: 60px;
        }
        &:last-child{
          width: 44px;
          height: 44px;
          position: absolute;
          right: 5%;
          top: 4%;
        }
      }
    }
  }
}
/deep/ #banner{
  width: 100%;
  height: 380px;
  margin-bottom: 0;
  .banner{
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
    .van-swipe-item .van-image img{
      border-radius: 0;
    }
  }
  .van-swipe__indicators{
    bottom: 64px;
    background: none;
  }
}

.address_net {
  position: relative;
  margin: 0.25rem;
  height: 0.8rem;
  border-radius: 15px;
  background: #000;
  color: #fff;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.5rem;
  /deep/ .van-icon {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 0.6rem;
  }
}

.van-tabs {
  /deep/ .van-tabs__content {
    .page-linear-gradient();
    .van-tab__pane-wrapper {
      overflow: hidden;
      padding: 0 @space-gap;
      &.fishing {
        /*background: #1e1e1e url(~@assets/img3_0/home/fishing/bg@2x.jpg) no-repeat;*/
        background-size: cover;
        min-height: 84vh;
      }
      &.chess {
        /*background: #1e1e1e url(~@assets/img3_0/home/chess/bg@2x.jpg) repeat;*/
        background-size: contain;
      }
    }
  }
  /deep/ .van-tab--active {
    font-size: 36px;
  }
  .banner {
    margin-top: @space-gap;
  }
}

/deep/ .ui-title {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: @space-gap;
  h2 {
    margin: 0;
  }
  .addon {
    color: #ccc;
    font-size: 24px;
  }
}

/deep/ .games-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-left: -@space-gap;
  &.mb-gap {
    margin-bottom: 88px;
  }
  .game-item {
    position: relative;
    width: calc(50% - @space-gap);
    margin-left: 10px;
    margin-bottom: 0.32rem;
    box-shadow:0px 16px 20px 0px rgba(123,139,171,0.28);
    background:linear-gradient(180deg,rgba(180,215,255,1) 0%,rgba(229,228,222,1) 100%);
    .van-image {
      width: 100%;
      /deep/ img[lazy="loading"] {
        opacity: 0;
        max-width: 100%
      }
    }
    .game-info {
      position: absolute;
      left: 98px;
      top: 22px;
      right: 0;
      z-index: 2;
    }
    h3 {
      font-size: 32px;
      margin: 0;
      background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(206,231,254,1) 30%, rgba(255,255,255,1) 51%, rgba(202,230,254,1) 78%, rgba(255,255,255,1) 100%);
      -webkit-background-clip: text;
      color: transparent;
    }
    h4{
      font-size: 16px;
      margin: 6px 0 0;
      background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(206,231,254,1) 30%, rgba(255,255,255,1) 51%, rgba(202,230,254,1) 78%, rgba(255,255,255,1) 100%);
      -webkit-background-clip: text;
      color: transparent;
    }
    p {
      margin-bottom: 10px;
      opacity: .7;
      &.tag-p {
        margin-bottom: 20px;
      }
    }
    &.large {
      width: calc(100% - @space-gap);
    }
  }
  &.float-wrap {
    display: block;
    .clearfix();
    .game-item {
      float: left;
      &.allbet {
        clear: left;
      }
      &.tall ~ .game-item:nth-child(4) {
        clear: left;
      }
    }
  }
}

/deep/ .filter-nav {
  margin: @space-gap -@space-gap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid @border-color;
  .van-tabs {
    width: 70%;
    border-bottom: none;
    /deep/ .van-tabs__nav {
      background-color: @bg-color !important;
    }
    .van-tab,
    .van-tabs__wrap,
    .van-tabs__nav {
      height: 80px;
      line-height: 80px;
      font-size: 28px;
    }
    .van-tabs__wrap {
      border-bottom: none;
    }
  }
  .search {
    width: 30%;
    padding: 0 30px;
  }
}

/deep/ .labels {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: @space-gap;
  &.platform {
    display: block;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      // width:1100px;
      // overflow: hidden;
      // overflow: auto;
      // display: flex;
      // justify-content: space-between;
      display: flex;
      float: left;
      min-width: 100%;
      label {
        &:first-child {
          min-width: 180px;
        }
        min-width: 40px;
        text-align: center;
        // float:left;
        // line-height: 68px;
        // height:68px;
      }
    }
  }
  label {
    width: auto;
    padding: 0 @space-gap;
    line-height: 68px;
    color: #ccc;
    border-radius: 68px;
    // transition: all .45s ease-out;
    border: 2px solid transparent;
    &.active {
      color: @primary-color;
      border-color: @primary-color;
      font-weight: 500;
    }
  }
}

/deep/ .search-info {
  margin-bottom: @space-gap;
  text-align: center;
  margin-top: @space-gap + 50;
  > span {
    color: @primary-color;
    margin-right: 10px;
  }
}

/deep/ .van-list {
  &.games {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 90px;
    justify-content: space-around;
    .empty-game {
      width: 100%;
      text-align: center;
      img {
        width: 120px;
        margin: 0 auto;
      }
    }
    .van-cell {
      position: relative;
      width: calc(50% - @space-gap);
      margin-bottom: @space-gap;
      // margin-right: @space-gap;
      padding: 0;
      border-radius: 8px;
      overflow: hidden;
      background: @bg-card-color;
      border: 2px solid @border-color-base;
      // &:nth-child(2n) {
      //   margin-left: @space-gap;
      //   margin-right: 0;
      // }
      &:after {
        border-bottom: none !important;
      }
      .game-item {
        color: #fff;
        position: relative;
        .tag {
          width: 100px;
          height: 100px;
          position: absolute;
          right: 0;
          top: 0;
          text-align: center;
          padding-top: 70px;
          line-height: 30px;
          font-size: 20px;
          background-image: linear-gradient(to right, #FF9A5D, #FF3937);
          text-transform: uppercase;
          transform: rotate(45deg) translate(-20%, -20%);
          transform-origin: 100% 100%;
          &.new {
            background-image: linear-gradient(to right, #05D0DA, #279CF8);
          }
        }
        .info {
          padding: 20px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .van-icon {
            font-size: 40px;
            color: #979797;
            &.van-icon-like {
              color: @primary-color;
            }
          }
        }
      }
      h3 {
        font-size: 28px;
        margin: 0;
        span {
          background-color: @primary-color;
          color: #fff;
          font-size: 20px;
          padding: 2px 6px;
          font-weight: 300;
          margin-right: 6px;
          border-radius: 5px;
        }
      }
    }
    .van-list__loading,
    .van-list__finished-text {
      width: 100%;
      padding-bottom: @space-gap;
    }
  }

}

/deep/ .notice{
  margin: 0;
  height: 80px;
  line-height: 80px;
  background:rgba(0,0,0,1);
  border: 0;
  border-radius: 0;
  img {
    width: 28px;
    height: 28px;
  }
  .van-swipe {
    height: 80px;
    .van-swipe-item{
      height: 80px;
      line-height: 80px;
      color:#DADADA;
      font-size: 26px;
    }
  }
  .van-icon{
    color: #51C1FF;
  }
}
.head-mid-box{
  background:#000;
  padding: 0 30px 6px;
  /deep/.nav-center {
    .no-token {
      color: #fff;
    }
  }
  /deep/ .quick-link{
    position: relative;
    li{
      float: left;
      width: 25%;
      text-align: center;
      text-align: center;
      border-right: 2px solid #1A1A1A;
      border-bottom: 2px solid #1A1A1A;
      border-top: 2px solid #1A1A1A;
      padding: 4px 0;
      img{
        width: 50px;
        margin-right: 8px;
      }
      span{
        display: block;
        font-size: 28px;
        color: #777777;
      }
      &:last-child{
        border-right: none;
      }
    }
  }
}

/deep/ .nav-type-index{
  color: #fff;

}
/deep/ .index-main{
  padding: 22px 0;
  position: relative;
  overflow: hidden;
  .index-main-flex1{
    width: 100%;
    padding-right: 30px;
    box-sizing: border-box;
    float: right;
  }
  .van-sticky{
    float: left;
    width: 114px;
    margin-left: -114px;
  }
  .index-side-nav{
    text-align: center;
    img{
      width: 90px;
    }
  }
  .van-sticky--fixed{
    background: none;
    margin-left: 0;
  }
  .van-tabs {
    border-bottom: none;
    background-color: transparent;
    overflow: hidden;
    padding-left: 114px;
    /deep/ .van-tabs__nav {
      background-color: transparent;
    }
    .van-tab__text img{
      width: 90px;
    }
    .van-tab .nav-active-icon{
      display: none;
    }
    .van-tab .nav-norm-icon{
      display: block;
    }
    .van-tab--active .nav-active-icon{
      display: block;
    }
    .van-tab--active .nav-norm-icon{
      display: none;
    }
    .van-tab,
    .van-tabs__wrap,
    .van-tabs__nav {
      height: auto!important;
      line-height: 80px;
      font-size: 28px;
      flex-direction: column;
    }
    .van-tabs__wrap {
      border-bottom: none!important;
      &:after{content: none}
    }
    .van-tabs__nav{
      flex-direction: column;
      .van-tab{
        flex-basis: auto!important;
      }
    }
    .van-tabs__content{
      float: right;
      padding: 10px 30px 0 0;
      width: 100%;
    }
    .van-tabs__line{display: none}
  }
}
/deep/ .games-wrap.float-wrap{
  .game-item{
    float: none;
    display: inline-block;
    vertical-align: top;
  }

}
/deep/ .games-wrap{
  .game-item{
    height: 276px;
    background:none;
    border-radius:20px;
    border: 0;
    .game-info{
      background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(206,231,254,1) 30%, rgba(255,255,255,1) 51%, rgba(202,230,254,1) 78%, rgba(255,255,255,1) 100%);
      -webkit-background-clip: text;
      color: transparent;
    }
    .van-image{
      width: 100%;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  .game-item.ag.tall{
    width: calc(100% - 6px);
    height: 190px;
  }

}
/deep/ .sports{
  .games-wrap {
    .game-item {
      margin-bottom: 6px;
      height: 198px;
      width: 550px;
    }
  }
}
/deep/ .lottery{
  .games-wrap {
    .game-item {
      margin-bottom: 6px;
      height: 198px;
      width: 550px;
    }
  }
}
/deep/ .chess{
  .games-wrap {
    .game-item {
      margin-bottom: 6px;
      height: 198px;
      width: 270px;
      .game-info {
        h4 {
          font-size: 16px;
          color: #919191;
        }
      }
    }
  }

}
/deep/ .esports{
  .games-wrap {
    .game-item {
      height: 290px;
    }
  }
}
/deep/ .casino {
  .games-wrap {
    .game-item {
      margin-bottom: 6px;
      height: 201px;
      width: 270px;
    }
  }
}

/deep/ .slots {
  .games-wrap {
    .game-item {
      margin-bottom: 6px;
      height: 198px;
      &:nth-child(3), &:nth-child(4) {
        width: 270px;
      }
    }
  }
}

/deep/ .fishing{
  padding-top: 0;
  .games-wrap {
    .game-item{
      margin-bottom: 6px;
      height: 198px;
      width: 270px;
      .game-info{
        left: 18px !important;
        h3 {
          color: #FFFFFF;
          font-size: 32px;
        }
        h4 {
          font-size: 16px;
          color: #919191;
        }
      }
    }
    .game-item.tall {
      height: 196px;
      width: calc(100% - 8px);
    }
  }
}
.index-main-flex1{
  /deep/ #banner{
    height: auto;
    margin-bottom: 24px;
    background: none;
  }
}
.app-install{
  display: flex!important;
}
/deep/ .notice .action{
  display: none;
}
/deep/ .games-wrap .game-item .game-info-more{
  left: 12px !important;
  top: 16px !important;
  text-align: center;
}
</style>
