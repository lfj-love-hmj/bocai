<template>
  <div>
    <lheader :title="title" path="111"></lheader>
    <div class="container">
    <div class="main">
      <div class="select">
        <van-row>
          <van-col span="8" @click.native="show = true">{{ discount }} <i></i></van-col>
          <van-col span="8" @click.native="showStartDate = true">{{ discountData.start_time }} <i></i></van-col>
          <!-- <van-col span="1" class="line"></van-col> -->
          <van-col span="8" @click.native="showEndDate = true">{{ discountData.end_time }} <i></i></van-col>
        </van-row>
      </div>
      <div class="list"  v-show="list.length !== 0">
        
        <ul>
          <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <li v-for="(item,index) in list" :key="index">
                <p>
                  <span>{{ item.act_name || item.name }}</span>
                  <span>{{ item.created_at }}</span>
                </p>
                <div class="order-container">
                  <div class="amount">
                    <p>红利金额: {{ item.money ? item.money  : recordstatus[item.status] }}</p> 
                    <p>流水倍数: {{ item.flow }}</p> 
                  </div>
                  <div class="select" v-if="item.status === 3" @click="gameShowFn(index)">
                    {{ item.statusText }}
                    <i class="el-icon-caret-bottom"></i>
                  </div>
                  <div class="btn">
                    <span v-if="item.status == 1">待付款</span>
                    <span v-if="item.status == 2">审核中</span>
                    <span v-if="item.status == 4">已领取</span>
                    <span v-if="item.status == 5">已转出</span>
                    <span v-if="item.status == 6">审核未通过</span>
                    <span class="receive" v-if="item.status === 3" @click="receive(item.id,index)">
                      领取 <i></i>
                    </span>
                  </div>
                </div>
            </li>
            </van-list>
          <!-- </van-pull-refresh> -->
        </ul>
      </div>
      <div class="list_empty" v-show="list.length === 0">
        <div class="emptyDiv">
          <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
            <div class="errorImg"></div>
            <div class="text">
              <div class="chinese">
                你未获取任何优惠
              </div>
            </div>
          <!-- </van-pull-refresh> -->
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar  @confirm="onConfirm" value-key="text" @cancel="onCancel" :columns="columns" />
    </van-popup>

    <!-- 开始时间 -->
    <van-popup v-model="showStartDate" position="bottom">
      <van-datetime-picker
        @confirm="onConfirmStartDate" @cancel="onCancelStartDate"
        type="date"
      />
    </van-popup>

    <!-- 结束时间 -->
    <van-popup v-model="showEndDate" position="bottom">
      <van-datetime-picker
        @confirm="onConfirmEndDate" @cancel="onCancelEndDate"
        type="date"
      />
    </van-popup>

    <!-- 游戏平台列表 -->
    <van-popup v-model="gameShow" position="bottom">
      <van-picker show-toolbar  @confirm="onGameConfirm" value-key="text" @cancel="onGameCancel" :columns="gameColumns" />
    </van-popup>

  </div>
  </div>
  
</template>

