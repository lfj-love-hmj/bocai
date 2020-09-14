<template>
  <div class="esport-deposit">
    <div class="deposit-page">
      <van-nav-bar
        class="m-header"
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
      <div class="m-body">
        <div v-if="payments.length && !loading">
          <ul class="deposit-main">
            <!-- <li v-if="thirdPayMsg && thirdPayMsg.product_name" class="ytVip">
              <span>油条存款套餐:</span>
              <label>{{thirdPayMsg.product_name}}</label>
            </li> -->
            <!-- 存款金额 -->
            <li>
              <label>存款金额</label>
              <div class="input">
                <input
                  type="number"
                  :disabled="!info.is_suit_money"
                  v-model="form.money"
                  :placeholder="`最低${info.min_money}元，最高${info.max_money}元`"
                />
                <!-- <input type="number" v-model="orderData.money" :placeholder="`最低${min_money}元，最高${max_money}元`"> -->
              </div>
            </li>
            <!-- 快捷金额 -->
            <li class="quick-select" v-if="info.is_quick_money && moneyList.length > 0">
              <div class="board">
                <div class="chips">
                  <div
                    class="chip"
                    v-for="(item, index) in moneyList"
                    :key="index"
                    :class="[amount_select === index ? 'selected' : '', getChipClassName(item)]"
                  >
                    <label v-if="getChipClassName(item)==='chip1'" :style="{backgroundImage:$bImgs['chouma/chouma1']}"
                      :class="{'disabledLabel': item*1 < thirdPayMsg.money*1}"
                      @click="selectAmount(item, index)"
                      :disabled="item*1 < thirdPayMsg.money*1"
                    >{{ item }}</label>
                    <label v-if="getChipClassName(item)==='chip2'" :style="{backgroundImage:$bImgs['chouma/chouma2']}"
                          :class="{'disabledLabel': item*1 < thirdPayMsg.money*1}"
                          @click="selectAmount(item, index)"
                          :disabled="item*1 < thirdPayMsg.money*1"
                    >{{ item }}</label>
                    <label v-if="getChipClassName(item)==='chip3'" :style="{backgroundImage:$bImgs['chouma/chouma3']}"
                          :class="{'disabledLabel': item*1 < thirdPayMsg.money*1}"
                          @click="selectAmount(item, index)"
                          :disabled="item*1 < thirdPayMsg.money*1"
                    >{{ item }}</label>
                    <label v-if="getChipClassName(item)==='chip4'" :style="{backgroundImage:$bImgs['chouma/chouma4']}"
                          :class="{'disabledLabel': item*1 < thirdPayMsg.money*1}"
                          @click="selectAmount(item, index)"
                          :disabled="item*1 < thirdPayMsg.money*1"
                    >{{ item }}</label>
                    <label v-if="getChipClassName(item)==='chip5'" :style="{backgroundImage:$bImgs['chouma/chouma5']}"
                          :class="{'disabledLabel': item*1 < thirdPayMsg.money*1}"
                          @click="selectAmount(item, index)"
                          :disabled="item*1 < thirdPayMsg.money*1"
                    >{{ item }}</label>
                  </div>
                </div>
                <div class="list-cells yt-label" v-if="thirdPayMsg.product_name">
                  <p>油条充值套餐：{{thirdPayMsg.product_name}}</p>
                </div>
                <div class="list-cells">
                  <div class="cell" @click="showPayments">
                    <div class="cell-head" v-if="payment">
                      <van-image
                        :src="require(`@assets/img3_0/deposit/icons/${paymentsIcons[payment.id] || 'online@3x.png'}`)"
                      />
                    </div>
                    <div class="cell-body">{{ payment && (payment.alias || payment.name) || '请选择存款渠道' }}
                      <!-- <span v-show="payMethodId">-{{payMethodId}}</span> -->
                    </div>
                    <div class="cell-foot">
                      切换存款渠道
                      <van-icon name="arrow" />
                    </div>
                  </div>
                  <!-- 在线支付 - 选择银行 -->
                  <!-- <div class="deposit" v-show="active === 1">
                    <div class="aagames-bank-select-box" style="margin-top:.8rem">
                        <div class="select">
                            <input type="text" v-model="orderData.bind" readonly @click="isBank" placeholder="请选择银行">
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                    </div>
                  </div>-->
                  <!-- 支付宝转网银-6 网银转账-2 -->
                  <div class="cell cell-ness" v-if="payment && [2, 6].indexOf(payment.id) !== -1 && bankList">
                    <ul class="cell-body card-like">
                      <li>
                        <label>银行卡号</label>
                        <span class="copy1 no-select">{{ bankList.bank_card_no }}</span>
                        <a
                          v-clipboard:copy="bankList.bank_card_no"
                          v-clipboard:success="onCopy"
                          v-clipboard:error="onError"
                        >复制</a>
                      </li>
                      <li>
                        <label>账户姓名</label>
                        <span class="copy1 no-select">{{ bankList.bank_account_name }}</span>
                        <a
                          v-clipboard:copy="bankList.bank_account_name"
                          v-clipboard:success="onCopy"
                          v-clipboard:error="onError"
                        >复制</a>
                      </li>
                      <li>
                        <label>开户银行</label>
                        <span>{{ bankList.bank_name }}</span>
                      </li>
                      <li>
                        <label>开户支行</label>
                        <span class="copy1 no-select">{{ bankList.bank_branch_name }}</span>
                        <a
                          v-clipboard:copy="bankList.bank_branch_name"
                          v-clipboard:success="onCopy"
                          v-clipboard:error="onError"
                        >复制</a>
                      </li>
                      <li v-if="payment && payment.id === 2">
                        <label>存款备注</label>
                        <span class="copy1 no-select">{{ bankList.rand_num }}</span>
                        <a
                          v-clipboard:copy="bankList.rand_num"
                          v-clipboard:success="onCopy"
                          v-clipboard:error="onError"
                        >复制</a>
                      </li>
                    </ul>
                  </div>

                  <!-- 支付宝转网银 -->
                  <div class="cell" v-if="payment && payment.id === 6">
                    <div class="cell-head">支付宝姓名</div>
                    <div class="cell-body">
                      <input type="text" v-model="orderData.alipay_name" placeholder="请输入支付宝姓名" />
                    </div>
                  </div>
                  <!-- 网银转账 -->
                  <div class="cell" v-if="payment && payment.id === 2">
                    <div class="cell-head">转款人姓名</div>
                    <div class="cell-body">
                      <input type="text" v-model="orderData.alipay_name" placeholder="请输入转款人姓名" />
                    </div>
                  </div>
                  <!-- 网银转账-2 网银在线-1 -->
                  <div class="cell" v-if="payment && (payment.id ==1 || payment.id == 2) " @click="checkBankcard">
                    <div class="cell-body">银行选择</div>
                    <div class="cell-foot">
                      {{form.bankName || '请选择银行'}}
                      <!-- <input
                        type="text"
                        v-model="form.bankName"
                        readonly
                        @click="isBank"
                        placeholder="请选择银行"
                      />-->
                      <van-icon name="arrow" />
                    </div>
                  </div>

                  <!-- 优惠申请 -->
                  <div class="cell" @click="show = true">
                    <div class="cell-body">优惠申请</div>
                    <div class="cell-foot">
                      {{ form.activityTitle || '您是否参与优惠申请' }}
                      <van-icon name="arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="tips">
              <template v-if="flowText && form.activityId">
                {{ flowText }}
                <br />
              </template>
              提交信息后，下一步请在15分钟内完成存款
            </li>
            <li class="ui-buttons">
              <van-button
                :loading="submiting"
                type="primary"
                :class="[{'dark':!form.money}]"
                @click="submit"
              >下一步</van-button>
              <!-- <van-button type="cancel" @click="$openKefu">支付遇到问题？联系客服</van-button> -->
              <!-- <van-button type="disabled" @click="$openKefu">被禁用的button</van-button> -->
            </li>
          </ul>
        </div>

        <!-- 存款渠道 -->
        <van-popup
          class="custom"
          v-model="paymentsShow"
          closeable
          round
          :close-icon-position="paymentsChild.length == 0?'top-left':'top-right'"
          position="bottom"
          get-container="#app"
        >
          <div class="pop-head">
            <h2>选择存款渠道</h2>
            <van-icon v-show="paymentsChild.length>0" @click="paymentsChild = []" name="arrow-left" />
          </div>
          <div class="list-cells" v-show="paymentsChild.length == 0">
            <div
              class="cell"
              v-for="(item, index) in payments"
              :key="index"
              @click="selectPayment(item)"
            >
              <div class="cell-head">
                <van-image
                  v-if="!item.child"
                  :src="require(`@assets/img3_0/deposit/icons/${paymentsIcons[item.id] || 'online@3x.png'}`)"
                />
                <van-image
                  v-else
                  :src="require(`@assets/img3_0/deposit/icons/${paymentsIcons[item.child[0].id] || 'online@3x.png'}`)"
                />
              </div>
              <div class="cell-body">{{ item.alias || item.name }}</div>
              <div class="cell-foot" v-show="payment && payment.id === item.id || item.child">
                <van-icon v-show="payment && payment.id === item.id && !item.child" name="success" />
                <van-icon v-show="item.child" name="arrow" />
              </div>
            </div>
          </div>
          <div class="list-cells" v-show="paymentsChild.length>0">
            <div
              class="cell"
              v-for="(item, index) in paymentsChild"
              :key="index"
              @click="selectPayment(item)"
            >
              <div class="cell-head">
                <van-image
                  :src="require(`@assets/img3_0/deposit/icons/${paymentsIcons[item.id] || 'online@3x.png'}`)"
                />
              </div>
              <!-- <div class="cell-body">{{ item.name }}-{{item.pay_method_id}}</div> -->
              <div class="cell-body">{{ item.alias|| item.name}}</div>
              <!-- <div class="cell-body">{{ item.alias || item.name }}</div> -->
              <div class="cell-foot" v-show="payment && payMethodId === item.pay_method_id">
                <van-icon v-show="payment && payMethodId === item.pay_method_id" name="success" />
              </div>
            </div>
          </div>
        </van-popup>

        <van-popup
          class="custom pay-res"
          v-model="popUpExplain"
          closeable
          round
          close-icon-position="top-right"
          get-container="#app"
          ref="test1"
        >
          <div class="pop-head">
            <h2>支付提示</h2>
          </div>
          <div class="pop-body">
            <div class="pay-mark">
              <div class="clock" v-show="time>0">
                <van-image :src="$imgs['deposit/clock']" />
                <van-count-down ref="countDown1" @finish="isPayment(popUpExplain)" class="processing-time-deposit" :time="time" format="mm:ss" />
              </div>
              <h3>请在15分钟内完成支付。</h3>
              <p>
                完成支付后，直接回到当前页面
                <br />点击“已完成支付”即可。
              </p>
            </div>
            <div class="ui-buttons aagames-button-box">
  <!--            <van-button type="cancel" @click="popUpExplain = false">取消</van-button>-->
  <!--            <van-button type="primary" @click="goPayment">去支付</van-button>-->

              <button
                  class="aagames-button aagames-button-default"
                  type="button"
                  @click="popUpExplain = false"
              >取消</button>
              <button class="aagames-button van-button--primary" type="button" @click="goPayment">去支付</button>
            </div>
          </div>
        </van-popup>

        <van-popup
          class="custom pay-res"
          v-model="isExplain"
          closeable
          round
          close-icon-position="top-right"
          get-container="#app"
        >
          <div class="pop-head">
            <h2>支付提示</h2>
          </div>
          <div class="pop-body iconImage">
            <van-image v-if="payment" :src="require(`@assets/img3_0/deposit/icons/${paymentsIcons[payment.id] || 'online@3x.png'}`)"></van-image>
            <div class="pay-mark">
              <p>请在新打开的支付页面完成支付</p>
            </div>
            <div class="ui-buttons aagames-button-box">
  <!--            <van-button type="primary" @click="isPayment(isExplain)">已完成支付</van-button>-->
  <!--            <van-button type="cancel" @click="$openKefu">支付遇到问题？</van-button>-->

              <button
                  class="aagames-button aagames-button-default"
                  type="button"
                  @click="$openKefu"
              >支付遇到问题？</button>
              <button class="aagames-button van-button--primary" type="button" @click="isPayment(isExplain)">已完成支付</button>
            </div>
          </div>
        </van-popup>

        <!-- 支付失败 -->
        <van-popup
          class="custom pay-res"
          v-model="paymentFail"
          closeable
          round
          close-icon-position="top-right"
          get-container="#app"
        >
          <div class="pop-head">
            <h2>支付失败</h2>
          </div>
          <div class="pop-body payStatus">
            <!-- <div class="close" @click="paymentFail = false">✕</div> -->
            <!-- <img class="middle-img" src="@assets/img/memberCenter/fail.png" alt="pay-warn"> -->
  <!--          <van-icon name="clear" color="#FF6666" size="100"></van-icon>-->
            <van-image class="payStatus-icon" :src="$imgs['deposit/bet_icon_charge_fail@2x']"></van-image>
            <div class="pay-title">存款失败</div>
            <div class="btn">
              <div class="aagames-button-box fail-button">
                <button
                  class="aagames-button aagames-button-default"
                  type="button"
                  @click="$openKefu"
                >支付遇到问题</button>
                <button class="aagames-button van-button--primary" type="button" @click="paymentFail = false">确认</button>
              </div>
              <!-- <div class="aagames-button-box">
                <van-button class="aagames-button" type="default" @click="paymentFail = false">确认</van-button>
              </div>
              <van-button type="primary" class="cancel" @click="$openKefu">支付遇到问题</van-button>-->
            </div>
          </div>
        </van-popup>

        <!-- 支付成功 -->
        <van-popup
          class="custom pay-res"
          v-model="paymentSuccess"
          closeable
          round
          close-icon-position="top-right"
          get-container="#app"
        >
          <div class="pop-head">
            <h2>支付成功</h2>
          </div>
          <div class="pop-body payStatus">
  <!--          <van-icon name='checked' color="#FFDD99" size="100"></van-icon>-->
            <van-image class="payStatus-icon" :src="$imgs['deposit/bet_icon_charge_success@2x']"></van-image>
            <div class="pay-title">您的存款已到账</div>
            <div class="btn">
              <div class="aagames-button-box success-button">
                <button class="aagames-button van-button--primary" type="button" @click="handleSuccess">确认</button>
              </div>
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
            <h2>存款审核中...</h2>
          </div>
          <div class="pop-body">
            <!-- <img class="big-img" src="@assets/img/memberCenter/success.png" alt="pay-warn"> -->
            <div class="pay-mark">
              <div class="clock">
                <van-image :src="$imgs['deposit/clock']" />
                <van-count-down ref="countDown2" @finish="isPayment" class="processing-time-deposit" :time="time" format="mm:ss" />
              </div>
              <div class="money-text">¥{{form.money ? (form.money*1).toFixed(2) : '0.00'}}</div>
              <p>您的存款系统正在处理中</p>
              <p>请耐心等待</p>
            </div>
            <div class="btn mt30">
              <div class="aagames-button-box">
                <button
                  class="aagames-button line"
                  type="button"
                  @click="$openKefu"
                >查询订单进度</button>
              </div>
              <div class="aagames-button-box">
                <button
                  class="aagames-button"
                  type="button"
                  @click="submitInfo = false"
                >已完成存款</button>
              </div>
            </div>
          </div>
        </van-popup>

        <!-- 银行选择 -->
        <van-popup v-model="bankShow" position="bottom">
          <van-picker
            show-toolbar
            @confirm="onConfirmBank"
            value-key="name"
            @cancel="onCancelBank"
            :columns="banks"
          />
        </van-popup>
        <!-- 银行选择 -->
        <van-popup class="bankShowForPayOnline" v-model="bankShowForPayOnline" position="bottom">
          <van-picker
            show-toolbar
            title="银行选择"
            @confirm="onConfirmBank"
            value-key="name"
            @cancel="onCancelBank"
            :columns="banksForPayOnline"
          />
        </van-popup>

        <!-- 优惠申请 -->
        <van-popup v-model="show" position="bottom">
          <van-picker
            show-toolbar
            @confirm="onConfirm"
            title="优惠申请"
            value-key="name"
            @cancel="onCancel"
            :columns="activities"
          />
        </van-popup>
        <form
          v-show="false"
          v-if="order"
          id="actform"
          name="actform"
          ref="from"
          :method="order.form.type"
          :action="order.form.url"
          target="_blank"
        >
          <input
            v-for="(val,key) in order.form.form"
            :key="key"
            :name="key"
            type="hidden"
            :value="val"
          />
          <button class="aagames-button" id="actformBtn" type="submit">提交</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  bankcardlist,
  preferentialactivity,
  paytype,
  paysubtype,
  order,
  merchantbank,
  allorderstatus,
  checkorder,
  allbanklist,
  banklist,
  depositinfo,
  quickmoneylist
} from "@/api/memberCenter";
import { allgamecate } from "@/api/activity";
import { paymentsIcons } from "@/utils/bankcards";
export default {
  name: "deposit",
  // components: {
  // 	headerNav,
  // 	popup,
  // },
  data() {
    return {
      title: "存款",
      pay_first: true,
      drawerWidth: "100%",
      paymentsShow: false,
      amount_select: -1,
      paymentsIcons,
      loading: true,
      payments: [],
      paymentsChild:[],
      payment: null,
      active: 3,
      // 当前选中支付方式
      payType: 1,
      bankList: {},
      info: {
        min_money: 0,
        max_money: 1000,
        is_need_bank_code: false,
        quick_money_list: ""
      },
      activities: [],
      banks: [],
      allBanks: [],
      banksForPayOnline: [],
      allBanksForPayOnline: [],
      bankShowForPayOnline: false,
      promoShow: false,
      bankShow: false,
      moneyList: [],
      allGameCate: {},
      form: {
        money: "",
        bank: null,
        bankName: "",
        alipayName: null,
        activityId: null,
        pay_method_id: null
      },
      orderData: {},
      submiting: false,
      // 流水倍数
      flow: 1,
      flowText: "",
      popUpExplain: false,
      paymentFail: false,
      paymentSuccess: false,
      submitInfo: false,
      show: false,
      isExplain: false,
      paymentUrl: "",
      allorderstatusList: {},
      // { pay_url,trade_no }
      order: null,
      haskefupay: false,
      thirdPayMsg: {
        product_name: "",
        busi_pay_type: "",
        busi_trade_no: "",
        busi_notify_url: ""
      },
      finished:false,
      time: 900000,
      payMethodId:'',
      bankCodeArr: [
        "ABC",
        "BCCB",
        "BOC",
        "BOCOM",
        "BOS",
        "CCB",
        "CEB",
        "CGB",
        "CIB",
        "CMB",
        "CMBC",
        "ECITIC",
        "HXB",
        "HZCBC",
        "ICBC",
        "NBCBC",
        "PAB",
        "PSBC",
        "SPDB"
      ]
    };
  },
  computed: {
    activity() {
      return this.activities.find(act => act.id == this.form.activityId) || {};
    }
  },
  watch: {
    active(val) {
      this.form = {};
      this.flowText = "";
      const data = {
        pay_type: this.payType,
        pay_method_id: this.payMethodId,
        // access_token: window.localStorage.token,
        // merchant_no: process.env.VUE_APP_MERCHANT_NO
      };
      if (val === 2 || val === 6) {
        this.max_money = this.merchantBank.limit_money_end;
        this.min_money = this.merchantBank.limit_money_start;
      } else {
        depositinfo(data).then(res => {
          this.max_money = res.data.data.max_money;
          this.min_money = res.data.data.min_money;
        });
      }
      banklist(data).then(res => {
        this.bindColumns = res.data.data;
      });
    },
    "form.money": {
      handler(newValue, oldValue) {
        if (newValue && this.form.activityId) {
          this.flowText = `流水要求：流水倍数${this.flow}，最低有效投注额${newValue + (0.3* newValue)*this.flow}`;
        } else {
          this.flowText = `流水要求：流水倍数${this.flow}，最低有效投注额0`;
        }
      },
      immediate: true
    },
    "form.activityId": {
      handler(newValue, oldValue) {
        const { money } = this.form;
        if (newValue && this.form.money) {
          this.flowText = `流水要求：流水倍数${this.flow}，最低有效投注额${money + (0.3 * money)*this.flow}`;
        } else {
          this.flowText = `流水要求：流水倍数${this.flow}，最低有效投注额0`;
        }
      },
      immediate: true
    },
    submitInfo(val) {
      if(!val) {
        localStorage.removeItem("thirdPayMsg")
      }
    }
  },
  created() {
    // 处理油条存款
    if (this.$route.query.busi_pay_type == 1) {
      localStorage.setItem("thirdPayMsg", JSON.stringify(this.$route.query));
      this.thirdPayMsg = this.$route.query
    }
    if(localStorage.getItem('thirdPayMsg')) {
      this.thirdPayMsg = JSON.parse(localStorage.getItem('thirdPayMsg'))
    }
    this.$loading();
    Promise.all([
      this.getPaytypes(),
      // this.getMerchantBank(),
      this.getAllBanklist(),
      this.getActivities(),
      this.getAllGames()
    ]).then(res => {
      this.loading = false;
      this.$toast.clear();
      this.paymentsShow = this.payment ? false : true;
    });
  },
  methods: {
    selectPay() {
      this.pay_first = false;
    },
    selectPAyBack() {
      this.pay_first = true;
    },
    showPayments() {
      this.paymentsShow = true;
    },
    selectPayment(payment) {
      this.form.bankName = "";
      if(!this.thirdPayMsg.money) {
        this.form.money = "";
      }
      this.amount_select = -1;
      if(payment.child && payment.child.length>0) {
        this.paymentsChild = payment.child
      } else {
        this.payment = payment;
        this.paymentsShow = false;
        this.payType = payment.id;
        this.payMethodId = payment.pay_method_id
        if (this.payType == 2 || this.payType == 1) {
          this.getBanklist();
        }
        this.getDepositInfo();
        this.getMerchantBank()
      }
    },
    initForm() {
      this.form = {
        money: "",
        bank: null,
        bankName: "",
        alipayName: null,
        activityId: null,
        pay_method_id: null
      };
      if (
        this.$route.query.busi_pay_type == 1 ||
        localStorage.getItem("thirdPayMsg")
      ) {
        this.thirdPayMsg = this.$route.query.busi_pay_type
          ? this.$route.query
          : JSON.parse(localStorage.getItem("thirdPayMsg"));
        this.form.money = this.thirdPayMsg.money * 1;
      } else {
        this.thirdPayMsg = {
          product_name: "",
          busi_pay_type: "",
          busi_trade_no: "",
          busi_notify_url: ""
        };
      }
      this.amount_select = -1;
    },
    // 获取银行图标
    getIcon(name) {
      let url = "";
      try {
        url = require(`@assets/img3_0/deposit/bank-icon/${name}@2x.png`);
        // url = "";
      } catch (error) {
        url = "";
      }
      return url;
    },
    paymentSwitch(idx) {
      const { payments } = this;
      const payment = payments[idx];
      let payType = {}
      if(!payment.child) {
        payType = (payment && payment.id) || 0;
        this.payMethodId = payment.pay_method_id
      } else {
        payType = (payment.child[0] && payment.child[0].id) || 0
        this.payMethodId = payment.child[0].pay_method_id
      }


      const toast = this.$toast.loading({
        className: "toast-loading",
        mask: true,
        duration: 0,
        forbidClick: true,
        loadingType: "spinner",
        message: "加载中..."
      });

      const data = {
        pay_type: payType
      };
      this.initForm();
      this.payType = payType;
      Promise.all([this.getDepositInfo(), this.getBanklist(), this.getMerchantBank()]).then(res => {
        toast.clear();
      });
    },
    // 获取支付渠道列表
    getPaytypes() {
      const self = this;
      paytype({busi_pay_type:this.thirdPayMsg ? this.thirdPayMsg.busi_pay_type : this.$route.query.busi_pay_type || ''}).then(res => {
        if (res.data.code === 0) {
          this.payments = res.data.data;
          this.payments.map((item, i) => {
            if (item.name == "客服支付") {
              this.haskefupay = true;
              this.payments.splice(i, 1);
            }
          });
          setTimeout(() => {
            self.paymentSwitch(0);
          }, 300);
        }
      });
    },
    // 获取渠道信息
    getDepositInfo() {
      const data = {
        // pay_type: this.payType,
        pay_method_id: this.payMethodId,
        // access_token: window.localStorage.token,
        // merchant_no: process.env.VUE_APP_MERCHANT_NO
      };
      depositinfo(data).then(res => {
        this.info = res.data.data;
        this.moneyList = this.info.quick_money_list;
      });
    },
    // 获取渠道银行
    getBanklist() {
      const data = {
        pay_type: this.payType,
        pay_method_id: this.payMethodId,
        access_token: window.localStorage.token,
        merchant_no: process.env.VUE_APP_MERCHANT_NO
      };
      banklist(data).then(res => {
        if (res.data.data && res.data.data.length > 0) {
          this.banks = res.data.data;
          let list = JSON.parse(JSON.stringify(res.data.data));
          let allList = JSON.parse(JSON.stringify(this.allBanksForPayOnline));
          this.banksForPayOnline = [];
          allList.forEach(item => {
            list.forEach(sub => {
              if (sub.id == item.id) {
                item.isDisabled = false;
              }
            });
            this.banksForPayOnline.push(item);
          });
          this.banksForPayOnline.forEach(item => {
            item.name = `<div style='position: relative;'>
              <div style="display: ${
                item.isDisabled ? "block" : "none"
              };height: 44px;
              position: absolute;
              width: 100%;
              padding: 0 16px;
              text-align: right;">
              <div style='position: absolute;
              right: 16px;
              bottom: 10px;
              color: #999;
              background: #eee;
              padding: 0 5px;
              height: 18px;
              line-height: 18px;'>维护中</div>
              </div>
              <img style="height: 26px;vertical-align: middle;margin-right:10px;" src="${this.bankCodeArr.indexOf(item.icon_code) == -1?require('@assets/img3_0/deposit/default@2x.png'):require(`@assets/img3_0/bank-svg/${item.icon_code}.svg`)}"><span>${item.name}</span></div>`;
          })
          this.banks.forEach(item => {
            item.nameCN = item.name
            item.name = `
              <img style="height: 26px;vertical-align: middle;margin-right:10px;" src="${this.bankCodeArr.indexOf(item.icon_code) == -1?require('@assets/img3_0/deposit/default@2x.png'):require(`@assets/img3_0/bank-svg/${item.icon_code}.svg`)}"><span>${item.name}</span></div>`
          })
        }
      });
    },
    // 获取所有银行列表
    getAllBanklist() {
      const data = {
        access_token: window.localStorage.token,
        merchant_no: process.env.VUE_APP_MERCHANT_NO
      };
      allbanklist(data).then(res => {
        if (res.data.data && res.data.data.length > 0) {
          this.allBanks = res.data.data;
          let list = JSON.parse(JSON.stringify(res.data.data));
          list.forEach(item => {
            item.isDisabled = true;
            item.nameCN = item.name;
          });
          this.allBanksForPayOnline = list;
        }
      });
    },
    getActivities() {
      const data = {
        access_token: window.localStorage.token,
        merchant_no: process.env.VUE_APP_MERCHANT_NO
      };
      preferentialactivity(data).then(res => {
        this.activities = [
          {
            id: "",
            name: "不参与优惠活动"
          }
        ];
        this.activities = this.activities.concat(res.data.data);
      });
    },
    getAllGames() {
      const data = {
        access_token: window.localStorage.token,
        merchant_no: process.env.VUE_APP_MERCHANT_NO
      };
      allgamecate(data).then(res => {
        this.allGameCate = res.data.data;
      });
    },
    getMerchantBank() {
      merchantbank({
        pay_method_id: this.payMethodId
      }).then(res => {
        this.bankList = res.data.data;
        console.log(this.bankList)
      });
    },
    // 快捷选择
    selectAmount(amount, index) {
      if(amount*1 < this.thirdPayMsg.money*1) {
        this.$toast.fail('请选择大于油条充值的金额')
        return
      }
      this.form.money = amount;
      this.amount_select = index;
    },
    getChipClassName(money) {
      if (money <= 500) {
        return "chip1";
      }
      if (money > 500 && money <= 2000) {
        return "chip2";
      }
      if (money > 2000 && money <= 4000) {
        return "chip3";
      }
      if (money > 4000 && money <= 6000) {
        return "chip4";
      }
      return "chip5";
    },
    isPayment(val) {
      if(val) {
        this[val] = false
      }
      checkorder({
        trade_no: this.order.trade_no
      }).then(res => {
        if (res.data.code === 0) {
          this.isExplain = false;
          if (this.allorderstatusList[res.data.data.pay_status] === "已支付") {
            this.paymentSuccess = true;
            localStorage.removeItem("isThirdPay");
            localStorage.removeItem("thirdPayMsg");
            this.$router.push("/deposit");
          } else {
            this.paymentFail = true;
          }
        } else {
          this.$toast(res.data.msg);
        }
      });
    },
    goPayment() {
      this.popUpExplain = false;
      this.isExplain = true;
      if (this.order.pay_url) {
        window.open(this.order.pay_url, "_blank");
      } else {
        document.getElementById("actformBtn").click();
      }
    },
    checkBankcard() {
      if (this.payType == 2) {
        this.bankShow = true;
      } else {
        this.bankShowForPayOnline = true;
      }
    },
    goback() {
      this.$router.push("/memberCenter");
    },
    submit() {
      const { form, payType, info, banks, payment, bankList, payMethodId } = this;
      if (!form.money) {
        this.$toast.fail("请填写存款金额");
        return false;
      }
      if (form.money > info.max_money || form.money < info.min_money) {
        this.$toast.fail(`最大存款${info.max_money},最小存款${info.min_money}`)
        return false;
      }
      if (!payment || !payment.id) {
        this.$toast.fail("请选择存款渠道");
        return false;
      }
      this.submiting = true;

      // if (info.is_need_bank_code) {
      //   banks.forEach(item => {
      //     if (form.bank == item.id) {
      //       form.pay_method_id = info.pay_method_id;
      //     }
      //   });
      // } else {
      //   form.pay_method_id = info.pay_method_id;
      // }

      const data = {
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        access_token: window.localStorage.token,
        pay_type: payType,
        domain: window.location.host,
        user_bank_id: form.bank,
        alipay_name: form.alipayName,
        money: parseFloat(form.money),
        activity_id: form.activityId,
        remark: bankList && bankList.rand_num || '',
        recive_bankaccount_id: bankList && bankList.id || '',
        pay_method_id: payMethodId,
        busi_pay_type: this.thirdPayMsg.busi_pay_type || "",
        busi_trade_no: this.thirdPayMsg.busi_trade_no || "",
        busi_notify_url: this.thirdPayMsg.busi_notify_url || ""
      };
      order(data)
        .then(res => {
          if (res.data.code === 0) {
            this.submiting = false;
            this.$nextTick(()=> {
              if(this.$refs['test'].$children[1]) {
                this.$refs['test'].$children[1].reset()
              }
              if(this.$refs['test1'].$children[1]) {
                this.$refs['test1'].$children[1].reset()
              }
            })
            if(res.data.data.is_tips) {
              this.$dialog
                .confirm({
                  title: "支付提醒",
                  message: "请问您当前存款遇到问题吗？客服小姐姐协助您解决哟！",
                  cancelButtonText: "继续支付",
                  confirmButtonText: "联系客服",
                  messageAlign:'left',
                })
                .then(() => {
                  // on confirm
                  this.$openKefu();
                })
                .catch(() => {
                  this.order = res.data.data
                  this.goPayment()
                })
              return false
            }
            if (payType === 2 || payType === 6) {
              this.submitInfo = true;
            } else {
              this.popUpExplain = true;
            }
            this.order = res.data.data;
            this.getDepositInfo();
            this.getMerchantBank();
          } else {
            this.$toast(res.data.msg);
          }
        })
        .catch(err => {
          this.submiting = false;
        })
    },
    onConfirmBank(val) {
      if (this.payType == 1) {
        if (val.isDisabled) {
          this.$toast.fail(`${val.nameCN}正在维护中...`);
          return;
        }
        this.form.bank = val.id;
        this.form.bankName = val.nameCN;
        this.bankShowForPayOnline = false;
      } else {
        // if (val.isDisabled) {
        //   this.$toast.fail(`${val.nameCN}正在维护中...`);
        //   return;
        // }
        this.form.bank = val.id;
        // this.form.bankName = val.name;
        this.form.bankName = val.nameCN;
        this.bankShow = false;
      }
    },
    onCancelBank() {
      this.bankShow = false;
    },
    onConfirm(val) {
      const { flow, id, name } = val;
      // const { money } = this.form
      this.flow = flow || 1;
      this.form.activityId = id;
      this.form.activityTitle = name;
      this.show = false;
    },
    onCancel() {
      this.show = false;
    },
    onCopy: function(e) {
      this.$toast("复制成功");
    },
    onError: function(e) {
      this.$toast("复制失败");
    },
    onClickLeft() {
      this.$router.push({
        name: "memberCenter"
      });
    },
    onClickRight() {
      this.$openKefu();
    },
    handleSuccess() {
      this.paymentSuccess = false
      window.localStorage.removeItem('thirdPayMsg')
    }
  }
};
</script>

