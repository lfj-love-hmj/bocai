<template>
  <div class="lottery">    
    <div class="games-wrap float-wrap">
      <div class="game-item"
        v-for="(item,index) in gamesList"
        :key="index"
        @click="$playGame(item,'彩票')"
        :class="{'gray-scal':$getGameStatus(item,'彩票')}"
      >
        <van-image lazy-load :src="item.thumb" />
      </div>
    </div>

    <!-- 热门彩种 -->
    <div class="lotteries">
      <div class="ui-title">
        <div 
        v-for="(item,index) in cpTypelist"
          :key="index"
          :class="index==curCpType?'active':''" @click="cpTypeChange(index)"
        >
          {{item.text}}
        </div>
      </div>
      <div class="games-wrap lottery mb-gap">
        <div class="game"
          v-for="(item,index) in cpTypelist[curCpType].list"
          :key="index"
          @click="$playGame(item,'彩票')"
          :class="{'gray-scal':$getGameStatus(item,'彩票')}"
        >
          <van-image :src="item.pic" fit="cover" lazy />
          <p class="title_desc">
              {{ item.text }}
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GAME_CATE_ID_LOTTERY } from '@/store/types'
import { hotLottery } from '@/api/games'
import { lotteryPlatforms as games } from '@/utils/platform'
import { hotLotteryGames as gamesLottery } from '@/utils/platform'
export default {
  name: 'Lottery',
  data () {
    const gamesList = [{
      default_game_id: 4409,
          game_platform_id: 121,
          "name": "VR",
      thumb: require('@assets/img3_0/home/1.png'),
      title: '腾讯分分彩',
      status: '1'
      // desc: ['强大的录号系统', '确保第一时间开奖']
    }, {
      default_game_id: 4393,
          game_platform_id: 121,
          "name": "VR",
      thumb: require('@assets/img3_0/home/2.png'),
      title: '重庆时时彩',
      status: '1'
      // desc: ['标准/双面玩法', '各类生肖玩法齐全']
    }, {
      "name": "VR",
       default_game_id: 4397,
          game_platform_id: 121,
      thumb: require('@assets/img3_0/home/3.png'),
      title: '北京赛车',
      status: '1'
      // desc: ['美女主播靓', '开彩赢']
    }]
    // const gamesLottery = [
    //   {
    //     name: '腾讯分分彩',
    //     thumb: 'cp_tx@2x.png'
    //   },
    //   {
    //     name: '重庆时时彩',
    //     thumb: 'cp_ssc@2x.png'
    //   },
    //   {
    //     name: '北京赛车',
    //     thumb: 'cp_sc@2x.png'
    //   },
    //   {
    //     name: '香港六合彩',
    //     thumb: 'cp_lhc@2x.png'
    //   },
    //   {
    //     name: '幸运28',
    //     thumb: 'cp_xy28@2x.png'
    //   },
    //   {
    //     name: '幸运飞艇',
    //     thumb: 'cp_ft@2x.png'
    //   },
    //   {
    //     name: 'VR彩票百家乐',
    //     thumb: 'cp_vrdjl@2x.png'
    //   },
    //   {
    //     name: '澳洲幸运彩',
    //     thumb: 'cp_az@2x.png'
    //   }
    // ]
    return {
      games,
      gamesList,
      gamesLottery,
      lists: [],
      cateId: GAME_CATE_ID_LOTTERY,
      curCpType: 0,
      cpTypelist: [
        {
          text: 'VR彩票',
          list: [
            {
              text: '十分彩',
              pic: require('@assets/img3_0/home/位图1.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '重庆时时彩',
              pic: require('@assets/img3_0/home/位图2.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '水星分分彩',
              pic: require('@assets/img3_0/home/位图3.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '11选5',
              pic: require('@assets/img3_0/home/位图4.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '北京赛车',
              pic: require('@assets/img3_0/home/位图5.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '木星赛车',
              pic: require('@assets/img3_0/home/位图6.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '幸运28',
              pic: require('@assets/img3_0/home/位图7.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '快三',
              pic: require('@assets/img3_0/home/位图8.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
          ]
        },
        {
          text: '时时彩',
          list: [
            {
              text: '极速时时彩',
              pic: require('@assets/img3_0/home/位图9.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '腾讯分分彩',
              pic: require('@assets/img3_0/home/位图10.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '一份时时彩',
              pic: require('@assets/img3_0/home/位图11.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '三份时时彩',
              pic: require('@assets/img3_0/home/位图12.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '河内五份时时彩',
              pic: require('@assets/img3_0/home/位图13.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            }
          ]
        },
        {
          text: 'KP10',
          list: [
            {
              text: '北京KP10',
              pic: require('@assets/img3_0/home/位图14.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '幸运飞艇',
              pic: require('@assets/img3_0/home/位图15.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '极速赛车',
              pic: require('@assets/img3_0/home/位图16.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '一分赛车',
              pic: require('@assets/img3_0/home/位图17.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '一分赛车',
              pic: require('@assets/img3_0/home/位图18.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            }
          ]
        },
        {
          text: '11选5',
          list: [
            {
              text: '11选5',
              pic: require('@assets/img3_0/home/位图19.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '三分11选5',
              pic: require('@assets/img3_0/home/位图20.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            }
          ]
        },
        {
          text: '快3',
          list: [
            {
              text: '极速快3',
              pic: require('@assets/img3_0/home/位图21.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '三分11选5',
              pic: require('@assets/img3_0/home/位图22.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            }
          ]
        },
        {
          text: '六合彩',
          list: [
            {
              text: '极速六合彩',
              pic: require('@assets/img3_0/home/位图23.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '十分六合彩',
              pic: require('@assets/img3_0/home/位图24.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
            {
              text: '六合彩',
              pic: require('@assets/img3_0/home/位图25.png'),"name": "VR",
              default_game_id:4393,
              platform_id:121
            },
          ]
        },
      ],
    }
  },
  created () {
    this.getLottery()
  },
  methods: {
    cpTypeChange(index){
      this.curCpType = index
    },
    getLottery () {
      this.$loading({
        mask: false
      })
      const { cateId } = this
      hotLottery({
        game_cate_id: cateId
      }).then(res => {
        const { code, data, msg } = res.data
        if (code === 0) {
          this.lists = data
          // const lists = []
          // data.data.forEach(item => {
          //   if (item.is_hot && item.pic) {
          //   lists.push(item)
          //   }
          // })
          // this.lists = lists
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
.float-wrap{
  .game-item{
    > .van-image{
      min-height: 180px;
      /deep/ img[lazy="loading"]{
        height: 180px;
        width: auto;
      }
    }
    &.tall{
      > .van-image {
        min-height: 390px;
        /deep/ img[lazy="loading"]{
          height: 390px;
          width: auto;
        }
      }
    }
  }
}

.lotteries{
  .lottery{
    padding-left: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
  }
  .game{
    text-align: center;
    float:left;
    width: 25%;
    /deep/ .van-image{
      img{
        border-radius: 8px;
        width:120px;
        height:120px;
      }
    }
    h3{
      text-align: center;
      margin-top: 10px;
      margin-bottom: 30px;
      line-height: 60px;
      font-size: 24px;
    }
  }
}
</style>