<template>
  <div class="casino">
    <div class="games-wrap float-wrap">
      <div class="game-item"
        v-for="item in casinos"
        :key="item.name"
        :class="[item.name, item.name === 'ag' ? 'tall' : '',{'gray-scal':$getGameStatus(item,'真人')}]"
        @click="$playGame(item,'真人')"
           v-if="item.name!=='sunbet'"
      >
        <van-image lazy-load :src="item.thumb" />
        <div class="game-info">
          <h3>
            {{ item.title }}
            <span v-show="$getGameStatus(item,'真人')">(维护中)</span>
          </h3>
          <h4><i>{{item.name.toUpperCase()}} LIVE</i></h4>
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
    return {
      casinos,
      vid: null
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
    border: 2px solid @border-color-base;
    border-radius: @border-radius-8px;
    overflow: hidden;
    height: 180px;
    > .van-image{
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
