<template>
  <div class="container agent-form-10024">
    <lheader :goback="true" :get-switch="false" :title="title" rightName="筛选" @rightClick="onFilter"></lheader>
    <div>
      <div class="main">
        <div class="mid-line-10024"></div>
        <!--<div class="paddingdiv"></div>-->
       <!-- <div class="select">
          <van-row style="margin: 0">
            <van-col
              style="margin-right: 12px"
              class="col-s"
              span="12"
              @click.native="showStartDate = true"
            >
              {{ discountData.start_text }}
              <i></i>
            </van-col>
            <van-col class="col-e" span="12" @click.native="showEndDate = true">
              {{ discountData.end_text }}
              <i></i>
            </van-col>
          </van-row>
        </div>-->
        <div class="list">
          <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
            :offset='50'
          >
            <div class="item" v-for="(item, index) in list" :key="index">
              <div class="p p1">
                <span class="left">纯利</span>
                <span class="right">{{ item.money_gross_profit }}</span>
              </div>
              <div class="p p2">
                <span class="left">存款：{{ item.recharge }} &#12288提款：{{ item.withdraw }}</span>
                <span class="left right">派彩：{{ item.payout }} &#12288红利：{{ item.bonus }}</span>
              </div>
              <div class="p p3">
                <span class="left">{{ item.date }}</span>
                <span></span>
              </div>
            </div>
            <!--<div class="con_list">-->
              <!--<span style="width:35%">日期</span>-->
              <!--<span style="width:25%">存款/提款</span>-->
              <!--<span style="width:25%">派彩/红利</span>-->
              <!--<span style="width:15%">纯利</span>-->
            <!--</div>-->
            <!--<van-cell style="width:100%" v-for="(item, index) in list" :key="index">-->
              <!--<div class="con_list">-->
                <!--<span style="width:30%">{{ item.date }}</span>-->
                <!--<span style="width:28%">{{ item.recharge + '/' + item.withdraw }}</span>-->
                <!--<span style="width:28%">{{ item.payout + '/' + item.bonus }}</span>-->
                <!--<span style="width:14%">{{ item.money_gross_profit }}</span>-->
              <!--</div>-->
            <!--</van-cell>-->
          </van-list>

          <div class="nomore" v-if="finished && list.length !== 0">没有更多</div>
          <div class="list_empty" v-show="!isLoading && list.length === 0">
            <div class="emptyDiv">
              <div class="errorImg"></div>
              <div class="text">
                <div class="chinese">未找到相关数据</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ReportFilter type="date" v-model="filterShow" @onConfirm="onConfirm"></ReportFilter>
    <loading :isShow="isLoading"></loading>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import Loading from '@/components/loading';
