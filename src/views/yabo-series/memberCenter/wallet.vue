<template>
  <div id="wallet">
    <!-- <div class="aagames-nav-bar barColor">
      <div class="nav-left">
        <div class="icon-size el-icon-arrow-left" @click="$router.back()"></div>
      </div>
      <div class="nav-center">
        <span>{{title}}</span>
      </div>
      <div class="nav-right"  @click="show = true">筛选</div>
    </div>-->

    <div class="record-title">
      <img src="~@assets/img3_0/otherIcon/fanhui@2x.png" @click="goback" />
      <span>理财小金库</span>
      <span @click="show = true">筛选</span>
    </div>
    <div class="container" :class="transrecordList.length>0?'':'walletEmpty'">
      <div class="aagames-header"></div>
      <div class="main">
        <div class="total-content"></div>
        <div class="total-box">
          <div class="total-amount">
            <div class="item">
              <div>￥{{mwallte.financing_money || '0.00'}}</div>
              <div>钱包总资产(元)</div>
            </div>
            <div class="item">
              <div>￥{{mwallte.max_profit || '0.00'}}</div>
              <div>最高收益(元)</div>
            </div>
            <van-icon v-if="mwallte.hasOwnProperty('day_rate')" @click="showMsg" name="question" />
          </div>
          <!-- 收益统计 -->
          <div class="income">
            <div class="total-amount">
              <div class="item" style="margin-top:.4rem">
                <div>￥{{(mwallte.all_profit).toFixed(2) || '0.00'}}</div>
                <div>历史累计收益(元)</div>
              </div>
              <div class="item" style="margin-top:.4rem">
                <div>￥{{(mwallte.month_profit).toFixed(2) || '0.00'}}</div>
                <div>本月累计收益(元)</div>
              </div>
            </div>
            <div class="total-amount">
              <div class="item">
                <div>￥{{(mwallte.week_profit).toFixed(2) || '0.00'}}</div>
                <div>本周累计收益(元)</div>
              </div>
              <div class="item">
                <div>￥{{mwallte.day_profit || '0.00'}}</div>
                <div>昨日收益(元)</div>
              </div>
            </div>
            <!-- 浮动按钮 -->
            <div class="incom-btn">
              <!-- @click="$router.push({path: 'walletTransfer',query:{type:2}})" -->
              <div @click="openMoney(1)">转出</div>
              <div @click="openMoney(2)">转入</div>
            </div>
          </div>
        </div>

        <!-- 明细 -->
        <!-- <div class="select" style="margin-top:200px;">
          <van-row>
            <van-col class="data-time-picker" span="16">
            <div class="starttime" @click="showStartDate = true">{{ params.start_time || "选择开始时间" }}</div>
            <div class="endtime" @click="showEndDate = true">{{ params.end_time || "选择结束时间" }}</div>
            <i class="el-icon-caret-bottom"></i>
          </van-col>
            <van-col span="7"  class="b-r" @click.native="show = true">
              {{ deposit }}
              <i class="el-icon-caret-bottom"></i>
            </van-col>
          </van-row>
        </div>-->
        <!-- 列表 -->
        <div v-if="transrecordList.length>0" class="lists">
          <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="list">
              <div class="item" v-for="(item, index) in transrecordList" :key="index">
                <div class="blod">
                  <span>{{orginColumns[item.type]}}</span>
                  <span>{{item.type == 2? '-':'+'}}{{item.money}}</span>
                </div>
                <div>
                  <span>{{item.created_at | filterLevel}} | {{item.trade_no}}</span>
                  <span>{{item.sum || '0.00'}}</span>
                </div>
              </div>
            </div>
          </van-list>
          <!-- </van-pull-refresh> -->
        </div>
        <div class="empty" v-else>
          <div class="emptyWallet"></div>
          <div class="text">
            <div class="chinese">非常抱歉未查询到任何理财记录</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 状态 -->
    <van-popup class="custom close-top" closeable close-icon-position="top-right" v-model="show">
      <div class="head">
