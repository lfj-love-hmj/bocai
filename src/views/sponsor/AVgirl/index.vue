<template>
  <div id="AVgirl">
    <lheader
      v-if="
        !$route.query.source ||
          ['android', 'ios'].indexOf($route.query.source) !== -1
      "
      :title="`${$config[$projectname].project}女优，祝你赢钱`"
      :goback="true"
    ></lheader>
    <ToTop />

    <!--约会名单-->
    <div class="box1">
      <div class="av-title">
        代言女优亲密接触
        <img class="bg-img2" src="./assets/img3.png" alt="" />
      </div>
      <img class="bg-img1" src="./assets/img1.png" alt="" />

      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./assets/m1.jpg" alt="" />
            <div class="text">
              <p class="p1">第一站</p>
              <p>女优接待、参观风情街、人体寿司宴</p>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="./assets/m2.jpg" alt="" />
            <div class="text">
              <p class="p1">第二站</p>
              <p>参观女优经纪公司 女优亲密接触</p>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="./assets/m3.jpg" alt="" />
            <div class="text">
              <p class="p1">第三站</p>
              <p>女优陪玩北海道一日游</p>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>

      <div class="box-right-title">
        往期约会名单
        <img src="./assets/img2.png" alt="" />
      </div>
      <table>
        <tr>
          <th>游玩日期</th>
          <th>账户</th>
          <th>游戏反馈</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.start_date | timeFilters(item.end_date) }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.feedback }}</td>
        </tr>
      </table>

      <div class="box-right-text1">期待与你相见！</div>
      <div class="box-right-text2">
        单周存款500W以上并且完成3倍流水，即可和代言女神亲密接触，
        详细情况联系在线客服哦！
      </div>
    </div>

    <!--信息-->
    <div class="box2">
      <div class="box2-left-title">巨乳女神</div>
      <div class="title-tag">宇都宫紫苑</div>
      <div class="box2-right-title">迷人女神</div>
      <div class="box2-img"></div>
      <div class="message">
        <p>{{$config[$projectname].secName}}代言日期：2019年9月1日</p>
        <p>别名：安齋 らら、宇都宮 しをん、Rion</p>
        <p>出道地点：日本京都府</p>
        <p>身高／体重：161 厘米 / 47 公斤</p>
        <p>BMI：18.1（偏瘦）</p>
        <p>三围：105 - 58 - 89 cm</p>
        <p>罩杯：J</p>
        <p>体形备注：神之乳</p>
        <p>
          2013年9月7日，在S1以《新人NO.1STYLE　宇都宫しをんAVデビュー》AV初登场[1]，就一举拿下了日本影音娱乐网站《DMM》所公布的2013年下半年的销售排行榜“月间女优”与“月间DVD”的双料冠军[2]。
        </p>
        <p>
          2014年4月，以“安斋拉拉”名义在日本《周刊Playboy》上连载全裸写真[3]。同年9月，暂别AV界。
        </p>
        <p>
          2015年9月，在S1以“RION”身份回归AV演出，并拿下《DMM》所列出的2015下半年AV女优排行冠军[4]。所属事务所从8
          Man移籍到T-POWERS
        </p>
      </div>
    </div>

    <!--信息-->
    <div class="box3">
      <video poster="./assets/aaa.png" controls>
        <source
          src="https://static.wq-test.com/201912/590175120191215051218.webm"
          type="video/webm"
        />
      </video>
    </div>
  </div>
</template>

<script>
import { Swiper } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";
import { past_appointments } from "@/api/activity";

import Lheader from "@/components/l-header";
import ToTop from "@/components/to-top";
import dayjs from "dayjs";

