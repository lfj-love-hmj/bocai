
<template>
  <div class="brand-det" :style="{backgroundImage:$bImgs['brand/p1/bet_brand_image_background@2x']}">
    <div class="main">
      <img class="main-img-full" :src="$imgs['brand/p1/bet_service_banner@2x']" alt="">
      <img class="brand-title" :src="$imgs['brand/p1/bet_brand_image_title@2x']" alt="">
      <div class="brand-main">
<!--        <div class="brand-block">-->
<!--          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a1@2x']" alt="">-->
<!--        </div>-->
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a1@2x']" alt="">
          <div class="brand-block-inner">
            <video style="width: 100%" controls :poster="$imgs['brand/p1/video-img-5']">
              <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/cmOZAwMTMROR6eKm25jTsAXCxKmj1OyzYD8MQ9dL.mp4">
            </video>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a3@2x']" alt="">
          <div class="brand-block-inner" style="height: 100%">
            <div class="swiper-container picsArray">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img style="width: 100%" :src="$imgs['brand/p1/bet_brand_image_a3.1@2x']" alt="">
                  <p>2018年国际足联世界杯决赛于2018年7月15日当地时间下午6时在俄罗斯莫斯科卢日尼基体育场举行，以决出2018年国际足联世界杯的冠军归属。比赛由法国对克罗地亚，这是世界杯历史上第9次由两支欧洲球队争夺冠军。同时，这是法国继1998年和2006年后再次晋级决赛，而克罗地亚方面，这是他们第五次参与世界杯和首次出线决赛。在四强淘汰英格兰后，他们成为欧洲第10支和世界第13支成功晋级世界杯决赛的球队。</p>
                </div>
                <div class="swiper-slide">
                  <img style="width: 100%" :src="$imgs['brand/p1/bet_brand_image_a3.2@2x']" alt="">
                  <p>克罗地亚的成功背后有秘密吗？是否有一个闻所未闻的“克罗地亚模式”能够成功培养出像莫德里奇这样的球员？不幸的是，答案是否定的。克罗地亚体育记者米霍威尔·托比奇告诉新华社记者：“我不觉得它背后有一个模式。有很多理由能够解释这一成就，但‘克罗地亚模式’不是其中之一。我相信遗传学起着重要作用。这个国家的人们在运动基因方面非常强大，对足球非常有天赋。”托比奇指出，在克罗地亚登上成功的阶梯非常困难，而体育运动是其中的捷径之一。</p>
                </div>
                <div class="swiper-slide">
                  <img style="width: 100%" :src="$imgs['brand/p1/bet_brand_image_a3.3@2x']" alt="">
                  <p>克罗地亚队在2018年世界杯上取得了优秀的成绩，这一批克罗地亚黄金一代的班底在并不是很被看好的情况下获得了世界杯亚军。面对即将到来的2020年欧洲杯，格子军团肯定想将这一势头延续下去。但是他们在在2018年秋季开始的欧洲国家联赛A级D组的比赛中表现却不尽人意，克罗地亚以1胜1平2负积4分位列小组第三，最后一场1-2不敌英格兰，将降入欧洲B级。本场比赛面对实力远不及自己的阿塞拜疆，格子军团肯定力求胜利，让自己在小组中占得先机。</p>
                </div>
              </div>
            </div>
            <div class="picsArray-items">
              <div :class="active===0?'on':''">
                <img style="width: 100%" :src="$imgs['brand/p1/bet_brand_image_a3.1@2x']" alt="">
                <p>2018年国际足联世界杯决赛于2018年7月15…</p>
              </div>
              <div :class="active===1?'on':''">
                <img style="width: 100%" :src="$imgs['brand/p1/bet_brand_image_a3.2@2x']" alt="">
                <p>克罗地亚的成功背后有秘密吗？是否有一个…</p>
              </div>
              <div :class="active===2?'on':''">
                <img style="width: 100%" :src="$imgs['brand/p1/bet_brand_image_a3.3@2x']" alt="">
                <p>克罗地亚队在2018年世界杯上取得了优…</p>
              </div>
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a4@2x']" alt="">
          <div class="brand-block-inner">
            <div class="swiper-container swiper-container02">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in bannerArray">
                  <img :src="$imgs['brand/p1/web_qiuyuan0'+(index+1)+'']" :alt="1">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a5@2x']" alt="">

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
          slidesPerView: 4.2,
          spaceBetween: 6,
          freeMode: true
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
        new Swiper('.picsArray', {
          autoplay:true,
          on: {
            slideChange: function () {
              that.active = this.activeIndex;
            },
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

    .swiper-container02{
      img{
        width: 156px;
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