<style scoped lang="less">
.deposit-page {

  background-color: #F5F6FA;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% auto;
  .m-header.van-nav-bar {
    position: relative;
    .van-nav-bar__left,
    .van-icon,
    .van-nav-bar__title,
    .van-nav-bar__text {
      color: #fff !important;
    }
  }
  .m-body{
    padding-top: 0;
    background: none;
  }

  .select-pay {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #333;
    padding: 0.3rem 0;
    margin: 0 @space-gap;

    > div {
      display: flex;
      align-items: center;

      img:nth-child(1) {
        width: 0.8rem;
        margin-right: 0.3rem;
      }

      div:nth-child(2) {
        color: #cccccc;
      }

      img:nth-child(2) {
        width: 0.6rem;
      }

      div:nth-child(1) {
        color: #666666;
        margin-right: 0.3rem;
      }
    }
  }

  .deposit-main {
    // overflow-y: auto;
    width: 100%;

    > li {
      margin-top: 0;
      padding: 0 @space-gap;
      &.tips {
        line-height: 1.5;
        margin: @space-gap 0;
        text-align: center;
        color: #666;
      }
      &.quick-select{
        .cell{
          input,.cell-foot{
            color: #fff;
          }
        }
      }
      &:nth-child(1) {
        width: 100%;
        height: 204px;
        padding: @space-gap;
        background: #fff;

        .input {
          background:none;

          input {
            background: none;
            color: #333;
            font-size: 48px;
          }

          ::-webkit-input-placeholder {
            color: rgba(153,153,153,1);
            font-size: 48px;
          }
        }
      }

      > label {
        color: #333333;
        font-size: 32px;
        line-height: 40px;
        font-weight: bold;
        display: block;
      }
    }

    .input {
      height: 128px;

      > input {
        color: #333333;
        width: 100%;
        height: 100%;
        border: none;
        font-size: @font-size-14;
      }
    }

    .quick-select {
      margin-top: -1rem;
      .label {
        position: absolute;
        color: #333333;
        height: 100%;
        width: 100%;
      }
      .board {
        position: relative;
        background: @bg-card-color;
        margin-top: 100px;
        border-radius: 8px;
        .yt-label{
          background:@primary-color;
          padding:0;
          margin:0 30px;
          line-height: 80px;
          border-radius: 10px;
          margin-top: 10px;
          p{
            padding-left: 20px;
            font-size: 30px;
          }
        }
        .chips {
          display: flex;
          align-items: center;
          // justify-content: space-between;
          flex-flow: wrap;
          flex-direction:row;
          padding: @space-gap @space-gap / 2 0;
          background:rgba(2,111,97,1);
          border-radius: 26px 26px 0 0;
          .chip {
            width: 20%;
            padding: @space-gap / 2;
            display: flex;
            align-items: center;
            justify-content: space-around;
            // filter: grayscale(.8);
            &.selected {
              background-repeat: no-repeat;
              background-size: cover;

              // filter: grayscale(0);
            }
            label {
              width: 106px;
              height: 106px;
              line-height: 100px;
              transition: all 0.45s ease-out;
              font-size: @font-size-14;
              text-align: center;
              color: white;
              font-weight: 600;
              background-repeat: no-repeat;
              background-size: cover;
              &.disabledLabel {
                // color: #c0c4cc;
                cursor: not-allowed;
                background-image: none;
                // background-color: #ffffff;
                border-color: #ebeef5;
              }
            }

            &.chip1 {
              label {

              }
            }
            &.chip2 {
              label {
                /*background-image: url("~@assets/img3_0/chouma/chouma2.png");*/
              }
            }
            &.chip3 {
              label {
                /*background-image: url("~@assets/img3_0/chouma/chouma3.png");*/
              }
            }
            &.chip4 {
              label {
                /*background-image: url("~@assets/img3_0/chouma/chouma4.png");*/
              }
            }
            &.chip5 {
              label {
                /*background-image: url("~@assets/img3_0/chouma/chouma5.png");*/
              }
            }
          }
        }
        .list-cells {
          background: #026F61;
          padding: 0;
          border-radius: 0 0 26px 26px;
          .cell {
            padding: 0 0.4rem;
            border-bottom: none;
            color: #fff;
            .cell-body {
              color: #fff;
              li {
                span {
                  color: #fff;
                }
                a {
                  background: #fff;
                  color: #333;
                  width: 80px;
                  height: 40px;
                }
              }
              input::-webkit-input-placeholder {
                color: #FFFFFF;
                font-size: 28px;
              }
            }
            .cell-foot {
              color: #fff;
            }
            &:nth-child(2) {
              background:rgba(0,140,115,1);
            }
          }
        }
      }
    }
  }

  .pay-nav {
    display: flex;
    align-items: center;
    height: 2rem;
    margin: 0 0.3rem;
    border-top: 0.005rem solid #646464;

    img:nth-child(1) {
      width: 1rem;
    }

    img:nth-child(3) {
      width: 0.6rem;
    }

    .pay-info {
      padding: 0 0.5rem;
      width: 80%;

      div:nth-child(1) {
        font-size: 0.5rem;
        color: white;
        margin-bottom: 0.1rem;
      }

      div:nth-child(2) {
        font-size: 0.4rem;
        color: #999999;
      }
    }
  }
  // .aagames-button-box{
  //   .aagames-button{
  //     &.line{
  //       background:@bg-card-color;
  //     }
  //   }
  // }
}
.pop-body.iconImage{
  text-align: center;
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
  .btn{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .aagames-button-box{
      width: 270px;
      &:first-child{
        button{
          background: none;
          border: 2px solid @bg-gradient-color;
          color: @bg-gradient-color;
        }
      }
    }
  }

  .van-popup.custom.pay-res{
    overflow: visible;
    width: 630px;
    /deep/ .van-popup__close-icon{
      top: -70px!important;
      font-size: 24px!important;
      border: 2px solid #fff;
      border-radius: 50%;
      padding: 10px;
      color: #fff!important;
      right: 0;
    }
    .ui-buttons.aagames-button-box{
      align-items: center;
      justify-content: space-between;
      padding: 0;
      button{
        position: initial!important;
        width: 49%!important;
        margin: 0!important;
        padding: 0;
        &.aagames-button-default{
          border: 2px solid @bg-gradient-color;
          color: @bg-gradient-color;
          background-color: transparent!important;
        }
      }
    }
    .pop-body.payStatus{
      .aagames-button-box.fail-button,.success-button{
        margin-top: 40px;
        justify-content: space-between;
        button{
          position: initial!important;
          width: 49%!important;
          padding: 0;
          &.van-button--primary{
            background-color: @bg-gradient-color!important;
            color: #fff!important;
          }
        }
      }
      .success-button{
        width: 100%;
        button{
          width: 100%!important;
        }
      }
    }

  }
  .payStatus-icon{
    width: 120px;
    height: 120px;
  }
</style>
