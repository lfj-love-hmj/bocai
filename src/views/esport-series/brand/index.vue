<template>
  <div class="esport-brand">
    <es-header></es-header>
    <div class="main endorsementbox">
      <img :src="seletIndex ==1 ? $imgs['brand/es_brand6'] : $imgs['brand/es_brand13']" alt="" class="head-bg">
      <div class="ep-menu">
        <a href="javascript:;" :class="{'active': seletIndex == 1}" @click="changePage(1)"></a>
        <a href="javascript:;" :class="{'current': seletIndex == 2}" @click="changePage(2)"></a>
        <a href="javascript:;" @click="changePage(3)"></a>
      </div>
      <template v-if=" seletIndex == 1">
        <div class="e-bd">
          <img :src="$imgs['brand/es_brand7']" class="title1">
          <div class="mark">
            <h3>狂竞技联手罗宾.范佩西，巨星闪耀，注定辉煌！</h3>
            <p>
              狂竞技于2019年9月15日签约足坛旋风传奇巨星 罗宾.范佩西为品牌形象代言人，作为阿森纳和曼联传奇前锋、
              荷兰国家队队长，在结束17年足球生涯后，携手狂竞技将再续辉煌时刻。届时范佩西将召开新闻发布会，
              今后会与狂竞技共同致力于为更多电竞迷、体育迷提供更优质的赛事服务及线上线下粉丝互动活动。
            </p> 
            <p style="margin-top: 15px; margin-bottom: 10px;">
              狂竞技作为亚洲地区最有实力的电竞、体育竞猜平台，这次与罗宾.范佩西的强强联手，将用实力证明竞技巅峰！
            </p>
          </div>
          <div class="video" v-show="videoShow == 1">
            <video style="width: 100%" controls :poster="$imgs['brand/fpx7']" class="v-bg">
              <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/CzZlqGo34n9n7UJHuS4M5GowwgqQZNXMU7NsSqQs.mp4">
            </video>
          </div>
          <div class="video" v-show="videoShow == 2">
            <video style="width: 100%" controls :poster="$imgs['brand/es_brand11']" class="v-bg">
              <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/FhjfJucvrXKnbtX4iyhfUpQQ1xubX65L7GzFYkOk.mp4">
            </video>
          </div>
          <div id="video-title" class="v-play-title">
            <span id="left" @click="changeVideo(1)"></span> 
            <span id="title">罗宾.范佩西最新专访视频</span> 
            <span id="right" @click="changeVideo(2)"></span>
          </div>
          <div class="info">
            <img :src="$imgs['brand/es_brand12']" alt="" class="head-bg">
          </div>
        </div>
        <div class="es-photos">
          <div class="bannerBoxContent">
              <swiper :options="swiperOption" class="swiper-container">
                <swiper-slide v-for="(item, index) in bannerList" :key="index">
                  <img :src="item" alt="">
                </swiper-slide>
              </swiper>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="e-bd">
          <img :src="$imgs['brand/es_brand15']" class="title2">
          <div class="mark">
            <h3>狂竞技携手超跑俱乐部PCRC功夫珠海赛道日，在引擎的轰鸣中感受速度极致</h3>
            <p>
              此次珠海赛道日于2020年1月11日-1月12日在珠海ZIC国际赛车场举办，狂竞技作为主办方同PCRC超跑俱乐部联手为大家展现最真实的超跑体验。
            </p> 
            <p style="margin-top: 15px; margin-bottom: 10px;">
              此次狂竞技于PCRC的跨界合作完美呈现超跑与竞技的极致赛场盛宴，在未来的时间里狂竞技也将继续投入到更多精彩的赛事当中，为玩家带来更加震撼的观感盛宴！
            </p>
          </div>
          <div class="video">
            <video style="width: 100%" controls :poster="$imgs['brand/es_brand13']" class="v-bg">
              <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/cookiYp7lBoCPqwcGqrswW3tlkfAQdsrpnOCn6jd.mp4">
            </video>
          </div>
          <div id="video-title" class="v-play-title">
            <span id="title">PCRC珠海赛道日-狂竞技全程赞助视频</span> 
          </div>
          <div class="info">
            <img :src="$imgs['brand/es_brand14']" alt="" class="head-bg">
          </div>
        </div>
        <div class="es-photos">
          <div class="bannerBoxContent">
              <swiper :options="swiperOption2" class="swiper-container">
                <swiper-slide v-for="(item, index) in bannerList2" :key="index">
                  <img :src="item" alt="">
                </swiper-slide>
              </swiper>
          </div>
        </div>
      </template>
      
      <div class="join">
        <img :src="$imgs['brand/join']" alt="" class="head-bg" @click="$router.push('/agentHomepage')">
      </div>
    </div>
    <vtabbar class="m-footer" :index="3"></vtabbar>
  </div>
  
</template>

