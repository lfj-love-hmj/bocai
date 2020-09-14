<template>
  <div class="businessRecord">
    <div class="record-title">
      <img src="~@assets/img3_0/otherIcon/fanhui@2x.png" @click="$router.go(-1)" />
      <span>交易记录</span>
      <span class="query" @click="selectMethod()">筛选</span>
    </div>
    <div class="container">
      <van-tabs
        line-width="40px"
        line-height="2px"
        color="#BE8D24"
        class="vanTabs"
        :animated="true"
        v-model="active"
      >
        <van-tab v-for="(item,i) in tabType" :title="item.name" :key="i" class="access">
          <div class="main">
            <template v-if="active == 0">
              <div v-show="tabType[0].data.data && tabType[0].data.data.length" class="list">
                <div class="tab_top">
                  <div>
                    <p>{{tabType[0].data.stat && tabType[0].data.stat[1] || '0.00'}}</p>
                    <p>支付成功</p>
                  </div>
                  <div>
                    <p>{{tabType[0].data.stat && tabType[0].data.stat[2] || '0.00'}}</p>
                    <p>待支付</p>
                  </div>
                  <div>
                    <p>{{tabType[0].data.stat && tabType[0].data.stat[4] || '0.00'}}</p>
                    <p>支付失败</p>
                  </div>
                </div>
                <ul>
                  <van-list
                    v-model="tabType[0].loading"
                    :finished="tabType[0].finished"
                    finished-text="已加载全部"
                    @load="onLoad"
                  >
                    <li v-for="(item,index) in tabType[0].data.data" :key="index">
                      <img
                        v-show="item.pay_type"
                        :src="require(`@assets/img3_0/memberCenter/img${item.pay_type}.png`)"
                        alt
                      />
                      <div class="list_content">
                        <div class="header">
                          <span>{{ item.pay_type | statusFilter(getPaytype) }}</span>
                          <span>+{{ item.money }}</span>
                        </div>
                        <div class="status">
                          <span>{{ item.created_at | filterLevel }} | {{ item.trade_no }}</span>
                          <span>{{item.status | statusF(getAllorderstatus)}}</span>
                        </div>
                        <div class="remark">
                          <span class="note" v-show="item.remark">备注：{{ item.remark }}</span>
                          <span class="time">{{item.updated_at | filterTime}}</span>
                        </div>
                      </div>
                    </li>
                  </van-list>
                </ul>
              </div>
            </template>
            <!-- <div class="list_empty" v-show="tabType[active].data.data.length">
              <div class="emptyDiv">
                <div class="emptyRecord"></div>
                <div class="text">
                  <img :src="item.noneImg" class="none-img" />
                  <div class="chinese">非常抱歉未查询到任何{{item.name}}记录</div>
                </div>
              </div>
            </div> -->
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import popup from "@/components/popup";
import {
  orderlist,
  allorderstatus,
  allordertype,
  withdrawlist,
  allwithdrawstatus,
  translog,
  betlog,
  allplatform,
  benefitlist,
  walletrecord,
  walletrecordtype
} from "@/api/memberCenter";
import { formateDate } from "@/utils/index";

