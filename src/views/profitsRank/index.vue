<template>
  <div class="profits-rank">
    <Header :title="title" />
    <div class="m-body gap">
      <div class="rank-tips">此排名取前20名数据，每24小时更新一次</div>
      <ul class="ranks">
        <li
          v-for="(item, index) in dataProfitsRank.slice(0, 20)"
          :key="index"
          :class="{'first-three': index < 3}"
        >
          <div class="head" :data-index="`NO.${index+1}`">
            <van-image :src="require('@assets/img3_0/otherIcon/avatar@2x.png')" />
            <div class="desc">
              <p>{{ $hideUsername(item.username) }}</p>
              <p>{{ item.created_at || '2019-09-18 12:08:41' }}</p>
            </div>
          </div>
          <div class="body">
            <h3>盈利 {{ item.num | currency('¥') }}</h3>
            <div class="action" @click="goGame(item)">
              <span>沾沾喜气</span>
              <van-icon name="down" />
            </div>
          </div>
          <span class="tag">{{ $platformName(item.platform_id, allPlatforms) }}{{allCates[item.game_cate_id]}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '@/components/n-header'
import { mapState, mapActions } from 'vuex'

export default {
  name: "ProfitsRank",
  data() {
    return {
      title: '实时盈利榜'
    }
  },
  components: {
    Header
  },
  created() {
    !this.dataProfitsRank.length && this.getProfitsRank()
  },
  computed: {
    ...mapState('global', ['dataProfitsRank']),
    ...mapState('games', ['allPlatforms','allCates','gameCatesPlatforms'])
  },
  methods: {
    ...mapActions('global', [
      'getProfitsRank'
    ]),
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

<style scoped lang="less">
.m-header.van-nav-bar{
  background:@bg-color;
}
/deep/.m-body{
  margin-top: 88px;
}
.rank-tips{
  font-size: 28px;
  color: @primary-text-color;
  margin-bottom: @space-gap;
}
.ranks{
  display: flex;
  flex-wrap: wrap;
  li{
    position: relative;
    width: 100%;
    margin-bottom: @space-gap;
    background-color: @bg-card-color;
    border-radius: 8px;
    padding: @space-gap;
    &.first-three{
      .head:before{
        color: @primary-color;
      }
    }
    &:last-child{
      margin-bottom: 0;
    }
    .head{
      position: relative;
      padding-left: 100px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      &:before{
        content: attr(data-index);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        font-size: 32px;
        font-weight: 500;
      }
      .van-image {
        width: 72px;
        // /deep/ img {
        //   width: 72px;
        // }
      }
      .van-icon{
        font-size: 72px;
        color: @primary-color;
      }
      .desc{
        flex: 1;
        padding-left: 15px;
        p{
          line-height: 36px;
        }
        p:first-child{
          font-size: 28px;
          color: #fff;
        }
        p:last-child{
          font-size: 24px;
          color: #fff;
        }
      }
    }
    .body{
      position: relative;
      height: 72px;
      padding-left: 100px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      h3{
        font-size: 36px;
        font-weight: 500;
        color: @primary-color;
        margin: 0;
      }
      .action{
        display: flex;
        align-items: center;
        color: #FF6666;
        font-size: 26px;
        .van-icon{
          transform: rotate(-90deg);
        }
      }
    }
    .tag{
      position: absolute;
      right: 0;
      top: @space-gap;
      background-color: @primary-color;
      border-radius: 22px 0 0 22px;
      line-height: 44px;
      font-size: 20px;
      color: #ccc;
      padding-left: 20px;
      padding-right: 15px;
    }
  }
}
</style>
