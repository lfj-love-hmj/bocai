
<template>
  <div class="brand-detail" :style="{backgroundImage:$bImgs['brand/bvb/bet_service_banner@2x']}">
    <div class="main">
      <div class="title title-top">
        <p>携手共进，共创辉煌。专于优秀，精于品牌的BVB体育集团与法甲里昂（Olympique Lyonnais）足球俱乐部签订合作伙伴关系协议。BVB体育成为里昂俱乐部在亚洲地区官方独家投注合作伙伴。本次合作拉开了BVB体育迈向国际市场的序幕，是BVB体育秉承公平、公正的体育宗旨，以更好的服务体验为竞争力，为广大球迷提供高端、一流的投注产品。</p>
      </div>
      <div class="brand-block">
        <img class="main-img-full" :src="$imgs['brand/bvb/bet_service_bg_players@2x']" alt="">
        <div class="brand-block-inner brand-block-inner01">
          <video style="width: 100%" controls :poster="$imgs['brand/bvb/liang']">
            <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/0GgXF43f8U4IUHv2rGOezgpyorEcBS00gRFQMhCF.mp4">
          </video>
        </div>
      </div>
      <div class="brand-block" style="margin-top: -20px">
        <img class="main-img-full" :src="$imgs['brand/bvb/news123']" alt="">
      </div>
      <div class="title" style="padding-top: 0;">
        <h2 style="color: #0B91FB">一荣俱荣，合作共赢，<br>
          BVB体育携手法甲顶级豪门</h2>
      </div>
      <div class="brand-block brand-block02" :style="{backgroundImage:$bImgs['brand/bvb/bet_service_bk1@2x']}">
        <div class="brand-block-inner brand-block-inner01 brand-block-inner02">
          <div class="swiper-container wonderful">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in 4">
                <img :src="$imgs['brand/bvb/0'+(index+1)+'']" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
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
      new Swiper('.wonderful', {
        loop:true,
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
    background-color: #F5F6FA;
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .title{
    padding: 628px 30px 0;
    h2{
      font-size: 40px;
      color: #333;
      text-align: center;
    }
    p{
      font-size: 24px;
      color: #333;
      line-height: 38px;
    }
  }
  .title-top{
    padding-top: 558px;
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
  .main-img-full{
    display: block;
    width: 100%;
  }
  .brand-block-inner01{
    width: 640px;
    height: 380px;
    background-color: #fff;
    padding: 10px;
    top: auto;
    bottom: 48px;
    left: auto;
    right: 20px;
  }
  .title02{
    text-align: center;
    font-size: 32px;
    color: #0B91FB;
    margin: 40px 0 26px;
  }
  .brand-block02{
    padding: 0 30px 100px;
    background-size: 100% auto;
    background-position: center bottom;
    background-repeat: no-repeat;
    margin-bottom: 0;
  }
  .brand-block .brand-block-inner02{
    position: initial;
    height: 498px;
    margin: 0;
    width: 100%;
  }
  .wonderful{
    height: 100%;
    img{
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
</style>

