<template>
  <div class="container reportFormNew">
    <lheader :title="title" :goback="true" :get-switch="false"></lheader>
    <div class="main">
        <ReportFilterTime @onConfirm="onConfirm" type="date"/>
        <div class="list">
          <div class="table" width="100%" v-show="list.length !== 0">
              <div class="item" v-for="(item,index) in list" :key="index">
                <div class="p p1">
                  <span class="left">{{item.date}}佣金</span>
                  <span class="right">{{ item.commission }}</span>
                </div>
                <div class="p p2">
                  <div>
                    <span class="left">纯利：{{ item.profit }}</span>
                    <span>佣金比例：{{ item.rate }}</span>
                    <span class="status">{{status[item.status]}}</span>
                  </div>
                  <div>
                    <span class="left">活跃会员：{{ item.active_members }}</span>
                    <span>新增注册会员：{{ item.new_members }}</span>
                  </div>
                  <div>
                    <span class="left">存取差：{{ item.sub }}</span>
                  </div>
                </div>
                <div class="p p3">
                  <van-button @click="handleDetail(item)">查看详情</van-button>
                </div>
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
    <loading :isShow="isLoading"></loading>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import Loading from '@/components/loading';
import ReportFilterTime from '@/components/report-filter-time';
import {
  agentcommissionlog,
  // commisionsheet,
  // allcommissionstatus,
  getcommission,
  agentcommissionstatus
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
    ReportFilterTime
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
        start_text:  '开始时间',
        end_text:  '结束时间',
        page: 1,
        access_token: window.localStorage.agToken,
        size: 200,
        start_date:'',
        end_date:'',
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
    agentcommissionstatus({
      access_token: window.localStorage.agToken
    }).then(res => {
      this.status = res.data.data;
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
      // this.discountData.start_date = this.discountData.start_date.slice(0,7);
      // this.discountData.end_date = this.discountData.end_date.slice(0,7);
      // this.discountData.start_date = `${this.discountData.start_date}-01 00:00:00`;
      // this.discountData.end_date = `${this.discountData.end_date}-${new Date(this.discountData.end_date.slice(0,4),this.discountData.end_date.slice(5),0).getDate()} 23:59:59`;
      agentcommissionlog(this.discountData).then(res => {
        this.list = res.data.data.data;
        console.log(123, this.list)
        // this.list = res.data.data.list;
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
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      this.discountData.start_date = date.getFullYear() + seperator1 + month;
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
    },
    handleDetail(val) {
      window.sessionStorage.setItem('wanqu_report_detail',JSON.stringify(val))
      this.$router.push({name:'reportFormDetail'})
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
        border-bottom: 2px solid rgba(255,255,255,.06);
        .p{
          display: flex;
        }
        .p1{
          height:44px;
          font-size:32px;
          font-weight:400;
          color:rgba(204,204,204,1);
          line-height:44px;
          margin-top: 20px;
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
          font-size:24px;
          font-weight:400;
          color:rgba(153,153,153,1);
          align-items: center;
          flex-direction: column;
          >div{
            display: block;
            width: 100%;
            margin-bottom: 20px;
            &:last-child{
              margin-bottom: 0;
            }
            >span{
              display: inline-block;
              width: 33%;
              &.status{
                text-align: right;
              }
            }
          }
        }
        .p3{
          margin-top: 10px;
          font-size:24px;
          font-weight:400;
          color:rgba(82,81,82,1);
          .van-button{
            width:150px;
            height: 60px;
            margin-top: 40px;
            background-color: transparent;
            border: 2px solid @primary-color;
            .van-button__text{
              display: block;
              line-height: 60px;
              font-size: 24px;
              color: @primary-color;
            }
          }
        }
        .left{
          flex: 1;
        }
      }
    }
  }
}
</style>
