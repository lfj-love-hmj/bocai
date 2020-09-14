
<template>
  <div class="brand-det" :style="{backgroundImage:$bImgs['brand/p1/bet_brand_bg1@2x']}">
    <div class="main">
      <img class="main-img-full" :src="$imgs['brand/p1/bet_service_banner@2x']" alt="">
      <img class="brand-title" :src="$imgs['brand/p1/bet_brand_image_title@2x']" alt="">
      <div class="brand-main">
<!--        <div class="brand-block">-->
<!--          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a1@2x']" alt="">-->
<!--        </div>-->
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a1@2x']" alt="">

        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a2@2x']" alt="">
          <div class="brand-block-inner">
            <video style="width: 100%" controls :poster="$imgs['brand/p1/video-img-5']">
              <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/XyifrmDEX7Azzsr8ghq0Ci2IdSTbUi61VSUDuwM9.mp4">
            </video>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b3@2x']" alt="">
          <div class="brand-block-inner">
            <div class="swiper-container swiper-container01">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="brand-video">
                    <div class="brand-video-item">
                      <div class="">
                        <video style="width: 100%" controls :poster="$imgs['brand/p1/video-img-1']">
                          <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/07sxtaxs4OV4W7U1gaswykB9NozCdTLJNfFRPY0j.mp4">
                        </video>
                      </div>
                      <p>阿贾克斯VS皇马</p>
                    </div>
                    <div class="brand-video-item">
                      <div class="">
                        <video style="width: 100%" controls :poster="$imgs['brand/p1/video-img-2']">
                          <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/7XNXIpsVNlpq03tn8rvuU0OpQ61fTz6shfdRRVqa.mp4">
                        </video>
                      </div>
                      <p>阿贾克斯</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="brand-video">
                    <div class="brand-video-item">
                      <div class="">
                        <video style="width: 100%" controls :poster="$imgs['brand/p1/video-img-3']">
                          <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/S4PWCr6MySLAPsZxXYTITARxQtdHB3ZUn09qT4vQ.mp4">
                        </video>
                      </div>
                      <p>皇马vs阿贾克斯，皇马1-4惨败淘汰</p>
                    </div>
                    <div class="brand-video-item">
                      <div class="">
                        <video style="width: 100%" controls :poster="$imgs['brand/p1/video-img-4']">
                          <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/bcfRXbIIwwNuFwpmGfKTdUKWNMLWeQhJEmw57fre.mp4">
                        </video>
                      </div>
                      <p>热刺-阿贾克斯</p>
                    </div>
                  </div>

                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a4@2x']" alt="">

        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a5@2x']" alt="">
          <div class="brand-block-inner">
            <div class="swiper-container swiper-container02">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in bannerArray">
                  <span>{{item.num}}</span>
                  <img :src="$imgs['brand/p1/player-'+(index+1)+'']" :alt="1">
                </div>
              </div>
            </div>
            <p class="brand-name"><span>{{bannerArray[activeIndex].name}}</span><span>{{bannerArray[activeIndex].eng}}</span></p>
          </div>
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a6@2x']" alt="">
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
          {num:'17',name:'戴利·布林德',eng:'Daley Blind'},
          {num:'11',name:'昆西·普罗姆斯',eng:'Quincy Promes'},
          {num:'15',name:'西姆·德容',eng:'Siem de Jong'},
          {num:'10',name:'杜桑·塔迪奇',eng:'Dušan Tadić'},
          {num:'22',name:'哈基姆·薛耶治',eng:'Hakim Ziyech'}],
        activeIndex:0,
        name:'何塞·路易斯·帕洛米诺',
        eng:'José Luis Palomino',
        brandBvb:[],
        active:0
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
        background-color: #FF7C67;
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
  .picsArray{
    height: 700px;
    img{
      display: block;
      width: 100%;
    }
    p{
      font-size: 24px;
      color: #00499D;
      line-height: 38px;
    }
  }
  .picsArray-items{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    div{
      width: 200px;
      p{
        font-size: 20px;
        color: #666;
        border: 2px solid #DCDCDC;
        border-top: 0;
        text-indent: 0!important;
        padding: 10px;
        margin-top: -4px;
        border-radius: 0 0 12px 12px;
      }
      &.on{
        p{
          border-color: #FF808B;
          color: #FF808B;
        }
      }
    }
  }
</style>

