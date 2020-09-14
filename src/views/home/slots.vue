<template>
  <div class="slots">
    <div class="jackpot" v-if="$projectname != 10015">
      <template v-if="['wanqu','chobet','10016','10021', '10046'].indexOf($projectname) !== -1||(aoMenUi.includes($projectname))">
        <img src="@assets/img3_0/home/slots/light@2x.png" class="light">
        <img src="@assets/img3_0/home/slots/light2@2x.png" class="light2">
      </template>
      <img v-else src="@assets/img3_0/home/slots/jackpot-bg@2x.png" class="bg">
      <div class="jackpot-text" v-if="jackpotSettings.startVal">
        <h3>
          <dfn>CNY</dfn>
          <v-countup
            :duration="jackpotSettings.duration"
            :decimals="jackpotSettings.decimals"
            :start-value="jackpotSettings.startVal"
            :end-value="jackpotSettings.endVal"
          />
        </h3>
        <p>奖金池数值</p>
      </div>
    </div>

    <!-- 最新爆奖 -->
    <div class="winner-lists" v-if="winnerlists.length">
      <div class="ui-title">
        <h2>最新爆奖</h2>
    </div>
      <RankSwipe :rankData="winnerlists.slice(0, 20)" />
    </div>

    <nav class="filter-nav">
      <van-tabs
        v-model="active"
        :color="$colorjs.baseColor"
        line-height="2px"
        :ellipsis='false'
        @change="onTabChange"
        swipeable
      >
        <van-tab
          v-for="item in navs"
          :title="item.title"
          :key="item.name"
        />
      </van-tabs>
      <div class="search">
        <SearchTrigger
          :category="cateId"
          :nav="nav"
          :payforline="payforline"
          :platform="platform"
          />
      </div>
    </nav>

    <div class="filters" v-show="active !== 4">
      <div class="labels platform">
        <div>
          <label
            :class="{ active: !platform }"
            @click="onPlatformClick(null)"
          >全部平台</label>
          <template v-for="(item, index) in platformsSlot">
            <label
              v-if="['ALLBET'].indexOf(item.name) === -1"
              :key="index"
              :class="{ active: platform && platform.id === item.id }"
              @click="onPlatformClick(item)"
            >{{ item.name }}</label>
          </template>
          <!-- <van-tabs
            class="game-card-tabs"
            v-model="active"
            animated
            swipeable
          >
            <van-tab title="全部平台"></van-tab>
            <van-tab
              v-for="(item, index) in platforms"
              :key="index"
              :title="item.game_platform_name"
            >
            </van-tab>
          </van-tabs> -->
        </div>

      </div>
      <!-- <div class="labels">
        <label
          :class="{ active: !gameType }"
          @click="onGameTypeClick(null)"
        >全部类型</label>
        <label
          v-for="(item, index) in gameTypes"
          :key="index"
          :class="{ active: gameType && gameType.name === item.name }"
          @click="onGameTypeClick(item)"
        >{{ item.title }}</label>
      </div> -->
      <div class="labels">
        <label
          :class="{ active: !payforline }"
          @click="onPayforlineClick(null)"
        >全部赔付线</label>
        <label
          v-for="(val, key) in payforlineData"
          :key="key"
          :class="{ active: key === payforline }"
          @click="onPayforlineClick(key)"
        >{{ val.replace('线', '') }}</label>
      </div>
    </div>

    <!-- <div class="search-info" v-if="keyword">
      <span>{{ keyword }}</span>的搜索结果 <span @click="clearSearch">清除</span>
    </div> -->

    <van-list
      class="games"
      v-model="loading"
      :finished="finished"
      finished-text="不要滑了，已经到底了！"
      @load="onLoad"
      :immediate-check="false"
    >
      <template v-if="lists.length">
        <van-cell
          v-for="(item, index) in lists"
          :key="index"
        >
          <div
            class="game-item"
            slot="default"
          >
            <!-- <van-image
              :src="item.pic"
              fit="cover"
              lazy
              @click="$playGame(item)"
            /> -->
            <div class="item-image" :style="{backgroundImage: `url(${item.pic})`}" @click="$playGame(item)"></div>
            <template v-if="nav && nav.name === 'latest'">
              <span v-if="item.is_new" :class="['tag', 'new']">new</span>
              <span v-else-if="item.is_hot" :class="['tag', 'hot']">hot</span>
            </template>
            <template v-else>
              <span v-if="item.is_hot" :class="['tag', 'hot']">hot</span>
              <span v-else-if="item.is_new" :class="['tag', 'new']">new</span>
            </template>
            <div class="info">
              <h3><span v-if="getPlatformNameById(item.game_platform_id)">{{ getPlatformNameById(item.game_platform_id) }}</span>{{ item.name }}</h3>
              <span class="action">
                <!-- <van-icon @click="doFavorite(item.id,index)" name='like' :color="item.is_favorite === 2 ? '#e8e9eb':'#9a5dff'" /> -->
                <van-icon @click="doFavorite(item.id,index)" :name="item.is_favorite === 2 ?'like-o':token?'like':'like-o'" />
              </span>
            </div>
          </div>
        </van-cell>
      </template>
      <template v-else>
        <div class="empty-game">
          <img src="@assets/img3_0/error/kong@2x.png" alt="">
        </div>
      </template>
    </van-list>
    <!-- <GameSearch v-if="gameSearch && gameSearch.visible" @result="showResult" /> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { GAME_CATE_ID_SLOTS } from '@/store/types'
