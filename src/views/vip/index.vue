<template>
  <div class="vip-page">
    <gheader class="m-header"></gheader>
    <vtabbar class="m-footer" :index="1"></vtabbar>
    <div :class="['m-body',{'bg-img':['vip'].indexOf($route.name) !== -1}]">
      <van-tabs
        v-model="active"
        animated
        swipeable
        :swipe-threshold="6"
        :color="$colorjs.baseColor"
        line-height="3px"
        sticky
        class="nav-type-1"
        @change="onTabChange"
      >
        <van-tab
          v-for="item in navs"
          :title="item.title"
          :key="item.name"
        >
          <Privilege v-if="item.name === 'privilege'" />
          <Events v-if="item.name === 'events'" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Gheader from "@/components/g-header"
import Vtabbar from "@/components/v-tabbar"
import Privilege from './privilege'
import Events from './events'

export default {
  name: 'VIP',
  components: {
    Gheader,
    Vtabbar,
    Privilege,
    Events
  },
  data() {
    return {
      navs: [{
        title: 'VIP特权',
        name: 'privilege'
      }, {
        title: 'VIP尊享活动',
        name: 'events'
      }],
      active: 0
    };
  },
  created() {
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    onTabChange (index, title) {
    }
  }
}
</script>

<style scoped lang="less">
@import '~@assets/styles/vip/index.less';
.van-tabs{
  // App.vue
  // /deep/ .van-tabs__nav{
  //   // background-color: transparent;
  //   background: @bg-color;
  //   .van-tab {
  //     color: #ccc;
  //   }
  //   .van-tab--active{
  //     color: #fff;
  //   }
  // }

  // /deep/ .van-sticky--fixed{
  //   .van-tabs__nav{
  //     // background: #1E1E1E;
  //   }
  // }
  /deep/ .van-tabs__content{
    .page-linear-gradient();
    .van-tab__pane-wrapper{
      padding: 0 @space-gap;
    }
  }
  /deep/ .van-tab--active{
    font-size: 36px;
  }
  .banner{
    margin-top: @space-gap;
  }
}

/deep/ .ui-title{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: @space-gap;
  h2{
    margin: 0;
  }
  .addon{
    color: #ccc;
    font-size: 24px;
  }
}

/deep/ .games-wrap{
  display: flex;
  flex-wrap: wrap;
  margin-left: -@space-gap;
  .game-item{
    position: relative;
    width: calc(50% - @space-gap);
    margin-left: @space-gap;
    margin-bottom: @space-gap;
    >img{
      display: inline-block;
      width: 100px;
      max-width: 100%;
      vertical-align: middle;
      &[lazy="loaded"]{
        display: block;
        width: 100%;
      }
    }
    .game-info{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      padding-left: 25px;
      padding-top: @space-gap;
    }
    h3{
      font-size: 32px;
      margin: 0 0 @space-gap;
    }
    p{
      margin-bottom: 10px;
      opacity: .7;
      &.tag-p{
        margin-bottom: 20px;
      }
    }
    &.large{
      width: calc(100% - @space-gap);
      .game-info{
        h3{
          font-size: 40px;
          margin-top: 20px;
        }
        p{
          font-size: 28px;
          margin-bottom: @space-gap/2;
        }
      }
    }
    // &.tall{
    //   height: calc(100% - @space-gap);
    //   .game-info{
    //     h3{
    //       font-size: 40px;
    //       margin-top: 20px;
    //     }
    //     p{
    //       font-size: 28px;
    //       margin-bottom: @space-gap/2;
    //     }
    //   }
    // }
  }
  &.float-wrap{
    display: block;
    .clearfix();
    .game-item{
      float: left;
      &.allbet{
        clear: left;
      }
    }
  }
}

/deep/ .filter-nav{
  margin: @space-gap -@space-gap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid @border-color;
  .van-tabs{
    width: 70%;
    border-bottom: none;
    .van-tabs__nav{
      background-color: transparent;
    }
    .van-tab,
    .van-tabs__wrap,
    .van-tabs__nav {
      height: 80px;
      line-height: 80px;
      font-size: 28px;
    }
    .van-tabs__wrap{
      border-bottom: none;
    }
  }
  .search{
    width: 30%;
    padding: 0 30px;
  }
}

/deep/ .labels{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: @space-gap;
  label{
    width: auto;
    padding: 0 @space-gap;
    line-height: 68px;
    color: #ccc;
    border-radius: 68px;
    // transition: all .45s ease-out;
    border: 2px solid transparent;
    &.active{
      color: @primary-color;
      border-color: @primary-color;
      font-weight: 500;
    }
  }
}

/deep/ .van-list{
  &.games{
    display: flex;
    flex-wrap: wrap;
    margin-left: -@space-gap;
    .van-cell{
      position: relative;
      width: calc(50% - @space-gap);
      margin-left: @space-gap;
      margin-bottom: @space-gap;
      background: @bg-color;
      padding: 0;
      border-radius: 8px;
      overflow: hidden;
      &:after{
        border-bottom: none!important;
      }
      .game-item{
        color: #fff;
        position: relative;
        .tag{
          width: 100px;
          height: 100px;
          position: absolute;
          right: 0;
          top: 0;
          text-align: center;
          padding-top: 70px;
          line-height: 30px;
          font-size: 20px;
          background-image: linear-gradient(to right, #FF9A5D, #FF3937);
          text-transform: uppercase;
          transform: rotate(45deg) translate(-20%, -20%);
          transform-origin: 100% 100%;
          &.new{
            background-image: linear-gradient(to right, #05D0DA, #279CF8);
          }
        }
        .info{
          padding: 20px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .van-icon{
            font-size: 40px;
            color: #979797;
            &.van-icon-like{
              color: @primary-color;
            }
          }
        }
      }
      h3{
        font-size: 28px;
        margin: 0;
        span{
          background-color: @primary-color;
          color: #fff;
          font-size: 20px;
          padding: 2px 6px;
          font-weight: 300;
          margin-right: 6px;
          border-radius: 5px;
        }
      }
    }
    .van-image{
      height: 200px;
    }
    .van-list__loading,
    .van-list__finished-text{
      width: 100%;
      margin-left: @space-gap;
      padding-bottom: @space-gap;
    }
  }
}
/deep/ .profit-ranks,
/deep/ .winner-lists{
  .profit-swipe{
    // margin-left: -@space-gap;
    margin-right: -@space-gap;
    /deep/ .van-swipe-item{
      padding-right: @space-gap;
      // margin-right: @space-gap;
      color: #ccc;
      .box{
        position: relative;
        background-color: @bg-color;
        border-radius: 8px;
      }
      .info{
        padding: @space-gap;
        p{
          line-height: 1.5;
          margin-bottom: 15px;
        }
        .login-name{
          color: @primary-text-color;
        }
        h3{
          color: #fff;
          font-size: 30px;
          font-weight: 500;
          margin: 0;
          dfn{
            font-style: normal;
          }
        }
      }
      .tag{
        position: absolute;
        right: 0;
        top: @space-gap;
        background-color: #353435;
        border-radius: 22px 0 0 22px;
        line-height: 44px;
        font-size: 20px;
        color: #ccc;
        padding-left: 20px;
        padding-right: 15px;
      }
      .action{
        border-top: 2px solid @border-color;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FF6666;
        font-size: 24px;
        font-weight: 500;
        padding: 20px 0;
        img{
          display: block;
          width: 40px;
          height: 40px;
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
