<style scoped lang="less">
@import '~@assets/styles/help/index.less';
.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
  padding-top: 88px;
  .aagames-nav-bar{
    background:#1e1e1e;
  }
  .tabs {
    display: flex;
    .router-link {
      width: 156px;
      height: 88px;
      line-height: 88px;
      background: @bg-card-color;
      border-radius: 8px;
      font-size:28px;
      font-weight:400;
      color:rgba(204,204,204,1);
      text-align: center;
    }
    .router-link-active{
      background:@primary-color;
      color:#fff;
    }
  }
}
</style>
<template>
    <div class="container help" :style="{paddingTop: $route.query.source && '20px !important'}">
        <lheader :title="title"  :goback="goback" @goback="goback" v-if="!$route.query.source"></lheader>
        <div class="tabs">
            <div
              :is="i.tag ? i.tag : 'router-link'"
              replace
              :class="{'router-link': !i.tag, px20: !!i.tag }"
              v-for="i in tabs" :to="{ path: i.link, params: {} }"
              :key="i.name"
            >{{i.name}}</div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  import Lheader from '@/components/l-header'

  export default {
    components: {
      Lheader
    },
    data () {
      return {
        tabs: [
          {
            link: `/help/tutorial${this.$route.query.source?`?source=${this.$route.query.source}`:''}`,
            name: '常见问题'
          },
          {
            tag:'div'
          },
          {
            link: `/help/introduction${this.$route.query.source?`?source=${this.$route.query.source}`:''}`,
            name: '品牌实力'
          },
          {
            tag:'div'
          },
          {
            link: `/help/manual${this.$route.query.source?`?source=${this.$route.query.source}`:''}`,
            name: '游戏手册'
          },
          {
            tag:'div'
          },
          {
            link: `/help/protection${this.$route.query.source?`?source=${this.$route.query.source}`:''}`,
            name: '安全保障'
          }
        ],
        from:null
      }
    },
    computed:{
      title(){
        return this.$route.meta.title
      }
    },
    watch:{
      $route(to,from) {
        if(from.query.from) {
          to.query.from = from.query.from
        }
      }
    },
    methods:{
      goback() {
        // if(this.$route.query.from) {
        //   this.$router.push({name:this.$route.query.from})
        //   return
        // }
        this.$router.push('/')
      }
    }
  }
</script>

