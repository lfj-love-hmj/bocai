<template>
  <div v-show="$route.name == 'Home' && !isClose && daliyData.length>0 && !yaboBoxMiddle && !exportBoxMiddle" class="duty">
  <!-- <div class="duty"> -->
    <div v-if="time !== 'off'" class="redpack" @click="$router.push('/activity/redEnvelopeRain')">
      <img src="@assets/img3_0/home/daliy-duty/redpack.gif" alt="">
      <!-- <span></span> -->
      <div class="info">
        <template v-if="time>0">
          <countdown class="tickTime" :time="time" @progress="handleCountdownProgress">
            <template slot-scope="props">
              <span v-show="props.days">{{ props.days }}<small>天</small></span>
              <span v-show="props.hours">{{ props.hours }}<small>时</small></span>
              <span>{{ props.minutes }}<small>分</small></span>
              <span>{{ props.seconds }}<small>秒</small></span>
            </template>
          </countdown>
        </template>
        <template v-else>
          <p>{{time == 'on'? '活动进行中' : '活动已结束'}}</p>
        </template>
      </div>
    </div>
    <div v-else @click="checkStatus" :class="['hideDuty',{'hideDuty-right':!isend}]">
      <span>每日<br>任务</span>
    </div>

    <van-popup
      :class="['custom']"
      v-model="isShow"
      :closeable="true"
      round
      close-icon-position="top-right"
      position="bottom"
      get-container="#app"
    >
      <div class="pop-head">
        <h2>领取每日福利</h2>
      </div>
      <div class="list">
        <div class="daliy-main" v-for="(item,index) in daliyData" :key="index">
          <van-image
          fit="cover"
          lazy-load
          :src="require(`@assets/img3_0/home/daliy-duty/${iconArr[item.name]}@2x.png`)"
          />
          <div class="middle">
            <h3>{{item.name}}</h3>
            <p
              v-if="item.name == '每日签到'"
            >每日存款{{item.recharge_amount}}元{{item.required_flow}}倍流水奖励{{item.reward_amount.min}}-{{item.reward_amount.max}}元</p>
            <p
              v-if="item.name == '任意投注'"
            >每日参与任意投注{{item.daily_bet_amount}}次，奖励{{item.reward_amount.min}}-{{item.reward_amount.max}}元</p>
            <p
              v-if="item.name == '累计投注金额' || item.name == '累计充值'"
            >{{item.name}}达{{item.cumulative_bet_amount || item.daily_cumulative_recharge}}元，奖励{{item.reward_amount.min}}-{{item.reward_amount.max}}元</p>
            <p
              v-if="item.name == '完成全部任务'"
            >完成每日任务，奖励{{item.reward_amount.min}}-{{item.reward_amount.max}}元</p>
            <!-- <p v-else>{{item.content}}</p> -->
          </div>
          <van-button
            :disabled="item.status == 2"
            type="primary"
            @click="dutyAction(index,item)"
          >{{item.status == 1?'领取':item.msg}}</van-button>
        </div>
      </div>

      <div style="text-align:center;">
        <img
          class="task-logo"
          :src="h5_logo"
          alt
        />
      </div>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { dailytasks, getreward } from "@/api/home";
import { getRedRainInfo } from "@/api/activity";

