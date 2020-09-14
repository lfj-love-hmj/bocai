<template>
  <div class="container agMemberDetail">
    <lheader :title="title" :goback="true" :get-switch="false"></lheader>
    <div class="main">
      <div class="list">
        <!-- <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
          :offset='50'
        > -->
          <div class="item">
            <div class="p p1">
              <div>
                <h4>{{item.username}}</h4>
                <div class="top"><i :style="{'background': item.is_online?'#7ED321':'#ccc'}"></i>{{item.is_online?'在线':'离线'}}</div>
              </div>
              <!-- <div>
                <span>有效会员</span>|
                <span>已绑定银行卡</span>|
                <span>已绑定手机号</span>
              </div> -->
              <div>
                <span>注册时间：{{item.created_at}}</span>
              </div>
              <div>
                <span>最后登录：{{item.last_login_time}}</span>
              </div>
              <van-button @click="$router.push({name:'agMemberWithdraw'})">转账</van-button>
            </div>
            <div class="p p2">
              <ReportFilterTime @onConfirm="onConfirm" type="date" />
              <div>
                <span>首存金额</span>
                <span>{{item.first_recharge_money}}</span>
              </div>
              <div>
                <span>纯利</span>
                <span>{{item.profit}}</span>
              </div>
              <div>
                <span>代充总额</span>
                <span>{{item.agent_recharge_money}}</span>
              </div>
              <div>
                <span>充值总额</span>
                <span>{{item.user_wallet_static.deposit_money}}</span>
              </div>
              <div>
                <span>提款总额</span>
                <span>{{item.user_wallet_static.draw_money}}</span>
              </div>
              <div>
                <span>红利总额</span>
                <span>{{item.user_wallet_static.benefit_money}}</span>
              </div>
              <div>
                <span>投注总额</span>
                <span>{{item.user_wallet_static.valid_bet}}</span>
              </div>
              <div>
                <span>派彩总额</span>
                <span>{{item.user_wallet_static.payout}}</span>
              </div>
              <div>
                <span>投注单数</span>
                <span>{{item.bet_totals}}</span>
              </div>
            </div>
          </div>
        <!-- </van-list> -->
      </div>
    </div>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import Loading from '@/components/loading';
import { memberlevellist, memberlist } from "@/api/agent";
import ReportFilterTime from '@/components/report-filter-time';
import moment from 'moment'

export default {
  name: "memberList",
  components: {
    Loading,
    Lheader,
    ReportFilterTime
  },
  data() {
    var self = this;
    return {
      title: "会员详情",
      showStartDate: false,
      currentDate:new Date(),
      item: {},
      minDate:new Date(2017,0,1),
      maxDate:new Date(),
      discountData: {
        page: 1,
        access_token: window.localStorage.agToken,
        size: 200,
        start_date:self.gettime(),
        end_date:self.gettime(),
        username: ''
      }
    };
  },
  async created() {
    try {
      let scrollY = document.getElementsByClassName('container')[0].offsetTop;
      window.scrollTo(0, scrollY);
    } catch (error) {

    }
    this.item = JSON.parse(window.sessionStorage.getItem('wanqu_member_detail'))
    console.log(this.item)
    this.isLoading = true;
    this.discountData.username = this.item.username
  },
  methods: {
    async onConfirm(data){
      this.discountData = {
        ...this.discountData,
        ...data
      }
      this.list =[]
      // await this.memberlevellist();
      // this.memberlist();
      memberlist({ access_token: window.localStorage.agToken,...this.discountData}).then(res => {
        this.item = res.data.data.data[0]
      });
    },
    gettime(){
      return moment().format( 'YYYY-MM-DD')
    }
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
  background-color: @bg-color;
  .main {
    padding-top: @main-top;
  }
  .paddingdiv{
    width: 100%;
    height: 1.17333rem;
  }
  /deep/.report-filter-time{
    .aagames-button-box{
      width: 220px;
    }
    .select{
      margin-left: 10px;
      width: 530px;
      .col-s,.col-e{
        font-size: 20px;
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
      box-sizing: border-box;
      .p{
        display: flex;
        flex-direction: column;
        >div{
          display: flex;
          width: 100%;
          margin-bottom: 20px;
          justify-content: space-between;
        }
      }
      .p1{
        font-size:12px;
        font-weight:400;
        color:rgba(204,204,204,1);
        border-bottom: 2px solid rgba(#fff,  .06);
        >div{
          justify-content: unset !important;
          font-size: 20px;
          h4{
            margin: 0;
            font-size: 20px;
          }
        }
        .top{
          display: inline-block;
          font-size: 20px;
          i{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: inline-block;
            margin-left: 30px;
            margin-right: 8px;
          }
        }
        .van-button{
          width:150px;
          height: 60px;
          margin-top: 40px;
          background-color: transparent;
          border: 2px solid @primary-color;
          margin-bottom: 60px;
          .van-button__text{
            display: block;
            line-height: 60px;
            font-size: 24px;
            color: @primary-color;
          }
        }        
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
      }
      .p3{
        margin-top: 10px;
        font-size:24px;
        font-weight:400;
        color:rgba(82,81,82,1);
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
    }  }
}
</style>
