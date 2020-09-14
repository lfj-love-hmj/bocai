<template>
  <div class="matches" v-if="matches.length">
    <van-swipe
      :autoplay="3500"
      :show-indicators="false"
      ref="match"
      @change="onChange"
    >
      <van-swipe-item
        class="match"
        v-for="(item, index) in matches"
        @click="$playGame({default_game_id:17,game_platform_id:28})"
        :key="index"
      >
        <h3>{{ item.title }}</h3>
        <p>{{ item.date }}</p>
        <ul class="club">
          <li>
            <van-image :src="item.left.img" fit="cover" lazy />
            <span>{{ item.left.name }}</span>
          </li>
          <li class="vs">
            <van-image :src="require('@assets/img3_0/home/sports/vs@2x.png')" fit="cover" lazy />
          </li>
          <li>
            <van-image :src="item.right.img" fit="cover" lazy />
            <span>{{ item.right.name }}</span>
          </li>
        </ul>
        <ul class="rate">
          <li>{{ item.left.rate }}</li>
          <li class="vs">{{ item.middle || '' }}</li>
          <li>{{ item.left.rate }}</li>
        </ul>
      </van-swipe-item>
    </van-swipe>
    <div class="prev" @click="prev" :class="{ disabled: active === 0 }">
      <van-icon name="arrow-left" />
    </div>
    <div class="next" @click="next" :class="{ disabled: active >= matches.length - 1 }">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
import { GAME_CATE_ID_SPORTS, GAME_CATE_ID_ESPORTS } from '@/store/types'
import { sports, esports } from '@/api/games'
export default {
  name: 'Match-Swipe',
  props: ['cateId'],
  data () {
    return {
      active: 0,
      matches: []
    }
  },
  created () {
    this.getMatch()
  },
  methods: {
    getMatch () {
      let request
      if (this.cateId === GAME_CATE_ID_SPORTS) {
        request = sports
      } else if (this.cateId === GAME_CATE_ID_ESPORTS) {
        request = esports
      }
      request && request().then(res => {
        const { code, data, msg } = res.data
        if (code === 0) {
          this.matches = data
        } else {
          console.log(msg)
        }
      })
    },
    prev () {
      const swipe = this.$refs.match
      const len = swipe.children.length
      const { active } = this
      if (active === 0) {
        return false
      }
      let prev = active - 1
      if (prev < 0) {
        prev = len - 1
      }
      swipe.swipeTo(prev)
    },
    next () {
      const swipe = this.$refs.match
      const len = swipe.children.length
      const { active } = this
      if (active >= len - 1) {
        return false
      }
      let next = active + 1
      if (next >= len) {
        next = 0
      }
      swipe.swipeTo(next)
    },
    onChange (index) {
      this.active = index
    }
  }
}
</script>

<style lang="less" scoped>
.matches{
  position: relative;
  margin-bottom: @space-gap;
  background-color: @bg-card-color;
  border-radius: 8px;
  /deep/ .match{
    text-align: center;
    color: rgba(#fff, .5);
    padding: 30px 90px;
    h3{
      font-size: 28px;
      font-weight: 500;
      color: #fff;
      margin: 0 0 15px;
    }
    ul{
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.rate{
        // margin-top: @space-gap;
        li span {
          color: rgba(#fff, .5);
        }
      }
    }
    li{
      width: 30%;
      span{
        display: block;
        line-height: 50px;
        color: #fff;
        white-space: nowrap;
      }
      .van-image{
        width: 88px;
      }
      &.vs{
        width: 40%;
        .van-image img{
          width: 72px;
        }
      }
    }
  }
  .prev,
  .next{
    position: absolute;
    width: 52px;
    height: 72px;
    top: 50%;
    transform: translateY(-50%);
    background-color: @bg-color;
    display: flex;
    align-items: center;
    justify-content: center;
    .van-icon{
      font-size: 40px;
      color: #979797;
    }
    &.disabled{
      opacity: .4;
    }
  }
  .prev{
    left: 0;
    border-radius: 0 8px 8px 0;
  }
  .next{
    right: 0;
    border-radius: 8px 0 0 8px;
  }
}
</style>
