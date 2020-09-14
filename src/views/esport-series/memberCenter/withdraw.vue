<template>
  <div class="withdraw-page">
    <van-nav-bar
      class="m-header transparent"
      :title="title"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <img :src="$imgs['otherIcon/nav_kefu2@2x']" class="kf-icon" alt="">
      </template>
    </van-nav-bar>

    <div class="m-body gap">
      <ul class="withdraw-form">
        <li v-if="bankcard" @click="showBank">
          <div class="input">
            <div class="input-head bank-icon">
              <BankIcon :bankCode="bankcard.icon_code" />
            </div>
            <div class="input-body">
              <h3>{{ bankcard.bank_name }}</h3>
              <p>尾号{{ bankcard.card_no && bankcard.card_no.slice(-4) }}</p>
            </div>
            <div class="input-foot">
              <span>切换</span>
              <van-icon name="arrow" />
            </div>
          </div>
        </li>
        <li>
          <label>取款金额</label>
          <div class="input">
            <div class="input-head">¥</div>
            <div class="input-body">
              <input
                type="text"
                onkeyup="value=value.replace(/[^\d\.]/g,'')"
                onblur="value=value.replace(/[^\d\.]/g,'')"
                v-model="form.withdraw_money"
                :placeholder="`最低取款金额${min_money}元`"
              />
            </div>
            <div class="input-foot">
              <span class="withdrawAll" @click="setAll">全部提现</span>
            </div>
          </div>
        </li>
        <li v-if="userInfo && userInfo.is_pay_password !== 2">
          <!-- <label>请输入资金密码</label>
          <div class="input" v-if="userInfo && userInfo.is_pay_password === 2">
            <div class="input-body">
              <van-password-input
                :value="form.pay_password"
                :length="6"
                :gutter="15"
                :focused="showKeyboard"
                @focus="showKeyboard = true"
              />
            </div>
          </div> -->
          <div class="input" @click="setFundPassword">
            <div class="input-body">
              <p class="red">为保障您的资金安全，请您先设置资金密码</p>
            </div>
            <div class="input-foot">
              <van-icon name="arrow" />
            </div>
          </div>
        </li>
        <!-- <span class="forgetPass" @click="forgetFundPassword">忘记资金密码?</span> -->
        <li class="charge">
          <label @click="showTips">
            费用管理
            <van-icon name="question-o" />
          </label>
          <table class="table">
            <thead>
              <tr>
                <th>手续费</th>
                <th>行政费</th>
                <th>扣除优惠</th>
                <th>最后可取</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ fees.fee | currency('¥') }}</td>
                <td>{{ fees.admin | currency('¥') }}</td>
                <td>{{ fees.profit | currency('¥') }}</td>
                <td>{{ fees.resFee < 0 ? 0 : fees.resFee | currency('¥') }}</td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>

      <div class="aagames-tips">温馨提示：取款流水验证有1-3分钟数据延迟，3-5分钟提款到账</div>
      <div class="ui-buttons">
        <van-button :loading="submiting" type="primary" @click="submitBefore">确认提交</van-button>
      </div>
    </div>

    <!-- 银行卡下拉 -->
    <van-popup
      class="custom"
      v-model="show"
      closeable
      round
      close-icon-position="top-left"
      position="bottom"
      get-container="#app"
    >
      <div class="pop-head">
        <h2>开户银行</h2>
      </div>
      <div class="pop-body list-cells">
        <div class="cell" v-for="(item, index) in bankList" :key="index" @click="onSelect(item)">
          <div class="cell-head">
            <BankIcon :bankCode="item.icon_code" />
          </div>
          <div class="cell-body">{{ item.bank_name }}</div>
          <div class="cell-foot" v-if="bankcard.id === item.id">
            <van-icon name="success" />
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 输入资金密码 -->
    <van-popup
      :class="['custom',{'topPass':showKeyboard}]"
      v-model="showCapital"
      closeable
      round
      close-icon-position="top-left"
      position="bottom"
      get-container="#app"
    >
      <div class="pop-head">
        <h2>输入资金密码</h2>
      </div>
      <div class="pop-body list-cells">
        <div class="input">
          <div class="input-body">
            <van-password-input
              :value="form.pay_password"
              :length="6"
              :gutter="15"
              :focused="showKeyboard"
              @focus="showKeyboard = true"
            />
          </div>
          <span v-show="!showKeyboard" class="forgetPass" @click="forgetFundPassword">忘记资金密码?</span>
        </div>
        <div v-show="!showKeyboard" class="footer-tips">
          <p>
            遇到问题，联系
            <span @click="$openKefu">专属客服</span>
          </p>
        </div>
      </div>

    </van-popup>

    <van-popup
      class="custom"
      v-model="submitInfo"
      closeable
      round
      close-icon-position="top-left"
      position="bottom"
      get-container="#app"
      ref="test"
    >
      <div class="pop-head">
        <h2>取款审核中...</h2>
      </div>
      <div class="pop-body">
        <div class="pay-mark">
          <div class="clock">
            <van-image :src="$imgs['deposit/clock']" />
            <van-count-down ref="countDown2" @finish="$refs['countDown2'][0].reset()" class="processing-time-deposit" :time="time" format="mm:ss" />
          </div>
          <div class="money-text">¥{{(form.withdraw_money*1 || 0).toFixed(2)}}</div>
          <p>您的取款系统正在处理中</p>
          <p>请耐心等待</p>
        </div>
        <div class="btn">
          <div class="aagames-button-box">
            <button
              class="aagames-button mt30"
              type="button"
              @click="submitInfo = false"
            >确定</button>
          </div>
          <div class="aagames-button-box">
            <button
              class="aagames-button dark"
              type="button"
              @click="$router.push({ name: 'businessRecord',query:{type:1}})"
            >查看交易记录</button>
          </div>
        </div>
      </div>
    </van-popup>

    <!-- 数字键盘 -->
    <van-number-keyboard
      safe-area-inset-bottom
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
      @hide="hideKeyboard"
      :z-index="9999"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { bankcardlist, withdraw, canwithdraw, rechargeflow, withdrawlimitinfo } from "@/api/memberCenter";
