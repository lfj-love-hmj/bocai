<style scoped lang="less">
    .province-city.report-filter-time {
        display: flex;
        margin-top: 30px;
        .input {
            background: none;
            flex: 1;
            padding: 0;
            border: none;
            color: #CCCCCC;
            font-size: 32px;

        }
        .placeholder {
            font-size: 32px;
            font-weight: 400;
            color: rgba(82, 81, 82, 1);
        }
        .right {
            padding-right: @margin-10;
        }
        .aagames-button-box{
          margin-bottom: 0;
          height: 80px;
          width: 254px;
          padding: 0 40px;
          .aagames-button{
            width: 174px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            i,span{
              display: inline-block;
              line-height: 1;
            }
            i{
              font-size: 40px;
              margin-right: 10px;
              position: relative;
              top: 10px;
              font-weight: bold;
            }
          }
        }
    }

    .select {
        font-size: 24px;
        margin-left: 30px;
        width: 476px;
        .title {
            height: 44px;
            font-size: 32px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 44px;
            margin: 40px 20px 20px;
        }
        .van-row {
            box-sizing: border-box;
            text-align: center;
            display: flex;
            justify-content: space-between;
            border-radius: 12px;
            padding: 10px;
            border: 1px solid rgba(235, 235, 235, 0.08);
            >span{
              color: #fff;
              margin: 0 10px;
              display: inline-block;
              line-height: 60px;
              font-size: 30px;
            }
            .van-col {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 28px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(34, 34, 34, 1);
            }
            .commission {
                width: 202px;
                height: 92px;
                border-radius: 6px;
                border: 1px solid rgba(235, 235, 235, 0.08);
            }
            .col-s,
            .col-e {
                color: #fff;
                height: 60px;
                border-radius: 6px;
                // padding: 0 20px;
                // border: 1px solid rgba(235, 235, 235, 0.08);
            }
            i {
                color: #fff;
                line-height: 60px;
            }
        }
        .days {
            display: flex;
            flex-wrap: wrap;
            ._day {
                flex: 0 0 33.3%;
                padding: 15px;
                box-sizing: border-box;
            }
            .day {
                text-align: center;
                line-height: 80px;
                height: 80px;
                border-radius: 8px;
                border: 2px solid rgba(255, 255, 255, 0.08);
                font-size: 32px;
                font-weight: 400;
                color: @text-color-light;
            }
            .active{
                border: 2px solid @primary-color;
                background-color: @primary-color;
                font-weight:600;
                color:@button-color-active;
            }
        }
    }
</style>
<template>
    <div class="province-city report-filter-time">
          <div class="select">
            <van-row style="margin: 0">
              <van-icon name="calender-o" size="18" />
              <van-col
                class="col-s"
                span="12"
                @click.native="showStartDate = true"
              >
                {{ discountData.start_text }}
              </van-col>
              <span>-</span>
              <van-col class="col-e" span="12" @click.native="showEndDate = true">
                {{ discountData.end_text }}
              </van-col>
            </van-row>
            <!-- <div class="days" v-if="type === 'date'">
              <div class="_day" v-for="(i, index) in days" :key="index">
                <div class="day" :class="{active:i.value == dayValue}" @click="onDay(i.value)">{{i.name}}</div>
              </div>
            </div> -->
          </div>
          <div class="aagames-button-box">
            <button class="aagames-button" type="button" @click="onConfirm">
              <div>
                <van-icon name="search" />
                <span>确定</span> 
              </div>
            </button>
          </div>
        <!-- 开始时间 -->
        <van-popup v-model="showStartDate" position="bottom">
          <van-datetime-picker v-model="currentDate"
            :min-date='minDate'
            :max-date="maxDate"
            @confirm="onConfirmStartDate" @cancel="onCancelStartDate" :type="type"/>
        </van-popup>

        <!-- 结束时间 -->
        <van-popup v-model="showEndDate" position="bottom">
          <van-datetime-picker v-model="currentDate"
            :min-date='minDate'
            :max-date="maxDate"
            @confirm="onConfirmEndDate" @cancel="onCancelEndDate" :type="type"/>
        </van-popup>
    </div>
</template>

<script>

  import moment from 'moment'
  import Lheader from '@/components/l-header'

  export default {
    components: {
      Lheader
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'year-month'
      }
    },
    watch: {
      value (value) {
        this.isShow = value
      }
    },
    data () {
      var self = this
      return {
        dayValue: '',
        province: '',
        city: '',
        isShow: false,
        days: [{
          name: '全部',
          value: ''
        }, {
          name: '一天',
          value: '1'
        }, {
          name: '三天',
          value: '3'
        }, {
          name: '十五天',
          value: '15'
        }, {
          name: '三十天',
          value: '30'
        }
        ],
        areaData: {},

        showStartDate: false,
        showEndDate: false,
        currentDate: new Date(),
        minDate: new Date(2017, 0),
        maxDate: new Date(),
        discountData: {
          start_text: '开始时间',
          end_text: '结束时间',
          page: 1,
          access_token: window.localStorage.agToken,
          size: 200,
          start_date: '',
          end_date: '',
        },
        yaboBoxMiddle:['10024'].includes(process.env.VUE_APP_PROJECT_NAME),
        esportBoxMiddle:['10050'].includes(process.env.VUE_APP_PROJECT_NAME)
      }
    },
    methods: {
      getDateStr (value) {
        return moment(value).format(this.type === 'date' ? 'YYYY-MM-DD' : 'YYYY-MM')
      },
      gettime () {
        return this.getDateStr(new Date())
      },
      onConfirmStartDate (value) {
        let date = this.getDateStr(value)

        this.discountData.start_date = date
        this.discountData.start_text = date
        this.showStartDate = false
      },
      onConfirmEndDate (value) {
        let date = this.getDateStr(value)
        this.discountData.end_date = date
        this.discountData.end_text = date //this.discountData.end_date
        this.showEndDate = false
      },
      onDay (value) {
        this.dayValue = value
        this.onConfirmStartDate(moment().subtract(value - 1, 'days'))
        this.onConfirmEndDate(new Date)


      },
      onCancelStartDate (value) {
        this.showStartDate = false
      },
      onCancelEndDate (value) {
        this.showEndDate = false
      },
      openPopup () {
        this.isShow = true
      },
      onChange (picker, values) {
        picker.setColumnValues(1, this.areaData[values[0]])
      },
      onConfirm () {
        this.$emit('onConfirm', this.discountData)
        this.onCancel()
      },
      onCancel () {
        this.$emit('input', false)
      },
    },
    mounted () {
      // this.getColumns()
    }
  }
</script>

