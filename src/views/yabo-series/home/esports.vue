<template>
  <div class="esports">
    <!--<Match :cateId="cateId" />-->
    <div class="games-wrap float-wrap">
      <div class="game-item"
        v-for="item in games"
        :key="item.name"
        :class="['large',{'gray-scal':$getGameStatus(item,'电竞')}]"
        @click="$playGame(item)"
      >
        <van-image lazy-load :src="item.thumb" />
        <div class="game-info">
          <h3>
            {{ item.title }}
            <span v-show="$getGameStatus(item,'电竞')">(维护中)</span>
          </h3>
          <h4><i>{{item.name.toUpperCase()}} ESPORTS</i></h4>
        </div>
      </div>
    </div>
    <!--<div class="lotteries">-->
      <!--<div class="games sports">-->
        <!--<div class="wrap-container">-->
          <!--<div class="game-item"-->
            <!--v-for="(item,index) in gamesSport"-->
            <!--:key="index"-->
            <!--:class="{'gray-scal':$getGameStatus(item,'电竞')}"-->
            <!--@click="$playGame(item,'电竞')"-->
          <!--&gt;-->
            <!--<van-image :src="require(`@assets/img3_0/home/esports/${item.thumb}`)" fit="cover" lazy />-->
            <!--<span>-->
              <!--{{item.title}}-->
              <!--<span v-show="$getGameStatus(item,'电竞')">(维护中)</span> -->
            <!--</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import { GAME_CATE_ID_ESPORTS } from '@/store/types'
import { getGameLists } from '@/api/games'
//import Match from './components/match'
import { esportsPlatforms as games } from '@/utils/platform'
export default {
  name: 'ESports',
  components: {
//    Match
  },
  data () {
    // const games = [{
    //   name: 'avia',
    //   thumb: 'avia@2x.png',
    //   title: 'AVIA电竞',
    //   desc: ['全球顶级赛事', '为战队加油助威']
    // }, {
    //   name: 'im',
    //   thumb: 'im@2x.png',
    //   title: 'IM电竞',
    //   desc: ['尖端全面多元的', '电竞游戏']
    // }]
    const gamesSport = [
      {
        default_game_id: 17,
        game_platform_id: 28,
        title:'刀塔2',
        name: 'avia',
        thumb: 'dota2@2x.png'
      },
      {
        default_game_id: 17,
        game_platform_id: 28,
        title:'英雄联盟',
        name: 'avia',
        thumb: 'lol@2x.png'
      },
      {
        default_game_id: 17,
        game_platform_id: 28,
        title:'绝地求生',
        name: 'avia',
        thumb: 'jdqs@2x.png'
      },
      {
        default_game_id: 17,
        game_platform_id: 28,
        title:'星际争霸',
        name: 'avia',
        thumb: 'xjzb@2x.png'
      },
      {
        default_game_id: 17,
        game_platform_id: 28,
        title:'反恐精英',
        name: 'avia',
        thumb: 'cs@2x.png'
      },
      {
        default_game_id: 17,
        game_platform_id: 28,
        title:'王者荣耀',
        name: 'avia',
        thumb: 'wzry@2x.png'
      },
      {
        default_game_id: 17,
        game_platform_id: 28,
        title:'守望先锋',
        name: 'avia',
        thumb: 'swxf@2x.png'
      },
      {
        default_game_id: 17,
        game_platform_id: 28,
        title:'FIFA足球',
        name: 'avia',
        thumb: 'fifa@2x.png'
      }
    ]
    return {
      games,
      gamesSport,
      lists: [],
      cateId: GAME_CATE_ID_ESPORTS
    }
  },
  created () {
    this.getGameLists()
  },
  methods: {
    getGameLists () {
      this.$loading({
        mask: false
      })
      const { cateId } = this
      getGameLists({
        game_cate_id: cateId
      }).then(res => {
        const { code, data, msg } = res.data
        if (code === 0) {
          const lists = []
          data.data.forEach(item => {
            if (item.is_hot && item.pic) {
            lists.push(item)
            }
          })
          this.lists = lists
          this.$toast.clear()
        } else {
          console.log(msg)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.games-wrap{
  .game-item{
    > .van-image{
      /deep/ img[lazy="loading"]{
        height: 240px;
        width: auto;
      }
    }
  }
}
.lotteries{
  .games{
    display: block;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display:none;
    }
  }
  .wrap-container{
    width:1060px;
    overflow-x: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  .game-item{
    text-align: center;
    position: relative;
    float:left;
    margin-bottom: 20px;
    >span{
      position: absolute;
      display: block;
      width:100%;
      text-align: center;
      left:0;
      bottom:40px;
      font-size: 28px;
    }
    .van-image{
      /deep/ img{
        &[lazy="loading"]{
          width: 240px;
          height: 160px;
        }
      }
    }
    h3{
      text-align: center;
      margin-bottom: 0!important;
      line-height: 60px;
    }
  }
}
</style>
