<template>
  <div class="sport-swipe">
    <swiper 
      v-if="matches.length" 
      :options="swiperOption" 
      ref="mySwiper">
      <!-- slides -->
      <!-- <template v-if="matches.length"> -->
        <swiper-slide
          class="match"
          v-for="(item, index) in matches"
          :key="index"
        >
          <div class="top">
            <h3>{{ item.title }}</h3>
            <p>{{ item.date }}</p>
            <ul class="club">
              <li>
                <van-image :src="item.left.img" fit="cover" lazy />
                <span>{{ item.left.name }}</span>
              </li>
              <li class="vs">
                <van-image :src="require('@assets/img3_0/home/sports/vs@2x.png')" fit="cover" lazy />
              </li>
              <li>
                <van-image :src="item.right.img" fit="cover" lazy />
                <span>{{ item.right.name }}</span>
              </li>
            </ul>
          </div>
          <ul class="rate">
            <li>胜<br/>{{ item.left.rate }}</li>
            <li class="vs">{{ item.middle || '' }}</li>
            <li>负<br/>{{ item.left.rate }}</li>
          </ul>
          <div>
            <van-button @click="$playGame({default_game_id:17,game_platform_id:28})">立即投注</van-button>
          </div>
        </swiper-slide>
      <!-- </template> -->
      <!-- <template v-else>
        <swiper-slide class="match" v-for="item in 4" :key="item">加载中...</swiper-slide>
      </template> -->
    </swiper>
  </div>
</template>

<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { sports } from "@/api/games";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loopedSlides: 5
      },
      matches: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.getMatch();
  },
  methods: {
    getMatch() {
      sports().then(res => {
        const { code, data, msg } = res.data;
        if (code === 0) {
          this.matches = data;
          console.log(this.matches);
        } else {
          console.log(msg);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.sport-swipe {
  width: 100%;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    height: 100%;
    width: 2px;
    position: absolute;
    top: 0;
    right: -4px;
    box-shadow: 0 3px 80px 80px #fff;
    z-index: 99;
  }
  &::before {
    content: "";
    height: 100%;
    width: 2px;
    position: absolute;
    top: 0;
    left: -4px;
    box-shadow: 3px 0 80px 80px #fff;
    z-index: 99;
  }
  .swiper-container {
    padding: 30px 0;
    .swiper-slide {
      color: #000;
      width: 380px;
      height: 430px;
      background: rgba(255, 255, 255, 1);
      border-radius: 8px;
      box-shadow: 0px 4px 17px 0px rgba(92, 96, 150, 0.16);
    }
    /deep/ .match {
      text-align: center;
      color: #000;
      // margin: 24px 60px;
      .van-button{
        width: 149px;
        height: 50px;
        margin: 0 auto;
        background: @primary-color !important;
        line-height: 1;
        border: 0;
        margin-top: 20px;
      }
      &.swiper-slide-active{
        .top{
          // background-color: rgba(@primary-color, 0.9);
          background-image: url('~@/assets/common/img/home/swiper-bg.png');
          background-size: cover;
          border-radius: 8px 8px 0 0;
          color: #fff;
          h3{
            color: #fff;
          }
        }
        ul{
          &.rate{
            li{
              &:nth-child(1) {
                background-color: #E56464;
              }
              &:nth-child(2) {
                background-color: #5BA8FF;
              }
              &:nth-child(3) {
                background-color: #77C382;
              }
              line-height: 34px;
              padding: 4px;
              text-align: center;
              width: 67px;
              height: 66px;
              color: #fff;
            }
          }
        }
      }
      h3 {
        font-size: 28px;
        font-weight: 500;
        color: #000;
        margin: 0;
        padding: 30px 0 10px 0;
      }
      p{
        padding-bottom: 18px;
      }
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &.club{
          padding-bottom: 18px;
        }
        &.rate {
          margin-top: 20px;
          display: flex;
          justify-content: space-around;
          li{
            line-height: 34px;
            padding: 4px;
            text-align: center;
            width: 67px;
            height: 66px;
            color: #fff;
          }
          li span {
            color: #000;
          }
        }
      }
      li {
        width: 30%;
        span {
          display: block;
          line-height: 50px;
          color: #fff;
          width: 100px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        &:not(.vs){
          .van-image {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #fff;
            position: relative;
            .van-image__img{
              width: 44px;
              height: 44px;
              position: absolute;
              top: 50%;
              left: 50%;
              margin-top: -22px;
              margin-left: -22px;
            }
          }
        }
        &.vs {
          width: 40%;
          color: #fff;
          .van-image img {
            width: 72px;
          }
        }
      }
    }
  }
}
</style>