<template>
  <div class="casino">
    <main class="main">
      <!-- <van-image @click="$router.push('/baccarat')" class="brand" lazy-load :src="require('@assets/img3_0/home/casino/banner@2x.jpg')" /> -->
      <Roadmap
        :canvasHeight="76"
        :defaultVid="vid"
        :cellSize="12"
        :gameData="casinos.filter(item => item.name == 'ag')[0]"
        :type="'casino'"
      />
    </main>

    <div class="games-wrap float-wrap mb-gap">
      <div class="game-item"
        v-for="item in casinos"
        :key="item.name"
        :class="[item.name, item.name === 'ag' ? 'tall' : '',{'gray-scal':$getGameStatus(item,'真人')}]"
        @click="$playGame(item,'真人')"
      >
        <!-- <img v-lazy="require(`@assets/img3_0/home/casino/${item.thumb}`)"> -->
        <van-image lazy-load :src="item.thumb" />
        <div class="game-info">

          <h3 v-if="$projectname==='10057'">
            {{ item.title?item.title:item.name }}
            <span v-show="$getGameStatus(item,'真人')">(维护中)</span>
          </h3>
          <h3 v-else>
            {{ item.title }}
            <span v-show="$getGameStatus(item,'真人')">(维护中)</span>
          </h3>
          <p v-for="(d, index) in item.desc" :key="index">{{ d }}</p>
          <template v-if="!item.desc.length&&item.title=='eBET'">
            <p>首创超级</p>
            <p>多台百家乐</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Roadmap from '@/components/roadmap'
import { casinoPlatforms as casinos } from '@/utils/platform'
export default {
  name: 'Casino',
  components: {
    Roadmap
  },
  data () {
    // const casinos = [{
    //   name: 'ag',
    //   thumb: 'ag@2x.png',
    //   title: 'AG平台',
    //   desc: ['亚洲市场', '占有率第一领导品牌']
    // }, {
    //   name: 'bbin',
    //   thumb: 'bbin@2x.png',
    //   title: 'BBIN',
    //   desc: ['最具影响力', '真人平台']
    // }, {
    //   name: 'og',
    //   thumb: 'og@2x.png',
    //   title: 'OG平台',
    //   desc: ['贴近亚洲', '文化市场']
    // }, {
    //   name: 'allbet',
    //   thumb: 'allbet@2x.png',
    //   title: 'ALLBET平台',
    //   desc: ['首创超级', '多台百家乐']
    // }, {
    //   name: 'sunbet',
    //   thumb: 'sunbet@2x.png',
    //   title: 'SunBet平台',
    //   desc: ['互动多合一', '快感加倍']
    // }]
    return {
      casinos,
      vid: null,
      smhCasinos:[
        {
          default_game_id: 1,
          game_platform_id: 1,
          game_platform_name: "AG",
          game_platform_mark: "亚洲市场占有率第一领导品牌",
          name: 'ag',
          title: 'AG平台',
          thumb: this.$imgs['home/casino/ag@2x'],
          classname: 'tall',
          desc: ['亚洲市场', '占有率第一领导品牌']
        },
        {
          default_game_id: 15,
          game_platform_id: 3,
          game_platform_name: "BBIN",
          game_platform_mark: "最具影响力真人平台",
          name: 'bbin',
          title: 'BBIN',
          thumb: this.$imgs['home/casino/bbin@2x'],
          desc: ['最具影响力', '真人平台']
        },
        {
          default_game_id: 2101,
          game_platform_id: 20,
          game_platform_name: "OG",
          game_platform_mark: "贴近亚洲文化市场",
          name: 'og',
          title: 'OG平台',
          thumb: this.$imgs['home/casino/og@2x'],
          desc: ['贴近亚洲', '文化市场']
        },
        {
          default_game_id: 14,
          game_platform_id: 4,
          game_platform_name: "ALLBET",
          game_platform_mark: "首创超级多台百家乐",
          name: 'allbet',
          thumb: this.$imgs['home/casino/allbet@2x'],
          title: 'ALLBET平台',
          desc: ['首创超级', '多台百家乐']
        },
        {
          default_game_id: 3137,
          game_platform_id: 104,
          game_platform_name: "SunBet",
          game_platform_mark: "互动多合一快感加倍",
          name: 'sunbet',
          thumb: this.$imgs['home/casino/sunbet@2x'],
          title: 'SunBet平台',
          desc: ['互动多合一', '快感加倍']
        },
        {
          default_game_id: 3158,
          game_platform_id: 105,
          game_platform_name: "EBET",
          game_platform_mark: "互动多合一快感加倍",
          name: 'ebet',
          thumb: this.$imgs['home/casino/ebet@2x'],
          title: 'EBET平台',
          desc: ['互动多合一快感加倍']
        },
        {
          default_game_id: 3178,
          game_platform_id: 106,
          game_platform_name: "GOLD DELUXE",
          game_platform_mark: "互动多合一快感加倍",
          name: '',
          thumb: this.$imgs['home/casino/gold@2x'],
          title: 'GOLD DELUXE平台',
          desc: ['互动多合一快感加倍']
        },
        // {
        //   default_game_id: null,
        //   game_platform_id: null,
        //   game_platform_name: "salon",
        //   game_platform_mark: "互动多合一快感加倍",
        //   name: 'salon',
        //   thumb: this.$imgs['home/casino/salon@2x'],
        //   title: 'SALON平台',
        //   desc: ['互动多合一快感加倍']
        // }
      ]
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.main{
  margin: @space-gap 0;
  background: @bg-card-color;
  border-radius: @border-radius-8px;
  .brand{
    width: 100%;
    min-height: 240px;
    /deep/ img{
      display: block;
      width: 100%;
      border-radius: 10px 10px 0 0;
      &[lazy="loading"]{
        height: 240px;
        width: auto;
      }
    }
  }
  .roadmap{
    background-color: @bg-card-color;
    border-radius: 0 0 8px 8px;
  }
}

.float-wrap{
  .game-item{
    // .van-image__img{
    //   border: 2px solid @border-color-base;
    // }
    // border-radius: @border-radius-8px;
    overflow: hidden;
    height: 180px;
    > .van-image{
      // border: 2px solid @border-color-base;
      border-radius: @border-radius-8px;
      /deep/ img[lazy="loading"]{
        height: 180px;
        width: auto;
      }
    }
    &.tall{
      height: 390px;
      > .van-image {
        /deep/ img[lazy="loading"]{
          height: 390px;
          width: auto;
        }
      }
    }
  }
}
</style>
