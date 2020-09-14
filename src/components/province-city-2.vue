<template>
    <div class="province-city">
        <div type="text" @click="openPopup" class="input" :class="{placeholder:!province && !city}">{{province&&city?province +
            city:'请选择'}}
        </div>
        <van-popup v-model="isShow" position="bottom">
            <van-picker show-toolbar value-key="name" @change="onChange" @confirm="onConfirm" @cancel="onCancel"
                        :columns="columns"/>
        </van-popup>
    </div>
</template>

<script>
  import areaList from '@/utils/area'

  export default {
    data () {
      return {
        province: '',
        city: '',
        isShow: false,
        columns: [],
        areaData: {},
      }
    },
    methods: {
      openPopup () {
        this.isShow = true
      },
      onChange (picker, values) {
        picker.setColumnValues(1, this.areaData[values[0]])
      },
      onConfirm (data) {
        this.province = data[0]
        this.city = data[1]
        this.$emit('update', {province: this.province, city: this.city})
        this.isShow = false
      },
      onCancel () {
        this.isShow = false
      },
      getColumns () {
        this.areaData = []
        for (let key in areaList.province_list) {
          let province = areaList.province_list[key]
          this.areaData[province] = []
          let pCode = String(key).slice(0, 2)
          if (key == 110000 || key == 120000 || key == 310000 || key == 500000) {
            for (let key1 in areaList.county_list) {
              if (String(key1).slice(0, 2) == pCode) {
                this.areaData[province].push(areaList.county_list[key1])
              }
            }
          } else {
            for (let key1 in areaList.city_list) {
              if (String(key1).slice(0, 2) == pCode) {
                this.areaData[province].push(areaList.city_list[key1])
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
            className: 'column2'
          }
        ]
      }
    },
    mounted () {
      this.getColumns()
    }
  }
</script>

<style scoped lang="less">
    .province-city {
        display: flex;
        .input {
            background: none;
            flex: 1;
            padding: 0;
            border: none;
            color: @text-color-2;
            font-size: 32px;
        }
        .placeholder{
            font-size:32px;
            font-weight:400;
            color:@text-color-2;
        }
        .right {
            padding-right: @margin-10;
        }
        /*.aagames-select-box {
          background-color: transparent;
          margin-top: @margin-10;
          padding: 0;
          .select {
            padding-right: @margin-10;
            input {
              width: 290px;
              text-align: left;
              padding: 0 @margin-15;
            }
            i {
              text-align: center;
            }
          }
        }*/
    }
</style>