<script>
  import Lheader from '@/components/l-header'
  import { activityallrecordstatus, preferencecenter, allplatform, transbenefit } from '@/api/memberCenter'
  import Vue from 'vue'
  import { Toast } from 'vant';
  import { formateDate } from '@/utils/index'
  Vue.use(Toast);

  export default {
      name: "discountCore",
      data() {
        return {
          title: '优惠中心',
          show: false,
          showStartDate: false,
          showEndDate: false,
          discount: '全部状态',
          discountData: {
            current_page:0
          },
          columns:[],
          isLoading: false,
          recordstatus: {},
          list: [],
          finished: false,
          loading: false,
          gameShow: false,
          gameColumns: [],
          gameStatus: {},
          gameText: '选择转入平台',
          gameIdx: 0
        }
      },
      components: {
        Lheader
      },
      created() {
        var today = new Date();
        var start=new Date(today.getTime()-31 * 24 * 3600 * 1000);
        this.discountData.start_time = formateDate(start)
        this.discountData.end_time = formateDate(today)

        this.getDiscountlist()
        activityallrecordstatus().then(res=> {
          if (res.data.code === 0) {
            this.recordstatus = res.data.data
            let key = [{id:'',text:'全部状态'}]
            for (let attr in res.data.data) {
              key.push({id: attr, text: res.data.data[attr]})
            }
            this.columns = key
          }
        })
        const data = {
          access_token: window.localStorage.token,
          merchant_no: process.env.VUE_APP_MERCHANT_NO
        }
        allplatform(data).then(res=> {
            if(res.data.code === 0) {
              this.gameStatus = res.data.data
              let key = [{
                id: 0,
                text: '主账户'
              }]
              for (let attr in res.data.data) {
                key.push({id: attr, text: res.data.data[attr]})
              }
              this.gameColumns = key
            }
        })
      },
      methods: {
        onRefresh() {
          this.getDiscountlist()
        },
        getDiscountlist(isLoad) {
          preferencecenter(this.discountData).then(res=> {
            if(res.data.code ===0){
              for (let i=0;i<res.data.data.data.length;i++) {
                res.data.data.data[i].statusText = '选择转入平台'
              }
              // 加载状态结束
              this.loading = false;
              this.isLoading = false;
              if (isLoad) {
                this.list = [...res.data.data.data]
              } else {
                this.list = res.data.data.data
              }
              if (this.discountData.current_page === res.data.data.last_page) {
                this.finished = true;
              }
            }
          })
        },
        onLoad() {
          // 异步更新数据
          this.discountData.current_page++
          this.getDiscountlist(true);
        },
        onConfirm(value) {
          this.discount = value.text
          this.discountData.status = value.id
          this.getDiscountlist()
          this.show = false
        },
        onCancel(value) {
          this.show = false
        },
        onCancelStartDate(value) {
          this.showStartDate = false
        },
        onConfirmStartDate(value) {
          let date = value;
          const seperator1 = "-";
          let month = date.getMonth() + 1;
          let strDate = date.getDate();
          if (month >= 1 && month <= 9) {
            month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
          }
          this.discountData.start_time = date.getFullYear() + seperator1 + month + seperator1 + strDate
          this.getDiscountlist()
          this.showStartDate = false
        },
        onConfirmEndDate(value) {
          let date = value;
          const seperator1 = "-";
          let month = date.getMonth() + 1;
          let strDate = date.getDate();
          if (month >= 1 && month <= 9) {
            month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
          }
          this.discountData.end_time = date.getFullYear() + seperator1 + month + seperator1 + strDate
          this.getDiscountlist()

          this.showEndDate = false
        },
        onCancelEndDate(value) {
          this.showEndDate = false
        },
        onGameConfirm(value) {
          this.gameShow =false
          this.list[this.gameIdx].statusId = value.id
          this.list[this.gameIdx].statusText = value.text
        },
        onGameCancel(value) {
          this.gameShow =false
        },
        receive(id,idx) {
          if (!this.list[idx].statusId && this.list[idx].statusId != 0) {
            Toast('请先选择转入平台')
            return false
          }
          const data = {
            access_token: window.localStorage.token,
            to_platform_id: this.list[idx].statusId,
            id,
          }
          transbenefit(data).then(res=> {
            const that = this
              if (res.data.code === 0) {
                Toast({
                  message: '领取成功',
                  onClose() {
                    that.getDiscountlist()
                  }
                })
              } else {
                Toast(res.data.msg)
              }
          })
        },
        gameShowFn(idx) {
          this.gameShow = true
          this.gameIdx = idx
        }
      }
    }
</script>

<style scoped lang="less">
  .container {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    padding-top: @main-top;
    right: 0;
    bottom: @main-top;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height:100%;
    .select {
      margin: 0 @margin-10;
      color: @text-color-default;
      font-size: @font-size-14;
      height: 1.173rem;
      .van-row {
        text-align: center;
        height: 1.173rem;
        line-height: 1.173rem;
        .van-col {
          background-color: #ffffff;
          position: relative;
          &::after {
            .box-border();
          }
          &:not(:first-child)::before {
            .aagames-separation-line(.133333rem, 100%, 0, -.06666rem)
          }
        }
        .line {
          height: 1px;
          position: relative;
          top: 10px;
        }
        i {
          display: inline-block;
          width: 12px;
          height: 12px;
          // background-image: url(~@assets/img/memberCenter/dropDown.png);
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
    }
    .main {
      padding: 0;
      margin-top: 30px;
      .list {
        margin: .22222rem;
        li {
          position: relative;
          margin-top: @margin-10;
          padding: @margin-10;
          background-color: #ffff;
          &:first-child {
            margin-top: 0;
          }
          >p {
            width: 100%;
            height: 1.12rem;
            position: relative;
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            span {
              &:first-child {
                font-weight: @font-weight-600;
                font-size: @font-size-16;
                color: @text-color-default;
              }
              &:last-child {
                font-size: @font-size-14;
                color: #999999;
              }
            }
            &::after {
              .border-bottom()
            }
          }
          .order-container {
            width: 100%;
            display: inline-flex;
            justify-content: space-between;
            align-items:center;
            height: 2.29333rem;
            text-align: center;
            .amount {
              flex: 1;
              text-align: left;
              >p {
                color: #333333;
                font-size: @font-size-14;
                margin-top: @margin-5;
              }
            }
            .select {
              flex: 1;
              width: 3.41333rem;
              height: .90666rem;
              line-height: .90666rem;
              position: relative;
              &::after {
                .box-border();
                border-radius: @border-radius-5px;
              }
            }
            .btn {
              flex: 1;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              .receive {
                display: inline-block;
                background-color: #BE8D24;
                color: #ffffff;
                border-radius: @border-radius-5px;
                text-align: center;
                height: .90666rem;
                line-height: .90666rem;
                width: 1.70666rem;
                font-size: @font-size-14;
              }
            }
          }
        }
      }
    }
  }
</style>
