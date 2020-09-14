<template>
  <van-swipe
    class="match-swipe"
    :width="160"
    :autoplay="4000"
    :show-indicators="false"
    @change="onChange"
    ref="swipe"
    v-if="matches.length"
  >
    <van-swipe-item
      v-for="(item, index) in matches"
      :key="index"
      class="swipe-rank-item"
    >
      <div class="box">
        <div class="plateformName">IM</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.date }}</p>
        <ul class="club">
          <li>
            <van-image :src="item.left.img" fit="cover" lazy />
            <span>{{ item.left.name }}</span>
          </li>
          <li class="vs">vs</li>
          <li>
            <van-image :src="item.right.img" fit="cover" lazy />
            <span>{{ item.right.name }}</span>
          </li>
        </ul>
        <ul class="rate">
          <li>{{ item.left.rate }}</li>
          <li class="vs">{{ item.middle || '' }}</li>
          <li>{{ item.left.rate }}</li>
        </ul>
        <van-button class="bet-btn" @click="$playGame({default_game_id:17,game_platform_id:28})">立即投注</van-button>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { mapState } from 'vuex'
import { esports } from '@/api/games'
export default {
  name: 'RankItem',
  computed: {
    ...mapState('games', ['allPlatforms','allCates','gameCatesPlatforms'])
  },
  data() {
    return {
      matches: []
    }
  },
  created () {
    this.getMatch()
  },
  methods:{
    getMatch () {
      esports().then(res => {
        const { code, data, msg } = res.data
        if (code === 0) {
          this.matches = data
          // if(data.length%3 !== 0) {
          //   const initNum = Math.ceil(data.length/3)
          //   const temp = data.slice(initNum*3-data.length,(initNum*3-data.length)*2)
          //   this.matches = this.matches.concat(temp)
          //   console.log(this.matches,temp)
          // }
        } else {
          console.log(msg)
        }
      })
    },
    onChange(index) {
      if(index === this.matches.length-2) {
        this.$refs['swipe'].swipeTo(1)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.match-swipe{
  // margin-left: -@space-gap;
  margin-right: -@space-gap;
  // /deep/.van-swipe{
  //   overflow: unset !important;
  // }
  /deep/ .van-swipe-item{
    padding-right: @space-gap;
    // margin-right: @space-gap;
    color: #ccc;
    .box{
      position: relative;
      background-color: @bg-card-color;
      margin: 10px 0;
      text-align: center;
      height: 349px;
      background:rgba(42,41,62,1);
      border-radius:19px;
      opacity:0.9;
      border: 2px solid @border-color-base;
      .plateformName{
        position:absolute;
        top:-10px;
        left:-3px;
        width:95px;
        height:49px;
        background-image: url('~@assets/img3_0/home/tag_bg@2x.png');
        background-size: 100%;
        background-repeat: no-repeat;
        color: #fff;
        text-align: center;
        line-height: 49px;
      }
      h3{
        font-size: 24px;
        color:#fff;
        padding: 42px 0 8px 0;
        margin: 0;
      }
      p{
        font-size: 24px;
        color:#929FC0;
      }
      ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 34px 0 34px;
        &.rate{
          // margin-top: @space-gap;
          padding:0 34px;
          li span {
            color: rgba(#fff, .5);
          }
        }
      }
      li{
        width: 30%;
        span{
          display: block;
          line-height: 50px;
          color: #fff;
          white-space: nowrap;
          width: 100%;
          text-align: center;
        }
        .van-image{
          width: 60px;
        }
        &.vs{
          width: 40%;
          font-size: 32px;
          // .van-image img{
          //   width: 72px;
          // }
        }
      }
      .bet-btn{
        width:168px;
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        color: #000;
        background: #BFB7FF;
        border:0;
        margin-top: 20px;
      }
    }
  }
}
</style>