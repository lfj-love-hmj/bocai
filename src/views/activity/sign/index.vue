<template>
  <div id="sign">
    <lheader v-if="isShowHeader" :title="title" :goback="true"></lheader>
    <div class="container" :class="{ 'no-header': !isShowHeader }">
      <div>
        <div class="top">
          <img src="./assets/bg.jpg" alt />
          <div class="sign">
            <div class="sign-item">
              <p>连续签到天数</p>
              <p>{{ info.continue_sign_times || 0 }}天</p>
            </div>
            <div class="sign-item">
              <p>累计活动礼金</p>
              <p>{{ info.total_money }}元</p>
            </div>
            <div class="sign-item">
              <p @click="preSign">提前开启礼金</p>
              <p>剩余超签{{ info.today_limit_smsign }}次</p>
            </div>
            <div class="sign-item">
              <p>补签</p>
              <p>今日可补{{ info.today_limit_resign }}次</p>
            </div>
            <div
              class="icon"
              @click="sign"
              :class="isSign ? 'active' : ''"
            ></div>
          </div>
        </div>
        <div class="content">
          <div class="date">
            <img src="./assets/date.png" alt />
            <div class="content">
              <div class="year">
                <img
                  src="./assets/prev.png"
                  alt
                  @click="prev"
                />
                <p>{{ year }}年{{ month }}月</p>
                <img
                  src="./assets/next.png"
                  alt
                  @click="next"
                />
              </div>
              <div class="head">
                <p>周日</p>
                <p>周一</p>
                <p>周二</p>
                <p>周三</p>
                <p>周四</p>
                <p>周五</p>
                <p>周六</p>
              </div>
              <div class="content">
                <p
                  v-for="(item, index) in dayList"
                  :key="index"
                  :class="item.class"
                  @click="reSign(item)"
                >
                  <span>{{ item.name }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="note">
            <div>
              <span>1</span>
              {{$config[$projectname].secName}}所有会员均可享受。
            </div>
            <div>
              <span>2</span>
              会员须完成最低100元存款和200元有效流水才能参与签到。礼金无流水要求。
            </div>
            <div>
              <span>3</span>
              每月会员有5次补签机会，以及2次神秘红包提前开机会。
            </div>
            <div>
              <span>4</span>
              补签标准：最低300元存款及600元有效流水，可补签一次。一日最多补签一次。
            </div>
            <div>
              <span>5</span>
              神秘红包提前开标准：最低存款1500元，有效流水3000元，即可提前开一次神秘红包。每周最多提前开一次。
            </div>
            <div>
              <span>6</span>
              本优惠活动只限娱乐性质的会员参加，如发现用户拥有超过一个账户，包括同一姓名，同一邮箱，同一/相似IP地址，同一住址，同一银行卡，同一电脑，禁止多开窗口进行投注，软件投注和套免费游戏等其他任何不正常投注行为，一经发现我们将保留冻结帐户以及没收所有余额的权利。
            </div>
            <div>
              <span>7</span>
              {{$config[$projectname].secName}}拥有最终解析权。
            </div>
          </div>
        </div>
      </div>
    </div>
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
import { signinfo, signrecord, joinsign } from "@/api/activity";
import { member } from "@/api/memberCenter";
export default {
  data() {
    return {
      title: "签到",
      merchant_no: process.env.VUE_APP_MERCHANT_NO, //商户号
      access_token: window.localStorage.token,
      id: 0, //活动id
      detail: {}, //签到详情
      year: 1970, //年
      month: 1, //月
      day: 1, //日
      dayList: [], //日期数组
      info: {}, //基本信息
      isSign: false, //是否签到
      normal: [], //普通签到数组
      re: [], //补签数组
      active: [], //礼包数组
      isNow: 0, //当前月
      showToast: false,
      content: "",
      isShowHeader: true,
      activeDefault: ["3", "11", "20", "30"],
      giftDefault: ["6", "16", "26"]
    };
  },
  components: {
    Lheader,
    toast
  },
  created() {
    if (this.$route.query.token) {
      localStorage.setItem("token", this.$route.query.token);
      this.access_token = this.$route.query.token;
    }
    if (this.$route.query.source) {
      this.isShowHeader = false;
    }
    this.initDate();
    this.id = this.$route.query.id;
    this.getInfo();
  },
  methods: {
    //初始化日历
    initDate(date) {
      this.dayList = [];
      let dat = "";
      if (date) {
        dat = new Date(date);
      } else {
        dat = new Date();
      }
      let currentDay = dat.getDate();
      let currentYear = dat.getFullYear();
      let currentMonth = dat.getMonth() + 1;
      dat.setDate(1);
      let currentWeek = dat.getDay();
      let then = new Date(currentYear, currentMonth, 0);
      let days = then.getDate();
      this.day = currentDay;
      this.year = currentYear;
      this.month = currentMonth;
      let arr = [];
      for (let i = 0; i < currentWeek; i++) {
        arr.push({ day: "" });
      }
      for (let i = 0; i < days; i++) {
        arr.push({ day: i + 1 });
      }
      this.dayList = arr;
      if (window.localStorage.token) {
        this.getsignrecord(currentYear, currentMonth, days);
      }
    },
    //上个月
    prev() {
      this.isNow--;
      let year = this.year;
      let month = this.month;
      let day = this.day;
      month -= 1;
      if (month === 0) {
        month += 12;
        year -= 1;
      }
      month < 10 ? (month = "0" + month) : month;
      day < 10 ? (day = "0" + day) : day;
      let str = year + "-" + month + "-" + day;
      this.initDate(str);
    },
    //下个月
    next() {
      this.isNow++;
      let year = this.year;
      let month = this.month;
      let day = this.day;
      month += 1;
      if (month >= 13) {
        month -= 12;
        year += 1;
      }
      month < 10 ? (month = "0" + month) : month;
      day < 10 ? (day = "0" + day) : day;
      let str = year + "-" + month + "-" + day;
      this.initDate(str);
    },
    //获取基本信息
    getInfo() {
      if (window.localStorage.token) {
        signinfo({
          merchant_no: this.merchant_no,
          id: this.id,
          access_token: this.access_token
        }).then(res => {
          this.info = res.data.data;
        });
      } else {
        this.content = "请先登录账号";
        this.showToast = true;
        this.toastType = 2;
      }
    },
    //获取签到记录
    getsignrecord(y, m, d) {
      m < 10 ? (m = "0" + m) : m;
      d < 10 ? (d = "0" + d) : d;
      signrecord({
        start_time: y + "-" + m + "-" + "01",
        end_time: y + "-" + m + "-" + d,
        type: 1,
        access_token: this.access_token
      }).then(res => {
        let then = [];
        let arr = res.data.data;
        arr.forEach(val => {
          then.push(val.date.split("-")[2]);
          if (val.date.split("-")[2] === this.day) {
            this.isSign = true;
          }
        });
        this.normal = then;
      });
      signrecord({
        start_time: y + "-" + m + "-" + "01",
        end_time: y + "-" + m + "-" + d,
        type: 2,
        access_token: this.access_token
      }).then(res => {
        let then = [];
        let arr = res.data.data;
        arr.forEach(val => {
          then.push(val.date.split("-")[2]);
        });
        this.re = then;
      });
      signrecord({
        start_time: y + "-" + m + "-" + "01",
        end_time: y + "-" + m + "-" + d,
        type: 3,
        access_token: this.access_token
      }).then(res => {
        let then = [];
        let arr = res.data.data;
        arr.forEach(val => {
          then.push(val.date.split("-")[2]);
        });
        this.active = then;
      });
      let arrT = this.dayList;
      this.dayList = [];
      arrT.forEach(item => {
        item.day = item.day.toString();
        if (item.day) {
          if (this.isNow === 0) {
            if (this.active.indexOf(item.day) !== -1) {
              item.name = "礼包";
              item.class = "green";
            } else if (this.re.indexOf(item.day) !== -1) {
              item.name = "补签";
              item.class = "green";
            } else if (this.normal.indexOf(item.day) !== -1) {
              item.name = item.day + "日";
              item.class = "green";
            } else if (item.day === this.day) {
              item.name = item.day + "日";
              item.class = "red";
            } else if (
              this.normal.indexOf(item.day) === -1 &&
              item.day < this.day
            ) {
              item.name = "漏签";
              item.class = "blue";
            } else if (
              this.activeDefault.indexOf(item.day) !== -1 &&
              item.day > this.day
            ) {
              item.name = "礼包";
              item.class = "yellow";
            } else {
              item.name = item.day + "日";
              item.class = "";
            }
          } else if (this.isNow > 0) {
            if (this.active.indexOf(item.day) !== -1) {
              item.name = "礼包";
              item.class = "green";
            } else {
              item.name = item.day + "日";
              item.class = "";
            }
          } else if (this.isNow < 0) {
            if (this.active.indexOf(item.day) !== -1) {
              item.name = "礼包";
              item.class = "yellow";
            } else if (this.re.indexOf(item.day) !== -1) {
              item.name = "补签";
              item.class = "green";
            } else if (this.normal.indexOf(item.day) !== -1) {
              item.name = item.day + "日";
              item.class = "red";
            } else if (this.normal.indexOf(item.day) === -1) {
              item.name = "漏签";
              item.class = "blue";
            } else {
              item.name = item.day + "日";
              item.class = "";
            }
          }
        }
      });
      this.dayList = arrT;
    },
    //签到接口
    sign() {
      if (window.localStorage.token) {
        if (!this.isSign) {
          let dat = new Date();
          let currentDay = dat.getDate();
          let currentYear = dat.getFullYear();
          let currentMonth = dat.getMonth() + 1;
          currentMonth < 10
            ? (currentMonth = "0" + currentMonth)
            : currentMonth;
          currentDay < 10 ? (currentDay = "0" + currentDay) : currentDay;
          let str = currentYear + "-" + currentMonth + "-" + currentDay;
          joinsign({
            id: this.id,
            sign_type: 1,
            date: str,
            access_token: this.access_token
          }).then(res => {
            if (res.data.code === 0) {
              this.content = "签到成功";
              this.showToast = true;
              this.toastType = 0;
              this.info = {};
              this.getInfo();
              this.initDate();
              this.isSign = true;
            } else {
              this.$toast(res.data.msg);
            }
          });
        }
      } else {
        this.content = "请先登录账号";
        this.showToast = true;
        this.toastType = 2;
      }
    },
    //补签
    reSign(item) {
      if (item.class === "blue") {
        let year = this.year;
        let month = this.month;
        let day = item.day;
        month < 10 ? (month = "0" + month) : month;
        day < 10 ? (day = "0" + day) : day;
        let str = year + "-" + month + "-" + day;
        joinsign({
          id: this.id,
          sign_type: 2,
          date: str,
          access_token: this.access_token
        }).then(res => {
          if (res.data.code === 0) {
            this.content = "补签成功";
            this.showToast = true;
            this.toastType = 0;
            this.getInfo();
            this.initDate();
          } else {
            this.$toast(res.data.msg);
          }
        });
      }
    },
    preSign() {
      let giftDate =
        this.dayList.filter(
          item => item.name === "礼包" && item.class === "yellow"
        ) || [];
      if (giftDate.length > 0) {
        let item = giftDate[0];
        let year = this.year;
        let month = this.month;
        let day = item.day;
        month < 10 ? (month = "0" + month) : month;
        day < 10 ? (day = "0" + day) : day;
        let str = year + "-" + month + "-" + day;
        joinsign({
          id: this.id,
          sign_type: 3,
          date: str,
          access_token: this.access_token
        }).then(res => {
          if (res.data.code === 0) {
            this.content = "超签成功";
            this.showToast = true;
            this.toastType = 0;
            this.getInfo();
            this.initDate();
          } else {
            this.$toast(res.data.msg);
          }
        });
      } else {
        this.$toast("本月已经没有神秘礼包啦");
      }
    },
    sure() {
      if (this.toastType === 0) {
        this.showToast = false;
      } else if (this.toastType === 1) {
        this.$router.push({ path: "/deposit" });
      } else if (this.toastType === 2) {
        if (!this.isShowHeader) {
          location.href = "wanquapp://login";
        } else {
          this.$router.push({ path: "/login" });
        }
      }
    },
    close() {
      this.showToast = false;
    }
  }
};
</script>

<style src="./style.less" lang="less" scoped></style>
