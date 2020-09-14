<template>
  <div>
    <lheader :title="title" :activated="$route.query.activated" path="111" getSwitch="true"></lheader>
    <div class="duty-templateCls" v-html="text"></div>
  </div>

</template>

<script>
  import Lheader from '@/components/l-header'
  import { staticpagebycode } from '@/api/personalData'

  export default {
    name: "discountCore",
    data() {
      return {
        title: '博彩责任',
        text: ''
      }
    },
    created() {
      staticpagebycode({
        code: 'user_duty',
        merchant_no: process.env.VUE_APP_MERCHANT_NO
      }).then(res=> {
        this.text = res.data.data.content
      })
    },
    components: {
      Lheader
    }
  }
</script>

<style lang="less">
  .duty-templateCls {
    margin-top: @main-margin-top;
    padding: @padding-align;
    font-size: @font-size-15;
    line-height: @line-height-content;
    color: @text-color-default;
    strong {
      font-size: @font-size-15!important;
      color: @primary-text-color!important;
    }
  }
</style>
