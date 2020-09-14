
<template>
  <div class="brand-det">
    <div class="main">
<!--      <div class="swiper-container swiper-container02" id="container02">-->
<!--        <div class="swiper-wrapper">-->
<!--          <div class="swiper-slide" v-for="(item,index) in 4">-->
<!--            <van-image :src="$imgs['brand/p2/topbanner-0'+(index+1)+'']" />-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
<!--        <div class="swiper-pagination"></div>-->
<!--      </div>-->
      <img class="main-img-full" :src="$imgs['brand/p2/Topbanner-01']" alt="">
      <img class="brand-title" :src="$imgs['brand/p1/bet_brand_image_title@2x']" alt="">
      <div class="brand-main">
<!--        <div class="brand-block">-->
<!--          <img class="main-img-full" :src="$imgs['brand/p1/bet_brand_image_a1@2x']" alt="">-->
<!--        </div>-->
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b1@2x']" alt="">
          <div class="brand-block-inner">
            <video style="width: 100%" controls :poster="$imgs['brand/p2/main']">
              <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/O2wkQp5xRLVFuJdRxweNV3j006XdFjjH1dN69QDS.mp4">
            </video>
            <p style="margin: 10px 0">签约时间：2020年1月5日</p>
            <p>奇博体育正式成为德甲豪门拜仁慕尼黑的亚洲区赞助商，此次的合作，是奇博体育品牌迈向国际化的重要一步。</p>
             <p style="margin-top: 10px">拜仁是德国足球的旗帜，也是世界最有影响力的球会之一，成功联手世界级豪门，看出奇博体育在未来推动品牌全球化的信心和决心。</p>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b2@2x']" alt="">
          <div class="brand-block-inner brand-block-scroll" style="bottom: 25px;top: 60px">
            <div class="lists">
              <video style="width: 100%" controls :poster="$imgs['brand/p2/bairen-02-02']">
                <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/SqI7kUGFCOGyt63aXzG6dJKpQuOnLkADLSzIEUR9.mp4">
              </video>
              <p>AC米兰2-0拜仁慕尼黑</p>
            </div>
            <div class="lists">
              <video style="width: 100%" controls :poster="$imgs['brand/p2/bairen-02-03']">
                <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/v1FPXAcSc2wsUhiiQTI3Q3VuIG9udn0ysuv7h3nh.mp4">
              </video>
              <p>拜仁慕尼黑(德甲) 1-0 馬賽(法甲)</p>
            </div>
            <div class="lists">
              <video style="width: 100%" controls :poster="$imgs['brand/p2/bairen-02-04']">
                <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/hE3qomRz35DPi14YsnY84ORIIyr18bZA5v3eV6u9.mp4">
              </video>
              <p>拜仁慕尼黑3：1热刺</p>
            </div>
            <div class="lists">
              <video style="width: 100%" controls :poster="$imgs['brand/p2/bairen-02-05']">
                <source src="https://wq-app.oss-accelerate.aliyuncs.com/app/xTjkghaCa1405MZQ37pS65ahn4Zzf5LRF34ZPSII.mp4">
              </video>
              <p>拜仁慕尼黑德甲八连冠 历史捧杯精彩瞬间</p>
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b3@2x']" alt="">
          <div class="brand-block-inner">
            <img class="main-img-full" :src="$imgs['brand/p2/img01']" alt="">
            <p style="margin-top: 10px">2019年8月29日，拜仁慕尼黑足球俱乐部宣布：<br>2019/20赛季起奇博体育（QIBOSPORTS）正式成为拜仁慕尼黑俱乐部亚洲区赞助商。双方致力于联袂打造一线体育品牌，为球迷朋友们提供全球顶级体育赛事。奇博体育以其专业的技术团队、精彩的体育赛事和极致的游戏体验而广受业界好评，一跃成为亚洲体育娱乐的领航者。加之人性化的管理理念、中坚卓越的企业文化和专业强大的技术团队，奇博体育在短期内与多家国际著名联赛和球队达成战略合作，其知名度可谓扶摇直上。而与拜仁慕尼黑的合作加快了奇博体育的国际化进程，奇博体育品牌誉满全球。
            </p>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b4@2x']" alt="">
          <div class="brand-block-inner ">
            <img class="main-img-full" :src="$imgs['brand/p2/img02']" alt="">
            <p style="color: #B1987F;text-align: center;margin: 20px 0 10px">德甲冠军拜仁慕尼黑与著名体育公司奇博体育签约成功</p>
            <p>2019/20赛季开始，奇博体育成为拜仁足球俱乐部的亚洲合作赞助商。当日，拜仁的亚太区Managing
              Director Rouven Kasper 和奇博的代表 Dean Hawkes握手签约。
            </p>
            <div class="brand-block-scroll" style="margin-top: 10px">
              <div class="lists" v-for="(item,index) in banners">
                <van-image :src="$imgs['brand/p2/bairen-03-0'+(index+2)+'']" />
                <p style="white-space: normal">{{item.tit}}</p>
              </div>
            </div>

          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b5@2x']" alt="">
          <div class="brand-block-inner ">
            <img class="main-img-full" :src="$imgs['brand/p2/img03']" alt="">
            <p style="color: #B1987F;margin: 5px 0 0">官宣：奇博体育签约成为德甲霸主拜仁慕尼黑的亚洲区赞
              助商
            </p>
          </div>
        </div>
        <div class="brand-block brand-block02">
          <div class="brand-block-scroll">
            <div class="lists" v-for="(item,index) in banners02">
              <van-image :src="$imgs['brand/p2/bairen-04-0'+(index+2)+'']" />
              <p>{{item.tit}}</p>
            </div>
          </div>
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b7@2x']" alt="">
        </div>
        <div class="brand-block">
          <img class="main-img-full" :src="$imgs['brand/p2/bet_brand_image_b8@2x']" alt="">
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
        banners:[
            {tit:'奇博体育代表Dean Hawkes宣布双方达成战略合作关系。'},
          {tit:'前世界足球先生，前德国队队长马特乌斯在球衣上签名。'},
          {tit:'传奇球星马特乌斯出席发布会并在木板签名留念。'},
          {tit:'主持人采访昔日的德甲巨星马特乌斯。'},
          {tit:'奇博体育和曼联双方高层、奇博体育和拜仁双方的代表、马特乌斯上台合影。'},
          {tit:'主持人现场采访昔日足坛巨星 马特乌斯'},
          {tit:'前世界足球先生、前德国队队长马特乌斯在球衣上签名'},
          {tit:'全球见证，拜仁与亚博的双方代表在签约仪式上动笔签约'},
          {tit:'签约发布会现场，球星、名人云集'},
          {tit:'奇博体育和拜仁双方的代表、马特乌斯在会场合影留念'},
        ],
        banners02:[
          {tit:'独家：拜仁慕尼黑官方微信报道'},
          {tit:'独家：拜仁慕尼黑官方微博报道'},
          {tit:'奇博体育与拜仁合作的海报伫立在安联广场。8月29日特辑'},
          {tit:'印有奇博体育的拜仁慕尼黑主场球衣'},
          {tit:'新赛季，亚博与拜仁一起征战欧洲赛场'},
          {tit:'安联球场的电子屏展示历史性一幕'}
        ],
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
    background-color: #8A0B30;
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
        padding: 0 6px 60px;
      }
      .brand-block02{
        padding: 0 24px;
      }
      .brand-block{
        margin-bottom: 20px;
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
    background-color: #fff;
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

