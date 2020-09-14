<template>
    <div class="container">
        <!-- <lheader></lheader> -->
        <div class="main">
            <div class="errorImg">
                <img :src="bg_404" alt="">
            </div>
            <div class="text">
                <p class="code">您访问的页面不存在</p>
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
          bg_404: require('@assets/img3_0/other/404_bg@2x.png'),
          // people: require('@assets/img3_0/other/people@2x.png'),
          resultImgs
      }
    }
  }
</script>

<style scoped lang="less">
  @import '~@assets/styles/error/index.less';
  .container {
    position:relative;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    /deep/.aagames-nav-bar{
        background:transparent;
    }
    .main {
      // margin-top: @main-margin-top;
      width:100%;
      height: 100%;
      position: absolute;
      left:50%;
      top:50%;
      transform:translateX(-50%) translateY(-50%);
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
      .errorImg {
        margin: 0 auto;
        width: 366px;
        img{
            width:100%;
        }
      }
      .text {
        color: @primary-text-color;
        margin-top: 40px;
        text-align: center;
        .code {
          margin: 10px;
          height: 44px;
          font-size: 32px;
          font-weight: 600;
          color: #fff;
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
