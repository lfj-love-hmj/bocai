<template>
  <div id="loanTreasure">
    <lheader v-if="isShowHeader" :title="title" :goback="true"></lheader>
    <div class="content" :class="{ 'no-header': !isShowHeader }">
      <div>
        <div :class="['top',{'top-wanqu':$projectname === 'wanqu','top-other': $projectname !== 'wanqu'}]"></div>
        <div class="center">
          <!-- 借贷规则 -->
          <div class="lendingRules">
            <div>
              <div class="top">
                <div>借贷规则</div>
              </div>
              <table>
                <tr class="rules-title">
                  <th>会员等级</th>
                  <th>借贷金额区间(元）</th>
                  <th>分期天数</th>
                  <th>存款比例</th>
                  <th>流水倍数</th>
                </tr>
                <tr v-for="(item, index) in condition_setting" :key="index">
                  <td>{{ item.name }}</td>
                  <td>
                    {{ item.condition.borrow_money.min }}-{{
                      item.condition.borrow_money.max
                    }}
                  </td>
                  <td>
                    {{ item.condition.stages_days.min }}-{{
                      item.condition.stages_days.max
                    }}
                  </td>
                  <td>
                    {{ item.condition.deposite_scale.min }}:{{
                      item.condition.deposite_scale.max
                    }}
                  </td>
                  <td>{{ item.condition.flow }}</td>
                </tr>
              </table>

              <p>备注：流水倍数=存款金额+借贷金额</p>
              <div class="look">
                <img src="./assets/jiedaibao_list_arrow.png" alt />
                <span>滑动手指查看完整内容</span>
              </div>
            </div>
          </div>

          <!-- 活动申请 -->
          <div class="activity">
            <div class="top">活动申请</div>
            <div class="list">
              <div>
                <div class="pic" :class="step >= 1 ? 'active' : ''">
                  <img src="./assets/jiedaibao_borrow_ic.png" alt />
                </div>
                <p>借贷金额</p>
              </div>
              <img src="./assets/jeidaibao_arrow.png" alt />
              <div>
                <div class="pic" :class="step >= 2 ? 'active' : ''">
                  <img src="./assets/jiedaibao_money_ic.png" alt />
                </div>
                <p>存款金额</p>
              </div>
              <img src="./assets/jeidaibao_arrow.png" alt />
              <div>
                <div class="pic" :class="step >= 3 ? 'active' : ''">
                  <img src="./assets/jiedaibao_day_ic.png" alt />
                </div>
                <p>分期天数</p>
              </div>
              <img src="./assets/jeidaibao_arrow.png" alt />
              <div>
                <div class="pic" :class="step >= 4 ? 'active' : ''">
                  <img src="./assets/jiedaibao_application_ic.png" alt />
                </div>
                <p>活动申请</p>
              </div>
            </div>
            <!-- 借贷金额 -->
            <div class="lendingAmount">
              <div v-if="step === 1">
                <div class="form-item">
                  <label class="form-item-label">借贷金额</label>
                  <div class="form-item-content">
                    <input
                      type="number"
                      :placeholder="ph1"
                      :disabled="isDisabled"
                      v-model="num1"
                      @change="changeMoney"
                    />
                  </div>
                </div>
              </div>
              <div v-if="step === 2">
                <div class="form-item">
                  <label class="form-item-label">存款金额</label>
                  <div class="form-item-content">
                    <input
                      type="number disabled"
                      placeholder="请填写存款金额"
                      v-model="num2"
                      disabled
                      style="background-color: #ddd"
                    />
                  </div>
                </div>
              </div>
              <div v-if="step === 3">
                <div class="form-item">
                  <label class="form-item-label">分期天数</label>
                  <div class="form-item-content">
                    <input
                      type="number"
                      :placeholder="ph2"
                      v-model="num3"
                      @change="changeDay"
                    />
                  </div>
                </div>
              </div>
              <div v-if="step === 4">
                <p>借贷金额：{{ num1 }}元</p>
                <p>存款金额：{{ num2 }}元</p>
                <p>
                  分期天数：{{ num3 }}天
                  <span>每日还款{{ num }}元</span>
                </p>
              </div>
              <div v-if="step === 5">
                <p>距离申请结束时间</p>
                <p>{{ timeRemaining }}</p>
                <p>您已经申请活动，请尽快完成活动要求</p>
              </div>
              <div v-if="step === 6">
                <p>借贷金额：{{ active.money }}元</p>
                <p>分期天数：{{ active.day }}天</p>
                <p>已还款金额：{{ active.money_noenough }}</p>
              </div>
              <router-link
                :to="{ path: '/register' }"
                tag="div"
                class="btn"
                v-if="!isLogin"
                >立即注册</router-link
              >
              <div class="btn" @click="next" v-if="isLogin && btnShow">
                {{ btnText }}
              </div>
            </div>
          </div>

          <!-- 活动细则 -->
          <div class="rulesActivities">
            <div class="rules">
              <div>活动细则</div>
              <p>1.{{$config[$projectname].project}}所有二星及以上会员均可享受，每周可以参与一次。</p>
              <p>
                2.
                会员如果申请500元借贷，根据会员等级如果是二星会员需要存款500元，到账一共1000元。如果是钻石会员只需要存款400元，一共到账900元。
              </p>
              <p>
                3.
                分期天数指的如果会员选择1天内还款，系统会在申请活动的24小时后收回贷款金额。如果会员选择3天内还款，那么系统会在申请活动的每24小时收回贷款金额的1/3，分三次全额收回。
              </p>
              <p>
                4. 会员参与活动期间无法发起提现，直到系统自动收回贷款金额或者。
              </p>
              <p>
                5.
                贷款期间不影响存款，但是系统还是会按照贷款金额和还款天数来计算每日还款金额并自动扣减。
              </p>
              <p>
                6.
                如果客户账户余额不足参与本金的5%可以去活动页面申请破产保护，即可免除一切还款。如果会员完成活动时为盈利状态，公司将抽取盈利部分的20%作为借贷佣金。
              </p>
              <p>
                7.
                本优惠活动只限娱乐性质的会员参加，如发现用户拥有超过一个账户，包括同一姓名，同一邮箱，同一/相似IP地址，同一住址，同一银行卡，同一电脑，禁止多开窗口进行投注，软件投注和套免费游戏等其他任何不正常投注行为，一经发现我们将保留冻结帐户以及没收所有余额的权利
              </p>
              <p>8. {{$config[$projectname].project}}拥有最终解析权。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <footer>
      <div>
        <img src="@assets/img/activities/footer_1.png" alt />
        <p>盈利榜单</p>
      </div>
      <div>
        <img src="@assets/img/activities/footer_2.png" alt />
        <p>活动申请</p>
      </div>
      <div>
        <img src="@assets/img/activities/footer_3.png" alt />
        <p>活动等级</p>
      </div>
      <div>
        <img src="@assets/img/activities/footer_4.png" alt />
        <p>活动细则</p>
      </div>
    </footer> -->
    <toast
      v-if="showToast"
      :content="content"
      @sure="sure"
      @close="close"
    ></toast>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import toast from "@/components/toast";
import { specialdetail, joinborrow, borrowjoinrecord } from "@/api/activity";
import { member } from "@/api/memberCenter";
// import { LEVEL } from "../const";
import { mapState, mapGetters } from "vuex";
import dayjs from "dayjs";

export default {
  data() {
    return {
      title: "借贷宝",
      merchant_no: process.env.VUE_APP_MERCHANT_NO, //商户号
      access_token: window.localStorage.token,
      isShowHeader: true,

      num1: "", //贷款金额
      num2: "", //存款金额
      num3: "", //分期天数
      num: 0, //每日还款
      ph1: "您尚未达到本活动的参与要求，暂时无法进行活动申请", //第一个占位input
      ph2: "您尚未达到本活动的参与要求，暂时无法进行活动申请", //第二个占位input
      isDisabled: true,
      // 5: 进行中, 6: 申请成功
      step: 1,
      history: [], // 活动申请记录
      active: {}, // 进行中借款对象
      id: 0, // 活动id
      condition: null, // 当前用户等级规则
      condition_setting: [], // 借贷规则
      btnText: "下一步",
      btnShow: true, // 是否隐藏按钮
      timeRemaining: "", // 剩余时间
      // 用户活动状态  0: 未申请, 1: 进行中, 2: 申请成功, 3: 申请失败, 4: 成功还贷, 5: 已破产
      status: 0,

      showToast: false, // 弹窗
      content: "", // 弹窗显示文本
      toastType: 0
    };
  },
  computed: {
    ...mapState("global",["memberLevel"]),
    ...mapGetters("users", ["userInfo", "isLogin"])
  },

  components: {
    Lheader,
    toast
  },
  async created() {
    if (this.$route.query.token) {
      localStorage.setItem("token", this.$route.query.token);
      this.access_token = this.$route.query.token;
    }
    if (this.$route.query.source) {
      this.isShowHeader = false;
    }
    this.id = this.$route.query.id;
    if (this.isLogin) {
      // 借款记录，需要同步获取，后面接口有用到
      await borrowjoinrecord({
        access_token: this.access_token,
        merchant_no: this.merchant_no
      }).then(res => {
        this.history = res.data.data.data;
      });
    }
    this.getDetail();
  },
  methods: {
    //获取优惠详情
    getDetail() {
      specialdetail({
        merchant_no: this.merchant_no,
        id: this.id
      }).then(res => {
        this.condition_setting = res.data.data.condition_setting.map(val => {
          if (val.level === this.userInfo.level) {
            this.isDisabled = false;
            this.condition = val.condition;
            const { borrow_money, stages_days } = val.condition;
            this.ph1 = `您的等级可以申请${borrow_money.min}~${borrow_money.max}元`;
            this.ph2 = `您的会员等级可以分期${stages_days.min}-${stages_days.max}天`;
          }

          return {
            ...val,
            name: this.memberLevel[val.level].name || ""
          };
        });

        // 记录用户是否已申请活动
        this.history.forEach(ele => {
          const newDay = dayjs(new Date());
          const endDay = dayjs(ele.end_time);
          // 活动进行中
          if (newDay - endDay < 0) {
            if (ele.status === 1) {
              this.btnShow = false;
              this.status = 1;
              this.step = 5;

              const hours = endDay.diff(newDay, "hour") % 24;
              const minutes = endDay.diff(newDay, "minute") % 60;
              const seconds = endDay.diff(newDay, "second") % 60;
              this.timeRemaining = `${hours}:${minutes}:${seconds}:`;
            }
            if (ele.status === 2) {
              this.active = ele;
              this.status = 2;
              this.step = 6;
              this.btnText = "申请破产";
            }
          }
        });
      });
    },
    sure() {
      if (this.toastType === 0) {
        this.showToast = false;
      } else if (this.toastType === 1) {
        this.$router.push({ path: "/deposit" });
      }
    },
    close() {
      this.showToast = false;
    },
    //下一步
    next() {
      // 判断用户是否有权限参加活动
      if (!this.condition) {
        this.content =
          "尊敬的用户，当前由于您尚未达到本活动的参与要求，暂时无法进行活动申请，多游戏才能参与更多的活动哦~";
        this.showToast = true;
        this.toastType = 0;
        return;
      }

      let { min, max } = this.condition.deposite_scale;
      switch (this.step) {
        case 1:
          if (!this.num1) {
            this.content = "尊敬的用户，请先输入贷款金额";
            this.showToast = true;
            this.toastType = 0;
            return;
          }
          // 计算存款金额
          this.num2 = ((this.num1 * min) / max).toFixed(2);
          this.step += 1;
          break;

        case 2:
          this.step += 1;
          break;

        case 3:
          if (!this.num3) {
            this.content = "尊敬的用户，请先输入还款天数";
            this.showToast = true;
            this.toastType = 0;
            return;
          }
          this.num1 = parseInt(this.num1).toFixed(2);
          this.num = (this.num1 / this.num3).toFixed(2);
          this.step += 1;
          this.btnText = "申请活动";
          break;

        case 4:
          this.goActive();
          break;

        case 5:
          this.$router.push({ path: "/deposit" });
          break;

        case 6:
          break;
      }
    },
    //输入贷款金额
    changeMoney() {
      const { min, max } = this.condition.borrow_money;
      this.num1 < min && (this.num1 = min);
      this.num1 > max && (this.num1 = max);
    },
    //输入贷款天数
    changeDay() {
      const { min, max } = this.condition.stages_days;
      this.num3 < min && (this.num3 = min);
      this.num3 > max && (this.num3 = max);
    },
    //活动申请
    goActive() {
      joinborrow({
        merchant_no: this.merchant_no,
        id: this.id,
        money: this.num1,
        day: this.num3,
        access_token:this.access_token
      }).then(res => {
        this.content = "活动申请成功";
        this.showToast = true;
        this.toastType = 1;
      });
    }
  }
};
</script>

<style src="./style.less" lang="less" scoped></style>
