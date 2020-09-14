<template>
  <div class="app-index-3">
    <div class="gameList">
      <div class="title" style="display:flex;justify-content:center;align-items:center;">
        <div class="line" style="margin-right: 20px;" />
        <span class="title_top">Top Games</span>
        <div class="line" style="margin-left: 20px;" />
      </div>
      <div class="title_zh" style="display:flex;justify-content:center;align-items:center;">
        <span class="title_top">推荐游戏</span>
      </div>
      <van-swipe :autoplay="4000" class="banner">
        <van-swipe-item v-for="(item, index) in gameList" :key="index">
          <ul>
            <template v-for="(item1,index1) in item">
              <li v-if="!item1.temp.active"  @click="$playGame(item1.temp,item1.text)" :class="{'gray-scal':$getGameStatus(item1.temp,item1.text)}">
                <p class="title_desc">
                  {{ item1.title }}
                  <span v-show="$getGameStatus(item1.temp,item1.text)">(维护中)</span>
                </p>
                <p class="title_desc_second" v-html="item1.second_title">
                  <!-- {{ item1.second_title }} -->
                </p>
                <van-image :src="item1.pic"/>
              </li>
              <li v-else @click="handleActive(item1.temp,item1.text)" :class="{'gray-scal':$getGameStatus(item1.temp,item1.text)}">
                <p class="title_desc">
                  {{ item1.title }}
                  <span v-show="$getGameStatus(item1.temp,item1.text)">(维护中)</span>
                </p>
                <p class="title_desc_second" v-html="item1.second_title">
                  <!-- {{ item1.second_title }} -->
                </p>
                <van-image :src="item1.pic"/>
              </li>
            </template>
          </ul>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="groupInfo">
      <div class="title" style="display:flex;justify-content:center;align-items:center;">
        <div class="line" style="margin-right: 20px;" />
        <span class="title_top">Group information</span>
        <div class="line" style="margin-left: 20px;" />
      </div>
      <div class="title_zh" style="display:flex;justify-content:center;align-items:center;">
        <span class="title_top">集团资讯</span>
      </div>
      <div class="groupInfoContent">
        <!-- <img :src="groupImgSrc" alt style="width:100%;" /> -->
        <!-- <img :src="item.h5_pic" alt v-for="(item,index) in groupImgList" /> -->
        <!-- <div class="covering"></div> -->
        <!-- <van-swipe :autoplay="4000000" class="banner">
          <van-swipe-item v-for="(item, index) in groupImgList" :key="index">
              <div class="item_title">{{item.title}}</div>
              <van-image :src="item.h5_pic"/>
          </van-swipe-item>
          <div class="clearfix"></div>
        </van-swipe> -->

        <swiper v-if="groupImgList.length>0" :height="250" :options="swiperOption" class="swiper-container swiper_h5">
          <swiper-slide v-for="(item, index) in groupImgList" :key="index">
              <div class="item_title">{{item.title}}</div>
              <img :src="item.h5_pic"/>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="buss">
      <div class="title" style="display:flex;justify-content:center;align-items:center;">
        <div class="line" style="margin-right: 20px;" />
        <span class="title_top">Group business</span>
        <div class="line" style="margin-left: 20px;" />
      </div>
      <div class="title_zh" style="display:flex;justify-content:center;align-items:center;">
        <span class="title_top">集团业务</span>
      </div>
      <div class="list">
        <div class="list_item" v-for="(item,index) in navList_new" :key="index">
          <div class="item_box">
            <img class="logo" :src="require(`@assets/img3_0/featured/logo${index+1}.png`)" alt />
            <p class="groupBuss_item_title">{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="link">
        <ul>
            <router-link :to="{ path: '/agentHomepage' }" tag="li">代理合作</router-link>
            <router-link :to="{ path: '/help/tutorial' }" tag="li">新手教程</router-link>
            <li @click="goWebPage">进入网页版</li>
        </ul>
    </div>
    <p class="copyright">{{copyright}}</p>
  </div>
</template>

<script>
import { indexarticle } from "@/api/home";
import { siteinfo } from "@/api/home";
import { mapState, mapActions } from "vuex";
let navlist_new = require("@assets/img3_0/featured/groupBuss");

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: [],
  name: "app-index-3",
  data() {
    return {
      navList_new:navlist_new.default,
      gameList: [
        [
          {
            title: "VR彩票",
            second_title: "多台摄像实时直播<br>公平诚信首选平台",
            path: "/chess",
            pic: require("@assets/img3_0/featured/nvyou1.png"),
            isHaveButton: false,
            text:'彩票',
            temp:{
              default_game_id: 4400,
              game_platform_id: 121,
              title: 'VR彩票',
              name: 'VR',
              id: 30
            }
          },
          {
            title: "沙巴体育",
            second_title: "最全体育赛事<br>超过70+盘口玩法",
            path: "/fish",
            pic: require("@assets/img3_0/featured/nvyou2.png"),
            isHaveButton: false,
            text:'体育',
            temp:{
              default_game_id: 18,
              game_platform_id: 13,
              title: 'IBC体育',
              name: 'IBC',
              id: 3
            }
          },
          {
            title: "AG视讯",
            second_title: "各国真人美女<br>百万单笔投注",
            path: "/sport",
            pic: require("@assets/img3_0/featured/nvyou3.png"),
            isHaveButton: false,
            text:'真人',
            temp:{
              default_game_id: 1,
              game_platform_id: 1,
              // default_game_id: 3121,
              // game_platform_id: 103,
              title: 'AG真人',
              name: 'AG',
              id: 1
            }
          },
          {
            title: "BBIN视讯",
            second_title: "亚洲龙头品牌<br>更多元化玩法",
            path: "/electron",
            pic: require("@assets/img3_0/featured/nvyou4.png"),
            isHaveButton: false,
            text:'真人',
            temp:{
              default_game_id: 15,
              game_platform_id: 3,
              // default_game_id: 3121,
              // game_platform_id: 103,
              name: 'BBIN',
              title: 'BBIN',
              id: 3
            }
          },

          {
            title: "PT电子",
            second_title: "超多精品游戏<br>亿万奖池爆不停",
            path: "/real",
            pic: require("@assets/img3_0/featured/nvyou5.png"),
            isHaveButton: false,
            text:'电子',
              temp:{
                default_game_id: 3990,
                game_platform_id: 116,
                title: 'PT电子',
                name: 'PT',
                active: 2,
                id: 2
              }
          },
          {
            title: "CQ9电子",
            second_title: "最热门的电子游艺<br>无比流畅的体验",
            path: "/lottery",
            pic: require("@assets/img3_0/featured/nvyou6.png"),
            isHaveButton: false,
            text:'电子',
              temp:{
                default_game_id: 2102,
                game_platform_id: 21,
                title: 'CQ9电子',
                name: 'CQ9',

                id: 21
              }
          },

        ],
        [
          {
            title: "MG电子",
            second_title: "巨额累计奖池<br>经典游戏玩不腻",
            path: "/fish",
            pic: require("@assets/img3_0/featured/nvyou7.png"),
            isHaveButton: false,
            text:'电子',
            temp:{
              default_game_id: 647,
              game_platform_id: 7,
              title: 'MG电子',
              name: 'MG',
              id: 7
            }
          },
          {
            title: "开元棋牌",
            second_title: "与人斗，其乐无穷<br>首家对战类棋牌",
            path: "/fish",
            pic: require("@assets/img3_0/featured/nvyou8.png"),
            isHaveButton: false,
            text:'棋牌',
              temp:{
                default_game_id: 3052,
                game_platform_id: 22,
                title: 'KY棋牌',
                name: 'KY',
                id: 22
              }
          },
          {
            title: "万趣棋牌",
            second_title: "万人在线<br>抢庄对弈无限",
            path: "/fish",
            pic: require("@assets/img3_0/featured/nvyou9.png"),
            isHaveButton: false,
            text:'棋牌',
              temp:{
                default_game_id: 3026,
                game_platform_id: 29,
                title: 'WQ棋牌',
                name: 'WQ',
                id: 29
              }
          },
          {
            title: "GG棋牌",
            second_title: "经典德普&奥马哈<br>亮出你的皇家同花顺",
            path: "/fish",
            pic: require("@assets/img3_0/featured/nvyou10.png"),
            isHaveButton: false,
            text:'棋牌',
              temp:{
                // default_game_id: 0,
                // game_platform_id: 45,
                default_game_id: 4537,
                game_platform_id: 126,
                title: 'GG棋牌',
                name: 'GG',
                id: 45
              }
          },

          {
            title: "IM电竞",
            second_title: "实时赛事直播<br>专业战队数据分析",
            path: "/fish",
            pic: require("@assets/img3_0/featured/nvyou11.png"),
            isHaveButton: false,
            text:'电竞',
              temp:{
                default_game_id: 4224,
                game_platform_id: 118,
                title: 'IM ESPORTS电竞',
                name: 'ESB',
                id: 51
              }
          },
          {
            title: "AG捕鱼王",
            second_title: "顶级渔场<br>一炮致富",
            path: "/fish",
            pic: require("@assets/img3_0/featured/nvyou12.png"),
            isHaveButton: false,
            text:'捕鱼',
              temp:{
                default_game_id: 12,
                game_platform_id: 31,
                title: 'AG捕鱼',
                name: 'AG'
              }
          },
        ]
      ],
      groupImgSrc:'',
      groupImgList:[],
      copyright:'',
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides: 100,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // }
        autoplay: 40000000, //可设置数值来指定播放速度
        speed: 500,
      },
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState("users", ["token", "wallet", "userInfo", "username"]),
    ...mapState('global', ['dataProfitsRank'])
  },
  created() {
    !this.dataProfitsRank.length && this.getProfitsRank()
    indexarticle().then(res => {
      if (res.data.code === 0) {
        this.groupImgSrc = res.data.data[0].h5_pic;
        this.groupImgList = res.data.data;
        console.log(res.data.data[0],'res')
      }else{
        console.log(res.data.msg)
      }
    });
    siteinfo(process.env.VUE_APP_MERCHANT_NO).then(res => {
      if (res.data.code === 0) {
        this.copyright = res.data.data.copyright;
      }
    });
  },
  methods: {
    ...mapActions('global', [
      'getProfitsRank'
    ]),
    go(item) {
      this.$router.push(item.h5_link)
    },
    goWebPage () {
      const { origin } = window.location
      window.location.href = origin.replace('//m.', '//www.')+'?devType=pc'
      // window.location.href = origin.replace('//m.', '//www.')+'?devType=pc'
    },
    handleActive(temp, text) {
      if(this.$getGameStatus(temp,text)) {
        this.$playGame(temp, text)
        return
      }
      this.$emit('handleActive',temp.name)
    }
  }
};
</script>

