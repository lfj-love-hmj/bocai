<template>
  <div class="esport-shop-mall">
    <div class="shop-title">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <span>商城</span>
      <span class="query" @click="$router.push('/goodsRecord')">商品记录</span>
    </div>
    <div class="shopbox">
      <div class="i-a">
        <div class="ia-l">
          当前余额: 
          <span class="coin"></span>
          <b>{{xchangeData}}</b>狂币
        </div>
        <div class="ia-r">
          <span :class="{active: selectIndex == 1}" @click="selectIndex = 1">筹码</span>
          <span :class="{active: selectIndex == 2}" @click="selectIndex = 2">实物</span>
        </div>
      </div>
      <div class="sb-cont" v-if="selectIndex == 1">
        <div class="sb-list">
          <div class="items">
            <div class="item" v-for="(item, index) in shopLeftList" :key="index">
              <div class="bd">
                <div class="i-name">{{ item.name }}</div>
                <div class="i-photo">
                  <img :src="item.pic">
                </div>
                <div class="i-detail">
                  <div class="d-m">
                    <span class="coin"></span>
                    <b>{{item.money}}</b>狂币
                  </div>
                  <div class="d-b">
                    <span @click="open(item, 0)">兑换</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-cont" v-else>
        <div class="sb-list">
          <div class="items">
            <div class="item" v-for="(item, index) in shopRightList" :key="index">
              <div class="bd">
                <div class="i-name">{{ item.name }}</div>
                <div class="i-photo">
                  <img :src="item.pic">
                </div>
                <div class="i-detail">
                  <div class="d-m">
                    <span class="coin"></span>
                    <b>{{item.money}}</b>狂币
                  </div>
                  <div class="d-b">
                    <span @click="open(item, 1)">兑换</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import { getGoodslist, changeShop } from '@/api/shopMall'
  import { getxcoininfo } from '@/api/memberCenter'
  export default {
    components: {
    },
    computed: {
    },
    data() {
      return {
        selectIndex: 1,
        xchangeData: 0,
        shopLeftList: [],
        shopRightList: []
      }
    },
    created () {
      this.getShopMallList()
      this.getxcoininfo()
    },
    methods: {
      getShopMallList () {
        getGoodslist({ activity_id: 17 }).then(res => {
          // 现金
          this.shopLeftList = res.data.data.data.filter(o => { return o.type == 1 })
          // 实物
          this.shopRightList = res.data.data.data.filter(o => { return o.type == 2 })
        })
      },
      getxcoininfo () {
        getxcoininfo().then(res => {
          this.xchangeData = res.data.data.xCoinRemain || 0
        })
      },
      open(item, type) {
        if (type == 0 ) {
          this.$loading();
          let data = {
            activity_id: item.special_id,
            goods_id: item.id,
            real_name: item.name,
            address: ''
          }
          changeShop(data).then(res => {
            if(res.data.code == 0 ) this.$toast('兑换成功')
          })
        } else {
          this.$router.push({path: '/productsExchange', query: { name: item.name, activity_id: item.special_id, goods_id: item.id }})
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.esport-shop-mall {
    position: relative;
    flex: 1;
    background: url(../../../assets/10050/img3_0/shopMall/home_bg.jpg) no-repeat fixed;
    min-height: 100vh;
    padding-top: 88px;
  // padding-bottom: 104px;
  .shop-title {
    position: fixed;
    top: 0;
    height: 88px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    width: 100%;
    z-index: 1;
    background-color: @bg-color;
    .query {
      margin-right: 40px;
    }

    .van-icon {
      width: 30px;
      position: absolute;
      left: 0;
    }

    span:last-child {
      position: absolute;
      right: 0;
    }
  }
  .shopbox {
    .i-a {
      height: 80px;
      line-height: 80px;
      background-color: #545454;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      color: #fff;
      font-size: 32px;
      font-weight: 600;
      margin: 14px 14px 0;
      .ia-l {
        color: #c6c6c6;
        .coin {
          display: inline-block;
          width: 44px;
          height: 44px;
          background: url(../../../assets/10050/img3_0/shopMall/shop1.png) no-repeat;
          background-size: cover;
          vertical-align: middle;
          position: relative;
          bottom: 2px;
        }
        b {
          margin: 0 14px;
          color: #fff;
        }
      }
      .ia-r {
        width: 200px;
        flex: 0 0 200px;
        display: flex;
        span {
          height: 50px;
          line-height: 50px;
          font-weight: 400;
          font-size: 24px;
          flex: 1;
          text-align: center;
          background-color: rgba(0,0,0,.5);
          &:first-child {
            border-radius: 8px 0 0 8px;
          }
        }
        .active {
          background-color: #22cea9;
          color: #fff;
        }
      }
    }
    .sb-cont {
      position: relative;
      .sb-list {
        display: flex;
        .items {
          flex: 1;
          padding: 14px 10px 14px 14px;
          display: flex;
          flex-wrap: wrap;
          overflow-x: hidden;
          overflow-y: auto;
          min-height: calc(100vh - 188px);
          .item {
            width: 50%;
            flex: 0 0 50%;
            .bd {
              margin-right: 7px;
              margin-bottom: 7px;
              background-color: #434343;
              text-align: center;
              .i-name {
                background-color: #545454;
                color: #fff;
                font-weight: 600;
                font-size: 26px;
                text-align: center;
                border-bottom: 1px solid #313131;
                height: 80px;
                line-height: 80px;
              }
              .i-photo {
                width: 218px;
                height: 218px;
                margin: 0 auto;
                padding: 10px;
                img {
                  height: 160px;
                  vertical-align: middle;
                  margin-top: 20px;
                }
              }
              .i-detail {
                border-top: 1px solid #313131;
                .d-m {
                  font-size: 28px;
                  padding: 10px;
                  color: #E3E3E3;
                  margin: 10px 0;
                  .coin {
                    display: inline-block;
                    width: 48px;
                    height: 48px;
                    background: url('../../../assets/10050/img3_0/shopMall/shop1.png') no-repeat;
                    background-size: cover;
                    vertical-align: middle;
                    position: relative;
                    bottom: 2px;
                  }
                  b {
                    font-size: 36px;
                    color: #ff5e5e;
                    margin: 0 6px;
                    font-weight: 400;
                    vertical-align: middle;
                    bottom: 4px;
                    position: relative;
                  }
                }
                .d-b {
                  padding-bottom: 20px;
                  text-align: center;
                  span {
                    display: inline-block;
                    background-color: #4F4F4F;
                    color: #fff;
                    border-radius: 14px;
                    font-size: 28px;
                    height: 72px;
                    line-height: 72px;
                    width: 70%;
                    box-shadow: 0 1.93952px 4.84879px 0 rgba(0,0,0,.2);
                    cursor: pointer;
                    &:hover{
                      background-color: #222;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>