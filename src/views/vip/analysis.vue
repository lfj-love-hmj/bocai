<template>
  <div class="vip-page">
    <van-nav-bar
      class="m-header"
      right-text="立即存款"
      left-arrow
      :title="title"
      :fixed="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="m-body gap">
      <div class="vip-info">
        <van-image class="banner" :src="require(`@assets/img3_0/vip/level/LV${basicInfo.level || 0}@2x.png`)" />
        <h3>当前等级<span>{{ basicInfo.level_name || 'lv0新手上路' }}</span></h3>
        <p>等级越高服务越多哦</p>
        <div class="my-bets">
          <div class="item">
            <p>累计有效投注</p>
            <h3>{{ basicInfo.all_valid_bet | currency('¥') }}</h3>
          </div>
          <div class="item">
            <p>累计洗码金额</p>
            <h3>{{ basicInfo.all_wash_code_money | currency('¥') }}</h3>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="grid-list" :class="`num${basicInfo.privilege_list && basicInfo.privilege_list.length || '0'}`">
          <!-- <div
            class="item"
            v-for="(item, index) in basicInfo.privilege_list"
            :key="index"
          >
            <van-image width="44" height="44" :src="item.h5_index_pic" />
            <p>{{ item.title }}</p>
          </div> -->
          <div
            class="item"
            v-for="(item, index) in privilege"
            :key="index"
          >
            <van-image width="44" height="44" :src="item.img" />
            <p>{{ item.name1}}</p>
            <p>{{item.name2 || `${$route.query.proportion}%`}}</p>
          </div>
        </div>
      </div>

      <div class="chart" v-if="$projectname==='10057'">
        <h2>我的投注</h2>
        <ve-histogram
            :data="chartData"
            :settings="chartOptions"
            :extend="chartExtend02"
        />
        <div class="days">
          <van-dropdown-menu :overlay="false">
            <van-dropdown-item v-model="value1" :options="option1" @change="onDayChange" />
          </van-dropdown-menu>
        </div>
      </div>
      <div class="chart" v-else>
        <h2>我的投注</h2>
        <ve-histogram
          :data="chartData"
          :settings="chartOptions"
          :extend="chartExtend"
        />
        <div class="days">
          <label
            v-for="item in days"
            :key="item"
            @click="onDayChange(item)"
            :class="{ active: day === item }"
          >{{ item }}天</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { BarChart } from './components/BarChart'