import { accountsafe } from "@/api/personalData";
import BankIcon from "@/components/bank-icon";
import BankcardList from "@/components/pop-bankcard-list";

export default {
  name: "Withdraw",
  components: {
    BankIcon,
    BankcardList
  },
  data() {
    return {
      title: "取款",
      submiting: false,
      value: "1213",
      showKeyboard: false,
      // 当前选中银行卡
      bankcard: null,
      // columns: [],
      bindText: "请选择提现银行",
      show: false,
      min_money: 100,
      form: {
        withdraw_money: "",
        user_bank_id: "",
        pay_password: ""
      },
      errText: "",
      password: "",
      accountShow: false,
      showflow: false,
      loading: false,
      finished: false,
      rechargeData:[],
      limitInfo:{},
      // 手续费，行政费，优惠，可取
      fees:{
        fee:0,
        admin:0,
        profit:0,
        resFee:0
      },
      showCapital:false,
      time: 900000,
      submitInfo:false
    };
  },
  watch:{
    'form.withdraw_money'(val) {
      const { withdraw_fees, administrative_rate } = this.siteInfo.cost_manage
      withdraw_fees.some((item, index, _ary) => {
          this.fees.fee = item.withdraw_fee
          return val <= item.withdraw_fee_max
      })
      if(this.limitInfo.draw_limit_amount) {
        this.fees.admin = Math.min(this.limitInfo.draw_limit_amount,val) * administrative_rate
      }

      this.fees.profit = this.limitInfo.deduction_money
      this.fees.resFee = Math.max(val - this.fees.fee- this.fees.admin - this.fees.profit,0)
    }
  },
  computed: {
    ...mapState("users", ["userInfo", "isLogin","wallet"]),
    ...mapState("global", ["siteInfo"]),
    // 个人绑定的银行卡列表
    bankList() {
      const { userInfo } = this;
      return userInfo.user_bank;
    },
    columns() {
      const { user_bank } = this.userInfo;
    }
  },
  created() {
    const { isLogin, userInfo, bankList } = this;
    if (!isLogin) {
      this.$toast("请先登录");
      this.$route.push({
        name: "login"
      });
    }
    this.getLimitinfo()
    // 未绑定手机号
    // if (userInfo.is_valid_mobile !== 2) {
    //   const vm = this
    //   this.$dialog.confirm({
    //     message: '您当前未绑定手机号，无法取款！',
    //     title: '温馨提示',
    //     confirmButtonText: '去绑定',
    //   }).then(() => {
    //     vm.$router.push({
    //       path: '/personalData',
    //       query: {
    //         action: 'mobile'
    //       }
    //     })
    //   }).catch(() => {
    //     vm.$router.push({
    //       path: '/memberCenter'
    //     })
    //   });
    //   return
    // }
    // if (!bankList || !bankList.length) {
    //   const vm = this;
    //   this.$dialog
    //     .confirm({
    //       message: "您当前未绑定银行卡，无法取款！",
    //       title: "温馨提示",
    //       confirmButtonText: "去绑定"
    //     })
    //     .then(() => {
    //       vm.$router.push({
    //         path: "/addBankCard",
    //         query: {
    //           getPath: "withdraw"
    //         }
    //       });
    //     })
    //     .catch(() => {
    //       vm.$router.push({
    //         path: "/memberCenter"
    //       });
    //     });
    //   return;
    // } else {
    this.bankcard = bankList[0];
    // }
  },
  methods: {
    onInput(key) {
      this.form.pay_password = (this.form.pay_password + key).slice(0, 6);
      console.log(this.form.pay_password)
      if (this.form.pay_password.length === 6) {
        this.showKeyboard = false
        this.submit()
      }
    },
    onDelete() {
      this.form.pay_password = this.form.pay_password.slice(
        0,
        this.form.pay_password.length - 1
      );
    },
    selectBankcard(item) {
      // this.bindText = item.name
      // this.form.user_bank_id = item.id
      this.bankcard = item;
      this.show = false;
    },
    // onConfirm(val) {
    //   this.show = false
    //   this.bindText = val.name
    //   this.form.user_bank_id = val.id
    // },
    // onCancel() {
    //   this.show = false
    // },
    goback() {
      this.$router.push("memberCenter");
    },
    submitBefore() {
      const { form, userInfo } = this
      if(userInfo && userInfo.is_pay_password !== 2) {
        this.$dialog.confirm({
          message: '您当前未设置资金密码！',
          title: '温馨提示',
          confirmButtonText: '去设置'
        }).then(() => {
          this.setFundPassword()
        }).catch(()=> {

        })
        return false
      }
      if (!form.withdraw_money) {
       this.$toast.fail('请输入取款金额')
        return false
      }
      if (form.withdraw_money < 100) {
       this.$toast.fail('最低取款金额为100元，请重新输入')
        return false
      }
      this.showCapital = true
    },
    submit() {
      // console.log(this.fees.resFee)
      // this.showflow = true;
      // canwithdraw().then(res => {
      //   // console.log(res.data)
      // })
      // this.loadDataFlow()
      const { form, bankcard } = this
      if (!bankcard || !bankcard.id) {
       this.$toast.fail('请选择取款银行卡')
        return false
      }
      if (!form.withdraw_money) {
       this.$toast.fail('请输入取款金额')
        return false
      }
      if (form.withdraw_money < 100) {
       this.$toast.fail('最低取款金额为100元，请重新输入')
        return false
      }
      if (!this.form.pay_password) {
       this.$toast.fail('请输入资金密码')
        return false
      }
      form.user_bank_id = bankcard.id
      this.submiting = true
      let obj = {}
      Object.assign(obj,this.form)
      obj.money = this.fees.resFee
      obj.administrative_charge = this.fees.admin
      obj.discounts = this.fees.profit
      obj.service_charge = this.fees.fee
      withdraw(obj).then(res=> {
        // this.$toast.clear();
        if (res.data.code === 0) {
          this.$toast('提交成功')
          this.showCapital = false
          // this.form.withdraw_money = ""
          this.form.pay_password = ""
          this.submitInfo = true
        } else {
          this.$toast.fail(res.data.msg)
        }
        this.submiting = false
      },err=> {
        this.submiting = false
      })
    },
    showTips() {
      this.$dialog
        .confirm({
          title: "扣款详情",
          message: "手续费：取款时根据取款金额收取的银行手续费<br>行政费：领取红利产生未达标的流水按照比例扣除的费用<br>扣除优惠：领取红利之后未达标流水要求时申请取款需要扣除的红利金额<br>最后可取：扣除手续费、行政费和优惠之后可以取款的总金额",
          cancelButtonText: "联系客服",
          messageAlign:'left',
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          this.$openKefu();
        });
    },
    setFundPassword() {
      this.$store.dispatch("global/setPopShow", {
        status: true,
        passDisplay: true
      });
    },
    forgetFundPassword() {
      this.$store.dispatch("global/setPopShow", {
        status: true,
        idDisplay: true
      });
    },
    setAll() {
      this.form.withdraw_money = this.wallet.money
    },
    onClickLeft() {
      this.$router.push({
        name: "memberCenter"
      });
    },
    onClickRight() {
      this.$openKefu();
    },
    closeStatus() {
      this.accountShow = false;
    },
    showBank() {
      this.show = true
    },
    onSelect(val) {
      this.bankcard = val
      this.show = false
    },
    getLimitinfo() {
      withdrawlimitinfo().then(res => {
        this.limitInfo = res.data.data
      })
    },
    hideKeyboard() {
      this.showCapital = true
      if(!this.form.pay_password) {
        this.$toast.fail("资金密码不能为空");
        return false;
      }
      if(this.form.pay_password.length < 6) {
        this.$toast.fail("资金密码由6个数字组成");
        return false;
      }
      // this.submit()
    }
  }
};
</script>