<!--        <img src="@assets/img3_0/memberCenter/close.png" alt @click="show=false" />-->
        <p>筛选</p>
      </div>
      <div class="list">
        <p :class="{'active':data.type == index}" v-for="(item,index) in columns" :key="index" @click="onConfirm(index)">{{item}}</p>
      </div>
      <!-- <van-picker show-toolbar @confirm="onConfirm" value-key="text" @cancel="onCancel" :columns="columns" /> -->
    </van-popup>
    <!-- 开始时间 -->
    <!-- <van-popup v-model="showStartDate" position="bottom">
      <van-datetime-picker @confirm="onConfirmStartDate" :value="new Date()" :max-date="end_time"
        @cancel="onCancelStartDate" type="date" />
    </van-popup>-->

    <!-- 结束时间 -->
    <!-- <van-popup v-model="showEndDate" position="bottom">
      <van-datetime-picker @confirm="onConfirmEndDate" :value="new Date()" :min-date="start_time"
        @cancel="onCancelEndDate" type="date" />
    </van-popup>-->
    <!-- 理财小金库 -->
    <van-popup class="custom close-top" v-model="showMoney" closeable close-icon-position="top-right">
      <div class="head">
<!--        <img src="@assets/img3_0/memberCenter/close.png" alt @click="showMoney=false" />-->
        <p>理财小金库转帐</p>
      </div>
      <div class="moneyBox">
        <div v-if="!boxShow">
          <div class="account">
            <div class="treasury">{{chooseFather}}</div>
            <img @click="changeType" :class="{'rotateChose':iconType}" src="@assets/img3_0/memberCenter/choose.png" alt />
            <div class="master_account">{{chooseSon}}</div>
          </div>
          <div class="tranfer_amount">
            <p class="amount">转入金额</p>
            <div>
              <span class="icon">￥</span>
              <input type="number" :placeholder="chooseText" v-model="money" />
              <span class="all" @click="money = chooseMoney">全部转入</span>
            </div>
            <button class="btn" :class='{"active":money && money!="0.00"}' @click="goStep">确认转入</button>
          </div>
          <!-- <div class="text">取款流水验证有1-3分钟数据延迟，3-5分钟提款到账！</div> -->
        </div>
        <div class="finshBox" v-if="boxShow">
          <img src="@assets/img3_0/memberCenter/right.png" alt />
          <p class="money">¥{{money}}</p>
          <p class="tishi">转入成功</p>
          <button class="btn" @click="sure">确认</button>
          <!-- <div class="text">取款流水验证有1-3分钟数据延迟，3-5分钟提款到账！</div> -->
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import Lheader from "@/components/l-header";
import {
  allmoneytranstype,
  transrecord,
  moneywallet,
  moneytrans,
  allmoneytype
} from "@/api/memberCenter";
import { Toast } from "vant";
Vue.use(Toast);

