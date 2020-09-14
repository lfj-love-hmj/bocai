<template>
  <div class="privilege">
    <van-image class="banner" :src="require('@assets/img3_0/vip/banner@2x.png')" />
    <div class="vip-info">
      <van-image class="level-icon" :src="require(`@assets/img3_0/vip/level/LV${basicInfo.level || 0}@2x.png`)" />
      <h3>当前等级<span>{{ basicInfo.level_name || 'lv1新手上路' }}</span></h3>
      <p>等级越高服务越多哦</p>
      <div class="my-bets">
        <div class="item">
          <h3>{{ basicInfo.week_valid_bet | currency('') }}</h3>
          <p>本周有效投注额</p>
        </div>
        <div class="item">
          <h3>{{ basicInfo.need_valid_bet | currency('') }}</h3>
          <p>距离下一级还差</p>
        </div>
        <div class="item">
          <h3>{{ basicInfo.all_benefit_money | currency('') }}</h3>
          <p>已领取红利</p>
        </div>
        <div class="item">
          <h3>{{ basicInfo.next_benefit_money | currency('') }}</h3>
          <p>升级后红利</p>
        </div>
      </div>
      <a @click="goAnalysis" class="button">查看投注额分析</a>
    </div>

    <!-- <BarChart :data="chartData" /> -->
    <!-- <chart
      :options="chartData"
      :init-options="initOptions"
      ref="bar"
      theme="ovilia-green"
      autoresize
    /> -->
    <div class="chart">
      <ve-histogram
        :data="chartData"
        :settings="chartOptions"
        :extend="aoMenUi.includes($projectname) ? chartExtend1 : chartExtend"
      />
      <div class="platform">
        <label
          v-for="(item, index) in platforms"
          :key="index"
          @click="onPlatformSelected(item)"
          :class="{ active: item.game_cate_id === platform.game_cate_id }"
        >{{ item.game_cate_name }}</label>
      </div>
    </div>

    <div class="section">
      <h2>VIP权益</h2>
      <div class="grid-list">
        <div class="item">
          <van-image v-if="$projectname==='10057'" :src="$imgs['vip/icon1.1@2x']" fit="contain" />
          <van-image v-else :src="require('@assets/img3_0/vip/icon1@2x.png')" fit="contain" />
          <p>存取款优先</p>
        </div>
        <div class="item">
          <van-image v-if="$projectname==='10057'" :src="$imgs['vip/icon2.1@2x']" fit="contain" />
          <van-image v-else :src="require('@assets/img3_0/vip/icon2@2x.png')" fit="contain" />
          <p>专属客服经理</p>
        </div>
        <div class="item">
          <van-image :src="require('@assets/img3_0/vip/icon3@2x.png')" fit="contain" />
          <p>空降美女</p>
        </div>
        <div class="item">
          <van-image :src="require('@assets/img3_0/vip/icon4@2x.png')" fit="contain" />
          <p>VIP游艇会</p>
        </div>
        <div class="item">
          <van-image :src="require('@assets/img3_0/vip/icon5@2x.png')" fit="contain" />
          <p>晋级礼金</p>
        </div>
        <div class="item">
          <van-image :src="require('@assets/img3_0/vip/icon6@2x.png')" fit="contain" />
          <p>专属线路</p>
        </div>
        <div class="item">
          <van-image :src="require('@assets/img3_0/vip/icon7@2x.png')" fit="contain" />
          <p>定制福利</p>
        </div>
        <div class="item">
          <van-image :src="require('@assets/img3_0/vip/icon8@2x.png')" fit="contain" />
          <p>VIP专属活动</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>VIP特享</h2>
      <div class="flex-wrap">
        <template v-if="privilege1.length>0">
        <div class="item" v-for="(item, index) in privilege1" :key="index">
          <!-- <van-image :src="item.h5_index_pic" fit="cover" /> -->
          <div class="item-image" :style="{backgroundImage: `url(${item.h5_index_pic})`}"></div>
          <h3>{{ item.title }}</h3>
          <button @click="eventApply(item)">报名参加</button>
        </div>
        </template>
        <template v-else>
          <!-- <div class="item" v-for="n in 10" :key="n">
            <van-image :src="xx" />
            <h3>线下赌厅</h3>
            <button @click="eventApply(n)">报名参加</button>
          </div> -->
        </template>
      </div>
    </div>

    <div class="section">
      <div class="custom">
        <template v-if="['wanqu'].indexOf($projectname) !== -1">
          <van-image :src="require('@assets/img3_0/vip/slogan@2x.png')" />
        </template>
        <template v-else>
          <h3>VIP定制服务</h3>
        </template>
        <p>满足你各种定制化需求</p>
        <p>只有你想不到的没有我们做不到的</p>
        <p>联系专属客服解决您的一切需求</p>
      </div>
    </div>

    <EventApply
      :title="applyTitle"
      :id="applyId"
      :show.sync="showPopup"
      :type="2"
    />
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
// import VePie from 'v-charts/lib/pie.common'

