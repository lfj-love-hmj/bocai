<template>
  <div id="interestRate">
    <lheader v-if="isShowHeader" :title="title" :goback="true"></lheader>
    <div class="container" :class="{ 'no-header': !isShowHeader }">
      <div>
        <img :src="$projectname === 'wanqu'?`${require('./assets/bg1.jpg')}`:`${require('./assets/bg1-1.png')}`" alt="" class="bg1" />
        <img :src="$projectname === 'wanqu'?`${require('./assets/bg2.jpg')}`:`${require('./assets/bg2-1.png')}`" alt="" class="bg2" />
        <img src="./assets/bg3.jpg" alt="" class="bg3" />
        <div class="bg4">
          <table>
            <tr>
              <td>会员等级</td>
              <td>七日年化(%)</td>
              <td>最大保持(天数)</td>
              <td>转入金额上限(万元)</td>
            </tr>
            <tr v-for="(item, index) in list" :key="index">
              <td>
                <!-- <span></span>  -->
                {{ item.name }}
              </td>
              <td>{{ item.condition.rate }}%</td>
              <td>{{ item.condition.day }}天</td>
              <td>{{ item.condition.up_money }}万</td>
            </tr>
          </table>
        </div>
        <div class="bg5">
          <div class="form">
            <div class="item">
              <span>转入金额</span>
              <input
                type="number"
                v-model="money"
                @input="changeNum"
                placeholder="请输入100或以上的金额"
              />
            </div>
            <div class="item">
              <span>转入日期</span>
              <p @click="showThen(1)">{{ value1 }}</p>
            </div>
            <div class="item">
              <span>转出日期</span>
              <p @click="showThen(2)">{{ value2 }}</p>
            </div>
            <div class="pic"></div>
            <div class="item">
              <span>转入收益</span>
              <input type="text" v-model="num" disabled />
            </div>
            <div class="note">
              <p>*收益金额以最高年利率13%计算</p>
            </div>
            <router-link
              :to="{ path: '/register' }"
              tag="div"
              class="btn"
              v-if="!isLogin"
              >注册</router-link
            >
            <router-link :to="{ path: '/wallet' }" tag="div" class="btn" v-else
              >立即转入</router-link
            >
          </div>
        </div>
        <div class="bg6">
          <div class="title">
            <p @click="activeTab = 0">什么是聚宝盆?</p>
            <p @click="activeTab = 1">参与规则</p>
            <p @click="activeTab = 2">服务条款</p>
          </div>
          <div class="content">
            <div v-if="activeTab === 0">
              聚宝盆是{{$config[$projectname].secName}}娱乐打造的一种理财服务，
              把您存款进入游戏账号的钱转入{{$config[$projectname].secName}}所提供的过夜利息钱包满足12小时；存入的资金越高，获得的利润会更高，最高可获得利率13%。
            </div>
            <div v-if="activeTab === 1">
              <p>1. {{$config[$projectname].secName}}所有一星及以上会员均可享受。</p>
              <p>
                2. 聚宝盆金额无法直接投注，但是可以直接转入其它游戏进行投注。
              </p>
              <p>
                3.
                聚宝盆所产生优惠只需要1倍流水即可提款，优惠额100元以内无流水要求可以直接提款。
              </p>
              <p>
                4.
                聚宝盆会在转入资金的12小时后开始计算利息，每日计算一次。发放时间为每日下午6点。
              </p>
              <p>
                5.
                聚宝盆在根据不同的VIP等级存满7~9天之后，必须取出来一次才能继续计算利息。否则聚宝盆在存满天数达到后将不会继续为您提供利息。
              </p>
            </div>
            <div v-if="activeTab === 2">
              <p>
                1.
                本优惠活动只限娱乐性质的会员参加，如发现用户拥有超过一个账户，包括同一姓名，同一邮箱，同一/相似IP地址，同一住址，同一银行卡，同一电脑，禁止多开窗口进行投注，软件投注和套免费游戏等其他任何不正常投注行为，一经发现我们将保留冻结帐户以及没收所有余额的权利。
              </p>
              <p>2. {{$config[$projectname].secName}}拥有最终解析权。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-datetime-picker
      v-if="showTime"
      v-model="value"
      :min-date="minTime"
      type="date"
      @cancel="showTime = false"
      @confirm="changeNum"
    />
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import toast from "@/components/toast";
import { specialdetail } from "@/api/activity";
import { DatetimePicker } from "vant";
// import { LEVEL } from "../const";
import dayjs from "dayjs";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "聚宝盆",
      isShowHeader: true,

      list: [],
      activeTab: 0,
      value1: "请选择转入日期",
      value2: "请选择转出日期",
      money: "", //输入金额
      showTime: false,
      type: 0,
      value: "",
      minTime: ""
    };
  },
  computed: {
    ...mapState("global",["memberLevel"]),
    ...mapGetters("users", ["isLogin"]),
    // 计算利息
    num() {
      if (typeof this.value1 === "number") {
      }
      if (
        this.value1 &&
        this.value2 &&
        this.money &&
        this.value1 !== "请选择转入日期" &&
        this.value2 !== "请选择转出日期"
      ) {
        let date1 = dayjs(this.value1);
        let date2 = dayjs(this.value2);
        let day = date2.diff(date1, "day");
        let num = this.money ? ((parseInt(this.money) * 0.13) / 365) * day : 0;
        return num.toFixed(2);
      }
      return "0.0";
    }
  },
  components: {
    Lheader,
    toast,
    DatetimePicker
  },
  methods: {
    showThen(type) {
      this.value = "";
      this.showTime = true;
      this.type = type;
    },
    //计算时间
    changeNum() {
      this.showTime = false;
      if (!this.value) this.value = this.minTime;
      if (this.type === 1) {
        let date = "";
        if (this.value) {
          date = new Date(this.value);
        } else {
          return;
        }
        let currentDay = date.getDate();
        let currentYear = date.getFullYear();
        let currentMonth = date.getMonth() + 1;
        currentMonth < 10 ? (currentMonth = "0" + currentMonth) : "";
        currentDay < 10 ? (currentDay = "0" + currentDay) : "";
        this.value1 = currentYear + "-" + currentMonth + "-" + currentDay;
      } else if (this.type === 2) {
        let date = "";
        if (this.value) {
          date = new Date(this.value);
        } else {
          return;
        }
        let currentDay = date.getDate();
        let currentYear = date.getFullYear();
        let currentMonth = date.getMonth() + 1;
        currentMonth < 10 ? (currentMonth = "0" + currentMonth) : "";
        currentDay < 10 ? (currentDay = "0" + currentDay) : "";
        this.value2 = currentYear + "-" + currentMonth + "-" + currentDay;
      }
    },
    //获取详情
    getDetail() {
      specialdetail({
        id: this.id
      }).then(res => {
        let { condition_setting } = res.data.data;
        this.list = condition_setting.map(val => {
          return {
            ...val,
            name: this.memberLevel[val.level].name || ""
          };
        });
      });
    }
  },
  created() {
    if (this.$route.query.source) {
      this.isShowHeader = false;
    }
    this.id = this.$route.query.id;
    this.getDetail();
    this.minTime = new Date();
  }
};
</script>

<style src="./style.less" lang="less" scoped></style>
