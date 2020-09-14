<template>
  <div class="fishing">
    <div class="games-wrap float-wrap">
      <div class="game-item"
        v-for="(item, index) in games"
        :key="index"
        :class="[item.text, item.text === 'ag3d' ? 'tall' : item.text === 'bbin-dr' ? 'large' : '',{'gray-scal':$getGameStatus(item,'捕鱼')}]"
        @click="$playGame(item,'捕鱼')"
           v-if="item.title!=='GG捕鱼天下' && item.title!=='AG捕鱼王'"
      >
        <van-image lazy-load :src="require(`@assets/img3_0/home/fishing/${item.thumb}`)" />
        <div class="game-info">
          <h3>
            {{ item.title }}
            <span v-show="$getGameStatus(item,'捕鱼')">(维护中)</span>

          </h3>
          <h4><i>{{item.name.toUpperCase()}} FISHING</i></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GAME_CATE_ID_FISHING } from '@/store/types'
// import { getGameLists } from '@/api/games'
import { fishingPlatforms as games } from '@/utils/platform'
export default {
  name: 'Fishing',
  data () {
    // const games = [{
    //   name: 'ag3d',
    //   thumb: 'ag3d@2x.png',
    //   title: 'AG捕鱼王3D',
    //   desc: ['顶级渔场，一炮致富']
    // }, {
    //   name: 'pt',
    //   thumb: 'pt@2x.png',
    //   title: 'PT深海大赢家',
    //   desc: ['爆爽捕鱼快感']
    // }, {
    //   name: 'ag',
    //   thumb: 'ag@2x.png',
    //   title: 'AG捕鱼王',
    //   desc: ['四炮同场', '称霸海洋']
    // }, {
    //   name: 'bbin2',
    //   thumb: 'bbin2@2x.png',
    //   title: 'BBIN捕鱼大师2',
    //   desc: ['万炮齐发', '一网打尽']
    // }, {
    //   name: 'bbin',
    //   thumb: 'bbin@2x.png',
    //   title: 'BBIN捕鱼大师',
    //   desc: ['打鱼利器', '一手掌握']
    // }, {
    //   name: 'bbin-dr',
    //   thumb: 'bbin-dr@2x.png',
    //   title: 'BBIN捕鱼达人',
    //   desc: ['多样化技能', '快感加倍']
    // }, {
    //   name: 'mw',
    //   thumb: 'mw@2x.png',
    //   title: 'MW千炮捕鱼',
    //   desc: ['最高奖金400倍']
    // }, {
    //   name: 'gg',
    //   thumb: 'gg@2x.png',
    //   title: 'GG捕鱼天下',
    //   desc: ['天天捕 天天赢']
    // }]
    return {
      games,
      lists: [],
      cateId: GAME_CATE_ID_FISHING
    }
  },
  created () {
    // this.getLottery()
  },
  methods: {
    // getLottery () {
    //   this.$loading({
    //     mask: false
    //   })
    //   const { cateId } = this
    //   getGameLists({
    //     game_cate_id: cateId
    //   }).then(res => {
    //     const { code, data, msg } = res.data
    //     if (code === 0) {
    //       const lists = []
    //       data.data.forEach(item => {
    //         if (item.is_hot && item.pic) {
    //         lists.push(item)
    //         }
    //       })
    //       this.lists = lists
    //       this.$toast.clear()
    //     } else {
    //       console.log(msg)
    //     }
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>

</style>
