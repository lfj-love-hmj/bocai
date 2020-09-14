<template>
  <div class="container">
    <lheader :title="title" path="111" :activated="$route.query.activated"></lheader>
    <div class="main">
      <div class="list">
        <p>客服中心</p>
        <div v-for="(item,index) in paramsList" :key="index">
          <b><a target="_blank" :href="item.link">{{ item.param_name }} : {{ item.param_value }}</a></b>
        </div>
      </div>
    </div>
    <loading :isShow="isLoading"></loading>
  </div>
</template>

<script>
  import Lheader from '@/components/l-header';
  import Loading from '@/components/loading';
  import { siteinfo } from '@/api/home';

  export default {
    name: "discountCore",
    components: {
      Loading,
      Lheader
    },
    data() {
      return {
        title: '联系我们',
        isLoading: false,
        paramsList: []
      }
    },
    created() {
      this.isLoading = true;
      siteinfo(process.env.VUE_APP_MERCHANT_NO).then(res=> {
        if (res.data.code === 0) {
          this.paramsList = res.data.data.extend_params
          this.paramsList = JSON.parse(this.paramsList)
        }
      }).finally(()=>{
        this.isLoading = false;
      })
    }
  }
</script>

<style scoped lang="less">
  .container {
    display: flex;
    flex-direction: column;
    // background-color: #090705;
    .el-main {
      padding: @padding-align;
      margin-top: @main-margin-top;
      .list {
        font-size: @font-size-15;
        line-height: @line-height-content;
        a {
          color:@text-color-default;
        }
        &:first-child {
          margin-top: 20px;
        }
        p {
          color: @primary-text-color;
        }
        div {
          margin-top: 20px;
        }
      }
    }
  }
  a {
    color: @primary-text-color;
  }
</style>