<style lang="less">
.withdraw-page{
  height:100%;
  .m-body{
    padding-top: calc(@height-nav-bar + 20px) !important;
    height: 100%;
    background: #fff;
    &:after{
      content: '';
      position: absolute;
      height: 20px;
      top: @height-nav-bar;
      left: 0;
      width: 100%;
      background: #F5F6FA;
    }
  }
  /deep/ .m-header{
    background-color: #000!important;
    box-shadow:0px 4px 8px 0px rgba(0,0,0,0.06);
  }
  .ui-buttons{
    position: absolute;
    bottom: 100px;
    padding: 0 30px;
    width: 100%;
    left: 0;
  }
  /deep/ .van-button{
    border-radius: 90px;
  }

}
.withdraw-form {
  display: flex;
  flex-wrap: wrap;
  > li {
    width: 100%;
    border-bottom: 2px solid @border-color;
    color: #999;
    padding: 10px 0;
    &:last-child{
      border:0;
    }
    > label {
      display: block;
      font-size: 32px;
      line-height: 40px;
      margin-top: @space-gap;
      color: #333;
    }
    .input {
      min-height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 28px;
      &-head {
        color: #333;
        min-width: 40px;
        &.bank-icon {
          width: 100px;
        }
      }
      &-body {
        width: 100%;
        text-align: left;
        font-size: 32px;
        line-height: 40px;
        input,
        textarea {
          width: 100%;
          background-color: transparent;
          border: none;
        }
      }
      &-foot {
        min-width: 60px;
        display: flex;
        align-items: center;
        white-space: nowrap;
        .van-icon {
          font-size: 40px;
          margin-left: 10px;
          margin-right: 20px;
        }
        .withdrawAll{
          margin-right: 24px;
        }
      }
      .van-image {
        width: 60px;
      }
      h3 {
        margin: 0;
        font-weight: 500;
        margin-bottom: 10px;
        color: #333;
      }
      .red {
        color: #f66;
      }
    }
    .van-password-input {
      margin: @space-gap 0;
      li {
        i {
          background-color: @primary-color;
        }
      }
    }
    &.charge {
      label {
        color: #333;
        font-weight: bold;
        display: flex;
        align-items: center;
        .van-icon {
          color: @bg-gradient-color;
          margin-left: 20px;
        }
      }
    }
  }

}