import VeHistogram from 'v-charts/lib/histogram.common'
import { mybetstat } from '@/api/vip'
export default {
  name: 'MyBetStat',
  components: {
    // BarChart
    VeHistogram
  },
  data () {
    return {
      title: '投注分析',
      basicInfo: {},
      privilege:[
        {
          img:require('@assets/img3_0/vip/icon@2x.png'),
          name1:'一键洗码',
          name2:null,
        },
        {
          img:require('@assets/img3_0/vip/icon2@2x.png'),
          name1:'专属客服',
          name2:'1对1服务'
        },
        {
          img:require('@assets/img3_0/vip/icon1@2x.png'),
          name1:'VIP存取款',
          name2: '优先特权'
        },
      ],
      days: [3, 5, 10, 15],
      day: 3,
      rowsCached: {},
      chartData: {
        columns: ['date', 'bet_money'],
        rows: []
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        labelMap: {
          'bet_money': '有效投注额'
        }
      },
      chartExtend: {
        color: ['#282828', '#282828', '#282828'],
        legend: {
          show: false
        },
        tooltip:{
          axisPointer: {
            type: 'none'
          }
        },
        series:{
          emphasis:{
            itemStyle:{
              color:this.$colorjs.baseColor
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#282828'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#282828'
            }
          },
          axisLabel: {
            formatter: (value) => {
              if (value > 9999) {
                return `${Math.floor(value / 10000)}万`
              } else {
                return value
              }
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
              color: '#282828'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#282828'
            }
          },
          z: 10,
          axisLabel: {
            formatter: (value) => {
              return value.slice(-5)
            },
            // inside: true,
            // textStyle: {
            //   color: '#fff'
            // },
            showMaxLabel: true,
            fontSize: 14,
            fontFamily: '"Din Alternate", Quicksand, "PingFang SC"',
            color: '#ccc',
            // interval:1
          }
        }
      },
      chartExtend02: {
        color: ['#022069', '#022069', '#022069'],
        legend: {
          show: false
        },
        tooltip:{
          axisPointer: {
            type: 'none'
          }
        },
        series:{
          emphasis:{
            itemStyle:{
              color:this.$colorjs.baseColor
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#022069'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#022069'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#022069'
            }
          },
          axisLabel: {
            formatter: (value) => {
              if (value > 9999) {
                return `${Math.floor(value / 10000)}万`
              } else {
                return value
              }
            },
            showMaxLabel: true,
            fontSize: 14,
            fontFamily: '"Din Alternate", Quicksand, "PingFang SC"',
            color: '#666'
          }
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#022069'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#022069'
            }
          },
          z: 10,
          axisLabel: {
            formatter: (value) => {
              return value.slice(-5)
            },
            // inside: true,
            // textStyle: {
            //   color: '#fff'
            // },
            showMaxLabel: true,
            fontSize: 14,
            fontFamily: '"Din Alternate", Quicksand, "PingFang SC"',
            color: '#666',
            // interval:1
          }
        }
      },
      option1: [
        { text: '3天', value: 3 },
        { text: '5天', value: 5 },
        { text: '10天', value: 10 },
        { text: '15天', value: 15 },
      ],
      value1: 3,
    }
  },
  created () {
    this.basicInfo = JSON.parse(window.sessionStorage.getItem('myVipInfo') || '{}')
    console.log(this.basicInfo)
    this.getMyBetStat()
  },
  methods: {
    getMyBetStat () {
      const { day, rowsCached } = this
      if (rowsCached[day]) {
        this.chartData.rows = rowsCached[day]
        return
      }
      mybetstat({ days: day }).then(res => {
        const { code, data } = res.data
        if (code === 0) {
          this.chartData.rows = data
          this.rowsCached[day] = data
        }
      })
    },
    onDayChange (day) {
      this.day = day
      this.getMyBetStat()
    },
    onClickLeft () {
      this.$router.push({
        name: 'vip'
      })
    },
    onClickRight () {
      this.$router.push({
        name: 'deposit'
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@assets/styles/vip/index.less';
.vip-page{
  .m-body{
    padding-top: 88px;
  }
}
.m-header.van-nav-bar{
  background-color: #1e1e1e;
  /deep/ .van-nav-bar__text{
    color: @primary-color;
    font-weight: 500;
  }
}

.vip-info{
  text-align: center;
  color: @text-color-3;
  font-size: 28px;
  margin-bottom: @space-gap;
  h3{
    font-weight: 500;
    margin: @space-gap;
    span{
      color: #fff;
      padding-left: 10px;
    }
  }
}
.chart{
  position: relative;
  margin-top: 60px;
  h2 {
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    line-height: 50px;
    margin: 0;
  }
  // .ve-histogram{
  //   // margin-top: -50px;
  // }
}
.days{
  width: 100%;
  position: absolute;
  right: 0;
  top: 80px;
  display: flex;
  // justify-content: flex-start;
  justify-content: flex-end;
  align-items: center;
  label{
    background-color: #282828;
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
      margin: 20px 0 0;
    }
    >span{
      display: block;
      width: 100%;
      padding-top: 20px;
      color: #4D4C4D;
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
      flex:1;
      // width: 140px;
      text-align: center;
      padding: 10px;
      p{
        line-height: 40px;
      }
      /deep/ .van-image{
        // width: 48px;
        // height: 48px;
        max-width: 48px;
        max-height: 48px;
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
      background-color: #282828;
      border-radius: 8px;
      overflow: hidden;
      h3 {
        font-size: 28px;
        font-weight: 500;
        margin: @space-gap 0;
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
</style>
