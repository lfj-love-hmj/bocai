<style scoped lang="less">
@import '~@assets/styles/help/index.less';
    .list {
        margin-top: 20px;
        font-size: 32px;
        font-weight: 400;
        color: @primary-text-color;
        line-height: 44px;
        text-align: center;
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
          margin-top: 78px;
          margin-bottom: 60px;
        }
        .footer {
          display: flex;
          flex-direction: column;
          margin-top: 30px;
          border:2px solid rgba(40,40,40,1);
          p{
            text-align: center;
          }
          >.top{
            display: flex;
            div{
              flex:1;
              padding:10px;
              &:nth-child(1) {
                .van-image{
                  width:205px;
                }
              }
              &:nth-child(2) {
                border-left:2px solid rgba(40,40,40,1);
                .van-image{
                  width:169px;
                }
              }
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
    <div class="list">
      <van-image class="pz" lazy-load :src="require('@assets/img3_0/safety/pz@2x.png')"></van-image>
      <p>{{$config[$projectname].secName}}持有菲律宾（PAGCOR）合法博彩执照。该执照由菲律宾娱乐及博彩公（PAGCOR）所核发和监管，刹车提供网上扑克服务。（PAGCOR）是一家拥有合法经营权的公司。</p>
      <div class="footer">
        <div class="top">
          <div>
            <van-image lazy-load :src="require('@assets/img3_0/safety/bvi@3x.png')"></van-image>
            <p>英国GC监督委员会</p>
          </div>
          <div>
            <van-image lazy-load :src="require('@assets/img3_0/safety/cg@3x.png')"></van-image>
            <p>马耳他博彩牌照(MGA)认证</p>
          </div>
        </div>
        <div class="bottom">
          <van-image lazy-load :src="require('@assets/img3_0/safety/mga@3x.png')"></van-image>
          <p>英属维尔京群岛(BVI)认证</p>
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
