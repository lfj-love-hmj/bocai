<template>
  <div class="container agbankbind">
    <lheader rightName :title="title" @rightClick="goKefu"></lheader>
    <div class="main">
      <!-- 银行卡 -->
      <template v-if="bankList.length>0">
        <div class="bank-card-label">已绑定银行卡</div>
        <div class="flex">
          <div
            :class="['bankList', item.icon_code]"
            v-for="(item,index) in bankList"
            :key="index"
            :style="{ backgroundImage:bankCodeArr.indexOf(item.icon_code)==-1?`url(${defaultImg})`:`url(${require(`@assets/img3_0/bank-icon/bank-bg/${item.icon_code}@2x.png`)})`}">
            <div class="bank-name">
              <!-- <van-image :src="require(`@assets/img3_0/bank-icon/${item.icon_code}.png`)" /> -->
              <BankIcon :bankCode="item.icon_code" />
              {{ item.bank_name }}
            </div>
            <p class="bank-account">{{ item.card_no | cardFilter }}</p>
            <!-- <BankIcon class="icon-bg" :bankCode="item.icon_code" /> -->
          </div>
          <div class="tisp">
            温馨提示
            <br />每个会员最多可绑定4张银行卡，每张银行卡必须保持真实姓名一致，以及必须是真实独立有效的银行卡，每张银行卡只能绑定一次。如果会员绑定的银行卡和本人真实银行卡不符，那么造成的资金损失我们一律不负责。
          </div>
        </div>
        <div class="aagames-button-box">
          <button class="aagames-button btnStyle10018" type="button" @click="agentAddBank">新增银行卡</button>
        </div>
      </template>
      <template v-if="!isLoading && bankList.length ==0">
        <div class="empty aagames-button-box">
          <button class="aagames-button btnStyle10018" type="button" @click="agentAddBank">新增银行卡</button>
        </div>
        <div class="tisp">
          温馨提示
          <br />您最多可绑定4张银行卡，如需修改绑定信息请联系在线客服
        </div>
      </template>
    </div>
    <loading :isShow="isLoading"></loading>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import Loading from "@/components/loading";
import { bankcardlist } from "@/api/agent";
import BankIcon from "@/components/bank-icon";

export default {
  name: "discountCore",
  components: {
    Loading,
    Lheader,
    BankIcon
  },
  data() {
    return {
      title: "银行卡绑定",
      isLoading: false,
      bankList: [],
      defaultImg: require('@assets/img3_0/deposit/bg_default@2x.png'),
      bankCodeArr: [
        "ABC",
        "BCCB",
        "BOC",
        "BOCOM",
        "BOS",
        "CCB",
        "CEB",
        "CGB",
        "CIB",
        "CMB",
        "CMBC",
        "ECITIC",
        "HXB",
        "HZCBC",
        "ICBC",
        "NBCBC",
        "PAB",
        "PSBC",
        "SPDB"
      ]
    };
  },
  methods: {
    // 代理新增银行卡
    agentAddBank() {
      this.$router.push({ path: "/agAddBankBind" });
    },
    goKefu() {
      this.$openKefu();
      this.$store.dispatch("global/setPopShow", { status: false });
    },
    getIcon(name) {
      // let  url = require(`@assets/img/memberCenter/bank-icon/${name}.png`);
      let url = "";
      return url;
    },
    addBankCk() {
      if (this.bankList.length === 0) {
        this.$router.push("agAddBankBind");
      } else {
        this.$router.push({
          path: "/agAddBankBind",
          query: {
            name: this.bankList[0].name
          }
        });
      }
    }
  },
  filters: {
    cardFilter(val) {
      let text = "";
      // val.substring(val.length - 4)
      const reg = new RegExp(val.substring(0, val.length - 4), "g");
      for (let i = 0; i < val.length - 4; i++) {
        text += "*";
      }
      text += "  " + val.substring(val.length - 4);
      return text;
    }
  },
  created() {
    try {
      let scrollY = document.getElementsByClassName("container")[0].offsetTop;
      window.scrollTo(0, scrollY);
    } catch (error) {}
    this.isLoading = true;
    bankcardlist({ access_token: window.localStorage.agToken })
      .then(res => {
        if (res.data.code === 0) {
          this.bankList = res.data.data;
        }
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  background-color: @bg-color;
  .main {
    margin: @main-margin-top @margin-15;
    .bank-card-label{
      margin-bottom: 20px;
    }
    .bankList {
      position: relative;
      width: 690px;
      margin-bottom: @space-gap;
      border-radius: 8px;
      height: 220px;
      padding: 50px;
      color: #fff;
      background-size: 100%;
      overflow: hidden;
      &:last-child {
        margin-bottom: 0;
      }
      &.red {
        background-color: #c55055;
      }
      &.blue {
        background-color: #1965a3;
      }
      &.green {
        background-color: #018c77;
      }
      &.orange {
        background-color: #bf4129;
      }
      &.purple {
        background-color: #59236b;
      }
      .bank-name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 10px;
        /deep/ .van-image {
          // background-color: #0e0e0e;
          // border-radius: 50%;
          width: 60px;
          height: 60px;
          margin:-10px 20px 0 -10px;
        }
      }
      .bank-account {
        font-size: 48px;
        font-weight: 500;
      }
      .icon-bg {
        width: 260px;
        height: 260px;
        position: absolute;
        right: -20px;
        top: -20px;
        opacity: 0.4;
        // background-color: transparent;
      }
    }
    .tisp {
      font-size: 24px;
      font-weight: 400;
      color: rgba(204, 204, 204, 1);
      line-height: 48px;
    }
    .aagames-button-box {
      margin-top: @margin-20;
      position: fixed;
      left: 0;
      bottom: 0;
    }
  }
  .empty.aagames-button-box {
    position: relative;
  }
}
</style>
