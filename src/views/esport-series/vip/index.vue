<template>
  <div class="esport-vip">
    <es-header></es-header>
    <div class="vipbox">
      <h2>狂竞技贵宾殿堂</h2>
      <div class="items">
        <div class="item" v-for="(item, index) in vipList" :key="index" :style="{backgroundImage:$bImgs[`vip/newLevel/bg${index}@2x`]}">
          <div class="i-a">
            <img :src="$imgs['vip/newLevel/vip' + index]" alt="" class="uslv v0">
            <div class="v-name">
              <span>LEVEL-{{ index }}</span>
                {{item.name}}
            </div>
          </div>
          <div class="i-b">
            <p>
              <label>晋级条件：</label>
              <span>{{ vipInfoList[index].txt1 }}</span>
            </p> 
            <p>
              <label>晋级奖金：</label>
              <span>{{ vipInfoList[index].txt2 }}</span>
            </p>
            <p>
              <label>生日礼金：</label>
              <span>{{ vipInfoList[index].txt3 }}</span>
            </p>
            <p>
              <label>会员日礼金：</label>
              <span>{{ vipInfoList[index].txt4 }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="rule">
        <h2>贵宾条款与规则</h2>
        <p>1、贵宾等级自动晋级，当日达到晋级条件的狂竞技会员将会在次日自动晋级。</p> 
        <p>2、晋级奖金请点击“任务”栏，选择“晋级礼金”，点击“领取”即可，完成1倍投注额即可提款，奖金同时适用于体育、电竞和所有娱乐场平台。</p>
        <p>3、狂币兑换无需申请，狂币会在您投注的次日自动结算至狂币账户内。<br>
              狂币兑换示例：每10000有效投注兑换100个狂币，狂币可在狂币商城兑换成现金, 兑换比例为5:1，即100狂币兑换20元现金（需一倍流水），狂币也可在商城内兑换任意其他产品
        </p>
        <p>4、晋级之后的存款优惠，每位狂竞技会员仅限申请一次，如果您在晋级下一等级之前没有申请之前等级的存款优惠，则视为您主动放弃。</p>
        <p>
           5、若您想申请VIP存款优惠，请您在晋升相应等级之后，在存款页面选择对应的优惠代码即可。
        </p>
        <p>6、存款优惠的奖金上限统一设定为2000元，提款之前需要达到10倍的投注额，奖金同时适用于体育、电竞和所有娱乐场平台。</p>
        <p>7、狂竞技贵宾殿堂所有奖金仅针对娱乐性质的会员，如果发现或怀疑有奖金操纵，滥用和/或欺诈的证据，狂竞技将保留关闭任何玩家账户并没收任何现有资金的权利。</p>
        <p>8、狂竞技拥有对贵宾殿堂所有奖金的最终解释权。</p>
      </div>
    </div>
    <vtabbar class="m-footer" :index="2"></vtabbar>
  </div>
  
</template>

<script>
  import { memberlevellist } from '@/api/memberCenter'
  import esHeader from "../components/es-header"
  import Vtabbar from "../components/v-tabbar"
  export default {
    components: {
      Vtabbar,
      esHeader
    },
    computed: {
      vipInfoList() {
        return [
          { txt1: '(存款) 0 + (流水) 0', txt2: '0', txt3: '0', txt4: '0' },
          { txt1: '(存款) 1000 + (流水) 5000', txt2: '38', txt3: '0', txt4: '0' },
          { txt1: '(存款) 5000 + (流水) 1万', txt2: '88', txt3: '38', txt4: '0' },
          { txt1: '(存款) 1万 + (流水) 3万', txt2: '188', txt3: '88', txt4: '0' },
          { txt1: '(存款) 10万 + (流水) 50万', txt2: '588', txt3: '188', txt4: '88' },
          { txt1: '(存款) 50万 + (流水) 100万', txt2: '888', txt3: '388', txt4: '188' },
          { txt1: '(存款) 100万 + (流水) 300万', txt2: '1888', txt3: '588', txt4: '388' },
          { txt1: '(存款) 200万 + (流水) 500万', txt2: '3888', txt3: '888', txt4: '588' },
          { txt1: '(存款) 500万 + (流水) 1000万', txt2: '5888', txt3: '1888', txt4: '888' },
          { txt1: '(存款) 1000万 + (流水) 3000万', txt2: '8888', txt3: '3888', txt4: '3888' },
          { txt1: '(存款) 5000万 + (流水) 1亿', txt2: '18888', txt3: '8888', txt4: '5888' }
        ]
      }
    },
    data() {
      return {
        vipList: []
      }
    },
    created () {
      this.memberlevel()
    },
    methods: {
      // 会员等级
      async memberlevel () {
        let res = await memberlevellist()
        this.vipList = res.data.data
      }
    }
  }
</script>

<style lang="less" scoped>
.esport-vip {
  padding-top: 88px;
  padding-bottom: 104px;
  .vipbox {
    h2 {
      padding: 24px 0;
      text-align: center;
      color: #fff;
      font-size: 40px;
    }
    .items {
      .item {
        overflow: hidden;
        padding: 30px 20px;
        border-radius: 6px;
        background-color: #212121;
        color: hsla(0,0%,100%,.7);
        box-shadow: 0 0 8px rgba(0,0,0,.58);
        margin: 0 24px 24px;
        position: relative;
        background-size: 100% 100%;
        .i-a {
          display: flex;
          align-items: center;
          .uslv {
            display: inline-block;
            width: 108px;
            height: 108px;
            vertical-align: middle;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .v-name {
            margin-left: 20px;
            span {
              display: block;
              font-size: 32px;
              font-weight: 600;
              color: #fff;
              margin-bottom: 6px;
            }
          }
        }
        .i-b {
          margin-top: 30px;
          p {
            display: flex;
            padding: 4px 0;
            font-size: 26px;
            color: #BBBBBB;
          }
        }
      }
    }
    .rule {
      margin: 0 60px;
      h2 {
        padding: 24px 0;
        text-align: center;
        color: #DADADA;
        font-size: 32px;
        font-weight:600;
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 20px;
        color: #BBBBBB;
        font-size: 26px;
        line-height: 1.5;
      }
    }
  }
}
</style>