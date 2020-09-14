<template>
  <div class="sports">
    <Match :cateId="cateId" />
    <div class="games-wrap float-wrap">
      <div class="game-item"
        v-for="item in games"
        :key="item.text"
        :class="[item.text, item.text === 'shaba' ? 'large' : '',{'gray-scal':$getGameStatus(item,'体育')}]"
        @click="$playGame(item,'体育')"
      >
        <van-image lazy-load :src="item.thumb" />
        <div class="game-info">
          <h3>
            {{ item.title }}
            <span v-show="$getGameStatus(item,'体育')">(维护中)</span> 
          </h3>
          <p v-for="(d, index) in item.desc" :key="index">{{ d }}</p>
        </div>
      </div>
    </div>
    <div class="lotteries">
      <div class="games sports">
        <div class="wrap-container">
          <div class="game-item"
            v-for="(item,index) in gamesSport"
            :key="index"
            :class="{'gray-scal':$getGameStatus(item,'体育')}"
            @click="$playGame(item,'体育')"
          >
            <van-image :src="require(`@assets/img3_0/home/sports/${item.thumb}`)" fit="cover" lazy />
            <span>
              {{item.title}}
              <span v-show="$getGameStatus(item,'体育')">(维护中)</span> 
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GAME_CATE_ID_SPORTS } from '@/store/types'
import { getGameLists } from '@/api/games'
import { sportsPlatforms as games } from '@/utils/platform'
import { hotGamesSport as gamesSport } from '@/utils/platform'
import Match from './components/match'
export default {
  name: 'Sports',
  components: {
    Match
  },
  data () {
    return {
      games,
      gamesSport,
      lists: [],
      cateId: GAME_CATE_ID_SPORTS
    }
  },
  created () {
    // this.getGameLists()
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
      min-height: 240px;
      /deep/ img[lazy="loading"]{
        height: 240px;
        width: auto;
      }
    }
    &.bbin{
      .game-info{
        h3{
          margin-bottom: 90px;
        }
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
    width:1600px;
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
      width:240px;
      height: 160px;
      /deep/ img{
        border-radius: 8px;
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