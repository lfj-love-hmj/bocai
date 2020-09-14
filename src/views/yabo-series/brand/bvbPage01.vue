
<template>
  <div class="brand-detail" :style="{backgroundImage:$bImgs['brand/bvb/bet_brand_bg1@2x']}">
    <div class="main">
      <img class="main-img-full" :src="$imgs['brand/bvb/brand_banner@2x']" alt="">
      <img class="brand-title" :src="$imgs['brand/bvb/brand_title@2x']" alt="">
      <div class="brand-main">
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/bvb/brand_bg1@2x']" alt="">
          <div class="brand-block-inner">
            <video style="width: 100%" controls :poster="$imgs['brand/bvb/title_01_newpic']">
              <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/E25DC6BFEmyaje9zW0aZSTZQ3LXHQUwjPBrnqVw7.mp4">
            </video>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/bvb/brand_title2@2x']" alt="">
          <div class="brand-block-inner">
            <div class="swiper-container wonderful">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in 4">
                  <img :src="$imgs['brand/bvb/wonderful_0'+(index+1)+'']" alt="">
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/bvb/brand_title4@2x']" alt="">
        </div>
        <div class="brand-block">
          <img  class="main-img-full" :src="$imgs['brand/bvb/brand_title5@2x']" alt="">
          <div class="brand-block-inner" style="height: 100%">
            <div class="swiper-container picsArray">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in 3">
                  <img style="width: 100%" :src="$imgs['brand/bvb/bet_brand_image_a4.'+(index+1)+'@2x']" alt="">
                </div>
              </div>
            </div>
            <div class="picsArray-items">
              <div :class="active===0?'on':''">
                <img style="width: 100%" :src="$imgs['brand/bvb/bet_brand_image_a4.1@2x']" alt="">
                <p>2019年12月12日，BVB体育与 意甲那不勒斯俱…</p>
              </div>
              <div :class="active===1?'on':''">
                <img style="width: 100%" :src="$imgs['brand/bvb/bet_brand_image_a4.2@2x']" alt="">
                <p>那不勒斯俱乐部代表人现场于足球与球衣上签字并…</p>
              </div>
              <div :class="active===2?'on':''">
                <img style="width: 100%" :src="$imgs['brand/bvb/bet_brand_image_a4.3@2x']" alt="">
                <p>BVB体育与那不勒斯俱乐部代 表人采访环节发…</p>
              </div>
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/bvb/brand_title6@2x']" alt="">
          <div class="brand-block-inner">
            <div class="swiper-container brand-players">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in 5">
                  <img :src="$imgs['brand/bvb/bet_brand_image_a5.'+(index+1)+'@2x']" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/bvb/brand_title7@2x']" alt="">
          <div class="brand-block-inner">
            <div class="swiper-container wonderful02">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in 4">
                  <img :src="$imgs['brand/bvb/wonderful_0'+(index+1)+'']" alt="">
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-slide-thumbs">
              <img v-for="(item,index) in 4" :src="$imgs['brand/bvb/wonderful_0'+(index+1)+'']" alt="">
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/bvb/brand_title8@2x']" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import "swiper/dist/css/swiper.css";
import { Swiper } from "vue-awesome-swiper";
export default {
  name: 'Brand',
  data () {
    return {
      title: '',
      bannerArray:[
        {num:'06',name:'何塞·路易斯·帕洛米诺',eng:'José Luis Palomino'},
        {num:'04',name:'博什科·舒塔洛',eng:'Boško Šutalo'},
        {num:'02',name:'拉斐尔·托洛伊',eng:'Rafael Toloi'},
        {num:'21',name:'蒂莫西·卡斯塔涅',eng:'Timothy Castagne'},
        {num:'08',name:'罗宾·戈森斯',eng:'Robin Gosens'}],
      activeIndex:0,
      bannerArray02:[
        {num:'14',name:'达尼·加西亚',eng:'Daniel Garcia'},
        {num:'10',name:'伊克尔·穆尼亚因',eng:'Iker Muniain'},
        {num:'06',name:'米克尔·多明戈斯',eng:'Mikel Vesga'},
        {num:'22',name:'劳尔·加西亚·埃斯库德罗',eng:'Raul Garcia Escudero'},
        {num:'03',name:'乌奈·努涅斯',eng:'Unai Núñez'}],
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
      this.title = this.brandBvb[this.$route.query.id*1-1].tit
    }
    let that = this;
    // this.onRefresh();
    this.$nextTick(() => {
      new Swiper('.brand-players', {
        slidesPerView: 4.2,
        spaceBetween: 6,
        freeMode: true
      });
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
      new Swiper('.picsArray', {
        autoplay:true,
        on: {
          slideChange: function () {
            that.active = this.activeIndex;
          },
        },
      });
      new Swiper('.wonderful02', {
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    })
  },
  methods: {
  }
};
</script>
<style scoped lang="less">

  .brand-detail{
    background-position: center top;
    background-size: 100% auto;
    /deep/ .van-nav-bar__title{
      font-weight: bold;
    }
    .main{
      padding: 0;
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
        padding: 0 10px 190px;
      }
      .brand-block{
        margin-bottom: 8px;
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
      .brand-players img{
        width: 140px;
      }
      .wonderful{
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
          border:2px solid rgba(11,145,251,1);
          background: none;
          opacity: 1;
        }
        /deep/ .swiper-pagination-bullet-active{
          width:20px;
          height:12px;
          background:rgba(11,145,251,1);
          border-radius:6px;
        }
      }
      .picsArray{
        height: 300px;
        img{
          display: block;
          height: 100%;
        }
      }
      .picsArray-items{
        margin-top: 220px;
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
            text-indent: 0;
            padding: 10px;
            margin-top: -4px;
            border-radius: 0 0 12px 12px;
          }
          &.on{
            p{
              border-color: #0B91FB;
              color: #0B91FB;
            }
          }
        }
      }
      .wonderful02{
        height: 495px;
        img{
          display: block;
          width: 100%;
        }
        /deep/ .swiper-pagination-bullet{
          width:12px;
          height:12px;
          border:2px solid rgba(11,145,251,1);
          background: none;
          opacity: 1;
        }
        /deep/ .swiper-pagination-bullet-active{
          width:20px;
          height:12px;
          background:rgba(11,145,251,1);
          border-radius:6px;
        }
      }
      .swiper-slide-thumbs{
        position: absolute;
        top: 380px;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        img{
          width: 142px;
          display: inline-block;
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
    .swiper-container{
      height: 100%;
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

