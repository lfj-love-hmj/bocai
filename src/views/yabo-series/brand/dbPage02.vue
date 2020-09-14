
<template>
  <div class="brand-det" :style="{backgroundImage:$bImgs['brand/p2/bet_brand_image_background_yellow@2x']}">
    <div class="main">
      <img class="main-img-full" :src="$imgs['brand/p2/bet_service_banner1@2x']" alt="">
      <img class="brand-title" :src="$imgs['brand/p2/bet_brand_image_title@2x']" alt="">
      <div class="brand-main">
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b1@2x']" alt="">
          <div class="brand-block-inner">
            <video style="width: 100%" controls :poster="$imgs['brand/p2/video-img-5']">
              <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/HZqzKembmcVwmxtyTgWwA00f1kJ2jp5N1kf3kcPo.mp4">
            </video>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b2@2x']" alt="">
          <div class="brand-block-inner">
            <div class="swiper-container wonderful">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in 3">
                  <img :src="$imgs['brand/p2/bet_brand_image_b2.'+(index+1)+'@2x']" alt="">
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b3@2x']" alt="">
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b4@2x']" alt="">
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b5@2x']" alt="">
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b6@2x']" alt="">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  // import Loading from '@/components/loading'
  // import TLoading from '@/components/t-loading'
  import Vtabbar from "../components/v-tabbar"
  import "swiper/dist/css/swiper.css";
  import { Swiper } from "vue-awesome-swiper";
  export default {
    name: 'Brand',
    components: {
      Vtabbar
    },
    data () {
      return {
        title: '品牌实力',
        bannerArray:[
          {num:'10',name:'埃米尔·福斯贝里',eng:'Emil Forsberg'},
          {num:'27',name:'孔拉德·莱梅尔',eng:'Konrad Iaimer'},
          {num:'16',name:'卢卡斯·科洛斯特曼',eng:'Lukas Klostermann'},
          {num:'23',name:'马塞尔·哈尔斯滕贝格',eng:'Marcel Halstenberg'},
          {num:'07',name:'马塞尔·萨比策',eng:'Marcel Sabitzer'}],
        activeIndex:0,
        name:'何塞·路易斯·帕洛米诺',
        eng:'José Luis Palomino',
        brandBvb:[]
      };
    },
    created() {
      const toast = this.$toast.loading({
        className: "toast-loading",
        mask: false,
        duration: 1000,
        forbidClick: true,
        loadingType: "spinner",
      });
      if(['10023'].includes(process.env.VUE_APP_PROJECT_NAME)){
        this.brandBvb = [{
          cover:'bet_brand_banner_1@2x',
          tit:'那不勒斯'
        },{
          cover:'bet_brand_banner_2@2x',
          tit:'多特蒙德'
        },{
          cover:'bet_brand_banner_3@2x',
          tit:'菲利波·因扎特'
        },{
          cover:'bet_brand_banner_4@2x',
          tit:'法甲·里昂'
        }]
      }else if(['10025'].includes(process.env.VUE_APP_PROJECT_NAME)){
        this.brandBvb = [{
          cover:'bet_brand_banner_1@2x',
          tit:'德甲莱比锡'
        },{
          cover:'bet_brand_banner_2@2x',
          tit:'意甲帕尔马'
        }]
      }
      let that = this;
      // this.onRefresh();
      this.$nextTick(() => {
        new Swiper('.swiper-container02',{
          loop: !0,
          effect: "coverflow",
          centeredSlides: !0,
          slidesPerView: "auto",
          initialSlide: 0,
          coverflowEffect: {rotate: 0, stretch: 97, depth: 240, modifier: 1, slideShadows: !1},
          on: {
            slideChange: function () {
              if(this.activeIndex===10){
                that.activeIndex = 4
              }else{
                that.activeIndex = this.activeIndex-5
              }
            }
          }
        })
        new Swiper('.swiper-container01',{
          pagination: {
            el: '.swiper-pagination',
            bulletClass : 'my-bullet',//需设置.my-bullet样式
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        })
        new Swiper('.wonderful', {
          loop:true,
          centeredSlides : true,
          slidesPerView: 1.2,
          slidesOffsetBefore : 2,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          },
        });
      })
    },
    methods: {
      toDet(item,index){
        this.$router.push({path:'/brandDetail',query:{id:index+1}})
      }
    }
  };
