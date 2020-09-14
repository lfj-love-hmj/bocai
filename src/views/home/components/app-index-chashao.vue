<template>
  <div class="app-index-2">
    <!-- 实时盈利榜 -->
    <div class="match-ranks">
      <MatchSwipe />
    </div>
    <div class="game-wrap">
      <div v-for="item in 5" :key="item" class="content-wrap">
        <van-image class="game-img" lazy-load :src="require(`@assets/img3_0/home/esports/game_${item}@2x.png`)"></van-image>
        <p>{{textWrap[item-1]}}</p>
      </div>
    </div>
    <div class="brand">
      <div class="cooperation" 
        v-for="(item, index) in brand" 
        :class="['large',{'gray-scal':$getGameStatus(item,'电竞')}]"
        @click="$playGame(item)"
        :key="index">
        <van-image lazy-load :src="require(`@assets/img3_0/home/esports/brand_${index+1}@2x.png`)" />
        <div class="text">
          <h2>
            {{item.title}}
            <span v-show="$getGameStatus(item,'电竞')">(维护中)</span> 
          </h2>
          <p v-html="item.content">{{item.content}}</p>
        </div>
      </div>
    </div>
    <div class="zanzhu">
      <h2>官方赞助</h2>
      <div class="game-wrap">
        <van-image class="game-img" lazy-load :src="require(`@assets/img3_0/home/esports/zanzhu_${item}@2x.png`)" v-for="item in 5" :key="item"></van-image>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Roadmap from '@/components/roadmap'
import MatchSwipe from './match-swipe'
import { brandlist } from '@/api/home'
import { hotGames } from '@/utils/platform'
import Match from './match'
import { GAME_CATE_ID_ESPORTS } from '@/store/types'
import { esportsPlatforms as games } from '@/utils/platform'

export default {
  name: 'app-index-2',
  components: {
    Roadmap,
    MatchSwipe,
    Match
  },
  data () {
    return {
      hotGames,
      games,
      vid: null,
      jackpot: 99923405.23,
      cateId: GAME_CATE_ID_ESPORTS,
      textWrap: ['英雄联盟', '刀塔2', 'CS GO', '绝地求生', '王者荣耀'],
      brand: [
        {
          title: 'IM电竞',
          name: 'esb',
          content: '尖端全面多元的<br/>电竞游戏',
          default_game_id: 4224,
          game_platform_id: 118
        },
        {
          title: 'AVIA电竞',
          name: 'avia',
          content: '全球顶级赛事<br/>为战队加油助威',
          default_game_id: 17,
          game_platform_id: 28
        }
      ]
    }
  },
  created () {
    // this.randomVid();
    !this.dataProfitsRank.length && this.getProfitsRank()
    // this.getBrandlist()
  },
  computed: {
    // ...mapState('games', ['allPlatforms']),
    ...mapState('global', ['dataProfitsRank'])
  },
  methods: {
    ...mapActions('global', [
      'getProfitsRank'
    ]),
    // getBrandlist () {
    //   brandlist().then(res => {
    //     const { code, data, msg } = res.data
    //     if (code === 0) {
    //       this.brand = data[0]
    //     } else {
    //       console.log(msg)
    //     }
    //   })
    // },
    gameRules () {
      // this.$toast('gameRules')
      this.$router.push({path:'/help/manual',query:{from:'Home'}})
    },
    // 查看榜单
    rankView () {
      this.$router.push({
        name: 'ProfitsRank'
      })
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
  .cooperation{
    width: 330px;
    height: 184px;
    position: relative;
    // background: @bg-card-color;
    .text{
      position: absolute;
      top: 10px;
      h2{
        font-size: 24px;
        padding:26px 0 26px 26px;
        margin: 0; 
      }
      p{
        padding-left: 26px;
        line-height: 34px;
      }
    }
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
      background-color: @bg-color;
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
.zanzhu{
  h2{
    font-size: 24px;
  }
  .game-img{
    width:115px;
    height: 116px;
  }
}
.game-wrap{
  display: flex;
  justify-content: space-between;
  margin: 42px 0 64px 0;
  .game-img{
    width:128px;
    height: 128px;
  }
  .content-wrap{
    position: relative;
    p{
      position: absolute;
      bottom: 20px;
      width: 100%;
      text-align: center;
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

.match-ranks{
  width: 100%;
  margin-bottom: @space-gap;
  margin-top: 36px;
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
