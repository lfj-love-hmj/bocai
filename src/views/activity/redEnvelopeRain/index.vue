<template>
  <div class="redEnvelopeRain">
      <!-- <p>红包雨</p> -->
      <lheader title="红包雨活动" :goback="true"></lheader>
      <div class="section-1">
        <img src="./assets/redbag.png" alt="">
        <div>
          <p>红包活动倒计时</p>
          <div class="time">
            <template v-if="time>0">
              <countdown :time="time" @progress="handleCountdownProgress">
                <template slot-scope="props">
                  <span v-if="props.days">{{ props.days }}<small>天</small></span>
                  <span v-if="props.hours">{{ props.hours }}<small>时</small></span>
                  <span v-if="props.minutes">{{ props.minutes }}<small>分</small></span>
                  <span v-if="props.seconds">{{ props.seconds }}<small>秒</small></span>
                </template>
              </countdown>
            </template>
            <template v-else>
              <p>{{time == 'on'? '活动进行中' : '活动已结束'}}</p>
            </template>
          </div>
          <!-- <p>距离活动开始时间</p> -->
          <img v-show="!token" @click="$router.push('/login')" src="./assets/login.png" alt="">
        </div>
      </div>
      <div class="section-2">
        <img class="title" src="./assets/reward_title.png" alt="">
        <div class="reward">
          <h2>红包大奖名单</h2>
          <div>
            <div class="top">
              <ul>
                <li>中奖账号</li>
                <li>中奖金额</li>
              </ul>
              <ul>
                <li>中奖账号</li>
                <li>中奖金额</li>
              </ul>
            </div>
            <div class="bottom">
              <vue-list-marquee class='my-marquee' :listData='list1' :option='option'>
                <template slot-scope="{ item }">
                  <ul class="list-item">
                    <li>{{item.username}}</li>
                    <li>{{item.money}}</li>
                  </ul>
                </template>
              </vue-list-marquee>
              <vue-list-marquee class='my-marquee' :listData='list2' :option='option'>
                
                <template slot-scope="{ item }">
                  <ul class="list-item">
                    <li>{{item.username}}</li>
                    <li>{{item.money}}</li>
                  </ul>
                </template>
              </vue-list-marquee>
            </div>
          </div>
        </div>
      </div>
      <div class="section-3">
        <img class="title" src="./assets/step_title.png" alt="">
        <div v-for="(item, index) in step" :key="index">
          <img :src="require(`./assets/step_${index+1}.png`)" alt="">
          <div class="content">
            <h2>第{{index+1}}步</h2>
            <p>{{item}}</p>
          </div>
        </div>
      </div>
      <!-- 点击领取红包效果 -->
      <RedpacketRain v-show="time === 'on'" :time="time" :activityInfo="activityInfo" @changeTime="changeTime"  /> 
  </div>
</template>

<script>
import { getRedRainInfo, getRedRainWinList } from "@/api/activity";
import 'vue-list-marquee/dist/vue-list-marquee.css'
import { VueListMarquee } from 'vue-list-marquee'
import RedpacketRain from './RedpacketRain'
import { mapState } from "vuex";
import Lheader from "@/components/l-header";

export default {
  data() {
    return {
      step:['● 活动开始前会提前倒计时，    倒计时结束后开启红包雨 ','● 每次选中到红包出现金额，    将代表中奖 ','● 活动结束后将自动到账主钱包，    无需手动再次领取'],
      list1: [],
      list2: [],
      option: {
        // 滚动一个条目高度的过渡时间
        moveTime: 1000,
        // 每滚动一个条目，是否需要停顿；如果为false，restTime属性将无效；
        needRestTime: false,
        // 每滚动一个条目后的停顿时间(尽量大于100，否则效果不好)，默认2000，needRestTime为true时，才有效；
        restTime: 1000,
        // 当鼠标移入和移出时，是否需要暂停和继续滚动；
        needHover: true,
        // 当滚动列表数据更新时，等待该延迟时间后，再进行滚动；
        delayTime: 3000,
        // 速度曲线【可选值： linear、ease、ease-in、ease-out、ease-in-out、cubic-bezier(n,n,n,n)】；当needRestTime为true时，才有效；
        timingFunc: 'linear'
      },
      time: 'off',
      activityInfo: {}
    }
  },
  components: {
    VueListMarquee,
    RedpacketRain,
    Lheader
  },
  computed: {
    ...mapState("users", ["token"])
  },
  created() {
    this.getData()
    this.getList()
  },
  methods: {
    handleCountdownProgress(data) {
      console.log(data)
      if(!data.totalSeconds) {
        this.time = 'on'
      }
    },
    getData() {
      this.token && getRedRainInfo().then(res => {
        const { data } = res.data
        const startTime = (new Date((data.start_time).replace(/-/g, '/'))).getTime()
        const endTime = (new Date((data.end_time).replace(/-/g, '/'))).getTime()
        const currTime = (new Date()).getTime()
        this.activityInfo = data.benefit_setting
        console.log('info',this.activityInfo)
        if(startTime-currTime > 0) {
          this.time = startTime - currTime
        } else if (currTime - startTime > 0 && currTime - endTime < 0) {
          this.time = 'on'
        } else if ( currTime - endTime > 0) {
          this.time = 'off'
        }
      })
    },
    getList() {
      getRedRainWinList({page: 1}).then(res => {
        this.list1 = res.data.data.list
      })
      getRedRainWinList({page: 2}).then(res => {
        this.list2 = res.data.data.list
      })
    },
    changeTime() {
      this.time = 'off'
    }
  }
}
</script>

<style src="./style.less" lang="less" scoped></style>