
<template>
  <div class="container">
    <lheader :title="title" path="111"></lheader>
    <div class="main">
      <div class="titleBanner"></div>
      <ul class="list">
        <li class="video">
          <div align="center">
            <i></i>
            <p>高清视频</p>
            <div class="contentText">
              提供标清、高清、超清三种视频清晰度供客人选择。并设<br>
              有多条不同地区的视频线路，让客人选择最合适的视频。
            </div>
          </div>
        </li>
        <li class="flop">
          <div align="center">
            <i></i>
            <p>翻牌镜头</p>
            <div class="contentText">
              如客人欲体验翻牌效果，增强游戏刺激度，可通知电投员<br>打开翻牌镜头
            </div>
          </div>
        </li>
        <li class="betting">
          <div align="center">
            <i></i>
            <p>投注区</p>
            <div class="contentText">
              提供让客人自行下注，如置身现场一样的博彩体验
            </div>
          </div>
        </li>
        <li class="game">
          <div align="center">
            <i></i>
            <p>随意切换游戏平台</p>
            <div class="contentText">
              可随时查看其他台路纸，亦可马上切换到另一游戏平台，<br>把握每一路好机会
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="service" align="center" @click="$openKefu">
      <div>
        <p>立即开通</p>
        <p>电话投注</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Lheader from '@/components/l-header'

  export default {
    name: "index",
    data() {
        return {
          title: '电话投注'
        }
    },
    components: {
      Lheader
    }
    }
</script>

<style scoped lang="less">
  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: #090705;
    .el-main{
      flex: 1;
      padding: 0;
      .titleBanner {
        // background-image: url(~@assets/img/home/banner@3x.jpg);
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        height: 300px;
      }
      .list {
        padding: 20px;
        li {
          margin-top:20px;
          width: 100%;
          height: 224px;
          background-repeat: no-repeat;
          background-size: cover;
          text-align: center;
          i {
            display: block;
            width: 50px;
            height: 50px;
            margin: 0 auto;
            transform: translateY(20px);
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .contentText {
            margin-top: 20px;
            color: #FFFFFF;
            line-height: 44px;
          }
          &:first-child {
            margin-top: 0;
          }
          p {
            color: #FFCF6E;
            font-size: 24px;
            padding-top:30px;
          }
        }
        // .video {
        //   background-image: url(~@assets/img/home/pvideo.png);
        //   i {
        //     background-image: url(~@assets/img/home/pvideoicon.png);
        //   }
        // }
        // .flop {
        //   background-image: url(~@assets/img/home/pflop.png);
        //   i {
        //     background-image: url(~@assets/img/home/pflopicon.png);
        //   }
        // }
        // .betting {
        //   background-image: url(~@assets/img/home/pbetting.png);
        //     i {
        //       background-image: url(~@assets/img/home/pbettingicon.png);
        //     }
        // }
        // .game {
        //   background-image: url(~@assets/img/home/pgame.png);
        //   i {
        //     background-image: url(~@assets/img/home/pgameicon.png);
        //   }
        // }
      }
    }
    .service {
      width: 110px;
      height: 110px;
      position: fixed;
      bottom: 396px;
      right: 40px;
      background-color: #FFCF6E;
      border-radius: 50%;
      color:#67382F;
      display: table-cell;
      vertical-align:middle;
      div {
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
        font-weight: 700;
        p {
          margin-top: 10px;
          &:first-child {
            margin-top: 0px;
          }
        }
      }
    }
  }
</style>