// Vue.component(VeLine.name, VeLine)
// Vue.component(VeBar.name, VeBar)
// Vue.component(VeHistogram.name, VeHistogram)
// Vue.component(VePie.name, VePie)
import EventApply from './components/EventApply'
import {
  vipBasicInfo,
  vipLevelProfile,
  vipPrivilege
} from '@/api/vip'
import { indexbanner } from '@/api/home'
import {
  GAME_CATE_ID_CASINO,
  GAME_CATE_ID_SLOTS,
  GAME_CATE_ID_FISHING,
  GAME_CATE_ID_LOTTERY,
  GAME_CATE_ID_CHESS,
  GAME_CATE_ID_SPORTS,
  GAME_CATE_ID_ESPORTS
} from '@/store/types'
import { mapState } from 'vuex'
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
  data () {
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
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        labelMap: {
          'max_money': '有效投注额',
          'proportion': '可享受洗码'
        }
      },
      chartExtend: {
        // color: ['#2A293E', '#2A293E', '#2A293E'],
        color: ['10057'].includes(process.env.VUE_APP_PROJECT_NAME)?['#022069', '#022069', '#022069']:['#393939', '#393939', '#393939'],
        legend: {
          show: false
        },
        tooltip:{
          axisPointer: {
            type: 'none',
          },
          formatter: `Lv{b}<br />{a0}: {c}`
        },
        series: {
          // label: {
          //   show: true,
          //   position: 'top',
          //   // rotate: 90,
          //   // align: 'left',
          //   align: 'center',
          //   verticalAlign: 'middle',
          //   // {a}: series name.
          //   // {b}: the name of a data item.
          //   // {c}: the value of a data item.
          //   // {@xxx}: the value of a dimension named'xxx', for example,{@product}refers the value of'product'` dimension.
          //   // {@[n]}: the value of a dimension at the index ofn, for example,{@[3]}` refers the value at dimensions[3].
          //   // formatter: '{c}  {name|{a}}',
          //   // formatter: '返点{@proportion}',
          //   formatter: (value) => {
          //     const { dataIndex } = value
          //     const { rows } = this.chartData
          //     return `${rows[dataIndex]['proportion']}%\n洗码`
          //     // return `${rows[dataIndex]['proportion']}%`
          //     // return `${JSON.stringify(value)}\n洗码\n0.5%`
          //   },
          //   distance: 15,
          //   fontSize: 14,
          //   fontFamily: '"Din Alternate", Quicksand, "PingFang SC"',
          //   color: '@primary-color'
          // },
          barMaxWidth: 20,
          emphasis:{
            itemStyle:{
              color:this.$colorjs.baseColor
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#2A293E'
            },
            symbol: ['none', 'arrow'],
            symbolSize: [10, 20]
          },
          splitLine: {
            lineStyle: {
              color: '#2A293E'
            }
          },
          axisLabel: {
            // formatter: (value) => {
            //   if (value < 100) {
            //     return '开户'
            //   } else if (value > 9999) {
            //     return `${Math.floor(value / 10000)}万`
            //   } else {
            //     return value
            //   }
            // },
            formatter: (value) => {
              return `${value}%`
            },
            showMaxLabel: true,
            fontSize: 14,
            fontFamily: '"Din Alternate", Quicksand, "PingFang SC"',
            color: '#ccc'
          }
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#2A293E'
            },
            symbol: ['none', 'arrow'],
            symbolSize: [10, 20]
          },
          splitLine: {
            lineStyle: {
              color: '#2A293E'
            }
          },
          z: 10,
          axisLabel: {
            formatter: (value) => {
              return `lv${value}`
            },
            // inside: true,
            // textStyle: {
            //   color: '#fff'
            // },
            showMaxLabel: true,
            fontSize: 14,
            fontFamily: '"Din Alternate", Quicksand, "PingFang SC"',
            color: '#ccc'
          }
        }
      },
      chartExtend1: {
        // color: ['#2A293E', '#2A293E', '#2A293E'],
        color: ['#393939', '#393939', '#393939'],
        legend: {
          show: false
        },
        tooltip:{
          axisPointer: {
            type: 'none'
          },
          formatter: `Lv{b}<br />{a0}: {c}`
        },
        series: {
          // label: {
          //   show: true,
          //   position: 'top',
          //   // rotate: 90,
          //   // align: 'left',
          //   align: 'center',
          //   verticalAlign: 'middle',
          //   // {a}: series name.
          //   // {b}: the name of a data item.
          //   // {c}: the value of a data item.
          //   // {@xxx}: the value of a dimension named'xxx', for example,{@product}refers the value of'product'` dimension.
          //   // {@[n]}: the value of a dimension at the index ofn, for example,{@[3]}` refers the value at dimensions[3].
          //   // formatter: '{c}  {name|{a}}',
          //   // formatter: '返点{@proportion}',
          //   formatter: (value) => {
          //     const { dataIndex } = value
          //     const { rows } = this.chartData
          //     return `${rows[dataIndex]['proportion']}%\n洗码`
          //     // return `${rows[dataIndex]['proportion']}%`
          //     // return `${JSON.stringify(value)}\n洗码\n0.5%`
          //   },
          //   distance: 15,
          //   fontSize: 14,
          //   fontFamily: '"Din Alternate", Quicksand, "PingFang SC"',
          //   color: '@primary-color'
          // },
          barMaxWidth: 20,
          emphasis:{
            itemStyle:{
              color:this.$colorjs.baseColor
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#2A293E'
            },
            symbol: ['none', 'arrow'],
            symbolSize: [10, 20]
          },
          splitLine: {
            lineStyle: {
              color: '#2A293E'
            }
          },
          axisLabel: {
            // formatter: (value) => {
            //   if (value < 100) {
            //     return '开户'
            //   } else if (value > 9999) {
            //     return `${Math.floor(value / 10000)}万`
            //   } else {
            //     return value
            //   }
            // },
            formatter: (value) => {
              return `${value}%`
            },
            showMaxLabel: true,
            fontSize: 14,
            fontFamily: '"Din Alternate", Quicksand, "PingFang SC"',
            color: '#000'
          }
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#2A293E'
            },
            symbol: ['none', 'arrow'],
            symbolSize: [10, 20]
          },
          splitLine: {
            lineStyle: {
              color: '#2A293E'
            }
          },
          z: 10,
          axisLabel: {
            formatter: (value) => {
              return `lv${value}`
            },
            // inside: true,
            // textStyle: {
            //   color: '#fff'
            // },
            showMaxLabel: true,
            fontSize: 14,
            fontFamily: '"Din Alternate", Quicksand, "PingFang SC"',
            color: '#000'
          }
        }
      },
      aoMenUi:['10009','10010','10011','10012','10034']
      // chartDataOriginal:
    }
  },
  async created () {
    this.init()
    const res = await indexbanner(process.env.VUE_APP_MERCHANT_NO,{game_cate_id: 1001})
    console.log(res)
  },
  computed: {
    ...mapState('users', ['userInfo', 'isLogin'])
  },
  methods: {
    init () {
      Promise.all([
        this.getVipBasicInfo(),
        this.getVipLevelProfile(),
        // 1 特享 2 权益
        this.getVipPrivilege(1),
        this.getVipPrivilege(2)
      ])
    },
    getVipBasicInfo () {
      if(this.isLogin) {
        vipBasicInfo().then(res => {
          if (res.data.code === 0) {
            const { data } = res.data
            this.basicInfo = data
            window.sessionStorage.setItem('myVipInfo', JSON.stringify(data))
          }
        })
      }
    },
    getVipLevelProfile () {
      const { rowsCached } = this
      const { game_cate_id } = this.platform
      if (rowsCached[game_cate_id]) {
        this.chartData.rows = rowsCached[game_cate_id]
        return
      }
      vipLevelProfile({
        game_cate_id
      }).then(res => {
        if (res.data.code === 0) {
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
    getVipPrivilege (type) {
      vipPrivilege({
        type
      }).then(res => {
        if (res.data.code === 0) {
          const { data } = res.data
          this[`privilege${type}`] = data
          console.log('活动',this.privilege1)
        }
      })
    },
    onPlatformSelected (item) {
      this.platform = item
      this.getVipLevelProfile()
    },
    goAnalysis () {
      // console.log(this.chartData,this.basicInfo,this.chartData.rows[this.basicInfo.level-1].proportion)
      if (this.isLogin) {
        this.$router.push({ name: 'analysis',query:{proportion:this.chartData.rows[this.basicInfo.level-1]?this.chartData.rows[this.basicInfo.level-1].proportion:0}})
      } else {
        this.$router.push({ name: 'login' })
      }
    },
    eventApply (item) {
      if(this.isLogin) {
        if (item.id) {
          this.applyTitle = item.title
          this.applyId = item.id
        } else {
          this.applyTitle = '[请后台配置数据] - 测试用活动标题' + item
          this.applyId = item
        }
        this.showPopup = true
      } else {
        this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.banner{
  margin-top: @space-gap;
}

.vip-info{
  text-align: center;
  color: @text-color-3;
  font-size: 28px;
  margin-bottom: @space-gap;
  .level-icon{
    width: 120px;
  }
  h3{
    font-weight: 500;
    margin: @space-gap;
    span{
      color: #fff;
      padding-left: 10px;
    }
  }
}

.my-bets{
  display: flex;
  flex-wrap: wrap;
  border: 2px solid @border-color;
  border-radius: 5px;
  margin: @space-gap 0;
  .item{
    width: 50%;
    display: flex;
    // flex-wrap: wrap;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    text-align: center;
    border-left: 2px solid @border-color;
    border-top: 2px solid @border-color;
    padding: @space-gap;
    &:nth-child(2n+1) {
      border-left: none;
    }
    &:first-child,
    &:nth-child(2) {
      border-top: none;
    }
    h3{
      color: #fff;
      font-size: 32px;
      font-weight: 500;
      margin: 0 0 20px;
    }
    >span{
      display: block;
      width: 100%;
      padding-top: 20px;
      color: #4D4C4D;
    }
  }
}

.button{
  width: 100%;
  display: block;
  background: @bg-gradient-color;
  line-height: 88px;
  border-radius: 8px;
  color: #1E1E1E;
  font-size: 28px;
  font-weight: 500;
}

.chart{
  position: relative;
  // margin-bottom: -80px;
  margin-top: -40px;
}
.platform{
  width: 100%;
  position: absolute;
  left: 0;
  // top: 20px;
  bottom: 20px;
  display: flex;
  // justify-content: flex-start;
  justify-content: center;
  align-items: center;
  label{
    background-color: @bg-card-color;
    color: #666;
    border-radius: 4px;
    line-height: 50px;
    padding: 0 10px;
    min-width: 80px;
    font-size: 24px;
    text-align: center;
    margin-right: 10px;
    &.active{
      background-color: @primary-color;
      color: #222;
    }
  }
}

.section{
  color: #fff;
  font-size: 28px;
  margin-top: @space-gap;
  >h2{
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 @space-gap;
    &:before,
    &:after{
      content: '';
      width: 40px;
      height: 2px;
      border-radius: 4px;
      background-color: @primary-color;
      margin: 0 30px;
    }
  }
  .grid-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    background-color: @bg-card-color;
    padding: @space-gap;
    border-radius: 8px;
    .item{
      width: 140px;
      text-align: center;
      padding: 10px;
      p{
        line-height: 40px;
        font-size: 28px;
      }
      /deep/ .van-image{
        // width: 48px;
        // height: 48px;
        width: 48px;
        height: 48px;
        display: inline-block;
        margin: 10px;
      }
    }
  }
  .flex-wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: -@space-gap;
    .item{
      width: calc(50% - @space-gap);
      margin-left: @space-gap;
      margin-bottom: @space-gap;
      padding-bottom: @space-gap;
      text-align: center;
      border: 2px solid @border-color-base;
      background-color: @bg-card-color;
      border-radius: 10px;
      overflow: hidden;
      .item-image{
        width: 100%;
        height: 180px;
        // background: #fff;
        background-position: center;
        background-size: cover;
      }
      h3 {
        font-size: 28px;
        font-weight: 500;
        margin: @space-gap 0;
      }
      p{
        font-size: 28px;
      }
      /deep/.van-image{
        width:102%;
        height:180px;
        display: flex;
        justify-content: center;
        .van-image__img{
          height: initial;
        }
      }
      button{
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

.custom{
  background-color: @bg-card-color;
  padding: @space-gap * 1.5 @space-gap;
  text-align: center;
  color: @text-color-3;
  line-height: 36px;
  font-weight: 500;
  margin-bottom: @space-gap;
  border-radius: 8px;
  .van-image{
    width: 284px;
    margin:0 auto;
    // height: 36px;
    margin-bottom: @space-gap;
  }
  >h3{
    margin: 0 0 20px 0;
    color: @primary-color;
    font-size: 40px;
  }
}
</style>
