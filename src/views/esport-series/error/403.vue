<template>
  <div class="container container_403">
    <!-- <lheader></lheader> -->
    <div class="main">
      <template v-if="$projectname === 'chobet'">
          <div class="bg-login" @click="$router.push('/')"  :style="{backgroundImage:  `url(${logo_403})`}"></div>
          <div v-show="resultImgs['people@2x']" class="people"  :style="{backgroundImage:  `url(${resultImgs['people@2x']})`}"></div>
      </template>

      <img :src="$imgs['error/load3']" class="error-logo" alt="">

      <!-- <div class="people"  :style="{backgroundImage:  `url(${people})`}"></div> -->
      <!--<div class="errorImg" :class="$projectname=='10014'?'imgCenter':''" :style="{backgroundImage: `url(${bg_403})`}"></div>-->
      <div class="errorImg"></div>

      <div class="text" :class="$projectname=='10014'?'textCenter':''">
        <p class="error_text">403</p>
        <p class="code">IP访问限制</p>
        <div class="chinese">
          您访问的页面已丢失，导致您所尝试的页面无法打开。
          由此给你带来的不便{{$config[$projectname].project}}深表歉意
        </div>
        <p class="code">Dear Customers</p>
        <div class="english">
          The current website is under maintenance,we are temporarily
          unable to provide services for you.We apologize for the
          inconvenience caused.
        </div>
        <div class="aagames-button-box">
          <button class="aagames-button" type="button" @click="$openKefu">联系专属客服
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Lheader from '@/components/l-header'
  import resultImgs from '@/assets'

  export default {
    components: {
      Lheader
    },
    data () {
      return {
        logo_403: require('@assets/img3_0/other/403_logo@2x.png'),
        bg_403: require('@assets/img3_0/other/403_bg@2x.png'),
        resultImgs
        // people: require('@assets/img3_0/other/people@2x.png')
      }
    }
  }
</script>

<style scoped lang="less">
  @import '~@assets/styles/error/index.less';
  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    /deep/.aagames-nav-bar{
        background:transparent;
    }
    .main {
      // margin-top: @main-margin-top;
      height: 100%;

      .bg-login {
        height: 90px;
        width: 632px;
        margin: 0 auto;
        display: flex;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;

      }
      .people {
        height: 506px;
        width:690px;
        margin: 62px auto;
        display: flex;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;

      }

    }
  }
</style>