export default {
  data() {
    return {
      tabType: [
        {
          name: "存款",
          en: "depositData",
          api: orderlist,
          noneImg: require("@assets/img3_0/memberCenter/ckjl.png"),
          data:{},
          loading:false,
          finished:false
        },
        {
          name: "取款",
          en: "withdrawData",
          api: withdrawlist,
          noneImg: require("@assets/img3_0/memberCenter/qkjv.png"),
          data:{},
          loading:false,
          finished:false
        },
        {
          name: "转账",
          en: "translogData",
          api: translog,
          noneImg: require("@assets/img3_0/memberCenter/zzjv.png"),
          data:{},
          loading:false,
          finished:false
        },
        {
          name: "红利",
          en: "benefitData",
          api: benefitlist,
          noneImg: require("@assets/img3_0/memberCenter/jiaoyi.png"),
          data:{},
          loading:false,
          finished:false
        },
        {
          name: "投注",
          en: "betlogData",
          api: betlog,
          noneImg: require("@assets/img3_0/memberCenter/tzjl.png"),
          data:{},
          loading:false,
          finished:false
        },
        {
          name: "账变",
          en: "walletData",
          api: walletrecord,
          noneImg: require("@assets/img3_0/memberCenter/qkjv.png"),
          data:{},
          loading:false,
          finished:false
        }
      ],
      active: 0,
      queryParam:{
        type:"",
        status: "",
        start_time: "",
        end_time: "",
        start_text: "年/月/日",
        end_text: "年/月/日",
        page: 1
      },
      getPaytype:[],
      getAllwalletType:[],
      getAllwithdrawstatus:[],
      columns: []
    };
  },
  mounted() {
    this.init()
    allorderstatus().then(res => {
      if (res.data.code === 0) {
        this.orderstatus = res.data.data;
        let key = [
          {
            id: "",
            text: "全部状态"
          }
        ];
        for (let attr in res.data.data) {
          key.push({
            id: attr,
            text: res.data.data[attr]
          });
        }

        this.getAllorderstatus = key;
        this.columns = key;
      }
    });
    allordertype().then(res => {
      if (res.data.code === 0) {
        this.getPaytype = res.data.data;
      }
    });
    walletrecordtype().then(res => {
      if(res.data.code == 0) {
        this.walletType = res.data.data
        let key = [
          {
            id: "",
            text: "全部状态"
          }
        ];
        for (let attr in res.data.data) {
          key.push({
            id: attr,
            text: res.data.data[attr]
          });
        }
        this.getAllwalletType = key
      }
    })
    allwithdrawstatus().then(res => {
      if (res.data.code === 0) {
        this.withdrawstatus = res.data.data;
        let key = [
          {
            id: "",
            text: "全部状态"
          }
        ];
        for (let attr in res.data.data) {
          key.push({
            id: attr,
            text: res.data.data[attr]
          });
        }
        this.getAllwithdrawstatus = key;
      }
    })
    allplatform().then(res => {
      if (res.data.code === 0) {
        this.allplatformList = res.data.data;
        this.allplatformList[0] = "主账户";
      }
    })
  },
  filters: {
    statusFilter(val, getPaytype) {
      for (let i = 0; i < getPaytype.length; i++) {
        if (val === getPaytype[i].id) {
          return getPaytype[i].name;
        }
      }
    },
    intercept(val) {
      return "尾号" + val.substring(val.length - 4);
    },
    filterLevel(val) {
      return val.substr(5, val.length - 8);
    },
    filterTime(val) {
      return val.substr(11, val.length - 14);
    },
    statusF(val, type) {
      for (let i = 0; i < type.length; i++) {
        if (val == type[i].id) {
          return type[i].text;
        }
      }
    }
  },
  methods: {
    init() {
      // this.tabType.map((item,i) => {
        this.tabType[this.active].api(this.queryParam).then(res => {
          if(res.data.code == 0) {
            this.tabType[this.active].loading = false
            this.tabType[this.active].data = res.data.data
          }
          console.log(this.tabType[this.active])
        })
      // })
    },  
    selectMethod() {},
    onLoad() {}
  },
  watch:{
    active(value) {
      if (value === 0) {
        this.columns = this.getAllorderstatus;
      } else if( value == 1) {
        this.columns = this.getAllwithdrawstatus;
      } else if(value == 5) {
        this.columns = this.getAllwalletType
      }
    }
  }
};
</script>

<style lang="less" scoped>
.businessRecord {
  height: 100%;
}
.none-img {
  width: 1.5rem;
  margin: 0 auto;
}
/deep/ .van-tabs__line {
  background: none !important;
}

