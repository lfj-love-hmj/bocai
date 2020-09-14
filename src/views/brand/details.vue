<template>
  <div class="page">
    <van-nav-bar
      class="m-header"
      :title="brand.title || ''"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      v-if="isShowHeader"
    >
      <van-icon name="service" slot="right" />
    </van-nav-bar>
    <div class="m-body" v-if="brand.title">
      <van-image :src="brand.h5_index_pic" fit="cover" />
      <article v-html="brand.detail_content"></article>
    </div>
  </div>

</template>

<script>
  import { branddetail } from '@/api/home'

  export default {
    name: "activityDetails",
    data() {
      return {
        title: '',
        brand: {},
        isShowHeader: true
      }
    },
    created() {
      this.getData()
      if (this.$route.query.source) {
        this.isShowHeader = false;
      }
    },
    methods: {
      getData () {
        const { id } = this.$route.params
        // if (!brand.id) {
        //   this.$toast.fail('没有找到相关内容')
        //   setTimeout(() => {
        //     this.$router.go(-1)
        //   }, 2000)
        // }
        // this.brand = brand
        branddetail({id}).then(res => {
          this.brand = res.data.data
        }) 
      },
      onClickLeft () {
        this.$router.push({
          path: '/brand'
        })
      },
      onClickRight () {
        this.$openKefu()
      }
    }
  }
</script>

<style scoped lang="less">
.van-image{
  // width: 100%;
  margin: @space-gap;
  border-radius: 8px;
  overflow: hidden;
}
article {
  padding: 30px;
  font-size: 28px;
  line-height: 1.5;
  color:#ccc;
  /deep/ p{
    margin-bottom: 15px;
    line-height: 50px;
  }
  /deep/ img{
    // display: block;
    max-width: 100%;
  }
  // /deep/ table {
  //   width: 100%;
  //   background-color: #433445;
  //   padding: 0.2rem;
  //   margin-top: 0.3333rem;
  //   color:#9FA7AC;
  //   border: 1px solid #151515;
  //   border-collapse: collapse;
  //   thead {
  //     th {
  //       padding: 0.2667rem;
  //     }
  //   }
  //   tbody {
  //     text-align: center;
  //     td {
  //       padding: 0.2667rem 0;
  //     }
  //     tr:nth-child(even) {
  //       background-color: #3D2F3F;
  //     }
  //   }
  // }
  /deep/ table {
    width: 100%;
    // background-color: #433445;
    height: auto!important;
    padding: 0.2rem!important;
    margin-bottom: 20px!important;
    border-collapse: collapse!important;
    // border: 0!important;
    border: 1px solid @bg-color!important;
    // thead {
    //   th {
    //     padding: 0.2667rem;
    //   }
    // }
    tbody {
      text-align: center!important;
      tr{
        height: auto!important;
        background-color: transparent!important;
        &:first-child{
          td{
            background: @bg-color!important;
            // font-size: 28px!important;
            font-weight: 500!important;
            white-space: nowrap!important;
          }
        }
      }
      td {
        color: #ccc!important;
        background-color: transparent!important;
        border: 1px solid #353435!important;
        font-size: 24px!important;
        padding: 15px 0!important;
        height: auto!important;
      }
      // tr:nth-child(even) {
      //   background-color: #3D2F3F;
      // }
    }
  }
  /deep/ .rule {
    margin-top: 0.4rem;
    .ruleTitle {
      display: flex;
      align-items: center;
      font-size: 26px;
      span {
        width: 0.1067rem;
        display: inline-block;
        height: 0.4267rem;
        background-color: #FFCF6E;
        margin-right: 0.1333rem;
        border-radius: 0 0.0533rem 0.0533rem 0;
      }
    }
    .ruleExplain {
      color:#666;
      margin-top: 0.2667rem;
      font-size: 0.3467rem;
      line-height: 0.5333rem;
    }
  }
}
</style>
