<template>
  <div class="privilege">
    <template v-if="$projectname!=='10023' && $projectname!=='10033'">
        <div class="head" :style="{backgroundImage:$bImgs['vip/vip_bg@2x']}">
          <div class="info">
            <div class="info-photo">
              <img :src="$imgs['memberCenter/login-out']" alt="login-out"/>
            </div>
            <div class="styles__user">
              <div class="styles__ft">
                <div class="styles__ftUserName">
                  <p class="styles__usernameText">{{ userInfo.username }}</p>
                  <span class="level" v-if="isLogin" :style="{backgroundImage:$bImgs['vip/level-small/vipbg@2x']}">
                    <span class="level-num">{{basicInfo.level}}</span>
                  </span>
                </div>
                <p class="styles__ftRank">这是您成为{{$config[$projectname].project}}会员的第
                  <span>{{registerDate}}</span> 天</p></div>
            </div>
            <div class="styles__logo">
              <van-image :src="$imgs['vip/newLevel/grade_normal'+(userInfo.level+1)+'@2x']"/>
            </div>
          </div>
         <div class="vip-progeress">
           <span class="vip-progeress1">VIP{{userInfo.level}}</span>
           <van-progress inactive :percentage="percentage" />
           <span class="vip-progeress2">VIP{{userInfo.level+1}}</span>
         </div>
          <p class="vip-ck">· 当前存款(元)：<span>{{basicInfo.deposit_money}}</span>/{{basicInfo.next_benefit_money}}</p>
          <p class="vip-ck">· 当前流水(元)：<span>{{basicInfo.all_valid_bet}}</span>/{{basicInfo.need_valid_bet}}</p>
        </div>
        <div class="newvip-level">
          <van-tabs v-model="levelActived" @click="levelChange" animated>
            <van-tab v-for="(item,index) in levelData" :title="'Lv' + index">
              <!--<div class="newvip-level-info"></div>-->
            </van-tab>
          </van-tabs>

          <div class="swiper-container swiper-container01">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in levelData">
                <!-- 当前等级 -->
                <div class="newvip-level-info" :style="{backgroundImage:(index===userInfo.level?$bImgs['vip/newLevel/vip_card1@2x']:$bImgs['vip/newLevel/vip_card2@2x']) }">
                  <img v-if="index===userInfo.level" :src="$imgs['vip/newLevel/grade_normal'+(index+1)+'@2x']" class="newvip-level-icon" alt="">
                  <img v-else :src="$imgs['vip/newLevel/grade_gray'+(index+1)+'@2x']" class="newvip-level-icon" alt="">
                  <p class="newvip-level-tit">VIP{{index}}</p>
                  <template v-if="$projectname==='10029'">
                    <p class="qb-vip-tit01">您暂未获得奖牌</p>
                    <p class="qb-vip-tit02">需要 {{item.deposit_money}} 存款和 {{item.money_condition}} 流水升级至VIP1</p>
                  </template>
                  <div class="newvip-level-con" v-else>
                    <div><p>{{item.deposit_money}}</p><p>累计存款</p></div>
                    <div><p>{{item.money_condition}}</p><p>流水要求</p></div>
                    <div><p>{{item.valid_bet_money}}</p><p>保级次数(3个月)</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="vip0zx">
          <h2><i></i><span>VIP{{levelActived}}尊享</span></h2>
          <ul>
            <li v-if="levelData.length">
              <img :src="$imgs['vip/newLevel/vip_icon_yinhangqia@2x']" alt="">
              <p><span>{{levelData[levelActived].withdraw_times_limit?levelData[levelActived].withdraw_times_limit:'-'}}</span><i>每日提款次数</i></p>
            </li>
            <li v-if="levelData.length">
              <img :src="$imgs['vip/newLevel/vip_icon_qianbi@2x']" alt="">
              <p><span>{{levelData[levelActived].withdraw_money_limit?levelData[levelActived].withdraw_money_limit:'-'}}</span><i>每日提款额度</i></p>
            </li>
            <li>
              <img :src="$imgs['vip/newLevel/vip_icon_shangsheng@2x']" alt="">
              <p><span>{{basicInfo.level_privilege_info.upgrade_money?basicInfo.level_privilege_info.upgrade_money:'-'}}</span><i>晋级礼金(晋级自动发放)</i></p>
            </li>
            <li>
              <img :src="$imgs['vip/newLevel/vip_icon_cake@2x']" alt="">
              <p><span>{{basicInfo.level_privilege_info.birthday_money?basicInfo.level_privilege_info.birthday_money:'-'}}</span><i>生日礼金</i></p>
            </li>
            <li>
              <img :src="$imgs['vip/newLevel/vip_icon_hongbao@2x']" alt="">
              <p><span>{{basicInfo.level_privilege_info.gift?basicInfo.level_privilege_info.gift:'-'}}</span><i>佳节礼品(线下派发)</i></p>
            </li>
            <li>
              <img :src="$imgs['vip/newLevel/vip_icon_fanshui@2x']" alt="">
              <p><span>{{basicInfo.max_code_washing_rate?basicInfo.max_code_washing_rate:'-'}}%</span><i>最高返水</i></p>
            </li>
          </ul>
        </div>

          <div class="vip0zx" v-if="$projectname==='10029'">
            <h2><i></i><span>VIP优惠</span></h2>
            <div class="newvip-fs">
              <div v-for="item in benefitData" v-if="item.list.length>0">
                <p v-for="list in item.list" v-if="userInfo.level===list.level">{{list.proportion}}%</p>
                <p>{{item.name}}返水</p>
              </div>
            </div>
          </div>

      <router-link :to="`/vipDet${this.$route.query.source?`?source=${this.$route.query.source}`:''}`" class="to-vipdet"><span>查看VIP详情</span> <img :src="$imgs['vip/newLevel/arrow@2x']" alt=""></router-link>
    </template>
    <template v-else>
      <div class="newvip-head">
        <div class="newvip-level">
          <div class="swiper-container swiper-container01">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in levelData">
                <!-- 当前等级 -->
                <div class="newvip-level-info" :style="{backgroundImage:(index===userInfo.level?$bImgs['vip/newLevel/vip_card1@2x']:$bImgs['vip/newLevel/vip_card2@2x']) }">
                  <img v-if="index===userInfo.level" :src="$imgs['vip/newLevel/grade_normal'+(index+1)+'@2x']" class="newvip-level-icon" alt="">
                  <img v-else :src="$imgs['vip/newLevel/grade_gray'+(index+1)+'@2x']" class="newvip-level-icon" alt="">
                  <p class="newvip-level-tit">VIP{{index}}</p>
                  <div class="newvip-level-con">
                    <div><p>{{item.deposit_money}}</p><p>累计存款</p></div>
                    <div><p>{{item.money_condition}}</p><p>流水要求</p></div>
                    <div><p>{{item.valid_bet_money}}</p><p>保级次数(3个月)</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="vip-progeress">
            <img :src="$imgs['vip/newLevel/grade_normal'+(userInfo.level+1)+'@2x']" class="newvip-level-icon" alt="">
            <span class="vip-progeress1">VIP{{userInfo.level}}</span>
            <van-progress inactive :percentage="percentage" />
            <span class="vip-progeress2">VIP{{userInfo.level+1}}</span>
            <img :src="$imgs['vip/newLevel/grade_gray'+(userInfo.level+2)+'@2x']" class="newvip-level-icon" alt="">
          </div>
          <p class="newvip-head-finish">您已完成 <span>{{basicInfo.deposit_money}}</span> 存款和 <span>{{basicInfo.all_valid_bet}}</span> 流水</p>
        </div>
      </div>
      <div class="vip0zx">
        <h2><i></i><span>VIP{{levelActived}}尊享</span></h2>
        <ul>
          <li>
            <img :src="$imgs['vip/newLevel/vip_icon_yinhangqia@2x']" alt="">
            <p><span>{{levelData[levelActived].withdraw_times_limit?levelData[levelActived].withdraw_times_limit:'-'}}<i>次</i></span><i>每日提款次数</i></p>
          </li>
          <li>
            <img :src="$imgs['vip/newLevel/vip_icon_qianbi@2x']" alt="">
            <p><span>{{levelData[levelActived].withdraw_money_limit?levelData[levelActived].withdraw_money_limit:'-'}}万<i>/日</i></span><i>每日提款额度</i></p>
          </li>
          <li>
            <img :src="$imgs['vip/newLevel/vip_icon_shangsheng@2x']" alt="">
            <p><span>{{upMoney['lv'+levelActived]}}<i>元</i></span><i>晋级礼金(晋级自动发放)</i></p>
          </li>
          <li>
            <img :src="$imgs['vip/newLevel/vip_icon_cake@2x']" alt="">
            <p><span>{{birthMoney['lv'+levelActived]}}<i>元</i></span><i>生日礼金</i></p>
          </li>
          <li>
            <img :src="$imgs['vip/newLevel/vip_icon_hongbao@2x']" alt="">
            <p><span>{{basicInfo.level_privilege_info.gift?basicInfo.level_privilege_info.gift:'-'}}</span><i>佳节礼品(线下派发)</i></p>
          </li>
          <li>
            <img :src="$imgs['vip/newLevel/vip_icon_fanshui@2x']" alt="">
            <p><span>{{basicInfo.max_code_washing_rate?basicInfo.max_code_washing_rate:'-'}}<i>%</i></span><i>最高返水</i></p>
          </li>
        </ul>
      </div>
      <div class="vip0zx">
        <h2><i></i><span>VIP优惠</span></h2>
        <div class="newvip-fs" v-if="benefitData.length>0">
          <div v-for="item in benefitData" v-if="item.name!='六合彩'">
            <p v-for="list in item.list" v-if="levelActived===list.level">{{list.proportion}}%</p>
            <p>{{item.name}}返水</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>