.aagames-tips {
  margin-top: @space-gap;
  position: absolute;
  bottom: 240px;
  width: 100%;
  text-align: center;
  left: 0;
}

.table {
  margin-top: @space-gap;
}
.table thead th{
  background-color: #EDEFF6;
  border:2px solid rgba(219,224,232,1);
}
.table tbody td{
  border-color: #EDEFF6;
  box-sizing: border-box;
  background-color: #fff;
  color: #333333;
  font-size: 32px;
  &:last-child{
    color: #0FC59E;
  }
}
.van-popup{
  max-height: 70%;
}
.pop-head{
  // position: absolute;
  // top:0;
  // top:30%;
  // width:100%;
}
.custom{
  display: flex;
  flex-direction: column;
  .footer-tips{
    margin-top:20px;
  }
  &.topPass {
    transition: all 1s;
    height: 70%;
  }
  .input {
    min-height: 120px;
    // display: flex;
    // align-items: center;
    justify-content: space-between;
    font-size: 28px;
    &-body {
      width: 100%;
      text-align: left;
      font-size: 32px;
      line-height: 40px;
      input,
      textarea {
        width: 100%;
        background-color: transparent;
        border: none;
      }
    }
  }
  .forgetPass{
    display: block;
    font-size: 32px;
    line-height: 40px;
    margin-top: @space-gap;
  }
}
.pop-body {
  flex: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  table {
    border-radius: 4px;
    border: 2px solid @border-color;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
    thead {
      tr {
        th {
          width: 25%;
          line-height: 96px;
        }
      }
    }
    tbody {
      tr {
        td {
          text-align: center;
          line-height: 100px;
          border-top: 2px solid @border-color;
          border-right: 2px solid @border-color;
          border-bottom: 2px solid @border-color;
          &:nth-child(4) {
            border-right: 0;
          }
        }
      }
    }
    tfoot {
      tr {
        td {
          text-align: center;
          font-size: 28px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 80px;
        }
      }
    }
  }
}
.recharge-bottom{
  padding:0 @space-gap;
  .tips {
    font-size: 32px;
    color: #999;
    text-align: center;
    line-height: 44px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .btn-group {
    .van-button {
      margin-top: 40px;
    }
  }
}
.pay-mark {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  text-align: center;
  > * {
    width: 100%;
  }
  .clock {
    margin-bottom: @space-gap;
    .van-image {
      width: 120px;
      height: 120px;
      margin-bottom: @space-gap / 2;
    }
    span {
      display: block;
      width: 100%;
      color: @primary-color;
    }
  }
  .money-text{
    font-size: 60px;
    color:#ccc;
  }
  h3 {
    margin: 0;
    font-size: 36px;
    color: #ccc;
    margin-bottom: @space-gap;
  }
  p {
    line-height: 1.4;
  }
}

</style>
