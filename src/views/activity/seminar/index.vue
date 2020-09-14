<template>
  <div id="seminar">
    <lheader v-if="isShowHeader" :title="title" :goback="true"></lheader>
    <el-container class="container" :class="{ 'no-header': !isShowHeader }">
      <div class="main">
        <div class="top">
          <img src="./assets/bg-1.jpg" alt="五重好礼" />
          <p class="money">￥{{ money }}</p>
          <p class="people">{{ people }}</p>
        </div>
        <div class="content">
          <img src="./assets/bg-2.jpg" alt="五大礼包" class="one" />
          <div class="list">
            <div class="item">
              <div class="title">1</div>
              <p class="content1">
                绑定个人信息（赠送高达{{ detail.register_info.money }}元）
              </p>
              <p class="line"></p>
              <p class="content2">
                无存款要求 | 取款=领取红利 x {{ detail.register_info.flow }}倍
              </p>
              <router-link :to="{ path: '/personalData' }" tag="div" class="btn"
                >立即绑定</router-link
              >
            </div>
            <div class="item">
              <div class="title">2</div>
              <p class="content1">
                首存{{ detail.first_recharge.money }}%（赠送高达{{
                  detail.first_recharge.max_money
                }}元）
              </p>
              <p class="line"></p>
              <p class="content2">
                存款≥100元 | 取款=（存款+优惠）x
                {{ detail.first_recharge.flow }}倍
              </p>
              <router-link :to="{ path: '/deposit' }" tag="div" class="btn"
                >立即存款</router-link
              >
            </div>
            <div class="item">
              <div class="title">3</div>
              <p class="content1">任意投注领取{{ detail.bet.money }}元礼金</p>
              <p class="line"></p>
              <p class="content2">
                存款≥100元 | 取款=优惠 x {{ detail.bet.flow }}倍流水
              </p>
              <router-link :to="{ path: '/' }" tag="div" class="btn"
                >立即投注</router-link
              >
            </div>
            <div class="item">
              <div class="title">4</div>
              <p class="content1">
                {{
                  `次存再享${detail.replay_recharge.money}%礼金（赠送高达${detail.replay_recharge.max_money}元）`
                }}
              </p>
              <p class="line"></p>
              <p class="content2">
                存款≥100元 | 取款=（存款+优惠）x
                {{ detail.replay_recharge.flow }}倍
              </p>
              <router-link :to="{ path: '/deposit' }" tag="div" class="btn"
                >立即存款</router-link
              >
            </div>
            <div class="item">
              <div class="title">5</div>
              <p class="content1">APP存款赠送礼金（赠送免费彩金8元）</p>
              <p class="line"></p>
              <p class="content2">存款≥100元 | 取款=优惠 x 5倍流水</p>
              <router-link :to="{ path: '/downApp' }" tag="div" class="btn"
                >立即下载</router-link
              >
            </div>
          </div>
          <img src="./assets/bg-4.jpg" alt="活动规则" class="two" />
        </div>
      </div>
    </el-container>
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
import { specialdetail } from "@/api/activity";
export default {
  name: "seminar",
  data() {
    return {
      title: "五重好礼",
      money: 1827272, //送出金额
      people: 155334, //参与人数
      merchant_no: process.env.VUE_APP_MERCHANT_NO, //商户号
      id: 0, //活动id
      showToast: false,
      content: "",
      detail: {
        register_info: {},
        first_recharge: {},
        bet: {},
        replay_recharge: {}
      },
      isShowHeader: true
    };
  },
  components: {
    Lheader,
    toast
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    //获取优惠详情
    getDetail() {
      specialdetail({
        merchant_no: this.merchant_no,
        id: this.id
      }).then(res => {
        console.log(res)
        this.detail = res.data.data.condition_setting;
      });
    },
    //获取活动人数与金额
    getActive() {
      let date1 = new Date("2019-08-16");
      let date2 = new Date();
      let date = (date2.getTime() - date1.getTime()) / 1000;
      let num1 = 100000 / (24 * 60 * 60);
      let num2 = 50000 / (24 * 60 * 60);
      this.people = parseInt(this.people + num2 * date);
      this.money = parseInt(this.money + num1 * date);
    },
    sure() {
      if (this.toastType === 0) {
        this.showToast = false;
      } else if (this.toastType === 1) {
        this.$router.push({ path: "/deposit" });
      } else if (this.toastType === 2) {
        this.$router.push({ path: "/login" });
      }
    },
    close() {
      this.showToast = false;
    }
  },
  created() {
    if (this.$route.query.token) {
      localStorage.setItem("token", this.$route.query.token);
    }
    if (this.$route.query.source) {
      this.isShowHeader = false;
    }
    this.id = this.$route.query.id;
    this.getDetail();
    this.getActive();
    if (!window.localStorage.token) {
      this.content = "请先登录账号";
      this.showToast = true;
      this.toastType = 2;
    }
  }
};
</script>

<style src="./style.less" lang="less" scoped></style>
