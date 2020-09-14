<template>
  <div class="detailPage">
<!--    <div class="swiper-container swiper-container01">-->
<!--      <div class="swiper-wrapper">-->
<!--        <div class="swiper-slide" v-for="(item,index) in 3">-->
<!--          <van-image :src="$imgs['brand/p2/banner'+(index+1)+'']" />-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
<!--      <div class="swiper-pagination"></div>-->
<!--    </div>-->
    <img class="main-img-full" :src="$imgs['brand/p2/banner1']" alt="">
    <div class="main">
      <h2 class="detailPage-title">代言视频</h2>
      <video v-if="active===0" style="width: 100%" controls :poster="$imgs['brand/p2/shipin1@2x']">
        <source :src="$imgs['brand/p2/signVideo']">
      </video>
      <video v-else style="width: 100%" controls :poster="$imgs['brand/p2/1']">
        <source :src="$imgs['brand/p2/1']">
      </video>
      <p class="detailPage-text-tit">跨界合作</p>
      <p class="detailPage-text">西宝娱乐于2020年2月20日，正式签约张信哲为西宝品牌独家代言人。双方签下了为期1年的合作协议，共促彼此品牌价值提升。从青春懵懂到成熟睿智，带给了我们许多温暖与力量的阿哲，在追求音乐的道路上始终保持着真挚的初心。此次西宝娱乐选择张信哲作为代言人，正是因为他对音乐的完美追求，恰恰符合西宝娱乐“极致娱乐体验”的品牌信念。此次双方的跨界合作，一定会在2020年迸发出不一样的火花，共同开创娱乐新纪元。</p>
      <div class="swiper-container swiper-container02">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :class="active===index?'on':''" v-for="(item,index) in competitions" @click="showVideo(index)">
            <van-image :src="$imgs['brand/p2/videoItem'+index+'']" />
            <p>{{item.tit}}</p>
          </div>
          <div class="swiper-slide">
            <van-image :src="$imgs['brand/p2/videoItem']" />
            <p>敬请期待</p>
          </div>
        </div>
      </div>
      <h2 class="detailPage-title">情歌王子</h2>
      <p class="detailPage-text">张信哲（英文名：JeffChang），迄今为止唯一一位被整个华语乐坛公认的“情歌王子”。</p>
      <p class="detailPage-text">在90年代与叱咤华语乐坛的“四大天王”齐名，以其独特温柔的嗓音和细腻多元的情歌征服了整个华语圈。以高亢温柔的嗓音、诚挚动人的声线，歌唱出了一个令人沉醉的情歌世界。</p>
      <img :src="$imgs['brand/p2/bet_brand_image_a2@2x']" style="margin-top: 14px" class="full-img" alt="">
      <ul class="singer-info">
        <li>1995年推出专辑《宽容》</li>
        <li>1996年凭着专辑《宽容》获得第7届台湾金曲奖最佳国语男歌手奖，并推出专辑《思念》</li>
        <li>1997年推出专辑《挚爱》</li>
        <li>1998年推出专辑《直觉》</li>
        <li>2000年获得中央人民广播电台中国流行歌曲榜台湾地区最受欢迎歌手奖</li>
        <li>2003年获得首届中国原创歌曲奖台湾地区男歌手奖</li>
        <li>2010年推出专辑《初》，同年获得第十六届新加坡金曲奖中的流行乐坛荣誉大奖</li>
        <li>2016年4月，荣获第16届音乐风云榜年度盛典最佳青春影响力音乐人物大奖</li>
      </ul>

      <div class="youngBg">
        <img :src="$imgs['brand/p2/youngBg']" class="full-img" alt="">
        <h2 class="detailPage-title">青春BGM</h2>
        <ul class="youngList" id="youngList">
          <li class="youngItem" :class="active02===0?'on':''">
            <img :src="$imgs['brand/p2/young1']" alt="">
            <img :src="$imgs['brand/p2/youngA1']" alt="">
          </li>
          <li class="youngItem" :class="active02===1?'on':''">
            <img :src="$imgs['brand/p2/young2']" alt="">
            <img :src="$imgs['brand/p2/youngA2']" alt="">
          </li>
          <li class="youngItem" :class="active02===2?'on':''">
            <img :src="$imgs['brand/p2/young3']" alt="">
            <img :src="$imgs['brand/p2/youngA3']" alt="">
          </li>
          <li class="youngItem" :class="active02===3?'on':''">
            <img :src="$imgs['brand/p2/young4']" alt="">
            <img :src="$imgs['brand/p2/youngA4']" alt="">
          </li>
        </ul>
      </div>
      <div class="swiper-container swiper-container03">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <p class="detailPage-text-tit">滚石时代（1988－1995）</p>
            <p class="detailPage-text">《爱如潮水》华语歌坛的经典之作，这首曲风哀婉的情歌不仅将张信哲的歌唱事业推向巅峰，也奠定了张信哲独特的情歌风格。</p>
          </div>
          <div class="swiper-slide">
            <p class="detailPage-text-tit">EMI时代（1995－1997）</p>
            <p class="detailPage-text">1995年推出的《宽容》专辑，《过火》、《宽容》、《不要对他说》等全部成为代表作品，这张专辑也让他拿到了港台新地区诸多音乐奖项，包括台湾金曲奖最佳国语男歌手奖。</p>
          </div>
          <div class="swiper-slide">
            <p class="detailPage-text-tit">新力时代（1997－2005）</p>
            <p class="detailPage-text">《爱就一个字》“哲式”佳作的代表歌曲，深情款款，洋溢着一片殷殷真情。张信哲以其清澈而明亮的独特嗓音演绎，唱功纯熟，歌声高亢、清亮，温暖感动了无数观众。</p>
          </div>
          <div class="swiper-slide">
            <p class="detailPage-text-tit">独立制作时代（2006-至今）</p>
            <p class="detailPage-text">《歌时代Ⅱ》与莫斯科交响乐团近百人联合演出，国际级的规格制作完成的『歌时代Ⅱ』黑胶唱片经典盘，希望同时回归单纯美好的声音聆听时空，向每一个时代流行音乐经典致敬。</p>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

      <h2 class="detailPage-title">照片图集</h2>
      <img :src="$imgs['brand/p2/bet_brand_image_a4@2x']" class="full-img" alt="">
      <div class="imgs-wrap">
        <van-image v-for="(item,index) in 4" :src="$imgs['brand/p2/photo'+(index+1)+'']" />
      </div>
      <h2 class="detailPage-title">业内最顶尖的原生APP</h2>
      <p class="detailPage-text" style="text-indent: 0">触手可及的信息，从指尖到脑海，存取转安全便捷。 <br>棋牌，彩票，真人投注一手掌握。</p>
      <img :src="$imgs['brand/p1/bet_brand_image_a5@2x']" style="margin-top: 14px" class="full-img" alt="">
      <h2 class="detailPage-title">媒体报道</h2>
      <img :src="$imgs['brand/p1/banner01']" class="full-img" alt="">
      <p class="detailPage-text">北京时间2019年10月7日，亚洲娱乐游戏平台西宝娱乐与西甲豪门瓦伦西亚足球俱乐部(Valencia Club de Fútbol)在瓦伦西亚会展中心召开了官方合作发布会。双方在会上达成了合作共识：自2019-2020赛季开始，西宝娱乐将成为瓦伦西亚足球俱乐部亚洲区域合作伙伴。未来，双方将致力于发展共赢的世界——为广大玩家提供更多精彩纷呈的娱乐服务，共同诠释“极致娱乐”的品牌主张。</p>
      <img :src="$imgs['brand/p1/bet_brand_image_a9@2x']" style="margin-top: 14px" class="full-img" alt="">
      <div class="totop" @click="toTop">
        <img :src="$imgs['brand/p1/top@2x']" alt="">
        <span>回到顶部</span>
      </div>
    </div>

  </div>
