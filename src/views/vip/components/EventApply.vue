<template>
<div>
  <van-popup
    class="custom"
    v-model="showPopup"
    closeable
    round
    close-icon-position="top-left"
    position="bottom"
    get-container="#app"
    @closed="onClosed"
  >
    <div class="pop-head">
      <h2>{{ title }}</h2>
    </div>
    <div class="pop-body">
      <div class="pop-form">
        <div class="input-field">
          <label>贵姓</label>
          <div class="input-box">
            <input type="text" v-model="applyData.name" placeholder="请输入贵姓，方便联系您">
          </div>
        </div>
        <div class="input-field">
          <label>意向时间</label>
          <div class="input-box" @click="showDate = true">
            <input type="text" readonly v-model="applyData.join_time" placeholder="您的意向时间">
            <!-- <span>选择您的意向时间</span>
            <van-icon name="arrow" /> -->
            <!-- <van-datetime-picker @confirm="onConfirmDate" @cancel="onCancelDate" type="date" /> -->
          </div>
        </div>
        <div class="input-field">
          <label>手机号码</label>
          <div class="input-box">
            <!-- <van-dropdown-menu direction="up" active-color="#9a5dff">
              <van-dropdown-item v-model="areaCode" :options="areaCodes" />
            </van-dropdown-menu>
            <input type="text" v-model="applyData.mobile" placeholder="请填写您的手机号码"> -->
            <phoneArea v-model="areaCode">
              <i class="areaNum">
                &nbsp;+{{ areaCode }}
                <img class="xiala" :src="require('@assets/img3_0/otherIcon/xiala@2x.png')" alt />
              </i>
            </phoneArea>
            <input type="text" v-model="applyData.mobile" placeholder="请填写您的手机号码">
          </div>
        </div>
        <div class="input-field">
          <van-button :loading="submiting" type="primary" @click="submit">确认提交</van-button>
        </div>
      </div>
      <van-popup v-model="showDate" position="bottom">
        <van-datetime-picker 
          v-model="join_time"
          @confirm="onConfirmDate" 
          @cancel="onCancelDate" type="date" />
      </van-popup>
    </div>
  </van-popup>
</div>
</template>

<script>
// import Pop from '@/components/pop'
import { applyActivity } from '@/api/vip'
import { formateDate } from "@/utils/index";

export default {
  name: 'EventApply',
  props: ['show', 'title', 'id','type'],
  components: {
    // Pop
  },
  data () {
    const areaCodes = [{
      text: '+86',
      value: '86'
      }, {
      text: '+63',
      value: '63'
    }]
    return {
      submiting: false,
      showDate: false,
      areaCode: areaCodes[0].value,
      applyData: {
        name: '',
        join_time: formateDate(new Date()),
        mobile: ''
      },
      join_time:new Date(),
      areaCodes
    }
  },
  // watch: {
  //   showDate(val) {
  //     if(val) {
  //       this.applyData.join_time = new Date()
  //     }
  //   }
  // },
  computed: {
    showPopup: {
      get () {
        return this.show
      },
      set (val) {
        this.$emit('update:show', val)
      }
    }
  },
  created () {},
  methods: {
    submit () {
      const { applyData } = this
      if (!applyData.name) {
        this.$toast.fail('请输入您的称呼，方便我们联系您')
        return false
      }
      if (!applyData.join_time) {
        this.$toast.fail('请输入您的意向时间')
        return false
      }
      if (!applyData.mobile) {
        this.$toast.fail('请输入您的手机号码')
        return false
      }
      if (!/^((?!169)(?!170)(?!171)1[0-9]{10})|(92[0-9]{9})|(98[0-9]{9})$/.test(applyData.mobile)) {
        this.$toast.fail('请输入正确的手机号码')
        return false
      }
      this.apply()
    },
    apply () {
      const { applyData, id, areaCode, type } = this
      const { name, join_time, mobile } = applyData
      this.submiting = true
      applyActivity({
        vip_act_id: id,
        name,
        join_time,
        mobile: '+'+areaCode + mobile,
        type
      }).then(res => {
        if (res.data.code === 0) {
          this.$toast('报名申请提交成功')
          this.$emit('update:show', false)
        } else {
          this.$toast.fail(res.data.msg)
        }
        this.submiting = false
      },err => {
        this.submiting = false
      })
    },
    onClosed () {},
    onConfirmDate (value) {
      this.join_time = value
      this.applyData.join_time = formateDate(value)
      this.showDate = false
    },
    onCancelDate (value) {
      this.showDate = false
    },
  }
}
</script>