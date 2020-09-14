<template>
  <div class="page">
    <van-nav-bar
      class="m-header"
      :title="activity.title || ''"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      v-if="isShowHeader"
    >
      <van-icon name="service" slot="right" />
    </van-nav-bar>
    <div class="m-body" :style="{paddingTop: $route.query.source && '0px !important'}" v-if="activity.title">
      <van-image :src="activity.h5_index_max_pic" fit="cover" />
      <div v-if="[2,9,10].indexOf(activity.id) !== -1" class="m-button">
        <van-button @click="handleGo" type="primary">{{handleButton}}</van-button>
      </div>
      <article v-html="activity.detail_content"></article>
    </div>
  </div>

</template>

<script>
  import { activitydetail } from '@/api/activity'
  import { mapState } from "vuex";

  export default {
    name: "activitiesDetails",
    data() {
      return {
        title: '',
        activity: {},
        isShowHeader: true
      }
    },
    created() {
      this.getData()
      if (this.$route.query.source) {
        this.isShowHeader = false;
      }
    },
    computed:{
      ...mapState("users", ["isLogin"]),
      handleButton() {
        if([2,9,10].indexOf(this.activity.id) !== -1 && !this.isLogin) {
          return '立即登录'
        } else if([2].indexOf(this.activity.id) !== -1 && this.isLogin) {
          return '立即洗码'
        } else if(this.isLogin) {
          return '立即存款'
        } 
      }
    },
    methods: {
      getData () {
        const { id } = this.$route.params
        if (!id) {
          return this.$toast('没有找到该活动')
        }
        this.$loading()
        activitydetail({
          id
        }).then(res => {
          const { code, data, msg } = res.data
          if (code === 0) {
            this.activity = data
          } else {
            console.log(msg)
          }
          this.$toast.clear()
        })
      },
      onClickLeft () {
        this.$router.push({
          path: '/activities'
        })
      },
      onClickRight () {
        this.$openKefu()
      },
      handleGo() {
        if([9,10].indexOf(this.activity.id) !== -1 && this.isLogin) {
          this.$router.push('/deposit')
        } else if([2].indexOf(this.activity.id) !== -1 && this.isLogin) {
          this.$router.push('/washcode')
        } else if(!this.isLogin) {
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style scoped lang="less">
.van-image{
  padding: @space-gap;
  overflow: hidden;
  width:100%;
  /deep/img{
    border-radius: 8px;
  }
}
.m-button{
  text-align: center;
}
.van-button{
  width:400px;
}
article {
  padding: 30px;
  font-size: 28px;
  line-height: 1.5;
  color:@text-color-light;
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
            background: @primary-color!important;
            // font-size: 28px!important;
            font-weight: 500!important;
            white-space: nowrap!important;
            color: #fff !important;
            border: 0 !important;
          }
        }
      }
      td {
        color: @text-color-light;
        background-color: transparent!important;
        border: 1px solid rgba(#353435,.2)!important;
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
