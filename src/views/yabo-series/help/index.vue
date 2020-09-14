<style scoped lang="less">
  .helpcont{
    background: #fff;
    height: 100vh;
    /deep/ .aagames-nav-bar{
      box-shadow:0px 4px 8px 0px rgba(0,0,0,0.06);
    }
    /deep/ .tutorial{
      padding: 0 36px;
      margin-top: 88px;
      border-top: 20px solid #F5F6FA;
      .item .list div a{
        background: #EDEFF6;
        color: #333;
      }
      .item .title{
        color: #333;
          font-weight: bold;
      }
    }
  }
</style>
<template>
    <div class="container helpcont">
        <lheader :title="title"  :goback="goback" @goback="goback" :kefu="true" v-if="!$route.query.source"></lheader>

        <!--<div class="tabs">-->
            <!--<div-->
              <!--:is="i.tag ? i.tag : 'router-link'"-->
              <!--replace-->
              <!--:class="{'router-link': !i.tag, px20: !!i.tag }"-->
              <!--v-for="i in tabs" :to="{ path: i.link, params: {} }"-->
              <!--:key="i.name"-->
            <!--&gt;{{i.name}}</div>-->
        <!--</div>-->
        <router-view></router-view>
    </div>
</template>

<script>
  import Lheader from '../components/l-header'

  export default {
    components: {
      Lheader
    },
    data () {
      return {
        from:null,
        activeNames:[]
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
        this.$router.go(-1)
      }
    }
  }
</script>

