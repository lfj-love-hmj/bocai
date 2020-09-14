<template>
  <div class="esport-shop-products">
    <div class="shop-title">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <span>商品兑换</span>
    </div>
    <div class="m-body">
      <div class="m-cells">
        <van-cell-group>
          <van-cell title="商品名称" class="name">
            <template slot="default">
              <input type="text" v-model="name" :disabled="true" class="disabled" placeholder="商品名称">
            </template>
          </van-cell>
          <van-cell title="真实姓名" class="realName">
            <template slot="default">
              <input type="text" v-model="real_name" placeholder="请输入真实姓名">
            </template>
          </van-cell>
          <van-cell title="省份和地区" @click="showCityPicker = true" class="realName">
            <template slot="default">
              <span>{{ province && city && `${province} ${city}` || '请选择省份/地区' }}</span>
              <van-icon name="arrow"></van-icon>
            </template>
          </van-cell>
          <van-cell title="详细地址" class="realName">
            <template slot="default">
              <input type="text" v-model.trim="address" placeholder="请输入详细地址">
            </template>
          </van-cell>
        </van-cell-group>
      </div>
      <div class="ui-buttons gap fixed">
        <van-button :loading="submiting" type="primary" @click="submit">确认</van-button>
      </div>
    </div>
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
import { changeShop } from '@/api/shopMall'
import ProvinceCity from '@/components/province-city-2'
import areaList from '@/utils/area'
export default {
  components: {
    ProvinceCity
  },
  data() {
    return {
      name: '',
      real_name: '',
      address: '',
      submiting: false,
      showCityPicker: false,
      province: '',
      city: '',
      columns: [],
    }
  },
  created() {
    this.getColumns()
    this.name = this.$route.query.name || ''
  },
  methods: {
    submit() {
      if (!this.real_name) return this.$toast.fail('请选择真实姓名')
      if (!this.province || !this.city) return this.$toast.fail('请选择省份, 城市')
      if (!this.address) return this.$toast.fail('请填写详细地址')
      this.$loading();
      let data = {
        activity_id: this.$route.query.activity_id || '',
        goods_id: this.$route.query.goods_id || '',
        real_name: this.real_name,
        address: this.province + this.city + this.address
      }
      changeShop(data).then(res => {
        if(res.data.code == 0 ) this.$toast('兑换成功')
      })
    },
    onCityPickerConfirm (data) {
      this.province = data[0]
      this.city = data[1]
      this.showCityPicker = false
    },
    onCityPickerChange(picker, values) {
      picker.setColumnValues(1, this.areaData[values[0]])
    },
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
  }
}
</script>

<style lang="less" scoped>
.esport-shop-products {
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
  .m-body {
    .m-cells{
      .van-cell-group {
        padding-right: 0.4rem;
        .name, .realName {
          padding: 0 20px;
          .van-cell__title {
            span {
              font-size: 32px;
              color: #333;
              font-weight: bold;
            }
          }
          .van-cell__value{
            span {
              // color: #999;
            }
          }
        }
        /deep/.name {
          background: #E5E5E5;
        }
      }
    }
  }
}
</style>