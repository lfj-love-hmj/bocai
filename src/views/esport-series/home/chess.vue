<template>
  <div class="chess">
    <div class="games-wrap">
      <div
        :class="['game-item',{'gray-scal':$getGameStatus(item,'棋牌')}]"
        v-for="(item, index) in games"
        :key="index"
        @click="$playGame(item,'棋牌')"
      >
        <van-image :src="item.thumb" lazy-load />
        <div class="game-info">
        <h3>
          {{ item.name.toUpperCase() }}
          <span v-show="$getGameStatus(item,'棋牌')">(维护中)</span>
        </h3>
        <h4><i>{{item.name.toUpperCase()}} BOARD</i></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GAME_CATE_ID_CHESS } from '@/store/types'
import { chessPlatforms as games } from '@/utils/platform'
export default {
  name: 'Chess',
  components: {
  },
  data () {
    return {
      games,
      cateId: GAME_CATE_ID_CHESS
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
