<style scoped lang="less">
  @import "../index";
  @import '~@assets/styles/agentAuth/index.less';

  /deep/ .van-tabs {

    .van-tabs__nav {
      background: none;
    }

    .van-ellipsis {
      font-weight: 700;
      font-size: 30px;
      color: #888888;
    }

    .van-tab--active {
      .van-ellipsis {
        color: #FFFFFF;
      }
    }
  }

  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    background-size: 100% 100%;
    .login-top {
      position: fixed;
      top: 40px;
      z-index: 2;
      width: 100%;
      img{
        &:first-child {
          width: 242px;
          height: 60px;
          margin-left:5%;
        }
        &:last-child {
          width: 36px;
          height: 36px;
          margin-left: 50%;
          position: relative;
          top: -15px;
          cursor: pointer;
        }
      }
    }

    .agent-wel {
      display: initial;
      width: 560px;
      margin: 150px auto 26px;
    }

    /deep/ .aagames-nav-bar {
      background: transparent;
    }

    .main {
      margin: 0;
      padding: 0;
      background: none;
      border-radius: @border-radius-8px + 10px @border-radius-8px + 10px 0 0;
      overflow: hidden;
    }

    ._img {
      margin: 0 auto;
      display: block;
    }

    .down_logo {
      ._img;

      width: 262px;
    }

    .downhz {
      ._img;
      margin-top: 40px;
      width: 428px;
    }

    .main {
      padding-top: 20px;
      flex: 1;
      margin-top: @main-margin-top;
      box-sizing: border-box;

      .aagames-button-box {
        padding: 0 40px;
        margin-top: 60px;
      }

      .function {
        /*background: #F4F5F9;*/
        padding-top: 74px;
        box-sizing: border-box;
        text-align: center;

        button {
          width: 692px;
          height: 90px;
          padding: 28px;
          background: linear-gradient(90deg, rgba(45, 41, 30, 1) 0%, rgba(20, 18, 13, 1) 100%);
          border-radius: 6px;
          border: none;
          color: #F3CB75;
          font-size: 32px;
          font-weight: 700;
        }

        .funDiv {
          margin-top: 40px;
          color: #8E9AB5;
          font-size: 26px;

          i {
            width: 26px;
            height: 26px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            display: inline-block;
            transform: translateY(20%);
          }

          .agree {

          }

          .disAgree {

          }
        }
      }

      .jiantou {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;

        input {
          width: 350px;
          padding: 20px;
          padding-left: 0;
          border: none;
          color: #333;
          font-size: 28px;
          line-height: normal;
          background: none;
        }

        input::placeholder {
          color: #B8B8B8;
          font-size: 28px;
        }

        button {
          color: #090705;
          font-size: 32px;
          border: none;
          font-weight: 700;
          background-color: #8B97B1;
        }

        .icon {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          height: 62px;
        }

        .getImg {
          width: 192px;
          height: 62px;
        }

        span {
          color: #FFCF6E;
          font-size: 22px;
          margin-top: 30px;
          display: inline-block;
        }
      }

      .btn {
        margin-top: 65px;
        width: 100%;
        padding: 28px;
        background-color: #FFCF6E;
        border: none;
        color: #67382F;
        font-size: 32px;
        border-radius: 2px;
        font-weight: 700;
      }
    }
  }


</style>
<template>
  <div class="container" :style="{backgroundImage: value==0 ? $bImgs['login/login_bg'] : $bImgs['login/register_bg']}">
    <div class="login-top">
      <img :src="$imgs['login/logo']" alt="">
      <img :src="$imgs['login/logo_close']" alt="" @click="$router.push('/')">
    </div>
    <div class="main">
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
  import Lheader from '@/components/l-header'

  let tab = {
    'agentLogin': 0,
    'agentRegister': 1,
  }
  export default {
    name: 'login',
    components: {
      Lheader,
    },
    data() {
      return {
        titles: {
          0: '代理登录',
          1: '代理注册'
        },
        value: 0,
        // aoMenUi:['takchun','Gdh','Js3','Mgm8','Wns1','Cod8','Xpj28','Yh8','Yl0','ybh']
        aoMenUi: ['takchun', '10012', '10013', '10014', '10020', 'mgm8', '10006', '10011', '10007', '10009', '10010', '10015', '10008', '10021', '10034']
      }
    },
    methods: {},
    watch: {
      '$route'(newVal, oldVal) {

        this.value = tab[newVal.name]
      }
    },
    created() {
      this.value = tab[this.$route.name]
      try {
        let scrollY = document.getElementsByClassName('container')[0].offsetTop
        window.scrollTo(0, scrollY)
      } catch (error) {

      }
    }
  }
</script>

