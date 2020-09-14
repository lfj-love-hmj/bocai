<template>
  <div class="slots">
    <div class="games-wrap float-wrap">
      <div class="game-item"
           :class="[item.text, item.name === 'CQ9' ? 'large' : '',item.name === 'mg' ? 'large' : '',{'gray-scal':$getGameStatus(item,'电子')}]"
           v-for="(item,index) in slotsData"
           @click="go('/slotsSearch',1,item)">
        <van-image lazy-load :src="$imgs['home/slots/home_slot_pic'+(index+1)+'@2x']" />
        <div class="game-info">
          <h3>{{item.title}}<span v-show="$getGameStatus(item,'电子')">(维护中)</span> </h3>
          <!--<h4 v-if="item.name === 'CQ9'"><i>{{item.name}} SLOT</i></h4>-->
          <h4><i>{{item.name.toUpperCase()}} SLOT</i></h4>
        </div>
      </div>
      <div class="game-item" @click="go('/slotsSearch',0,'')">
        <van-image lazy-load :src="$imgs['home/home_slot_pic4@2x']" />
        <div class="game-info game-info-more">
          <h3>查看更多</h3>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { GAME_CATE_ID_SLOTS } from '@/store/types'
import RankSwipe from './rank-swipe'
import { hotGamesSport as gamesSport } from '@/utils/platform'
// import GameSearch from '../../components/search/search'
import {
  jackpots,
  getpayforline
} from '@/api/games'

import mixins from '@/mixins/chess-slots'

import VueCountUp from 'vue-countupjs'
Vue.use(VueCountUp)

export default {
  name: 'Slots',
  mixins: [mixins],
  props: ['slotsType'],
  components: {
    RankSwipe,
    // GameSearch
  },
  data () {
    const navs = [{
      title: '全部',
      name: ''
    }, {
      title: '最热',
      name: 'hot'
    }, {
      title: '最新',
      name: 'latest'
    }, {
      title: '奖金池',
      name: 'reward'
    }, {
      title: '我的收藏',
      name: 'fav'
    }]
    return {
      navs,
      payforlineData: null,
      payforline: 0,
      cateId: GAME_CATE_ID_SLOTS,
      jackpotSettings: {},
      decimals: 2,
      duration: 10000000,
      projectName: process.env.VUE_APP_PROJECT_NAME,
      // aoMenUi:['takchun','Gdh','Js3','Mgm8','Wns1','Cod8','Xpj28','Yh8','Yl0','ybh']
      aoMenUi:['takchun', '10012', '10013','10014','10020', 'mgm8', '10006', '10011', '10007', '10009', '10010', '10008','10034','10057'],
      slotsData:[{
        id: 21,
        name: "CQ9",
        code: "cq9",
        title:'CQ9电子',
        game_cate_id: 2,
        default_game_id: 2102,
        game_platform_id: 1,
        h5_default_game_id: "",
        type: '电子',
        text: 'slots',
        thumb: 'home_slot_pic1',
        desc: ['超多精品游戏', '亿万奖池爆不停']
      },{
        id: 7,
        name: "mg",
        code: "mg",
        title:'MG电子',
        game_cate_id: 2,
        default_game_id: 647,
        game_platform_id: 7,
        h5_default_game_id: "",
        type: '电子',
        text: 'slots',
        desc: ['超多精品游戏', '亿万奖池爆不停']
      },{
        default_game_id: 3990,
        game_platform_id: 116,
        text: 'slots',
        name: 'pt',
        type: '电子',
        thumb: 'home_slot_pic3',
        title: 'PT电子',
        desc: ['超多精品游戏', '亿万奖池爆不停']
      }]
    }
  },
  created () {
    this.init()
    this.getJackpots()
    !this.dataProfitsRankOriginal && this.getProfitsRank()
    this.getpayforline()
  },
  computed: {
    // ...mapState('games', ['allPlatforms']),
    ...mapState('global', ['dataProfitsRankOriginal']),
    winnerlists () {
      const { dataProfitsRankOriginal } = this
      if (!dataProfitsRankOriginal) {
        return []
      }
      return  dataProfitsRankOriginal[1] ? dataProfitsRankOriginal[1].list : []
    }
  },
  watch: {
    payforline () {
      this.pageNo = 1
      this.loadData(true)
    },
    slotsType() {
      this.loadData()
    }
  },
  methods: {
    go(path,i,item){
      if(i){
        this.$router.push({path:path,query:{platform:item.name}})
      }else{
        this.$router.push({path:path})
        // if(sessionStorage.getItem('platform')){
        //   sessionStorage.removeItem('platform')
        // }
      }
    },
    getJackpots () {
      const { decimals, duration } = this;
      jackpots().then(res => {
        const { code, data, msg } = res.data
        if (code === 0) {
          const jackpot = data[1].pot_money
          this.jackpotSettings = {
            startVal: jackpot,
            endVal: jackpot * 2,
            duration,
            decimals
          }
        } else {
          console.log(msg)
        }
      })
    },
    getpayforline () {
      getpayforline().then(res => {
        const { code, data, msg } = res.data
        if (code === 0) {
          this.payforlineData = data
        } else {
          console.log(msg)
        }
      })
    },
    onPayforlineClick (payforline) {
      this.payforline = payforline
    }
  }
}
</script>

<style lang="less" scoped>
.jackpot{
  position: relative;
  margin: @space-gap 0;
  width: 688px;
  height: 156px;
  .bg{
    display: block;
    width: 100%;
    // box-shadow: 0 20px 20px 0 rgba(@primary-color, .3);
  }
  .light,
  .light2{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  .light2{
    animation: fade 1s linear infinite forwards;
  }
  // .light{
  //   animation: fade 2s 1s linear infinite forwards;
  // }
  .jackpot-text{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: @space-gap;
    pointer-events: none;
    text-align: center;
    h3{
      color: @primary-color;
      font-size: 44px;
      margin: 0 0 15px;
      dfn{
        font-style: normal;
      }
    }
    p{
      font-size: 24px;
      color: #ccc;
    }
  }

}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.winner-lists{
  width: 100%;
  margin-bottom: @space-gap;
}

</style>
