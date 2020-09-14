<template>
  <div class="businessRecord">
    <div class="record-title">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <!-- <img src="~@assets/img3_0/otherIcon/fanhui@2x.png" @click="$router.go(-1)" /> -->
      <span>交易记录</span>
      <span class="query" @click="selectMethod()">筛选</span>
    </div>
    <div class="container">
      <van-tabs
        line-width="40px"
        line-height="2px"
        class="vanTabs"
        :animated="true"
        v-model="active"
      >
        <!-- 存款记录 -->
        <van-tab title="存款" class="access">
          <div class="main">
            <div class="list">
              <div class="tab_top">
                <div>
                  <p>{{depositStatus && depositStatus[1] || '0.00'}}</p>
                  <p>待支付</p>
                </div>
                <div>
                  <p>{{depositStatus && depositStatus[2] || '0.00'}}</p>
                  <p>支付成功</p>
                </div>
                <div>
                  <p>{{depositStatus && depositStatus[4] || '0.00'}}</p>
                  <p>支付失败</p>
                </div>
              </div>
              <ul v-show="depositList.length !== 0">
                <van-list
                  v-model="oloading"
                  :finished="ofinished"
                  finished-text="已加载全部"
                  @load="onOLoad"
                >
                  <li v-for="(item,index) in depositList" :key="index">
                    <!--<img-->
                      <!--:src="-->
                      <!--item.pay_type == 0 ? img0 :-->
                      <!--item.pay_type == 1 ? img1 :-->
                      <!--item.pay_type == 2 ? img2 :-->
                      <!--item.pay_type == 3 ? img3 :-->
                      <!--item.pay_type == 4 ? img4 :-->
                      <!--item.pay_type == 5 ? img5 :-->
                      <!--item.pay_type == 6 ? img5 :-->
                      <!--item.pay_type == 7 ? img7 :-->
                      <!--item.pay_type == 8 ? img8:-->
                      <!--item.pay_type == 9 ? img9:-->
                      <!--item.pay_type == 10 ? img10: ''-->
                    <!--"-->
                      <!--alt-->
                    <!--/>-->
                    <img v-if="item.pay_type == 0" :src="$imgs['memberCenter/img0']" alt="">
                    <img v-if="item.pay_type == 1" :src="$imgs['memberCenter/img1']" alt="">
                    <img v-if="item.pay_type == 2" :src="$imgs['memberCenter/img2']" alt="">
                    <img v-if="item.pay_type == 3" :src="$imgs['memberCenter/img3']" alt="">
                    <img v-if="item.pay_type == 4" :src="$imgs['memberCenter/img4']" alt="">
                    <img v-if="item.pay_type == 5" :src="$imgs['memberCenter/img5']" alt="">
                    <img v-if="item.pay_type == 6" :src="$imgs['memberCenter/img6']" alt="">
                    <img v-if="item.pay_type == 7" :src="$imgs['memberCenter/img7']" alt="">
                    <img v-if="item.pay_type == 8" :src="$imgs['memberCenter/img8']" alt="">
                    <img v-if="item.pay_type == 9" :src="$imgs['memberCenter/img9']" alt="">
                    <img v-if="item.pay_type == 10" :src="$imgs['memberCenter/img10']" alt="">
                    <div class="list_content">
                      <div class="header">
                        <span
                          v-if="item.pay_type !== 0"
                        >{{ item.pay_type | statusFilter(getPaytype) }}</span>
                        <span v-else>{{item.type == 1?'银行卡转账':item.type == 2?'线上支付':'补单'}}</span>
                        <span>+{{ item.money }}</span>
                      </div>
                      <div class="status">
                        <span>{{ item.created_at | filterLevel }} | {{ item.trade_no }}</span>
                        <span
                          :class="[{'green':item.status == 2},{'yellow':item.status == 3 || item.status == 5}, { 'red':item.status == 1 || item.status == 4}]"
                        >{{item.status | statusF(getAllorderstatus)}}</span>
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
            <div class="list_empty" v-show="depositList.length === 0">
              <div class="emptyDiv">
                <!-- <div class="emptyRecord"></div> -->
                <div class="text">
                  <img :src="$imgs['memberCenter/ckjl']" class="none-img" />
                  <div class="chinese">非常抱歉未查询到任何存款记录</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <!-- 取款记录 -->
        <van-tab title="取款" class="access">
          <div class="main">
            <div class="list">
              <div class="tab_top">
                <div>
                  <p>{{withdrawStats && withdrawStats[4] || '0.00'}}</p>
                  <p>取款成功(元)</p>
                </div>
                <div>
                  <p>{{withdrawStats && withdrawStats[1] || '0.00'}}</p>
                  <p>待审核(元)</p>
                </div>
                <div>
                  <p>{{withdrawStats && withdrawStats[3] || '0.00'}}</p>
                  <p>取款失败(元)</p>
                </div>
              </div>
              <ul v-show="withdrawList.length !== 0">
                <van-list
                  v-model="wloading"
                  :finished="wfinished"
                  finished-text="已加载全部"
                  @load="onWLoad"
                >
                  <li v-for="(item,index) in withdrawList" :key="index">
                    <div class="turn">取</div>
                    <div class="list_content">
                      <div class="header">
                        <span>{{ item.bank_card_no | intercept }}</span>
                        <span>-{{ item.money }}</span>
                      </div>
                      <div class="status">
                        <span>{{ item.created_at | filterLevel }} | {{ item.trade_no }}</span>
                        <span
                          :class="[{'yellow':item.status !== 3}, { 'red':item.status == 3}]"
                        >{{item.status | statusF(getAllwithdrawstatus)}}</span>
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
            <div class="list_empty" v-show="withdrawList.length === 0">
              <div class="emptyDiv">
                <!-- <div class="emptyRecord"></div> -->
                <div class="text">
                  <img :src="$imgs['memberCenter/qkjv']" class="none-img" />
                  <div class="chinese">非常抱歉未查询到任何提款记录</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <!-- 额度转账记录 -->
        <van-tab title="转账" class="access">
          <div class="main">
            <div class="list">
              <ul v-show="translogList.length !== 0">
                <van-list
                  v-model="tloading"
                  :finished="tfinished"
                  finished-text="已加载全部了"
                  @load="onTLoad"
                >
                  <li v-for="(item,index) in translogList" :key="index" class="turn_list">
                    <div class="turn">转</div>
                    <div class="list_content">
                      <div class="header trans-header">
                        <span>
                          <!-- {{ allplatformList[item.from_platform_id] }}
                          转
                          {{ allplatformList[item.to_platform_id] }} -->
                          {{ getplateform(item,1) }}
                          -
                          {{ getplateform(item,2) }}
                        </span>
                        <span>+{{ item.money }}</span>
                      </div>
                      <div class="status trans-status">
                        <span class="note">{{ item.trade_no }}</span>

                        <span class="time">{{ item.updated_at }}</span>
                      </div>
                    </div>
                  </li>
                </van-list>
              </ul>
            </div>
            <div class="list_empty" v-show="translogList.length === 0">
              <div class="emptyDiv">
                <!-- <div class="emptyRecord"></div> -->
                <div class="text">
                  <img :src="$imgs['memberCenter/zzjv']" class="none-img" />
                  <div class="chinese">非常抱歉未查询到任何转账记录</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <!-- 优惠红利记录 -->
        <van-tab title="红利" class="access">
          <div class="main">
            <div class="list">
              <div class="tab_top">
                <p class="note">已领取红利:{{benefitStats && (benefitStats[4]*1).toFixed(2) || '0.00'}}</p>
              </div>
              <ul v-show="benefitlistList.length !== 0">
                <van-list
                  v-model="rloading"
                  :finished="rfinished"
                  finished-text="已加载全部了"
                  @load="onRLoad"
                >
                  <li v-for="(item,index) in benefitlistList" :key="index">
                    <div class="turn">惠</div>
                    <div class="list_content">
                      <div class="header">
                        <span>{{ item.username }}</span>
                        <span>+{{ item.money }}</span>
                      </div>
                      <div class="status">
                        <span>{{ item.created_at }}</span>
                        <span>{{ item.flow }}倍流水要求</span>
                      </div>
                      <div class="remark">
                        <!-- <span class="note">{{ allplatformList[item.to_platform_id] }}平台</span> -->
                        <span class="note">{{ item.name }}</span>
                      </div>
                    </div>
                  </li>
                </van-list>
              </ul>
            </div>
            <div class="list_empty" v-show="benefitlistList.length === 0">
              <div class="emptyDiv">
                <!-- <div class="emptyRecord"></div> -->
                <div class="text">
                  <img :src="$imgs['memberCenter/jiaoyi']" class="none-img" />
                  <div class="chinese">非常抱歉未查询到任何红利记录</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <!-- 投注记录 -->
        <van-tab title="投注" class="access">
          <div class="main">
            <div class="list">
              <div class="tab_top">
                <div>
                  <p>{{betlogStats && (betlogStats.bet*1).toFixed(2) || '0.00'}}</p>
                  <p>投注金额(元)</p>
                </div>
                <div>
                  <p>{{betlogStats && (betlogStats.valid_bet*1).toFixed(2) || '0.00'}}</p>
                  <p>有效流水(元)</p>
                </div>
                <div>
                  <p>{{betlogStats && (betlogStats.win*1).toFixed(2) || '0.00'}}</p>
                  <p>游戏总盈亏(元)</p>
                </div>
              </div>
              <ul v-show="betlogList.length !== 0">
                <van-list
                  v-model="cloading"
                  :finished="cfinished"
                  finished-text="已加载全部了"
                  @load="onCLoad"
                >
                  <!-- <li v-for="(item,index) in betlogList" :key="index">
                    <span>{{ allplatformList[item.game_platform_id] }}平台</span>
                    <span>{{ item.time }}</span>
                    <span>{{ item.bet }}</span>
                    <span>{{ item.valid_wager }}</span>
                    <span>{{ item.win }}</span>
                  </li>-->
                  <li v-for="(item,index) in betlogList" :key="index" class="turn_list">
                    <div class="turn">{{item.win*1>0?'赢':item.win*1 == 0?'和':'输'}}</div>
                    <div class="list_content">
                      <div class="header trans-header">
                        <!-- <span>{{allgamecateList[item.game_cate_id]}}-{{ allplatformList[item.game_platform_id] }}</span> -->
                        <span>{{item.game_cate_name}}-{{ item.game_platform_name }}</span>
                        <span>{{item.win}}</span>
                      </div>
                      <div class="status trans-status">
                        <span class="note">{{ item.created_at }}</span>

                        <span class="time">有效投注{{ item.valid_wager }}</span>
                      </div>
                    </div>
                  </li>
                </van-list>
              </ul>
            </div>
            <div class="list_empty" v-show="betlogList.length === 0">
              <div class="emptyDiv">
                <!-- <div class="emptyRecord"></div> -->
                <div class="text">
                  <img :src="$imgs['memberCenter/tzjl']" class="none-img" />
                  <div class="chinese">非常抱歉未查询到任何投注记录</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <!-- 账变 -->
        <van-tab title="账变" class="access">
          <div class="main">
            <div class="list">
              <div class="tab_top">
                <div>
                  <p>{{walletStats.profit_money == 0?'0.00':walletStats.profit_money}}</p>
                  <p>总盈亏</p>
                </div>
                <div>
                  <p>{{walletStats.recharge_money ==0?'0.00':walletStats.recharge_money}}</p>
                  <p>总存款</p>
                </div>
                <div>
                  <p>{{walletStats.withdraw_money == 0?'0.00':walletStats.withdraw_money}}</p>
                  <p>总取款</p>
                </div>
              </div>
              <ul v-show="walletrecordlist.length !== 0">
                <van-list
                  v-model="dloading"
                  :finished="dfinished"
                  finished-text="已加载全部"
                  @load="onDLoad"
                >
                  <li v-for="(item,index) in walletrecordlist" :key="index">
                    <div class="list_content width100">
                      <div class="header wallet-header">
                        <div>
                          <!-- <span>{{ item.second_type_name }}</span> -->
                          <span
                            v-show="item.type"
                          >{{ getAllwalletType.filter(list => item.type == list.id)[0].text }}</span>
                          <span class="money">{{ item.money }}</span>
                        </div>
                        <span>{{ item.before_money }}</span>
                      </div>
                      <div class="status">
                        <span>{{ item.created_at}}</span>
                        <span>{{ item.after_money }}</span>
                      </div>
                      <!-- <div class="remark">
                        <span class="note" v-show="item.remark">备注：{{ item.remark }}</span>
                        <span class="time">{{item.updated_at | filterTime}}</span>
                      </div>-->
                    </div>
                  </li>
                </van-list>
              </ul>
            </div>
            <div class="list_empty" v-show="walletrecordlist.length === 0">
              <div class="emptyDiv">
                <!-- <div class="emptyRecord"></div> -->
                <div class="text">
                  <img :src="$imgs['memberCenter/qkjv']" class="none-img" />
                  <div class="chinese">非常抱歉未查询到任何账变记录</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-popup v-model="selectDisplay" :inner="true" :width="drawerWidth" :mask="false" close-icon-position="top-right" get-container="#app" class="close-top">
      <van-icon name="cross" class="van-popup__close-icon" @click="selectDisplay = false" />
      <div class="select-title">
        <span>记录筛选</span>
      </div>
      <div class="list">
        <div class="select-bar">选择时间</div>
        <div class="select">
          <van-row>
            <van-col class="data-time-picker">
              <div
                class="starttime"
                @click="showStartDate = true"
              >{{ queryData.start_time || '开始时间'}}</div>-
              <div class="endtime" @click="showEndDate = true">{{ queryData.end_time || '最后时间'}}</div>
            </van-col>
          </van-row>
        </div>
        <div class="select-bar-i">
          <div
            :class="{active_selected:queryData.active_select==index}"
            :key="index"
            v-for="(item,index) in dateOption"
            @click="dateMethod(index)"
          >{{item.name}}</div>
          <div style="visibility: hidden;height: 0;"></div>
          <div style="visibility: hidden;height: 0;"></div>
          <div style="visibility: hidden;height: 0;"></div>
        </div>
        <div class="select-bar" v-if="(active==0||active==1|| active==4 ||active==5)">选择状态</div>
        <div class="select-bar-i" v-if="(active==0||active==1|| active==4 ||active==5)">
          <div
            :class="{active_selected:((active == 0 || active == 1) && queryData.status == index) || (active == 5 && queryData.type == index) || (active == 4 && queryData.active_type_select == index)}"
            :key="index"
            v-for="(item,index) in columns"
            @click="typeMethod(index,item)"
          >{{item.text}}</div>
        </div>
      </div>

      <div class="select-button" @click="determine()">确定</div>
    </van-popup>
    <!-- 状态 -->
    <van-popup v-model="show" position="bottom">
      <van-picker
        show-toolbar
        @confirm="onConfirm"
        value-key="text"
        @cancel="onCancel"
        :columns="columns"
      />
    </van-popup>

    <!-- 开始时间 -->
    <van-popup v-model="showStartDate" position="bottom">
      <van-datetime-picker v-model="start_time" @confirm="onConfirmStartDate" @cancel="onCancelStartDate" type="date" />
    </van-popup>

    <!-- 结束时间 -->
    <van-popup v-model="showEndDate" position="bottom">
      <van-datetime-picker v-model="end_time" @confirm="onConfirmEndDate" @cancel="onCancelEndDate" type="date" />
    </van-popup>
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
  walletrecordtype,
  walletrecordinfo
} from "@/api/memberCenter";
import { allgamecate } from "@/api/entertainment";
import { formateDate } from "@/utils/index";
// import Vue from "vue";
// import { Toast } from "vant";


