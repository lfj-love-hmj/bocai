<template>
  <div>
    <lheader :title="title" :activated="$route.query.activated" path="111" getSwitch="true"></lheader>
    <div class="relief-templateCls" v-html="text"></div>
  </div>

</template>

<script>
  import Lheader from '@/components/l-header'
  import { staticpagebycode } from '@/api/personalData'

  export default {
    name: "discountCore",
    data() {
      return {
        title: '免责声明',
        text: ''
      }
    },
    created() {
      staticpagebycode({
        code: 'user_relief',
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
  .relief-templateCls {
    margin-top: @main-margin-top;
    padding: @padding-align;
    font-size: @font-size-15;
    line-height: @line-height-content;
    color: @text-color-default;
    span {
      color: @text-color-default!important;
    }
  }
</style>
