<template>
<div class="bankcard-page">
  <template v-if="yaboUi || esportUi">
    <van-nav-bar
        class="m-header transparent"
        :title="title"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
      <template #right>
        <img :src="$imgs['otherIcon/nav_kefu@2x']" class="kf-icon" alt="">
      </template>
    </van-nav-bar>
  </template>
  <template v-else>
    <van-nav-bar
        class="m-header transparent"
        :title="title"
        left-arrow
        :fixed="true"
        right-text="专属客服"
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
  </template>

  <div class="m-body">
    <div class="m-cells">
      <van-cell-group>
        <van-cell title="持卡人姓名">
          <template slot="default">
            <input type="text" v-model="addBank.name" :disabled="userInfo.realname" placeholder="请输入真实姓名">
          </template>
        </van-cell>
        <van-cell title="银行卡卡号">
          <template slot="default">
            <input type="text" v-model="addBank.card_no" placeholder="请输入银行卡卡号">
          </template>
        </van-cell>
        <van-cell title="请选择银行" @click="show = true">
          <div class="list-cells" slot="default">
            <div class="cell">
              <BankcardList  v-model="bankcard.id" :bankText.sync="bankcard.name" :bank.sync="bankcard">

                <div class="cell-head" v-if="bankcard.name">
                  <!-- <van-image :src="require(`@assets/img3_0/bank-icon/${bankcard.icon_code}.png`)" /> -->
                  <BankIcon :bankCode="bankcard.icon_code" />
                </div>
                <div class="cell-body">{{ bankcard.name || '请选择' }}</div>
              </BankcardList>
            </div>
          </div>
          <van-icon name="arrow" />
        </van-cell>
        <van-cell title="开户省份和城市" @click="showCityPicker = true">
          <template slot="default">
            <span>{{ province && city && `${province} ${city}` || '请选择' }}</span>
            <van-icon name="arrow"></van-icon>
          </template>
        </van-cell>
        <van-cell title="开户支行">
          <template slot="default">
            <input type="text" v-model.trim="branch" placeholder="请输入开户支行">
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="ui-buttons gap fixed">
      <van-button :loading="submiting" type="primary" @click="submit">确认绑定</van-button>
    </div>
    <div class="aagames-tips">
      温馨提示：银行卡一旦绑定如需修改请联系在线客服。
    </div>
  </div>
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
        <!--:bankcard="bankcard"-->
        <!--@onSelect="selectBankcard" />-->
    <!--</div>-->
  <!--</van-popup>-->
  <!-- 省市下拉 -->
  <van-popup v-model="showCityPicker" position="bottom">
    <van-picker
      show-toolbar
      :columns="columns"
      @change="onCityPickerChange"
      @cancel="showCityPicker = false"
      @confirm="onCityPickerConfirm"
    />
  </van-popup>
</div>
</template>

<script>
import { mapState } from 'vuex'
import ProvinceCity from '@/components/province-city-2'
import BankIcon from '@/components/bank-icon'
import BankcardList from '@/components/pop-bankcard-list'
import { member, allbanklist, addbankcard } from '@/api/memberCenter'
import areaList from '@/utils/area'

export default {
  name: "AddBankcard",
  components: {
    ProvinceCity,
    BankIcon,
    BankcardList
  },
  data() {
    return {
      title: '添加银行卡',
      submiting: false,
      show: false,
      bankcards: [],
      bankcard: {},
      addBank: {},
      branch: '',
      isName: false,
      province: "",
      city: "",
      showCityPicker: false,
      columns: [],
      yaboUi:['10024','10022','10023','10025','10026','10027','10028','10029','10033'].includes(process.env.VUE_APP_PROJECT_NAME),
      esportUi:['10050'].includes(process.env.VUE_APP_PROJECT_NAME)
    }
  },
  computed: {
    ...mapState('users', ['userInfo', 'isLogin'])
  },
  created() {
    if (!this.isLogin) {
      this.$toast('请先登录')
      this.$router.push({
        name: 'login'
      })
    }
    this.addBank.name = this.userInfo.realname
    this.getColumns()
    // allbanklist().then(res=>{
    //   if (res.data.code === 0) {
    //     this.bankcards = res.data.data
    //   }
    // })
  },
  methods: {
    getColumns() {
      this.areaData = [];
      for (let key in areaList.province_list) {
        let province = areaList.province_list[key];
        this.areaData[province] = [];
        let pCode = String(key).slice(0,2);
        if(key == 110000 || key == 120000 || key == 310000 || key == 500000) {
          for (let key1 in areaList.county_list) {
            if (String(key1).slice(0,2) == pCode) {
              this.areaData[province].push(areaList.county_list[key1]);
            }
          }
        } else {
          for (let key1 in areaList.city_list) {
            if (String(key1).slice(0,2) == pCode) {
              this.areaData[province].push(areaList.city_list[key1]);
            }
          }
        }
      }

      this.columns = [
        {
          values: Object.keys(this.areaData),
          className: 'column1'
        },
        {
          values: this.areaData['北京市'],
          className: 'column2',
          defaultIndex: 0
        }
      ]
    },
    onCityPickerChange(picker, values) {
      picker.setColumnValues(1, this.areaData[values[0]])
    },
    onCityPickerConfirm (data) {
      this.province = data[0]
      this.city = data[1]
      this.showCityPicker = false
    },
    selectBankcard (item) {
      this.bankcard = item
      this.show = false
    },
    onClickLeft () {
      if (this.$route.query.getPath) {
        this.$router.push({
          path: '/'+ this.$route.query.getPath
        })
      } else {
        this.$router.push({
          path: this.$route.query.getPath || 'bankcard'
        })
      }
    },
    onClickRight () {
      this.$openKefu()
    },
    submit() {
      const { addBank, bankcard, province, city, branch } = this
      if (!addBank.name) {
        this.$toast.fail('请输入真实姓名')
        return false
      }
      if (!/^[\u4e00-\u9fa5]{0,5}$/.test(addBank.name)) {
        this.$toast.fail('输入真实姓名，最多5汉字')
        return false
      }
      if (!addBank.card_no) {
        this.$toast.fail('请输入银行账户')
        return false
      }
      if (!/^\d{16,20}$/.test(addBank.card_no)) {
        this.$toast.fail('银行账户仅支持输入数字，16-20位')
        return false
      }
      if (!bankcard || !bankcard.id) {
        this.$toast.fail('请选择银行')
        return false
      }
      if (!province) {
        this.$toast.fail('请选择省份')
        return false
      }
      if (!city) {
        this.$toast.fail('请选择城市')
        return false
      }
      if (!branch) {
        this.$toast.fail('请填写开户分行')
        return false
      }
      this.submiting = true
      Object.assign(addBank, {
        bank_id: bankcard.id,
        bank_of_deposit: province + '-' + city + '-' + branch
      })
      addbankcard(addBank).then(res=> {
        const that = this
        if (res.data.code === 0) {
          this.$toast({
            message: '银行卡绑定成功',
            onClose() {
              that.onClickLeft()
            }
          })
          this.$store.dispatch('users/getUserInfo')
        } else {
          this.$toast.fail(res.data.msg)
        }
        this.submiting = false
      },err=> {
        this.submiting = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .bankcard-page{
    /deep/.van-cell-group{
      padding:0 30px;
    }
    .aagames-tips{
      padding-left: 30px;
    }
  }
  .cell-body{
    line-height: 80px;
    color: #fff;
  }
  .aagames-tips{
    text-align: center;
  }
</style>