<script>
  // import { BarChart } from './components/BarChart'
  // |- line.common.js  -------------- 折线图
  // |- bar.common.js  --------------- 条形图
  // |- histogram.common.js  --------- 柱状图
  // |- pie.common.js  --------------- 饼图
  // |- ring.common.js  -------------- 环图
  // |- funnel.common.js  ------------ 漏斗图
  // |- waterfall.common.js  --------- 瀑布图
  // |- radar.common.js  ------------- 雷达图
  // |- map.common.js  --------------- 地图
  // |- sankey.common.js  ------------ 桑基图
  // |- heatmap.common.js  ----------- 热力图
  // |- scatter.common.js  ----------- 散点图
  // |- candle.common.js  ------------ k线图
  // |- gauge.common.js  ------------- 仪表盘
  // |- tree.common.js  -------------- 树图
  // |- bmap.common.js  -------------- 百度地图
  // |- amap.common.js  -------------- 高德地图
  // import Vue from 'vue'
  // import VeLine from 'v-charts/lib/line.common'
  // import VeBar from 'v-charts/lib/bar.common'
  import VeHistogram from 'v-charts/lib/histogram.common'

  import EventApply from '../../vip/components/EventApply'
  import {
    activitySave,
    vipBasicInfo,
    vipLevelProfile,
    vipPrivilege
  } from '@/api/vip'
  import {memberlevellist,allactivitybenefit} from "@/api/memberCenter";
  import {
    GAME_CATE_ID_CASINO,
    GAME_CATE_ID_SLOTS,
    GAME_CATE_ID_FISHING,
    GAME_CATE_ID_LOTTERY,
    GAME_CATE_ID_CHESS,
    GAME_CATE_ID_SPORTS,
    GAME_CATE_ID_ESPORTS
  } from '@/store/types'
  import {mapState} from 'vuex'
  import "swiper/dist/css/swiper.css";
  import { Swiper } from "vue-awesome-swiper";

  export default {
    name: 'Privilege',
    components: {
      // BarChart,
      // VeLine,
      // VeBar,
      VeHistogram,
      // VePie,
      EventApply
    },
    data() {
      const platforms = [{
        game_cate_id: GAME_CATE_ID_CASINO,
        game_cate_name: '真人'
      }, {
        game_cate_id: GAME_CATE_ID_SLOTS,
        game_cate_name: '电子'
      }, {
        game_cate_id: GAME_CATE_ID_FISHING,
        game_cate_name: '捕鱼'
      }, {
        game_cate_id: GAME_CATE_ID_LOTTERY,
        game_cate_name: '彩票'
      }, {
        game_cate_id: GAME_CATE_ID_CHESS,
        game_cate_name: '棋牌'
      }, {
        game_cate_id: GAME_CATE_ID_SPORTS,
        game_cate_name: '体育'
      }, {
        game_cate_id: GAME_CATE_ID_ESPORTS,
        game_cate_name: '电竞'
      }]
      return {
        showPopup: false,
        applyTitle: '',
        applyId: 0,
        basicInfo: {
          'level': 0,
          'level_name': '新手上路Lv0',
          'week_valid_bet': 0,
          'all_valid_bet': 0,
          'all_benefit_money': 0,
          'next_benefit_money': 0,
          'need_valid_bet': 0,
          'all_wash_code_money': 0,
          "level_privilege_info": {
            "upgrade_money": "",//晋级礼金
            "upgrade_flow": "",//晋级流水要求
            "birthday_money": "",//生日礼金
            "birthday_flow": "",//生日流水要求
            "gift": "",//福利礼品
            "level": 1
          }
        },
        platforms,
        platform: platforms[0],
        privilege1: [],
        privilege2: [],
        rowsCached: {},
        chartData: {
          // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          columns: ['level', 'proportion'],
          // x轴连续数值轴，没用
          // xAxisType: 'value',
          rows: []
        },
        aoMenUi: ['10009', '10010', '10011', '10012', '10034'],
        registerDate: "-",
        percentage:0,
        levelActived:null,
        levelTotal:11,
        swipeObj:null,
        levelData:[],
        getTimes:null,
        getMax:null,
        benefitData:[],
        //晋级礼金
        upMoney:{
          lv0: 0,
          lv1: 38,
          lv2: 88,
          lv3: 188,
          lv4: 588,
          lv5: 888,
          lv6: 1888,
          lv7: 3888,
          lv8: 5888,
          lv9: 8888,
          lv10: 18888
        },
        //生日礼金
        birthMoney:{
          lv0: 0,
          lv1: 0,
          lv2: 38,
          lv3: 88,
          lv4: 188,
          lv5: 388,
          lv6: 588,
          lv7: 888,
          lv8: 1888,
          lv9: 3888,
          lv10: 8888
        }
        // chartDataOriginal:
      }
    },
    created() {
      this.levelActived = this.userInfo.level
      this.getBenefit();
      this.init()
      if (this.token) {
        this.getRegisterDate();
        this.getLevelInfo();
      }
      let that = this;
      // this.getGift()

    },
    computed: {
      ...mapState('users', ['userInfo', "token", 'isLogin',"username","wallet"])
    },
    methods: {
      getGift(){
        let param = {
          type:11
        }
        activitySave({type:11}).then(res=>{
          console.log(res)
        })
      },
      getBenefit(){
        allactivitybenefit().then(res => {
          if (res.data.code === 0) {
            console.log(res.data.data)
            this.benefitData = res.data.data

          }
        });
      },
      getLevelInfo(){
        let that = this;
        this.$loading();
          memberlevellist().then(res => {
            if (res.data.code === 0) {
              console.log(res.data.data)
              this.levelData = res.data.data
              this.getTimes = res.data.data[this.userInfo.level].withdraw_times_limit
              this.getMax = res.data.data[this.userInfo.level].withdraw_money_limit
              this.$nextTick(() => {
                if(['10023'].includes(process.env.VUE_APP_PROJECT_NAME) || ['10033'].includes(process.env.VUE_APP_PROJECT_NAME)){
                  that.swipeObj = new Swiper('.swiper-container01', {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    centeredSlides: true,
                    allowTouchMove: true,
                    pagination: {
                      el: '.swiper-pagination',
                      type: 'fraction'
                    },
                    on: {
                      slideChange: function () {
                        that.levelActived = this.activeIndex
                        console.log(this.activeIndex);
                      },
                    },
                  })
                  that.swipeObj.slideTo(that.userInfo.level, 0, false)
                }else{
                  that.swipeObj = new Swiper('.swiper-container01', {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    centeredSlides: true,
                    allowTouchMove: true,
                    pagination: {
                      el: '.swiper-pagination',
                      type: 'fraction'
                    },
                    on: {
                      slideChange: function () {
                        that.levelActived = this.activeIndex
                        console.log(this.activeIndex);
                      },
                    },
                  })
                  that.swipeObj.slideTo(that.userInfo.level, 0, false)
                }

              })
            }
          });

      },
      levelChange(name,title){
        this.swipeObj.slideTo(name,300,false)
      },
      // 获取注册天数
      getRegisterDate() {
        if (this.userInfo.created_at) {
          let year = new Date(
            this.userInfo.created_at.replace(/-/g, "/")
          ).getFullYear();
          let month =
            new Date(this.userInfo.created_at.replace(/-/g, "/")).getMonth() + 1;
          let date = new Date(
            this.userInfo.created_at.replace(/-/g, "/")
          ).getDate();
          this.registerDate =
            parseInt(
              (new Date().getTime() -
                new Date(`${year}/${month}/${date}`).getTime()) /
              (24 * 60 * 60 * 1000)
            ) + 1;
        }
      },
      showName() {
        const {userInfo} = this;
        if (!userInfo) return "立即登录";
        const {register_type, username, mobile} = userInfo;
        // 手机号注册显示手机号中间四位隐藏
        if (register_type === 3 && mobile) {
          return mobile.substr(0, 3) + "****" + mobile.substr(-4);
        } else {
          return username;
        }
      },
      init() {
        Promise.all([
          this.getVipBasicInfo(),
          this.getVipLevelProfile(),
          // 1 特享 2 权益
          this.getVipPrivilege(1),
          this.getVipPrivilege(2),

        ])
      },
      lessThanOne (num) {
        return num > 1 ? 1 : num
      },
      getVipBasicInfo() {
        if (this.isLogin) {
          vipBasicInfo().then(res => {
            if (res.data.code === 0) {
              console.log(res)
              const {data} = res.data
              this.basicInfo = data;
              let p1 = this.lessThanOne(this.basicInfo.all_valid_bet / (this.basicInfo.need_valid_bet || 1))
              let p2 = this.lessThanOne(this.basicInfo.all_benefit_money / (this.basicInfo.next_benefit_money || 1))
              this.percentage = ((p1 + p2) / 2).toFixed(3)
              window.sessionStorage.setItem('myVipInfo', JSON.stringify(data))
            }
          })
        }
      },
      getVipLevelProfile() {
        const {rowsCached} = this
        const {game_cate_id} = this.platform
        if (rowsCached[game_cate_id]) {
          this.chartData.rows = rowsCached[game_cate_id]
          return
        }
        vipLevelProfile({
          game_cate_id
        }).then(res => {
          if (res.data.code === 0) {
            console.log(res.data.data)

            const rows = res.data.data
            // const rows = res.data.data.map(x => {
            //   x.level = 'lv' + x.level
            //   return x
            // })
            this.chartData.rows = rows
            this.rowsCached[game_cate_id] = rows
          }
        })
      },
      getVipPrivilege(type) {
        vipPrivilege({
          type
        }).then(res => {
          if (res.data.code === 0) {
            const {data} = res.data
            this[`privilege${type}`] = data
            console.log('活动', this.privilege1)
          }
        })
      },
      onPlatformSelected(item) {
        this.platform = item
        this.getVipLevelProfile()
      },
      goAnalysis() {
        // console.log(this.chartData,this.basicInfo,this.chartData.rows[this.basicInfo.level-1].proportion)
        if (this.isLogin) {
          this.$router.push({
            name: 'analysis',
            query: {proportion: this.chartData.rows[this.basicInfo.level - 1] ? this.chartData.rows[this.basicInfo.level - 1].proportion : 0}
          })
        } else {
          this.$router.push({name: 'login'})
        }
      },
      eventApply(item) {
        if (this.isLogin) {
          if (item.id) {
            this.applyTitle = item.title
            this.applyId = item.id
          } else {
            this.applyTitle = '[请后台配置数据] - 测试用活动标题' + item
            this.applyId = item
          }
          this.showPopup = true
        } else {
          this.$router.push({name: 'login'})
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .privilege {

    .head {
      height: 442px;

      background-size: 100% auto;

      .info {
        width: 100%;
        position: relative;
        display: flex;
        padding: 56px 60px 0 40px;
      }

      .info-photo {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        z-index: 2;
        margin-right: 20px;

        img {
          width: 100%;
        }
      }

      .styles__user {
        flex: 1;

        .styles__ftRank {
          font-size: 24px;
          color: #999;
        }

        .styles__ftUserName {
          font-size: 36px;
          color: #333;
          font-weight: bold;
          margin-bottom: 20px;

          .styles__usernameText {
            display: inline-block;
          }

          .level {
            display: inline-block;
            width: 60px;
            height: 24px;

            background-size: 100%;
            position: relative;
            margin-left: 20px;

            span {
              margin-top: 2px;
            }

            .level-num {
              position: absolute;
              left: 42px;
              top: 0;
              font-size: 20px;
              color: #fff;
            }

            span,
            img {
              display: inline-block;
              vertical-align: middle;
            }

            img {
              width: 44px;
              height: auto;
            }
          }
        }
      }

      .styles__logo {
        width: 106px;
        height: 138px;
        align-self: flex-start;
        .van-image {
          width: 100%;
        }
      }
    }
    .vip-progeress{
      margin-top: 80px;
      margin-bottom: 40px;
      padding: 0 60px;
      display: flex;
      align-items: center;
      .vip-progeress1,.vip-progeress2{
        height: 28px;
        line-height: 30px;
        width: 64px;
        border-radius: 28px;
        color: #fff;
        text-align: center;
        font-size: 18px;
      }
      .vip-progeress1{
        background: linear-gradient(#6DB1FF,@bg-gradient-color);
      }
      .vip-progeress2{
        background-color: #bbb;
      }
      /deep/ .van-progress{
        flex: 1;
        margin: 0 20px;
        height:16px;
        background:rgba(255,255,255,1);
        box-shadow:0px 4px 20px 0px rgba(104,166,255,0.2);
        border-radius:8px;
        .van-progress__pivot{
          top: -50px;
          color: #333;
          font-size: 18px;
          background-color: transparent!important;
          &:after{
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-top: 8px solid #333;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            bottom: -8px;
            left: 50%;
            margin-left: -8px;
          }
        }

      }
    }
    .vip-ck{
      font-size: 24px;
      color: #999;
      padding-left: 60px;
      margin-top: 10px;
      span{
        color: #333;
      }
    }
    .newvip-level{
      margin-top: 56px;
      /deep/ .van-tabs{
        .van-tabs__wrap{
          border-bottom: 0!important;
          position: relative;
          height: auto;
          padding-left: 16px;
          .van-tabs__nav--line{
            position: relative;
            padding-bottom: 0;
            .van-tabs__line{
              display: none;
            }
          }

          .van-tabs__nav{
            height: auto;
            line-height: initial;
            align-items: center;
            position: relative;

          }
          .van-tab{
            width:60px;
            height:28px;
            background:rgba(233,233,233,1);
            border-radius:16px;
            border:2px solid rgba(221,221,221,1);
            font-size:24px;
            line-height: 28px;
            text-align: center;
            flex-basis: auto!important;
            margin-right: 92px;
            position: relative;
            z-index: 1;
            &.van-tab--active{
              width: 82px;
              height: 40px;
              background: @bg-gradient-color;
              border: 4px solid #D9E6E1;
              line-height: 40px;
            }
            &:after{
              content: '';
              position: absolute;
              height: 4px;
              background: #E3E3E3;
              width: 98px;
              right: 100%;
              top: 50%;
              margin-top: -2px;
              z-index: 0;
            }
          }
        }
      }
      .swiper-container01{
        margin-top: 92px;
        padding-bottom: 124px;
        border-bottom: 20px solid #F5F6FA;
      }
      .swiper-pagination-fraction{
        color: #999;
        text-align: right;
        bottom: 30px;
        right: 66px;
        left: auto;
        /deep/ .swiper-pagination-current{
          color: #333;
        }
      }
      .swiper-slide{
        width: 570px;
      }
      .newvip-level-info{
        width: 570px;
        height: 250px;
        background-size: 100% auto;
        position: relative;
        .newvip-level-icon{
          position: absolute;
          width: 84px;
          right: 40px;
          top: 20px;
        }
        .newvip-level-tit{
          position: absolute;
          font-size: 60px;
          font-weight: bold;
          color: #fff;
          top: 70px;
          left: 60px;
          font-style: italic;
        }
        .newvip-level-con{
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0;
          div{
            text-align: center;
            flex: 1;
          }
          p:first-child{
            font-size: 28px;
            color: #fff;
            margin-bottom: 6px;
          }
          p:last-child{
            font-size: 20px;
            color: rgba(255,255,255,.6);
          }
        }
      }
      /deep/ .van-tab__pane-wrapper{
        width: 570px;
      }

    }
    .vip0zx{
      h2{
        display: flex;
        align-items: center;
        font-size: 40px;
        color: #333;
        margin: 24px 30px 28px;
        i{
          width:6px;
          height:32px;
          background:linear-gradient(179deg,rgba(64,128,255,1) 0%,rgba(151,212,251,1) 100%);
          border-radius:3px;
          margin-right: 16px;
        }
      }
      ul{
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        padding-left: 54px;
        li{
          width: 40%;
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          margin-bottom: 46px;
          img{
            width: 60px;
            margin-right: 28px;
          }
          p{
            flex: 1;
          }
          span{
            display: block;
            font-size: 34px;
            color: #666;
          }
          i{
            font-style: normal;
            font-size: 24px;
            color: #999;
          }
          &:nth-child(odd){
            width: 55%;
          }
        }
      }
    }
    .to-vipdet{
      font-size: 28px;
      color: @bg-gradient-color;
      text-align: center;
      background: #F5F6FA;
      padding: 60px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 20px;
        margin-left: 10px;
      }
    }
  }

  .banner {
    margin-top: @space-gap;
  }

  .vip-info {
    text-align: center;
    color: @text-color-3;
    font-size: 28px;
    margin-bottom: @space-gap;

    .level-icon {
      width: 120px;
    }

    h3 {
      font-weight: 500;
      margin: @space-gap;

      span {
        color: #fff;
        padding-left: 10px;
      }
    }
  }

  .my-bets {
    display: flex;
    flex-wrap: wrap;
    border: 2px solid #353435;
    border-radius: 5px;
    margin: @space-gap 0;

    .item {
      width: 50%;
      display: flex;
      // flex-wrap: wrap;
      flex-direction: column;
      // align-items: center;
      justify-content: center;
      text-align: center;
      border-left: 2px solid #353435;
      border-top: 2px solid #353435;
      padding: @space-gap;

      &:nth-child(2n+1) {
        border-left: none;
      }

      &:first-child,
      &:nth-child(2) {
        border-top: none;
      }

      h3 {
        color: #fff;
        font-size: 32px;
        font-weight: 500;
        margin: 0 0 20px;
      }

      > span {
        display: block;
        width: 100%;
        padding-top: 20px;
        color: #4D4C4D;
      }
    }
  }

  .button {
    width: 100%;
    display: block;
    background: @bg-gradient-color;
    line-height: 88px;
    border-radius: 8px;
    color: #1E1E1E;
    font-size: 28px;
    font-weight: 500;
  }

  .chart {
    position: relative;
    // margin-bottom: -80px;
    margin-top: -40px;
  }

  .platform {
    width: 100%;
    position: absolute;
    left: 0;
    // top: 20px;
    bottom: 20px;
    display: flex;
    // justify-content: flex-start;
    justify-content: center;
    align-items: center;

    label {
      background-color: @bg-card-color;
      color: #666;
      border-radius: 4px;
      line-height: 50px;
      padding: 0 10px;
      min-width: 80px;
      font-size: 24px;
      text-align: center;
      margin-right: 10px;

      &.active {
        background-color: @primary-color;
        color: #222;
      }
    }
  }

  .section {
    color: #fff;
    font-size: 28px;
    margin-top: @space-gap;

    > h2 {
      font-size: 32px;
      font-weight: 500;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 @space-gap;

      &:before,
      &:after {
        content: '';
        width: 40px;
        height: 2px;
        border-radius: 4px;
        background-color: @primary-color;
        margin: 0 30px;
      }
    }

    .grid-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: flex-start;
      background-color: @bg-card-color;
      padding: @space-gap;
      border-radius: 8px;

      .item {
        width: 140px;
        text-align: center;
        padding: 10px;

        p {
          line-height: 40px;
          font-size: 28px;
        }

        /deep/ .van-image {
          // width: 48px;
          // height: 48px;
          width: 48px;
          height: 48px;
          display: inline-block;
          margin: 10px;
        }
      }
    }

    .flex-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      margin-left: -@space-gap;

      .item {
        width: calc(50% - @space-gap);
        margin-left: @space-gap;
        margin-bottom: @space-gap;
        padding-bottom: @space-gap;
        text-align: center;
        border: 2px solid @border-color-base;
        background-color: @bg-card-color;
        border-radius: 8px;
        overflow: hidden;

        h3 {
          font-size: 28px;
          font-weight: 500;
          margin: @space-gap 0;
        }

        p {
          font-size: 28px;
        }

        /deep/ .van-image {
          width: 330px;
          height: 180px;
        }

        button {
          display: inline-block;
          line-height: 64px;
          height: 64px;
          border: 2px solid @primary-color;
          color: @primary-color;
          font-weight: 500;
          padding: 0 40px;
          background-color: transparent;
          border-radius: 4px;
        }
      }
    }
  }

  .custom {
    background-color: @bg-card-color;
    padding: @space-gap * 1.5 @space-gap;
    text-align: center;
    color: @text-color-3;
    line-height: 36px;
    font-weight: 500;
    margin-bottom: @space-gap;
    border-radius: 8px;

    .van-image {
      width: 284px;
      margin: 0 auto;
      // height: 36px;
      margin-bottom: @space-gap;
    }

    > h3 {
      margin: 0 0 20px 0;
      color: @primary-color;
      font-size: 40px;
    }
  }
</style>
