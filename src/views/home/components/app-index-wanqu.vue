<template>
  <div class="app-index-1">
    <div class="brand">
      <van-image class="nvyou" lazy-load :src="require('@assets/img3_0/home/nvyou@2x.png')" />
      <van-image class="cooperation" lazy-load :src="require('@assets/img3_0/home/cooperation@2x.png')" />
    </div>

    <!-- 热门游戏 -->
    <div class="hot-games">
      <div class="ui-title">
        <h2>热门游戏</h2>
        <span class="addon" @click="gameRules">游戏规则</span>
      </div>
      <div class="games-wrap">
        <template v-for="(item, index) in hotGames">
          <div class="game-item"
            v-if="!item.active"
            :key="index"
            :class="[item.text, item.text === 'ag' ? 'large' : '',{'gray-scal':item.text === 'ag'?false:$getGameStatus(item,item.type)}]"
            @click="$playGame(item, item.type)"
          >
            <van-image lazy-load :src="item.thumb" />
            <div class="game-info">
              <h3>
                {{ item.title }}
                <span v-show="$getGameStatus(item,item.type)">(维护中)</span>  
              </h3>
              <p v-for="(d, index) in item.desc" :key="index">{{ d }}</p>
            </div>
            <Roadmap
              v-if="item.text === 'ag'"
              :canvasHeight="76"
              :defaultVid="vid"
              :cellSize="12"
              :gameData="item"
              :type="'index'"
            />
          </div>
          <div class="game-item"
            v-else
            :key="index"
            :class="[item.text, item.text === 'ag' ? 'large' : '',{'gray-scal':item.text === 'ag'?false:$getGameStatus(item,item.type)}]"
            @click="handleActive(item, item.type)"
          >
            <van-image lazy-load :src="item.thumb" />
            <div class="game-info">
              <h3>
                {{ item.title }}
                <span v-show="$getGameStatus(item,item.type)">(维护中)</span>  
              </h3>
              <p v-for="(d, index) in item.desc" :key="index">{{ d }}</p>
            </div>
          </div>
        </template>
      </div>
      <!-- 百家乐奖池 -->
      <div class="casino-events">
        <div class="jackpot">
          <img src="@assets/img3_0/home/chips@2x.png">
          <div class="desc">
            <span>百家乐大赛奖池发放</span>
            <span class="amount"><dfn>¥</dfn>{{ jackpot }}</span>
          </div>
        </div>
        <div class="event" @click="$router.push('/baccarat')">
          <img src="@assets/img3_0/home/casino-event@2x.png">
        </div>
      </div>
    </div>

    <!-- 实时盈利榜 -->
    <div class="profit-ranks">
      <div class="ui-title">
        <h2>实时盈利榜</h2>
        <span class="addon" @click="rankView">查看榜单</span>
      </div>
      <RankSwipe :rankData="dataProfitsRank.slice(0, 20)" />
    </div>

    <!-- 品牌大使 -->
    <div class="brand-rion">
      <div class="ui-title">
        <h2>品牌大使</h2>
      </div>
      <div class="rion">
        <img src="@assets/img3_0/home/brand-rion@2x.png">
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Roadmap from '@/components/roadmap'
import RankSwipe from './rank-swipe'
import { brandlist } from '@/api/home'
import { hotGames } from '@/utils/platform'

export default {
  name: 'app-index-1',
  components: {
    Roadmap,
    RankSwipe,
  },
  data () {
    return {
      hotGames,
      vid: null,
      brand: null,
      jackpot: 99923405.23
    }
  },
  created () {
    !this.dataProfitsRank.length && this.getProfitsRank()
    this.getBrandlist()
  },
  computed: {
    ...mapState('global', ['dataProfitsRank'])
  },
  methods: {
    ...mapActions('global', [
      'getProfitsRank'
    ]),
    getBrandlist () {
      brandlist().then(res => {
        const { code, data, msg } = res.data
        if (code === 0) {
          this.brand = data[0]
        } else {
          console.log(msg)
        }
      })
    },
    gameRules () {
      this.$router.push({path:'/help/manual',query:{from:'Home'}})
    },
    // 查看榜单
    rankView () {
      this.$router.push({
        name: 'ProfitsRank'
      })
    },
    handleActive(temp, text) {
      if(this.$getGameStatus(temp,text)) {
        this.$playGame(temp, text)
        return 
      }
      this.$emit('handleActive',temp.name)
    }
  }
}
</script>

<style lang="less" scoped>
.brand{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // height: 140px;
  margin-top: @space-gap;
  margin-left: -@space-gap;
  margin-bottom: @space-gap;
  >.van-image{
    height: 100%;
    margin-left: @space-gap;
    min-height: 140px;
    /deep/ img{
      display: block;
      width: 100%;
      &[lazy="loading"]{
        height: 140px;
        width: auto;
      }
    }
  }
  .nvyou{
    flex-basis: 205px;
    flex-grow: 3;
  }
  .cooperation{
    flex-basis: 125px;
    flex-grow: 2;
  }
}
.hot-games{
  margin-bottom: @space-gap;
  .game-item{
    > .van-image{
      min-height: 180px;
      /deep/ img[lazy="loading"]{
        height: 180px;
        width: auto;
      }
    }
    &.ag{
      background-color: #282828;
      border-radius: 8px;
      > .van-image {
        min-height: 240px;
        /deep/ img[lazy="loading"]{
          height: 240px;
          width: auto;
        }
      }
    }
  }
}

.casino-events{
  margin-bottom: @space-gap;
  .jackpot{
    width: 100%;
    height: 76px;
    display: flex;
    align-items: center;
    padding: 0 @space-gap;
    justify-content: space-around;
    border-radius: 50px;
    border: 2px solid @primary-color;
    margin-bottom: @space-gap;
    img{
      height: 60px;
    }
    .desc{
      font-size: 28px;
      color: @primary-color;
      font-weight: 500;
      span{
        padding: 0 5px;
        line-height: 1;
        &.amount{
          font-size: 32px;
        }
      }
      dfn{
        font-style: normal;
        padding-right: 5px;
      }
    }
  }
  .event{
    img{
      display: block;
      width: 100%;
    }
  }
}

.profit-ranks{
  width: 100%;
  margin-bottom: @space-gap;
}

.brand-rion{
  margin-bottom: @space-gap;
  .rion{
    img{
      display: block;
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>
