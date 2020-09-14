<template>
  <div>
    <lheader
      v-if="!$route.query.source || ['android','ios'].indexOf($route.query.source) !== -1"
      :title="`${$config[$projectname].secName}-西甲联赛`"
      :goback="true"
    ></lheader>
    <ToTop />
    <div class="swiper-box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./assets/img2.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./assets/img17.png" alt="" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="game-wrapper">
      <div class="game-box">
        <div class="game-box-info">
          <div class="game-box-info-left">
            <h2>意大利足球甲级联赛</h2>
            <p>
              意大利足球甲级联赛是意大利顶级足球联赛，由意大利足球协会所管理，意甲职业联盟运营。意甲参赛球队于2004-05秋季开始由18队增加至20队。以双循环方式比赛，联赛榜最后3名将会降级到乙级联赛。其位置由乙组头两名取代，余下的席位则由乙组第3名至第8名进行附加赛争夺。
            </p>
          </div>
          <div class="game-box-info-right">
            <img src="./assets/img12.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="game-box">
        <div class="game-box-info">
          <div class="game-box-info-left">
            <h2>签约现场图集</h2>
            <p>
              北京时间2019年8月18日，亚洲综合娱乐平台{{$config[$projectname].secName}}与意甲联盟在米兰Grand
              Hotel et de
              Milan酒店完成战略签约仪式。自此，{{$config[$projectname].secName}}正式成为意甲国际赞助商。双方联袂开启娱乐新纪元！此次{{$config[$projectname].secName}}赞助意甲，赞助费用达到每赛季1200万欧元左右。如此大规模的品牌宣传在业内实属罕见。
            </p>
          </div>
          <div class="game-box-info-right">
            <img src="./assets/img14.png" alt="" />
          </div>
        </div>
        <ul class="game-box-ul margin-top60">
          <li>
            <img src="./assets/img9.png" alt="" />
            <p>双方代表在书面合同上签字的瞬间，历史性的一刻就此定格</p>
          </li>
          <li>
            <img src="./assets/img8.png" alt="" />
            <p>{{$config[$projectname].secName}}公共关系总监Carr smith上详述双方的合作愿景</p>
          </li>
          <li>
            <img src="./assets/img7.png" alt="" />
            <p>{{$config[$projectname].secName}}是一家悦意进取，飞速发展壮大的体育数据/娱乐公司</p>
          </li>
        </ul>
      </div>
      <div class="game-box game-moment">
        <img class="moment-img" src="./assets/img4.png" alt="" />
        <h2 class="moment-title">精彩赛事</h2>
        <ul class="game-box-ul">
          <li>
            <video
              class="video"
              src="https://static.wq-test.com/201912/136037920191215051435.webm"
              poster="./assets/img16.jpg"
              controls
            ></video>
            <p>桑普多利亚2:1莱切</p>
          </li>
          <li>
            <video
              class="video"
              poster="./assets/img13.png"
              src="https://static.wq-test.com/201912/913794120191215052624.webm"
              controls
            ></video>
            <p>尤文图斯2:1莱切</p>
          </li>
          <li>
            <video
              class="video"
              poster="./assets/img5.png"
              src="https://static.wq-test.com/201912/461616820191215051705.webm"
              controls
            ></video>
            <p>莱切采访视频</p>
          </li>
        </ul>
      </div>
      <div class="game-box game-media">
        <div class="game-media-left">
          <h2>媒体介绍【腾讯网】</h2>
          <p>
            北京时间2019年8月18日，亚洲综合娱乐平台{{$config[$projectname].secName}}与意甲联盟在米兰Grand
            Hotel et de
            Milan酒店完成战略签约仪式。自此，{{$config[$projectname].secName}}正式成为意甲国际赞助商。双方联袂开启娱乐新纪元!
          </p>
          <img class="left-img" src="./assets/img10.png" alt="" />
          <img class="right-img" src="./assets/img3.png" alt="" />
        </div>
        <div class="game-media-right">
          <img src="./assets/img6.png" alt="" />
        </div>
      </div>
      <div class="game-box-ad">
        <img src="./assets/img1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

