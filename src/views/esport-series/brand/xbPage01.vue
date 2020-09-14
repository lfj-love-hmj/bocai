<template>
  <div class="detailPage">
    <div class="swiper-container swiper-container01">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in 3">
          <van-image :src="$imgs['brand/p1/banner0'+(index+1)+'']" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="main">
      <h2 class="detailPage-title">签约视频</h2>
      <video style="width: 100%" controls :poster="$imgs['brand/p1/shipin1@2x']">
        <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/rInFob71cPExPW9SFrhUlXKy9WCFwQ6mF692MUVE.mp4">
      </video>
      <p class="detailPage-text">北京时间2019年10月7日，正值瓦伦西亚足球俱乐部诞辰100周年之际，西甲豪门瓦伦西亚与亚洲娱乐游戏平台西宝娱乐达成了战略合作，作为业界闻名的顶级娱乐品牌，西宝娱乐正式成为瓦伦西亚足球俱乐部亚洲区域合作伙伴，双方签下了一份为期2年的合作协议，共促彼此品牌价值提升，将在未来携手为消费者带来更多触手可及的极致娱乐体验。瓦伦西亚在欧洲足坛成名已久，西甲豪门杰出卓越的精英形象将为西宝娱乐旗下产品实现最权威的品牌背书！可以预见的是，双方的强强联合必将迸发出不一样的火花，成为2019体育大年最令人兴奋的跨界合作。</p>
      <h2 class="detailPage-title">精彩赛事</h2>
      <div class="swiper-container swiper-container02">
        <div class="swiper-wrapper">
          <div class="swiper-slide" @click="showVideo(0)">
            <van-image :src="$imgs['brand/p1/videoBg1']" />
            <img class="play-btn" :src="$imgs['brand/p1/play']" alt="">
            <p>皇马1：1瓦伦西亚</p>
          </div>
          <div class="swiper-slide" @click="showVideo(1)">
            <van-image :src="$imgs['brand/p1/videoBg2']" />
            <img class="play-btn" :src="$imgs['brand/p1/play']" alt="">
            <p>皇马3：1瓦伦西亚</p>
          </div>
          <div class="swiper-slide" @click="showVideo(2)">
            <van-image :src="$imgs['brand/p1/videoBg3']" />
            <img class="play-btn" :src="$imgs['brand/p1/play']" alt="">
            <p>清瓦伦西亚1-0西班牙人</p>
          </div>
          <div class="swiper-slide" @click="showVideo(3)">
            <van-image :src="$imgs['brand/p1/videoBg4']" />
            <img class="play-btn" :src="$imgs['brand/p1/play']" alt="">
            <p>亚特兰大4-1瓦伦西亚</p>
          </div>
          <div class="swiper-slide">
            <van-image :src="$imgs['brand/p1/nodata']" />
            <p>敬请期待</p>
          </div>
        </div>
      </div>
      <p class="detailPage-text-tit">西甲瓦伦西亚足球俱乐部</p>
      <p class="detailPage-text">瓦伦西亚是西班牙足球超级联赛最成功的俱乐部之一，又称“蝙蝠军团”，1919年创立至今已有百年历史，在世界各地拥有广泛的支持者和坚实的球迷基础。队史上共获得过6次西甲联赛冠军，8座西班牙国王杯冠军，悠久而辉煌的俱乐部历史为瓦伦西亚在世界足坛树立起了杰出卓越的豪门形象。2019-2020赛季，瓦伦西亚再度征战象征着欧洲足球俱乐部最高水平的欧冠联赛，彰显了顶级俱乐部的强劲实力和深厚的豪门底蕴。</p>
      <img :src="$imgs['brand/p1/bet_brand_image_a2@2x']" style="margin-top: 14px" class="full-img" alt="">
      <h2 class="detailPage-title">荣誉</h2>
      <div class="swiper-container swiper-container03">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div>
              <img :src="$imgs['brand/p1/jiangbei-1']">
              <span>8</span>
              <p>西班牙国王杯</p>
            </div>
            <div>
              <img :src="$imgs['brand/p1/jiangbei-2']">
              <span>6</span>
              <p>西甲联赛</p>
            </div>
            <div>
              <img :src="$imgs['brand/p1/jiangbei-3']">
              <span>3</span>
              <p>欧洲联盟杯</p>
            </div>
            <div>
              <img :src="$imgs['brand/p1/jiangbei-4']">
              <span>2</span>
              <p>欧洲超级杯</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img :src="$imgs['brand/p1/jiangbei-5']">
              <span>1</span>
              <p>欧洲优胜者杯</p>
            </div>
            <div>
              <img :src="$imgs['brand/p1/jiangbei-6']">
              <span>1</span>
              <p>西班牙超级杯</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <h2 class="detailPage-title">官方宣传</h2>
      <img :src="$imgs['brand/p1/bet_brand_image_a4@2x']" class="full-img" alt="">
      <p class="detailPage-text">北京时间2019年10月7日，亚洲娱乐游戏平台西宝娱乐与西甲豪门瓦伦西亚足球俱乐部（Valencia Club deFútbol）在瓦伦西亚会展中心召开了官方合作发布会。自2019-2020赛季开始，欧宝娱乐正式成为瓦伦西亚足球俱乐部亚洲区域合作伙伴，此次合作建立在双方高度协同的“高品质、诚信、卓越、协作”价值观之上，西宝娱乐“极致娱乐体验”的品牌内涵将得到完美诠释。</p>
      <h2 class="detailPage-title">业内最顶尖的原生APP</h2>
      <img :src="$imgs['brand/p1/bet_brand_image_a5@2x']" class="full-img" alt="">
      <img :src="$imgs['brand/p1/bet_brand_image_a6@2x']" style="margin-top: 14px" class="full-img" alt="">
      <h2 class="detailPage-title">官方宣传</h2>
      <img :src="$imgs['brand/p1/bet_brand_image_a7@2x']" class="full-img" alt="">
      <h2 class="detailPage-title">媒体报道</h2>
      <img :src="$imgs['brand/p1/banner01']" class="full-img" alt="">
      <p class="detailPage-text">北京时间2019年10月7日，亚洲娱乐游戏平台欧宝娱乐与西甲豪门瓦伦西亚足球俱乐部(Valencia Club de Fútbol)在瓦伦西亚会展中心召开了官方合作发布会。双方在会上达成了合作共识：自2019-2020赛季开始，西宝娱乐将成为瓦伦西亚足球俱乐部亚洲区域合作伙伴。未来，双方将致力于发展共赢的世界——为广大玩家提供更多精彩纷呈的娱乐服务，共同诠释“极致娱乐”的品牌主张。</p>
      <img :src="$imgs['brand/p1/bet_brand_image_a9@2x']" style="margin-top: 14px" class="full-img" alt="">
      <div class="totop" @click="toTop">
        <img :src="$imgs['brand/p1/top@2x']" alt="">
        <span>回到顶部</span>
      </div>
    </div>

    <van-dialog v-model="videobox" :showConfirmButton="false" closeOnClickOverlay>
      <video style="width: 100%" controls :poster="$imgs['brand/p1/videoBg1']" v-if="active===0">
        <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/CvdhFO3LL81LE5rAebqjbzhMw3F1yppm7t7SttcS.flv">
      </video>
      <video style="width: 100%" controls :poster="$imgs['brand/p1/videoBg2']" v-if="active===1">
        <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/SNqQP7VgVEQWavRY59IxZFd6gaKY58gS8I6omhLb.flv">
      </video>
      <video style="width: 100%" controls :poster="$imgs['brand/p1/videoBg3']" v-if="active===2">
        <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/miPnR7ZVzE9BaVboNvguj4o9gbScjm7FhzMVcVu7.flv">
      </video>
      <video style="width: 100%" controls :poster="$imgs['brand/p1/videoBg4']" v-if="active===3">
        <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/6Bzq1WnkCB49G5rUtWLAisGrn1XgOuSWxlfPGcHL.flv">
      </video>
    </van-dialog>
  </div>
