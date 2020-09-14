<template>
  <div id="fund">
    <lheader v-if="isShowHeader" :title="title" :goback="true"></lheader>
    <div class="container" :class="{ 'no-header': !isShowHeader }">
      <div>
        <div class="top"></div>
        <!-- 榜单盈利 -->
        <div class="lis-profit">
          <div class="top">
            <img src="./assets/line_left.png" alt class="fr" />
            <p>今日榜单盈利</p>
            <img src="./assets/line_right.png" alt class="fr" />
          </div>
          <div class="listOne">
            <div class="winning-list">
              <p>中奖榜单</p>
              <p>(1名~5名)</p>
            </div>
            <table>
              <tr class="rules-title">
                <th>会员名称</th>
                <th>购买金额</th>
                <th>购买金额</th>
              </tr>
              <tr v-for="(item, index) in profit.slice(0, 5)" :key="index">
                <td>{{ item.username }}</td>
                <td>{{ item.safe_money }}</td>
                <td>{{ item.profit_money }}</td>
              </tr>
            </table>
          </div>
          <div class="listTwo">
            <div class="winning-list">
              <p>中奖榜单</p>
              <p>(6名~12名)</p>
            </div>
            <table>
              <tr class="rules-title">
                <th>会员名称</th>
                <th>购买金额</th>
                <th>购买金额</th>
              </tr>
              <tr
                v-for="(item, index) in profit.slice(5, 10)"
                :key="index"
                v-if="index > 5"
              >
                <td>{{ item.username }}</td>
                <td>{{ item.safe_money }}</td>
                <td>{{ item.profit_money }}</td>
              </tr>
            </table>
          </div>
        </div>
        <!-- 活动申请 -->
        <div class="apply" v-if="status < 1">
          <div class="top">
            <img src="./assets/line_left.png" alt class="fr" />
            <p>活动申请</p>
            <img src="./assets/line_right.png" alt class="fr" />
          </div>
          <div
            class="img"
            :class="{ active: buy_type === 0 }"
            @click="buy_type = 0"
          >
            <img src="./assets/text1.png" alt />
          </div>
          <div
            class="img"
            :class="{ active: buy_type === 1 }"
            @click="buy_type = 1"
          >
            <img src="./assets/text2.png" alt />
          </div>
          <div class="lendingAmount">
            <div class="form-item">
              <label class="form-item-label">基金购买金额:</label>
              <div class="form-item-content">
                <input
                  type="number"
                  placeholder="请输入存款金额"
                  v-model="buy_money"
                />
              </div>
            </div>
            <div class="form-item">
              <label class="form-item-label">目标金额:</label>
              <div class="form-item-content">
                <input
                  type="number"
                  placeholder="请输入目标金额"
                  v-model="target_money"
                />
              </div>
            </div>
            <div class="form-item">
              <label class="form-item-label">保险金额:</label>
              <div class="form-item-content">
                <input
                  v-model="safe_money"
                  type="number"
                  placeholder="请输入保险金额"
                />
              </div>
            </div>
            <div class="form-items">
              <label class="form-item-label">预计派彩礼金:</label>
              <span>{{ num }}</span>
            </div>
            <router-link
              :to="{ path: '/register' }"
              tag="div"
              class="btn"
              v-if="!isLogin"
              >立即注册</router-link
            >
            <div class="btn" @click="handleJoinhedge" v-else>申请活动</div>
          </div>
        </div>

        <!-- 盈亏记录 -->
        <div v-else class="grade profit-loss">
          <div class="top">
            <img src="./assets/line_left.png" alt class="fr" />
            <p>盈亏记录</p>
            <img src="./assets/line_right.png" alt class="fr" />
          </div>
          <div class="activityLevelList">
            <table>
              <tr class="activityLevel-title">
                <th>剩余时间</th>
                <th>会员名称</th>
                <th>存款金额</th>
                <th>保险金额</th>
                <th>目标金额</th>
                <th>盈利礼金</th>
                <th>输赢状态</th>
              </tr>
              <tr v-for="(item, index) in history.slice(0, 6)" :key="index">
                <td>{{ item.timeRemaining }}</td>
                <td>{{ userInfo.username }}</td>
                <td>{{ item.buy_money }}</td>
                <td>{{ item.safe_money }}</td>
                <td>{{ item.target_money }}</td>
                <td>
                  {{
                    item.buy_type === 1 ? item.profit_money : item.loss_money
                  }}
                </td>
                <td>{{ item.winningOrLosing }}</td>
              </tr>
            </table>
          </div>
          <div class="target-text">
            {{ target_text }}
          </div>
          <div class="look">&lt;&lt;滑动查看更多内容</div>
        </div>

        <!-- 等级 -->
        <div class="grade">
          <div class="top">
            <img src="./assets/line_left.png" alt class="fr" />
            <p>活动等级</p>
            <img src="./assets/line_right.png" alt class="fr" />
          </div>
          <div class="activityLevelList">
            <table>
              <tr class="activityLevel-title">
                <th>会员名称</th>
                <th>参与金额限制(元)</th>
                <th>购买金额限制(元)</th>
                <th>盈利金额目标区间(元)</th>
                <th>亏损金额保护区间(元)</th>
              </tr>
              <tr v-for="(item, index) in activityLevelList" :key="index">
                <td>
                  <!-- <span></span> -->
                  {{ item.name }}
                </td>
                <td>
                  {{ item.condition.join_money.min }}~{{
                    item.condition.join_money.max
                  }}
                </td>
                <td>
                  {{ item.condition.buy_money.min }}~{{
                    item.condition.buy_money.max
                  }}
                </td>
                <td>
                  {{ item.condition.target_money.min }}~{{
                    item.condition.target_money.max
                  }}
                </td>
                <td>
                  {{ item.condition.safe_money.min }}~{{
                    item.condition.safe_money.max
                  }}
                </td>
              </tr>
            </table>
          </div>
          <div class="look">&lt;&lt;滑动查看更多内容</div>
        </div>
        <!-- 活动细则 -->
        <div class="regulations">
          <div class="top">
            <img src="./assets/line_left.png" alt class="fr" />
            <p>活动细则</p>
            <img src="./assets/line_right.png" alt class="fr" />
          </div>
          <div class="text">
            <p>
              <span>1</span
              >{{$config[$projectname].secName}}所有二星及以上会员均可享受，每天可以参与一次。
            </p>
            <p>
              <span>2</span>会员在选定一个起始金额之后完成该笔金额的存款才能正
            </p>
            <p>
              <span>3</span>
              会员在选择好并确认活动各项指标之后只要达标即可随时领取礼金，本活动如果超过24小时没有完成，系统默认会员自愿放弃已投入的对冲保险金。
            </p>
            <p>
              <span>4</span
              >本活动可以一日内多次参与，但是必须完成前一次活动才能继续申请第二次参与。
            </p>
            <p><span>5</span>会员不可以同时购买盈利和亏损基金。</p>
            <p>
              <span>6</span
              >目标金额不得低于存款金额的2倍以上。如果盈利目标是1万，存款金额不得高于2万。
            </p>
            <p>
              <span>7</span
              >本优惠活动只限娱乐性质的会员参加，如发现用户拥有超过一个账户，包括同一姓名，同一邮箱，同一/相似IP地址，同一住址，同一银行卡，同一电脑，禁止多开窗口进行投注，软件投注和套免费游戏等其他任何不正常投注行为，一经发现我们将保留冻结帐户以及没收所有余额的权利。
            </p>
            <p><span>8</span>{{$config[$projectname].secName}}拥有最终解析权。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <footer>
      <div @click='goScroll(1)'>
        <img src="./assets/footer_1.png" alt />
        <p>盈利榜单</p>
      </div>
      <div @click='goScroll(2)'>
        <img src="./assets/footer_2.png" alt />
        <p>活动申请</p>
      </div>
      <div @click='goScroll(3)'>
        <img src="./assets/footer_3.png" alt />
        <p>活动等级</p>
      </div>
      <div @click='goScroll(4)'>
        <img src="./assets/footer_4.png" alt />
        <p>活动细则</p>
      </div>
    </footer> -->
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import {
  specialdetail,
  hedgetoplist,
  hedgejoinrecord,
  joinhedge
} from "@/api/activity";
// import { LEVEL } from "../const";
import { mapState, mapGetters } from "vuex";
import dayjs from "dayjs";
import { Toast } from "vant";

