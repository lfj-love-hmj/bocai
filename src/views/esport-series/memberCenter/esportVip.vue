<template>
  <div class="esport-vip-center">
    <div class="shop-title">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <span>VIP</span>
    </div>
    <div class="bd">
      <div class="balance">
        <span class="coin"></span>
        <b>{{xchangeData}}</b>狂币
        <a href="javascript:;" @click="$router.push('/shopMall')">商城</a>
      </div>
      <div class="name">{{ levelName }}</div>
      <div class="circular">
        <div class="circular-chart">
          <div class="clip clip1">
            <div class="item"></div>
          </div>
          <div class="clip clip2">
            <div class="item"></div>
          </div>
          <div class="clip clip3">
            <div class="item"></div>
          </div>
          <div class="center clip4">
            <span>
              {{ userInfo.level }}
              <!-- {{$store.state.User.Vip[0].VIPName.replace('LEVEL-','')}} -->
            </span>
            <label>当前等级</label>
          </div>
        </div>
      </div>
      <div class="reward">
        下个晋级礼金
        <div class="r-amo">
          <span class="coin"></span>
          <b>{{ amountList[userInfo.level + 1] }}</b>元
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { memberlevellist } from '@/api/memberCenter'
import { getxcoininfo } from '@/api/memberCenter'
export default {
  data() {
    return {
      xchangeData: 0,
      levelName: '',
      userInfo: {},
      amountList: [],
      // 晋级礼金
      amountList: [ 0, 38, 88, 188, 588, 888, 1888, 3888, 5888, 8888, 18888 ],
    }
  },
  computed: {
  },
  created() {
    this.save()
    // this.getxcoininfo()
  },
  methods: {
      // 会员等级
      async memberlevel (level) {
        let res = await memberlevellist()
        let data = res.data.data
        this.levelName = data.find(item => { return item.level === level }).name
      },
      save () {
        this.$store.dispatch('users/getUserInfo').then(res => {
          this.userInfo = res
          this.memberlevel(res.level)
        })
      },
      getxcoininfo () {
        getxcoininfo().then(res => {
          this.xchangeData = res.xCoinRemain || 0
        })
      }
    }
}
</script>

<style lang="less" scoped>
.esport-vip-center {
  position: relative;
  flex: 1;
  background: url(../../../assets/10050/img3_0/shopMall/home_bg.jpg) no-repeat fixed;
  min-height: 100vh;
  padding-top: 88px;
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
  }
  .bd {
    position: relative;
    background-color: #2b2b2b;
    border-radius: 4px;
    margin: 14px;
    padding-top: 30px;
    .balance {
      position: relative;
      background-color: #1c1c1c;
      color: #757575;
      width: 440px;
      border-radius: 72px;
      margin: 0 auto;
      height: 80px;
      line-height: 80px;
      font-size: 26px;
      text-align: left;
      span {
        margin-left: 20px;
        vertical-align: middle;
        position: relative;
        bottom: 4px;
        opacity: .5;
        filter: alpha(opacity=50);
        display: inline-block;
        width: 44px;
        height: 44px;
        background: url('../../../assets/10050/img3_0/shopMall/shop1.png');
        background-size: cover;
      }
      b {
        font-size: 28px;
        margin: 0 6px;
      }
      a {
        position: absolute;
        top: 0;
        right: 0;
        width: 150px;
        height: 72px;
        display: inline-block;
        text-align: center;
        background-color: #0d0d0d;
        color: #b9b9b9;
        border-radius: 0 72px 72px 0;
      }
    }
    .name {
      font-size: 40px;
      font-weight: lighter;
      text-align: center;
      padding: 30px;
      color: #dbdbdb;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .circular {
      overflow: hidden;
      .circular-chart {
        margin: 0 auto 40px;
        position: relative;
        width: 260px;
        height: 260px;
        background-color: #3a3a3a;
        box-shadow: 0 4px 10px 0 rgba(0,0,0,.86), 0 4px 20px 0 rgba(0,0,0,.82);
        border-radius: 100%;
        .clip {
          border-radius: 50%;
          clip: rect(0,260px,260px,130px);
          height: 100%;
          position: absolute;
          width: 100%;
        }
        .clip1 {
          transform: rotate(0deg);
        }
        .clip2{
          transform: rotate(180deg);
        }
        .clip3{
          transform: rotate(0deg);
        }
        .clip4{
          background: #1c1c1c;
          border-radius: 50%;
          position: absolute;
          width: 204px;
          height: 204px;
          margin-left: 28px;
          margin-top: 26px;
          box-shadow: 0 4px 10px 0 rgba(0,0,0,.86), 0 4px 20px 0 rgba(0,0,0,.82);
          color: #fff;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          line-height: 70px;
          span {
            font-size: 80px;
            font-weight: 400;
          }
        }
      }
    }
    .reward {
      border-top: 2px solid #1c1c1c;
      padding: 26px;
      text-align: center;
      color: #888;
      .r-amo {
        padding-top: 26px;
        color: #f4d57a;
        .coin {
          width: 92px;
          height: 92px;
          display: block;
          margin: 0 auto;
          background-size: cover;
          vertical-align: middle;
          position: relative;
          bottom: 2px;
          background: url('../../../assets/10050/img3_0/shopMall/shop1.png');
          margin-bottom: 10px;
        }
        b {
          font-size: 26px;
          margin-right: 4px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>