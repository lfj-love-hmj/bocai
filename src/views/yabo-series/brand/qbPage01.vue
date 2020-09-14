
<template>
  <div class="brand-det" :style="{backgroundImage:$bImgs['brand/p1/bet_brand_image_background@2x']}">
    <div class="main">

<!--      <div class="swiper-container swiper-container02" id="container02">-->
<!--        <div class="swiper-wrapper">-->
<!--          <div class="swiper-slide" v-for="(item,index) in 4">-->
<!--            <van-image :src="$imgs['brand/p1/banner1_bg'+(index+1)+'']" />-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
<!--        <div class="swiper-pagination"></div>-->
<!--      </div>-->
      <img class="main-img-full" :src="$imgs['brand/p1/banner1_bg1']" alt="">
      <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_title@2x']" style="margin: 20px auto;width: 304px" alt="">
      <div class="brand-main">
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a1@2x']" alt="">
          <div class="brand-block-inner">
            <img class="main-img-full" :src="$imgs['brand/p1/banner2']" alt="">
            <p style="text-indent: 0;margin-top: 10px">赞助活动：2020年1月5日</p>
            <p style="text-indent: 0">奇博体育（YABOSPORTS）成为曼联足球俱乐部的全球官方合作伙伴，双方将致力于推动奇博的全球化发展，开创体育娱乐新盛世。<br>
              曼联是世界上最受欢迎且最成功的足球俱乐部之一，奇博体育是亚洲体育娱乐的行业领跑者。共同的品牌理念与企业精神是双方合作的基础，奇博体育将借助曼联在全球的超高人气，进一步提升其国际影响力。
            </p>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a2@2x']" alt="">
          <div class="brand-block-inner brand-block-scroll">
            <van-image v-for="(item,index) in 4" :key="index" :src="$imgs['brand/p1/banner2_'+(index+1)+'']" />
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a3@2x']" alt="">
          <div class="brand-block-inner">
            <img class="main-img-full" :src="$imgs['brand/p1/img']" alt="">
            <p style="text-indent: 0;margin-top: 10px">曼联足球俱乐部和奇博体育于2019年9月16日联合宣布合作，奇博体育成为俱乐部的全球官方合作伙伴。
              奇博体育作为亚洲体育娱乐的领航者，以专业的技术团队、精彩的体育赛事和极致的游戏体验，收获了成百上千万忠实粉丝用户。此次奇博与曼联强强联手，将共同诠释“缔造伟业”的精神使命，为球迷呈现全球顶级体育赛事及多元化互动娱乐体验。
            </p>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a4@2x']" alt="">
          <div class="brand-block-inner">
            <img class="main-img-full" :src="$imgs['brand/p1/img02']" alt="">
            <p style="color: #B1987F;text-align: center;text-indent: 0;margin-top: 15px">曼联全球官方合作伙伴——奇博体育</p>
            <p style="text-indent: 0;margin: 10px 0">奇博体育代表Dean Hawkes与曼联领导Aidan Flynn在台上合影。</p>
            <div class="brand-block-scroll">
            <div class="lists" v-for="(item,index) in banners">
              <van-image :src="$imgs['brand/p1/banner4_'+(index+1)+'']" />
              <p>{{item.tit}}</p>
            </div>
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a5@2x']" alt="">
          <div class="brand-block-inner">
            <video style="width: 100%" controls :poster="$imgs['brand/p1/video-img-1']">
              <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/lRkfNzM4Z8dxWt2J1ImsOnsvqFqakrxlCoeTy6Gi.mp4">
            </video>
            <p style="color: #B1987F;text-decoration: underline;margin-top: 10px">官宣：奇博体育签约成为英超霸主曼联的全球赞助商</p>
          </div>
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a6@2x']" alt="">
          <div class="brand-block-inner brand-block-scroll" style="top: auto;bottom: 25px;top: 60px">
            <div class="lists">
              <video style="width: 100%" controls :poster="$imgs['brand/p1/video-img-2']">
                <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/kr5Q9TaIkuvhl4q3H8e1N9Wi6R5gvcZX4d8KnP6M.mp4">
              </video>
              <p>卢克肖精彩集锦</p>
            </div>
            <div class="lists">
              <video style="width: 100%" controls :poster="$imgs['brand/p1/video-img-3']">
                <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/w8XusBzpCylFpewlQ03h06qpSnFQyujpbPiN2zMB.mp4">
              </video>
              <p>曼 联 传 奇</p>
            </div>
            <div class="lists">
              <video style="width: 100%" controls :poster="$imgs['brand/p1/video-img-4']">
                <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/kxvLYXmEjzTtqqmTyD55Yjw60klYwvfZZK7MULUY.mp4">
              </video>
              <p>曼联19_20赛季英超66球全记录</p>
            </div>
            <div class="lists">
              <video style="width: 100%" controls :poster="$imgs['brand/p1/video-img-5']">
                <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/yey96lmQfIbUaiAiDlKrgzNtxwl2rpABTbLngHuF.mp4">
              </video>
              <p>英雄迟暮</p>
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a7@2x']" alt="">
          <div class="brand-block-inner">
            <img  class="main-img-full" :src="$imgs['brand/p1/img03']" alt="">
            <p style="text-align: center;color: #B1987F;margin-top: 15px">老特拉福德球场场边展示奇博体育LOGO及标语</p>
          </div>
        </div>
        <div class="brand-block">
          <div class="brand-block-scroll">
            <van-image v-for="(item,index) in 3" :key="index" :src="$imgs['brand/p1/banner6_'+(index+1)+'']" alt="" />
          </div>
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a8@2x']" alt="">
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a9@2x']" alt="">
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
        active:0,
        banners:[{tit:'曼联领导和传奇球星拿着印有奇博名字的球衣。'},{tit:'曼联传奇球星和双方领导互相赠送纪念品。'},{tit:'曼联领导和传奇球星拿着印有奇博名字的球衣。'},{tit:'奇博体育和曼联双方高层、曼联传奇球星在会场合影留念。'},]
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
        new Swiper('#container02', {
          pagination: {
            el: '.swiper-pagination',
            bulletClass : 'my-bullet',//需设置.my-bullet样式
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
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
    background-size: 100% 100%;
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
        padding: 0 30px 60px;
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
  .brand-block-scroll{
    overflow-x: auto;
    font-size: 0;
    white-space: nowrap;
    height: 260px!important;
    .van-image{
      height: 100%;
      display: inline-block;
      vertical-align: top;
      width: 260px;
      margin-right: 30px;
      overflow: hidden;
      position: relative;
      box-shadow:0px 6px 30px 0px rgba(0,34,80,0.1);
      /deep/ img{
        width: auto;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top:0 ;
      }
    }
  }
  .lists{
    display: inline-block;
    vertical-align: middle;
    box-shadow:0px 6px 30px 0px rgba(0,34,80,0.1);
    width: 260px;
    margin-right: 20px;
    .van-image{
      height: 165px;
    }
    p{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 20px;
      color: #333;
      text-indent: 0!important;
      padding: 0 10px;
    }
  }
</style>