export default {
  name: "daliy-duty",
  props: ["isend"],
  data() {
    return {
      daliyData: [],
      isShow: false,
      isClose: false,
      iconArr: {'每日签到':"sign", '任意投注':"touzhu", '累计投注金额':"touzhujine", '累计充值':"deposit", '完成全部任务':"done"},
      time: 'off',
      h5_logo: '',
      yaboBoxMiddle:['10024'].includes(process.env.VUE_APP_PROJECT_NAME),
      exportBoxMiddle:['10050'].includes(process.env.VUE_APP_PROJECT_NAME)
    };
  },
  watch: {
    async $route(to, from) {
      console.log(123123, to, from);
      if (to.name == "Home") {
        this.isClose = false;
        await this.getRedpackData()
        this.initData()
      }
    },
    token(val) {
      if (val) {
        dailytasks().then(res => {
          this.daliyData = res.data.data;
        });
      }
    },
    siteInfo: {
      handler (val) {
        console.log(val)
        this.h5_logo = val.h5_logo
      },
      deep: true
    }
  },
  computed: {
    ...mapState("users", ["token"]),
    ...mapState("global", ["siteInfo"])
  },
  async created() {
    if (this.token) {
      await this.getRedpackData()
      this.initData();
    }
  },
  methods: {
    initData() {
      if (this.token) {
        dailytasks().then(res => {
          this.daliyData = res.data.data;
        });
      }
    },
    getRedpackData() {
      getRedRainInfo().then(res => {
        const { data } = res.data
        const startTime = (new Date((data.start_time).replace(/-/g, '/'))).getTime()
        const endTime = (new Date((data.end_time).replace(/-/g, '/'))).getTime()
        const currTime = (new Date()).getTime()
        if(startTime-currTime > 0) {
          this.time = startTime - currTime
        } else if (currTime - startTime > 0 && currTime - endTime < 0) {
          this.time = 'on'
        } else if ( currTime - endTime > 0) {
          this.time = 'off'
        }
        console.log('kanan', startTime, currTime, endTime, this.time)
      })
    },
    handleCountdownProgress(data) {
      if(!data.totalSeconds) {
        this.time = 'on'
      }
    },
    checkStatus() {
      this.isShow = true;
    },
    dutyAction(i) {
      const { daliyData } = this;
      if (!this.token) {
        this.$toast("请登录后在参与活动");
        return;
      }
      if (daliyData[i].status == 0) {
        if (["每日签到", "累计充值"].indexOf(daliyData[i].name) != -1) {
          this.$router.push("/deposit");
          this.isShow = false
        } else if (daliyData[i].name == "完成全部任务") {
          this.$toast.fail("请先完成所有任务");
        } else {
          this.isShow = false
        }
        return
      }
      if (daliyData[i].status == 1) {
        this.draw(i);
        // this.$store.dispatch('global/setRedBag',[true,daliyData[i],10])
        // this.isShow = false;
      }
    },
    draw(i) {
      const params = {
        step: i + 1,
        money: this.daliyData[i].money
      };
      getreward(params).then(res => {
        if (res.data.code == 0) {
          // if (daliyData[i].name == "完成全部任务") {
          //   this.$toast(`恭喜你完成今日任务${this.daliyData[i].money}金额`);
          // } else {
          //   this.$toast(`每日任务奖励${this.daliyData[i].money}金额`);
          // }
          this.$store.dispatch('global/setRedBag',[true,this.daliyData[i],params.step === 6?res.data.data[0].money:res.data.data.money])
          this.isShow = false;
          this.initData();
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.duty {
  position: fixed;
  right: 0;
  bottom: 400px;
  z-index: 2;
  .redpack{
    // width:80px;
    img{
      width:160px;
    }
    .info{
      position: absolute;
      top:50px;
      width:100%;
      text-align: center;
      p{
        color:#fff;
        line-height: 40px;
        font-size: 20px;
        font-weight: bold;
      }
      .tickTime{
        color:#fff;
        font-weight: bold;
      }
    }
  }
  .main {
    width: 174px;
  }
  .close {
    width: 44px;
    position: absolute;
    top: -20px;
    right: 0;
  }
  .hideDuty {
    width: 68px;
    height: 68px;
    background-image: @bg-gradient-color;
    background-color: @bg-gradient-color;
    border-radius: 10px 0 0 10px;
    color: #fff;
    text-align: center;
    padding: 10px;
    transition: all 0.5s;
    overflow: hidden;
    span {
      font-size: 22px;
      white-space:nowrap;
    }
  }
  .hideDuty-right {
    width: 0;
    span {
      display: none;
    }
    // margin-left: 68px;
  }
}
.custom {
  display: flex;
  flex-direction: column;
  .list {
    flex: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .daliy-main {
      background: @bg-color-2;
      overflow: hidden;
      // height:140px;
      margin-bottom: 20px;
      padding: 30px;
      .van-image {
        width: 80px;
        float: left;
        margin-right: 18px;
      }
      .middle {
        float: left;
        color: #ccc;
        h3 {
          margin: 0 0 30px 0;
          font-size: 28px;
        }
        p {
          font-size: 20px;
        }
      }
      .van-button {
        float: right;
        width: 160px;
        height: 80px;
        line-height: 80px;
      }
    }
  }
}
.task-logo {
  height: 60px;
}
</style>