<style lang="less" scoped>
.app-index-3 {
  .title {
    margin-bottom: 10px;
    .line {
      width: 100px;
      height: 4px;
      background: linear-gradient(to right, rgba(0, 0, 0, 0), @primary-color);
      border-radius: 6px;
      &:last-child {
        background: linear-gradient(to right, @primary-color, rgba(0, 0, 0, 0));
      }
    }
    .title_top {
      font-size: 24px;
      color: @primary-color;
    }
  }
  .title_zh {
    margin-bottom: 40px;
    .title_top {
      color: #fff;
    }
  }
  .gameList {
    // height:500px;
    padding: 45px 5px 25px;
    .banner {
      padding-bottom: 20px;
      /deep/ .van-swipe__indicators {
        bottom: 0px;
        .van-swipe__indicator {
          width: 15px;
          height: 15px;
          background: #6b6b6b;
          border-radius: 50%;
          margin-right: 30px;
          &:last-child {
            margin-right: 0;
          }
        }
        .van-swipe__indicator--active {
          background: @primary-color;
        }
      }
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        li {
          position: relative;
          width: 49%;
          margin-right: 2%;
          margin-bottom: 2%;
          min-height:2.5rem;
          &:nth-child(2n) {
            margin-right: 0;
          }
          .title_desc {
            position: absolute;
            top: 30px;
            left: 20px;
            z-index: 1;
            color: #fff;
            font-size: 36px;
          }
          .title_desc_second {
            position: absolute;
            top: 90px;
            left: 20px;
            z-index: 1;
            color: #fff;
            font-size: 24px;
            line-height: 30px;
          }
          .more {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 5px 20px;
            border-radius: 15px;
            background: rgba(0, 0, 0, 0.7);
            font-size: 12px;
            color: #fff;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }

  .groupInfo {
    padding: 40px 0;
    .groupInfoContent{
      width:80%;
      margin:0 auto;
      position: relative;
      font-size:0;
      display:flex;
      justify-content: center;
      align-items: center;
      overflow:visible !important;
      min-height:250px;
      .swiper_h5{
        // width:1800px;
        // position: absolute;;
        // left:50%;
        // top:0px;
        // transform:translateX(-50%);
        // overflow:auto;
        overflow:visible !important;
        .swiper-slide{
          position:relative;
          display:flex;
          justify-content: center;
          align-items: center;
          width:100%;
          .item_title{
              position:absolute;
              left:50%;
              transform:translateX(-50%);
              top:10%;
              width:80%;
              font-size:12px;
              font-weight: bold;
              color:#fff;
              z-index: 2;
          }
          img{
            width:92.5%;
          }
          .van-image{
            width:92.5%;
            img{
              width:100%;
            }
          }
        }
      }
      .banner {
        width:100%;
        overflow:inherit;
        padding-bottom: 40px;
        /deep/ .van-swipe__track{
          .van-swipe-item{
            position:relative;
            .item_title{
              position:absolute;
              left:50%;
              transform:translateX(-50%);
              top:10%;
              width:90%;
              font-size:12px;
              font-weight: bold;
              color:#fff;
              z-index: 2;
            }
            .van-image{
              display:flex;
              justify-content: center;
              align-items: center;
              .van-image__img{
                width:95% !important;
              }
            }
          }
        }
        /deep/ .van-swipe__indicators {
          bottom: 0px;
          .van-swipe__indicator {
            width: 15px;
            height: 15px;
            background: #6b6b6b;
            border-radius: 50%;
            margin-right: 30px;
            &:last-child {
              margin-right: 0;
            }
          }
          .van-swipe__indicator--active {
            background: @primary-color;
          }
        }
      }
      // img {
      //   position: relative;
      //   z-index: 1;
      //   width:70%;
      //   margin-right:5%;
      //   &:last-child{
      //     margin-right:0;
      //   }
      // }
      .covering {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.8)
        );
      }
    }
  }

  .list {
    display:flex;
    justify-content: center;
    align-items:flex-end;
    flex-wrap:wrap;
    padding-bottom: 20px;
    .list_item {
      width: 40%;
    //   height: 70px;
      margin-bottom:40px;
      position: relative;
      &:nth-child(3),&:nth-child(4),&:nth-child(5){
          width:30%;
      }
      .item_box {
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        img {
          width: 40%;
        }
        p {
          font-size: 14px;
          color: #fff;
          margin-top: 15px;
        }
      }
      &:last-child {
        border-right: none;
      }

      > .layout {
        width: 70px;
        height: 70px;
        flex-basis: 70px;
        flex-grow: 0;
        .logo {
          width: 48px;
        }
      }

      .name {
        font-size: 20px;
        color: rgba(204, 204, 204, 1);
      }

      .link {
        // width: 170px;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        text-align: left;
        white-space: nowrap;
        padding: 0;
        border: none;
        h3 {
          margin-bottom: 5px;
        }

        a {
          padding: 0;
          color: #666;
        }
      }
    }
  }

  .link{
      padding:40px 0;

      margin-bottom:40px;
      ul{
          display:flex;
          justify-content: center;
          align-items:center;
          li{
              padding:0 30px;
              color:@primary-color;
              &:nth-child(2){
                  border-left:2px solid rgba(255,255,255,0.1);
                  border-right:2px solid rgba(255,255,255,0.1);
              }
          }
      }
  }
  .copyright{
    padding:0 0 30px;
    color:@text-color-999;
    text-align:center;
  }
}
</style>