import Lheader from "@/components/l-header";
import ToTop from "@/components/to-top";
export default {
  components: {
    Lheader,
    ToTop
  },
  data() {
    return {
      isShowHeader: true
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      loop: true,
      autoplay: true
    });
  }
};
</script>

<style lang="less" scoped>
@rem: 150rem; // 设计图除数
.swiper-box {
  width: 100%;
  height: 4.896rem;
  margin-top: 1.1733rem;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }
    }
    .swiper-pagination {
      /deep/.swiper-pagination-bullet {
        width: 63px/2;
        height: 7px/2;
        background: rgba(255, 255, 255, 1);
        opacity: 0.3;
        border-radius: 0;
        outline: none;
        &.swiper-pagination-bullet-active {
          opacity: 1;
        }
      }
    }
  }
}
.game-wrapper {
  font-family: Microsoft YaHei;
  width: 100%;
  height: 77rem;
  background: #111108 url(./assets/img11.png) no-repeat center;
  padding-top: 5.01vw;
  background-size: 100% auto;
  .game-box {
    width: 1200px/2;
    padding: 60px/2;
    background: #fff;
    border-radius: 10px/2;
    margin: 0 auto 118px/2;

    .game-box-info {
      .game-box-info-left {
        width: 100%;
        margin-bottom: 54px/2;
        h2 {
          font-size: 72px/2;
          font-weight: 400;
          color: rgba(28, 29, 36, 1);
          line-height: 72px/2;
          margin-bottom: 54px/2;
        }
        p {
          font-size: 48px/2;
          font-weight: 400;
          color: rgba(28, 29, 36, 1);
          line-height: 72px/2;
        }
      }
      .game-box-info-right {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    .game-box-ul {
      li {
        width: 100%;
        margin-bottom: 96px/2;
        img {
          width: 100%;
        }
        p {
          font-size: 48px/2;
          font-weight: 400;
          color: #000;
          line-height: 72px/2;
          margin-top: 72px/2;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .margin-top60 {
      margin-top: 62px/2;
    }
  }
  .game-moment {
    position: relative;
    .moment-img {
      position: absolute;
      left: 52px/2;
      top: 62px/2;
      width: 105px/2;
    }
    .moment-title {
      padding-left: 135px/2;
      font-size: 72px/2;
      font-weight: 400;
      color: rgba(28, 29, 36, 1);
      margin: 0 0 54px/2;
    }
    .game-box-ul {
      li {
        p {
          margin-top: 24px/2;
          text-align: center;
        }
      }
      .video {
        width: 100%;
        height: 370px;
        outline: none;
        object-fit: cover;
      }
    }
  }
  .game-media {
    padding: 0;
    .game-media-left {
      padding: 64px/2;
      background: rgba(177, 143, 103, 1);
      width: 100%;
      height: 694px/2;
      color: #fff;
      position: relative;
      border-top-left-radius: 10px/2;
      border-top-right-radius: 10px/2;
      h2 {
        font-size: 72px/2;
        font-weight: 400;
        line-height: 72px/2;
        margin: 0 0 54px/2;
      }
      p {
        font-size: 48px/2;
        font-weight: 400;
        line-height: 72px/2;
        margin-top: 72px/2;
      }
      .left-img {
        width: 98px/2;
        position: absolute;
        right: 200px/2;
        bottom: 54px/2;
      }
      .right-img {
        width: 61px/2;
        position: absolute;
        right: 94px/2;
        bottom: 54px/2;
      }
    }
    .game-media-right {
      padding: 0 64px/2;
      img {
        width: 100%;
      }
    }
  }
  .game-box-ad {
    width: 1200px/2;
    background: #fff;
    margin: 0 auto;
    border-radius: 10px/2;
    padding: 38px/2 0 47px/2 0;
    img {
      width: 100%;
    }
  }
}
</style>
