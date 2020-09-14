
<template>
  <div class="brand-det">
    <div class="main">
      <img class="main-img-full" :src="$imgs['brand/p3/bet_service_banner2@2x']" alt="">
<!--      <div class="swiper-container swiper-container02" id="container02">-->
<!--        <div class="swiper-wrapper">-->
<!--          <div class="swiper-slide" v-for="(item,index) in 4">-->
<!--            <van-image :src="$imgs['brand/p3/jie-lunbo-0'+(index+1)+'']" />-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
<!--        <div class="swiper-pagination"></div>-->
<!--      </div>-->
      <img class="main-img-full" :src="$imgs['brand/p3/jie-lunbo-01']" alt="">
      <img class="brand-title" :src="$imgs['brand/p3/bet_service_text@2x']" alt="">
      <p class="tab-tit"><span :class="active===1?'on':''" @click="tabchange(1)">赞助现场</span><span :class="active===2?'on':''" @click="tabchange(2)">祝福视频</span></p>
      <div class="brand-main">
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p3/bet_brand_image_c1@2x']" alt="">
          <div class="brand-block-inner" v-if="active===1">
            <video style="width: 100%" controls :poster="$imgs['brand/p3/video-img-1']">
              <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/0kW9TfYCyoEE07n3F6STmK9Dx1QLhYEbgcbgNXdu.mp4">
            </video>
            <p></p>
          </div>
          <div class="brand-block-inner" v-else>
            <video style="width: 100%" controls :poster="$imgs['brand/p3/video-img-5']">
              <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/H0l92XNF5LyuybKEOT6UFRXYIwtV8B2JqjBas9Cl.mp4">
            </video>
          </div>
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p3/bet_brand_image_c2@2x']" alt="">
          <div class="brand-block-inner">
            <div class="swiper-container swiper-container01">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in 3">
                  <van-image :src="$imgs['brand/p3/banner0'+(index+1)+'']" />
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>

              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>

            </div>
          </div>
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p3/bet_brand_image_c3@2x']" alt="">
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p3/bet_brand_image_c4@2x']" alt="">
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p3/bet_brand_image_c5@2x']" alt="">
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
        active:1
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
      let that = this;
      // this.onRefresh();
      this.$nextTick(() => {
        new Swiper('#container02',{
          pagination: {
            el: '.swiper-pagination',
            bulletClass : 'my-bullet',//需设置.my-bullet样式
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
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
      },
      tabchange(i){
        this.active = i;
      },
    }
  };
</script>
<style scoped lang="less">
  .brand-det{
    background-size: 100% auto;
    background-repeat: repeat;
    margin-top: 88px;
    background-color: #5F5B8F;
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
        padding: 0 30px 60px;
      }
      .brand-block{
        margin-bottom: 40px;
        position: relative;
        .brand-block-inner{
          position: absolute;
          width: 610px;
          height: 348px;
          top: 100px;
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
      padding: 0 0 28px;
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
      /deep/ .swiper-button-prev,/deep/ .swiper-button-next{
        width: 80px;
        height: 80px;
        background-color: #fff;
        border-radius: 50%;
      }
      .van-image{
        height: 490px;
        text-align: center;
        /deep/ img{
          width: auto;
          display: inline-block;
          vertical-align: top;
        }
      }
    }

    .swiper-container02{
      height: 660px;
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
      .van-image{
        height: 100%;
        text-align: center;
        /deep/ img{
          width: auto;
          display: inline-block;
          vertical-align: top;
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
  .tab-tit{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 60px 0 40px;
    span{
      width:220px;
      height:80px;
      border-radius:40px;
      border:2px solid rgba(255,255,255,1);
      font-size: 28px;
      color: #fff;
      text-align: center;
      line-height: 80px;
      margin: 0 20px;
      &.on{
        background:rgba(55,53,99,1);
        border-color: #373563;
      }
    }
  }
</style>

