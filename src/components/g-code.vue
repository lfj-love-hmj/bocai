<template>
  <div class="aagames-form" id="g-code">
    <div class="input iphone">
      <!-- <i v-if="withIcon" class="iconfont icon-safety"></i> -->
      <!-- <img v-if="withIcon" class="img" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/mbwt@2x.png')" alt=""> -->
      <input type="text" v-model="myCode" class="sryzm" placeholder="请输入验证码">
    </div>
	  	<button class="right-button send-sms" :disabled="!canClick" @click="countDown">{{ content }}</button>

  </div>
</template>

<script>
  import Vue from 'vue'
  import { isnum, ismail } from '@/utils/index'
  import { Toast } from 'vant'
  import { smscode } from '@/api/login'
  import { bindsmscode, setemail } from '@/api/personalData'
  import { membertranssmscode } from '@/api/agent'
  Vue.use(Toast);

  export default {
    name: "g-code",
    data() {
      return {
        content: '获取验证码',  // 按钮里显示的内容
        time: 60,
        totalTime:this.time,
        canClick: true,
        getCode: '',
        myCode: '',
        clock: ''
      }
    },
    props: {
      withIcon: {
        type: Boolean,
        default: false
      },
      withLabel: {
        type: Boolean,
        default: true
      },
      account: {
        default: '',
        type: String
      },
      bind: {
        type: Boolean,
        default: true
      },
      areaCode: {
        type: Number,
        default: 86
      },
      updateType: {
        type: Boolean,
        default: false
      }
    },
    created() {
      console.log(this.updateType);
      if (this.updateType) {
        this.time = 180
      }
    },
    methods: {
      countDown () {
        if (this.updateType) {
          if (!ismail(this.account)) {
            Toast.fail('请输入正确的邮箱地址')
            return false
          }
        } else {
          if (!isnum(this.account)) {
            Toast.fail('手机格式有误');
            return false;
          }
        }
        this.totalTime = this.time
        if (!this.canClick) return  //改动的是这两行代码
        this.canClick = false
        this.send()
        this.content = this.totalTime + '秒后重新发送'
        this.clock = window.setInterval(() => {
          this.totalTime--
          this.content = this.totalTime + '秒后重新发送'
          if (this.totalTime < 0) {
            window.clearInterval(this.clock)
            this.content = '重新发送验证码'
            this.totalTime = this.time
            this.canClick = true  //这里重新开启
          }
        },1000)
      },
      send(){
        if (this.updateType) {
          setemail({
            merchant_no:process.env.VUE_APP_MERCHANT_NO,
            email:this.account,
            access_token:window.localStorage.token
          }).then(res=>{
            if (res.data.code == 0) {
              this.getCode = res.data.data.code;
            } else {
              Toast(res.data.msg);
              window.clearInterval(this.clock)
              this.content = '重新发送验证码'
              this.totalTime = this.time
              this.canClick = true  //这里重新开启
            }
          })
        } else if (this.bind) {
          let request = ''
          if(this.$route.path === '/agMemberWithdraw') {
            request = membertranssmscode
          } else {
            request = smscode
          }
          request({
            merchant_no:process.env.VUE_APP_MERCHANT_NO,
            mobile:this.account,
            phone_area_code: this.areaCode,
            access_token:window.localStorage.agToken
          }).then(res=>{
            if (res.data.code == 0) {
              this.getCode = res.data.data.code;
            } else {
              Toast(res.data.msg);
              window.clearInterval(this.clock)
              this.content = '重新发送验证码'
              this.totalTime = this.time
              this.canClick = true  //这里重新开启
            }
          })
        } else {
          let request = ''
          if(this.$route.path === '/agMemberWithdraw') {
            request = membertranssmscode
          } else {
            request = smscode
          }
          request({
            merchant_no:process.env.VUE_APP_MERCHANT_NO,
            mobile:this.account,
            phone_area_code: '+'+this.areaCode,
            access_token:window.localStorage.agToken
          }).then(res=>{
            if (res.data.code == 0) {
              this.getCode = res.data.data.code;
            } else {
              Toast(res.data.msg);
              window.clearInterval(this.clock)
              this.content = '重新发送验证码'
              this.totalTime = this.time
              this.canClick = true  //这里重新开启
            }
          })
        }

      },
    },
    watch:{
      getCode(val) {
        this.$emit('getCode',val);
      },
      myCode(val) {
        this.$emit('myCode',val);
      },
      account(val) {
        this.account = val
      }
    }
  }
</script>

<style scoped lang="less">

  .send-sms {
    width:220px;
    height:88px;
    background: @bg-color-2;
    border-radius:8px;
    // border: 2px solid @border-color-base;
    border: none;
    position: absolute;
    right: 30px;
    top:10px;
    text-align: center;
    font-size:28px;
    white-space: nowrap;
    color:#fff;
  }
  #g-code{
    position: relative;
    .input{
      // width:440px;
    }
    .right-button{
      top:50%;
      margin-top: -34px;
      height:68px;
      line-height: 68px;
      margin-right: 10px;
    }
  }
  .input{
    // background:none !important;
    input{
      border-radius: 8px;
    }
    button{
      height:88px !important;
      line-height: 88px !important;
      color:#fff;
    }
  }
  
</style>
