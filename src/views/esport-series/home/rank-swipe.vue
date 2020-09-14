<template>
  <van-swipe
    class="profit-swipe"
    :loop="false"
    :width="220"
    :autoplay="4000"
    :show-indicators="false"
  >
    <van-swipe-item
      v-for="(item, index) in rankData"
      :key="index"
      class="swipe-rank-item"
    >
      <div class="box">
        <div class="info">
          <p class="login-name">会员 {{ $hideUsername(item.username) }}</p>
          <p>投注 {{ item.valid_bet | currency('¥') }}，盈利</p>
          <h3>{{ item.num | currency('¥') }}</h3>
        </div>
        <span class="tag">{{ $platformName(item.platform_id, allPlatforms) }}{{allCates[item.game_cate_id]}}</span>
        <div class="action" @click="goGame(item)">
          <img :src="$imgs['home/icon-fudai@2x']">
          <span>沾沾喜气</span>
        </div>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'RankItem',
  props: ['rankData'],
  computed: {
    ...mapState('games', ['allPlatforms','allCates','gameCatesPlatforms'])
  },
  methods:{
    goGame(val) {
      this.gameCatesPlatforms.forEach(item=> {
        if(val.game_cate_id == item.game_cate_id) {
          item.platform_list.forEach(a=> {
            if(a.game_platform_id == val.platform_id) {
              const obj = {
                default_game_id: a.default_game_id,
                platform_id: val.platform_id
              }
              this.$playGame(obj)
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.profit-swipe{
  // margin-left: -@space-gap;
  margin-right: -@space-gap;
  /deep/ .van-swipe-item{
    padding-right: @space-gap;
    // margin-right: @space-gap;
    color: #ccc;
    .box{
      position: relative;
      background-color: @bg-card-color;
      border-radius: 8px;
    }
    .info{
      padding: @space-gap;
      p{
        line-height: 1.5;
        margin-bottom: 15px;
      }
      .login-name{
        color: @primary-text-color;
      }
      h3{
        color: #fff;
        font-size: 30px;
        font-weight: 500;
        margin: 0;
        dfn{
          font-style: normal;
        }
      }
    }
    .tag{
      position: absolute;
      right: 0;
      top: @space-gap;
      background-color: #353435;
      border-radius: 22px 0 0 22px;
      line-height: 44px;
      font-size: 20px;
      color: #ccc;
      padding-left: 20px;
      padding-right: 15px;
    }
    .action{
      border-top: 1px solid #353435;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FF6666;
      font-size: 24px;
      font-weight: 500;
      padding: 20px 0;
      img{
        display: block;
        width: 40px;
        height: 40px;
        margin-right: 15px;
      }
    }
  }
}
</style>