import { agentsheet } from "@/api/agent";
import ReportFilter from '@/components/report-filter.vue';
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
      title: "代理报表",
      showStartDate: false,
      filterShow: false,
      currentDate:new Date(),
      isLoading: false,
      loading: false,
      showEndDate: false,
      list: [],
      finished: false,
      loadingflag:true,
      minDate:new Date(2017,0,1),
      maxDate:new Date(),
      discountData: {
        start_text: self.gettime(),
        end_text: self.gettime(),
        page: 1,
        access_token: window.localStorage.agToken,
        size: 20,
        start_date:self.gettime(),
        end_date:self.gettime(),
      }
    };
  },
  created() {
    try {
      let scrollY = document.getElementsByClassName('container')[0].offsetTop;
      window.scrollTo(0, scrollY);
    } catch (error) {

    }
    this.isLoading = true;
  },
  methods: {

    onFilter(){
      this.filterShow =true
    },
    onLoad() {
      this.agentsheetList()
    },
    onConfirm(data){
      this.list = []
      this.discountData = {
        ...this.discountData,
        ...data
      }
      this.agentsheetList();
    },
    agentsheetList() {
      agentsheet(this.discountData).then(res => {
        if(res.data.code === 0){
          this.isLoading = false;
          this.discountData.page++;
          this.loadingflag = false;
          this.list = this.list.concat(res.data.data.list);
          this.loading = false;
          if(res.data.data.list.length < this.discountData.size){
            this.finished = true;
          }
        }
      }).finally(()=>{
        this.isLoading = false;
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
      return year + "-" + month + "-" + day;
    },
    // onConfirmStartDate(value) {
    //   let date = value;
    //   const seperator1 = "-";
    //   let month = date.getMonth() + 1;
    //   let strDate = date.getDate();
    //   if (month >= 1 && month <= 9) {
    //     month = "0" + month;
    //   }
    //   if (strDate >= 0 && strDate <= 9) {
    //     strDate = "0" + strDate;
    //   }
    //   this.discountData.start_date =
    //     date.getFullYear() + seperator1 + month + seperator1 + strDate;
    //   this.discountData.start_text = this.discountData.start_date;
    //   this.discountData.page = 1;
    //   this.loadingflag = true;
    //   this.finished = false;
    //   this.isLoading = true;
    //   this.loading = false;
    //   this.list = [];
    //   //this.agentsheetList();
    //   this.showStartDate = false;
    // },
    // onConfirmEndDate(value) {
    //   let date = value;
    //   const seperator1 = "-";
    //   let month = date.getMonth() + 1;
    //   let strDate = date.getDate();
    //   if (month >= 1 && month <= 9) {
    //     month = "0" + month;
    //   }
    //   if (strDate >= 0 && strDate <= 9) {
    //     strDate = "0" + strDate;
    //   }
    //   this.discountData.end_date =
    //     date.getFullYear() + seperator1 + month + seperator1 + strDate;
    //   this.discountData.end_text = this.discountData.end_date;
    //   this.discountData.page = 1
    //   this.finished = false;
    //   this.loading = false;
    //   this.loadingflag = true;
    //   this.isLoading = true;
    //   this.list = [];
    //   //this.agentsheetList();
    //   this.showEndDate = false;
    // },
    // onCancelStartDate(value) {
    //   this.showStartDate = false;
    // },
    // onCancelEndDate(value) {
    //   this.showEndDate = false;
    // }
  }
};
</script>

<style scoped lang="less">
@keyframes rotation{
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
.container {
  min-height: 100vh;
  flex-direction: column;
  .main {
    margin-top: @main-top;
  }
  .paddingdiv{
    width: 100%;
    height: 1.17333rem;
  }
/*  .select {
    width: 100%;
    padding: 20px 20px 20px 20px;
    background-color: #f4f5f9;
    color: #222222;
    font-size: 24px;
    position: fixed;
    top: 1.17333rem;
    z-index: 999;
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
        margin-left: .24rem;
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 16px solid rgba(102, 102, 102, 1);
      }
    }
  }*/
  .list {

    margin: 20px 30px 0;
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
        color: #ccc;
      }
      .right {
        color: #FF9D3A;
      }
    }
    /*.con_list{*/
      /*width:100%;*/
      /*height: 100px;*/
      /*line-height: 100px;*/
      /*text-align: center;*/
      /*border-bottom: 2px solid #e8e8e8;*/
      /*font-size: 28px;*/
      /*font-family: PingFangSC-Regular;*/
      /*font-weight: 400;*/
      /*color: rgba(0, 0, 0, 0.65);*/
      /*span{*/
        /*display: inline-block;*/
      /*}*/
    /*}*/
    .loading_ing{
      width: 100%;
      text-align: center;
      line-height: 80px;
      position: absolute;
      bottom: -31px;
      background: white;
      color: #bd8c24;
      img{
        width:50px;
        position: relative;
        top: 15px;
      }
      .loading-1{
        width: 30px;
        height: 30px;
        position: relative;
        left: 40px;
        top:5px;
      }
      .loading-2{
        animation: rotation 1s linear infinite;
      }
    }
    .chanebac{
      background: #F3F4F9;
      color: transparent;
    }
    .nomore{
      width: 100%;
      text-align: center;
      line-height: 80px;
    }
   /* table {
      text-align: right;
      margin-top: 20px;
      border-collapse: collapse;
      thead {
        background: #fafafa;
        color: #000;
        font-size: 28px;
        font-family: PingFangSC-Medium;
        text-align: center;
        th {
          height: 90px;
          width: 25%;
          font-weight: 600;
        }
        th:first-child {
          text-align: left;
          padding-left: 20px;
          box-sizing: border-box;
          border-radius: 8px 0px 0px 0px;
        }
        th:last-child {
          border-radius: 0px 8px 0px 0px;
        }
      }

      tbody {
        color: rgba(0, 0, 0, 0.65);
        background: #fff;
        td {
          width: 25%;
          height: 100px;
          text-align: center;
          border-bottom: 2px solid #e8e8e8;
          font-size: 28px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.65);
        }
        td:first-child {
          text-align: left;
          padding-left: 20px;
          box-sizing: border-box;
        }
      }
    }*/
  }
}
</style>
