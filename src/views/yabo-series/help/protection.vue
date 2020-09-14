<style scoped lang="less">
@import '~@assets/styles/help/index.less';
    .list {
      margin-top: 88px;
      font-size: 32px;
      font-weight: 400;
      color: @primary-text-color;
      line-height: 44px;
      text-align: center;
      padding: 0 30px;
      background: #fff;
      border-top: 20px solid #F5F6FA;
      height: 100vh;
        /deep/h2{
          font-size: 36px;
        }
        /deep/h3{
          font-size: 30px;
          font-weight: bolder;
        }
        /deep/p{
          text-align:justify;
          font-size: 28px;
        }
        /deep/a{
          color:@primary-color;
        }
        .van-image.pz{
          width:439px;
          margin-top: 30px;
          margin-bottom: 60px;
        }
        .footer {
          margin-top: 30px;
          p{
            text-align: center;
          }
          >.top{
            font-size: 0;
            .van-image{
              width: 100%;
              padding: 0;
            }

          }
          >.bottom{
            border-top:2px solid rgba(40,40,40,1);
            padding:20px;
            .van-image{
              width:142px;
            }
          }
        }
    }
</style>

<template>
    <div class="list protectionmain" :style="{marginTop: $route.query.source && '0'}">
      <van-image class="pz" lazy-load :src="$imgs['safety/pz@2x']"></van-image>
      <p>{{$config[$projectname].secName}}持有菲律宾（PAGCOR）合法博彩执照。该执照由菲律宾娱乐及博彩公（PAGCOR）所核发和监管，刹车提供网上扑克服务。（PAGCOR）是一家拥有合法经营权的公司。</p>
      <div class="footer">
        <div class="top">
          <van-image :src="$imgs['safety/bet_mine_image_t2@3x']"></van-image>
<!--          <div class="top-line">-->
<!--            <van-image lazy-load :src="$imgs['safety/mga2']"></van-image>-->
<!--            &lt;!&ndash;<p>英国GC监督委员会</p>&ndash;&gt;-->
<!--          </div>-->
<!--          <div class="top-line">-->
<!--            <van-image lazy-load :src="$imgs['safety/bvi2']"></van-image>-->
<!--            &lt;!&ndash;<p>马耳他博彩牌照(MGA)认证</p>&ndash;&gt;-->
<!--          </div>-->
<!--          <div class="top-line">-->
<!--            <van-image lazy-load :src="$imgs['safety/cc']"></van-image>-->
<!--            &lt;!&ndash;<p>英属维尔京群岛(BVI)认证</p>&ndash;&gt;-->
<!--          </div>-->
<!--          <div class="top-line">-->
<!--            <van-image lazy-load :src="$imgs['safety/pa2']"></van-image>-->
<!--            &lt;!&ndash;<p>英属维尔京群岛(BVI)认证</p>&ndash;&gt;-->
<!--          </div>-->
        </div>

      </div>
    </div>
</template>

<script>
  import { staticpagebycode } from '@/api/personalData'
  export default {
    components: {},
    created() {
      // staticpagebycode({
      //   code: 'user_secrets',
      //   merchant_no: process.env.VUE_APP_MERCHANT_NO
      // }).then(res=> {
      //   this.text = res.data.data.content
      // })
    },
    data () {
      return {
        text:''
      }
    }
  }
</script>
