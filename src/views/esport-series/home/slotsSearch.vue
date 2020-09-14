<template>
  <div class="slots">
    <van-nav-bar
      title="更多电子游戏"
      class="m-header"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <!--<van-icon name="search" size="18" />-->
        <div class="search">
        <SearchTrigger
        :category="cateId"
        :nav="nav"
        :payforline="payforline"
        :platform="platform"
        />
        </div>
      </template>
    </van-nav-bar>
    <!-- 最新爆奖 -->
    <div class="winner-lists" v-if="winnerlists.length">
      <div class="ui-title">
        <h2>最新爆奖</h2>
    </div>
      <RankSwipe :rankData="winnerlists.slice(0, 20)" />
    </div>

    <van-sticky :offset-top="42" style="box-shadow:0px 4px 8px 0px rgba(0,0,0,0.06);background-color: #000">
    <nav class="filter-nav">
      <van-tabs
        v-model="active"
        :color="$colorjs.baseColor"
        line-height="2px"
        :ellipsis='false'
        :title-active-color="$colorjs.baseColor"
        @change="onTabChange"
        swipeable
      >
        <van-tab
          v-for="item in navs"
          :title="item.title"
          :key="item.name"
        />
      </van-tabs>
      <!--<div class="search">-->
        <!--<SearchTrigger-->
          <!--:category="cateId"-->
          <!--:nav="nav"-->
          <!--:payforline="payforline"-->
          <!--:platform="platform"-->
          <!--/>-->
      <!--</div>-->
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
        </div>

      </div>
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
    </van-sticky>
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
            <van-image
              :src="item.pic"
              fit="cover"
              lazy
              @click="$playGame(item)"
            />
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
          <img :src="$imgs['error/kong@2x']" alt="">
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
import RankSwipe from './rank-swipe'
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
      platformsSlot: [],
      slotsType:'',
      projectName: process.env.VUE_APP_PROJECT_NAME,
      // aoMenUi:['takchun','Gdh','Js3','Mgm8','Wns1','Cod8','Xpj28','Yh8','Yl0','ybh']
      aoMenUi:['takchun', '10012', '10013','10014','10020', 'mgm8', '10006', '10011', '10007', '10009', '10010', '10008','10034']
    }
  },
  created () {
    this.slotsType = this.$route.query.platform
    // if(sessionStorage.getItem('platform')){
    //   this.platform = JSON.parse(sessionStorage.getItem('platform'))
    // }
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
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push({path:'/gameSearch'})
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
        console.log(res)
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
  // .filters{
  //   /deep/.labels{

  //   }
  // }
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
.filter-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid rgba(26,26,26,1);;
  padding: 0 30px;

  .van-tabs{
    width: 100%;
  }
  /deep/ .van-tab{
    color: #7B8BAB;
  }
  /deep/.van-tab--active {
    .van-tab__text  {
      color: #fff;
      font-size: 32px;
    }
  }
  .van-tabs {
    border-bottom: none;
    /deep/ .van-tabs__nav {
      background-color: @bg-color !important;
    }
    .van-tab,
    .van-tabs__wrap,
    .van-tabs__nav {
      height: 80px;
      line-height: 80px;
      font-size: 28px;
    }
    .van-tabs__wrap {
      border-bottom: none;
    }
  }
  .search {
    width: 30%;
    padding: 0 30px;
  }
}
.filters{
  margin-top: 20px;
}
.labels {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: @space-gap;
  padding: 0 30px;
  &.platform {
    display: block;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      // width:1100px;
      // overflow: hidden;
      // overflow: auto;
      // display: flex;
      // justify-content: space-between;
      display: flex;
      float: left;
      min-width: 100%;
      label {
        &:first-child {
          min-width: 180px;
        }
        min-width: 40px;
        text-align: center;
        // float:left;
        // line-height: 68px;
        // height:68px;
      }
    }
  }
  label {
    width: auto;
    padding: 0 @space-gap;
    line-height: 56px;
    color: #999999;
    border-radius: 56px;
    font-size: 24px;
    // transition: all .45s ease-out;
    border: 2px solid transparent;
    &.active {
      color: #0FC59E;
      font-weight: 500;
      background:rgba(32,32,32,1);
    }
  }
}

.search-info {
  margin-bottom: @space-gap;
  text-align: center;
  margin-top: @space-gap + 50;
  > span {
    color: @primary-color;
    margin-right: 10px;
  }
}
.van-list {
  &.games {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 90px;
    justify-content: space-between;
    margin-top: 140px;
    padding: 0 30px;
    .empty-game {
      width: 100%;
      text-align: center;
      img {
        width: 120px;
        margin: 0 auto;
      }
    }
    .van-cell {
      position: relative;
      width: 330px;
      margin-bottom: @space-gap;
      // margin-right: @space-gap;
      padding: 0;
      border-radius: 8px;
      overflow: hidden;
      background: #fff;
      box-shadow:0px 2px 10px 0px rgba(0,34,80,0.05);
      // &:nth-child(2n) {
      //   margin-left: @space-gap;
      //   margin-right: 0;
      // }
      &:after {
        border-bottom: none !important;
      }
      .game-item {
        color: #fff;
        position: relative;
        .tag {
          width: 100px;
          height: 100px;
          position: absolute;
          right: 0;
          top: 0;
          text-align: center;
          padding-top: 70px;
          line-height: 30px;
          font-size: 20px;
          background-image: linear-gradient(to right, #FF9A5D, #FF3937);
          text-transform: uppercase;
          transform: rotate(45deg) translate(-20%, -20%);
          transform-origin: 100% 100%;
          &.new {
            background-image: linear-gradient(to right, #05D0DA, #279CF8);
          }
        }
        .info {
          padding: 20px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #202020;
          h3 {
            color: #fff;
          }
          .van-icon {
            font-size: 40px;
            color: #979797;
            &.van-icon-like {
              color: #DE4141;
            }
          }
        }
      }
      h3 {
        font-size: 28px;
        margin: 0;
        color: #333;
        span {
          background-color: @primary-color;
          color: #fff;
          font-size: 20px;
          padding: 2px 6px;
          font-weight: 300;
          margin-right: 6px;
          border-radius: 5px;
        }
      }
    }
    .van-image {
      width: 100%;
      height: 200px;
      background: #000;
    }

    /deep/ .van-list__loading,
    /deep/ .van-list__finished-text {
      width: 100%;
      padding-bottom: @space-gap;
      display: block;
      text-align: center;
    }
    /deep/ .van-loading__text{
      font-size: 24px;
    }
  }

}
/deep/ .search-trigger{
  background-color: transparent;
  span{
    display: none;
  }
}
</style>
