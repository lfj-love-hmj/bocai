<template>
  <div class="container moneyExchange">
    <lheader :title="title" :goback="true" :get-switch="false" rightName="筛选" @rightClick="onFilter"></lheader>
    <div class="main">
      <!-- <div class="top">
        <div v-for="(item,index) in topData">
          <p>{{item.val}}</p>
          <p>{{item.money}}</p>
        </div>
      </div> -->
      <div class="list">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
          :offset='50'
        >
          <div class="item" v-for="(item, index) in list" :key="index">
            <div class="p p1">
              <span class="left">{{accountChangeType[item.type]}}：{{item.money}}</span>
              <span class="right">{{item.created_at}}</span>
              
            </div>
            <div class="p p2">
              <span class="left"><span class="label">现余额：</span>{{item.after_money*1 + item.after_commission_money*1}}
                (代理{{item.after_money*1}}/佣金{{item.after_commission_money*1}})</span>
              <span class="right"><span class="label">帐变前余额：</span>{{item.before_money*1 + item.before_commission_money*1}}
                (代理{{item.before_money*1}}/佣金{{item.before_commission_money*1}})</span>
            </div>
            <div class="p p3">
              <van-button v-if="item.type === 6" @click="handleDetail(item)">查看详情</van-button>
            </div>
          </div>
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
    <ReportFilter type="date" v-model="filterShow" @onConfirm="onConfirm">
      <div class="select-input" slot="input">
        <p class="title">帐变类型</p>
        <div class="days">
          <div class="_day" v-for="(val,key) in accountChangeType" :key="key">
            <div class="day" :class="{active:key == typeValue}" @click="onType(key)">{{val}}</div>
          </div>
        </div>
        <input class="userInput" type="text" v-model="username" :placeholder="`输入需要搜索的会员代充账号`" />
      </div>
    </ReportFilter>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import ReportFilter from '@/components/report-filter';
import { Dialog } from "vant";
import {
  agentaccountchangetype,
  agentaccountchangelog
} from "@/api/agent";

export default {
  name: "moneyExchange",
  components: {
    Lheader,
    ReportFilter
  },
  data() {
    var self = this;
    return {
      title: "帐变记录",
      filterShow: false,
      isLoading: false,
      finished: true,
      loading: false,
      accountChangeType: {},
      username: '',
      typeValue: '0',
      topData: [
        {
          key: 'moneyTotal',
          val: '总帐变金额',
          money: 0
        },
        {
          key: 'sumTotal',
          val: '总结算金额',
          money: 0
        },
        {
          key: 'withdrawTotal',
          val: '总提款金额',
          money: 0
        },
        {
          key: 'exchangeTotal',
          val: '总转账金额',
          money: 0
        }
      ],
      list: []
    };
  },
  async created() {
    try {
      let scrollY = document.getElementsByClassName('container')[0].offsetTop;
      window.scrollTo(0, scrollY);
    } catch (error) {

    }
    this.isLoading = true;
    const {data} = await agentaccountchangetype({access_token: window.localStorage.agToken})
    this.accountChangeType = data.data
    this.accountChangeType[0] = '全部'
    this.isLoading = false
    this.onLoad()
  },
  methods: {
    onFilter(){
      this.filterShow =true
    },
    onConfirm(data){
      console.log(data, this.typeValue, this.username)
      const params = {
        type: this.typeValue,
        username: this.username,
        ...data
      }
      this.onLoad(params)
    },
    onType (value) {
      this.typeValue = value
      this.onConfirmStartDate(moment().subtract(value - 1, 'days'))
      this.onConfirmEndDate(new Date)
    },
    async onLoad(val) {
      this.loading = true
      agentaccountchangelog({access_token: window.localStorage.agToken,...val}).then(res => {
        console.log(res.data.data.data)
        this.list = res.data.data.data
        this.loading = false
      })
    },
    handleDetail(val) {
      Dialog.confirm({
        title:`转账详情`,
        showCancelButton: false,
        messageAlign: 'left',
        message: `转入会员账号：${val.username}\n转账金额：${val.money}\n注册时间：${val.register_time}\n转账时间：${val.updated_at}`
      }).then(() => {
        // window.localStorage.removeItem('agToken')
        // window.localStorage.removeItem('userInfoForAgent')
        // This.$router.push('agentHomepage')
      }).catch(() => {
        // on cancel
      })
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
    .top{
      display: flex;
      justify-content: space-between;
      padding:0 30px;
      >div{
        width: 160px;
        height: 142px;
        background-color: @bg-card-color;
        border-radius: 12px;
        p{
          &:first-child{
            color: #999;
            font-size: 24px;
            margin-top: 30px;
          }
          color: #fff;
          font-size: 28px;
          text-align: center;
          margin-top: 14px;
        }
      }
    }
    .list {
      width: 710px;
      margin: 30px auto 0;
      /*background: white;*/
      position: relative;
      .item{
        padding: 40px 0 ;
        padding-bottom: 0;
        box-sizing: border-box;
        border-bottom: 2px solid rgba(#fff,  .06);
        .p{
          display: flex;
        }
        .p1{
          height:44px;
          font-size:32px;
          font-weight:400;
          color:rgba(204,204,204,1);
          line-height:44px;
          .left{
            font-size: 30px;
          }
          .right{
            height:44px;
            font-size:32px;
            font-weight:600;
            color:@primary-color;
            line-height:44px;
            .label{
              color: #999;
              font-size: 24px;
            }
          }
        }
        .p2{
          margin-top: 20px;
          height:34px;
          font-size:24px;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:34px;
          flex-direction: column;
          .left,.right{
            font-size: 28px;
            margin-bottom: 10px;
          }
        }
        .p3{
          margin-top: 60px;
          margin-bottom: 62px;
          flex-direction: row-reverse;
          .van-button{
            width:150px;
            height: 60px;
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
        background: none;
        color: #fff;
      }
      .nomore{
        width: 100%;
        text-align: center;
        line-height: 80px;
      }  
    }
  }
}
.select-input {
  padding: 20px 0;
  font-size: 24px;
  .userInput{
    width:720px;
    height:100px;
    border-radius:8px;
    border:2px solid rgba(82,81,82,1);
    padding: 15px;
    margin: 15px;
    background:  transparent;
    color: #fff;
  }
  .title {
      height: 44px;
      font-size: 32px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 44px;
      margin: 40px 20px 20px;
  }
  .van-row {
      padding: 15px;
      box-sizing: border-box;
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
          border-radius: 6px;
          border: 1px solid rgba(235, 235, 235, 0.08);
      }
      .col-s,
      .col-e {
          color: #fff;
          height: 92px;
          border-radius: 6px;
          border: 1px solid rgba(235, 235, 235, 0.08);
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
