<template>
  <div>
    <lheader :title="title" :activated="$route.query.activated"></lheader>
    <div class="commonProblem-templateCls" v-html="text"></div>
    <loading :isShow="isLoading"></loading>
  </div>
</template>

<script>
  import Lheader from '@/components/l-header'
  import { staticpagebycode } from '@/api/personalData'
  import Loading from '@/components/loading';
  export default {
    name: "discountCore",
    data() {
      return {
        title: '常见问题',
        isLoading: false,
        text: ''
      }
    },
    created() {
      this.isLoading = true;
      staticpagebycode({
        code: 'user_faq',
        merchant_no: process.env.VUE_APP_MERCHANT_NO
      }).then(res=> {
        this.text = res.data.data.content
      }).finally(()=>{
        this.isLoading = false;
      })
    },
    components: {
      Loading,
      Lheader
    }
  }
</script>

<style lang="less">
  .commonProblem-templateCls {
    margin-top: @main-margin-top;
    padding: @padding-align;
    font-size: @font-size-15;
    line-height: @line-height-content;
    color: @text-color-default;
    span {
      color: @text-color-default!important;
    }
    strong {
      font-size: @font-size-15!important;
      color: @primary-text-color!important;
    }
  }
</style>