export default {
  name: "quotaTransfer",
  data() {
    return {
      start_time: undefined,
      end_time: undefined,
      title: "理财小金库",
      params: {},
      showStartDate: false,
      showEndDate: false,
      showMoney: false,
      boxShow: false,
      deposit: "全部状态",
      show: false,
      columns: [],
      orginColumns: {},
      data: {
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        access_token: window.localStorage.token,
        page: 1,
        start_time: "",
        end_time: "",
        type: 0
      },
      // 交易记录
      transrecordList: [],
      loading: false,
      isLoading: false,
      finished: false,
      // 余额及收益
      mwallte: {
        financing_money:0,
        max_profit:0,
        all_profit:0,
        month_profit:0,
        week_profit:0,
        day_profit:0
      },
      chooseFather: "理财小金库",
      chooseSon: "主账户",
      chooseText: "",
      chooseMoney: 0,
      money: "",
      chooseID: 0,
      chooseFatherID: 0,
      chooseSonID: 0,
      iconType:false,
      changeMType:1
    };
  },
  methods: {
    init() {
      // 获取余额及收益
      this.moneywallet();
      // 交易记录
      this.transrecord();
      // 交易类型
      this.allmoneytranstype();
      // 所有理财小金库方式接口
      this.allmoneytype();
    },
    onLoad() {
      // 异步更新数据
      this.data.page++;
      this.transrecord(true);
    },
    onRefresh() {
      this.data.page = 1;
      this.transrecord();
    },
    // 余额及收益
    moneywallet() {
      moneywallet(this.data).then(res => {
        if (res.data.code === 0) {
          this.mwallte = res.data.data;
        }
      });
    },
    // 理财小金库交易记录
    transrecord(isPage) {
      Toast.loading({
        className: "toast-loading",
        mask: false,
        forbidClick: true,
        loadingType: "spinner",
        message: "加载中...",
        duration: 0 // 持续展示 toast
      });
      let data = Object.assign({}, this.data);
      transrecord(data).then(res => {
        Toast.clear();
        if (res.data.code === 0) {
          this.isLoading = false;
          this.loading = false;
          // console.log('trans record....', res.data)
          if (isPage) {
            this.transrecordList = this.transrecordList.concat(
              res.data.data.data
            );
          } else {
            this.transrecordList = res.data.data.data;
          }
          if (this.data.page >= res.data.data.last_page) {
            this.finished = true;
          }
          this.transrecordList.forEach((val, index) => {
            if (index == 0) {
              val.sum = this.mwallte.financing_money;
            }
            if (index > 0) {
              if (val.type == 2) {
                val.sum =
                  Number(this.transrecordList[index - 1].sum) +
                  Number(val.money);
                val.sum = val.sum.toFixed(2);
              } else {
                val.sum =
                  Number(this.transrecordList[index - 1].sum) -
                  Number(val.money);
                val.sum = val.sum.toFixed(2);
              }
            }
          });
        }
      });
    },
    // 交易类型
    allmoneytranstype() {
      allmoneytranstype(this.data).then(res => {
        if (res.data.code === 0) {
          this.orginColumns = res.data.data;
          let _columns = [];
          for (const key in this.orginColumns) {
            if (this.orginColumns.hasOwnProperty(key)) {
              _columns.push(this.orginColumns[key]);
            }
          }
          this.columns = _columns;
          this.columns.unshift("全部");
        }
      });
    },
    // 转入
    moneytrans() {},
    onCancelStartDate(value) {
      this.showStartDate = false;
    },
    // onConfirmStartDate(value) {
    //   this.start_time = value;
    //   let date = value;
    //   const seperator1 = "/";
    //   let month = date.getMonth() + 1;
    //   let strDate = date.getDate();
    //   if (month >= 1 && month <= 9) {
    //     month = "0" + month;
    //   }
    //   if (strDate >= 0 && strDate <= 9) {
    //     strDate = "0" + strDate;
    //   }
    //   this.params.start_time =
    //     date.getFullYear() + seperator1 + month + seperator1 + strDate;
    //   this.transrecord();
    //   this.showStartDate = false;
    // },
    // onConfirmEndDate(value) {
    //   this.end_time = value;
    //   let date = value;
    //   const seperator1 = "/";
    //   let month = date.getMonth() + 1;
    //   let strDate = date.getDate();
    //   if (month >= 1 && month <= 9) {
    //     month = "0" + month;
    //   }
    //   if (strDate >= 0 && strDate <= 9) {
    //     strDate = "0" + strDate;
    //   }
    //   this.params.end_time =
    //     date.getFullYear() + seperator1 + month + seperator1 + strDate;
    //   this.transrecord();
    //   this.showEndDate = false;
    // },
    // onCancelEndDate(value) {
    //   this.showEndDate = false;
    // },
    onConfirm(value) {
      this.deposit = this.columns[value];
      this.data.type = value;
      this.transrecord();
      this.show = false;
    },
    onCancel(value) {
      this.show = false;
    },
    transData(value) {
      let object = this.orginColumns,
        type = "";
      if (value != "全部") {
        for (const key in object) {
          if (object.hasOwnProperty(key) && object[key] === value) {
            type = key;
            break;
          }
        }
      } else {
        type = "";
      }

      return type;
    },
    goback() {
      this.$router.go(-1);
    },
    openMoney(type) {
      this.showMoney = true;
      this.money = "";
      this.changeMType = type
      if (type == 1) {
        this.chooseFather = "理财小金库";
        this.chooseSon = "主账户";
        this.chooseMoney = this.mwallte.financing_money;
        this.chooseFatherID = this.chooseID;
        this.chooseSonID = 0;
        this.iconType = false
      } else {
        this.chooseFather = "主账户";
        this.chooseSon = "理财小金库";
        this.chooseMoney = this.wallet.money;
        this.chooseFatherID = 0;
        this.chooseSonID = this.chooseID;
        this.iconType = false
      }
      this.chooseText = "你最多转入" + this.chooseMoney + "元";
    },
    goStep() {
      console.log(this.chooseFatherID,this.chooseSonID)
      if (this.money && this.money != "0.00") {
        let data = {
          merchant_no: process.env.VUE_APP_MERCHANT_NO,
          access_token: window.localStorage.token,
          from_platform_id: this.chooseFatherID,
          to_platform_id: this.chooseSonID,
          money: this.money,
          pay_password: "0"
        };
        Toast.loading({
          className: "toast-loading",
          mask: true,
          forbidClick: true,
          loadingType: "spinner",
          message: "转帐中...",
          duration: 0 // 持续展示 toast
        });
        moneytrans(data).then(
          res => {
            Toast.clear();
            if (res.data.code === 0) {
              this.boxShow = true;
            } else {
              Toast(res.data.msg);
              this.errText = res.data.msg;
            }
          },
          err => {
            this.errText = "转入失败";
          }
        );
      }
    },
    sure() {
      this.showMoney = false;
      this.boxShow = false;
      this.init();
    },
    allmoneytype() {
      allmoneytype(this.data).then(res => {
        if (res.data.code === 0) {
          let list = res.data.data;
          let _columns = [];
          for (const key in list) {
            if (list[key] == "理财钱包") {
              this.chooseID = key;
            }
          }
        }
      });
    },
    changeType() {
      this.iconType = !this.iconType
      console.log(this.changeMType,this.iconType)
      if(this.changeMType == 1) {
        // this.chooseFather = "主账户";
        // this.chooseSon = "理财小金库";
        if(this.iconType) {
          this.chooseMoney = this.wallet.money;
          this.chooseFatherID = 0;
          this.chooseSonID = this.chooseID;
        } else {
          this.chooseMoney = this.mwallte.financing_money;
          this.chooseFatherID = this.chooseID;
          this.chooseSonID = 0;
        }
      } else if(this.changeMType == 2) {
        if(this.iconType) {
          this.chooseMoney = this.mwallte.financing_money;
          this.chooseFatherID = this.chooseID;
          this.chooseSonID = 0;
        } else {
          this.chooseMoney = this.wallet.money;
          this.chooseFatherID = 0;
          this.chooseSonID = this.chooseID;
        }
      }
      this.chooseText = "你最多转入" + this.chooseMoney + "元";
    },
    showMsg() {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: `您当前收益率：${(this.mwallte.day_rate*100).toFixed(2)}%<br/>
使用理财小金库可让您额外获得高额利息，收益率将按照转入金额*不同等级计算。发放时间为每天下午4点准时发放到您的理财钱包。`,
          showCancelButton:false,
          messageAlign:'left',
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // this.washcodelist()
        });
    },
  },
  computed: {
    ...mapState("users", ["wallet"])
  },
  filters: {
    filterLevel(val) {
      return val.substr(5, val.length - 8);
    }
  },
  created() {
    this.init();
  },
  components: {
    Lheader
  }
};
</script>

