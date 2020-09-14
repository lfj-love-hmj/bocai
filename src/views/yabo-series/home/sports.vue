<template>
  <div class="sports">
    <!--<Match :cateId="cateId" />-->
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
          <h4><i>{{item.name.toUpperCase()}} SPORTS</i></h4>
          <!--<p v-for="(d, index) in item.desc" :key="index">{{ d }}</p>-->
        </div>
      </div>
    </div>

    <!-- <div class="lotteries">
      <div class="games-wrap sports">
        <div class="game-item"
          v-for="item in lists"
          :key="item.id"
          @click="$playGame(item)"
        >
          <van-image :src="item.pic" fit="cover" lazy />
        </div>
      </div>
    </div> -->
    <!--<div class="lotteries">-->
      <!--<div class="games sports">-->
        <!--<div class="wrap-container">-->
          <!--<div class="game-item"-->
            <!--v-for="(item,index) in gamesSport"-->
            <!--:key="index"-->
            <!--:class="{'gray-scal':$getGameStatus(item,'体育')}"-->
            <!--@click="$playGame(item,'体育')"-->
          <!--&gt;-->
            <!--<van-image :src="require(`@assets/img3_0/home/sports/${item.thumb}`)" fit="cover" lazy />-->
            <!--<span>-->
              <!--{{item.title}}-->
              <!--<span v-show="$getGameStatus(item,'体育')">(维护中)</span> -->
            <!--</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import { GAME_CATE_ID_SPORTS } from '@/store/types'
import { getGameLists } from '@/api/games'
import { sportsPlatforms as games } from '@/utils/platform'
import { hotGamesSport as gamesSport } from '@/utils/platform'
//import Match from './components/match'
export default {
  name: 'Sports',
  components: {
//    Match
  },
  data () {
    // const games = [{
    //   name: 'shaba',
    //   thumb: 'shaba@2x.png',
    //   title: '沙巴体育',
    //   desc: ['超多盘口', '亚洲市占率第一']
    // }, {
    //   name: 'bbin',
    //   thumb: 'bbin@2x.png',
    //   title: 'BBIN体育',
    //   desc: ['赛事直播', '快速结算']
    // }, {
    //   name: 'im',
    //   thumb: 'im@2x.png',
    //   title: 'IM体育',
    //   desc: ['满足亚洲', '体育会员喜好']
    // }]
    // const gamesSport = [
    //   {
    //     name:'足球',
    //     thumb: 'zq@2x.png'
    //   },
    //   {
    //     name:'篮球',
    //     thumb: 'lq@2x.png'
    //   },
    //   {
    //     name:'F1赛车',
    //     thumb: 'F1@2x.png'
    //   },
    //   {
    //     name:'羽毛球',
    //     thumb: 'ymq@2x.png'
    //   },
    //   {
    //     name:'网球',
    //     thumb: 'wq@2x.png'
    //   },
    //   {
    //     name:'拳击',
    //     thumb: 'qj@2x.png'
    //   },
    //   {
    //     name:'排球',
    //     thumb: 'pq@2x.png'
    //   },
    //   {
    //     name:'飞镖',
    //     thumb: 'fb@2x.png'
    //   },
    //   {
    //     name:'乒乓球',
    //     thumb: 'bpq@2x.png'
    //   },
    //   {
    //     name:'台球',
    //     thumb: 'tq@2x.png'
    //   },
    //   {
    //     name:'高尔夫',
    //     thumb: 'grf@2x.png'
    //   },
    //   {
    //     name:'滑雪',
    //     thumb: 'hx@2x.png'
    //   }
    // ]
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
