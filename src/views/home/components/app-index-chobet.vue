<template>
  <div class="app-index-1 app-index-chobet">
    <div class="brand">
      <template v-for="(item, index) in brand">
        <div :key="index"  class="nvyou">
          <van-image v-if="index === 0" lazy-load :src="require('@assets/img3_0/home/nvyou@2x.png')" />
          <van-image v-if="index === 1" lazy-load :src="require('@assets/img3_0/home/cooperation@2x.png')" />
          <div class="content">
            <h2>{{item.top}}</h2>
            <p>{{item.bottom}}</p>
          </div>
        </div>
      </template>
    </div>
    <!-- 热门赛事 -->
    <div class="hot-games">
      <div class="ui-title">
        <h2>Popular Matches | <span>热门赛事</span></h2>
      </div>
      <SportSwipe />
    </div>
    <!-- 热门游戏 -->
    <div class="hot-games">
      <div class="ui-title">
        <h2>Top Games | <span>热门游戏</span></h2>
      </div>
      <template v-if="$projectname === '10046'">
        <div class="games-wrap float-wrap">
          <div class="game-item"
            v-for="item in games"
            :key="item.text"
            :class="[item.text, 'large',{'gray-scal':$getGameStatus(item,'体育')}]"
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
      </template>
      <template v-else>
        <div class="games-wrap">
          <template v-for="(item, index) in hotGames">
            <div class="game-item"
              :key="index"
              :class="[item.text,{'gray-scal':$getGameStatus(item,item.type)}]"
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
            </div>
          </template>
        </div>
      </template>
      
    </div>

    <!-- 品牌大使 -->
    <div class="brand-rion">
      <div class="ui-title">
        <h2>Brand Strength | <span>品牌实力</span></h2>
      </div>
      <div class="rion">
        <img src="@assets/img3_0/home/brand-rion@2x.png">
        <div v-if="['10046'].indexOf($projectname) == -1" class="content">
          <h2>Wu Lei</h2>
          <h2>武磊</h2>
          <p>超博将与武磊携手重塑传奇， <br/>共同创造体育事业最好的“答案”。</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Roadmap from '@/components/roadmap'
import SportSwipe from './sport-swipe'
import { chobetIndex } from '@/utils/platform'
import { sportsPlatformsBall as games } from '@/utils/platform'
import { hotGamesSport as gamesSport } from '@/utils/platform'

export default {
  name: 'app-index-1',
  components: {
    Roadmap,
    SportSwipe
  },
  data () {
    return {
      hotGames: chobetIndex,
      vid: null,
      brand: [
        {
          top: '武磊',
          bottom: `${this.$projectname === 'chobet'?'超博':'球天下'}形象大使`
        },
        {
          top: '西班牙人俱乐部',
          bottom: '独家合作伙伴'
        }
      ],
      sort: ['体育','棋牌','彩票','电子','电竞','捕鱼'],
      games,
      gamesSport
    }
  },
  created () {
    !this.dataProfitsRank.length && this.getProfitsRank()
    // this.sortHotGames()
  },
  computed: {
    ...mapState('global', ['dataProfitsRank'])
  },
  methods: {
    ...mapActions('global', [
      'getProfitsRank'
    ]),
    sortHotGames() {
      let temp = []
      this.sort.map(m => {
        this.hotGames.map(n => {
          if(n.type == m) {
            temp.push(n)
          }
        })
      })
      this.hotGames = temp
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
    width:40%;
    height: 150px;
    flex-grow: 2;
    position: relative;
    .content{
      position: absolute;
      top: 30px;
      left: 140px;
      h2{
        font-size: 20px;
        margin: 10px 0;
      }
      p{
        font-size: 16px;
      }
    }
  }
}
.ui-title{
  h2{
    color: #000;
    font-size: 32px;
  }
  span{
    font-size: 24px;
    line-height: 32px;
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
  margin-bottom: -12px;
  .rion{
    position: relative;
    img{
      display: block;
      width: 100%;
      border-radius: 10px;
    }
    .content{
      position:absolute;
      top: 20px;
      left: 40px;
      color: #000;
      h2{
        font-size: 42px;
        margin: 10px 0;
      }
      p{
        font-size: 24px;
        margin-top: 30px;
        line-height: 40px;
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
