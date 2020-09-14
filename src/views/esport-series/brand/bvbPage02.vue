
<template>
  <div class="brand-detail" :style="{backgroundImage:$bImgs['brand/bvb/bet_service_banner_dt@2x']}">
    <div class="main">
      <div class="title">
        <h2>德甲多特蒙德亚洲区独家合作伙伴</h2>
        <p>2019年5月，BVB体育平台和德甲多特蒙德俱乐部达成战略合作，本次合作是BVB体育迈向国际化的一大步，也是年轻的BVB体育平台与老牌德甲豪门的一次激情合作。我们的合作目标是提高BVB体育品牌效应并在全球范围内推广德甲联赛。当一支新锐力量致力于打造一流产品、与顶尖合作伙伴、塑造杰出品牌形象，它已准备好向上攀升，主宰未来。相信双方此次的合作定会让彼此的前途更加坦荡无阻、一片光明。</p>
      </div>
      <div class="brand-block">
        <img class="main-img-full" :src="$imgs['brand/bvb/bet_service_image_1@2x']" alt="">
        <div class="brand-block-inner brand-block-inner01">
          <video style="width: 100%" controls :poster="$imgs['brand/bvb/dortmund_video']">
            <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/gtYZw0mDIjdqRL8CUz0HaYzBSWwFFloRS9PqdTPj.mp4">
          </video>
        </div>
      </div>
      <div class="title" style="padding-top: 0">
        <p>多特蒙德足球俱乐部，位于德国北莱茵-威斯特法伦（北威）州多特蒙德市的著名足球俱乐部，绰号“大黄蜂”。二战后崛起的多特蒙德和同处北威州鲁尔工业区（鲁尔区）的沙尔克04之间的比赛因紧邻的地理位置、相同的工人阶层文化而火爆异常 ，被称为“鲁尔区德比（鲁尔德比、矿区德比）”；球队在国内近些年成绩非常好，和拜仁慕尼黑之间的比赛也被不少球迷称作“德国国家德比”。多特蒙德曾获得1次欧洲冠军联赛冠军，1次欧洲优胜者杯冠军，1次丰田杯冠军和8次德国顶级联赛冠军。</p>
      </div>
      <p class="title02">新闻间</p>
      <div class="brand-block">
        <img class="main-img-full" :src="$imgs['brand/bvb/news']" alt="">
      </div>
      <div class="title" style="padding-top: 0">
        <h2>德甲多特蒙德俱乐部官方合作伙伴</h2>
      </div>
      <div class="brand-block brand-block02" :style="{backgroundImage:$bImgs['brand/bvb/bet_service_bk@2x']}">
        <div class="brand-block-inner brand-block-inner01 brand-block-inner02">
          <div class="swiper-container wonderful">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in 5">
                <img :src="$imgs['brand/bvb/new_pic'+(index+1)+'']" alt="">
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

