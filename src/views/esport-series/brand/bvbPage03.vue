
<template>
  <div class="brand-detail" :style="{backgroundImage:$bImgs['brand/bvb/bet_service_banner_zjj@2x']}">
    <div class="main">
      <div class="title title-top">
        <img class="main-img-full" :src="$imgs['brand/bvb/bet_service_banner_1@2x']" alt="">
        <h2>菲利波·因扎吉形象代言BVB体育</h2>
        <p>2019年5月，BVB体育平台签约菲利波·因扎吉为形象代言人并召开新闻发布会。此次与菲利波·因扎吉的合作，是BVB体育一个全新时代的开端。秉承着“只与优秀合作，提供优质服务”的经营理念，BVB体育将继续为广大体育爱好者提供更多更丰富游戏种类,以及更完善的游戏体验。</p>
      </div>
      <div class="brand-block brand-block02" style="height: auto;padding-bottom: 0">
        <div class="brand-block-inner brand-block-inner01 brand-block-inner02" style="height: auto">
          <video style="width: 100%" controls :poster="$imgs['brand/bvb/bvb02']">
            <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/IXqHB6fIYfn1E8gnBFgwoipZI9ob0nFxxYl02cDt.mp4">
          </video>
        </div>
      </div>
      <div class="brand-block brand-block02" style="padding-bottom: 0">
        <div class="brand-block-inner brand-block-inner01 brand-block-inner02" style="background-color: transparent">
          <div class="swiper-container textSwipe">
            <div class="swiper-wrapper">
              <div class="swiper-slide swiper-no-swiping" v-for="(item,index) in text">
                <p>{{item}}</p>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <div class="brand-block brand-block02" :style="{backgroundImage:$bImgs['brand/bvb/bet_service_bk@2x']}">
        <div class="brand-block-inner brand-block-inner01 brand-block-inner02" style="height: auto">
          <video style="width: 100%" controls :poster="$imgs['brand/bvb/bvb03']">
            <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/BX3OfKaAQBmiqerqD2Yd760j8vTGEejcInDWZK1Z.mp4">
          </video>
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
      text:['总有一个人，会在你的心中，留下深深的烙印。','拥有着你最欢乐的时光。','总有一个人，在你很久不见时，依旧牵挂。','总有一个人，即使离开你的视线，他的面容依旧是你心里最灿烂的阳光。','那是一种心有灵犀的默契，就像一见钟情的恋人。','眼神的初次交会，便注定难以割舍。','从此，他的一举一动牵动着你的视线，带动着你的心跳。','对于很多人，菲利波-因扎吉 就是那个陪伴自己最快乐足球岁月的绿茵恋人。','从相识、相恋，到不忍离别，','当他在圣西罗球场挥手告别，那一刻没有眼泪，因为他留给我们太多美好的记忆。','那一刻回忆如此清晰，如同时光从未老去。','有人说，我们没有见过飞翔的超人，但我们见证过超级皮波的进球。','他的微笑，他的眼神，他的承诺和他的坚定。','也许在不远的日子里，','换一种方式 相伴彼此。','总有一个人，会在你的心中，留下深深的烙印。','拥有着你最欢乐的时光。','总有一个人，在你很久不见时，依旧牵挂。','总有一个人，即使离开你的视线，他的面容依旧是你心里最灿烂的阳光。','那是一种心有灵犀的默契，就像一见钟情的恋人。','眼神的初次交会，便注定难以割舍。','从此，他的一举一动牵动着你的视线，带动着你的心跳。','对于很多人，菲利波-因扎吉 就是那个陪伴自己最快乐足球岁月的绿茵恋人。']
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
      new Swiper('.textSwipe', {
        autoplay:true,
        freeMode: true,
        noSwiping : true,
        direction : 'vertical',
        slidesPerView : 'auto',
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
    padding-top: 336px;
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
  .textSwipe{
    height: 400px;
    background: none;
    .swiper-slide{
      height: auto;
    }
    p{
      text-align: center;
      font-size: 24px;
      color: #333;
      height: 40px;
      line-height: 40px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>

