<template>
  <div class="bankcard-page bankcard-manage">
    <van-nav-bar
      class="m-header transparent"
      :title="title"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <img :src="$imgs['otherIcon/nav_kefu2@2x']" class="kf-icon" alt="">
      </template>
    </van-nav-bar>
    <div class="m-body gap">
      <!-- <ul class="bankcards">
      <li
        v-for="(item, index) in bankcards"
        :key="index"
        :class="[item.name, item.theme]"
      >
        <div class="bank-name">
          <BankIcon :bankCode="item.name" />
          {{ item.title }}
        </div>
        <p class="bank-account">6241 *** *** 7788</p>
        <BankIcon class="icon-bg" :bankCode="item.name" />
      </li>
      </ul>-->
      <ul class="bankcards">
        <li
          v-for="(item, index) in bankList"
          :key="index"
          :class="[item.icon_code,'bgSet']"
          :style="{ backgroundImage:bankCodeArr.indexOf(item.icon_code)==-1?`url(${defaultImg})`:`url(${require(`@assets/img3_0/bank-icon/bank-bg/${item.icon_code}@2x.png`)})`}"
        >
          <div class="bank-name">
            <BankIcon :bankCode="item.icon_code" />
            {{ item.bank_name }}
          </div>
          <p class="bank-account">{{ item.card_no | cardFilter }}</p>
        </li>
      </ul>
      <div class="ui-buttons">
        <van-button icon="add-o" type="primary" @click="addBankCk">添加银行卡</van-button>
      </div>
      <div class="flex aagames-tips">
        温馨提示:
        <br />您最多可绑定4张银行卡，如需修改绑定信息请联系在线客服。
      </div>
    </div>
  </div>
</template>

<script>
  import { bankcardlist } from '@/api/memberCenter'
  import BankIcon from '@/components/bank-icon'
  // import { bankcards, getBankcard } from '@/utils/bankcards'

  export default {
    name: "Bankcard",
    components: {
      BankIcon
    },
    data() {
      return {
        title: '银行卡管理',
        // bankcards,
        // getBankcard,
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
      }
    },
    methods: {
      addBankCk() {
        if(this.bankList.length>=4) {
          this.$toast.fail('最多添加4张银行卡')
          return
        }
        this.$router.push('addBankCard')
      },
			onClickLeft () {
				this.$router.push({
					name: 'memberCenter'
				})
			},
			onClickRight () {
				this.$openKefu()
			}
    },
    filters: {
      cardFilter(val) {
        let text = '';
        // val.substring(val.length - 4)
        const reg = new RegExp( val.substring(0, val.length - 4) , "g" )
        for (let i = 0; i < val.length - 4; i++) {
          if (i> 4 && i % 4 === 1) {
            text += ' *'
          } else {
            text += '*'
          }
        }
        text += '  ' + val.substring(val.length - 4);
        return text
      }
    },
    created() {
      bankcardlist().then(res=> {
        if (res.data.code === 0) {
          this.bankList = res.data.data;
        }
      })
    }
  }
</script>

<style scoped lang="less">
.bankcard-page {
  .m-body {
    padding-top: 118px;
  }
  .bankcards {
    display: flex;
    flex-wrap: wrap;
    .bgSet{
      background-size: 100%;
      background-position: center;
    }
    li {
      margin:0 auto;
      position: relative;
      width: 690px;
      margin-bottom: @space-gap;
      border-radius: 8px;
      height: 220px;
      padding: 38px;
      color: #fff;
      // background-color: #c55055;
      background-size: cover;
      background-repeat: no-repeat;
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
        /deep/.van-image {
          // background-color: #0e0e0e;
          // border-radius: 50%;
          width: 60px;
          height: 60px;
          margin-right: 20px;
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
  }
  .aagames-tips {
    padding: @space-gap 0;
    line-height: 1.5;
  }
}
</style>
