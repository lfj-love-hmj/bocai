<template>
  <div>
    <lheader :title="title" :activated="$route.query.activated" path="111" getSwitch="true"></lheader>
    <div class="templateCls" v-html="text"></div>
  </div>

</template>

<script>
  import Lheader from '@/components/l-header'
  import { staticpagebycode } from '@/api/personalData'

  export default {
    name: "discountCore",
    data() {
      return {
        title: '隐私安全',
        text: ''
      }
    },
    created() {
      staticpagebycode({
        code: 'user_secrets',
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

<style scoped lang="less">
  .templateCls {
    margin-top: @main-margin-top;
    padding: @padding-align;
    font-size: @font-size-15;
    line-height: @line-height-content;
    color: @text-color-default;
  }
</style>