const SCROLL_MAP = [0, 520, 930, 1780, 2184];

export default {
  data() {
    return {
      title: "对冲",
      isShowHeader: true,

      buy_type: 0, //选中tab选项
      buy_money: "", //基金购买金额
      target_money: "", //目标金额
      safe_money: "", // 保险金额
      id: 0, //活动id
      activeDot: 0, //当前激活模块
      scrollTop: 0, //当前滚动值
      //中奖榜单
      profit: [],
      activityLevelList: [],

      // 0 未申请, "1": "进行中", "2": "申请成功", "3": "申请失败", "4": "已放弃"
      status: 0,
      history: [], // 对冲基金申请记录
      target_text: "您已经申请活动，请尽快完成活动要求"
    };
  },
  computed: {
    ...mapState("global",["memberLevel"]),
    ...mapGetters("users", ["isLogin", "userInfo"]),
    // 计算派送礼金
    num() {
      if (this.buy_money && this.target_money && this.safe_money) {
        if (this.buy_type === 0) {
          return (
            this.buy_money *
            1.3 *
            (this.target_money / this.safe_money)
          ).toFixed(2);
        } else if (this.buy_type === 1) {
          return (
            this.buy_money *
            2.6 *
            (this.target_money / this.safe_money)
          ).toFixed(2);
        }
      }
      return 0;
    }
  },
  components: {
    Lheader
  },
  methods: {
    //手动滚动事件
    goScroll(id) {
      //this.activeDot = id;
      let end = SCROLL_MAP[id];

      let ele = document.getElementsByClassName("container")[0];
      let timer = setInterval(() => {
        let ispeed = Math.floor((end - this.scrollTop) / 10);
        ele.scrollTop = this.scrollTop + ispeed;
        if (ispeed > 0) {
          if (this.scrollTop >= end) {
            clearInterval(timer);
          }
        } else if (ispeed < 0) {
          if (ispeed < -1) {
            if (this.scrollTop <= end) {
              clearInterval(timer);
            }
          } else {
            clearInterval(timer);
          }
        } else if (ispeed === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    // 点击申请对冲基金
    handleJoinhedge() {
      // 申请活动
      if (this.status > 0) {
        this.$router.push({
          path: "/deposit"
        });
      } else {
        if (!this.buy_money) {
          return Toast("请输入基金购买金额！");
        }
        if (!this.target_money) {
          return Toast("请输入目标金额！");
        }
        if (!this.safe_money) {
          return Toast("请输入保险金额！");
        }
        // 申请活动
        joinhedge({
          id: this.id,
          buy_type: this.buy_type,
          target_money: this.target_money,
          safe_money: this.safe_money,
          buy_money: this.buy_money
        }).then(() => {
          this.$router.push({
            path: "/deposit"
          });
        });
      }
    }
  },
  created() {
    if (this.$route.query.source) {
      this.isShowHeader = false;
    }
    this.id = this.$route.query.id;
    // 获取活动等级列表
    specialdetail({
      id: this.id
    }).then(res => {
      let { condition_setting } = res.data.data;
      this.activityLevelList = condition_setting.map(val => {
        val.name = this.memberLevel[val.level].name || "";
        return val;
      });
    });

    //获取对冲排行榜
    hedgetoplist().then(res => {
      this.profit = res.data.data;
    });

    // 对冲基金申请记录
    if (this.isLogin) {
      hedgejoinrecord().then(res => {
        this.history = res.data.data.data.map(ele => {
          const endTime = dayjs(ele.act_end_time);
          const newDay = dayjs(new Date());
          const hours = endTime.diff(newDay, "hour") % 24;
          const minutes = endTime.diff(newDay, "minute") % 60;
          // 计算基金是否达成目标（赢还是输）
          let winningOrLosing;
          if (ele.buy_type === 1) {
            if (ele.loss_rate >= ele.target_money) {
              winningOrLosing = "赢";
            } else {
              winningOrLosing = "输";
            }
          } else {
            if (ele.profit_rate >= ele.target_money) {
              winningOrLosing = "赢";
            } else {
              winningOrLosing = "输";
            }
          }

          // 判断是否有活动正在申请中
          if (newDay - endTime < 0) {
            // 活动进行中
            if (ele.status === 1) {
              this.status = 1;
            }
            // 申请成功
            if (ele.status === 2) {
              this.status = 2;
              // 计算距离目标金额
              const diffMoney =
                ele.buy_type === 1
                  ? ele.target_money - ele.profit_rate
                  : ele.target_money - ele.loss_rate;
              this.target_text = `距离目标还差${diffMoney}元`;
            }
          }

          return {
            ...ele,
            timeRemaining:
              newDay - endTime >= 0 ? "已结束" : `${hours}:${minutes}`, // 剩余时间
            winningOrLosing // 赢输状态
          };
        });
      });
    }
  }
};
</script>

<style src="./style.less" lang="less" scoped></style>