export default {
  components: {
    Lheader,
    ToTop
  },
  data() {
    return {
      isShowHeader: true,
      list: []
    };
  },
  filters: {
    timeFilters(start_date, end_date) {
      return `${dayjs(start_date).format("MM.DD")}-${dayjs(end_date).format(
        "MM.DD"
      )}`;
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: true
    });
    past_appointments().then(res => {
      this.list = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
#AVgirl {
  margin-top: 1.1733rem;
  width: 100%;
  height: 8760px / 2;
  position: relative;
  background: url("./assets/img7.jpg") no-repeat;
  background-size: 100% auto;
  background-color: rgb(28, 23, 20);

  .av-title {
    position: absolute;
    height: 73px/2;
    line-height: 73px/2;
    font-size: 73px/2;
    top: -166px/2;
    left: 226px/2;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);

    .bg-img2 {
      position: absolute;
      bottom: 24px/2;
      left: -104px/2;
      width: 114px/2;
      height: auto;
    }
  }

  .box1,
  .box2,
  .box3 {
    width: 1362px/2;
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 57px 0 rgba(36, 20, 7, 0.11);
    border-radius: 10px;
  }

  .box1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    top: 1483px/2;
    height: 2453px/2;
    padding: 120px/2 0;

    .bg-img1 {
      position: absolute;
      top: -498px/2;
      right: -36px/2;
      width: auto;
      height: 498px/2;
    }

    .box-right-title {
      position: relative;
      left: 47px/2;
      padding: 100px/2 0 110px/2;
      height: 64px/2;
      font-size: 64px/2;
      line-height: 64px/2;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(182, 122, 73, 1);

      img {
        position: absolute;
        left: -84px/2;
        bopttom: -31px/2;
        width: 81px/2;
        height: auto;
      }
    }
    table {
      width: 1120px/2;

      th,
      td {
        width: 360px/2;
        text-align: left;
        font-size: 48px/2;
      }
      th {
        color: #666;
      }
      td {
        color: #000;
      }
      tr {
        height: 140px/2;
      }
    }
    .box-right-text1 {
      margin: 80px/2 0;
      font-size: 64px/2;
      line-height: 64px/2;
      font-family: Microsoft YaHei;
      color: #b67a49;
    }
    .box-right-text2 {
      width: 1164px/2;
      font-size: 40px/2;
      font-family: Microsoft YaHei;
      color: #999;
      line-height: 73px/2;
    }
  }

  .box2 {
    display: block;
    height: 3506px/2;
    top: 4042px/2;

    .box2-left-title {
      position: absolute;
      font-size: 60px/2;
      color: #b67a49;
      top: 68px/2;
      left: 100px/2;
      margin-bottom: 1.2vw;
    }
    .title-tag {
      position: absolute;
      top: 189px/2;
      left: 49px;
      padding: 0 2px;
      line-height: 73px/2;
      color: #fff;
      background: rgb(255, 88, 135);
      text-align: center;
    }
    .message {
      margin-top: 60px/2;
    }
    p {
      margin: 0 auto 26px;
      width: 1153px/2;
      font-size: 48px/2;
      color: #000;
      line-height: 30px;
    }

    .box2-right-title {
      margin: 344px/2 0 65px/2;
      text-align: center;
      font-size: 30px;
      color: #b67a49;
    }
    .box2-img {
      width: 1220px/2;
      height: 1285px/2;
      margin-left: -63px/2;
      background: url("./assets/img5.png") no-repeat;
      background-size: 100%;
    }
  }
  .box3 {
    height: 868px/2;
    top: 7650px/2;
    display: flex;

    video {
      margin: auto;
      width: 1102px/2;
      height: auto;
      object-fit: cover;
    }
  }

  .swiper-container {
    position: relative;
    width: 1155px/2;
    height: 785px/2;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #ccc;
    position: relative;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .text {
      position: absolute;
      bottom: 1.565vw;
      left: 1.56vw;
      font-size: 40px/2;
      color: #fff;
      line-height: 75px/2;
      text-align: left;

      .p1 {
        font-size: 60px/2;
        line-height: 75px/2;
      }
    }
  }
  .swiper-pagination {
    position: absolute;
    width: 270px/2;
    bottom: 80px/2;
    left: 840px/2;

    /deep/.swiper-pagination-bullet {
      border-radius: 0;
      width: 68px/2;
      height: 7px/2;
      background: rgba(255, 255, 255, 1);
      opacity: 0.5;

      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }
}
</style>