<style scoped lang="less">
@import '~@assets/styles/wallet/index.less';

#wallet {
  .moneyBox {
    background-color: @bg-card-color;
    > p {
      text-align: center;
      color: #ffffff;
      font-size: 0.426667rem;
      height: 1.333334rem;
      line-height: 1.333334rem;
      // border-bottom:1px solid #999999;
    }
    > .finshBox {
      overflow: hidden;
      > img {
        display: block;
        width: 1.6rem;
        height: 1.6rem;
        margin: 0 auto;
        border-radius: 50%;
        margin-top: 0.8rem;
      }
      > .money {
        width: 100%;
        text-align: center;
        color: #cccccc;
        font-size: 0.8rem;
        margin-top: 0.26666667rem;
      }
      > .tishi {
        width: 100%;
        font-size: 0.426667rem;
        text-align: center;
        color: #9b9b9b;
        margin-top: 0.2rem;
      }
      > .btn {
        display: block;
        font-weight: 600;
        font-size: 0.426667rem;
        color: #1e1e1e;
        text-align: center;
        width: 9.2rem;
        margin: 0 auto;
        margin-top: 0.8rem;
        margin-bottom: 40px;
        height: 1.333333333rem;
        line-height: 1.313333333rem;
        border-radius: 4px;
        border: 2px solid @primary-color;
        background-color: @primary-color;
      }
      > .text {
        text-align: center;
        color: @primary-text-color;
        margin-top: 0.5333333rem;
        font-size: 0.3733333rem;
      }
    }
    > div {
      > .text {
        text-align: center;
        color: @primary-text-color;
        font-size: 0.3733333rem;
        padding-bottom: 0.4rem;
      }
      > .account {
        width: 100%;
        display: flex;
        margin-top: 0.667rem;
        justify-content: space-around;
        .rotateChose{
          transform: rotate(180deg);
        }
        > div {
          text-align: center;
          width: 3.73333rem;
          color: @primary-color;
          border: 2px solid @border-color-base;
          // background-color: #353435;
          font-size: 0.3733333rem;
          height: 1.3333rem;
          line-height: 1.333334rem;
          border-radius: @border-radius-8px;
        }
        > img {
          display: block;
          width: 0.5867rem;
          height: 0.5867rem;
          margin-top: 0.44rem;
        }
      }
      .tranfer_amount {
        padding: 0.4rem;
        width: 100%;
        margin-top: 0.267rem;
        > p {
          font-size: 0.4266667rem;
          color: #999999;
        }
        > div {
          overflow: hidden;
          height: 1.533334rem;
          padding-bottom: 0.2rem;
          line-height: 1.333334rem;
          border-bottom: 2px solid #3f3f3f;
          > .icon {
            float: left;
            font-size: 0.426667rem;
            color: #999999;
          }
          > .all {
            font-size: 0.426667rem;
            float: right;
            color: #999999;
          }
          > input {
            border: none;
            padding-left: 0.2rem;
            width: 5rem;
            height: 1.333334rem;
            color: #ffffff;
            font-size: 0.426667rem;
            float: left;
            background-color: @bg-card-color;
          }
        }
        > .btn {
          font-weight: 600;
          color: #fff;
          font-size: 0.426667rem;
          border-radius: 0.1rem;
          margin: 0 auto;
          margin-top: 0.66666667rem;
          text-align: center;
          width: 9.2rem;
          height: 1.333334rem;
          line-height: 1.333334rem;
          background-color: #4d4c4d;
          border:2px solid #4d4c4d;

          &.active {
            background-color: @primary-color;
            border: 2px solid @primary-color;
            color: #fff;
          }
        }
      }
    }
  }
  .record-title {
    position: relative;
    top: 0;
    height: @height-tabs;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    z-index: 1;
    background-color: @primary-color;

    img {
      width: 30px;
      position: absolute;
      left: 30px;
    }

    span:last-child {
      position: absolute;
      right: 30px;
    }
  }
  .incom-btn {
    width: 100%;
    padding: 0 @margin-15;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      border-radius: 0.11rem;
      font-size: 0.37rem;
      text-align: center;
      height: 1rem;
      line-height: 1rem;
      position: relative;
      flex: 1;

      &:first-child {
        font-weight: 500;
        position: relative;
        color: #fff;
        border: 2px solid rgba(255, 255, 255, 0.08);

        /* &::after {
            .box-border()
          } */
      }

      &:last-child {
        font-weight: 500;
        background-color: @primary-color;
        color: #fff;
        margin-left: @margin-10;
      }
    }
  }

  .barColor {
    // background-image: url('@assets/img/memberCenter/bg-person-center@2x.png');
    background-size: 100%;
    background-color: rgab(200, 167, 127);
    background-repeat: no-repeat;
  }
}

