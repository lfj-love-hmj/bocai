<template>
  <div class="container">
    <lheader :title="title" :activated="$route.query.activated" :get-switch="false" :goback="true"></lheader>
    <div class="templateCls" v-html="text"></div>
    <loading :isShow="isLoading"></loading>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import Loading from '@/components/loading';
import { staticpagebycode } from "@/api/personalData";

export default {
  name: "agTermsEngagement",
  data() {
    return {
      title: "合作代理条款",
      isLoading: false,
      text: ""
    };
  },
  components: {
    Lheader,
    Loading
  },
  created() {
    try {
      let scrollY = document.getElementsByClassName('container')[0].offsetTop;
      window.scrollTo(0, scrollY);
    } catch (error) {
      
    }
    this.isLoading = true;
    staticpagebycode({
      code: "agent_agreement",
      merchant_no: process.env.VUE_APP_MERCHANT_NO
    }).then(res => {
      this.text = res.data.data.content;
    }).finally(()=>{
      this.isLoading = false;
    });
  }
};
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
