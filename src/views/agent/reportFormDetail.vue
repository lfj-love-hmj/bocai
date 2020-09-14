<template>
  <div class="container reportFormDetail">
    <lheader :title="title" :goback="true" :get-switch="false"></lheader>
    <div class="main">
        <div class="list">
          <div class="table" width="100%">
              <div class="item">
                <div class="p p1">
                  <div>
                    <h3>佣金状态 <span>{{status[item.status]}}</span></h3>
                  </div>
                  <div>
                    <span class="left">发放时间</span>
                    <span>{{item.send_time}}</span>
                  </div>
                  <div>
                    <span class="left">活跃用户</span>
                    <span>{{item.active_members}}</span>
                  </div>
                  <div>
                    <span class="left">总有效投注+</span>
                    <span>{{item.valid_bet}}</span>
                  </div>
                  <div>
                    <span class="left">总派奖金额</span>
                    <span>{{item.win}}</span>
                  </div>
                  <div>
                    <h4>用户输赢小记 {{(item.bet-item.win).toFixed(2)}}元</h4>
                  </div>
                </div>
                <div class="p p2">
                  <div>
                    <span class="left">总红利</span>
                    <span>{{item.bonus}}</span>
                  </div>
                  <div>
                    <h4>纯利小记 {{item.profit}}元</h4>
                  </div>
                </div>
                <div class="p p3">
                  <div>
                    <span class="left">佣金比例</span>
                    <span>{{item.rate}}</span>
                  </div>
                  <div>
                    <span class="left">总平台费</span>
                    <span>{{item.platform_fee}}</span>
                  </div>
                  <div>
                    <span class="left">佣金补发+</span>
                    <span>{{item.month_fee}}</span>
                  </div>
                  <div>
                    <span class="left">佣金扣减-</span>
                    <span>{{item.month_fee}}</span>
                  </div>
                  <div>
                    <h4>佣金 {{item.commission}}元</h4>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import Loading from '@/components/loading';
import ReportFilterTime from '@/components/report-filter-time';
import {
  commisionsheet,
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
    return {
      title: "佣金详情",
      status: [],
      item: {}
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
    this.item = JSON.parse(window.sessionStorage.getItem('wanqu_report_detail'))
  },
  methods: {

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
      margin-top: 10px;
      border-collapse: collapse;
      color: #999999;
      .item{
        box-sizing: border-box;
        .p{
          display: flex;
          align-items: center;
          flex-direction: column;
          border-bottom: 2px solid rgba(#fff,  .06);
          margin-bottom: 30px;
          >div{
            display: flex;
            width: 100%;
            margin-bottom: 20px;
            justify-content: space-between;
            h3{
              font-size: 32px;
              color: #ccc;
              margin: 32px 0;
            }
            h4{
              font-size: 28px;
              color: #ccc;
              margin: 20px 0;
            }
          }
        }
        .p1{
          font-size:24px;
          font-weight:400;
          color:rgba(153,153,153,1);
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
          color:rgba(153,153,153,1)
        }
        .left{
          flex: 1;
        }
      }
    }
  }
}
</style>