import { mapState } from "vuex";
// Vue.use(Toast);

export default {
  name: "Record",
  data() {
    return {
      active_type_select: "",
      active_select: "",
      dateOption: [
        {
          name: "一天"
        },
        {
          name: "三天"
        },
        {
          name: "十五天"
        },
        {
          name: "三十天"
        }
      ],

      selectDisplay: false,
      drawerWidth: "100%",
      oloading: false,
      wloading: false,
      tloading: false,
      rloading: false,
      cloading: false,
      dloading: false,
      ofinished: false,
      wfinished: false,
      tfinished: false,
      rfinished: false,
      cfinished: false,
      dfinished: false,
      DisLoading: false,
      TisLoading: false,
      WisLoading: false,
      RisLoading: false,
      CisLoading: false,
      title: "交易记录",
      show: false,
      showStartDate: false,
      showEndDate: false,
      columns: [],
      active: 0,
      deposit: "全部状态",
      depositData: {
        status: "",
        start_time: "",
        end_time: "",
        page: 0,
        active_select: null
      },
      depositStatus: null,
      depositList: [],
      withdraw: "全部状态",
      withdrawData: {
        status: "",
        start_time: "",
        end_time: "",
        start_text: "年/月/日",
        end_text: "年/月/日",
        page: 1,
        active_select: null
      },
      withdrawStats: null,
      walletStats: {
        profit_money: "",
        withdraw_money: "",
        recharge_money: ""
      },
      withdrawList: [],
      withdrawstatus: {},
      translogData: {
        start_time: "",
        end_time: "",
        start_text: "年/月/日",
        end_text: "年/月/日",
        page: 1,
        active_select: null
      },
      translogStats: null,
      translogList: [],
      betlogData: {
        start_time: "",
        end_time: "",
        start_text: "年/月/日",
        end_text: "年/月/日",
        game_cate_id: "",
        active_type_select: "",
        page: 1,
        active_select: null
      },
      betlogStats: null,
      betlogList: [],
      benefitlistData: {
        start_time: "",
        end_time: "",
        start_text: "年/月/日",
        end_text: "年/月/日",
        page: 1,
        access_token: "",
        active_select: null
      },
      walletrecordlistData: {
        start_time: "",
        end_time: "",
        start_text: "年/月/日",
        end_text: "年/月/日",
        type: "",
        page: 1,
        access_token: "",
        active_select: null
      },
      queryData: {
        start_time: "",
        end_time: "",
        start_text: "年/月/日",
        end_text: "年/月/日",
        type: "",
        status: "",
        game_cate_id: "",
        active_type_select: "",
        page: 1,
        active_select: null
      },
      walletrecordlist: [],
      benefitStats: null,
      walletrecordStats: null,
      benefitlistList: [],
      allplatformList: {},
      allgamecateList:{},
      currentDate: new Date(),
      getPaytype: [],
      getAllorderstatus: [],
      orderstatus: {},
      getAllwithdrawstatus: [],
      getAllbetlogstatus: [],
      moneyList: [],
      walletType: [],
      getAllwalletType: [],
      start_time:new Date(),
      end_time:new Date(),
      aoMenUi:['10009','10010','10011','10012','10021','10034']
    };
  },
  components: {
    popup
  },
  computed: {
    ...mapState("games", ["gameCatesPlatforms"])
  },
  created() {
    if (this.$route.query.type) {
      this.active = this.$route.query.type;
    }
    // var today = new Date();
    // var start = new Date(today.getTime() - 1 * 24 * 3600 * 1000);
    // this.depositData.start_time = formateDate(start);
    // this.depositData.end_time = formateDate(today);

    // this.withdrawData.start_time = formateDate(start);
    // this.withdrawData.end_time = formateDate(today);

    // this.translogData.start_time = formateDate(start);
    // this.translogData.end_time = formateDate(today);

    // this.betlogData.start_time = formateDate(start);
    // this.betlogData.end_time = formateDate(today);

    // this.benefitlistData.start_time = formateDate(start);
    // this.benefitlistData.end_time = formateDate(today);

    // this.walletrecordlistData.start_time = formateDate(start)
    // this.walletrecordlistData.end_time = formateDate(today)
    allgamecate().then(res => {
      this.allgamecateList = res.data.data
    })
    let key = [
      {
        game_cate_id: "",
        text: "全部状态"
      }
    ];
    this.gameCatesPlatforms.map(item => {
      key.push({
        game_cate_id: item.game_cate_id,
        text: item.game_cate_name
      });
    });
    this.getAllbetlogstatus = key;

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
      if (res.data.code == 0) {
        this.walletType = res.data.data;
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
        this.getAllwalletType = key;
      }
    });
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
    });
    const data = {
      access_token: window.localStorage.token,
      merchant_no: process.env.VUE_APP_MERCHANT_NO
    };
    // 获取所有游戏平台
    allplatform(data).then(res => {
      if (res.data.code === 0) {
        this.allplatformList = res.data.data;
        this.allplatformList[0] = "主账户";
      }
    });
    this.getOrderlist();
    this.getWithdrawlist();
    this.getBenefitlist();
    this.getTranslog();
    this.getBetlog();
    this.getWalletrecordlist();
  },
  methods: {
    formateDate(val) {
      var today = new Date();
      var start = new Date(today.getTime() - 1 * 24 * 3600 * 1000);
      if (val == "start") {
        return formateDate(start);
      } else {
        return formateDate(today);
      }
    },
    dateMethod(index) {
      this.queryData.active_select = index;
      if (index == 0) {
        var today = new Date();
        var start = new Date(today.getTime() - 24 * 3600 * 1000);
        this.handleDate(start, today,index);
      } else if (index == 1) {
        var today = new Date();
        var start = new Date(today.getTime() - 3 * 24 * 3600 * 1000);
        this.handleDate(start, today,index);
      } else if (index == 2) {
        var today = new Date();
        var start = new Date(today.getTime() - 15 * 24 * 3600 * 1000);
        this.handleDate(start, today,index);
      } else if (index == 3) {
        var today = new Date();
        var start = new Date(today.getTime() - 30 * 24 * 3600 * 1000);
        this.handleDate(start, today,index);
      }
    },
    handleDate(start, today,index) {
      if (this.active == 0) {
        this.depositData.start_time = formateDate(start);
        this.depositData.end_time = formateDate(today);
        this.depositData.active_select = index
      } else if (this.active == 1) {
        this.withdrawData.start_time = formateDate(start);
        this.withdrawData.end_time = formateDate(today);
        this.withdrawData.active_select = index
      } else if (this.active == 2) {
        this.translogData.start_time = formateDate(start);
        this.translogData.end_time = formateDate(today);
        this.translogData.active_select = index
      } else if (this.active == 3) {
        this.betlogData.start_time = formateDate(start);
        this.betlogData.end_time = formateDate(today);
        this.betlogData.active_select = index
      } else if (this.active == 4) {
        this.benefitlistData.start_time = formateDate(start);
        this.benefitlistData.end_time = formateDate(today);
        this.benefitlistData.active_select = index
      } else if (this.active == 5) {
        this.walletrecordlistData.start_time = formateDate(start);
        this.walletrecordlistData.end_time = formateDate(today);
        this.walletrecordlistData.active_select = index
      }
      this.queryData.start_time = formateDate(start);
      this.queryData.end_time = formateDate(today);
      this.start_time = start
      this.end_time = today
    },
    typeMethod(index, value) {
      this.active_type_select = index;
      if (this.active === 0) {
        // this.deposit = value.text;
        this.depositData.status = value.id;
        this.queryData.status = value.id;
      } else if (this.active === 1) {
        // this.withdraw = value.text;
        this.withdrawData.status = value.id;
        this.queryData.status = value.id;
      } else if (this.active === 4) {
        // this.withdraw = value.text;
        // console.log(this.betIndex,value.game_cate_id,value)
        // this.betIndex = value.game_cate_id
        this.betlogData.active_type_select = index;
        this.queryData.active_type_select = index;
        this.betlogData.game_cate_id = value.game_cate_id;
        this.queryData.game_cate_id = value.game_cate_id;
      } else if (this.active === 5) {
        // this.withdraw = value.text;
        this.walletrecordlistData.type = value.id;
        this.queryData.type = value.id;
      }
    },
    selectMethod() {
      this.selectDisplay = true;
      this.start_time = new Date()
      this.end_time = new Date()
      // this.queryData.start_time = formateDate(new Date())
      // this.queryData.end_time = formateDate(new Date())
      console.log(this.active_type_select);
    },
    onRefreshD() {
      this.depositData.page = 1;
      this.getOrderlist();
    },
    onRefreshW() {
      this.withdrawData.page = 1;
      this.getWithdrawlist();
    },
    onRefreshT() {
      this.translogData.page = 1;
      this.getTranslog();
    },
    onRefreshR() {
      this.benefitlistData.page = 1;
      this.getBenefitlist();
    },
    onTLoad() {
      this.translogData.page++;
      this.getTranslog(true);
    },
    onWLoad() {
      this.withdrawData.page++;
      this.getWithdrawlist(true);
    },
    onOLoad() {
      this.depositData.page++;
      this.getOrderlist(true);
    },
    onRLoad() {
      this.benefitlistData.page++;
      this.getBenefitlist(true);
    },
    onCLoad() {
      this.betlogData.page++;
      this.getBetlog(true);
    },
    onDLoad() {
      this.walletrecordlistData.page++;
      this.getWalletrecordlist(true);
    },
    countStats(oldStat, stat) {
      for (const key in stat) {
        if (stat.hasOwnProperty(key)) {
          const value = stat[key];
          if (value == 0) value = "0.00";
          if (oldStat.hasOwnProperty(key)) {
            oldStat[key] += value;
          } else {
            oldStat[key] = value;
          }
        }
      }
    },
    getOrderlist(isLoad) {
      orderlist(this.depositData).then(res => {
        if (res.data.code == 0) {
          // 加载状态结束
          this.oloading = false;
          if (isLoad) {
            this.depositList = this.depositList.concat(res.data.data.data);

            // this.depositStatus = this.countStats(
            //   this.depositStatus,
            //   res.data.data.stat
            // );
          } else {
            this.depositList = res.data.data.data;
            this.depositStatus = res.data.data.stat;
          }
          if (this.depositData.page >= res.data.data.last_page) {
            this.ofinished = true;
          }
        }
      });
    },
    getWithdrawlist(isLoad) {
      withdrawlist(this.withdrawData).then(res => {
        if (res.data.code === 0) {
          // 加载状态结束
          this.wloading = false;
          if (isLoad) {
            this.withdrawList = this.withdrawList.concat(res.data.data.data);
            // this.withdrawStats = this.countStats(
            //   this.withdrawStats,
            //   res.data.data.stat
            // );
          } else {
            this.withdrawList = res.data.data.data;
            this.withdrawStats = res.data.data.stat;
          }
          if (this.withdrawData.page >= res.data.data.last_page) {
            this.wfinished = true;
          }
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    getTranslog(isLoad) {
      translog(this.translogData).then(res => {
        console.log(this.translogData, res.data.data);

        if (res.data.code === 0) {
          // 加载状态结束
          this.tloading = false;
          if (isLoad) {
            this.translogList = this.translogList.concat(res.data.data.data);
            // this.translogStats = this.countStats(
            //   this.translogStats,
            //   res.data.data.stat
            // );
          } else {
            this.translogList = res.data.data.data;
            this.translogStats = res.data.data.stat;
          }
          if (this.translogData.page >= res.data.data.last_page) {
            this.tfinished = true;
          }
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    getBetlog(isLoad) {
      betlog(this.betlogData).then(res => {
        if (res.data.code === 0) {
          // 加载状态结束
          this.cloading = false;
          if (isLoad) {
            this.betlogList = this.betlogList.concat(res.data.data.data);
            // this.betlogStats = this.countStats(
            //   this.betlogStats,
            //   res.data.data.stat
            // );
          } else {
            this.betlogList = res.data.data.data;
            this.betlogStats = res.data.data.stat;
          }
          if (this.betlogData.page >= res.data.data.last_page) {
            this.cfinished = true;
          }
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    getBenefitlist(isLoad) {
      this.benefitlistData.access_token = window.localStorage.token;
      benefitlist(this.benefitlistData).then(res => {
        if (res.data.code === 0) {
          // 加载状态结束
          this.rloading = false;
          if (isLoad) {
            this.benefitlistList = this.benefitlistList.concat(
              res.data.data.data
            );
            // this.benefitStats = this.countStats(
            //   this.benefitStats,
            //   res.data.data.stat
            // );
          } else {
            this.benefitlistList = res.data.data.data;
            this.benefitStats = res.data.data.stat;
          }
          if (this.benefitlistData.page >= res.data.data.last_page) {
            this.rfinished = true;
          }
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    getWalletrecordlist(isLoad) {
      this.walletrecordlistData.access_token = window.localStorage.token;
      walletrecord(this.walletrecordlistData).then(res => {
        if (res.data.code === 0) {
          // 加载状态结束
          this.dloading = false;
          if (isLoad) {
            this.walletrecordlist = this.walletrecordlist.concat(
              res.data.data.data
            );
            // this.walletrecordStats = this.countStats(
            //   this.walletrecordStats,
            //   res.data.data.stat
            // );
          } else {
            this.walletrecordlist = res.data.data.data;
            this.walletrecordStats = res.data.data.stat;
          }
          if (this.walletrecordlistData.page >= res.data.data.last_page) {
            this.dfinished = true;
          }
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
      walletrecordinfo(this.walletrecordlistData).then(res => {
        // console.log(res)
        this.walletStats = res.data.data;
      });
    },
    onConfirm(value) {
      if (this.active === 0) {
        this.deposit = value.text;
        this.depositData.status = value.id;
      } else if (this.active === 1) {
        this.withdraw = value.text;
        this.withdrawData.status = value.id;
      }
    },
    determine() {
      console.log(this.queryData, this.active);
      if (this.active === 0) {
        this.depositData = Object.assign({}, this.queryData);
        this.getOrderlist();
      } else if (this.active === 1) {
        this.withdrawData = Object.assign({}, this.queryData);
        this.getWithdrawlist();
      } else if (this.active === 2) {
        this.translogData = Object.assign({}, this.queryData);
        this.getTranslog();
      } else if (this.active == 3) {
        this.benefitlistData = Object.assign({}, this.queryData);
        this.getBenefitlist();
      } else if (this.active == 4) {
        this.betlogData = Object.assign({}, this.queryData);
        this.getBetlog();
      } else {
        this.walletrecordlistData = Object.assign({}, this.queryData);
        this.getWalletrecordlist();
      }
      this.selectDisplay = false;
    },
    onCancel(value) {
      this.show = false;
    },
    onCancelStartDate(value) {
      this.showStartDate = false;
    },
    onConfirmStartDate(value) {
      this.start_time = value
      this.queryData.start_time = formateDate(value)
      let date = value;
      const seperator1 = "-";
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (this.active === 0) {
        this.depositData.start_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
      } else if (this.active === 1) {
        this.withdrawData.start_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        // this.depositData.start_time = this.withdrawData.start_time;
      } else if (this.active === 2) {
        this.translogData.start_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        // this.depositData.start_time = this.translogData.start_time;
      } else if (this.active == 3) {
        this.benefitlistData.start_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        // this.depositData.start_time = this.benefitlistData.start_time;
      } else if (this.active == 4) {
        this.betlogData.start_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        // this.depositData.start_time = this.betlogData.start_time;
      } else {
        this.walletrecordlistData.start_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        // this.depositData.start_time = this.walletrecordlistData.start_time;
      }
      this.showStartDate = false;
    },
    onConfirmEndDate(value) {
      this.end_time = value
      this.queryData.end_time = formateDate(value)
      let date = value;
      const seperator1 = "-";
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (this.active === 0) {
        this.depositData.end_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
      } else if (this.active === 1) {
        this.withdrawData.end_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        this.withdrawData.end_text = this.withdrawData.end_time;
      } else if (this.active === 2) {
        this.translogData.end_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        this.translogData.end_text = this.translogData.end_time;
      } else if (this.active == 3) {
        this.benefitlistData.end_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        this.benefitlistData.end_text = this.benefitlistData.end_time;
      } else if (this.active == 4) {
        this.betlogData.end_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        this.depositData.end_time = this.betlogData.end_time;
      } else {
        this.walletrecordlistData.end_time =
          date.getFullYear() + seperator1 + month + seperator1 + strDate;
        this.depositData.end_time = this.walletrecordlistData.end_time;
      }
      this.showEndDate = false;
    },
    onCancelEndDate(value) {
      this.showEndDate = false;
    },
    getplateform(item,type) {
      if(item.type === 1) {
        if(type === 1) {
          return this.allplatformList[item.from_platform_id]
        } else {
          return this.allplatformList[item.to_platform_id]
        }
      } else {
        if(type === 1) {
          if(item.from_platform_id === 0) {
            return '主账户'
          } else {
            if(item.type === 2) {
              return '理财钱包'
            } else if( item.type === 3) {
              return '对冲'
            } else if( item.type === 4) {
              return '借贷宝'
            }
          }
        } else {
          if(item.to_platform_id === 0) {
            return '主账户'
          } else {
            if(item.type === 2) {
              return '理财钱包'
            } else if( item.type === 3) {
              return '对冲'
            } else if( item.type === 4) {
              return '借贷宝'
            }
          }
        }
      }
      return ''
    }
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
  watch: {
    active(value) {
      if (value === 0) {
        this.columns = this.getAllorderstatus;
        this.queryData = Object.assign({}, this.depositData);
      } else if (value == 1) {
        this.columns = this.getAllwithdrawstatus;
        this.queryData = Object.assign({}, this.withdrawData);
      } else if (value == 2) {
        this.queryData = Object.assign({}, this.translogData);
      } else if (value == 3) {
        this.queryData = Object.assign({}, this.benefitlistData);
      } else if (value == 4) {
        this.columns = this.getAllbetlogstatus;
        this.queryData = Object.assign({}, this.betlogData);
      } else if (value == 5) {
        this.columns = this.getAllwalletType;
        this.queryData = Object.assign({}, this.walletrecordlistData);
      }
    }
  }
};
</script>

<style scoped lang="less">
@import '~@assets/styles/memberCenter/bussinessRecord.less';
.businessRecord {
  height: 100%;
  .record-title .van-icon-arrow-left{
    left: 30px;
  }
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
    border-radius: 15px;
    overflow: hidden;
    padding: 0;
    background: #28273B;

    /deep/.van-tab {
      border-radius: 14px;
      span {
        border-radius: 14px;
        height: 56px;
        line-height: 56px;
      }
    }

    .van-tab--active {
      background: @color-tab-bar-active;
      border-radius: 14px;
    }
  }

  .van-tabs__wrap {
    padding: 0 0.25rem;
    border-bottom: none !important;
    border-radius: 14px;
  }
}

.active_selected {
  background: @primary-color;
  color: black;
}

.select-bar-i {
  margin: 0 18px;
  font-size: 0.4rem;
  color: #cccccc;
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;

  > div {
    width: 2.7rem;
    margin: 0.2rem;
    height: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.2rem;
    text-align: center;
    line-height: 1rem;
  }
}

.select-bar {
  color: white;
  margin: 0.25rem 0.5rem;
  font-size: 0.4rem;
}

.select-button {
  background: @primary-color;
  font-size: 0.5rem;
  color: #1e1e1e;
  height: 1.2rem;
  width: 9.5rem;
  margin: 0.2rem auto;
  text-align: center;
  line-height: 1.2rem;
  border-radius: 0.2rem;
}

.select-title {
  margin: 0 0.25rem;
  position: relative;
  top: 0;
  height: 98px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.4rem;

  img {
    width: 0.6rem;
    position: absolute;
    left: 0;
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
  background-color: @bg-color;
  .query {
    margin-right: 40px;
  }

  .van-icon {
    width: 30px;
    position: absolute;
    left: 0;
  }

  span:last-child {
    position: absolute;
    right: 0;
  }
}
.select {
  padding: 0;
  color: #c5cfd6;
  font-size: 24px;

  .van-row {
    text-align: center;
    padding: 0 @margin-10;
    margin: 0 0.5rem;
    margin-top: @margin-15;
    color: #222222;
    font-size: @font-size-14;
    display: inline-flex;
    border: 0.02667rem solid rgba(255, 255, 255, 0.1);
    width: 9rem;

    .data-time-picker {
      margin: 0 1.25rem;
      width: 100%;
      height: 1.226666rem;
      border-radius: @border-radius-2px;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      color: #cccccc;
    }

    .b-r {
      background-color: #fff;
      border: 0.022222rem solid #ebebeb;
      margin-left: @margin-10;
      line-height: 90px;
    }
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
          &.wallet-header {
            display: flex;
            > div {
              flex: 1;
            }
            .money {
              margin-left: 20px;
            }
          }
          > span:first-child {
            font-size: @font-size-14;
          }

          > span:last-child {
            float: right;
            font-weight: 500;
            color:@primary-color;
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
          .red {
            color: #eb4d50;
          }
          .yellow {
            color: @primary-color;
          }
          .green {
            color: #30ad8f;
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
            width: 80%;
            overflow: hidden;
            // text-overflow:ellipsis;
            // white-space: nowrap;
          }

          > .time {
            float: right;
            color: @primary-color;
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
            color: @primary-color;
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
            width: 40%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
