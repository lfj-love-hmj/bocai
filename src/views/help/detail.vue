<template>
    <div class="container help-detail">
        <lheader
          :title="title"
          :activated="$route.query.activated"
          path="111"
          v-if="isShowHeader"
          :getSwitch="false">
        </lheader>
        <div class="main" v-html="content" :style="{paddingTop: $route.query.source && '0'}">

        </div>
        <loading :isShow="isLoading"></loading>
    </div>
</template>

<script>
  import Lheader from '@/components/l-header'
  import Loading from '@/components/loading'
  import { aqdetail, gamemanualdetail } from '@/api/personalData'

  export default {
    name: 'helpDetail',
    components: {
      Loading,
      Lheader
    },
    data () {
      return {
        title: '',
        isLoading: false,
        content: '',
        isShowHeader: true
      }
    },
    created () {
      this.isLoading = true
      if (this.$route.query.source) {
        this.isShowHeader = false;
      }
      let urls = {
        0: aqdetail,
        1: gamemanualdetail
      }
      let query = this.$route.query
      urls[query.type]({
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        id: query.id
      }).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          this.title = res.data.data.title
          this.content = res.data.data.content
        }
      }).finally(() => {
        this.isLoading = false
      })
    }
  }
</script>

<style scoped lang="less">
    .container {

        .main {
            padding: @padding-align;
            padding-top: @main-margin-top;
            font-size: 32px;
            font-weight: 400;
            color: @primary-text-color;
            line-height: 44px;
            text-align: justify;
            /deep/p{
              text-align:justify;
              font-size: 22px;
              margin-bottom: 20px;
            }
            /deep/img{
              width:100%;
            }
            /deep/ ul{
              margin-bottom: 20px;
              li{
                text-align:justify;
                font-size: 22px;
              }
            }
            /deep/ ol{
              margin-bottom: 20px;
              li{
                text-align:justify;
                font-size: 22px;
              }
            }
            img {
                width: 400px;
                display: block;
                margin: 0 auto;
                margin-top: 180px;
                margin-bottom: 108px;
            }
           /deep/ table{
                width: 100%;
                border-collapse: collapse;
                border: 1px solid #353435;
                td, th {
                    padding: 10px;
                    border: 1px solid #353435;
                }
            }
        }
    }
</style>