</template>

<script>
  import "swiper/dist/css/swiper.css";
  import { Swiper } from "vue-awesome-swiper";
  export default {
    name: "xbPage01",
    data () {
      return {
        competitions:[
            {tit:'张信哲西宝娱乐代言人'},
          {tit:'张信哲西宝真人代言人'}],
        videobox:false,
        active:0,
        active02:0
      };
    },
    created() {
      let that = this
      this.$nextTick(() => {
        new Swiper('.swiper-container01', {
          pagination: {
            el: '.swiper-pagination',
            bulletClass: 'my-bullet',//需设置.my-bullet样式
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        })
        new Swiper('.swiper-container02', {
          freeMode:true,
          slidesPerView: 'auto',
          spaceBetween: 14,
        })
        new Swiper('.swiper-container03', {
          pagination: {
            el: '.swiper-pagination',
            bulletClass: 'my-bullet',//需设置.my-bullet样式
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          on: {
            slideChange: function () {
              that.active02 = this.activeIndex
            }
          }
        })
      })
    },
    methods:{
      showVideo(i){
        this.active = i;
      },
      toTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      },
    }
  }
</script>

<style scoped lang="less">
.full-img{
  display: block;
  width: 100%;
}
  .detailPage{
    background-color: #fff;
    overflow: hidden;
  }
  .swiper-container01{
    height: 424px;
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
  }
  .main{
    padding: 0 28px;
  }
  .detailPage-title{
    font-size: 28px;
    color: #333;
    border-left: 4px solid #333;
    padding-left: 10px;
    margin: 40px 0 32px 0;
    font-weight: bold;
  }
  .detailPage-text{
    font-size: 24px;
    color: #333;
    line-height: 42px;
    margin-top: 40px;
    text-indent: 2em;
  }
  .swiper-container02{
    margin: -20px -30px;
    .swiper-wrapper{
      padding: 40px 30px;
    }
    .swiper-slide{
      width: 256px;
      border-radius: 12px;
      box-shadow:0px 6px 30px 0px rgba(0,34,80,0.1);
      position: relative;
      &.on p{
        background-color: #7a8efd;
        color: #fff;
      }
      .play-btn{
        width: 68px;
        position: absolute;
        top: 50px;
        left: 50%;
        margin-left: -34px;
      }
      .van-image{
        height: 165px;
        border-radius: 12px 12px 0 0;
        overflow: hidden;
      }
      p{
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        color: #333;
        padding: 0 10px;
        border-radius: 0 0 12px 12px;
      }
    }
  }
  .detailPage-text-tit{
    font-size: 32px;
    color: #333;
    margin: 60px 0 30px;
    font-weight: bold;
  }
  .totop{
    padding: 50px 0;
    text-align: center;
    img{
      width: 22px;
    }
    span{
      display: block;
      font-size: 24px;
      color: #999;
      margin-top: 10px;
    }
  }
  .van-dialog{
    padding: 0;
    background-color: transparent;
  }
  .swiper-container03{
    margin-bottom:60px;
    padding-bottom: 60px;
    .swiper-pagination-bullets{
      bottom: 10px;
    }
    /deep/ .my-bullet {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 10px;
      border-radius: @border-radius-5px;
      border: 1px solid #C3C9DB;
      opacity: .4;

    }
    /deep/ .swiper-pagination-bullet-active {
      opacity: 1;
      width: 20px;
      background-color: #C3C9DB;
    }
    /deep/ .swiper-pagination{
      width:100%;
      height:12px;
    }
    .swiper-slide{
      font-size: 0;
      div{
        display: inline-block;
        vertical-align: top;
        width: 25%;
        text-align: center;
        border-right: 2px solid #dedede;
        padding: 0 10px;
        &:last-child{
          border-right: 0;
        }
        img{
          width: 100px;
        }
        span{
          display: block;
          text-align: center;
          color: rgb(254, 160, 116);
          font-weight: bold;
          font-size: 36px;
        }
        p{
          color: rgb(51, 51, 51);
          text-align: center;
          font-size: 24px;
          margin-top: 10px;
        }
      }
    }
  }
  .singer-info{
    margin-top: 28px;
    li{
      font-size: 24px;
      color: #8395A6;
      line-height: 42px;
      padding-left: 36px;
      position: relative;
      &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 14px;
        width:16px;
        height:16px;
        background:rgba(195,201,219,1);
        border-radius: 50%;
      }
    }
  }
  .imgs-wrap{
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 20px;
    .van-image{
      width: 256px;
      margin-right: 20px;
    }
  }
  .youngBg{
    margin: 30px -28px 0;
    position: relative;
    height: 588px;
    h2{
      color: #fff;
      border-left-color: #fff;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 28px;
    }
    ul{
      position: absolute;
      z-index: 2;
      left: 28px;
      top: 100px;
    }
    .youngItem{
      margin-bottom: 20px;
      img{
        width: 300px;
        &:first-child{
          display: block;
        }
        &:last-child{
          display: none;
        }
      }
      &.on img{
        &:first-child{
          display: none;
        }
        &:last-child{
          display: block;
        }
      }
    }
  }
</style>