import RankSwipe from './components/rank-swipe'
// import GameSearch from '../../components/search/search'
import {
  jackpots,
  getpayforline,
  getplatformgameidsv2
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
      platformsSlot: [],
      // aoMenUi:['takchun','Gdh','Js3','Mgm8','Wns1','Cod8','Xpj28','Yh8','Yl0','ybh']
      aoMenUi:['takchun', '10012', '10013','10014','10020', 'mgm8', '10006', '10011', '10007', '10009', '10010', '10008','10018','10019','10034','10057']
    }
  },
  created () {
    this.init()
    this.getJackpots()
    !this.dataProfitsRankOriginal && this.getProfitsRank()
    this.getpayforline()
    this.getPlatFormSlot()
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
    async getPlatFormSlot() {
      const { cateId } = this
      const { data } = await getplatformgameidsv2()
      data.data.map(item => {
        if(item.game_cate_id == cateId) {
          this.platformsSlot = item.list_data.filter(item => item.status === 1) || []
        }
      })
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
  background-image:url("~@assets/img3_0/home/slots/jackpot-bg@2x.png");
  background-size: contain;
  background-repeat: no-repeat;
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
  // .filters{
  //   /deep/.labels{

  //   }
  // }
}
.game-item {
  .item-image{
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
.search-trigger {
  .van-icon{
    color: @primary-color;
  }
  color: #fff !important;
}
.game-card-tabs{
  // background:#1e1e1e;
  // /deep/.van-tabs__nav{
  //   background:none;
  // }
  // /deep/ .van-tabs__nav--card .van-tab{
  //   border:0;
  //   padding: 0 @space-gap;
  //   line-height: 68px;
  //   color: #ccc;
  //   border-radius: 68px;
  // }
  // /deep/.van-tabs__nav--card .van-tab.van-tab--active{
  //   color: #9a5dff;
  //   border-color: #9a5dff;
  //   background-color:#1e1e1e;
  //   font-weight: 500;

  // }
  // /deep/.van-tabs .van-tabs__wrap{
  //   border-bottom: 0 !important;
  // }
}
// .filter-nav{
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // .van-tabs{
  //   flex: 1
  // }
  // .search-trigger{
  //   width: 150px;
  // }
// }
</style>
