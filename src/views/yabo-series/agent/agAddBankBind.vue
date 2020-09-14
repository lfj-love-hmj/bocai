<style scoped lang="less">
@import "./index";

.container {
  padding-top: @main-top;
  height: 100%;
  /deep/ .aagames-nav-bar{
    box-shadow:0px 4px 8px 0px rgba(0,0,0,0.06);
    z-index: 20;
  }
  .main {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    .submit-form {
      flex: 1;
      margin-top: 20px;
      .input {
        background: #fff;
        margin: 0;
        .title{
          color: #333;
          padding-left: 30px;
          font-size: 28px;
        }
        .van-icon{
          color: @text-color-2;
          font-size: 20px;
        }
        input {
          text-align: right;
          background: none;
          color: #333;
          font-size: 28px;
          padding-right: 30px;
          &::placeholder{
            color: #999;
            font-size: 28px;
          }
        }
        .van-icon{
          margin-right: 20px;
        }
        p {
        }
        /deep/ .province-city {
          flex: 1;
          height: 100%;
          display: flex;align-items: center;
          .input {
            text-align: right;
            font-size: 28px;
            &::placeholder{
              color: #999!important;
              font-size: 28px!important;
            }
          }
        }
      }
    }
    .aagames-button-box {
      margin-top: @margin-10;
      button{
        border-radius: 90px;
      }
    }
  }
}

</style>
<template>
  <div class="container agAddBankBind">
    <lheader :title="title" :goback="true" :get-switch="false" :kefu="true"></lheader>
    <div class="main">
      <div class="submit-form">
        <!-- 持卡人姓名 -->
        <div class="input">
          <p class="title">持卡人姓名</p>
          <input type="text" v-model="addBank.name" :disabled="isName" placeholder="请输入真实姓名" />
        </div>
        <!-- 银行账户 -->
        <div class="input">
          <p class="title">请输入银行卡卡号</p>
          <input type="text" v-model="addBank.card_no" placeholder="请输入银行卡卡号" />
        </div>
        <!-- 选择银行 -->
        <div class="input">
          <p class="title">请选择银行</p>
          <BankcardList style="flex: 1" v-model="addBank.bank_id" :bankText.sync="bankText">
            <input
              type="text"
              style="padding-right: 0"
              v-model="bankText"
              readonly
              @click="show = true"
              placeholder="请选择"
            />
          </BankcardList>
          <van-icon name="arrow" />
        </div>
        <!-- 选择城市 -->
        <div class="input">
          <p class="title">开户省份和城市</p>
          <province-city @update="onUpdateProvinceCity"></province-city>
          <van-icon name="arrow" />
        </div>
        <!-- <div class="aagames-select-box">
                  <div class="select">
                    <input type="text" v-model="regionText" @click="regionShow = true" readonly placeholder="请选择省份和城市">
                    <i class="el-icon-caret-bottom"></i>
                  </div>
        </div>-->
        <!-- 开户分行名称 -->
        <div class="input">
          <p class="title">开户支行</p>
          <input type="text" v-model="branch" placeholder="请输入开户支行" />
        </div>
      </div>
      <div class="aagames-button-box">
        <button class="aagames-button btnStyle10018" type="button" @click="submit">确定绑定</button>
      </div>
      <!--<div class="aagames-tips">-->
      <!--温馨提示：银行卡一旦绑定如需修改请联系在线客服。-->
      <!--</div>-->
      <!-- 银行卡下拉 -->
      <!-- 银行卡下拉 -->
      <!--<van-popup-->
      <!--class="custom"-->
      <!--v-model="show"-->
      <!--closeable-->
      <!--round-->
      <!--close-icon-position="top-left"-->
      <!--position="bottom"-->
      <!--get-container="#app"-->
      <!--&gt;-->
      <!--<div class="pop-head">-->
      <!--<h2>开户银行</h2>-->
      <!--</div>-->
      <!--<div class="pop-body">-->
      <!--<BankcardList-->
      <!--:lists="bankcards"-->
      <!--:bankcard="columns"-->
      <!--@onSelect="onConfirm" />-->
      <!--</div>-->
      <!--</van-popup>-->
      <!--<van-popup v-model="show" position="bottom">-->
      <!--<van-picker show-toolbar value-key="name" @confirm="onConfirm" @cancel="onCancel" :columns="columns"/>-->
      <!--</van-popup>-->
    </div>
    <loading :isShow="isLoading" title="提交中..."></loading>
  </div>
</template>

<script>
import Lheader from "../components/l-header";
import Loading from "@/components/loading";
import ProvinceCity from "@/components/province-city-2";
import BankcardList from "@/components/pop-bankcard-list";
import { addbankcard, allbanklist, bankcardlist } from "@/api/agent";

export default {
  name: "discountCore",
  components: {
    Loading,
    Lheader,
    ProvinceCity,
    BankcardList
  },
  data() {
    return {
      title: "新增银行卡",
      show: false,
      isName: false,
      isLoading: false,
      columns: [],
      bankText: "",
      addBank: {},
      province: "",
      city: "",
      branch: ""
    };
  },
  methods: {
    onCancel(value, index) {
      this.show = false;
    },
    onConfirm(value) {
      this.bankText = value.name;
      this.addBank.bank_id = value.id;
      this.show = false;
    },
    onUpdateProvinceCity(data) {
      this.province = data.province;
      this.city = data.city;
    },
    submit() {
      if (!this.addBank.card_no) {
        this.$toast("请输入银行账户");
        return false;
      }
      if (!this.bankText) {
        this.$toast("请选择银行");
        return false;
      }
      if (!this.province) {
        this.$toast("请选择省份");
        return false;
      }
      if (!this.city) {
        this.$toast("请选择城市");
        return false;
      }
      if (!this.branch) {
        this.$toast("请填写开户分行");
        return false;
      }
      if (!/^\d{16,20}$/.test(this.addBank.card_no)) {
        this.$toast("银行账户仅支持输入数字，16-20位");
        return false;
      }
      if (!/^[\u4e00-\u9fa5]{0,5}$/.test(this.addBank.name)) {
        this.$toast("输入真实姓名，最多5汉字");
        return false;
      }
      this.addBank.access_token = window.localStorage.agToken;
      this.addBank.bank_of_deposit = this.province + this.city + this.branch;
      this.isLoading = true;
      addbankcard(this.addBank)
        .then(res => {
          const that = this;
          if (res.data.code === 0) {
            this.$toast({
              message: "提交成功",
              onClose() {
                that.$router.push({
                  path: "agBankBind"
                });
              }
            });
          } else {
            this.$toast(res.data.msg);
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },
  created() {
    try {
      let scrollY = document.getElementsByClassName("container")[0].offsetTop;
      window.scrollTo(0, scrollY);
    } catch (error) {}
    if (this.$route.query.name) {
      this.addBank.name = this.$route.query.name;
    }
    // allbanklist({
    //   access_token: window.localStorage.agToken
    // }).then(res => {
    //   if (res.data.code === 0) {
    //     this.columns = res.data.data
    //   }
    // })
  }
};
</script>