/deep/ .van-tabs {
  .van-tabs__wrap {
    height: 56px;
    line-height: 56px;
  }
  .van-tabs__nav {
    height: 56px;
    line-height: 56px;
    border-radius: 14px;
    padding: 0;

    /deep/.van-tab {
      border-radius: 14px;
      span {
        border-radius: 14px;
        height: 56px;
        line-height: 56px;
      }
    }

    .van-tab--active {
      background: #4d4c4d;
      border-radius: 14px;
    }
  }

  .van-tabs__wrap {
    padding: 0 0.25rem;
    border-bottom: none !important;
    border-radius: 14px;
  }
}
.record-title {
  margin: 0 0.25rem;
  position: fixed;
  top: 0;
  height: 88px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  width: 100%;
  z-index: 1;
  background-color: #1e1e1e;
  .query {
    margin-right: 40px;
  }

  img {
    width: 30px;
    position: absolute;
    left: 0;
  }

  span:last-child {
    position: absolute;
    right: 0;
  }
}
.container {
  display: block;
  padding-top: 88px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  .access {
    .main {
      padding: 0;
      ul {
        padding: 0 30px;
      }

      li {
        position: relative;
        padding: @margin-15 0 0;
        color: #c5cfd6;
        display: flex;
        align-items: center;

        img {
          display: block;
          width: 0.8rem;
          height: 0.8rem;
          margin: 0.1rem 0.2rem 0.1rem 0.1rem;
          border-radius: 50%;
        }

        > .list_content {
          &.width100 {
            width: 100%;
          }
          width: 90%;
          height: initial;
          line-height: initial;
          border-bottom: 2px solid #3f3f3f;
          padding-bottom: 0.4rem;
        }

        .header {
          width: 100%;
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          font-weight: 600;
          > span:first-child {
            font-size: @font-size-14;
          }

          > span:last-child {
            float: right;
            font-weight: 500;
            color: rgba(200, 167, 127);
            font-size: 0.453333rem;
          }
        }

        .status {
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.26666rem;
          > span:first-child {
            word-wrap: break-word;
            float: left;
          }

          > span:last-child {
            display: flex;
            align-items: center;
            float: right;
          }

          > span {
            color: #999999;
            font-size: @font-size-12;
          }
        }

        .remark {
          position: relative;
          overflow: hidden;
          > .note {
            float: left;
            color: #999999;
            font-size: @font-size-12;
            margin-top: @margin-10;
          }

          > .time {
            float: right;
            color: rgba(200, 167, 127);
            font-size: @font-size-12;
            margin-top: @margin-10;
          }
        }
        .turn {
          text-align: center;
          color: #999999;
          font-size: @font-size-15;
          display: block;
          width: 0.8rem;
          height: 0.8rem;
          line-height: 0.8rem;
          margin: 0 0.2rem;
          border-radius: 50%;
          background-color: #4d4c4d;
        }
        .trans-header {
          margin-top: @margin-5;
          > span:first-child {
            font-weight: 400;
          }
          > span:last-child {
            color: rgba(200, 167, 127);
            font-weight: 400;
            font-size: 0.453333rem;
          }
        }

        .trans-status {
          overflow: hidden;
          margin-top: 0;

          img {
            width: 0.61333rem;
            height: 0.61333rem;
            margin: 0 @margin-5;
          }

          > .note {
            float: left;
            color: #999999;
            font-size: @font-size-12;
            margin-top: @margin-10;
          }

          > .time {
            float: right;
            color: #999999;
            font-size: @font-size-12;
            margin-top: @margin-10;
          }
        }
      }
      .turn_list {
        padding: 0 @margin-10;
        height: auto;
        .turn_list {
          position: relative;
          padding: @margin-15 0;
          color: #c5cfd6;
          margin-top: @margin-10;
          display: flex;
        }
      }

      /deep/ .van-list__finished-text {
        margin-top: @margin-10;
      }
    }
  }

  .stats {
    display: flex;

    li {
      position: relative;
      width: percentage(1/3);
      line-height: 1.4;
      text-align: center;
      padding: 15px 0;

      b {
        font-size: 30px;
        font-weight: 500;
        color: #888;

        &.highlight {
          color: white;
        }
      }

      span {
        font-size: 24px;
        color: #999;
      }
    }
  }

  .vanTabs {
    padding: 0;

    /deep/ .van-tab {
      flex-basis: 20% !important;
      height: 56px;
      line-height: 56px;
    }

    /deep/ .van-tab--active {
      font-weight: 600;
    }

    /deep/ .van-ellipsis {
      font-size: @font-size-13;
      height: 56px;
      line-height: 56px;
    }
  }

  .list_empty {
    position: static;

    .emptyDiv {
      margin-top: 160px;
    }
  }

  .tab_top {
    position: relative;
    padding: 0.3rem;
    width: 100%;
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    > p {
      padding: 0.1rem 0;
      font-size: @font-size-14;
      color: #ffffff;
      text-align: left;
      width: 100%;
    }
    &:after {
      width: 100%;
      display: block;
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      background-color: #3f3f3f;
    }

    > div {
      > p:first-child {
        padding: 0.1rem 0;
        font-size: @font-size-14;
        color: #ffffff;
      }

      > p:last-child {
        padding: 0.1rem 0;
        font-size: @font-size-12;
        color: #999999;
      }
    }
  }
}
</style>