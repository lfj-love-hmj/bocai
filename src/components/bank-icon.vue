<template>
  <div>
    <van-image v-if="bankCodeArr.indexOf(code)>=0" :src="require(`@assets/img3_0/bank-svg/${code}.svg`)" />
    <van-image v-else :src="require('@assets/img3_0/deposit/default@2x.png')"></van-image>
  </div>
</template>

<script>
export default {
  name: 'BankIcon',
  props: {
    // className: {
    //   default: '',
    //   type: String
    // },
    bankCode: {
      default: 'ABC',
      type: String
    }
  },
  data() {
    return {
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
  computed: {
    code () {
      // return this.bankCode.toLowerCase()
      return this.bankCode
    }
  }
}
</script>

<style lang="less" scoped>
.van-image{
  background-color: #fff;
  padding: 6px;
  border-radius: 50%;
}
</style>