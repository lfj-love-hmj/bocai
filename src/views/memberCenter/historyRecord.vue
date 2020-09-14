<template>
  <div class="historyRecord" :class="!list.length?'empty':''">
    <lheader :title="title" path="111" ></lheader>
    <div class="container">
      <div class="main" v-if="!isloading">
        <div class="wash-money">
          <div class="money">
            <p>￥{{money || '0.00'}}</p>
            <p>累计洗码总金额</p>
          </div>
        </div>
        <div class="list" v-if="list.length && !isloading">
          <div class="detail">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="已加载全部了"
              @load="loadData"
            >
              <div class="item" v-for="(item, index) in list" :key="index">
                <div class="col t">
                  <div class="l">{{ allCates[item.game_type] }} <span v-show="item.proportion">{{ item.proportion}}%</span></div>
                  <div class="r">¥{{item.money}}</div>
                </div>
                <div class="col b">
                  <div class="l">{{ item.created_at }}</div>
                  <div class="r">洗码成功</div>
                </div>
              </div>
            </van-list>
          </div>
        </div>
      </div>
      <div class="empty" v-if="!list.length && !isloading">
        <div class="errorMoney background-image" :style="{backgroundImage: `url(${require('@assets/img3_0/otherIcon/touzhu@2x.png')})`}"></div>
        <div class="text">
          <div class="chinese">非常抱歉未查询到任何洗码记录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import { washcoderecord } from "@/api/memberCenter";
import { allgamecate } from "@/api/entertainment";
import {mapState} from 'vuex'
import { Toast } from "vant";

export default {
  name: "",
  data() {
    return {
      title: "历史记录",
      list: [
        // {
        //   created_at: "976.00", //当日本轮有效投注额
        //   money: "976.00", //未结算
        //   promotion_money: 4.88, //戏码金额
        //   proportion: 0.005, //比例
        //   game_type: 5 //游戏分类
        // },
        // {
        //   created_at: "976.00", //当日本轮有效投注额
        //   money: "976.00", //未结算
        //   promotion_money: 4.88, //戏码金额
        //   proportion: 0.005, //比例
        //   game_type: 5 //游戏分类
        // }
      ],
      platforms: {},
      data: {
        page:0
      },
      loading:false,
      finished:false,
      isloading:true,
      money:''
    };
  },
  computed:{
    ...mapState('games',['allCates'])
  },
  methods: {
    loadData() {
      this.data.page++
      this.$loading()
      washcoderecord(this.data).then(res => {
        if (res.data.code === 0) {
          // console.log('list', res.data)
          this.$toast.clear()
          const data = res.data.data;
          this.list = this.list.concat(data.data);
          this.loading =false
          this.isloading = false
          if (this.data.page >= res.data.data.last_page) {
            this.finished = true;
          }
          this.money = data.stat[4];
        }
      },err=> {
        this.$toast.clear()
      });
    },
    getPlatforms() {
      allgamecate(this.data).then(res => {
        if (res.data.code === 0) {
          this.platforms = res.data.data;
          this.loadData();
        }
      });
    }
  },
  created() {
    this.getPlatforms()
  },
  components: {
    Lheader
  }
};
</script>

<style scoped lang="less">
@import url('~@assets/styles/memberCenter/historyRecord.less');
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
  height: 100%;
  background-color: @bg-color;
  .main {
    padding: 0;
    .wash-money {
      height: 191px;
      background-color: @bg-color;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .money {
        text-align: center;
        > p:first-child {
          height: 80px;
          line-height: 80px;
          font-size: 60px;
          color: rgba(255, 255, 255, 1);
        }
        > p:last-child {
          height: 34px;
          font-size: 24px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 34px;
          margin-bottom: 40px;
        }
      }
    }
    .list {
      padding: 20px 30px;

      .detail {
        .item {
          box-sizing: border-box;
          position: relative;
          &::before {
            opacity: 0.06;
            .border-bottom();
          }
        }
        .t {
          height: 44px;
          font-size: 32px;
          font-weight: 600;
          color: rgba(177, 177, 177, 1);
          line-height: 44px;
        }
        .b {
          height: 44px;
          font-size: 32px;
          font-weight: 600;
          color: rgba(177, 177, 177, 1);
          line-height: 44px;
          .l {
            height: 24px;
            font-size: 24px;
            color: rgba(102, 102, 102, 1);
            line-height: 24px;
          }
          .r {
            height: 34px;
            font-size: 24px;
            font-weight: 400;
            color: @primary-color;
            line-height: 34px;
          }
        }
        .col {
          display: flex;

          .l {
            flex: 1;
          }
          position: relative;
        }
      }
    }
  }
  .empty {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 690px;
    margin-top: 100px;
    .errorMoney {
      width: 200px;
      margin: 0 auto;
      height: 100px;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .text {
      color: #c5cfd6;
      text-align: center;
      .chinese {
        margin-top: 60px;
        font-size: 28px;
        color: #aaaaaa;
        line-height: 48px;
      }
    }
  }
}
</style>
