<template>
  <div class="container quota">
    <lheader :title="title" path="111" :turn.sync="isOpen" :help="true"></lheader>
    <div id="apply">
      <div class="main">
        <div class="accout">
          <div class="automatic">
            <span>自动免转钱包</span>
            <van-switch
              v-model="openMoney"
              :inactive-color="$colorjs.switchInactiveColor"
              :active-color="$colorjs.switchActiveColor"
              size="24px"
              @input="onChange"
            />
          </div>
          <div class="transfer_out">
            <p v-if="!openMoney">转出钱包</p>
            <div class="content">
              <div class="content_l">
                <span class="wallet">{{list.from_platform_name}}</span>
                <span class="num">{{ list.from_money }}</span>
                <van-icon
                  class="refresh"
                  @click="refresh"
                  :class="{ active: balanceLoading }"
                  name="replay"
                />
              </div>
              <div class="arrow-container" @click="getMoneyOut">
                <img
                  src="@assets/img3_0/memberCenter/more.png"
                  alt
                  class="arrow_r"
                  v-if="!openMoney"
                />
              </div>

            </div>
          </div>
          <div class="btn-all" v-if="openMoney">
            <div @click="recovery">一键回收</div>
          </div>
          <p v-if="openMoney" class="note">游戏大厅</p>
          <p v-if="!openMoney" class="trans-in">转入钱包</p>
          <ul>
            <li
              v-for="(item,index) in walletList"
              :key="index"
              :class='{"active":activeIndex == index}'
              @click="chooseItem(item,index)"
            >
              <p>{{item.game_platform_name}}<span v-show="list.to_platform_name !== '主账户' && activeIndex == index && !openMoney">({{list.to_platform_name}})</span></p>
              <p>{{ (item.money || 0) | currency('') }}</p>
              <img src="@assets/img3_0/memberCenter/normal.png" alt v-if="item.hot == 1" />
            </li>
          </ul>
          <div class="transfer" v-if="!openMoney">
            <p>转账金额</p>
            <div class="input_">
              <input type="number" placeholder="请输入转账金额" v-model="money" />
              <span @click="money = allMoney">全部转入</span>
            </div>
            <div class="aagames-button-box btn">
              <div class="line" @click="recovery">一键回收</div>
              <div @click="submit">确认转账</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 游戏平台列表 -->
    <van-popup
      class="custom"
      v-model="gameShow" position="bottom">
      <div class="head">
        <img src="@assets/img3_0/memberCenter/close.png" alt @click="gameShow=false" />
        <p>{{chooseText}}</p>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in chooseList" :key="index">
            <p @click="choosePlat(item)" class="name">{{item.game_platform_name}}</p>
            <p @click="choosePlat(item)" class="money">{{item.money}}</p>
              <!-- v-if="!item.platform_list && activeChooseFrom==0" -->

            <img
              src="@assets/img3_0/memberCenter/right.png"
              v-if="item.game_platform_id == activeChooseTo && !openMoney"
              alt
            />
            <img @click="shareMoney(item.money_code)" v-if="item.isShare && shareWallet[item.money_code].length>1" class="shareImg" src="@assets/img3_0/memberCenter/share.png" alt="">
          </li>
        </ul>
      </div>
    </van-popup>
    <van-popup v-model="gameAll" position="bottom">
      <div class="head">
        <img src="@assets/img3_0/memberCenter/close.png" alt @click="gameAll=false" />
        <p>转出钱包</p>
      </div>
      <div class="choose">
        <div v-for="(item,index) in walletList" :key="index" class="father">
          <div class="item" @click="chooseFather(item,index)">
            <p class="name">{{item.game_platform_name}}({{item.money}})</p>
            <img
              src="@assets/img3_0/memberCenter/more.png"
              alt
              class="arrow_b"
              v-if="item.platform_list"
              :class='{"active":activeList.indexOf(index) != -1}'
            />
            <img
              src="@assets/img3_0/memberCenter/right.png"
              alt
              v-if="!item.platform_list && activeChooseFrom==0"
            />
          </div>
          <div
            v-for="(val,ind) in item.platform_list"
            :key="ind"
            class="son"
            v-show="activeList.indexOf(index) != -1"
          >
            <p @click="chooseSon(val)" class="name">{{val.game_platform_name}}({{val.money}})</p>
            <img
              src="@assets/img3_0/memberCenter/right.png"
              alt
              v-if="activeChooseFrom==val.game_platform_id"
            />
            <img @click="shareMoney(val.money_code)" v-if="val.isShare && shareWallet[val.money_code].length>1" class="shareImg" src="@assets/img3_0/memberCenter/share.png" alt="">
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>


