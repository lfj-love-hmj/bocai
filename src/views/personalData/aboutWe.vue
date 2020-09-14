<template>
  <div class="container aboutWe">
    <lheader v-if="!$route.query.source" :title="title" :activated="$route.query.activated" path="111" :getSwitch="false"></lheader>
    <div class="main" :style="{paddingTop: $route.query.source && '0px !important'}" :class="{current: $projectname === '10050'}">
      <img v-if="$projectname != '10050'" :src="$imgs['personalData/logo@2x']" alt="">
      <div class="list" v-html="content">
      </div>
    </div>
    <loading :isShow="isLoading"></loading>
  </div>
</template>

<script>
  import Lheader from '@/components/l-header';
  import Loading from '@/components/loading';
  import { staticpage } from '@/api/personalData';
  export default {
    name: "aboutWe",
    components: {
      Loading,
      Lheader
    },
    data() {
      return {
        title: '关于我们',
        isLoading: false,
        content: ''
      }
    },
    created() {
      this.isLoading = true;
      staticpage({
        merchant_no: process.env.VUE_APP_MERCHANT_NO
      }).then(res=> {
        if (res.data.code === 0) {
          for (let i = 0; i< res.data.data.length;i++) {
            if (res.data.data[i].title === '关于我们') {
              this.content = res.data.data[i].content
              break
            }
          }
        }
      }).finally(()=>{
        this.isLoading = false;
      })
    }
  }
</script>

<style scoped lang="less">
  @import '~@assets/styles/personalData/index.less';
  .container {
    display: flex;
    flex-direction: column;
    /deep/.aagames-nav-bar{
      background:@bg-color;
    }
    .main {
      background-image: url(~@assets/img3_0/personalData/bg_pic@2x.png);
      background-size:100%;
      background-repeat: no-repeat;
      padding: @padding-align;
      padding-top: @main-margin-top;
      .list {
        font-size:32px;
        font-weight:400;
        color:rgba(204,204,204,1);
        line-height:44px;
        text-align: justify;
        /deep/h3{
          font-size: 30px;
          font-weight: bolder;
        }
        /deep/p{
          text-align:justify;
          font-size: 22px;
          text-indent: 44px;
        }
        /deep/a{
          color:@primary-color;
        }
      }
      img{
        width:400px;
        display: block;
        margin:0 auto;
        margin-top: 180px;
        margin-bottom: 108px;
      }
    }
    .current {
      background-image: url(~@assets/img3_0/personalData/bg_pic@2x.png);
      padding-top: 360px;
    }
  }
</style>
