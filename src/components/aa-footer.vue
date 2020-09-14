<template>
  <div class="aa-footer">
    <!-- <AAGroup /> -->

    <div class="links" v-if="['chobet'].indexOf($projectname) !== '-1'">
      <router-link :to="{ path: '/agentHomepage' }">代理合作</router-link>
      <span />
      <router-link :to="{ path: '/help/tutorial' }" >新手教程</router-link>
      <span />
      <a @click="goWebPage">进入网页版</a>
    </div>

    <div class="corps">
      <div
        class="item"
        v-for="(item, index) in corps"
        :key="index"
        :class="[item.name]"
      >
        <van-image
          fit="cover"
          lazy-load
          :src="require(`@assets/img3_0/footer/${item.icon}`)"
        />
        <span>{{ item.title }}</span>
      </div>
    </div>

    <div v-if="siteInfo" class="copyright">
      {{siteInfo.copyright}}
    </div>
  </div>
</template>

<script>
import AAGroup from '@/components/aa-group'
import { mapState } from 'vuex'
export default {
  name: 'Footer',
  components: {
    AAGroup
  },
  data () {
    return {
      corps: [{
        title: '英国GC监督委员会',
        name: 'gc',
        icon: 'corp-bvi@2x.png',
      }, {
        title: '马耳他博彩牌照(MGA)认证',
        name: 'mga',
        icon: 'corp-gc@2x.png',
      }, {
        title: '英属维尔京群岛(BVI)认证',
        name: 'bvi',
        icon: 'corp-mga@2x.png',
      }, {
        title: '菲律宾监督博彩牌照',
        name: 'pg',
        icon: 'corp-pg@2x.png',
      }]
    }
  },
  computed: {
    ...mapState('global',['siteInfo'])
  },
  methods: {
    goWebPage () {
      const { origin } = window.location
      window.location.href = origin.replace('//m.', '//www.')+'?devType=pc'
      // window.location.href = origin.replace('//m.', '//www.')+'?devType=pc'
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@assets/styles/component/aa-footer.less';
.aa-footer{
  position: relative;
  border-radius: 8px;
  // padding: @space-gap;
  padding-bottom: @space-gap;
  &:before{
    content: '';
    position: absolute;
    left: -@space-gap;
    right: -@space-gap;
    bottom: 0;
    top: 0;
    // background: -webkit-linear-gradient(top, #1E1E1E, #1E1E1E 120px, #191919 120px, #191919);
    z-index: 0;
    pointer-events: none;
  }
  >div{
    position: relative;
    z-index: 1;
  }
  .links{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    margin-bottom: @space-gap;
    a{
      color: #fff;
      font-size: 28px;
      padding: 0 30px;
    }
    >span{
      width: 2px;
      height: 28px;
      background: #353435;
      margin: 0 10px;
    }
  }
  .corps{
    display: flex;
    flex-wrap: wrap;
    border: 2px solid #353435;
    border-radius: 5px;
    margin-bottom: @space-gap;
    .item{
      width: 50%;
      height: 150px;
      display: flex;
      // flex-wrap: wrap;
      flex-direction: column;
      // align-items: center;
      justify-content: center;
      text-align: center;
      border-left: 2px solid #353435;
      border-top: 2px solid #353435;
      &:nth-child(2n+1) {
        border-left: none;
      }
      &:first-child,
      &:nth-child(2) {
        border-top: none;
      }
      .van-image{
        height: 40px;
        display: block;
        margin: 0 auto;
        /deep/.van-image__img{
          width: auto;
          margin: 0 auto;
        }
      }
      >span{
        display: block;
        width: 100%;
        padding-top: 20px;
        color: #4D4C4D;
        font-size: 24px;
      }
      &.gc{
        .van-image{
          width: 206px;
        }
      }
      &.mga{
        .van-image{
          width: 169px;
        }
      }
      &.bvi{
        .van-image{
          width: 142px;
        }
      }
      &.pg{
        .van-image{
          width: 152px;
        }
      }
    }
  }
}
.copyright{
  text-align: center;
  text-align: center;
  color: #4D4C4D;
}
</style>
