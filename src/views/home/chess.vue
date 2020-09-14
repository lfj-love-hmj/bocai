<template>
  <div class="chess">
    <div class="games-wrap">
      <template
        v-for="(item, index) in games"  
      >
        <div
          v-show="!item.hide || item.hide.indexOf($projectname) == -1"
          :class="['game-item',{'gray-scal':$getGameStatus(item,'棋牌')}]"
          :key="index"
          @click="$playGame(item,'棋牌')"
        >
          <van-image :src="item.thumb" lazy-load />
          <h3>
            {{ item.title }}
            <span v-show="$getGameStatus(item,'棋牌')">(维护中)</span> 
          </h3>
        </div>
      </template>
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
.chess{
  padding-top: 30px;
  .games-wrap {
    .game-item{
      .van-image{
        min-height: 330px;
      }
      h3{
        text-align: center;
        line-height: 50px;
        margin-bottom: 0;
      }
    }
  }
}
</style>