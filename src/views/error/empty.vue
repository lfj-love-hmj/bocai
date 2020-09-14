<template>
  <div class="container">
    <!-- <lheader></lheader> -->
    <div class="main">
      <template v-if="$projectname !== 'chobet'">
        <div class="bg-login" @click="$router.push('/')" :style="{backgroundImage: `url(${logo_403})`}">
        </div>
        <div v-show="resultImgs['people@2x']" class="people"  :style="{backgroundImage:  `url(${resultImgs['people@2x']})`}"></div>
      </template>
      
      <div v-show="!resultImgs['people@2x'] && $projectname !== '10046'" class="errorImg" :style="{backgroundImage: `url(${bg_anlj})`}"></div>
      <div class="text">
        <p class="code">您的IP存在异常</p>
        <div class="chinese">
          您访问的页面已丢失，导致您所尝试的页面无法打开。
          由此给你带来的不便{{$config[$projectname].project}}深表歉意。
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
        bg_anlj: require('@assets/img3_0/other/anlj_bg@2x.png'),
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
      position: relative;
      .bg-login {
        height: 214px;
        display: flex;
        background-size: auto 90px;
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
      .errorImg {
        position: absolute;
        right: 0;
        top: 214px;
        width: 612px;
        height: 700px;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: top center;
      }
      .text {
        position: absolute;
        top: 850px;
        color: @primary-text-color;
        margin-top: 40px;
        text-align: center;
        .code {
          margin: 10px;
          height: 44px;
          font-size: 32px;
          font-weight: 600;
          color: rgba(82, 81, 82, 1);
          line-height: 44px;
        }
        .chinese {
          height: 88px;
          margin: 0 32px;
          font-size: 24px;
          font-weight: 400;
          color: rgba(82, 81, 82, 1);
          line-height: 44px;
        }
        .english {
          margin: 0 32px;
          font-size: 24px;
          font-weight: 400;
          color: rgba(82, 81, 82, 1);
          line-height: 40px;
        }
        .aagames-button-box {
          width: 5rem;
          margin: 1rem auto;
        }
      }

    }
  }
</style>