<script>
import Lheader from "@/components/l-header";
import {
  allplatform,
  trans,
  gamecateplatform,
  wallet,
  backtransall,
  autotrans
} from "@/api/memberCenter";
import { accountsafe } from "@/api/personalData";
import path from "path";
import { mapState } from "vuex";
// import icon1 from '@assets/img/transfer/1@2x.png'
// import icon2 from '@assets/img/transfer/2@2x.png'
// import icon3 from '@assets/img/transfer/3@2x.png'
// import icon4 from '@assets/img/transfer/4@2x.png'
// import icon5 from '@assets/img/transfer/5@2x.png'
// import icon7 from '@assets/img/transfer/7@2x.png'
// import icon8 from '@assets/img/transfer/8@2x.png'

import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

export default {
  name: "quotaTransfer",
  data() {
    return {
      icons: {},
      title: "额度转账",
      showKeyboard: false,
      gameStatus: {},
      gameColumns: [],
      isOpen: 0,
      columns: [
        {
          values: [],
          className: "column1"
        },
        {
          values: [],
          className: "column2"
        }
      ],
      gameShow: false,
      isDisabled: false,
      type: "",
      list: {
        pay_password: "1",
        from_platform_id: 0,
        to_platform_id:0,
        from_platform_name:'主账户',
        to_platform_name:'主账户',
        from_money_code:'money',
        from_money:'0',
      },
      walletList: [],
      walletMoney: {},
      data: {},
      openMoney: false,
      money: "",
      balanceLoading: false,
      chooseText: "",
      chooseList: [],
      activeIndex: -1,
      allMoney: "",
      gameAll: false,
      activeList: [],
      activeChooseFrom: 0,
      activeChooseTo:0,
      shareWallet:{}
    };
  },
  computed: {
    ...mapState("users", ["wallet"])
  },
  methods: {
    onChange(detail) {
      if (detail) {
        this.data.is_auto_trans = 1;
      } else {
        this.data.is_auto_trans = 2;
      }
      autotrans(this.data).then(res => {
        if (this.data.is_auto_trans === 2) {
          this.$toast("关闭成功");
        } else {
          this.$toast("开启成功");
        }
        this.openMoney = detail;
      });
    },
    chooseFather(item, index) {
      if (this.activeList.indexOf(index) == -1) {
        this.activeList.push(index);
      } else {
        this.activeList.splice(this.activeList.indexOf(index), 1);
      }
      if (index == 0) {
        this.activeChooseFrom = 0;
        this.list.from_platform_id = 0;
        this.list.from_platform_name = '主账户'
        this.allMoney = this.wallet.money;
        this.list.from_money = this.wallet.money;
        this.gameAll = false;
      }
    },
    chooseSon(val) {
      this.activeChooseFrom = val.game_platform_id;
      this.list.from_platform_id = val.game_platform_id;
      this.list.from_platform_name = val.game_platform_name
      this.list.from_money = val.money || '0.00'
      this.list.from_money_code = val.money_code
      this.allMoney = this.list.from_money
      this.gameAll = false;
    },
    recovery() {
      this.$toast.loading({
        className: "toast-loading",
        mask: true,
        forbidClick: true,
        loadingType: "spinner",
        message: "回收中...",
        duration: 0 // 持续展示 toast
      });
      backtransall(this.data).then(res => {
        this.$toast.clear()
        if (res.data.code === 0) {
          // this.$toast('回收成功');
          this.walletM('回收成功');
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    chooseItem(item, index) {
      this.chooseText = item.game_platform_name;
      this.chooseList = item.platform_list;
      if(index !== this.activeIndex) {
        this.activeIndex = index;
        this.list.to_platform_name = '主账户'
        this.list.to_platform_id = 0
        this.activeChooseTo = 0
      }
      if (index != 0) {
        this.gameShow = true;
      }
    },
    submit() {
      this.list.money = this.money;
      if (this.list.from_platform_id == null) {
        this.$toast.fail("请选择转出账户");
        return false;
      }
      if (this.list.to_platform_id == null) {
        this.$toast.fail("请选择转入账户");
        return false;
      }
      if (!this.list.money) {
        this.$toast.fail("请输入转账金额");
        return false;
      }
      this.$toast.loading({
        className: "toast-loading",
        mask: true,
        forbidClick: true,
        loadingType: "spinner",
        message: "转帐中...",
        duration: 0 // 持续展示 toast
      });
      this.list.access_token = window.localStorage.token;
      trans(this.list).then(res => {
        this.$toast.clear();
        if (res.data.code === 0) {
          // this.$toast("转账成功");
          this.money = '';
          this.walletM("转账成功");
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    refresh() {
      // this.balanceLoading = true;
      // this.$store
      //   .dispatch("users/getWallet")
      //   .then(res => {
      //     this.list.from_money = res.money || '0.00'
      //     this.allMoney = this.list.from_money
      //     this.balanceLoading = false;
      //   })
      //   .catch(() => {
      //     this.balanceLoading = false;
      //   });
      this.walletM('余额刷新成功')
    },
    walletM(text) {
      this.balanceLoading = true;
      this.$loading({
        className: "toast-loading",
        mask: true,
        forbidClick: true,
        loadingType: "spinner",
        message: "刷新余额中...",
        duration: 0 // 持续展示 toast
      })
      wallet(this.data).then(res => {
        if (res.data.code === 0) {
          this.$toast.clear()
          this.list.from_money = res.data.data.money || '0.00'
          this.allMoney = this.list.from_money
          this.balanceLoading = false;
          this.isOpen = res.data.data.is_auto_trans;
          this.openMoney = res.data.data.is_auto_trans == 1;
          this.walletMoney = res.data.data
          let list = this.walletList;
          if(text) {
            this.$toast(text)
          }
          list.forEach(val => {
            if(val.game_cate_id == res.data.data.last_platform_cate_id) {
              val.hot = 1
            } else {
              delete val.hot
            }
            val.money = 0;
            // 游戏分类金额
            for (let key in this.walletMoney) {
              if (val.game_cate_id == key.split('_')[1]) {
                val.money = (this.walletMoney[key] * 1).toFixed(2);
              }
              if(key == 'money') {
                val.money = (this.walletMoney[key] * 1).toFixed(2);
              }
            }
            // 游戏平台金额
            if (val.platform_list) {
              val.platform_list.forEach(item => {
                for (let key in this.walletMoney) {
                  if (item.money_code == key) {
                    item.money = (this.walletMoney[key] * 1).toFixed(2);
                  }
                }
              });
            }
          });
          if (res.data.data.last_platform_cate_id == 0) {
            list[0].hot = 1;
          }
          this.walletList = list;
        }
        console.log(this.walletList,this.walletMoney,)
      })
      .catch(() => {
        this.$toast.clear()
        this.balanceLoading = false;
      });
    },
    choosePlat(item) {
      // this.list.to_platform_id = 0;
      this.list.to_platform_id = item.game_platform_id;
      this.activeChooseTo = item.game_platform_id
      this.list.to_platform_name = item.game_platform_name
      this.gameShow = false;
      // this.allMoney = item.money;
    },
    getMoneyOut() {
      if (!this.openMoney) {
        this.gameAll = true;
      }
    },
    shareMoney(val) {
      this.$toast(`(${this.shareWallet[val].join('+')})余额共享`)
    }
  },
  created() {

    allplatform(this.data).then(res => {
      if (res.data.code === 0) {
        this.gameStatus = res.data.data;
        let key = [{ id: 0, text: "主账户" }];
        for (let attr in res.data.data) {
          key.push({ id: Number(attr), text: res.data.data[attr] });
        }
        this.gameColumns = key;
      }
    });

    gamecateplatform(this.data).then(res => {
      if (res.data.code === 0) {
        const data = res.data.data;
        for (let a of data) {
          a.game_platform_name = a.game_cate_name;
        }
        data.unshift({
          game_platform_name: "主账户",
          game_platform_id: 0,
          game_cate_id: 0,
          money: this.wallet.money
        });
        this.columns[0].values = data;
        this.columns[1].values = data[0].platform_list;
        // 筛选共享钱包
        let tmp = []
        let arr = []
        data.forEach(item=> {
          if(item.platform_list) {
            item.platform_list.forEach(a=> {
              arr.push(a.money_code)
            })
          }
        })
        arr.concat().sort().sort((a,b)=> {
          if(a==b && tmp.indexOf(a) === -1) tmp.push(a);
        });
        console.log(tmp)
        // 标记共享钱包
        data.forEach(item => {
          if(item.platform_list) {
            item.platform_list.forEach(a=> {
              tmp.forEach(b=> {
                if(a.money_code == b) {
                  a.isShare = true
                }
              })
            })
          }
        })
        // 标记共享钱包平台
        tmp.forEach(item => {
          this.shareWallet[item] = []
          data.forEach(a=> {
            if(a.platform_list) {
              a.platform_list.forEach(b=> {
                if(b.money_code == item && this.shareWallet[item].indexOf(b.game_platform_name) == -1) {
                  this.shareWallet[item].push(b.game_platform_name)
                }
              })
            }
          })
        })
        this.walletList = data;
      }
      this.walletM()
      console.log(this.shareWallet)
    });

    this.list.from_money = (this.wallet && this.wallet.money) || '0.00'
    this.allMoney = this.list.from_money
  },
  watch: {
    wallet:{
      handler(val) {
        this.isOpen = val.is_auto_trans
        this.openMoney = val.is_auto_trans == 1
        if (val.last_platform_cate_id == 0) {
          this.walletList[0].hot = 1;
          return
        }
        this.walletList.forEach(item => {
          if(item.game_cate_id == val.last_platform_cate_id) {
            item.hot = 1
          } else {
            delete item.hot
          }
        })
      },
      deep:true
    },
    walletMoney:{
      handler(val) {
        this.list.from_money = (val[this.list.from_money_code]*1 || 0).toFixed(2)
      },
      deep:true
    }
  },
  components: {
    Lheader
  }
};
</script>

<style scoped lang="less">
@import '~@assets/styles/quotaTransfer/index.less';
.container {
  height: 100%;
  .accout {
    padding: 0 0.4rem;
    .automatic {
      padding: 0.4rem 0;
      height: 1.6rem;
      line-height: 1rem;
      overflow: hidden;
      border-bottom: 2px solid @border-color;
      margin-right: 10px;
      > span:first-child {
        font-size: 0.426666667rem;
        float: left;
        color: #cccccc;
      }
      > span:last-child {
        color: #ffffff;
        float: right;
      }
      > .van-switch {
        float: right;
        margin-top: 0.16rem;
        margin-right: 10px;
      }
    }
    .transfer_out {
      padding: 0.3rem 0;
      width: 100%;
      > p {
        margin-top: 0.4rem;
        color: #ffffff;
        font-size: 0.3733333rem;
      }
      .content {
        height: 1.333333rem;
        line-height: 1.333333rem;
        overflow: hidden;
        display:flex;
        justify-content: space-between;
        > .arrow-container{
          flex:1;
        }
        > .content_l {
          float: left;
          > .wallet {
            float: left;
            color: #cccccc;
            font-size: 0.426666667rem;
          }
          .num {
            float: left;
            color: @primary-color;
            font-size: 0.426666667rem;
            margin-left: 0.3rem;
          }
          > img {
            display: block;
            float: left;
            width: 0.3rem;
            height: 0.3rem;
            margin: 0.5rem 0 0 0.2rem;
            border-radius: 50%;
          }
          .refresh {
            transition: all 0.45s ease-out;
            float: left;
            color: #cccccc;
            font-size: 0.426666667rem;
            margin-left: 0.3rem;
            line-height: 98px;
            &.active {
              animation: refresh 1s linear infinite;
            }
          }
        }
        .arrow_r {
          display: block;
          width: 0.4rem;
          height: 0.3rem;
          float: right;
          margin-top: 0.5rem;
        }
      }
    }
    .note {
      color: #fff;
      line-height: 98px;
      font-size: 0.4267rem;
    }
    .trans-in {
      margin-top: 0.4rem;
      color: #ffffff;
      font-size: 0.3733333rem;
      margin-bottom: 30px;
    }
    > .btn-all {
      > div {
        font-weight: 600;
        text-align: center;
        font-size: 0.4266666667rem;
        width: 100%;
        height: 1.3333333333rem;
        line-height: 1.3333333333rem;
        border-radius: 4px;
        color: #fff;
        background-color: @primary-color;
      }
    }
    ul {
      overflow: hidden;
      > li {
        &.active {
          background-color: @primary-color;
          > p:first-child {
            color: #1e1e1e;
          }
          > p:nth-child(2) {
            color: #1e1e1e;
          }
        }
        position: relative;
        width: 4.4rem;
        padding: 30px 30px;
        background-color: @primary-color;
        border-radius: @border-radius-8px;
        margin-bottom: 0.4rem;
        > p:first-child {
          color: #999999;
          font-size: 0.4266666667rem;
        }
        > p:nth-child(2) {
          margin-top: 0.1rem;
          color: #ffffff;
          font-size: 0.4266666667rem;
        }
        > img {
          position: absolute;
          display: block;
          width: 0.88rem;
          height: 0.88rem;
          top: 0;
          right: 0;
          transform: translate(4px, -6px);
        }
      }
      > li:nth-child(2n + 1) {
        float: left;
      }
      > li:nth-child(2n) {
        float: right;
      }
    }
    > .transfer {
      width: 100%;
      margin-top: 0.53333333rem;
      > p {
        width: 100%;
        color: #999999;
        font-size: 0.4266666667rem;
      }
      > .input_ {
        padding: 0.3733333333rem 0;
        width: 100%;
        height: 1.333333333rem;
        overflow: hidden;
        border-bottom: 2px solid @border-color;
        > input {
          color: @primary-color;
          font-size: 0.4266666667rem;
          float: left;
          border: none;
          background-color: @bg-color;
          &::placeholder {
            font-size: 0.4266666667rem;
            color: #3f3f3f;
          }
        }
        > span {
          display: inline-block;
          line-height: 0.5rem;
          color: #cccccc;
          font-size: 0.37333333rem;
          float: right;
        }
      }
      > .btn {
        display: flex;
        justify-content: space-around;
        margin-top: 0.533333333rem;
        > div {
          font-weight: 600;
          text-align: center;
          font-size: 0.4266666667rem;
          width: 300px;
          height: 1.3333333333rem;
          line-height: 1.3333333333rem;
          border-radius: 4px;
        }
        // > div:first-child {
        //   color: @primary-color;
        //   // background-color: #353435;
        //   border: 2px solid @border-color-base;
        // }
        > div:last-child {
          color: #fff;
          background-color: @primary-color;
        }
      }
    }
  }
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  // background-color: #090705;
  .el-main {
    padding: 0;
    .main {
      padding: 0;
      .aagames-label {
        margin-top: @margin-10;
        padding: 0 @margin-15;
        font-size: @font-size-13;
      }
      .amount {
        margin-top: @margin-20;
        .aagames-input-box {
          margin-top: @margin-10;
        }
      }
      .password {
        color: #f25637;
        margin-top: @margin-20;
        font-size: @font-size-13;
        height: 2.5rem;
        .error-msg {
          padding: 0 0.4rem;
          margin-top: @margin-5;
        }
        .label {
          color: #333333;
          padding: 0 @margin-15;
        }
        /* 密码输入 */
        .aagames-input-password {
          display: inline-flex;
          align-items: center;
          width: 100%;
          padding: 0 @margin-15;
          margin-top: @margin-10;
          .van-password-input {
            margin: 0;
            height: 1.06666rem;
            flex: 4;
            .van-password-input__security {
              height: 100%;
            }
            .van-password-input__security li {
              margin: 0 0 0 0.02666rem;
              position: relative;
              &::before {
                content: "";
                position: absolute;
                border: 1px solid #e6e6e6;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
              }
            }
          }
          .forgetPass {
            flex: 2;
            color: @primary-text-color;
            font-size: @font-size-13;
            text-align: center;
          }
        }
      }
      // 余额
      .gameBalance {
        padding-bottom: @margin-20;
        margin-top: @margin-60;
        background-color: #fff;
        display: inline-block;
        width: 100%;
        .title {
          margin-top: @margin-20;
          padding: 0 @margin-15;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .label {
            font-size: @font-size-18;
            font-weight: @font-weight-600;
          }
        }
        .list {
          background-color: #ffffff;
          padding: @margin-20 @margin-20 0 @margin-20;
          .item-header {
            display: inline-flex;
            align-items: center;
            img {
              width: 0.53333rem;
              height: 0.53333rem;
            }
            span {
              color: @text-color-default;
              font-size: @font-size-14;
              margin-left: @margin-10;
            }
          }
          .van-row {
            margin-top: @margin-10;
            padding: 0 @margin-10;
            .van-col {
              font-size: @font-size-13;
              position: relative;
              height: 1.33333rem;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              &:nth-child(1n) {
                &::after {
                  bottom: -0.02222rem;
                  left: -0.02222rem;
                }
              }
              &::after {
                .box-border();
              }
              .label {
                color: #666666;
              }
              .value {
                color: @primary-text-color;
                margin-top: 0.08rem;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
    .aa {
      transition: all 2s;
      transform: rotate(0deg);
    }
    .go {
      transform: rotate(180deg);
      transition: all 2s;
    }
    .refresh {
      width: 30.96px;
      height: 25.8px;
      display: inline-block;
      background-size: contain;
      background-repeat: no-repeat;
      margin-left: 20px;
      // background-image: url(~@assets/img/memberCenter/refresh.png);
    }
  }
  #apply{
    height:100%;
    padding-top: 88px;
    margin-bottom: 30px;
  }
}
.focusState {
  position: absolute;
}
.van-button {
  margin-left: 25px;
  height: initial;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 44px;
  border-radius: 2px;
  .van-button__text {
    line-height: initial;
    font-size: 26px;
  }
}

.van-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border: none; /*px*/
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 200%;
  height: 200%;
  -webkit-transform: scale(0.5); /*no*/
  transform: scale(0.5); /*no*/
  -webkit-transform-origin: left top;
  transform-origin: left top;
}
.van-button--plain,
.van-button--default {
  display: inline-block;
  border: none;
  border-radius: @border-radius-2px;
  text-align: center;
  font-size: @font-size-13;
}
.van-button--plain {
  background-color: #be8d24;
}
.van-button--default {
  background-color: #ffffff;
  color: #333333;
  border: 0.02222rem solid #e0e0e0;
}
.van-button--plain.van-button--danger {
  color: #ffffff;
}
.van-popup {
  &.custom{
    display: flex;
    flex-direction: column;
  }
  .head {
    height: 98px;
    line-height: 98px;
    // border-bottom: 1px solid #3f3f3f;
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
      color: #fff;
      text-align: center;
    }
  }
  .list {
    padding: 0.1333rem 0 1.0667rem;
    // overflow: hidden;
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    ul {
      padding:0 0.4rem;
      li {
        line-height: 98px;
        font-size: 0.4267rem;
        border-bottom: 2px solid @border-color;
        height: 98px;
        display: flex;
        align-items: center;
        position: relative;
        > .name {
          color: #999;
          flex:1;
          margin-left: 40px;
        }
        > .money {
          color: @primary-color;
          padding-right: 0.5333rem;
        }
        > img {
          width: 0.53333rem;
          height: 0.53333rem;
          margin-right: 30px;
          &.shareImg{
            position: absolute;
            // transform: rotate(270deg);
            left:0;
            top:0;
            margin:0;
          }
        }
      }
    }
  }
  .choose {
    padding: 0.1333rem 0.4rem 1.0667rem;
    overflow: hidden;
    padding-left: 0.4rem;
    height: 10.6667rem;
    overflow-y: scroll;
    > .father {
      line-height: 98px;
      font-size: 0.4267rem;
      border-bottom: 2px solid @border-color;
      > .item {
        overflow: hidden;
        > .name {
          color: #999;
          float: left;
        }
        > img {
          display: block;
          width: 0.5867rem;
          height: 0.5867rem;
          margin: 0.3733rem 0.4rem 0 0;
          float: right;
        }
        > .arrow_b {
          transform: rotate(90deg);
          transition: all 0.5s;
          &.active {
            transform: rotate(-90deg);
          }
        }
      }
      > .son {
        line-height: 98px;
        font-size: 0.4267rem;
        border-bottom: 2px solid @border-color;
        height: 98px;
        padding-left: 0.4rem;
        position: relative;
        display: flex;
        &:last-child{
          border-bottom: 0;
        }
        > .name {
          color: #999;
          float: left;
          flex:1;
        }
        > img {
          display: block;
          width: 0.5867rem;
          height: 0.5867rem;
          margin: 0.3733rem 0.4rem 0 0;
          &.shareImg{
            position: absolute;
            // transform: rotate(270deg);
            left:0;
            top:-4px;
            margin:0;
          }
        }
      }
    }
  }
}
</style>
