<template>
  <div class="container">
    <lheader :title="title" path="111"></lheader>
    <div class="main">
      <div class="aagames-form">
        <div class="input">
          <span>&#x3000;邮箱：</span>
          <input type="text" v-model="email" placeholder="请输入邮箱地址">
        </div>
      </div>
      <div class="fill">
        <div>
          <gcode bind="true" :account="email" :updateType="true" @getCode="getCodeC" @myCode="myCodeC"></gcode>
        </div>
      </div>
      <div class="aagames-button-box btn-save">
        <button class="aagames-button" type="button" @click="send">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Lheader from '@/components/l-header'
  import { setemail, bindemail } from '@/api/personalData'
  import { ismail } from '@/utils'
  import Vue from 'vue'
  import { Toast } from 'vant';
  import Gcode from '@/components/g-code'

  Vue.use(Toast);

  export default {
    name: "discountCore",
    data() {
      return {
        title: '绑定新邮箱',
        email: '',
        getCode: '',
        code: ''
      }
    },
    components: {
      Lheader,
      Gcode
    },
    methods: {
      getCodeC(val) {
        this.getCode = val
      },
      myCodeC(val) {
        console.log(val);
        this.code = val
      },
      send() {
        if (!ismail(this.email)) {
          Toast.fail('请输入正确的邮箱地址')
          return false
        }
        bindemail({
          email:this.email,
          code:this.code,
          access_token:window.localStorage.token
        }).then(res=> {
          if (res.data.code === 0) {
            const This = this;
            Toast({
              message: '绑定成功',
              onClose() {
                This.$router.push( 'personalData')
              }
            })
          } else {
            Toast(res.data.msg);
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
	/deep/.aagames-form .input::after {
	    content: '';
	    position: absolute;
	    bottom: 0;
	    width: 100%;
	    height:0 !important;
	   background: none !important;
	}
  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    .el-main {
      padding: 0;
      margin-top: @main-margin-top;
      overflow: hidden;
      .btn-save {
        margin-top: .853333rem;
      }
    }
  }
</style>