</template>

<script>
  import "swiper/dist/css/swiper.css";
  import { Swiper } from "vue-awesome-swiper";
  export default {
    name: "xbPage01",
    data () {
      return {
        competitions:[
            {tit:'瓦伦西亚2月精彩进球集锦'},
          {tit:'瓦伦西亚1月精彩进球集锦'},
          {tit:'欧宝助威瓦伦西亚力克巴塞罗那'},
          {tit:'瓦伦西亚12月精彩进球集锦'}],
        videobox:false,
        active:0,
        activeIndex:0
      };
    },
    created() {
      this.$nextTick(() => {
        new Swiper('.swiper-container01', {
          pagination: {
            el: '.swiper-pagination',
            bulletClass: 'my-bullet',//需设置.my-bullet样式
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        })
        new Swiper('.swiper-container02', {
          freeMode:true,
          slidesPerView: 'auto',
          spaceBetween: 14,
        })
        new Swiper('.swiper-container03', {
          pagination: {
            el: '.swiper-pagination',
            bulletClass: 'my-bullet',//需设置.my-bullet样式
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        })
      })
    },
    methods:{
      showVideo(i){
        this.active = i;
        this.videobox = true;
      },
      toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      },
    }
  }
</script>

<style scoped lang="less">
.full-img{
  display: block;
  width: 100%;
}
  .detailPage{
    background-color: #fff;
    overflow: hidden;
  }
  .swiper-container01{
    height: 424px;
    .swiper-pagination-bullets{
      bottom: 20px;
    }
    /deep/ .my-bullet {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 10px;
      border-radius: @border-radius-5px;
      background: #E3E3E3;
      opacity: .4;

    }
    /deep/ .swiper-pagination-bullet-active {
      opacity: 1;
      width: 20px;
      background-color: #fff;
    }
    /deep/ .swiper-pagination{
      width:100%;
      height:12px;
    }
  }
  .main{
    padding: 0 28px;
  }
  .detailPage-title{
    font-size: 28px;
    color: #333;
    border-left: 4px solid #333;
    padding-left: 10px;
    margin: 40px 0 32px 0;
    font-weight: bold;
  }
  .detailPage-text{
    font-size: 24px;
    color: #333;
    line-height: 42px;
    margin-top: 40px;
    text-indent: 2em;
  }
  .swiper-container02{
    margin: -20px -30px;
    .swiper-wrapper{
      padding: 40px 30px;
    }
    .swiper-slide{
      width: 256px;
      border-radius: 12px;
      box-shadow:0px 6px 30px 0px rgba(0,34,80,0.1);
      position: relative;
      .play-btn{
        width: 68px;
        position: absolute;
        top: 50px;
        left: 50%;
        margin-left: -34px;
      }
      .van-image{
        height: 165px;
        border-radius: 12px 12px 0 0;
        overflow: hidden;
      }
      p{
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        color: #333;
        padding: 0 10px;
        border-radius: 0 0 12px 12px;
      }
    }
  }
  .detailPage-text-tit{
    font-size: 32px;
    color: #333;
    margin: 60px 0 30px;
    text-align: center;
    font-weight: bold;
  }
  .totop{
    padding: 50px 0;
    text-align: center;
    img{
      width: 22px;
    }
    span{
      display: block;
      font-size: 24px;
      color: #999;
      margin-top: 10px;
    }
  }
  .van-dialog{
    padding: 0;
    background-color: transparent;
  }
  .swiper-container03{
    margin-bottom:60px;
    padding-bottom: 60px;
    .swiper-pagination-bullets{
      bottom: 10px;
    }
    /deep/ .my-bullet {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 10px;
      border-radius: @border-radius-5px;
      border: 1px solid #C3C9DB;
      opacity: .4;

    }
    /deep/ .swiper-pagination-bullet-active {
      opacity: 1;
      width: 20px;
      background-color: #C3C9DB;
    }
    /deep/ .swiper-pagination{
      width:100%;
      height:12px;
    }
    .swiper-slide{
      font-size: 0;
      div{
        display: inline-block;
        vertical-align: top;
        width: 25%;
        text-align: center;
        border-right: 2px solid #dedede;
        padding: 0 10px;
        &:last-child{
          border-right: 0;
        }
        img{
          width: 100px;
        }
        span{
          display: block;
          text-align: center;
          color: rgb(254, 160, 116);
          font-weight: bold;
          font-size: 36px;
        }
        p{
          color: rgb(51, 51, 51);
          text-align: center;
          font-size: 24px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