.container {
  display: block;
  position: absolute;
  left: 0;
  padding-top: 0.01833rem;
  top: 0;
  right: 0;
  // bottom: @main-top;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  height: 100%;

  .aagames-header {
    background-color: rgba(200, 167, 127);
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: 9999;
    border-color: rgba(200, 167, 127);
    /* height: 8.266666rem; */
    // .barColor {
    //   background-color: pink;
    // }
    .aagames-nav-bar {
      background-color: rgba(200, 167, 127);
      top: 0;

      .nav-left {
        flex: 1;
      }

      .nav-center {
        flex: 6;
      }

      .nav-right {
        flex: 1;
      }
    }
  }

  .empty {
    margin-top: 4rem;
    .errorImg {
      width: 224px;
      height: 224px;
      margin: 0 auto;
      margin-top: 40px;
      background-image: url(~@assets/img3_0/error/empty.png);
      background-repeat: no-repeat;
      background-size: contain;
    }

    .emptyWallet {
      width: 2.2667rem;
      height: 2.9333rem;
      margin: 0 auto;
      margin-top: 40px;
      background-image: url(~@assets/img3_0/memberCenter/none.png);
      background-repeat: no-repeat;
      background-size: contain;
    }

    .text {
      color: #c5cfd6;
      text-align: center;

      .chinese {
        margin-top: 30px;
        font-size: @font-size-14;
        color: #999999;
        line-height: 1;
      }
    }
  }
}
.van-popup {
  .head {
    height: 1.3333rem;
    line-height: 1.3333rem;
    // border-bottom: 2px solid @primary-text-color;
    position: relative;
    > img {
      display: block;
      position: absolute;
      width: 0.5867rem;
      height: 0.5867rem;
      top: 0.3733rem;
      left: 0.4rem;
    }
    p {
      font-size: 0.4267rem;
      color: #333;
      text-align: center;
    }
  }
  .list {
    padding: 0.1333rem 0 1.0667rem;
    overflow: hidden;
    > p {
      float: left;
      width: 2.8rem;
      height: 1.0667rem;
      border-radius: 0.1067rem;
      border: 2px solid #3f3f3f;
      color: #ccc;
      line-height: 1.0667rem;
      text-align: center;
      margin: 0.4rem 0 0 0.4rem;
      font-size: 0.4267rem;
      &.active{
        background: @primary-color;
        border:0;
        color:#333;
      }
    }
  }
}
.main {
  position: relative;
  color: #ffffff;
  padding: 0;
  > .total-box {
    height: 6rem;
    background-color:@primary-color;
    > .total-amount {
      padding-top: 1rem;
      margin: 0 @margin-10 0;
      height: 3rem;
      border-radius: 0.08rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .van-icon{
        margin-left: 10px;
        color:rgba(#fff, .8);
        font-size: 36px;
        position: absolute;
        top: 50px;
        right: 50px;
      }
      .item {
        flex: 1;
        text-align: center;
        position: relative;

        > div:first-child {
          color: #ffffff;
          font-size: 0.51rem;
          font-weight: 600;
          line-height: 0.69rem;
        }

        > div:last-child {
          color: #ffffff;
          font-size: 0.35rem;
          font-weight: 400;
          line-height: 0.48rem;
        }
      }
    }
    .income {
      height: 5.3rem;
      background-color: @bg-card-color;
      position: relative;
      border-radius: 0.08rem;
      margin: 0 @margin-10;
      /* overflow: hidden; */
      > .total-amount {
        border-radius: 0;
        height: 2rem;
        position: relative;
        margin: 0 @margin-10;
        display: flex;
        justify-content: center;
        align-items: center;

        .item {
          flex: 1;
          text-align: center;
          position: relative;
          > div:first-child {
            font-size: 0.37rem;
            color: #ffffff;
          }
          > div:last-child {
            margin-top: 0.2rem;
            color: #999999;
          }
        }
      }
    }
  }

  .select {
    padding: 0;
    color: #c5cfd6;
    font-size: 24px;
    .van-row {
      text-align: center;
      padding: 0 @margin-10;
      margin-top: @margin-15;
      color: #222222;
      font-size: @font-size-14;
      display: inline-flex;
      width: 100%;

      .data-time-picker {
        background-color: #fff;
        width: 5.86666rem;
        height: 1.226666rem;
        border-radius: @border-radius-2px;
        border: 0.026666rem solid #ebebeb;
        display: inline-flex;
        align-items: center;
        flex: 8;

        .starttime,
        .endtime {
          flex: 4;
        }

        i {
          flex: 1;
        }
      }

      .b-r {
        background-color: #fff;
        border: 0.022222rem solid #ebebeb;
        margin-left: @margin-10;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .lists {
    margin-top: 2.3rem;
  }
  .list {
    padding-top: 0.4rem;
    margin: @margin-10;
    .item {
      padding: 0 @margin-10 @margin-15;
      position: relative;

      &::after {
        .border-bottom();
        background-color: #3f3f3f;
      }

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #999999;
        font-size: 0.32rem;
        margin-top: @margin-10;
        > span:first-child {
          color: @primary-text-color;
        }
      }

      &:last-child {
        margin-top: @margin-15;
      }

      .blod {
        color: #ccc;
        font-size: 0.37rem;
        font-weight: 600;
        > span:first-child {
          color: #ccc;
        }
      }
    }
  }
}
</style>