<script>
  import esHeader from "../components/es-header"
  import Vtabbar from "../components/v-tabbar"
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    components: {
      Vtabbar,
      esHeader,
      swiper,
      swiperSlide
    },
    computed: {
    },
    data() {
      return {
        seletIndex: 1,
        videoShow: 1,
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 10,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          }
        },
        swiperOption2: {
          slidesPerView: 3,
          spaceBetween: 10,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          }
        },
        bannerList:[
          require('../../../assets/10050/img3_0/brand/fpx1.png'),
          require('../../../assets/10050/img3_0/brand/fpx4.png'),
          require('../../../assets/10050/img3_0/brand/fpx5.png'),
          require('../../../assets/10050/img3_0/brand/fpx7.png'),
          require('../../../assets/10050/img3_0/brand/fpx13.png'),
          require('../../../assets/10050/img3_0/brand/fpx15.png'),
        ],
        bannerList2:[
          require('../../../assets/10050/img3_0/brand/car1.jpg'),
          require('../../../assets/10050/img3_0/brand/car4.jpg'),
          require('../../../assets/10050/img3_0/brand/car8.jpg'),
          require('../../../assets/10050/img3_0/brand/car9.jpg'),
          require('../../../assets/10050/img3_0/brand/car10.jpg'),
          require('../../../assets/10050/img3_0/brand/car11.jpg'),
        ]
      }
    },
    created () {
    },
    methods: {
      changePage(type) {
        if(type == 3) return this.$toast('敬请期待！')
        this.seletIndex = type
      },
      changeVideo(type) {
        this.videoShow = type
        console.log(this.videoShow, 888)
      }
    }
  }
</script>

<style lang="less" scoped>
.esport-brand {
  padding-top: 88px;
  padding-bottom: 104px;
  .main {
    position: relative;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    .head-bg {
      width: 100%;
      vertical-align: middle;
    }
    .ep-menu {
      position: absolute;
      right: 20px;
      top: 60px;
      display: flex;
      flex-direction: column;
      a {
        display: inline-block;
        width: 340px;
        height: 62px;
        margin-bottom: 10px;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-position: 50% !important;
        &:first-child{
          background: url('~@/assets/10050/img3_0/brand/es_brand3.png');
        }
        &:nth-child(2){
          background: url('~@/assets/10050/img3_0/brand/es_brand5.png');
        }
        &:last-child{
          background: url('~@/assets/10050/img3_0/brand/es_brand4.png');
        }
      }
      .active {
        background: url('~@/assets/10050/img3_0/brand/es_brand2.png') !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-position: 50% !important;
      }
      .current {
        background: url('~@/assets/10050/img3_0/brand/es_brand1.png') !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-position: 50% !important;
      }
    }
    .e-bd {
      margin: 0 40px;
      text-align: center;
      .title1 {
        width: 100%;
        vertical-align: middle;
        margin-top: 10px;
      }
      .title2 {
        width: 80%;
        margin: 0 auto;
      }
      .mark {
        h3 {
          font-size: 26px;
          margin: 20px 0 16px;
          font-weight: bold;
          color: #DADADA;
          letter-spacing: 4.2px;
          line-height: 1.5;
          text-align: left;
        }
        p {
          font-size: 24px;
          line-height: 36px;
          color:#999999;
          text-align: left;
        }
      }
      .video {
        position: relative;
        height: 416px;
        padding: 8px;
        filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="#70FBE3",endColorstr="#0195AB");
        background-image: linear-gradient(right,#70fbe3,#0195ab);
        width: 100%;
        border-radius: 10px;
        .v-bg {
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: cover;
          height: 100%;
        }
      }
      .v-play-title {
        text-align: center;
        margin: 10px 0;
        font-size: 26px;
        font-weight: 600;
        letter-spacing: 4px;
        #title{
          color: 24px;
          color: #DADADA;
          font-weight:600;
        }
        #left, #right {
          display: inline-block;
          width: 50px;
          height: 50px;
          position: relative;
          top: 14px;
        }
        #left {
          text-align: left;
          background: url('~@/assets/10050/img3_0/brand/es_brand9.png');
          background-size: cover;
          right: 20px;
        }
        #right {
          text-align: right;
          background: url('~@/assets/10050/img3_0/brand/es_brand10.png');
          background-size: cover;
          left: 20px;
        }
      }
      .info {
        text-align: center;
        margin-top: 30px;
        img {
          width: 630px;
        }
      }
    }
    .es-photos {
      padding: 0 30px;
      margin-right: -20px;
      margin: 20px 0;
      .swiper-container {
        .swiper-slide {
          width: 236px;
          height: 140px;
          position: relative;
          border-radius: 8px;
          background-image: -webkit-gradient(linear,right top,left top,from(#70fbe3),to(#0195ab));
          img {
            width: 200px;
            margin: 8px 0 0 8px;
          }
        }
      }
    }
    .join {
      margin: 40px 60px;
    }
  }
}
</style>