</script>
<style scoped lang="less">
  .brand-det{
    background-size: 100% auto;
    background-repeat: repeat;
    margin-top: 88px;
    /deep/ .van-nav-bar__title{
      font-weight: bold;
    }
    .main{

      .main-img-full{
        display: block;
        width: 100%;
      }
      .brand-logo{
        width: 572px;
        margin: -108px auto 0;
        display: block;
      }
      .brand-title{
        display: block;
        width: 608px;
        margin: 20px auto 60px;
      }
      .brand-main{
        padding: 0 30px 190px;
      }
      .brand-block{
        margin-bottom: 40px;
        position: relative;
        .brand-block-inner{
          position: absolute;
          width: 610px;
          height: 348px;
          top: 124px;
          left: 50%;
          margin-left: -305px;
        }
        p{
          text-indent: 2em;
          font-size: 24px;
          color: #333;
          line-height: 42px;
        }

      }
      .brand-video{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        .brand-video-item{
          background: #fff;
          border-radius: 12px;
          width: 260px;
          margin: 0 25px;
          box-shadow:0px 6px 30px 0px rgba(0,34,80,0.1);
          video{
            width: 100%;
          }
          p{
            text-align: center;
            font-size: 20px;
            color: #333;
            padding: 8px 0;
            white-space: nowrap;
            text-indent: 0;
          }
        }
      }
      .brand-tit02{
        background:#fff;
        border:10px solid rgba(0,96,183,1);
        border-radius: 20px;
        padding: 0 30px 60px;
        margin-bottom: 60px;
        h2{
          text-align: center;
          font-size: 24px;
          color: #333;
          font-weight: bold;
        }
        .brand-tit-inner{
          width: 468px;
          display: block;
          margin: -30px auto 40px;
        }
        .brand-tit02-para{
          font-size: 24px;
          color: #333;
          text-indent: 2em;
          line-height: 42px;
          margin-top: 40px;
        }

        .block3{
          display: flex;
          align-items: center;
          justify-content: space-between;
          div{
            width: 194px;
            height: 320px;
            background: #F5F6FA;
            text-align: center;
            padding-top: 16px;
            img{
              height: 148px;
            }
            p{
              text-indent: 0;
            }
          }
        }
        .brand-td{
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          li{
            text-align: center;
            img{
              display: block;
              width: 80px;
              margin-bottom: 14px;
            }
            span{
              font-size: 24px;
              color: #333;
            }
          }
        }
        .service_logo_box {
          margin-top: .4rem;
          padding: 40px 48px;
          width: 100%;
          background-color: #f8f8f8;
          border-radius: .2rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          img:first-child{
            width: 228px;
          }
          img:last-child{
            width: 208px;
          }
        }
        .brand_title7{
          width: 516px;
          display: block;
          margin: 40px auto;
        }
        .brand-last{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li{
            width:298px;
            height:140px;
            background:rgba(245,246,250,1);
            border-radius:20px;
            line-height: 140px;
            padding: 0 0 0 16px;
            margin-bottom: 14px;
            img{
              width: 260px;
              display: inline-block;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .wonderful{
      height: 400px;
      .swiper-slide{
        transform: scale(0.9);
      }
      .swiper-slide-active{
        transform: scale(1.1);
      }
      img{
        width: 100%;
        display: block;
      }
      /deep/ .swiper-pagination-bullet{
        width:12px;
        height:12px;
        border:0;
        background: #FF808B;
        opacity: .4;
      }
      /deep/ .swiper-pagination-bullet-active{
        height:12px;
        border-radius:6px;
        opacity: 1;
      }
      /deep/ .swiper-pagination-bullets{
        bottom: 0;
      }
    }
    .swiper-container01{
      padding-bottom: 28px;
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
        background-color: @bg-gradient-color;
      }
      /deep/ .swiper-pagination{
        width:100%;
        height:12px;
      }
    }

    .swiper-container02 {
      min-height: 500px;
      width: 70vw;
      margin: 0 auto;
      .swiper-slide{
        width:326px;
        height:482px;
        background:rgba(205,211,226,1);
        box-shadow:0px 4px 16px 0px rgba(50,73,118,0.5);
        border-radius:20px;
        text-align: center;
        position: relative;
        span{
          position: absolute;
          font-size: 36px;
          color: #333;
          left: 40px;
          top: 30px;
        }
        img{
          width: 284px;
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -141px;
        }
      }
    }
    .brand-name{
      text-align: center;
      font-size: 28px;
      color: #333;
      font-weight: bold;
      margin-top: 50px;
      span:last-child{
        font-size: 20px;
        display: block;
        font-weight: normal;
        margin-top: 12px;
      }
    }
  }
</style>

