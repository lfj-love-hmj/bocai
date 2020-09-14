<template>
  <div class="container reportForm">
    <lheader :title="title" :goback="true" :get-switch="false" rightName="筛选" @rightClick="onFilter"></lheader>
    <div class="main">
        <!--<div class="select">-->
          <!--<van-row style="margin: 0">-->
            <!--<van-col-->
              <!--style="margin-right: 12px"-->
              <!--class="col-s"-->
              <!--span="12"-->
              <!--@click.native="showStartDate = true"-->
            <!--&gt;-->
              <!--{{ discountData.start_text }}-->
              <!--<i></i>-->
            <!--</van-col>-->
            <!--<van-col class="col-e" span="12" @click.native="showEndDate = true">-->
              <!--{{ discountData.end_text }}-->
              <!--<i></i>-->
            <!--</van-col>-->
          <!--</van-row>-->
        <!--</div>-->
        <div class="list">
          <div class="table" width="100%" v-show="list.length !== 0">
            <!--<thead>
              <tr>
                <th>
                  <span>日期</span>
                </th>
                <th>
                  <span>本月</span>
                  <span>佣金</span>
                </th>
                <th>
                  <span>累计</span>
                  <span>佣金</span>
                </th>
                <th>
                  <span>实际</span>
                  <span>佣金</span>
                </th>
                <th>
                  <span>佣金</span>
                  <span>提取</span>
                </th>
              </tr>
            </thead>-->
              <div class="item" v-for="(item,index) in list" :key="index">
                <div class="p p1">
                  <span class="left">本月佣金</span>
                  <span class="right">{{ item.month_fee }}</span>
                </div>
                <div class="p p2">
                  <span class="left">累计佣金：{{ item.history_fee }} &#12288实际佣金：{{ item.fee }}</span>
                  <span><button
                    type="button"
                    v-if="item.status === 1"
                    @click="getcommissionFn(item.month)"
                  >领取</button>
                    <span v-else :class="{current: item.status == 0}">{{ status[item.status] }}</span></span>
                </div>
                <div class="p p3">
                  <span class="left">{{ item.month }}</span>
                  <span></span>
                </div>
             <!--   <td></td>
                <td>{{ item.history_fee }}</td>
                &lt;!&ndash;<td>{{ item.gross_profit }}</td>&ndash;&gt;
                <td>{{ item.fee }}</td>
                <td>
                  <button
                    type="button"
                    v-if="item.status === 1"
                    @click="getcommissionFn(item.month)"
                  >领取</button>
                  <span v-else>{{ status[item.status] }}</span>
                </td>-->
              </div>
          </div>
          <div class="list_empty" v-show="!isLoading && list.length === 0">
            <div class="emptyDiv">
              <div class="errorImg"></div>
              <div class="text">
                <div class="chinese">未找到相关数据</div>
              </div>
            </div>
          </div>
        </div>
      <!-- 开始时间 -->
      <van-popup v-model="showStartDate" position="bottom">
        <van-datetime-picker v-model="currentDate"
         :min-date='minDate'
        :max-date="maxDate"
         @confirm="onConfirmStartDate" @cancel="onCancelStartDate" type="year-month" />
      </van-popup>

      <!-- 结束时间 -->
      <van-popup v-model="showEndDate" position="bottom">
        <van-datetime-picker  v-model="currentDate"
        :min-date='minDate'
        :max-date="maxDate"
        @confirm="onConfirmEndDate" @cancel="onCancelEndDate" type="year-month" />
      </van-popup>
    </div>
    <ReportFilter v-model="filterShow" @onConfirm="onConfirm"></ReportFilter>
    <loading :isShow="isLoading"></loading>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import Loading from '@/components/loading';
import ReportFilter from '@/components/report-filter.vue';
import {
  commisionsheet,
  allcommissionstatus,
  getcommission
} from "@/api/agent";
import Vue from "vue";
import { Dialog } from "vant";
import { userinfo } from "@/api/agent";
Vue.use(Dialog);

