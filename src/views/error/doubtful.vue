<template>
  <div class="container">
    <!-- <lheader></lheader> -->
    <div class="main">
      <div class="errorImg"></div>
      <div class="text">
        <div class="chinese">
          您的IP最近有可疑的攻击行为，请稍后重试
        </div>
      </div>
      <!-- <div class="aagames-button-box">
        <button class="aagames-button" type="button">我知道啦</button>
      </div> -->
    </div>
  </div>
</template>

<script>
  import Lheader from '@/components/l-header'
  export default {
    components: {
      Lheader
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    // background-color: #090705;
    /deep/.aagames-nav-bar{
        background:transparent;
    }
    .main {
      margin-top: @main-margin-top;
      height: 100%;
      // background-color: #232C39;
      .errorImg {
        width: 224px;
        height: 224px;
        margin: 0 auto;
        margin-top: 140px;
        background-image: url(~@assets/img3_0/error/doubtful.png);
        background-size: contain;
      }
      .text {
        text-align: center;
        .chinese {
          margin-top: 80px;
          font-size: 36px;
          color:#333333;
          line-height: 70px;
        }
      }
      .aagames-button-box {
        width: 5rem;
        margin: 1rem auto;
      }
    }
  }
</style>
