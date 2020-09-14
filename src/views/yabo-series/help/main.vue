<style scoped lang="less">
@import '~@assets/styles/help/index.less';
.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 88px;
  background: #fff;
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
.kf-slide-tit{
  display: flex;
  align-items: center;
  .van-image{
    width: 64px;
  }
  span{
    font-size: 28px;
    color: #333;
    margin-left: 20px;
  }

}
/deep/ .van-cell{
  height: 120px;
  padding: 0 30px 0 30px;
  align-items: center;
  position: relative;
  .van-icon{
    font-size: 30px;
  }
  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: #EDEFF6;
    left: 122px;
    bottom: 0;
  }

}

  .helpmain-con{
    // border-top: 20px solid #F5F6FA;
  }
  .gokefu{
    font-size: 24px;
    color: #999;
    text-align: center;
    margin-top: 60px;
    span{
      color: @bg-gradient-color;
      text-decoration: underline;
    }
  }
</style>
<template>
    <div class="container helpmain" :style="{paddingTop: $route.query.source && '0'}">
        <!--<lheader :title="title"  :goback="goback" @goback="goback" :kefu="true"></lheader>-->
      <div class="helpmain-con">
        <van-cell title="单元格" is-link :to="`/help/tutorial${this.$route.query.source?`?source=${this.$route.query.source}`:''}`">
          <template #title>
            <div class="kf-slide-tit">
              <van-image :src="$imgs['newKf/service_iocn1@2x']" />
              <span class="custom-title">常见问题</span>
            </div>
          </template>
        </van-cell>
        <van-cell title="品牌实力" is-link :to="`/help/introduction${this.$route.query.source?`?source=${this.$route.query.source}`:''}`">
          <template #title>
            <div class="kf-slide-tit">
              <van-image :src="$imgs['newKf/service_iocn2@2x']" />
              <span class="custom-title">品牌实力</span>
            </div>
          </template>
        </van-cell>
        <van-cell title="游戏手册" is-link :to="`/help/manual${this.$route.query.source?`?source=${this.$route.query.source}`:''}`">
          <template #title>
            <div class="kf-slide-tit">
              <van-image :src="$imgs['newKf/service_iocn3@2x']" />
              <span class="custom-title">游戏手册</span>
            </div>
          </template>
        </van-cell>
        <van-cell title="安全保障" is-link :to="`/help/protection${this.$route.query.source?`?source=${this.$route.query.source}`:''}`">
          <template #title>
            <div class="kf-slide-tit">
              <van-image :src="$imgs['newKf/service_iocn4@2x']" />
              <span class="custom-title">安全保障</span>
            </div>
          </template>
        </van-cell>

      </div>
      <p class="gokefu">
        遇到问题，联系
        <span @click="goKefu">专属客服</span>
      </p>
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
      },
      goKefu() {
        this.$openKefu();
        this.$store.dispatch("global/setPopShow", { status: false });
      },
    }
  }
</script>