export default {
  name: "discountCore",
  components: {
    Loading,
    Lheader,
    ReportFilter
  },
  data() {
    var self = this;
    return {
      title: "佣金报表",
      isLoading: false,
      filterShow: false,
      showStartDate: false,
      showEndDate: false,
      currentDate:new Date(),
      minDate:new Date(2017,0),
      maxDate:new Date(),
      discountData: {
        start_text:  self.gettime(),
        end_text:  self.gettime(),
        page: 1,
        access_token: window.localStorage.agToken,
        size: 200,
        start_date:self.gettime(),
        end_date:self.gettime(),
      },
      status: [],
      list: []
    };
  },
  created() {
    try {
      let scrollY = document.getElementsByClassName('container')[0].offsetTop;
      window.scrollTo(0, scrollY);
    } catch (error) {

    }
    allcommissionstatus({
      access_token: window.localStorage.agToken
    }).then(res => {
      this.status = res.data.data;
      console.log(this.status, 7777)
    });
    this.commisionsheetList();
  },
  methods: {
    onFilter(){
      this.filterShow =true
    },
    getcommissionFn(date) {
      if (date) {
        date = date.replace(/年|月/g, "");
      }
      const That = this;
      Dialog.confirm({
        message: "是否领取佣金？"
      })
        .then(() => {
          getcommission({
            month: date,
            access_token: window.localStorage.agToken
          }).then(res => {
            if (res.data.code === 0) {
              this.$toast("领取成功");
            } else {
              this.$toast(res.data.msg);
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    gettime(){
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      if (month < 10) {
          month = "0" + month;
      }
      if (day < 10) {
          day = "0" + day;
      }
      return year + "-" + month ;
    },
    commisionsheetList() {
      this.isLoading = true;
      this.discountData.start_date = this.discountData.start_date.slice(0,7);
      this.discountData.end_date = this.discountData.end_date.slice(0,7);
      this.discountData.start_date = `${this.discountData.start_date}-01 00:00:00`;
      this.discountData.end_date = `${this.discountData.end_date}-${new Date(this.discountData.end_date.slice(0,4),this.discountData.end_date.slice(5),0).getDate()} 23:59:59`;
      commisionsheet(this.discountData).then(res => {
        this.list = res.data.data.list;
      }).finally(()=>{
        this.isLoading = false;
      });
    },
    onConfirm(data){
      this.list = []

      this.discountData = {
        ...this.discountData,
        ...data
      }
      this.commisionsheetList();
    },
    onConfirmStartDate(value) {
      let date = value;
      const seperator1 = "-";
      let month = date.getMonth() + 1;
      // let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      // if (strDate >= 0 && strDate <= 9) {
      //   strDate = "0" + strDate;
      // }
      this.discountData.start_date =
        // date.getFullYear() + seperator1 + month + seperator1 + strDate;
        date.getFullYear() + seperator1 + month;
      this.discountData.start_text = this.discountData.start_date;
      this.commisionsheetList();
      this.showStartDate = false;
    },
    onConfirmEndDate(value) {
      let date = value;
      const seperator1 = "-";
      let month = date.getMonth() + 1;
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      this.discountData.end_date =
        date.getFullYear() + seperator1 + month;
      this.discountData.end_text = this.discountData.end_date;
      this.commisionsheetList();

      this.showEndDate = false;
    },
    onCancelStartDate(value) {
      this.showStartDate = false;
    },
    onCancelEndDate(value) {
      this.showEndDate = false;
    }
  }
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: bg-color;
  .main {
    padding-top: @main-top;
  }
/*  .select {
    padding: 20px 20px 0 20px;
    background-color: #f4f5f9;
    color: #222222;
    font-size: 24px;
    .van-row {
      text-align: center;
      display: flex;
      justify-content: space-between;
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
        background: rgba(255, 255, 255, 1);
        border-radius: 6px;
        border: 1px solid rgba(235, 235, 235, 1);
      }
      .col-s,
      .col-e {
        // width:244px;
        height: 92px;
        background: rgba(255, 255, 255, 1);
        border-radius: 6px;
        border: 1px solid rgba(235, 235, 235, 1);
      }
      i {
        display: inline-block;
        margin-left: 0.24rem;
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 16px solid rgba(102, 102, 102, 1);
      }
    }
  }*/
  .list {
    width: 710px;
    margin: 0 auto;
    .table {
      margin-top: 20px;
      border-collapse: collapse;
      color: #999999;
      .item{
        padding: 40px 0 ;
        box-sizing: border-box;
        .p{
          display: flex;
        }
        .p1{
          height:44px;
          font-size:32px;
          font-weight:400;
          color:rgba(204,204,204,1);
          line-height:44px;
          .right{
            height:44px;
            font-size:32px;
            font-weight:600;
            color:@primary-color;
            line-height:44px;
          }
        }
        .p2{
          margin-top: 20px;
          height:34px;
          font-size:24px;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:34px;
        }
        .p3{
          margin-top: 10px;
          height:34px;
          font-size:24px;
          font-weight:400;
          color:rgba(82,81,82,1);
          line-height:34px;
        }
        .left{
          flex: 1;
        }
      }
    }
  }
}
</style>
